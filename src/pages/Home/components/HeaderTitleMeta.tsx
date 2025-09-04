import  { useState } from "react";
import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";
import { FaBookmark, FaHeart, FaRegCopy, FaRegFlag, FaRegHeart, FaShareAlt } from "react-icons/fa";

const HeaderTitleMeta = ({ ad }) => {
  const [like, setLike] = useState(false);
  const [save, setSave] = useState(false);

  return (
    <header className="rounded-2xl bg-white p-4 shadow sm:p-6">
      <div className="flex flex-col gap-3 md:items-start md:justify-between lg:flex-row">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            {ad.title}
          </h1>
          <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span>Elan ID: <b className="text-gray-700">{ad.id}</b></span>
            <span>•</span>
            <span>Baxış: <b className="text-gray-700">{ad.meta.views}</b></span>
            <span>•</span>
            <span>Dərc: {ad.meta.publishedAt}</span>
            <span>•</span>
            <span>Yeniləndi: {ad.meta.updatedAt}</span>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {ad.meta.tags.map((t) => (
              <span key={t} className="rounded-full border bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                #{t}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button onClick={() => setLike((s) => !s)} className="flex flex-nowrap items-center gap-2 whitespace-nowrap rounded-xl border px-3 py-2 text-sm hover:bg-gray-50" title="Yadda saxla" aria-pressed={like}>
            {like ? <FaHeart className="text-green-500" /> : <FaRegHeart />}
            <span>{like ? "Bəyənildi" : "Bəyən"}</span>
          </button>

          <button onClick={() => setSave((s) => !s)} className="flex flex-nowrap items-center gap-2 whitespace-nowrap rounded-xl border px-3 py-2 text-sm hover:bg-gray-50" title="Bookmark" aria-pressed={save}>
            {save ? <FaBookmark className="text-red-500" /> : <CiBookmark />}
            <span>{save ? "saved" : "save"}</span>
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
    </header>
  );
};

// PropTypes validation əlavə et
HeaderTitleMeta.propTypes = {
  ad: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    meta: PropTypes.shape({
      views: PropTypes.number.isRequired,
      publishedAt: PropTypes.string.isRequired,
      updatedAt: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
  }).isRequired,
};

export default HeaderTitleMeta;
