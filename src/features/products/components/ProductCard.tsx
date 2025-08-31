import {
  MapPin,
  Calendar,
  Package,
  Bookmark,
  Heart,
  Clock,
} from "lucide-react";

interface AdCardProps {
  category: string;
  title: string;
  image: string;
  location: string;
  date: string;
  time: string;
  user: string;
  condition: string;
  price: number;
}

const ProductCard = ({
  category,
  title,
  image,
  location,
  date,
  time,
  user,
  condition,
  price,
}: AdCardProps) => {
  return (
    <div className="bg-white   border border-green-100 p-2 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">
      {/* Şəkil */}
      <div className="relative h-52">
        <img src={image} alt={title} className="w-full h-full object-cover" />

        {/* Bəyən düyməsi */}
        <button className="absolute top-3 right-3 bg-green-100 p-2 rounded-lg shadow-md hover:bg-green-200 transition">
          <Heart className="w-5 h-5 text-green-600" />
        </button>

        {/* İstifadəçi məlumatı */}
        <button className="absolute top-3 left-3 flex items-center gap-2 bg-green-100 p-2 rounded-lg shadow-md hover:bg-green-200 transition">
          <img
            src={"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"}
            alt={user}
            className="w-8 h-8 rounded-full object-cover border border-green-300"
          />
          <span className="text-sm font-medium text-gray-700">
            {user.split(" ")[0]} {user.split(" ")[1]?.charAt(0)}.
          </span>
        </button>
      </div>

      {/* Mətn hissəsi */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        {/* Kateqoriya */}
        <p className="text-gray-400 text-sm">{category}</p>

        {/* Başlıq & Yadda saxla */}
        <div className="flex justify-between items-start">
          <h3 className="text-green-600 font-bold text-xl line-clamp-2">
            {title}
          </h3>
          <button className="bg-gray-100 p-2 rounded-full hover:bg-green-100 transition">
            <Bookmark className="w-5 h-5 text-green-600" />
          </button>
        </div>

        <p className="text-gray-400 text-xs">Son yenilənmə: 5 saat əvvəl</p>

        {/* İkonlarla məlumatlar */}
        <div className="flex justify-between gap-2 text-sm mt-2 text-gray-400">
          <div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
            <div className="flex whitespace-nowrap mt-2 items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{date}</span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <Package className="w-4 h-4" />
              <span>{condition}</span>
            </div>
            <div className="flex whitespace-nowrap mt-2 items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{time}</span>
            </div>
          </div>
        </div>

        {/* Qiymət və düymə */}
        <div className="flex justify-between max-[900px]:flex-col items-center mt-auto max-md:flex-col max-md:gap-3 max-[900px]:gap-2 max-md:w-full">
          <span className="bg-red-100 text-red-600 font-bold py-2 px-4 rounded-xl max-md:w-full max-md:text-center max-[900px]:w-full">
            {price} ₼
          </span>
          <button className="bg-green-600 whitespace-nowrap text-white py-2 px-6 rounded-xl hover:bg-green-700 transition max-md:w-full max-[900px]:w-full">
            Ətraflı bax
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
