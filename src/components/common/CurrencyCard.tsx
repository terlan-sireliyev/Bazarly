
const CurrencyCard = () => {
  return (
    <div className="w-full   ">
      <div
        className="
      flex 
      sm:flex-col 
      md:flex-row
      gap-4
       bg-white rounded-2xl py-4  items-center justify-between"
      >
        {/* Select */}
        <select
          id="currency"
          className="border border-gray-300 rounded-lg px-1 py-2 text-sm text-gray-800
                     bg-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-400
                     hover:border-green-400 transition-colors
                    sm:w-full "
        >
         <option value="azn">🇦🇿 1250 AZN</option>
  <option value="usd">🇺🇸 125 USD</option>
  <option value="eur">🇪🇺 125.50 EUR</option>
  <option value="try">🇹🇷 240 TRY</option>
  <option value="rub">🇷🇺 9500 RUB</option>
  <option value="byn">🇧🇾 320 BYN</option>
        </select>

        {/* Daha ətraflı düyməsi */}
        <button className="sm:w-full  bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-sm shadow transition-colors">
          Daha ətraflı
        </button>
      </div>
    </div>
  );
};

export default CurrencyCard;
