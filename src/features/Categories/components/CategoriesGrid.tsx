import Slider from "react-slick";
import type { Category } from "../../../types/types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CategoryModalProps {
  categories: Category[];
  onSelect: (category: Category) => void;
}

const CategoriesGrid = ({ categories, onSelect }: CategoryModalProps) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,       // Desktop
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024, // Planşet
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 640, // Mobil
        settings: {
          slidesToShow: 4, // 4 card hər sıra
          slidesToScroll: 1,
          arrows: false,
          swipeToSlide: true,
        },
      },
    ],
  };

  return (
    <div className="my-4 rounded max-w-7xl mx-auto">
      <Slider {...settings}>
        {categories?.map((cat, idx) => (
          <div
            key={idx}
            className={`
              ${cat.color} flex flex-col items-center justify-center
              h-28 rounded-2xl shadow-md hover:shadow-xl hover:scale-105
              transition transform cursor-pointer p-2
              sm:w-[22%]  // Mobil üçün width-i % ilə veririk
              md:w-auto
            `}
            onClick={() => onSelect(cat)}
          >
            <cat.icon className="text-3xl md:text-4xl mt-3 text-gray-800" />
            <span className="mt-2 text-sm sm:text-lg font-semibold text-gray-700 text-center px-1 leading-tight">
              {cat.name}
            </span>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CategoriesGrid;
