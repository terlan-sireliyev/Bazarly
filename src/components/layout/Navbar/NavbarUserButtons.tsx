import { FaPlus, FaUser, FaHeart } from "react-icons/fa";
import NavbarSearch from "./NavbarSearch";

const NavbarUserButtons = () => (
  <div className="flex items-center space-x-4">
    <NavbarSearch />
    <button className="flex items-center bg-green-600 text-white px-4 py-1 rounded-full hover:bg-green-700 transition">
      <FaPlus className="mr-1" /> Elan Yerləşdir
    </button>
    <button className="text-gray-700 hover:text-red-600 transition relative">
      <FaHeart size={20} />
      <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1">
        3
      </span>
    </button>
    <button className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 transition">
      <FaUser />
      <span>Hesab</span>
    </button>
  </div>
);

export default NavbarUserButtons;
