import { useState } from "react";

import { FaPaperPlane, FaSignInAlt, FaSearch } from "react-icons/fa";
import useWindowWidth from "../../../../hooks/useWindowWidth";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const NavbarUserActions = () => {
  const width = useWindowWidth();
  const isVisible = width > 810;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${!isVisible ? "hidden" : "flex"} items-center space-x-4`}>
      {/* Divider */}
      <div className="h-6 w-px bg-gray-300"></div>

      {/* Sign In */}
      <Link
        to="/login"
        className="inline-flex items-center px-4 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        <FaSignInAlt className="mr-2" />
        <span>Daxil ol</span>
      </Link>

      {/* User Avatar */}
    <img
  src="https://i.pravatar.cc/40"
  alt="user"
  className="w-9 h-9 rounded-full border border-gray-300 cursor-pointer z-50"
  onClick={() => {
    console.log("Avatar clicked!");
    setIsOpen(true);
  }}
/>


      {/* Publish */}
      <button className="flex items-center space-x-2 px-4 py-1.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
        <FaPaperPlane />
        <span>Publish</span>
      </button>

      {/* Search */}
      <button className="flex items-center space-x-2 px-4 py-1.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition shadow-md hover:shadow-lg">
        <FaSearch className="animate-pulse" />
        <span>Axtar</span>
      </button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl p-6 w-[400px] text-center relative"
              initial={{ opacity: 0, scale: 0.6, y: 80 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.6, y: 80 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()} // modal-ın içində klik edəndə bağlanmasın
            >
              <h2 className="text-xl font-bold mb-4 text-gray-800">
                👤 User Profile
              </h2>
              <p className="text-gray-600 mb-6">
                Burda user haqqında məlumat ola bilər. 
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Bağla
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavbarUserActions;
