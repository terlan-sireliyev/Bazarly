import { useState } from "react";
import { FaPaperPlane, FaSignInAlt, FaSearch } from "react-icons/fa";
import useWindowWidth from "../../../hooks/useWindowWidth";
import { Link } from "react-router-dom";
import SearchModal from "../../../features/search/components/SearchModal";         
import UserModal from "./components/UserModal";

const NavbarUserActions = () => {
  const width = useWindowWidth();
  const isVisible = width > 810;
  const isVisibleTwo = width > 700;

  const [isUserOpen, setIsUserOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className={` flex items-center gap-4`}>
      {/* Divider */}
      <div className={`${!isVisible ? "hidden" : "flex"} h-6 w-px bg-gray-300`}></div>

      {/* Sign In */}
      <Link
        to="/login"
        className={`${!isVisible ? "hidden" : "inline-flex"} px-4 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition`}
      >
        <FaSignInAlt className="mr-2" />
        <span>Daxil ol</span>
      </Link>

      {/* User Avatar */}
      <img
        src="https://i.pravatar.cc/40"
        alt="user"
        className="w-9 h-9 rounded-full border border-gray-300 cursor-pointer"
        onClick={() => setIsUserOpen(true)}
      />

      {/* Publish */}
      <button className={`${!isVisibleTwo ? "hidden" : "inline-flex"}    space-x-2 px-4 py-1.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition`}>
        <FaPaperPlane />
        <span>Publish</span>
      </button>

      {/* Search */}
      <button
        onClick={() => setIsSearchOpen(true)}
        className="flex items-center space-x-2 px-4 py-1.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition shadow-md hover:shadow-lg"
      >
        <FaSearch className="animate-pulse" />
        <span>Axtar</span>
      </button>

      {/* === Modals === */}
      <div className="absolute">
              <UserModal isOpen={isUserOpen} onClose={() => setIsUserOpen(false)} />

      </div>
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  );
};

export default NavbarUserActions;
