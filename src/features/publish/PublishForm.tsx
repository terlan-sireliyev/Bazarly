// FormPublish.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import TextInput from "../../components/forms/TextInput";
import TextArea from "../../components/forms/TextArea";
import SelectInput from "../../components/forms/SelectInput";
import FileUpload from "../../components/forms/FileUpload";

import { categories } from "../../utils/mockCategories";
import { countries } from "../../utils/countries";
import { adTypes } from "../../utils/adTypes";
import { currencies } from "../../utils/currencies";

const conditions = ["Yeni", "İşlənmiş"];

const FormPublish = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    subCategory: "",
    country: "",
    city: "",
    currency: "₼ AZN",
    phone: "",
    condition: "Yeni",
    tags: "",
    sellerType: "Şəxsi",
    adType: "Sadə",
    image: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert(`Məhsul uğurla göndərildi!\nSeçilmiş elan tipi: ${formData.adType}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center p-4 sm:p-6 md:p-10">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl p-6 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
          Məhsul Yerləşdir
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Başlıq */}
          <TextInput
            label="Başlıq"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Məhsulun adını daxil edin"
            required
          />

          {/* Təsvir */}
          <TextArea
            label="Təsvir"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Məhsul haqqında qısa təsvir"
            rows={4}
            required
          />

          {/* Kateqoriya / Alt Kateqoriya / Vəziyyət */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/3">
              <SelectInput
                label="Kateqoriya"
                name="category"
                value={formData.category}
                onChange={handleChange}
                options={categories.map((cat) => cat.name)}
                required
              />
            </div>
            <div className="w-full md:w-1/3">
              <SelectInput
                label="Alt Kateqoriya"
                name="subCategory"
                value={formData.subCategory}
                onChange={handleChange}
                options={
                  formData.category
                    ? categories.find((cat) => cat.name === formData.category)
                        ?.sub || []
                    : []
                }
                required
                disabled={!formData.category}
              />
            </div>
            <div className="w-full md:w-1/3">
              <SelectInput
                label="Məhsul Vəziyyəti"
                name="condition"
                value={formData.condition}
                onChange={handleChange}
                options={conditions}
              />
            </div>
          </div>

          {/* Ölkə / Şəhər / Valyuta */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/3">
              <SelectInput
                label="Ölkə"
                name="country"
                value={formData.country}
                onChange={handleChange}
                options={Object.keys(countries)}
                required
              />
            </div>
            <div className="w-full md:w-1/3">
              <SelectInput
                label="Şəhər"
                name="city"
                value={formData.city}
                onChange={handleChange}
                options={
                  formData.country
                    ? countries[formData.country as keyof typeof countries]
                    : []
                }
                required
                disabled={!formData.country}
              />
            </div>
            <div className="w-full md:w-1/3">
              <SelectInput
                label="Valyuta"
                name="currency"
                value={formData.currency}
                onChange={handleChange}
                options={currencies}
              />
            </div>
          </div>

          {/* Qiymət və Telefon */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/3">
              <TextInput
                label="Qiymət"
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="₼"
                required
              />
            </div>
            <div className="w-full md:w-1/3">
              <TextInput
                label="Telefon Nömrəsi"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+994 50 123 45 67"
                required
              />
            </div>
          </div>

          {/* Satış tipi */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Satış Tipi
            </label>
            <div className="flex flex-col sm:flex-row gap-4">
              {["Şəxsi", "Mağaza"].map((type) => (
                <label key={type} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="sellerType"
                    value={type}
                    checked={formData.sellerType === type}
                    onChange={handleChange}
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>

          {/* Elan tipi */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Elan Tipi
            </label>
            <div className="flex flex-col sm:flex-row gap-4">
              {adTypes.map((ad) => {
                const Icon = ad.icon;
                const isSelected = formData.adType === ad.type;
                return (
                  <motion.div
                    key={ad.type}
                    onClick={() =>
                      setFormData({ ...formData, adType: ad.type })
                    }
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`cursor-pointer border rounded-lg p-4 flex flex-col items-center gap-2 transition-colors w-full sm:w-1/3 ${
                      isSelected
                        ? "bg-indigo-100 border-indigo-500"
                        : "bg-gray-100 border-gray-300"
                    }`}
                  >
                    <Icon
                      size={24}
                      className={
                        isSelected ? "text-indigo-600" : "text-gray-500"
                      }
                    />
                    <span className="font-semibold">{ad.type}</span>
                    {ad.price > 0 && (
                      <span className="text-sm text-gray-600">
                        {ad.price} ₼ ödəniş
                      </span>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          <TextInput
            label="Etiketlər (tags)"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            placeholder="məs: telefon, apple, yeni"
          />
          <FileUpload
            label="Şəkil"
            name="image"
            onChange={handleFileChange}
            required
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Məhsulu Yerləşdir
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormPublish;
