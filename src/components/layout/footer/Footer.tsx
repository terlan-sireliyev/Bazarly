import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaLinkedinIn,
} from "react-icons/fa";

export default function CorporateFooter() {
  return (
    <footer className="bg-[#111] text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700">
        {/* Logo və təsvir */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Bazarly</h2>
          <p className="text-sm leading-relaxed">
            Güvənilir və rahat elan platforması. Məhsullarını yerləşdir,
            alıcılarla problemsiz əlaqə saxla.
          </p>
        </div>

        {/* Naviqasiya */}
        <div>
          <h3 className="text-white font-semibold mb-4 uppercase tracking-wide">
            Naviqasiya
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white transition">
                Ana səhifə
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Kategoriyalar
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Elan yerləşdir
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Əlaqə
              </a>
            </li>
          </ul>
        </div>

        {/* Hüquqi */}
        <div>
          <h3 className="text-white font-semibold mb-4 uppercase tracking-wide">
            Hüquqi
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white transition">
                İstifadə şərtləri
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Məxfilik siyasəti
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Kömək & FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Dəstək xidməti
              </a>
            </li>
          </ul>
        </div>

        {/* Əlaqə */}
        <div>
          <h3 className="text-white font-semibold mb-4 uppercase tracking-wide">
            Əlaqə
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              Email:{" "}
              <a href="mailto:support@bazarly.az" className="hover:text-white">
                support@bazarly.az
              </a>
            </li>
            <li>
              Telefon:{" "}
              <a href="tel:+994500000000" className="hover:text-white">
                +994 50 000 00 00
              </a>
            </li>
            <li>Ünvan: Bakı, Azərbaycan</li>
          </ul>
        </div>
      </div>

      {/* Alt bar */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-xs text-gray-500">
          © 2025 Bazarly. Bütün hüquqlar qorunur.
        </p>
        <div className="flex gap-4 mt-3 md:mt-0">
          <a href="#" className="hover:text-blue-500 transition">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-pink-500 transition">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-sky-500 transition">
            <FaTelegramPlane />
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
}
