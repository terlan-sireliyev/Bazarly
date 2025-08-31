import { motion } from "framer-motion";

const BookMark = () => {
  return (
    <motion.div
      key="bookmark-menu"
      className="fixed top-0 right-0 h-screen w-1/3 bg-white shadow-2xl z-50 flex flex-col"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "tween", duration: 0.3 }}
    >
      {/* Header */}
      <div className="p-4 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-xl font-bold">Bookmarks</h2>
        <button className="px-3 py-1 text-red-500 border border-red-400 rounded-md hover:bg-red-50 transition">
          Clear All
        </button>
      </div>

      {/* Bookmarked Item */}
      <div className="p-4 flex items-center border-b border-gray-100">
        {/* Image */}
        <img
          src="data:image/jpeg;base64,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"
          alt="product"
          className="w-16 h-16 object-cover rounded-md"
        />

        {/* Info */}
        <div className="ml-4 flex-1">
          <h3 className="text-sm font-semibold">
            Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
          </h3>
          <p className="text-gray-600 font-medium mt-1">$109.95</p>
        </div>

        {/* Delete Button */}
        <button className="ml-4 px-3 py-1 text-red-500 border border-red-400 rounded-md hover:bg-red-50 transition">
          Delete
        </button>
      </div>
    </motion.div>
  );
};

export default BookMark;
