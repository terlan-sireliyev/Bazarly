import { FaShieldAlt } from "react-icons/fa";

const ProtectionCard = () => {
  return (
    <section className="rounded-2xl bg-white p-4 shadow sm:p-6">
      <div className="flex items-center gap-2 font-semibold">
        <FaShieldAlt /> Alıcı qoruma proqramı
      </div>
      <p className="mt-2 text-sm text-gray-700">
        Platforma daxilində mesajlaşmadan istifadə edin. Ödənişi yalnız malı gördükdən sonra və ya etibarlı çatdırılma ilə edin.
      </p>
      <ul className="mt-2 list-disc pl-5 text-xs text-gray-600">
        <li>Mesajlarda heç vaxt kart məlumatı paylaşmayın.</li>
        <li>Şübhəli linklərə klikləməyin.</li>
        <li>Rəsmi çatdırılma/ödəniş düymələrindən istifadə edin.</li>
      </ul>
    </section>
  );
};


export default ProtectionCard;
