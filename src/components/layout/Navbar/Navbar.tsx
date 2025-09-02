import { useEffect, useState } from "react";
import {
  FaBars,
  FaTimes,

  FaSignInAlt,
  FaPaperPlane,
  FaUserPlus,
} from "react-icons/fa";
import NavbarLogo from "./NavbarLogo";
import NavbarIcons from "./NavbarIcons";
import NavbarUserActions from "./NavbarUserActions";
import useWindowWidth from "../../../hooks/useWindowWidth";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const width = useWindowWidth();
  const isVisible = width > 810;  

  // Əsas: ekran genişliyi dəyişəndə (məs. small -> large) menyunu avtomatik bağla
  useEffect(() => {
    if (isVisible && menuOpen) {
      setMenuOpen(false);
    }
  }, [isVisible, menuOpen]);

  return (
    <nav className="w-full bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <NavbarLogo />

        <div className="flex">
          <div className="flex gap-6">
            <NavbarIcons />
            <NavbarUserActions />
          </div>

          {/* Mobile toggle (görünür yalnız isVisible === false olduqda) */}
          <div className={`${isVisible ? "hidden" : "flex"}`}>
          <button
  onClick={() => setMenuOpen((prev) => !prev)}
  className="text-gray-700 ml-2 sm:ml-4 p-1 sm:p-2 rounded-md hover:bg-gray-100 transition"
  aria-label="toggle menu"
>
  {menuOpen ? (
    <FaTimes className="w-6 h-6 sm:w-8 sm:h-8" />
  ) : (
    <FaBars className="w-6 h-6 sm:w-8 sm:h-8" />
  )}
</button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown: yalnız toggle görünür və menuOpen true olarsa göstər */}
      {!isVisible && menuOpen && (
         <AnimatePresence>
               {!isVisible && menuOpen && (
                 <motion.div
                   initial={{ opacity: 0, y: -20 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -20 }}
                   transition={{ duration: 0.35, ease: "easeOut" }}
                   className="absolute right-0 mt-2 w-72 bg-gradient-to-b from-white via-gray-50 to-white border border-gray-200 shadow-2xl rounded-3xl p-5 z-50"
                 >
                   <motion.div
                     className="flex flex-col space-y-5"
                     initial={{ opacity: 0, y: -10 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.05 }}
                   >
                     {/* User Card */}
                     <div className="flex items-center gap-4 bg-green-50 p-3 rounded-2xl shadow-inner hover:shadow-lg transition">
                       <img
                         src="https://i.pravatar.cc/50"
                         alt="User"
                         className="w-14 h-14 rounded-full border-2 border-green-400"
                       />
                       <div>
                         <h3 className="text-lg font-semibold text-green-700">
                           Tarlan Shireliyev
                         </h3>
                         <span className="text-sm text-green-500">Welcome Back!</span>
                       </div>
                     </div>
       
                     {/* Action Buttons */}
                     <div className="flex flex-col space-y-3">
                       <Link
                         to="/publish"
                         className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl shadow-lg hover:scale-105 transition transform"
                         onClick={() => setMenuOpen(false)}
                       >
                         <FaPaperPlane /> Publish
                       </Link>
                       <Link
                         to="/login"
                         className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl shadow-lg hover:scale-105 transition transform"
                         onClick={() => setMenuOpen(false)}
                       >
                         <FaSignInAlt /> Login
                       </Link>
                       <Link
                         to="/register"
                         className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-lime-400 text-white rounded-2xl shadow-lg hover:scale-105 transition transform"
                         onClick={() => setMenuOpen(false)}
                       >
                         <FaUserPlus /> Register
                       </Link>
                     </div>
       
                     {/* Navigation Links */}
                     <ul className="flex flex-col space-y-2 mt-4 text-gray-700 font-medium">
                       <li className="hover:text-green-600 transition cursor-pointer">Home</li>
                       <li className="hover:text-green-600 transition cursor-pointer">About</li>
                       <li className="hover:text-green-600 transition cursor-pointer">Contact</li>
                       <li className="hover:text-green-600 transition cursor-pointer">Services</li>
                       <li className="hover:text-green-600 transition cursor-pointer">Blog</li>
                     </ul>
                   </motion.div>
                 </motion.div>
               )}
             </AnimatePresence>
      )}
    </nav>
  );
};

export default Navbar;
