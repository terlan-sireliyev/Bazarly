const SellerCard = () => {
  return (
    <div className="bg-gradient-to-b mt-2 w-full from-white to-gray-50 lg:rounded-2xl shadow-lg hover:shadow-2xl transition-shadow p-6 w-80 border border-gray-100">
      {/* Profil və status */}
      <div className="flex items-center gap-4 mb-5">
        <img
          src="https://i.pravatar.cc/40"
          alt="Profil"
          className="w-14 h-14 rounded-full object-cover ring-2 ring-blue-200"
        />
        <div className="flex-1">
          <h2 className="text-base font-semibold text-gray-800">Elvin Məmmədov</h2>
          <p className="text-sm text-gray-500">36 ray</p>
        </div>
        <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium">
          ✔ Təsdiqlənmiş
        </span>
      </div>

      {/* Məlumatlar */}
      <div className="text-sm text-gray-700 space-y-2 mb-5">
        <p className="flex justify-between">
          <span className="font-medium">Qoşulub:</span>
          <span className="text-gray-600">2022-03-14</span>
        </p>
        <p className="flex justify-between">
          <span className="font-medium">Son aktivlik:</span>
          <span className="text-gray-600">bu gün, 12:10</span>
        </p>
        <p className="flex justify-between">
          <span className="font-medium">Cavab sürəti:</span>
          <span className="text-gray-600">93%</span>
        </p>
        <p className="flex justify-between">
          <span className="font-medium">Ortalama cavab vaxtı:</span>
          <span className="text-gray-600">~15 dəq</span>
        </p>
        <p className="flex justify-between">
          <span className="font-medium">Elan sayı:</span>
          <span className="text-gray-600">24</span>
        </p>
      </div>

      {/* Düymələr */}
      <div className="space-y-3">
        <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 text-sm text-gray-700 font-medium hover:bg-gray-100 transition">
          📞 Zəng et
        </button>
        <button className="w-full flex items-center justify-center gap-2 rounded-lg py-2 text-sm bg-green-500 text-white font-medium shadow hover:bg-green-600 transition">
          💬 WhatsApp
        </button>
      </div>

      {/* Alt link */}
      <div className="mt-4 text-center">
        <a
          href="#"
          className="text-sm text-blue-600 hover:underline font-medium"
        >
          Satıcının digər elanları (24)
        </a>
      </div>
    </div>
  );
};

export default SellerCard;
