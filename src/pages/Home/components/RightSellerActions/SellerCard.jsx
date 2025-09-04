// // src/components/Shared/ProductSingle/SellerCard.jsx
// import PropTypes from "prop-types";
// import { FaCheckCircle, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

// const SellerCard = ({ ad }) => {
//   const seller = ad.seller; 

//   return (
//     <section className="rounded-2xl bg-white p-4 shadow sm:p-6">
//       <div className="flex items-center gap-3">
//         <img
//           className="h-14 w-14 rounded-full object-cover"
//           src="https://i.pravatar.cc/100?img=17"
//           alt="seller"
//         />
//         <div className="flex-1">
//           <div className="flex items-center gap-2">
//             <div className="font-bold">{seller.name}</div>
//             {seller.verified && (
//               <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-xs text-emerald-700">
//                 <FaCheckCircle className="text-emerald-600" /> Təsdiqlənmiş
//               </span>
//             )}
//           </div>
//           <p className="text-xs text-gray-500">{seller.totalReviews} rəy</p>
//         </div>
//       </div>

//       <div className="mt-4 space-y-2 text-sm text-gray-700">
//         <div className="flex justify-between">
//           <span>Qoşulub</span>
//           <span>{seller.joinedAt}</span>
//         </div>
//         <div className="flex justify-between">
//           <span>Son aktivlik</span>
//           <span>{seller.lastSeen}</span>
//         </div>
//         <div className="flex justify-between">
//           <span>Cavab sürəti</span>
//           <span>{Math.round(seller.responseRate * 100)}%</span>
//         </div>
//         <div className="flex justify-between">
//           <span>Ortalama cavab vaxtı</span>
//           <span>{seller.responseTime}</span>
//         </div>
//         <div className="flex justify-between">
//           <span>Elan sayı</span>
//           <span>{seller.adsCount}</span>
//         </div>
//       </div>

//       <div className="mt-4 grid gap-2">
//         <a
//           href={`tel:${seller.phone}`}
//           className="flex items-center justify-center gap-2 rounded-xl border px-3 py-2 hover:bg-gray-50"
//         >
//           <FaPhoneAlt /> Zəng et
//         </a>
//         <a
//           href={`https://wa.me/${seller.whatsapp}`}
//           target="_blank"
//           rel="noopener"
//           className="flex items-center justify-center gap-2 rounded-xl border px-3 py-2 text-green-600 hover:bg-gray-50"
//         >
//           <FaWhatsapp /> WhatsApp
//         </a>
//       </div>

//       <div className="mt-3 text-center">
//         <a
//           href={`/istifadeci/${encodeURIComponent(seller.name)}/elanlar`}
//           className="text-sm text-blue-600 hover:underline"
//         >
//           Satıcının digər elanları ({seller.adsCount})
//         </a>
//       </div>
//     </section>
//   );
// };

// SellerCard.propTypes = {
//   ad: PropTypes.shape({
//     seller: PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       verified: PropTypes.bool,
//       totalReviews: PropTypes.number,
//       joinedAt: PropTypes.string,
//       lastSeen: PropTypes.string,
//       responseRate: PropTypes.number,
//       responseTime: PropTypes.string,
//       adsCount: PropTypes.number,
//       phone: PropTypes.string,
//       whatsapp: PropTypes.string,
//     }).isRequired,
//   }).isRequired,
// };

// export default SellerCard;
