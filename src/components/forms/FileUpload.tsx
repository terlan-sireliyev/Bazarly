import React from "react";

interface FileUploadProps {
  label: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  accept?: string;
  required?: boolean;
}

const FileUpload: React.FC<FileUploadProps> = ({
  label,
  name,
  onChange,
  accept = "image/*",
  required = false,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium text-gray-700">{label}</label>
      <input
        type="file"
        name={name}
        accept={accept}
        onChange={onChange}
        required={required}
        className="border border-gray-300 rounded-lg p-2"
      />
    </div>
  );
};

export default FileUpload;
