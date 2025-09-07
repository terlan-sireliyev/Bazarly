import React from "react";
import { products } from "../../../../utils/productList";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

interface SimilarProductsProps {
  currentProductId: string;
  currentCategories: string[];
}

const SimilarProducts: React.FC<SimilarProductsProps> = ({
  currentProductId,
  currentCategories,
}) => {
  // Oxşar məhsulları filtr edirik
  const similarProducts = products.filter(
    (ad) =>
      ad.id !== currentProductId &&
      ad.category.some((cat) => currentCategories.includes(cat))
  );

  if (similarProducts.length === 0) return null;
// console.log(similarProducts)
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-6 ml-2 text-gray-800">Oxşar Məhsullar</h2>
<div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {similarProducts.map((ad) => (
          <Link
            to={`/singleProduct/${ad.id}`}
            key={ad.id + Math.random()}
            className="bg-white sm:rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 p-4 flex flex-col"
          >
            {/* Şəkil */}
            <div className="relative w-full h-48 mb-4 overflow-hidden rounded-xl">
              <img
                src={ad.mainImage}
                alt={ad.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              {/* Status badge */}
              <span
                className={`absolute top-3 left-3 text-xs font-semibold px-2 py-1 rounded ${
                  ad.status === "vip"
                    ? "bg-yellow-200 text-yellow-800"
                    : ad.status === "premium"
                    ? "bg-purple-200 text-purple-800"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {ad.status.toUpperCase()}
              </span>
            </div>

            {/* Başlıq */}
            <h3 className="text-md font-semibold mb-1 text-gray-700 truncate">
              {ad.title}
            </h3>

            {/* Qiymət */}
            <p className="text-lg font-bold text-blue-600 mb-2">{ad.price} AZN</p>

            {/* Seller info */}
            <div className="flex items-center text-sm text-gray-500 mb-2 justify-between">
              <span className="truncate max-w-[70%]">{ad.seller.name}</span>
              {ad.seller.verified && (
                <span className="text-blue-500 font-bold">✔</span>
              )}
            </div>

            {/* Rating */}
            <div className="flex items-center mb-2">
              <FaStar className="text-yellow-400 mr-1" />
              <span className="text-sm text-gray-600">{ad.seller.rating}</span>
            </div>

            {/* Kateqoriya */}
            <div className="flex flex-wrap gap-1 mt-auto">
              {ad.category.map((cat, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                >
                  {cat}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;
