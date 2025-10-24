
import React, { useState } from 'react';
import { shirts } from '../constants';
import { Tag } from '../types';
import ShirtCard from './ShirtCard';
import ImageModal from './ImageModal';

const Shop: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const pickleballShirts = shirts.filter(shirt => !shirt.tags.includes(Tag.COZY));
  const cozyShirts = shirts.filter(shirt => shirt.tags.includes(Tag.COZY));

  return (
    <>
      <section id="shop" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-headline font-bold uppercase">Our Designs</h2>
            <p className="text-gray-600 mt-2">Guaranteed to make your opponents smile (before you smash it).</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {pickleballShirts.map(shirt => (
              <ShirtCard key={shirt.id} shirt={shirt} onImageClick={handleImageClick} />
            ))}
          </div>

          {cozyShirts.length > 0 && (
            <>
              <div className="text-center my-12 pt-12 border-t border-gray-200">
                <h2 className="text-4xl md:text-5xl font-headline font-bold uppercase">Cozy Corner</h2>
                <p className="text-gray-600 mt-2">For those perfect, relaxing moments off the court.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {cozyShirts.map(shirt => (
                  <ShirtCard key={shirt.id} shirt={shirt} onImageClick={handleImageClick} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
      {selectedImage && <ImageModal imageUrl={selectedImage} onClose={handleCloseModal} />}
    </>
  );
};

export default Shop;
