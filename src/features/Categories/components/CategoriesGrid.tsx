import Slider from "react-slick";
import type { Category } from "../../../types/types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Arrow komponentləri
const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className="absolute right-[-5px] top-1/2 -translate-y-1/2 bg-green-400 text-white rounded-full w-8 h-8 flex items-center justify-center z-10 hover:bg-blue-600"
      onClick={onClick}
    >
      &gt;
    </button>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className="absolute left-[-5px] top-1/2 -translate-y-1/2 bg-green-400 text-white rounded-full w-8 h-8 flex items-center justify-center z-10 hover:bg-blue-600"
      onClick={onClick}
    >
      &lt;
    </button>
  );
};

interface CategoryModalProps {
  categories: Category[];
  onSelect: (category: Category) => void;
}

const CategoriesGrid = ({ categories, onSelect }: CategoryModalProps) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          
          slidesToShow: 5,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  return (
    <div className="my-4 rounded max-w-7xl mx-auto relative overflow-visible">
      <Slider {...settings}>
        {categories?.map((cat, idx) => (
          <div
            key={idx}
            className={`
              ${cat.color} flex flex-col items-center justify-center
              text-center h-28 rounded-2xl shadow-md hover:shadow-xl hover:scale-105
              transition transform cursor-pointer 
            `}
            onClick={() => onSelect(cat)}
          >
            {/* Icon */}
            <cat.icon className="text-3xl md:text-4xl text-gray-800" />

            {/* Text */}
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
