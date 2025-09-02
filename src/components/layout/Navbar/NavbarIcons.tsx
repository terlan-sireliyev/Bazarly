import { useState, useRef } from "react";
import { FaBell, FaBookmark, FaEnvelope } from "react-icons/fa";
// import CartMenu from "./NavbarOpenIconMenu/CartMenu";
import { AnimatePresence } from "framer-motion";
import BookMark from "./NavbarOpenIconMenu/BookMark";
import { useMediaQuery } from "react-responsive";
import Messages from "./NavbarOpenIconMenu/Messages";
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";
import Notifications from "./NavbarOpenIconMenu/Notifications";

const NavbarIcons = () => {
  const isVisible = useMediaQuery({ query: "(min-width: 810px)" });

  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  // ✅ custom hook istifadə edirik
  useOnClickOutside(containerRef, () => setOpenMenu(null));

  return (
    <div
      ref={containerRef}
      className={`${!isVisible ? "hidden" : "flex"} items-center gap-4`}
    >
      {/* Cart */}
       

      {/* Bookmark */}
      <div
        className="relative cursor-pointer"
        onClick={() => setOpenMenu(openMenu === "bookmark" ? null : "bookmark")}
      >
        <FaBookmark className="text-[17px] text-gray-800" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-1.5">
          0
        </span>
      </div>
      <AnimatePresence>
        {openMenu === "bookmark" && <BookMark />}
      </AnimatePresence>

      {/* Messages */}
      <div
        className="relative cursor-pointer"
        onClick={() => setOpenMenu(openMenu === "messages" ? null : "messages")}
      >
        <FaEnvelope className="text-xl text-gray-800" />
        <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold rounded-full px-1.5">
          0
        </span>
      </div>
      <AnimatePresence>
        {openMenu === "messages" && <Messages />}
      </AnimatePresence>

      {/* Notifications */}
      <div
        className="relative cursor-pointer"
        onClick={() =>
          setOpenMenu(openMenu === "notifications" ? null : "notifications")
        }
      >
        <FaBell className="text-xl text-gray-800" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-1.5">
          0
        </span>
      </div>
      <AnimatePresence>
        {openMenu === "notifications" && <Notifications />}
      </AnimatePresence>
    </div>
  );
};

export default NavbarIcons;
