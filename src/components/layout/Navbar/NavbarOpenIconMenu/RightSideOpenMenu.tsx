import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { mobileMenuLinks } from "../../../../utils/menuLinks";
import { mobileMenuActions } from "../../../../utils/mobileMenuActions";
interface RightSideOpenMenuProps {
  isVisible: boolean;
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const RightSideOpenMenu = ({
  isVisible,
  menuOpen,
  setMenuOpen,
}: RightSideOpenMenuProps) => {
  return (
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
              {mobileMenuActions.map(
                ({ path, label, icon: Icon, className }) => (
                  <Link
                    key={path}
                    to={path}
                    className={`flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r ${className} text-white rounded-2xl shadow-lg hover:scale-105 transition transform`}
                    onClick={() => setMenuOpen(false)}
                  >
                    <Icon /> {label}
                  </Link>
                )
              )}
            </div>

            {/* Navigation Links */}
            <ul className="flex flex-col space-y-2 mt-4 text-gray-700 font-medium">
              {mobileMenuLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="block hover:text-green-600 transition cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RightSideOpenMenu;
