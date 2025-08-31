import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaShoppingCart,
  FaBookmark,
  FaEnvelope,
  FaBell,
  FaSignInAlt,
  FaPaperPlane,
} from "react-icons/fa";
import NavbarLogo from "./NavbarLogo";
import NavbarIcons from "./NavbarIcons";
import NavbarUserActions from "./NavbarUserActions";
import useWindowWidth from "../../../hooks/useWindowWidth";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  //Add navbar
  const width = useWindowWidth();
  const isVisible = width > 810;

  return (
    <>
      {/* 🔹 Top Navbar */}
      <nav className="w-full bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center h-16">
          {/* 🔹 Logo */}
          <NavbarLogo />

         <div className="flex">

           <div className="flex gap-6">
            {/* 🔹 Middle icons */}
            <NavbarIcons />

            {/* 🔹 Right side */}
            <NavbarUserActions />
          </div>

          {/* 🔹 Mobile toggle */}
          <div className={`${isVisible ? "hidden" : "flex"}`}>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl text-gray-700"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
         </div>
        </div>

        {/* 🔹 Mobile dropdown menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg p-4 space-y-4">
            {/* Mobile icons */}
            <div className="flex space-x-6">
              <FaShoppingCart className="text-xl" />
              <FaBookmark className="text-xl" />
              <FaEnvelope className="text-xl" />
              <FaBell className="text-xl" />
            </div>

            {/* Mobile buttons */}
            <div className="flex flex-col space-y-3">
              <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg">
                <FaSignInAlt /> <span>Sign In</span>
              </button>
              <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg">
                <FaPaperPlane /> <span>Publish</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
