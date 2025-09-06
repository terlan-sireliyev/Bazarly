import React, { useState } from "react";
import Slider from "react-slick";
import Lightbox from "./Lightbox";

type SinglePageSliderProps = {
  images: string[];
  activeImg: number;
  setActiveImg: (index: number) => void;
  productTitle: string;
};

const SinglePageSlider: React.FC<SinglePageSliderProps> = ({
  images,
  activeImg,
  setActiveImg,
  productTitle,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [lightboxImgIndex, setLightboxImgIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current: number) => setActiveImg(current),
  };

  return (
    <>
      {/* Əsas slider */}
      <figure className="w-full h-[500px] max-sm:h-[270px] flex flex-col items-center justify-center bg-gray-100 rounded-lg relative">
        <Slider {...settings} className="w-full h-full">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center h-full cursor-pointer"
              onClick={() => {
                setLightboxImgIndex(idx);
                setIsOpen(true);
              }}
            >
              <img
                src={img}
                alt={`${productTitle} şəkil ${idx + 1}`}
                className="max-h-[480px] max-sm:h-[270px] object-contain mx-auto"
              />
            </div>
          ))}
        </Slider>

        <div className="absolute bottom-2 right-2 bg-black/50 text-white text-sm px-3 py-1 rounded-full font-semibold">
          {activeImg + 1} / {images.length}
        </div>
      </figure>

      {/* Lightbox */}
      {isOpen && (
        <Lightbox
          images={images}
          initialIndex={lightboxImgIndex}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default SinglePageSlider;
