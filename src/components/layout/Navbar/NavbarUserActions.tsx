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
    <div className="flex items-center gap-3 sm:gap-4">
      {/* Divider */}
      {isVisible && <div className="h-6 w-px bg-gray-300" />}

      {/* Sign In */}
      {isVisible && (
        <Link
          to="/login"
          className="inline-flex items-center gap-2 h-9 sm:h-10 px-3 sm:px-4 text-sm sm:text-base bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          <FaSignInAlt className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>Daxil ol</span>
        </Link>
      )}

      {/* User Avatar */}
      <img
        src="https://i.pravatar.cc/40"
        alt="user"
        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-300 cursor-pointer object-cover"
        onClick={() => setIsUserOpen(true)}
      />

      {/* Publish */}
      {isVisibleTwo && (
        <button className="inline-flex items-center gap-2 h-9 sm:h-10 px-3 sm:px-4 text-sm sm:text-base bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
          <FaPaperPlane className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>Publish</span>
        </button>
      )}

      {/* Search */}
      <button
        onClick={() => setIsSearchOpen(true)}
        className="inline-flex items-center gap-2 h-9 sm:h-10 px-2 sm:px-3 text-sm sm:text-base bg-green-500 text-white rounded-lg   transition shadow-md hover:shadow-lg"
      >
        <FaSearch className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
        <span className="hidden sm:inline">Axtar</span>
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
