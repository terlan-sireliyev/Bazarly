import { FaPaperPlane, FaSignInAlt, FaUserPlus } from "react-icons/fa";

export const mobileMenuActions = [
  {
    path: "/publish",
    label: "Publish",
    icon: FaPaperPlane,
    className: "from-purple-500 to-pink-500",
  },
  {
    path: "/login",
    label: "Login",
    icon: FaSignInAlt,
    className: "from-blue-500 to-cyan-500",
  },
  {
    path: "/register",
    label: "Register",
    icon: FaUserPlus,
    className: "from-green-500 to-lime-400",
  },
];
