import React, { useState, useEffect } from "react";
import "./Carousel.scss";

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isRotating, setIsRotating] = useState(true);

  useEffect(() => {
    let interval;

    if (isRotating) {
      interval = setInterval(() => {
        nextSlide();
      }, 3000); // Rotate every 3 seconds
    }

    return () => clearInterval(interval);
  }, [isRotating]);

  const rotateCarousel = () => {
    setIsRotating(!isRotating);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="carousel">
      <h2>Carousel</h2>
      <div className="carousel-container">
        <div
          className="carousel-slides"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-slide ${
                index === currentSlide ? "active" : ""
              }`}
            >
              <img src={slide.image} alt={slide.alt} />
            </div>
          ))}
        </div>
      </div>
      <button className="carousel-control prev" onClick={prevSlide}>
        Previous
      </button>
      <button className="carousel-control next" onClick={nextSlide}>
        Next
      </button>
      <button className="carousel-control rotate" onClick={rotateCarousel}>
        {isRotating ? "Stop Rotation" : "Start Rotation"}
      </button>
    </div>
  );
};

export default Carousel;
