// SliderComponent.jsx
import React, { useState } from "react";
const SliderComponent = () => {
  const slides = [
    { id: 1, title: "Slide 1", image: "../Components../src./public/assets/Screenshot 2025-01-14 002455.png" },
    { id: 2, title: "Slide 2", image: "/assets/Screenshot 2025-01-14 002455.png" },
    { id: 3, title: "Slide 3", image: "/assets/Screenshot 2025-01-14 002455.png" },
  ];
  

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-4/5 mx-auto overflow-hidden">
      {/* Slider */}
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full flex-shrink-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full rounded-lg"
            />
            <h3 className="text-center text-xl font-medium mt-4">
              {slide.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-900"
        onClick={prevSlide}
      >
        &#8249;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-900"
        onClick={nextSlide}
      >
        &#8250;
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderComponent;
