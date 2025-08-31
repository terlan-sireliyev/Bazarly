import {
  FaTimes,
  FaMobileAlt,
  FaLaptop,
  FaTv,
  FaHeadphones,
  FaCheckCircle,
} from "react-icons/fa";
import type { Category } from "../../../types/types";

interface CategoryModalProps {
  category: Category | null;
  onClose: () => void;
}
const CategoryModal = ({ category, onClose }: CategoryModalProps) => {
  if (!category) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-20 bg-[oklch(0.16_0.01_154.72_/_0.25)] bg-opacity-50 flex items-center justify-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white z-40 rounded-xl shadow-2xl w-[90%] max-w-[500px] max-h-[500px] p-4 sm:p-6 flex flex-col"
      >
        <div className="flex justify-between items-center mb-4 border-b border-gray-200 pb-3">
          <div className="flex flex-col">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 animate-pulse"></div>
              <h2 className="text-xl font-bold text-gray-800">
                {category.name}
              </h2>
            </div>
            <span className="text-sm text-gray-500 mt-1">
              {category.sub.length} subcategory mövcuddur
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-900 transition transform hover:scale-110"
          >
            <FaTimes size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="grid grid-cols-2 gap-4">
            {category.sub.slice(0, 6).map((sub, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:shadow-lg cursor-pointer transition transform hover:-translate-y-1 hover:bg-orange-50"
              >
                <div className="text-gray-500 text-2xl">
                  {idx % 4 === 0 ? (
                    <FaMobileAlt />
                  ) : idx % 4 === 1 ? (
                    <FaLaptop />
                  ) : idx % 4 === 2 ? (
                    <FaTv />
                  ) : (
                    <FaHeadphones />
                  )}
                </div>
                <span className="text-gray-700 font-medium truncate">
                  {sub}
                </span>
              </div>
            ))}
            {category.sub.length > 6 && (
              <div className="flex items-center justify-center p-3 border border-gray-200 rounded-lg bg-gray-100 text-gray-600 font-medium cursor-pointer hover:bg-gray-200 transition">
                +{category.sub.length - 6} digərləri
              </div>
            )}
          </div>
        </div>

        <div className="mt-4 flex justify-between   items-center border-t border-gray-200 pt-3">
          <span className="text-sm text-gray-500">
            Seçimləri diqqətlə edin 🙂
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-gradient-to-r from-orange-400 to-pink-500 text-white rounded-lg shadow-lg hover:from-orange-500 hover:to-pink-600 transition transform hover:scale-105 flex items-center space-x-2"
          >
            <FaCheckCircle />
            <span>Bağla</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryModal;
