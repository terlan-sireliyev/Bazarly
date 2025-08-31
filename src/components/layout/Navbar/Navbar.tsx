import React, { useEffect, useState } from "react";
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
              className="text-2xl text-gray-700"
              aria-label="toggle menu"
            >
              {menuOpen ? (
                <FaTimes className="text-[35px] ml-4" />
              ) : (
                <FaBars className="text-[35px] ml-4" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown: yalnız toggle görünür və menuOpen true olarsa göstər */}
      {!isVisible && menuOpen && (
        <div className="bg-white border-t border-gray-200 shadow-lg p-4 space-y-4">
          <div className="flex space-x-6">
            <FaShoppingCart className="text-xl" />
            <FaBookmark className="text-xl" />
            <FaEnvelope className="text-xl" />
            <FaBell className="text-xl" />
          </div>

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
  );
};

export default Navbar;
