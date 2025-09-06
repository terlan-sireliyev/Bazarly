import ProductCard from "../../features/products/components/ProductCard";
import { products } from "../../utils/productList";
import Categories from "../../features/Categories/components/Categories";
import { useState } from "react";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState<"all" | "vip" | "premium" | "sadə">("all");

  const tabs: ("all" | "premium" | "vip" | "sadə")[] = ["all", "premium", "vip", "sadə"];

  // Tab adlarını mapping ilə daha professional göstəririk
  const tabLabels: Record<typeof tabs[number], string> = {
    all: "Bütün elanlar",
    vip: "VIP",
    premium: "Premium",
    sadə: "Adi",
  };

  const filteredProducts =
    activeTab === "all"
      ? products
      : products.filter((p) => p.status === activeTab);

  return (
    <main className="max-w-7xl mx-auto my-2 px-2 sm:px-2">
      <Categories />

      {/* Tab menyu */}
      {/* Tab menyu */}
<div className="flex gap-4 border-b border-gray-300 mt-4 mb-6">
  {tabs.map((tab) => (
    <button
      key={tab}
      className={`
        relative pb-2 font-medium transition-all
        ${
          activeTab === tab
            ? "text-green-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-green-600"
            : "text-gray-600 hover:text-green-600"
        }
      `}
      onClick={() => setActiveTab(tab)}
    >
      {tabLabels[tab]}
    </button>
  ))}
</div>

      {/* Məhsul kartları */}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-4 gap-2">
        {filteredProducts.map((item, index) => (
          <ProductCard
            key={index}
            id={item.id}
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
