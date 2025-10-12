
import React, { useState, useEffect, useRef } from 'react';
import { BANNER_IMAGES } from '../constants';

const Banner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = window.setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex === BANNER_IMAGES.length - 1 ? 0 : prevIndex + 1
        ),
      4000
    );

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  return (
    <div className="relative w-full h-64 md:h-96 overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {BANNER_IMAGES.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Banner image ${index + 1}`}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>
       <div className="absolute inset-0 bg-black/30"></div>
       <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Precision in Every Mould</h2>
        <p className="mt-2 md:mt-4 text-lg md:text-xl max-w-2xl">Engineering high-quality plastic injection moulds for automotive, medical, and consumer industries.</p>
       </div>
    </div>
  );
};

export default Banner;
