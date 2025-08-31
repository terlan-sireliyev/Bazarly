import { motion } from "framer-motion";
import CartItem from "./CartItem";
// import { products } from "../../../utils/productList";

interface CartMenuProps {
  openMenu: boolean;
  onClose: () => void;
}

const CartMenu = ({ onClose }: CartMenuProps) => {
  return (
    <motion.div
      key="cart-menu"
      className="fixed top-0 right-0 h-screen w-1/3  bg-white shadow-2xl z-50 flex flex-col"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "tween", duration: 0.3 }}
    >
      {/* Header */}
      <div className="p-6 border-b border-red-300 flex justify-between items-center">
        <h2 className="text-3xl font-bold text-black">
          🛒 Sənin Səbətin – Hazır Ol!
        </h2>
        <button
          className="text-black text-lg hover:text-gray-200"
          onClick={onClose}
        >
          ✕
        </button>
      </div>

      {/* Məhsullar */}
      <div className="flex-1 overflow-y-auto  ">
        <CartItem />
      </div>

      {/* Footer */}
      <div className="p-6 border-t border-red-300 bg-white">
        <button className="w-full border border-red-300 bg-white text-red-600 font-semibold rounded-lg py-3 hover:bg-gray-100 transition">
          Checkout →
        </button>
      </div>
    </motion.div>
  );
};

export default CartMenu;
