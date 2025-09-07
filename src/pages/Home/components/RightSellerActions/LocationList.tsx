export default function LocationCard() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-5 w-full  ">
      {/* Başlıq */}
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        📍 Məkan
      </h2>

      {/* Ünvan */}
      <div className="p-3 rounded-lg border border-gray-200 bg-gray-50 mb-5">
        <p className="text-sm text-gray-800 font-medium">
          Bakı, Nərimanov
        </p>
        <p className="text-sm text-gray-600">
          Heydər Əliyev prospekti 15
        </p>
      </div>

      {/* Xəritə */}
      <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.93093091358!2d49.86709221535464!3d40.409264979365824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d5a77d6b8bb%3A0xadc62ab7910ec7e0!2sBaku%2C%20Azerbaijan!5e0!3m2!1sen!2saz!4v1632224329387!5m2!1sen!2saz"
          width="100%"
          height="250"
        //   allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
