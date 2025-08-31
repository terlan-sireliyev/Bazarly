import { motion } from "framer-motion";
import { BiBell } from "react-icons/bi";
import { CgShoppingCart } from "react-icons/cg";
import { FiMessageCircle } from "react-icons/fi";
// import { Bell, MessageCircle, ShoppingCart } from "lucide-react";

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      type: "message",
      text: "Emily Carter sent you a new message",
      time: "2 mins ago",
      icon: <FiMessageCircle className="w-5 h-5 text-blue-500" />,
    },
    {
      id: 2,
      type: "order",
      text: "Your order #12345 has been shipped",
      time: "10 mins ago",
      icon: <CgShoppingCart className="w-5 h-5 text-green-500" />,
    },
    {
      id: 3,
      type: "alert",
      text: "System update scheduled for tonight",
      time: "1 hour ago",
      icon: <BiBell className="w-5 h-5 text-yellow-500" />,
    },
  ];

  return (
    <motion.div
      key="notifications-menu"
      className="fixed top-0 right-0 h-screen w-1/3 bg-white shadow-2xl z-50 flex flex-col"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "tween", duration: 0.3 }}
    >
      {/* Header */}
      <div className="p-4 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-xl font-bold">Notifications</h2>
        <button className="px-3 py-1 text-red-500 border border-red-400 rounded-md hover:bg-red-50 transition">
          Clear All
        </button>
      </div>

      {/* Notifications List */}
      <div className="flex-1 overflow-y-auto">
        {notifications.map((n) => (
          <div
            key={n.id}
            className="flex items-start gap-3 p-4 hover:bg-gray-50 transition cursor-pointer border-b border-gray-100"
          >
            {/* Icon */}
            <div className="mt-1">{n.icon}</div>

            {/* Text */}
            <div className="flex-1">
              <p className="text-sm text-gray-700">{n.text}</p>
              <span className="text-xs text-gray-400">{n.time}</span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Notifications;
