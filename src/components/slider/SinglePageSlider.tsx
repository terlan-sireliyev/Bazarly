import React, { useState } from "react";
import Slider from "react-slick";

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

  const thumbnailSettings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: Math.min(images.length, 5),
    slidesToScroll: 1,
    focusOnSelect: true,
    centerMode: true,
  };

  // Prev / Next funksiyaları
  const prevImage = () => {
    setLightboxImgIndex(
      (prev) => (prev - 1 + images.length) % images.length
    );
  };

  const nextImage = () => {
    setLightboxImgIndex(
      (prev) => (prev + 1) % images.length
    );
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
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center p-4">
          {/* Close düyməsi */}
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            &times;
          </button>

          {/* Prev düyməsi */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl font-bold hover:text-gray-300 z-50"
            onClick={prevImage}
          >
            &#10094;
          </button>

          {/* Next düyməsi */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl font-bold hover:text-gray-300 z-50"
            onClick={nextImage}
          >
            &#10095;
          </button>

          {/* Böyük şəkil */}
          <div className="flex-1 flex items-center justify-center max-h-[80%] w-full">
            <img
              src={images[lightboxImgIndex]}
              alt={`${productTitle} böyük şəkil`}
              className="object-contain max-h-full"
            />
            
          </div>

          {/* Thumbnail slider */}
          <div className="w-full mt-4 max-w-4xl">
            <Slider {...thumbnailSettings} swipeToSlide>
              {images.map((img, idx) => (
                <div
                  key={idx}
                  className={`p-1 cursor-pointer border-2 ${
                    idx === lightboxImgIndex
                      ? "border-blue-500"
                      : "border-transparent"
                  }`}
                  onClick={() => setLightboxImgIndex(idx)}
                >
                  <img
                    src={img}
                    alt={`${productTitle} thumb ${idx + 1}`}
                    className="h-20 object-contain mx-auto"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}
    </>
  );
};

export default SinglePageSlider;
