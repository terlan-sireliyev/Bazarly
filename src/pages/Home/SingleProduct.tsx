import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import {
  FaHeart,
  FaRegHeart,
  FaRegCopy,
  FaShareAlt,
  FaRegFlag,
  FaSave,
} from "react-icons/fa";
import { MdSaveAlt } from "react-icons/md";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { products } from "../../utils/productList";
import PriceCard from "./components/RightSellerActions/PriceCard";
import ProductSpecifications from "./components/LeftGalleryDetails/ProductSpecifications";
import SinglePageSlider from "../../components/slider/SinglePageSlider";

const SingleProduct: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const ad = products.find((p) => p.id === id);

  const [activeImg, setActiveImg] = useState(0);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [open, setOpen] = useState(false);

  // Şəkillər array-ı
  const images = useMemo(() => {
    if (!ad) return [];
    return [ad.mainImage, ...(ad.images || [])];
  }, [ad]);

  if (!ad) return <div className="p-8 text-red-500">Məhsul tapılmadı</div>;

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto sm:p-4">
        {/* Header */}
        <header className="bg-white rounded-xl max-sm:rounded-none shadow-md hover:shadow-lg transition sm:mb-4">
          <div className="flex flex-col md:flex-row justify-between gap-6 border border-gray-200 bg-white max-sm:p-2 sm:p-6 sm:rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex-1">
              {/* Başlıq */}
              <h1
                onClick={() => setOpen((s) => !s)}
                className="relative py-2 text-2xl sm:text-3xl max-sm:text-[14px] max-sm:line-clamp-1 font-extrabold text-gray-900 cursor-pointer hover:text-blue-600 transition-colors"
              >
                {ad.title}
                <span className="absolute right-0 top-1/2 -translate-y-1/2">
                  {open ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </h1>

              {/* Açılıb-bağlanan hissə */}
              {open && (
                <>
                  <div className="mt-3 flex flex-wrap gap-3 text-sm text-gray-700">
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-lg font-medium shadow-sm">
                      👁️ Baxış: {ad.meta.views}
                    </span>
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg font-medium shadow-sm">
                      📅 Dərc: {ad.meta.publishedAt}
                    </span>
                    <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-lg font-medium shadow-sm">
                      🔄 Yeniləndi: {ad.meta.publishedAt}
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {ad.meta.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full shadow-sm"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Actions */}
            {open && (
              <div className="flex items-start gap-3">
                <div className="flex gap-2">
                  <button
                    onClick={() => setLiked((s) => !s)}
                    className={`px-4 py-2 rounded-lg font-medium flex items-center justify-center gap-2 min-w-[48px] transition ${
                      liked
                        ? "bg-rose-500 text-white hover:bg-rose-600"
                        : "border border-gray-300 hover:border-blue-400 text-gray-600"
                    }`}
                  >
                    {liked ? <FaHeart /> : <FaRegHeart />}
                  </button>
                  <button
                    onClick={() => setSaved((s) => !s)}
                    className={`px-4 py-2 rounded-lg font-medium flex items-center justify-center gap-2 min-w-[48px] transition ${
                      saved
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "border border-gray-300 hover:border-blue-400 text-gray-600"
                    }`}
                  >
                    {saved ? (
                      <FaSave className="text-green-200" />
                    ) : (
                      <MdSaveAlt className="text-gray-600" />
                    )}
                  </button>
                </div>

                <div className="flex gap-2">
                  <button className="px-3 py-2 rounded-lg border border-gray-300 text-gray-600 hover:border-blue-400 hover:text-blue-600 transition">
                    <FaRegCopy />
                  </button>
                  <button className="px-3 py-2 rounded-lg border border-gray-300 text-gray-600 hover:border-blue-400 hover:text-blue-600 transition">
                    <FaShareAlt />
                  </button>
                  <button className="px-3 py-2 rounded-lg border border-gray-300 text-gray-600 hover:border-rose-400 hover:text-rose-500 transition">
                    <FaRegFlag />
                  </button>
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Şəkillər + xüsusiyyətlər */}
          <div className="lg:col-span-2  ">
            {/* Şəkillər slider */}
            <div className="bg-white rounded-xl max-sm:rounded-none shadow-md p-2">
              <SinglePageSlider
                images={images}
                activeImg={activeImg}
                setActiveImg={setActiveImg}
                productTitle={ad.title}
              />
            </div>

            {/* Qiymət kartı – mobil üçün şəkildən sonra */}
            <div className="block lg:hidden">
              <div className="bg-white shadow-lg hover:shadow-xl transition p-2">
                <PriceCard ad={ad} />
              </div>
            </div>

            {/* Məhsul xüsusiyyətləri */}
            <ProductSpecifications ad={ad} />
          </div>

          {/* Qiymət kartı – yalnız desktop üçün sağda */}
          <aside className="hidden lg:block space-y-6">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-6 sticky top-6">
              <PriceCard ad={ad} />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
