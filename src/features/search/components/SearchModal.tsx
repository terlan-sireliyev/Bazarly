import Modal from "../../../components/ui/Modal";
import { FaSearch, FaTimes } from "react-icons/fa";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const dummyResults = [
    {
      id: 1,
      title: "iPhone 15 Pro",
      desc: "Apple-ın ən yeni telefonu",
      img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=200&hei=200&fmt=png-alpha"
    },
    {
      id: 2,
      title: "Nike Air Max",
      desc: "Rahat və dəbli idman ayaqqabısı",
      img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/4d9f4e0a-d028-44d7-b17f-73e25c0d2907/air-max-90-shoes.png"
    }, {
      id: 3,
      title: "Nike Air Max",
      desc: "Rahat və dəbli idman ayaqqabısı",
      img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/4d9f4e0a-d028-44d7-b17f-73e25c0d2907/air-max-90-shoes.png"
    },
     {
      id: 4,
      title: "Nike Air Max",
      desc: "Rahat və dəbli idman ayaqqabısı",
      img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/4d9f4e0a-d028-44d7-b17f-73e25c0d2907/air-max-90-shoes.png"
    },
     {
      id: 5,
      title: "Nike Air Max",
      desc: "Rahat və dəbli idman ayaqqabısı",
      img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/4d9f4e0a-d028-44d7-b17f-73e25c0d2907/air-max-90-shoes.png"
    },
    // ... qalan məhsullar
  ];

  const trending = ["PlayStation 5", "Smart Watch", "Elektrikli Skuter", "Gaming PC", "Səyahət çantası"];

  return (
    <Modal isOpen={isOpen} onClose={onClose} width="95%">
      {/* Başlıq */}
      <div className="flex justify-between items-center mb-6 border-b pb-3">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">🔎 Axtarış</h2>
        <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-200 transition">
          <FaTimes size={18} />
        </button>
      </div>

      {/* Input + Axtar düyməsi */}
      <div className="flex flex-col sm:flex-row mb-6 gap-3">
        <input
          type="text"
          placeholder="Məhsul və ya kateqoriya axtar..."
          className="flex-1 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none shadow-sm"
        />
        <button className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium">
          <FaSearch />
          Axtar
        </button>
      </div>

      {/* Tapılan nəticələr */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 max-h-72 overflow-y-auto">
        {dummyResults.map((item) => (
          <div
            key={item.id}
            className="flex items-center p-3 border border-gray-200 rounded-xl hover:shadow-lg transition cursor-pointer bg-white"
          >
            <img src={item.img} alt={item.title} className="w-20 h-20 rounded-lg object-cover flex-shrink-0" />
            <div className="ml-4">
              <h3 className="font-semibold text-gray-900 text-lg">{item.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Daha çoxunu gör düyməsi */}
      <button className="w-full mb-6 px-4 py-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition font-medium">
        🔎 Axtardığınız şeyin daha çoxunu gör
      </button>

      {/* Maraqlı axtarışlar */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-700 mb-2">✨ Maraqlı axtarışlar</h3>
        <div className="flex flex-wrap gap-2">
          {trending.map((tag, i) => (
            <span
              key={i}
              className="px-4 py-2 text-sm bg-gray-100 rounded-full hover:bg-gray-200 cursor-pointer transition"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bağla butonu */}
      <button
        onClick={onClose}
        className="px-4 py-3 w-full bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition font-medium"
      >
        Bağla
      </button>
    </Modal>
  );
};

export default SearchModal;
