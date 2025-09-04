import { FaShieldAlt } from "react-icons/fa";

const SafetyTipsSection = () => {
  return (
    <section className="rounded-2xl bg-white p-4 shadow sm:p-6">
      <h2 className="flex items-center gap-2 text-lg font-bold">
        <FaShieldAlt /> Təhlükəsizlik məsləhətləri
      </h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-700">
        <li>Əşyaya baxmadan öncə ödəniş etməyin.</li>
        <li>İctimai yerdə görüşün, mümkün olsa, dostla gedin.</li>
        <li>Şəxsi məlumatlarınızı paylaşmayın.</li>
        <li>Şübhəli elanları “Şikayət et” düyməsi ilə bildirin.</li>
      </ul>
    </section>
  );
};

export default SafetyTipsSection;
