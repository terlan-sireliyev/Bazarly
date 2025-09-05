import ProductCard from "../../features/products/components/ProductCard";
import { products } from "../../utils/productList";
import Categories from "../../features/Categories/components/Categories";
import { useState } from "react";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState<
    "all" | "vip" | "premium" | "sadə"
  >("all");

  const filteredProducts =
    activeTab === "all"
      ? products
      : products.filter((p) => p.status === activeTab);

  const tabs: ("all" | "premium" | "vip" | "sadə")[] = [
    "all",
    "premium",
    "vip",
    "sadə",
  ];

  return (
    <main className="max-w-7xl mx-auto my-2 px-2 sm:px-2">
      <Categories />

      {/* Tab menyu */}
      <div className="flex gap-3  ">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-2 py-2 rounded-lg font-medium whitespace-nowrap transition ${
              activeTab === tab
                ? "bg-green-600 text-white shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-green-100"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === "all"
              ? "Bütün elanlar"
              : tab === "sadə"
              ? "Adi"
              : tab.charAt(0).toUpperCase() + tab.slice(1).toLowerCase()}
          </button>
        ))}
      </div>

      {/* Məhsul kartları */}
      <div
        className="
        grid 
    grid-cols-1
    sm:grid-cols-3
    md:grid-cols-3
    xl:grid-cols-4
    gap-2  
      "
      >
        {filteredProducts.map((item, index) => (
          <ProductCard
          id={item.id}
            key={index}
            category={item.category[0]}
            status={item.status}
            title={item.title}
            mainImage={item.mainImage}
            location={item.location.city}
            date={item.meta.publishedAt}
            time={item.time}
            price={item.price}
            condition={item.condition}
            user={item.seller.name}
          />
        ))}
      </div>
    </main>
  );
};

export default HomePage;
