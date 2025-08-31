import ProductCard from "../../features/products/components/ProductCard";
import { products } from "../../utils/productList";
import Categories from "../../features/Categories/components/Categories";

const HomePage = () => {
  return (
    <main className="max-w-7xl mx-auto px-6 ">
      <Categories />
  <div
  className="
    grid 
    grid-cols-1              /* ən kiçik ekranlarda → 1 sütun */
    sm:grid-cols-2           /* 640px və yuxarı → 2 sütun */
    md:grid-cols-3           /* 768px və yuxarı → 3 sütun */
    xl:grid-cols-4           /* 1280px və yuxarı → 4 sütun */
    gap-4
  "
>
  {products.map((item, index) => (
    <ProductCard
      key={index}
      category={item.category}
      title={item.name}
      image={item.image}
      location={`${item.city}`}
      date={item.date}
      time={item.time}
      user={item.user}
      condition={item.condition}
      price={item.price}
    />
  ))}
</div>

    </main>
  );
};

export default HomePage;
