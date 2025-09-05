import { useState } from "react";
import { FaHandshake } from "react-icons/fa";
type Product = {
  id: string;
  title: string;
  price: number;
  mainImage: string;
  images?: string[];
  meta: {
    views: number;
    publishedAt: string;
    tags: string[];
  };
};

interface PriceCardProps {
  ad: Product;
}
const PriceCard = ({ ad }: PriceCardProps) => {
  const [currency, setCurrency] = useState<"AZN" | "USD" | "EUR">("AZN");
  const [deliveryMethod, setDeliveryMethod] = useState<
    "kurier" | "store" | "express"
  >("kurier");
  const exchangeRates: Record<"AZN" | "USD" | "EUR", number> = {
    AZN: 1,
    USD: 0.59,
    EUR: 0.54,
  };
  const deliveryCostAZN = 6;
  console.log(exchangeRates[currency])
  const priceInSelectedCurrency = ad.price * exchangeRates[currency];

  // Delivery price based on method
  let deliveryInSelectedCurrency = 0;
  if (deliveryMethod === "kurier")
    deliveryInSelectedCurrency = deliveryCostAZN * exchangeRates[currency];
  else if (deliveryMethod === "store") deliveryInSelectedCurrency = 0;
  else if (deliveryMethod === "express")
    deliveryInSelectedCurrency = 15 * exchangeRates[currency];

  const total = priceInSelectedCurrency + deliveryInSelectedCurrency;

  return (
    <>
      <div className="flex items-start justify-between mb-5">
        <h2 className="text-2xl font-bold text-gray-800">
          {currency} {priceInSelectedCurrency.toFixed(2)}
        </h2>
        <div className="text-right text-sm text-gray-600">
          <div>Bakı, Nərimanov</div>
          <div className="mt-1 flex items-center gap-1 text-emerald-600 font-medium">
            <FaHandshake className="text-indigo-600" />
            Səlahiyyətli satıcı
          </div>
        </div>
      </div>

      {/* Valyuta seçimləri */}
      <div className="flex gap-2 mb-5">
        {["AZN", "USD", "EUR"].map((cur) => (
          <button
            key={cur}
            onClick={() => setCurrency(cur as "AZN" | "USD" | "EUR")}
            className={`px-4 py-1 rounded-lg text-sm font-medium border transition ${
              cur === currency
                ? "bg-indigo-600 text-white border-indigo-600 shadow"
                : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
            }`}
          >
            {cur}
          </button>
        ))}
      </div>

      {/* Delivery select */}
      <div className="mb-5">
        <label htmlFor="delivery" className="block text-xs text-gray-500 mb-1">
          Çatdırılma üsulu
        </label>
        <select
          id="delivery"
          value={deliveryMethod}
          onChange={(e) =>
            setDeliveryMethod(e.target.value as "kurier" | "store" | "express")
          }
          className="w-full rounded-lg border-gray-300 px-3 py-2 text-sm focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="kurier">
            Kuriyer (şəhərdaxili) — {currency}{" "}
            {(deliveryCostAZN * exchangeRates[currency]).toFixed(2)}
          </option>
          <option value="store">Mağazadan götür — Ödənişsiz</option>
          <option value="express">
            Express — Günün içində ({currency}{" "}
            {(15 * exchangeRates[currency]).toFixed(2)})
          </option>
        </select>
      </div>

      {/* Price details */}
      <div className="border border-gray-200 rounded-xl p-4 text-sm space-y-4 bg-gray-50/30">
        <div className="flex justify-between text-gray-700">
          <span>Məbləğ (1 ədəd)</span>
          <b className="text-gray-900">
            {currency} {priceInSelectedCurrency.toFixed(2)}
          </b>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>Çatdırılma</span>
          <b className="text-gray-900">
            {currency} {deliveryInSelectedCurrency.toFixed(2)}
          </b>
        </div>
        <div className="flex justify-between text-base font-semibold text-indigo-700">
          <span>Ümumi</span>
          <span>
            {currency} {total.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Quantity and buttons */}
      <div className="mt-5 grid grid-cols-2 gap-2">
        <div className="flex items-center gap-2">
          <label htmlFor="qty" className="text-sm text-gray-600">
            Say
          </label>
          <input
            id="qty"
            type="number"
            min={1}
            defaultValue={1}
            className="w-16 rounded-lg border-gray-300 px-2 py-1 text-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <button className="rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">
          Səbətə at
        </button>
        <button className="col-span-2 flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-3 py-2 font-semibold text-white hover:bg-indigo-700 shadow">
          Satıcı ilə əlaqə
        </button>
      </div>

      <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
        <FaHandshake className="text-indigo-600" />
        <span>Satıcı ilə qiymət razılaşması mümkündür.</span>
      </div>
    </>
  );
};

export default PriceCard;
