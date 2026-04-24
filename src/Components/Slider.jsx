import { useEffect, useState } from "react";

import One from "../assets/images/slider/1.JPG";
import Two from "../assets/images/slider/2.jpeg";
import Three from "../assets/images/slider/3.jpg";
import Four from "../assets/images/slider/4.jpg";
import Five from "../assets/images/slider/5.jpg";
import Six from "../assets/images/slider/6.jpeg";
import Seven from "../assets/images/slider/7.JPG";

const slides = [
  { id: 1, image: One },
  { id: 2, image: Two },
  { id: 3, image: Three },
  { id: 4, image: Four },
  { id: 5, image: Five },
  { id: 6, image: Six },
  { id: 7, image: Seven },
];

// 👉 clone first slide
const extendedSlides = [...slides, slides[0]];

export default function Slider() {
  const [current, setCurrent] = useState(0);
  const [transition, setTransition] = useState(true);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Handle reset without jump
  useEffect(() => {
    if (current === slides.length) {
      setTimeout(() => {
        setTransition(false);
        setCurrent(0);
      }, 700); // match transition duration

      setTimeout(() => {
        setTransition(true);
      }, 750);
    }
  }, [current]);

  const prevSlide = () => {
    if (current === 0) {
      setTransition(false);
      setCurrent(slides.length - 1);

      setTimeout(() => {
        setTransition(true);
      }, 50);
    } else {
      setCurrent((prev) => prev - 1);
    }
  };

  const nextSlide = () => {
    setCurrent((prev) => prev + 1);
  };

  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden md:pt-20">

      {/* Slides */}
      <div
        className={`flex h-full ${
          transition ? "transition-transform duration-700 ease-in-out" : ""
        }`}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {extendedSlides.map((slide, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <img
              src={slide.image}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-6 -translate-y-1/2 bg-black/50 text-white px-4 py-2 rounded-full"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-6 -translate-y-1/2 bg-black/50 text-white px-4 py-2 rounded-full"
      >
        ❯
      </button>
    </div>
  );
}