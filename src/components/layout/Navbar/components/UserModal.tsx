import { MdOutlineLogout, MdHome, MdPeopleAlt, MdBookmarkBorder, MdMessage, MdShoppingCart, MdListAlt, MdShoppingBag } from "react-icons/md";
import Modal from "../../../ui/Modal";
import '../../../../index.css'

interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} width="400px">
      {/* User info */}
      <div className="flex items-center border-b border-gray-200 pb-3 mb-4">
        <img
          className="h-12 w-12 rounded-full border-2 border-blue-500"
          src="https://media.istockphoto.com/id/1400577262/photo/happy-mature-african-american-man-standing-alone-against-a-red-background-in-a-studio-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=oR0_NyouKgPESp508Bag8GEN_JbkIA3SJoYs4s_3iXI="
          alt="User"
        />
        <span className="ml-3 font-semibold text-gray-800">John Doe</span>
      </div>

      {/* Nav Links */}
      <ul className="space-y-2 text-gray-700">
        <li>
          <a href="/" className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-gray-100 transition">
            <MdHome className="text-xl text-blue-400" />
            <span>Ana Səhifə</span>
          </a>
        </li>
        <li>
          <a href="/follow" className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-gray-100 transition">
            <MdPeopleAlt className="text-xl text-blue-400" />
            <span>Follow</span>
          </a>
        </li>
        <li>
          <a href="/saves" className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-gray-100 transition">
            <MdBookmarkBorder className="text-xl text-blue-400" />
            <span>Save Items</span>
            <span className="ml-auto rounded-full bg-blue-200 px-2 py-0.5 text-xs text-gray-600">3</span>
          </a>
        </li>
        <li>
          <a href="/messages" className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-gray-100 transition">
            <MdMessage className="text-xl text-blue-400" />
            <span>Messages</span>
            <span className="ml-auto rounded-full bg-blue-200 px-2 py-0.5 text-xs text-gray-600">3</span>
          </a>
        </li>
        <li>
          <a href="/basket" className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-gray-100 transition">
            <MdShoppingCart className="text-xl text-blue-400" />
            <span>My Basket</span>
            <span className="ml-auto rounded-full bg-blue-200 px-2 py-0.5 text-xs text-gray-600">3</span>
          </a>
        </li>
        <li>
          <a href="/orders" className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-gray-100 transition">
            <MdListAlt className="text-xl text-blue-400" />
            <span>My Orders</span>
            <span className="ml-auto rounded-full bg-blue-200 px-2 py-0.5 text-xs text-gray-600">3</span>
          </a>
        </li>
        <li>
          <a href="/all-orders" className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-gray-100 transition">
            <MdShoppingBag className="text-xl text-blue-400" />
            <span>All Orders</span>
            <span className="ml-auto rounded-full bg-blue-200 px-2 py-0.5 text-xs text-gray-600">3</span>
          </a>
        </li>
      </ul>

      {/* Logout Button */}
      <button
        onClick={onClose}
        className="mt-6 w-full flex items-center gap-3 px-3 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition"
      >
        <MdOutlineLogout className="text-xl" />
        <span>Logout</span>
      </button>
    </Modal>
  );
};

export default UserModal;
