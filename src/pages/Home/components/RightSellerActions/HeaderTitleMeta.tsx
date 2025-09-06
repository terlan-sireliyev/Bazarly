import { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaHeart,
  FaRegCopy,
  FaRegFlag,
  FaRegHeart,
  FaSave,
  FaShareAlt,
} from "react-icons/fa";
import { MdSaveAlt } from "react-icons/md";
interface AdMeta {
  views: number;
  publishedAt: string;
  tags: string[];
}

interface Ad {
  title: string;
  id: string | number;
  meta: AdMeta;
}

interface HeaderTitleMetaProps {
  ad: Ad;
}
const HeaderTitleMeta = ({ ad }: HeaderTitleMetaProps) => {
  const [liked, setLiked] = useState(false); // Bəyənmə state
  const [saved, setSaved] = useState(false); // Saxlanma state
  const [open, setOpen] = useState(false); // Açılıb-bağlanan info paneli

  return (
    <header className="bg-white rounded-xl max-sm:rounded-none hover:shadow-lg transition sm:mb-4">
      <div className="flex flex-col md:flex-row justify-between gap-6 border border-gray-200 bg-white max-sm:p-2 sm:p-6 sm:rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
        {/* Sol tərəf – başlıq və info */}
        <div className="flex-1">
          {/* Məhsul başlığı */}
          <h1
            onClick={() => setOpen((s) => !s)} // Click ilə açılıb-bağlanır
            className="relative py-2 text-2xl sm:text-3xl max-sm:text-[14px] max-sm:line-clamp-1 font-extrabold text-gray-900 cursor-pointer hover:text-blue-600 transition-colors"
          >
            {ad.title}
            <span className="absolute right-0 top-1/2 -translate-y-1/2">
              {/* Başlıq yanında ox */}
              {open ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </h1>

          {/* Açılıb-bağlanan hissə */}
          {open && (
            <>
              {/* Məhsul haqqında qısa info */}
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

              {/* Tag-lər */}
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

        {/* Actions (Like, Save, Copy, Share, Flag) */}
        {open && (
          <div className="flex items-start gap-3">
            {/* Bəyən / Saxla düymələri */}
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

            {/* Digər action düymələri */}
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
  );
};

export default HeaderTitleMeta;
