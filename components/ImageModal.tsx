import React, { useState, useEffect, useRef } from 'react';

interface ImageModalProps {
  imageUrl: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ imageUrl, onClose }) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const dragStartRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);
  
  // Reset position when zooming all the way out
  useEffect(() => {
    if (scale === 1) {
      setPosition({ x: 0, y: 0 });
    }
  }, [scale]);

  const handleWheel = (event: React.WheelEvent) => {
    event.preventDefault();
    const zoomFactor = 1.1;
    if (event.deltaY < 0) {
      // Zoom in
      setScale(prevScale => Math.min(prevScale * zoomFactor, 30));
    } else {
      // Zoom out
      setScale(prevScale => Math.max(1, prevScale / zoomFactor));
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0 || scale <= 1) return;
    e.preventDefault();
    setIsDragging(true);
    dragStartRef.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    setPosition({
      x: e.clientX - dragStartRef.current.x,
      y: e.clientY - dragStartRef.current.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleZoom = (direction: 'in' | 'out') => {
    const zoomFactor = 1.5; // A bigger jump for buttons
    if (direction === 'in') {
        setScale(prevScale => Math.min(prevScale * zoomFactor, 30));
    } else {
        setScale(prevScale => Math.max(1, prevScale / zoomFactor));
    }
  };

  const resetZoom = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="relative w-full h-full max-w-[95vw] max-h-[95vh] flex justify-center items-center overflow-hidden rounded-lg"
        onClick={(e) => e.stopPropagation()}
        onWheel={handleWheel}
      >
        <img 
          ref={imageRef}
          src={imageUrl} 
          alt="Enlarged shirt design" 
          className="max-w-full max-h-full object-contain select-none"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in',
            transition: isDragging ? 'none' : 'transform 0.1s ease-out',
            touchAction: 'none'
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          draggable="false"
        />
      </div>

      {/* Controls */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/60 backdrop-blur-sm p-2 rounded-full shadow-lg z-10">
        <button 
          onClick={(e) => { e.stopPropagation(); handleZoom('out'); }} 
          className="p-2 text-white hover:bg-white/20 rounded-full transition-colors" 
          aria-label="Zoom out"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" /></svg>
        </button>
        <button 
          onClick={(e) => { e.stopPropagation(); resetZoom(); }} 
          className="px-4 py-2 text-white font-semibold text-sm hover:bg-white/20 rounded-full transition-colors"
        >
          Reset
        </button>
        <button 
          onClick={(e) => { e.stopPropagation(); handleZoom('in'); }} 
          className="p-2 text-white hover:bg-white/20 rounded-full transition-colors" 
          aria-label="Zoom in"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m-3-3h6" /></svg>
        </button>
      </div>

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/75 transition-colors z-10"
        aria-label="Close image view"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default ImageModal;