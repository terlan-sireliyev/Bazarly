// import { useState } from "react";
// import PropTypes from "prop-types";

// // TS üçün tip
// interface Ad {
//   title: string;
//   urgent?: boolean;
//   images: string[];
// }

// interface GallerySectionProps {
//   ad: Ad;
// }

// const GallerySection: React.FC<GallerySectionProps> = ({ ad }) => {
//   const [activeImg, setActiveImg] = useState(0);

//   return (
//     <section className="rounded-2xl bg-white p-4 shadow sm:p-6">
//       <div className="flex flex-col items-center">
//         <div className="relative w-full overflow-hidden rounded-xl border">
//           <img
//             src={ad.images[activeImg]}
//             alt={ad.title}
//             className="mx-auto max-h-[450px] w-full bg-gray-50 object-contain"
//           />
//           {ad.urgent && (
//             <span className="absolute left-3 top-3 rounded-full bg-gradient-to-r from-rose-500 to-orange-500 px-3 py-1 text-xs font-bold text-white shadow">
//               TƏCİLİ
//             </span>
//           )}
//         </div>
//         <div className="mt-3 grid grid-cols-5 gap-2 sm:grid-cols-6">
//           {ad.images.map((src, i) => (
//             <button
//               key={i}
//               onClick={() => setActiveImg(i)}
//               className={`overflow-hidden rounded-lg border ${activeImg === i ? "ring-2 ring-blue-500" : ""}`}
//               aria-label={`Şəkil ${i + 1}`}
//             >
//               <img
//                 src={src}
//                 className="h-20 w-full object-cover"
//                 alt={`thumb-${i}`}
//               />
//             </button>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// GallerySection.propTypes = {
//   ad: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     urgent: PropTypes.bool,
//     images: PropTypes.arrayOf(PropTypes.string).isRequired,
//   }).isRequired,
// };

// export default GallerySection;
