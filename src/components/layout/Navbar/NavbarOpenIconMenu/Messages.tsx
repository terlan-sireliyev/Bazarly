import { motion } from "framer-motion";

const Messages = () => {
  const messages = [
    {
      id: 1,
      name: "Emily Carter",
      message: "Hey, are you coming to the meeting later today?",
      time: "2 mins ago",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
      online: true,
    },
    {
      id: 2,
      name: "Michael Thompson",
      message: "Just finished the presentation!",
      time: "10 mins ago",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      online: true,
    },
    {
      id: 3,
      name: "Sarah Williams",
      message: "Can we reschedule our call?",
      time: "30 mins ago",
      img: "https://randomuser.me/api/portraits/women/45.jpg",
      online: true,
    },
    {
      id: 4,
      name: "Daniel Moore",
      message: "Let’s catch up tomorrow.",
      time: "1 hour ago",
      img: "https://randomuser.me/api/portraits/men/75.jpg",
      online: false,
    },
  ];

  return (
    <motion.div
      key="messages-menu"
      className="fixed top-0 right-0 h-screen w-1/3 bg-white shadow-2xl z-50 flex flex-col overflow-y-auto"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "tween", duration: 0.3 }}
    >
      {/* User Header */}
      <div className="flex items-center gap-3 p-4 border-b border-gray-200">
        <img
          src="https://randomuser.me/api/portraits/men/15.jpg"
          alt="profile"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h2 className="font-semibold text-lg">John Anderson</h2>
          <p className="text-green-500 text-sm font-medium">Online</p>
        </div>
      </div>

      {/* Messages Header */}
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold">Messages</h3>
        <div className="flex gap-3 text-gray-500">
          <span className="cursor-pointer">🔄</span>
          <span className="cursor-pointer">⋮</span>
        </div>
      </div>

      {/* Search */}
      <div className="p-4">
        <input
          type="text"
          placeholder="Search messages..."
          className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 px-4">
        <button className="px-3 py-2 text-blue-600 font-semibold border-b-2 border-blue-600">
          Sorted
        </button>
        <button className="px-3 py-2 text-gray-500">Other</button>
      </div>

      {/* Messages List */}
      <div className="flex flex-col divide-y divide-gray-100">
        {messages.map((msg) => (
          <div key={msg.id} className="flex items-center gap-3 p-4 hover:bg-gray-50 cursor-pointer">
            {/* Avatar */}
            <div className="relative">
              <img
                src={msg.img}
                alt={msg.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              {msg.online && (
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
              )}
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex justify-between">
                <h4 className="font-semibold">{msg.name}</h4>
                <span className="text-xs text-gray-400">{msg.time}</span>
              </div>
              <p className="text-sm text-gray-600 truncate">{msg.message}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Messages;
