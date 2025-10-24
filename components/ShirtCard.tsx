
import React from 'react';
import type { Shirt } from '../types';

interface ShirtCardProps {
  shirt: Shirt;
  onImageClick: (imageUrl: string) => void;
}

const ShirtCard: React.FC<ShirtCardProps> = ({ shirt, onImageClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group flex flex-col">
      <div 
        className="overflow-hidden cursor-zoom-in"
        onClick={() => onImageClick(shirt.imageUrl)}
        role="button"
        aria-label={`View larger image of ${shirt.name}`}
      >
        <img 
          src={shirt.imageUrl} 
          alt={shirt.name} 
          className="w-full h-80 object-cover transform group-hover:scale-125 transition-transform duration-500 ease-in-out"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold font-headline">{shirt.name}</h3>
        <p className="text-gray-600 mt-2 flex-grow">{shirt.caption}</p>
        <a 
          href={shirt.etsyUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-4 w-full text-center bg-black text-white font-bold py-2 px-4 rounded-full uppercase hover:bg-[#66BB66] hover:text-black transition-colors duration-300"
        >
          Buy on Etsy
        </a>
      </div>
    </div>
  );
};

export default ShirtCard;
