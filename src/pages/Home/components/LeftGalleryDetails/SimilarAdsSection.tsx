// import PropTypes from "prop-types";
// import { currency } from "../../../../constants/Currecny";

// const SimilarAdsSection = ({ ad }) => {
//   return (
//     <section className="rounded-2xl bg-white p-4 shadow sm:p-6">
//       <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
//         {ad.similar.map((s) => (
//           <a
//             key={s.id}
//             href={`/elan/${s.id}`}
//             className="group overflow-hidden rounded-xl border transition hover:shadow-md"
//           >
//             <img
//               src={s.image}
//               alt={s.title}
//               className="h-40 w-full object-cover"
//             />
//             <div className="p-3">
//               <div className="line-clamp-1 font-semibold group-hover:underline">
//                 {s.title}
//               </div>
//               <div className="text-sm text-gray-600">
//                 {currency(s.price)}
//               </div>
//             </div>
//           </a>
//         ))}
//       </div>
//     </section>
//   );
// };

// SimilarAdsSection.propTypes = {
//   ad: PropTypes.shape({
//     similar: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
//           .isRequired,
//         title: PropTypes.string.isRequired,
//         image: PropTypes.string.isRequired,
//         price: PropTypes.number.isRequired,
//       })
//     ).isRequired,
//   }).isRequired,
// };

// export default SimilarAdsSection;
