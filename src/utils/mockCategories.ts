import { 
  FaMobileAlt, FaCouch, FaHome, FaTools, FaCar, 
  FaFutbol, FaTshirt, FaBriefcase, FaBrush, 
  FaBook, FaAppleAlt, FaDog, FaPlane, FaMusic, 
  FaGamepad, FaCamera, FaHeart, FaUtensils, FaShoppingBasket, FaBaby 
} from "react-icons/fa";

export const categories = [
  { 
    name: "Elektronika", 
    icon: FaMobileAlt,
    color: "bg-red-100",
    sub: ["Telefonlar", "Komputerlər", "Televizorlar", "Audio", "Planşetlər", "Laptoplar"]
  },
  { 
    name: "Mebel", 
    icon: FaCouch, 
    color: "bg-blue-100",
    sub: ["Divan", "Stol", "Stul", "Yataq", "Kreslo"]
  },
  { 
    name: "Ev və Bağ", 
    icon: FaHome, 
    color: "bg-green-100",
    sub: ["Bağ alətləri", "Dekor", "Mətbəx", "Bitkilər"]
  },
  { 
    name: "Təmir və Tikinti", 
    icon: FaTools, 
    color: "bg-cyan-100",
    sub: Array.from({length: 10}, (_, i) => `Tikinti və təmir aləti ${i+1}`)
  },
  { 
    name: "Nəqliyyat", 
    icon: FaCar, 
    color: "bg-sky-100",
    sub: ["Avtomobil", "Motosiklet", "Velosiped"]
  },
  { 
    name: "İdman və Hobbi", 
    icon: FaFutbol, 
    color: "bg-pink-100",
    sub: ["Toplar", "Şahmat", "Gimnastika alətləri"]
  },
  { 
    name: "Şəxsi Əşyalar", 
    icon: FaTshirt, 
    color: "bg-violet-100",
    sub: ["Geyim", "Ayaqqabı", "Aksesuar"]
  },
  { 
    name: "İş", 
    icon: FaBriefcase, 
    color: "bg-green-100",
    sub: ["Ofis işi", "Sənaye işi"]
  },
  { 
    name: "Xidmətlər", 
    icon: FaBrush, 
    color: "bg-yellow-100",
    sub: ["Təmizlik", "Dizayn", "Kuryer"]
  },
  // Yeni əlavə olunanlar
  { 
    name: "Kitab və Dərsliklər", 
    icon: FaBook, 
    color: "bg-orange-100",
    sub: ["Bədii kitablar", "Dərsliklər", "Jurnallar"]
  },
  { 
    name: "Qida və İçkilər", 
    icon: FaAppleAlt, 
    color: "bg-lime-100",
    sub: ["Meyvələr", "İçkilər", "Şirniyyatlar"]
  },
  { 
    name: "Heyvanlar", 
    icon: FaDog, 
    color: "bg-amber-100",
    sub: ["İtlər", "Pişiklər", "Quşlar", "Balıqlar"]
  },
  { 
    name: "Səyahət", 
    icon: FaPlane, 
    color: "bg-indigo-100",
    sub: ["Aviabilet", "Tur paketləri", "Otellər"]
  },
  { 
    name: "Musiqi", 
    icon: FaMusic, 
    color: "bg-rose-100",
    sub: ["Alətlər", "Disklər", "Konsert biletləri"]
  },
  { 
    name: "Oyun və Əyləncə", 
    icon: FaGamepad, 
    color: "bg-fuchsia-100",
    sub: ["Kompüter oyunları", "PlayStation", "Masa oyunları"]
  },
  { 
    name: "Foto və Video", 
    icon: FaCamera, 
    color: "bg-stone-100",
    sub: ["Fotoaparatlar", "Videokameralar", "Dronlar"]
  },
  { 
    name: "Sağlamlıq və Gözəllik", 
    icon: FaHeart, 
    color: "bg-teal-100",
    sub: ["Kosmetika", "Vitaminlər", "Fitness"]
  },
  { 
    name: "Restoran və Kafe", 
    icon: FaUtensils, 
    color: "bg-purple-100",
    sub: ["Yeməklər", "Çay evləri", "Kafelər"]
  },
  { 
    name: "Market və Məişət", 
    icon: FaShoppingBasket, 
    color: "bg-red-200",
    sub: ["Məişət malları", "Təmizlik vasitələri", "Qab-qacaq"]
  },
  { 
    name: "Uşaq məhsulları", 
    icon: FaBaby, 
    color: "bg-blue-200",
    sub: ["Oyuncaqlar", "Uşaq geyimləri", "Uşaq arabaları"]
  }
];
