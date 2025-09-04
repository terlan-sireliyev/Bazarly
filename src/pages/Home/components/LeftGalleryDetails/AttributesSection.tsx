// import React from "react";
// import PropTypes from "prop-types";

// // Tipi təyin edirik
// interface AttrRow {
//   label: string;
//   value: string | number; // istəyə görə başqa tip də əlavə edə bilərsən
// }

// interface AttributesSectionProps {
//   attrGrid: AttrRow[];
// }

// const AttributesSection: React.FC<AttributesSectionProps> = ({ attrGrid }) => {
//   return (
//     <section className="rounded-2xl bg-white p-4 shadow sm:p-6">
//       <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
//         {attrGrid.map((row) => (
//           <div key={row.label} className="rounded-xl border p-3">
//             <div className="text-xs text-gray-500">{row.label}</div>
//             <div className="text-sm font-semibold text-gray-800">{row.value}</div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// // PropTypes hələ də qalsın, əgər JS istifadəçiləri varsa
// AttributesSection.propTypes = {
//   attrGrid: PropTypes.arrayOf(
//     PropTypes.shape({
//       label: PropTypes.string.isRequired,
//       value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//     })
//   ).isRequired,
// };

// export default AttributesSection;
