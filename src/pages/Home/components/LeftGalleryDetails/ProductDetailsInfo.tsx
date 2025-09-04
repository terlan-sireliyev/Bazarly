// import PropTypes from "prop-types";
// import { FaCreditCard, FaQuestionCircle, FaTruck, FaUndo } from "react-icons/fa";

// interface AdMeta {
//   returnPolicy: string;
// }

// interface Ad {
//   title: string;
//   urgent?: boolean;
//   images: string[];
//   description: string;
//   meta: AdMeta;
// }

// interface ProductDetailsInfoProps {
//   ad: Ad;
// }

// const ProductDetailsInfo: React.FC<ProductDetailsInfoProps> = ({ ad }) => {
//   return (
//     <section className="rounded-2xl bg-white p-4 shadow sm:p-6">
//       <p className="mt-2 leading-7 text-gray-700">{ad.description}</p>

//       <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
//         <div>
//           <h3 className="mb-2 text-lg font-semibold">Niyə bu modeli seçməlisiniz?</h3>
//           <ul className="list-disc space-y-2 pl-5 text-gray-700">
//             <li>Güclü A15 Bionic prosessor – oyun və peşəkar tətbiqlər üçün ideal.</li>
//             <li>ProMotion 120Hz ekran – daha axıcı hərəkət, gözə xoş vizual.</li>
//             <li>Uzunömürlü batareya – gün boyu intensiv istifadəyə dözür.</li>
//             <li>Pro kamera sistemi – gecə rejimi, ProRAW və sabit video.</li>
//           </ul>
//         </div>
//         <div>
//           <h3 className="mb-2 text-lg font-semibold">Komplektasiya</h3>
//           <ul className="list-disc space-y-2 pl-5 text-gray-700">
//             <li>Orijinal qutu və kabel</li>
//             <li>IMEI uyğunluq yoxlanılıb</li>
//             <li>Telefon təmizdir, iCloud kilidi yoxdur</li>
//             <li>Vizual aşınma minimal (şəkillərə baxın)</li>
//           </ul>
//         </div>
//       </div>

//       {/* Çatdırılma / Ödəniş / Geri qaytarılma */}
//       <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 mt-4">
//         <div className="rounded-xl border p-4">
//           <h3 className="mb-1 flex items-center gap-2 whitespace-nowrap text-lg font-semibold">
//             <FaTruck /> Çatdırılma qaydaları
//           </h3>
//           <p className="text-sm text-gray-700">Sifarişi aşağıdakı üsullarla ala bilərsiniz:</p>
//           <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700">
//             <li>Şəhərdaxili kuryer: 24 saat ərzində təslim.</li>
//             <li>Özün götür (pickup): Anbar/pickup nöqtəsindən.</li>
//             <li>Şəhərlərarası poçt: 1–3 iş günü, izləmə kodu ilə.</li>
//             <li>Sığortalı çatdırılma: zədə riskinə qarşı əlavə təminat.</li>
//           </ul>
//         </div>
//         <div className="rounded-xl border p-4">
//           <h3 className="mb-1 flex items-center gap-2 text-lg font-semibold">
//             <FaCreditCard /> Ödəniş üsulları
//           </h3>
//           <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
//             <li>Nağd (görüş zamanı)</li>
//             <li>Kartla ödəniş (POS/online link)</li>
//             <li>Hissə-hissə (kredit) – uyğunluq əsasında</li>
//             <li>Barter – yalnız razılaşdırılarsa</li>
//           </ul>
//           <p className="mt-2 text-xs text-gray-500">
//             Təhlükəsizlik üçün ödənişi yalnız platformadakı rəsmi kanallarla edin.
//           </p>
//         </div>
//         <div className="rounded-xl border p-4">
//           <h3 className="mb-1 flex items-center gap-2 text-lg font-semibold">
//             <FaUndo /> Geri qaytarılma
//           </h3>
//           <p className="text-sm text-gray-700">{ad.meta.returnPolicy}</p>
//           <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700">
//             <li>Məhsul alındığı vəziyyətdə təqdim olunmalıdır.</li>
//             <li>Mexaniki zədələr və müdaxilə olarsa qəbul olunmur.</li>
//             <li>Qəbz/Faktura təqdim edilməlidir.</li>
//           </ul>
//         </div>
//       </div>

//       {/* FAQ */}
//       <details className="rounded-xl border p-4 open:shadow mt-4" open>
//         <summary className="flex cursor-pointer items-center gap-2 text-lg font-semibold">
//           <FaQuestionCircle /> Sual–Cavab (FAQ)
//         </summary>
//         <div className="mt-3 space-y-3 text-sm text-gray-700">
//           <div>
//             <p className="font-semibold">• Batareya neçə faizdir?</p>
//             <p>Hazırda 90% – şəkillərdə və görüş zamanı yoxlaya bilərsiniz.</p>
//           </div>
//           <div>
//             <p className="font-semibold">• Kredit mümkündürmü?</p>
//             <p>Bəli, uyğunluq əsasında aylıq ödəniş planı təklif olunur.</p>
//           </div>
//           <div>
//             <p className="font-semibold">• Çatdırılma ödənişi necə hesablanır?</p>
//             <p>Seçdiyiniz üsula görə 0–12 AZN arası dəyişir (aşağıdakı kalkulyatordan istifadə edin).</p>
//           </div>
//         </div>
//       </details>
//     </section>
//   );
// };

// // PropTypes ilə təsdiqləmə
// ProductDetailsInfo.propTypes = {
//   ad: PropTypes.shape({
//     description: PropTypes.string.isRequired,
//     meta: PropTypes.shape({
//       returnPolicy: PropTypes.string.isRequired,
//     }).isRequired,
//   }).isRequired,
// };

// export default ProductDetailsInfo;
