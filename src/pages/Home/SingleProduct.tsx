import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
// Product məlumatları importu
import { products } from "../../utils/productList";
// Komponentlər importu
import PriceCard from "./components/RightSellerActions/PriceCard";
import ProductSpecifications from "./components/LeftGalleryDetails/ProductSpecifications";
import SinglePageSlider from "../../components/slider/SinglePageSlider";
import HeaderTitleMeta from "./components/RightSellerActions/HeaderTitleMeta";
import SellerCard from "./components/RightSellerActions/SellerCard";
import LocationList from "./components/RightSellerActions/LocationList";
import SimilarProducts from "./components/LeftGalleryDetails/SimilarProducts";

const SingleProduct: React.FC = () => {
  // URL-dən id götürürük
  const { id } = useParams<{ id: string }>();

  // Məhsulu products array-dən tapırıq
  const ad = products.find((p) => p.id === id);

  // React state-lər
  const [activeImg, setActiveImg] = useState(0); // Aktiv şəkil index-i

  // Şəkillər array-ı – əsas şəkil + əlavə şəkillər
  const images = useMemo(() => {
    if (!ad) return [];
    return [ad.mainImage, ...(ad.images || [])];
  }, [ad]);

  // Əgər məhsul tapılmazsa, qırmızı mesaj göstər
  if (!ad) return <div className="p-8 text-red-500">Məhsul tapılmadı</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto sm:p-4">
        {/* Header */}
        <HeaderTitleMeta ad={ad} />

        {/* Main grid – şəkillər + sağ tərəf */}
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-6 ">
          {/* Şəkillər + məhsul xüsusiyyətləri */}
          <div className="lg:col-span-2">
            {/* Şəkillər slider */}
            <div className="bg-white rounded-xl max-lg:rounded-none shadow-md p-2">
              <SinglePageSlider
                images={images} // Şəkillər array-i
                activeImg={activeImg} // Aktiv şəkil
                setActiveImg={setActiveImg} // Şəkil dəyişmə funksiyası
                productTitle={ad.title} // Məhsul başlığı alt yazı üçün
              />
            </div>

            {/* Qiymət kartı – mobil üçün */}
            <div className="block lg:hidden">
              <div className="bg-white shadow-lg hover:shadow-xl transition p-2">
                <PriceCard ad={ad} />
              </div>
            </div>
            {/* SellerCard – mobil üçün */}
            <div className="block lg:hidden ">
              <div className="bg-white shadow-lg hover:shadow-xl  ">
                <SellerCard />
              </div>
            </div>
            {/* Məhsul xüsusiyyətləri */}
            <ProductSpecifications ad={ad} />
            <SimilarProducts
              currentProductId={ad.id}
              currentCategories={ad.category}
            />
          </div>

          {/* Qiymət kartı – yalnız desktop üçün sağ tərəfdə */}
          <aside className="hidden lg:block space-y-6">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-6 ">
              <PriceCard ad={ad} />
            </div>

            <SellerCard />
            <LocationList />
          </aside>

          <div className="block lg:hidden ">
            <div className="bg-white shadow-lg hover:shadow-xl  ">
              <LocationList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
