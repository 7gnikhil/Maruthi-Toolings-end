import React from 'react';
import { BANNER_IMAGES } from '../constants';

const Banner: React.FC = () => {
  return (
    <div className="relative w-full h-64 md:h-96 bg-gray-900">
      {/* Scrollable container */}
      <div className="absolute inset-0 overflow-x-auto overflow-y-hidden snap-x snap-mandatory custom-scrollbar">
        <div className="flex h-full w-max">
          {BANNER_IMAGES.map((src, index) => (
            <div key={index} className="w-screen h-full flex-shrink-0 relative snap-center">
              <img
                src={src}
                alt={`Banner image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

       {/* Gradient overlay and text */}
       <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
       <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4 pointer-events-none">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight drop-shadow-md">Precision in Every Mould</h2>
        <p className="mt-2 md:mt-4 text-lg md:text-xl max-w-2xl drop-shadow-md">Engineering high-quality plastic injection moulds for automotive, medical, and consumer industries.</p>
       </div>
    </div>
  );
};

export default Banner;