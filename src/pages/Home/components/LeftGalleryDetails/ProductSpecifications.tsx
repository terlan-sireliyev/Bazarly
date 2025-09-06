interface Specs {
  brand: string;
  model: string;
  storage?: string;
  ram?: string;
  color: string;
  warranty?: string;
  battery?: string;
  camera?: string;
  processor?: string;
  chip?: string;
  display?: string;
}

interface Ad {
  id: string;
  title: string;
  specs: Specs;
}
interface ProductSpecificationsProps {
  ad: Ad;
}
const ProductSpecifications = ({ad}:ProductSpecificationsProps) => {
  return (
    <section className="lg:rounded-2xl bg-white p-2 shadow  ">
  <h2 className="text-lg font-bold text-gray-800 mb-4">
    Məhsulun xüsusiyyətləri
  </h2>

  <div className="overflow-hidden rounded-xl border border-gray-200">
    <dl className="divide-y divide-gray-200">
      {/* Brend */}
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 px-4 py-3 hover:bg-gray-50">
        <dt className="text-sm font-medium text-gray-500 col-span-1">Brend</dt>
        <dd className="text-sm text-gray-900 font-semibold col-span-2 sm:col-span-3">
          {ad.specs.brand}
        </dd>
      </div>

      {/* Model */}
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 px-4 py-3 hover:bg-gray-50">
        <dt className="text-sm font-medium text-gray-500 col-span-1">Model</dt>
        <dd className="text-sm text-gray-900 font-semibold col-span-2 sm:col-span-3">
          {ad.specs.model}
        </dd>
      </div>

      {/* Yaddaş */}
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 px-4 py-3 hover:bg-gray-50">
        <dt className="text-sm font-medium text-gray-500 col-span-1">Yaddaş</dt>
        <dd className="text-sm text-gray-900 font-semibold col-span-2 sm:col-span-3">
          {ad.specs.storage}
        </dd>
      </div>

      {/* Rəng */}
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 px-4 py-3 hover:bg-gray-50">
        <dt className="text-sm font-medium text-gray-500 col-span-1">Rəng</dt>
        <dd className="text-sm text-gray-900 font-semibold col-span-2 sm:col-span-3">
          {ad.specs.color}
        </dd>
      </div>

      {/* Batareya (əgər varsa) */}
      {ad.specs.battery && (
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 px-4 py-3 hover:bg-gray-50">
          <dt className="text-sm font-medium text-gray-500 col-span-1">Batareya</dt>
          <dd className="text-sm text-gray-900 font-semibold col-span-2 sm:col-span-3">
            {ad.specs.battery}
          </dd>
        </div>
      )}

      {/* Kamera */}
      {ad.specs.camera && (
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 px-4 py-3 hover:bg-gray-50">
          <dt className="text-sm font-medium text-gray-500 col-span-1">Kamera</dt>
          <dd className="text-sm text-gray-900 font-semibold col-span-2 sm:col-span-3">
            {ad.specs.camera}
          </dd>
        </div>
      )}

      {/* Prosessor */}
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 px-4 py-3 hover:bg-gray-50">
        <dt className="text-sm font-medium text-gray-500 col-span-1">Prosessor</dt>
        <dd className="text-sm text-gray-900 font-semibold col-span-2 sm:col-span-3">
          {ad.specs.processor || ad.specs.chip}
        </dd>
      </div>

      {/* Zəmanət */}
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 px-4 py-3 hover:bg-gray-50">
        <dt className="text-sm font-medium text-gray-500 col-span-1">Zəmanət</dt>
        <dd className="text-sm text-gray-900 font-semibold col-span-2 sm:col-span-3">
          {ad.specs.warranty}
        </dd>
      </div>
    </dl>
  </div>
</section>
  )
}

export default ProductSpecifications