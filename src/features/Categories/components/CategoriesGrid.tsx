import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import type { Category } from "../../../types/types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Arrow Props
interface ArrowProps {
  onClick?: () => void;
}

// Custom Next Arrow
const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    aria-label="Next category"
    className="absolute right-[-5px] top-1/2 -translate-y-1/2 bg-green-400 text-white rounded-full w-8 h-8 flex items-center justify-center z-10 hover:bg-blue-600"
    onClick={onClick}
  >
    &gt;
  </button>
);

// Custom Prev Arrow
const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    aria-label="Previous category"
    className="absolute left-[-5px] top-1/2 -translate-y-1/2 bg-green-400 text-white rounded-full w-8 h-8 flex items-center justify-center z-10 hover:bg-blue-600"
    onClick={onClick}
  >
    &lt;
  </button>
);

// Component Props
interface CategoryModalProps {
  categories: Category[];
  onSelect: (category: Category) => void;
}

const CategoriesGrid: React.FC<CategoryModalProps> = ({ categories, onSelect }) => {
  const [slidesToShow, setSlidesToShow] = useState(6);

  // Window width görə slides sayını təyin et
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setSlidesToShow(4);       // mobile
      else if (width < 1024) setSlidesToShow(5); // tablet
      else setSlidesToShow(6);                   // desktop
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    adaptiveHeight: true,
    swipeToSlide: true,
    slidesToScroll: 1,
    slidesToShow,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="my-4 rounded w-full mx-auto relative overflow-visible">
      <Slider {...settings}>
        {categories?.map((cat, idx) => (
          <div
            key={idx}
            className={`
              ${cat.color} flex flex-col items-center justify-center
              text-center rounded-2xl shadow-md hover:shadow-xl hover:scale-105
              transition transform cursor-pointer
              h-10 max-sm:h-24 md:h-30 lg:h-30   // Mobile h-20, tablet h-28, desktop h-32
              w-24 sm:w-36 md:w-40    // Mobile w-24, tablet w-36, desktop w-40
              px-2
            `}
            onClick={() => onSelect(cat)}
          >
            <cat.icon className="text-2xl sm:text-3xl md:text-4xl text-gray-800" />
            <span className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base font-semibold text-gray-700 text-center leading-tight">
              {cat.name}
            </span>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CategoriesGrid;
