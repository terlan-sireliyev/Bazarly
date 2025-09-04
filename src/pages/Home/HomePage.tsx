import ProductCard from "../../features/products/components/ProductCard";
import { products } from "../../utils/productList";
import Categories from "../../features/Categories/components/Categories";

const HomePage = () => {
  return (
    <main className="max-w-7xl mx-auto my-4  px-2 sm:px-2">
      <Categories />
      <div
        className="
    grid 
    grid-cols-1              /* ən kiçik ekranlarda → 1 sütun */
    sm:grid-cols-3           /* 640px və yuxarı → 2 sütun */
    md:grid-cols-3           /* 768px və yuxarı → 3 sütun */
    xl:grid-cols-4           /* 1280px və yuxarı → 4 sütun */
    sm:gap-2
  "
      >
        {products.map((item, index) => (
          <ProductCard
            key={index}
            category={item.category[0]}
            status={item.status}
            title={item.title}
            mainImage={item.mainImage} // Ana səhifə üçün
            // image={item.images[0]} // Single səhifədə ilk şəkil
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
