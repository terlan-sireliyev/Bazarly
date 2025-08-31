import { useState } from "react";
import CategoriesGrid from "./CategoriesGrid";
import { categories } from "../../../utils/mockCategories";
import type { Category } from "../../../types/types";
import CategoryModal from "../components/CategoryModal";

const Categories = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const openModal = (category: Category) => {
    setSelectedCategory(category);
    setModalOpen(true);
  };
  return (
    <>
      <CategoriesGrid categories={categories} onSelect={openModal} />
      {modalOpen && (
        <CategoryModal
          category={selectedCategory}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
};

export default Categories;
