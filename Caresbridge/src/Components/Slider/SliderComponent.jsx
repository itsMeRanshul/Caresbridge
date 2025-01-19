import React, { useState, useEffect } from "react";

const SliderComponent = () => {
  const slides = [
    { id: 1, title: "Slide 1", image: "/assets/Screenshot 2025-01-14 002455.png" },
    { id: 2, title: "Slide 2", image: "/assets/Screenshot 2025-01-14 002455.png" },
    { id: 3, title: "Slide 3", image: "/assets/Screenshot 2025-01-14 002455.png" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-screen mt-4 mx-auto overflow-hidden">
      {/* Slider */}
      <div
        className="flex transition-transform duration-[1200ms] ease-[cubic-bezier(0.77, 0, 0.175, 1)] transform"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`min-w-full flex-shrink-0 transition-opacity duration-[800ms] ${
              index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-[400px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover"
            />
            <h3 className="text-center text-lg md:text-xl font-medium mt-2 md:mt-4">
              {slide.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 transition-transform duration-300 hover:scale-110"
        onClick={prevSlide}
      >
        &#8249;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 transition-transform duration-300 hover:scale-110"
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
            className={`w-3 h-3 rounded-full transition-colors duration-300 transform hover:scale-125 ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          img {
            height: 250px;
          }
        }
      `}</style>
    </div>
  );
};

export default SliderComponent;
