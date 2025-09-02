import { useEffect, useState } from "react";
import {
  FaBars,
  FaTimes,
} from "react-icons/fa";
import NavbarLogo from "./NavbarLogo";
import NavbarIcons from "./NavbarIcons";
import NavbarUserActions from "./NavbarUserActions";
import useWindowWidth from "../../../hooks/useWindowWidth";
import RightSideOpenMenu from "./NavbarOpenIconMenu/RightSideOpenMenu";

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
              className="text-gray-700 ml-2   p-1 sm:p-2 rounded-md hover:bg-gray-100 transition"
              aria-label="toggle menu"
            >
              {menuOpen ? (
                <FaTimes className="h-10 text-[40px] sm:h-11" />
              ) : (
                <FaBars className="h-10 text-[40px] sm:h-11" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown: yalnız toggle görünür və menuOpen true olarsa göstər */}
      {!isVisible && menuOpen && (
    
        <RightSideOpenMenu isVisible={isVisible} menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      )}
    </nav>
  );
};

export default Navbar;
