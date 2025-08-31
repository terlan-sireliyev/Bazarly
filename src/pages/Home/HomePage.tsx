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
    grid-cols-2  
    max-sm:grid-cols-1             /* default: ən kiçik ekranlarda ( <800px ) → 2 sütun */
    min-[820px]:grid-cols-3  /* 730px və yuxarı → 3 sütun */
    min-[850px]:grid-cols-3  /* 800px və yuxarı → 3 sütun */
    min-[1250px]:grid-cols-4 /* 1250px və yuxarı → 4 sütun */
    gap-2
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
