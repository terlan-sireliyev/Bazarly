import React from "react";
import Slider from "react-slick";
import type { Category } from "../../../types/types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Arrow Props
interface ArrowProps {
  onClick?: () => void;
}

// Custom Next Arrow
const NextArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <button
      aria-label="Next category"
      className="absolute right-[-5px] top-1/2 -translate-y-1/2 bg-green-400 text-white rounded-full w-8 h-8 flex items-center justify-center z-10 hover:bg-blue-600"
      onClick={onClick}
    >
      &gt;
    </button>
  );
};

// Custom Prev Arrow
const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <button
      aria-label="Previous category"
      className="absolute left-[-5px] top-1/2 -translate-y-1/2 bg-green-400 text-white rounded-full w-8 h-8 flex items-center justify-center z-10 hover:bg-blue-600"
      onClick={onClick}
    >
      &lt;
    </button>
  );
};

// Component Props
interface CategoryModalProps {
  categories: Category[];
  onSelect: (category: Category) => void;
}

const CategoriesGrid: React.FC<CategoryModalProps> = ({ categories, onSelect }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    adaptiveHeight: true,
    swipeToSlide: true, // better touch support
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToScroll: 1,
    slidesToShow: 6, // Desktop default
    responsive: [
      {
      breakpoint: 1280, // ≤1279px → tablet
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 640, // ≤639px → mobile
      settings: {
        slidesToShow: 3,
      },
    },
    ],
  };

  return (
    <div className="my-4 rounded max-w-7xl mx-auto relative overflow-visible">
      <Slider {...settings}>
        {categories?.map((cat) => (
          <div
            key={cat.id} // use unique ID
            className={`
              ${cat.color} flex flex-col items-center justify-center
              text-center h-28 rounded-2xl shadow-md hover:shadow-xl hover:scale-105
              transition transform cursor-pointer
            `}
            onClick={() => onSelect(cat)}
          >
            <cat.icon className="text-3xl md:text-4xl text-gray-800" />
            <span className="mt-2 text-sm sm:text-lg font-semibold text-gray-700 text-center leading-tight">
              {cat.name}
            </span>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CategoriesGrid;
