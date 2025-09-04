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
    className="absolute right-[-9px] max-sm:rounded-tl-md 
  max-sm:rounded-bl-md
  max-sm:top-[50px] top-1/2 rounded-full -translate-y-1/2 bg-green-400 text-white w-7 h-7 max-sm:h-19  flex items-center justify-center z-10 hover:bg-blue-600"
    onClick={onClick}
  >
    {window.innerWidth < 640 ? ">" : ">"}
  </button>
);

// Custom Prev Arrow
const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    aria-label="Previous category"
    className="absolute 
    max-sm:rounded-tr-md 
    max-sm:rounded-br-md
 left-[-9px] sm:rounded-full rounded-full  max-sm:top-[50px]    top-1/2 -translate-y-1/2 bg-green-400 text-white w-7 h-7 max-sm:h-19  flex items-center justify-center z-10 hover:bg-blue-600"
    onClick={onClick}
  >
    {window.innerWidth < 640 ? "<" : "<"}
  </button>
);

// Component Props
interface CategoryModalProps {
  categories: Category[];
  onSelect: (category: Category) => void;
}

const CategoriesGrid: React.FC<CategoryModalProps> = ({
  categories,
  onSelect,
}) => {
  const [slidesToShow, setSlidesToShow] = useState(6);

  // Window width görə slides sayını təyin et
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setSlidesToShow(4); // mobile
      else if (width < 1024) setSlidesToShow(5); // tablet
      else setSlidesToShow(6); // desktop
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: false, // Slayderin altında göstərici nöqtələr (pagination dots) göstərilsinmi? (false = göstərilməsin)
    infinite: true, // Sonsuz dövr (loop) rejimi: sonuncudan sonra birinciyə qayıtsın
    speed: 500, // Slayd keçidi sürəti (ms ilə) → 500ms = 0.5 saniyə
    adaptiveHeight: true, // Slaydın hündürlüyü kontentə görə avtomatik uyğunlaşsın
    swipeToSlide: true, // İstifadəçi barmağı/maus ilə sürüşdürəndə birbaşa həmin slayda keçsin
    slidesToScroll: 1, // Hər dəfə sürüşəndə neçə slayd keçsin (1 = bir-bir keçsin)
    slidesToShow, // Eyni anda neçə slayd göstərilsin (dinamik olaraq state-dən gəlir)
    // autoplay: true, // Slaydlar avtomatik keçsin
    // autoplaySpeed: 2000, // Avtomatik keçid sürəti (ms ilə) → 2000ms = 2 saniyə
    pauseOnHover: true, // Maus üstünə gələndə autoplay dayansın (false etsən, dayanmadan davam edəcək)
    nextArrow: <NextArrow />, // İrəli (sağ) düyməsi üçün custom arrow komponenti
    prevArrow: <PrevArrow />, // Geri (sol) düyməsi üçün custom arrow komponenti
  };

  return (
    <div className="mb-6 rounded w-full mx-auto relative overflow-visible">
      <Slider {...settings}>
        {categories?.map((cat, idx) => (
          <div
            key={idx}
            className={`
    ${cat.color} flex-none flex flex-col items-center justify-center
    text-center rounded-2xl shadow-md hover:shadow-xl hover:scale-100.5
    transition transform cursor-pointer
    h-20 w-28 sm:h-32 sm:w-32 md:h-36 md:w-36 lg:h-40 lg:w-40
    px-2 my-2.5
  `}
            onClick={() => onSelect(cat)}
          >
            <cat.icon className="text-2xl sm:text-3xl md:text-4xl text-gray-800" />
            <span className="mt-2 text-[12px] sm:text-sm md:text-base font-semibold text-gray-700 text-center leading-tight break-words">
              {cat.name}
            </span>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CategoriesGrid;
