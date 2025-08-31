import { 
  FaMobileAlt, FaCouch, FaHome, FaTools, FaCar, 
  FaFutbol, FaTshirt, FaBriefcase, FaBrush 
} from "react-icons/fa";

export const categories = [
  { 
    name: "Elektronika", 
    icon: FaMobileAlt, // JSX deyil, sadəcə component reference
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
  }
];
