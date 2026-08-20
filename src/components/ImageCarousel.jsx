import { useState } from 'react';

export default function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <header className="relative w-full h-[397px]">
      <div className="absolute top-4 left-4 z-20">
        <button className="w-10 h-10 flex items-center justify-center bg-surface/80 backdrop-blur-md rounded-full text-on-surface transition-transform active:scale-95">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
      </div>
      <div className="absolute top-4 right-4 z-20 flex gap-2">
        <button className="w-10 h-10 flex items-center justify-center bg-surface/80 backdrop-blur-md rounded-full text-on-surface transition-transform active:scale-95">
          <span className="material-symbols-outlined">share</span>
        </button>
        <button className="w-10 h-10 flex items-center justify-center bg-surface/80 backdrop-blur-md rounded-full text-on-surface transition-transform active:scale-95">
          <span className="material-symbols-outlined">favorite</span>
        </button>
      </div>

      <div className="w-full h-full bg-surface">
        <img
          className="w-full h-full object-cover"
          src={images[currentIndex]}
          alt="Product showcase"
        />
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-${index === currentIndex ? '6' : '1.5'} h-1.5 ${
              index === currentIndex ? 'bg-primary' : 'bg-surface/50'
            } rounded-full`}
          />
        ))}
      </div>

      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-surface/80 backdrop-blur-md rounded-full text-on-surface transition-transform active:scale-95"
        onClick={goToPrevious}
      >
        <span className="material-symbols-outlined">chevron_left</span>
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-surface/80 backdrop-blur-md rounded-full text-on-surface transition-transform active:scale-95"
        onClick={goToNext}
      >
        <span className="material-symbols-outlined">chevron_right</span>
      </button>
    </header>
  );
}
