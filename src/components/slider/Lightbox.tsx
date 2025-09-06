import React, { useState } from "react";
import Slider from "react-slick"; // React üçün "slick slider" kitabxanasını import edirik

// Komponentə gələn props-ların tipi
type LightboxProps = {
  images: string[];       // Sliderdə göstəriləcək şəkillərin array-i
  initialIndex: number;   // Lightbox açıldığında başlanğıcda hansı şəkil göstərilsin
  onClose: () => void;    // Lightbox-u bağlamaq üçün funksionallıq
};

const Lightbox: React.FC<LightboxProps> = ({
  images,
  initialIndex,
  onClose,
}) => {
  // Hal-hazırda aktiv olan (görünən) şəkilin indeksi
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Thumbnail slider üçün settings
  const thumbnailSettings = {
    dots: false,                    // Sliderin altındakı "dots"ları göstərməmək
    infinite: true,                 // Sonsuz döngü (son şəkildən sonra ilkə keçmək)
    speed: 300,                     // Sliderin keçid sürəti (ms)
    slidesToShow: Math.min(images.length, 5), // Görünəcək thumbnail sayı (maksimum 5)
    slidesToScroll: 1,              // Hər dəfə 1 şəkil sürüşəcək
    focusOnSelect: true,            // Thumbnail kliklənəndə həmin şəkilə keçmək
    centerMode: true,               // Thumbnail slider-i mərkəzləşdirmək
  };

  // "Prev" düyməsi funksionallığı – əvvəlki şəkilə keçmək
  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    // Modulo operatoru ilə əvvəlki şəkil. Əgər 0-dan keçsək sonuncuya dönür
  };

  // "Next" düyməsi funksionallığı – növbəti şəkilə keçmək
  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    // Modulo operatoru ilə növbəti şəkil. Əgər son şəkildəsə 0-a dönür
  };

  return (
    // Lightbox-un əsas container-i
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center p-4">
      {/* Close düyməsi */}
      <button
        className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-gray-300"
        onClick={onClose} // Lightbox-u bağlayır
      >
        &times; {/* "X" işarəsi */}
      </button>

      {/* Prev düyməsi */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl font-bold hover:text-gray-300 z-50"
        onClick={prevImage} // Əvvəlki şəkilə keç
      >
        &#10094; {/* Sol ox */}
      </button>

      {/* Next düyməsi */}
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl font-bold hover:text-gray-300 z-50"
        onClick={nextImage} // Növbəti şəkilə keç
      >
        &#10095; {/* Sağ ox */}
      </button>

      {/* Böyük şəkil göstərilən hissə */}
      <div className="flex-1 flex items-center justify-center max-h-[80%] w-full">
        <img
          src={images[currentIndex]} // Hal-hazırda aktiv şəkil
          alt={`Böyük şəkil ${currentIndex + 1}`} // Şəkilin alt mətn description
          className="object-contain max-h-full" // Şəkili konteynerə uyğun saxlamaq
        />
      </div>

      {/* Thumbnail slider */}
      <div className="w-full mt-4 max-w-4xl">
        <Slider {...thumbnailSettings}>
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`p-1 cursor-pointer border-2 ${
                idx === currentIndex ? "border-blue-500" : "border-transparent"
              }`}
              onClick={() => setCurrentIndex(idx)} // Thumbnail kliklənəndə həmin şəkil göstərilir
            >
              <img
                src={img} 
                alt={`Thumb ${idx + 1}`} // Thumbnail alt mətn
                className="h-20 object-contain mx-auto"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Lightbox;
