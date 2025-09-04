// import PropTypes from "prop-types";
// import GallerySection from "./GallerySection";
// import SimilarAdsSection from "./SimilarAdsSection";
// import AttributesSection from "./AttributesSection";
// import ProductDetailsInfo from "./ProductDetailsInfo";
// import SafetyTipsSection from "./SafetyTipsSection";

// // TS üçün tip
// interface SimilarAd {
//   id: string | number;
//   title: string;
//   image: string;
//   price: number;
// }

// interface Ad {
//   title: string;
//   condition?: string;
//   brand?: string;
//   model?: string;
//   storage?: string;
//   color?: string;
//   warranty?: string;
//   stock?: number;
//   urgent?: boolean;
//   images: string[];
//   similar?: SimilarAd[];
//   attrGrid?: { label: string; value: string | number }[];
// }

// interface LeftGalleryDetailsProps {
//   ad: Ad;
// }

// const LeftGalleryDetails: React.FC<LeftGalleryDetailsProps> = ({ ad }) => {
//   // Əgər attrGrid boş gəlirsə, default boş array qoyuruq
//   const attrGrid = ad.attrGrid || [];

//   return (
//     <div className="col-span-2 space-y-4">
//       {/* Gallery */}
//       <GallerySection ad={ad} />

//       {/* Attributes / Specs */}
//       <AttributesSection attrGrid={attrGrid} />

//       {/* Product Details */}
//       <ProductDetailsInfo ad={ad} />

//       {/* Safety Tips */}
//       <SafetyTipsSection />

//       {/* Similar Ads */}
//       <SimilarAdsSection ad={ad} />
//     </div>
//   );
// };

// // PropTypes
// LeftGalleryDetails.propTypes = {
//   ad: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     condition: PropTypes.string,
//     brand: PropTypes.string,
//     model: PropTypes.string,
//     storage: PropTypes.string,
//     color: PropTypes.string,
//     warranty: PropTypes.string,
//     stock: PropTypes.number,
//     urgent: PropTypes.bool,
//     images: PropTypes.arrayOf(PropTypes.string).isRequired,
//     attrGrid: PropTypes.arrayOf(
//       PropTypes.shape({
//         label: PropTypes.string.isRequired,
//         value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//       })
//     ),
//     similar: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//         title: PropTypes.string.isRequired,
//         image: PropTypes.string.isRequired,
//         price: PropTypes.number.isRequired,
//       })
//     ),
//   }).isRequired,
// };

// export default LeftGalleryDetails;
