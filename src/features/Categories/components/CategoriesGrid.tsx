import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import type { Category } from "../../../types/types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CategoryModalProps {
  categories: Category[];
  onSelect: (category: Category) => void;
}

const CategoriesGrid: React.FC<CategoryModalProps> = ({
  categories,
  onSelect,
}) => {
  const [slidesToShow, setSlidesToShow] = useState(5);
  const [isDesktop, setIsDesktop] = useState(true);
  const sliderRef = useRef<Slider | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setSlidesToShow(4); // mobil
        setIsDesktop(false);
      } else if (width < 1024) {
        setSlidesToShow(6); // tablet
        setIsDesktop(false);
      } else {
        setSlidesToShow(7); // desktop
        setIsDesktop(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "40px",
    slidesToShow,
    swipeToSlide: true,
    arrows: false, // slick-in default oxlarını gizlədirik
  };

  return (
    <div className="slider-container w-full mx-auto relative">
      {/* Slider */}
      <Slider ref={sliderRef} {...settings}>
        {categories?.map((cat, idx) => (
          <div
            key={idx}
            className={`
    ${cat.color} flex-none flex flex-col items-center
    text-center rounded-2xl shadow-md hover:shadow-xl hover:scale-105
    transition transform cursor-pointer
    h-20 w-28 sm:h-26 max-sm:h-20 sm:w-32 md:h-26 md:w-36 lg:h-40 lg:w-40
    px-2 my-2.5
  `}
            onClick={() => onSelect(cat)}
          >
            <div className="flex flex-col m-auto items-center max-lg:m-0 max-md:mt-2 max-sm:mt-0  ">
              {/* Icon həmişə yuxarıda qalsın */}
              <cat.icon className="mt-2 text-2xl sm:text-3xl md:text-4xl text-gray-800" />

              {/* Text iconun altında sərbəst uzansın */}
              <span className="mt-2 text-[12px]   sm:text-sm md:text-base font-semibold text-gray-700 text-center    ">
                {cat.name}
              </span>
            </div>
          </div>
        ))}
      </Slider>

      {/* Yalnız desktop üçün düymələr */}
      {isDesktop && (
        <>
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="absolute left-[-10px] top-1/2 -translate-y-1/2 bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center shadow hover:bg-blue-600 transition"
          >
            {"<"}
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="absolute right-[-10px] top-1/2 -translate-y-1/2 bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center shadow hover:bg-blue-600 transition"
          >
            {">"}
          </button>
        </>
      )}
    </div>
  );
};

export default CategoriesGrid;
