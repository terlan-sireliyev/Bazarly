// src/components/Shared/ProductSingle/LocationCard.jsx
import PropTypes from "prop-types";
import { FaMapMarkerAlt } from "react-icons/fa";

const LocationCard = ({ ad }) => {
  const { city, district, address, map } = ad.location;

  return (
    <section className="rounded-2xl bg-white p-4 shadow sm:p-6">
      <div className="flex items-center gap-2 font-semibold">
        <FaMapMarkerAlt /> Məkan
      </div>
      <div className="mt-2 text-sm text-gray-700">
        {city}, {district}
        <div className="text-gray-500">{address}</div>
      </div>
      <div className="mt-3 grid h-40 w-full place-items-center rounded-xl border bg-gray-100 text-sm text-gray-400">
        Xəritə placeholder (lat: {map.lat}, lng: {map.lng})
      </div>
    </section>
  );
};

LocationCard.propTypes = {
  ad: PropTypes.shape({
    location: PropTypes.shape({
      city: PropTypes.string.isRequired,
      district: PropTypes.string.isRequired,
      address: PropTypes.string,
      map: PropTypes.shape({
        lat: PropTypes.number,
        lng: PropTypes.number,
      }),
    }).isRequired,
  }).isRequired,
};

export default LocationCard;
