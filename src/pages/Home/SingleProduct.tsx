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
import { products } from "../../utils/productList";
import PriceCard from "./components/RightSellerActions/PriceCard";
import { MdSaveAlt } from "react-icons/md";
import ProductSpecifications from "./components/LeftGalleryDetails/ProductSpecifications";

const SingleProduct: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const ad = products.find((p) => p.id === id);

  const [activeImg, setActiveImg] = useState(0);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  // Top-level useMemo, conditional yoxlama olmadan
  const images = useMemo(() => {
    if (!ad) return [];
    return [ad.mainImage, ...(ad.images || [])];
  }, [ad]);

  // Əgər ad null-dırsa, əvvəlcə return et
  if (!ad) return <div className="p-8 text-red-500">Məhsul tapılmadı</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto p-4">
        {/* Header */}
        <header className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 max-sm:px-4 mb-6">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                {ad.title}
              </h1>
              <div className="mt-2 flex flex-wrap gap-2 text-xs sm:text-sm text-gray-700">
                {/* <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-lg font-medium">ID: {ad.id}</span> */}
                <span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-lg font-medium">
                  Baxış: {ad.meta.views}
                </span>
                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-lg font-medium">
                  Dərc: {ad.meta.publishedAt}
                </span>
                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-lg font-medium">
                  Yeniləndi: {ad.meta.publishedAt}
                </span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {ad.meta.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-full"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2 ">
              <div className="flex gap-2 h-10">
                <button
                  onClick={() => setLiked((s) => !s)}
                  className={`px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition ${
                    liked
                      ? "bg-rose-500 text-white hover:bg-rose-600"
                      : "border border-gray-300 hover:border-blue-400"
                  }`}
                >
                  {liked ? <FaHeart /> : <FaRegHeart />}
                </button>
                <button
                  onClick={() => setSaved((s) => !s)}
                  className={`px-4 whitespace-nowrap py-2 rounded-lg font-medium flex items-center gap-2 transition ${
                    saved
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "border border-gray-300 hover:border-blue-400"
                  }`}
                >
                  {saved ? (
                    <FaSave className="text-green-500" />
                  ) : (
                    <MdSaveAlt className="text-black" />
                  )}
                </button>
              </div>

              <div className="flex gap-2 h-10">
                <button className="px-3 py-2 rounded-lg border border-gray-300 hover:border-blue-400 transition">
                  <FaRegCopy />
                </button>
                <button className="px-3 py-2 rounded-lg border border-gray-300 hover:border-blue-400 transition">
                  <FaShareAlt />
                </button>
                <button className="px-3 py-2 rounded-lg border border-gray-300 hover:border-rose-400 text-rose-500 transition">
                  <FaRegFlag />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Images */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-4">
              <div className="w-full h-[500px] flex items-center justify-center bg-gray-100 rounded-lg">
                <img
                  src={images[activeImg]}
                  alt={ad.title}
                  className="max-h-[480px] object-contain"
                />
              </div>
              <div className="mt-4 grid grid-cols-5 gap-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImg(idx)}
                    className={`overflow-hidden rounded-md border bg-white transition ${
                      activeImg === idx
                        ? "ring-2 ring-blue-500 ring-offset-2"
                        : "hover:scale-105 hover:border-blue-400"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`thumb-${idx}`}
                      className="h-20 w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            {/* Məhsul xüsusiyyətləri */}
            <ProductSpecifications ad={ad} />
          </div>

          {/* Purchase card */}
          <aside className="space-y-6">
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
