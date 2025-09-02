import { useState, useRef } from "react";
import { FaBell, FaBookmark, FaEnvelope, FaBars } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import BookMark from "./NavbarOpenIconMenu/BookMark";
import { useMediaQuery } from "react-responsive";
import Messages from "./NavbarOpenIconMenu/Messages";
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";
import Notifications from "./NavbarOpenIconMenu/Notifications";

const NavbarIcons = () => {
  const isVisible = useMediaQuery({ query: "(min-width: 810px)" });
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // ✅ klik kənara düşəndə bütün menular bağlansın
  useOnClickOutside(containerRef, () => setOpenMenu(null));

  return (
    <div
      ref={containerRef}
      className={`${!isVisible ? "hidden" : "flex"} items-center gap-4`}
    >
      {/* ===== Bars Menu ===== */}
      <div
        className="relative cursor-pointer"
        onClick={() => setOpenMenu(openMenu === "menu" ? null : "menu")}
      >
        <FaBars className="text-xl text-gray-800" />
      </div>
      <AnimatePresence>
        {openMenu === "menu" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="absolute right-0 mt-12 w-48 bg-white border border-gray-200 rounded-xl shadow-lg z-50 p-3"
          >
            <ul className="flex flex-col gap-2 text-gray-700">
              <li className="px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                Home
              </li>
              <li className="px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                About
              </li>
              <li className="px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                Services
              </li>
              <li className="px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                Contact
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== Bookmark ===== */}
      <div
        className="relative cursor-pointer"
        onClick={() =>
          setOpenMenu(openMenu === "bookmark" ? null : "bookmark")
        }
      >
        <FaBookmark className="text-[17px] text-gray-800" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-1.5">
          0
        </span>
      </div>
      <AnimatePresence>
        {openMenu === "bookmark" && <BookMark />}
      </AnimatePresence>

      {/* ===== Messages ===== */}
      <div
        className="relative cursor-pointer"
        onClick={() =>
          setOpenMenu(openMenu === "messages" ? null : "messages")
        }
      >
        <FaEnvelope className="text-xl text-gray-800" />
        <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold rounded-full px-1.5">
          0
        </span>
      </div>
      <AnimatePresence>
        {openMenu === "messages" && <Messages />}
      </AnimatePresence>

      {/* ===== Notifications ===== */}
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
