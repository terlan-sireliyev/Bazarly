import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaHeart, FaRegHeart, FaRegCopy, FaShareAlt, FaRegFlag } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { products } from "../../utils/productList";

const SingleProduct: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const ad = products.find((p) => p.id === id);

  const [activeImg, setActiveImg] = useState(0); // ✅ Always runs
  const [like, setLike] = useState(false); // Added
  const [save, setSave] = useState(false); // Added

  if (!ad) {
    return <div>Product not found</div>;
  }

  const allImages = [ad.mainImage, ...ad.images];

  return (
    <>
      {/* Header */}
      <nav className="max-w-7xl  mx-auto rounded-md px-4 py-3 bg-white shadow mt-6 ">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center  ">
          {/* Left side */}
          <div>
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">{ad.title}</h1>
            <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-gray-500">
              <span>Elan ID: <b className="text-gray-700">{ad.id}</b></span>
              <span>•</span>
              <span>Baxış: <b className="text-gray-700">{ad.meta.views}</b></span>
              <span>•</span>
              <span>Dərc: {ad.meta.publishedAt}</span>
              <span>•</span>
              <span>Yeniləndi: {ad.meta.publishedAt}</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {ad.meta.tags.map((t) => (
                <span key={t} className="rounded-full border bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                  #{t}
                </span>
              ))}
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setLike((s) => !s)}
              className="flex items-center gap-2 rounded-xl border px-3 py-2 text-sm hover:bg-gray-50"
              title="Bəyən"
              aria-pressed={like}
            >
              {like ? <FaHeart className="text-green-500" /> : <FaRegHeart />}
              <span>{like ? "Bəyənildi" : "Bəyən"}</span>
            </button>

            <button
              onClick={() => setSave((s) => !s)}
              className="flex items-center gap-2 rounded-xl border px-3 py-2 text-sm hover:bg-gray-50"
              title="Bookmark"
              aria-pressed={save}
            >
              {save ? <FaBookmark className="text-red-500" /> : <CiBookmark />}
              <span>{save ? "Saved" : "Save"}</span>
            </button>

            <button className="flex items-center gap-2 rounded-xl border px-3 py-2 text-sm hover:bg-gray-50" title="Linki kopyala">
              <FaRegCopy />  
            </button>

            <button className="flex items-center gap-2 rounded-xl border px-3 py-2 text-sm hover:bg-gray-50" title="Paylaş">
              <FaShareAlt /> Paylaş
            </button>

            <button className="flex items-center gap-2 rounded-xl border px-3 py-2 text-sm hover:bg-gray-50" title="Şikayət et">
              <FaRegFlag /> Şikayət
            </button>
          </div>
        </div>
      </nav>

      {/* Section (shapes + info) stays unchanged */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left: Images */}
          <div className="flex-1">
            {/* Main Image */}
            <div className="border rounded-xl overflow-hidden">
              <img
                src={allImages[activeImg]}
                alt={`${ad.title} - ${activeImg + 1}`}
                className="w-full h-[450px] object-contain bg-gray-50"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="mt-4 grid grid-cols-5 gap-2 sm:grid-cols-6">
              {allImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImg(index)}
                  className={`border rounded-lg overflow-hidden transition-transform duration-200 ${
                    activeImg === index ? "ring-2 ring-blue-500" : "hover:scale-105"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${ad.title} thumb ${index + 1}`}
                    className="h-20 w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex-1 space-y-4">
            <h1 className="text-3xl font-bold text-gray-800">{ad.title}</h1>
            <p className="text-xl font-semibold text-green-600">{ad.price} AZN</p>

            <div className="space-y-2">
              <p className="text-gray-700">
                <span className="font-semibold">Brand:</span> {ad.specs.brand || "N/A"}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Model:</span> {ad.specs.model || "N/A"}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Condition:</span> {ad.condition || "N/A"}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Color:</span> {ad.specs.color || "N/A"}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Contact Seller
              </button>
              <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
                Add to Favorites
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
