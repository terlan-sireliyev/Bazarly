import React from "react";

interface TextAreaProps {
  label: string;
  name: string;
  value: string;
  placeholder?: string;
  rows?: number;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
  name,
  value,
  placeholder,
  rows = 4,
  onChange,
  required = false,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium text-gray-700">{label}</label>
      <textarea
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        rows={rows}
        required={required}
        className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  );
};

export default TextArea;
