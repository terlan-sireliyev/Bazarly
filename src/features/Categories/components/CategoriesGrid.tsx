import type { Category } from "../../../types/types";


interface CategoryModalProps {
  categories: Category[];
  onSelect: (category: Category) => void;
}

const CategoriesGrid = ({ categories, onSelect }: CategoryModalProps) => (
  <div className="bg-gray-50 py-6 my-4 rounded">
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
      <div className="grid grid-cols-3 max-[450px]:grid-cols-4 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-5">
        {categories?.map((cat, idx) => (
          <div
            key={idx}
            className={`${cat.color} flex flex-col items-center justify-center;
                        h-28 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 
                        transition transform cursor-pointer 
                        max-[450px]:h-20 max-[450px]:rounded-lg p-2`}
            onClick={() => onSelect(cat)}
          >
            {/* Icon */}
            <cat.icon className="text-3xl md:text-4xl mt-3 max-[450px]:mt-2 max-[650px]:mt-5 text-gray-800 max-[450px]:text-xl" />

            {/* Text */}
            <span className="mt-2 text-sm sm:text-lg max-[510px]:text-[16px] md:text-lg font-semibold text-gray-700 text-center px-1 max-[450px]:text-xs leading-tight">
              {cat.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default CategoriesGrid;
