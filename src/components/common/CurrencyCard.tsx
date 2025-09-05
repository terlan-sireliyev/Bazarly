import React, { useState } from "react";

interface CurrencyCardProps {
  price: number; // AZN əsas qiymət
}

const exchangeRates: Record<string, number> = {
  AZN: 1,
  USD: 0.59,
  EUR: 0.54,
  TRY: 21.6,
  RUB: 41.2,
  BYN: 0.98,
};

const currencySymbols: Record<string, string> = {
  AZN: "AZN",
  USD: "USD",
  EUR: "EUR",
  TRY: "TRY",
  RUB: "RUB",
  BYN: "BYN",
};

const flags: Record<string, string> = {
  AZN: "🇦🇿",
  USD: "🇺🇸",
  EUR: "🇪🇺",
  TRY: "🇹🇷",
  RUB: "🇷🇺",
  BYN: "🇧🇾",
};

const CurrencyCard: React.FC<CurrencyCardProps> = ({ price }) => {
  const [currency, setCurrency] = useState<keyof typeof exchangeRates>("AZN");
  return (
    <div className="w-full">
      <div className="flex sm:flex-col md:flex-row gap-4 bg-white rounded-2xl py-4 items-center justify-between">
        {/* Select */}
        <select
          id="currency"
          value={currency}
          onChange={(e) =>
            setCurrency(e.target.value as keyof typeof exchangeRates)
          }
          className="border border-gray-300 rounded-lg px-1 py-2 text-sm text-gray-800
                     bg-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-400
                     hover:border-green-400 transition-colors sm:w-full"
        >
          {Object.keys(exchangeRates).map((cur) => (
            <option key={cur} value={cur}>
              {flags[cur]} {(price * exchangeRates[cur]).toFixed(2)}{" "}
              {currencySymbols[cur]}
            </option>
          ))}
        </select>

        {/* Daha ətraflı düyməsi */}
        <button className="sm:w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-sm shadow transition-colors">
          Daha ətraflı
        </button>
      </div>
    </div>
  );
};

export default CurrencyCard;
