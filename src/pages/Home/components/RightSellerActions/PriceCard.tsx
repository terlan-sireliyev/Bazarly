// import { useState, useMemo, useEffect } from "react";
// import { FaCheckCircle, FaPhoneAlt, FaBalanceScale } from "react-icons/fa";
// import PropTypes from "prop-types";
// import { deliveryOptions } from "../../../../constants/deliveryOptions";

// const rates = {
//   USD: 0.59,  
//   EUR: 0.54,  
// };

// const formatCurrency = (value, currencyCode = "AZN") => {
//   let amount = value;
//   if (currencyCode === "USD") amount = value * rates.USD;
//   if (currencyCode === "EUR") amount = value * rates.EUR;

//   return new Intl.NumberFormat("en-US", {
//     style: "currency",
//     currency: currencyCode,
//     maximumFractionDigits: 2,
//   }).format(amount);
// };

// const PriceCard = ({ ad }) => {
//   const [qty, setQty] = useState(1);
//   const [selectedDelivery, setSelectedDelivery] = useState(deliveryOptions[0]);
//   const [currencyCode, setCurrencyCode] = useState("AZN"); // Valyuta seçimi

//   useEffect(() => {
//     if (deliveryOptions.length > 0) setSelectedDelivery(deliveryOptions[0]);
//   }, []);

//   const total = useMemo(() => {
//     const base = ad.price * qty;
//     return base + (ad.delivery ? selectedDelivery.price : 0);
//   }, [ad.price, qty, selectedDelivery, ad.delivery]);

//   return (
//     <section className="rounded-2xl bg-white p-4 shadow sm:p-6">
//       <div className="flex items-start justify-between">
//         <div className="text-2xl font-extrabold">{formatCurrency(ad.price, currencyCode)}</div>
//         <div className="text-right text-sm text-gray-500">
//           <div>Bakı, {ad.location.district}</div>
//           <div className="mt-1 mt-[12px] inline-flex items-center gap-1 whitespace-nowrap text-emerald-600">
//             <FaCheckCircle /> Səlahiyyətli satıcı
//           </div>
//         </div>
//       </div>

//       {/* Valyuta seçimi */}
//       <div className="mt-2 flex gap-2">
//         {["AZN", "USD", "EUR"].map((cur) => (
//           <button
//             key={cur}
//             onClick={() => setCurrencyCode(cur)}
//             className={`px-3 py-1 rounded-lg border ${
//               currencyCode === cur ? "bg-blue-600 text-white" : "bg-gray-100"
//             }`}
//           >
//             {cur}
//           </button>
//         ))}
//       </div>

//       {/* Qiymət detalları */}
//       <div className="mt-4 rounded-xl border p-3 text-sm">
//         <div className="flex items-center justify-between">
//           <span>Məbləğ ({qty} ədəd)</span>
//           <b>{formatCurrency(ad.price * qty, currencyCode)}</b>
//         </div>

//         {ad.delivery && (
//           <div className="mt-2">
//             <label
//               htmlFor="delivery"
//               className="mb-1 block text-xs text-gray-500"
//             >
//               Çatdırılma üsulu
//             </label>
//             <select
//               id="delivery"
//               className="w-full rounded-lg border px-3 py-2"
//               value={selectedDelivery.key}
//               onChange={(e) =>
//                 setSelectedDelivery(
//                   deliveryOptions.find((o) => o.key === e.target.value) ||
//                     deliveryOptions[0]
//                 )
//               }
//             >
//               {deliveryOptions.map((o) => (
//                 <option key={o.key} value={o.key}>
//                   {`${o.label} — ${o.desc} (${formatCurrency(o.price, currencyCode)})`}
//                 </option>
//               ))}
//             </select>
//           </div>
//         )}

//         <div className="mt-4 flex items-center justify-between">
//           <span>Çatdırılma</span>
//           <b>{ad.delivery ? formatCurrency(selectedDelivery.price, currencyCode) : "—"}</b>
//         </div>

//         <div className="mt-4 flex items-center justify-between text-base font-semibold">
//           <span>Ümumi</span>
//           <span>{formatCurrency(total, currencyCode)}</span>
//         </div>
//       </div>

//       <div className="mt-4 grid grid-cols-2 gap-2">
//         <div className="flex items-center gap-2">
//           <label htmlFor="qty" className="text-sm text-gray-600">
//             Say
//           </label>
//           <input
//             id="qty"
//             type="number"
//             min={1}
//             max={ad.stock}
//             value={qty}
//             onChange={(e) =>
//               setQty(Math.max(1, Math.min(ad.stock, Number(e.target.value) || 1)))
//             }
//             className="w-20 rounded-lg border px-3 py-2"
//           />
//         </div>
//         <button className="rounded-xl border px-3 py-2 hover:bg-gray-50">
//           Səbətə at
//         </button>
//         <button className="col-span-2 flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-3 py-2 font-semibold text-white hover:bg-blue-700">
//           <FaPhoneAlt /> Satıcı ilə əlaqə
//         </button>
//       </div>

//       <p className="mt-3 flex items-center gap-2 text-xs text-gray-500">
//         <FaBalanceScale /> Satıcı ilə qiymət razılaşması mümkündür.
//       </p>
//     </section>
//   );
// };

// PriceCard.propTypes = {
//   ad: PropTypes.object.isRequired,
// };

// export default PriceCard;
