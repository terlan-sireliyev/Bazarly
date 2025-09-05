import {
  // MapPin,
  Calendar,
  Package,
  Bookmark,
  Heart,
  Clock,
} from "lucide-react";
import CurrencyCard from "../../../components/common/CurrencyCard";
import { Link } from "react-router-dom";

interface AdCardProps {
  id: string;
  category: string;
  title: string;
  mainImage: string;
  location: string;
  date: string;
  time: string;
  user: string;
  condition: string;
  price: number;
  status: string;
  adType?: "Sadə" | "VIP" | "Premium";
}

const ProductCard = ({
  id,
  category,
  title,
  mainImage,
  // location,
  date,
  time,
  user,
  status,
  condition,
  price,
  adType = "Sadə",
}: AdCardProps) => {
  // Badge rəngləri
  const adTypeBadgeColor =
    adType === "Premium"
      ? "bg-yellow-400 text-white"
      : adType === "VIP"
      ? "bg-purple-600 text-white"
      : "bg-gray-200 text-gray-700";

  const statusBadgeColor =
    status.toLowerCase() === "vip"
      ? "bg-purple-600 text-white"
      : status.toLowerCase() === "premium"
      ? "bg-yellow-400 text-white"
      : "bg-gray-300 text-gray-700";

  return (
    <div className="bg-white border border-green-300 mt-2 rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden flex  flex-col">
      {/* Şəkil və Badge-lər */}
      <Link to={`/singleProduct/${id}`}>
        <div className="relative h-52 w-full">
          <img
            src={mainImage}
            alt={title}
            className="h-full w-full object-cover rounded-t-2xl"
          />

          {/* AdType Badge */}
          {adType !== "Sadə" && (
            <span
              className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${adTypeBadgeColor}`}
            >
              {adType}
            </span>
          )}

          {/* Status Badge */}
          {status !== "sadə" && (
            <span
              className={`absolute bottom-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${statusBadgeColor}`}
            >
              {status.toUpperCase()}
            </span>
          )}
        </div>

        {/* Header: User & Favorite */}
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
              alt={user}
              className="w-10 h-10 rounded-full border border-green-300 object-cover"
            />
            <div>
              <p className="text-gray-700 font-medium text-sm">
                {user.split(" ")[0]} {user.split(" ")[1]?.charAt(0)}.
              </p>
              <p className="text-gray-400 text-xs"> {category}</p>
            </div>
          </div>
          <button className="p-2 rounded-full bg-green-50 hover:bg-green-100 shadow">
            <Heart className="w-5 h-5 text-green-600" />
          </button>
        </div>

        {/* Title & Bookmark */}
        <div className="px-4 flex justify-between items-center">
          <h3 className="text-green-600 font-bold text-lg line-clamp-1">
            {title}
          </h3>
          <button className="p-2 rounded-full bg-gray-100 hover:bg-green-100 transition">
            <Bookmark className="w-5 h-5 text-green-600" />
          </button>
        </div>

        {/* Details Grid */}
        <div className="px-4 py-3 flex justify-between gap-2  text-gray-500 text-sm">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{time}</span>
            </div>
            <div className="flex items-center gap-2">
              <Package className="w-4 h-4" />
              <span>{condition}</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{date}</span>
            </div>

            <div className="flex items-center gap-2">
              <Package className="w-4 h-4" />
              <span>{condition}</span>
            </div>
          </div>
        </div>
      </Link>
      {/* Currency & Footer */}
      <div className="px-4 pb-4">
        <CurrencyCard price={price}  />
      </div>
    </div>
  );
};

export default ProductCard;
