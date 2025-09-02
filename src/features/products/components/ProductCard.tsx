import {
  MapPin,
  Calendar,
  Package,
  Bookmark,
  Heart,
  Clock,
} from "lucide-react";
import CurrencyCard from "../../../components/common/CurrencyCard";

interface AdCardProps {
  category: string;
  title: string;
  mainImage: string;
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
  // image,
  mainImage,
  location,
  date,
  time,
  user,
  condition,
  
}: AdCardProps) => {
  // seçilmiş valyuta
   
  return (
    <div className="bg-white border border-green-100 p-2 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">
      {/* Şəkil */}
      <div className="relative h-52">
        <img src={mainImage} alt={title} className="w-full h-full object-cover" />

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
      <div className="pt-5 pb-0 flex flex-col gap-[5px] flex-1">
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
        <CurrencyCard/>
      </div>
    </div>
  );
};

export default ProductCard;
