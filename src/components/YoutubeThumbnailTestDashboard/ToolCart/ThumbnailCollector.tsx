import React, { Dispatch, SetStateAction, useState } from "react";
import { Upload, XSolid } from "@mynaui/icons-react";

const ThumbnailCollector = ({
  setThumbnails,
  thumbnails,
}: {
  setThumbnails: Dispatch<SetStateAction<string[]>>;
  thumbnails: string[];
}) => {
  const [selectedThumbnail, setSelectedThumbnail] = useState<number | null>(
    null,
  );

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const uploaded = Array.from(files).map(file => URL.createObjectURL(file));
      setThumbnails(prev => [...prev, ...uploaded]);
    }
  };

  const removeThumbnail = (index: number) => {
    setThumbnails(prev => prev.filter((_, i) => i !== index));
    if (selectedThumbnail === index) setSelectedThumbnail(null);
  };

  return (
    <div>
      <h2 className="mb-3 text-lg font-semibold text-gray-800 dark:text-gray-200">
        Thumbnails
      </h2>
      <div className="grid grid-cols-2 gap-3">
        {/* Upload Button */}
        <div className="flex h-20 w-full cursor-pointer items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 hover:border-[var(--brand-dark-yellow)] hover:text-[var(--brand-dark-yellow)] dark:border-gray-700 dark:hover:border-[var(--brand-mid-yellow)]">
          <label className="flex h-full w-full cursor-pointer items-center justify-center">
            <input
              type="file"
              multiple
              accept="image/*"
              className="hidden"
              onChange={handleUpload}
            />
            <Upload className="h-6 w-6 cursor-pointer text-gray-500 dark:text-gray-400" />
          </label>
        </div>

        {/* Thumbnails */}
        {thumbnails.map((thumbnail, index) => (
          <div className="group relative inline-block text-sm">
            <div
              key={index}
              className={`relative h-20 w-full cursor-pointer overflow-hidden  rounded-2xl border-4 transition-all duration-200 ${
                selectedThumbnail === index
                  ? "border-[--brand-mid-yellow]"
                  : "border-transparent"
              }`}
              onClick={() => setSelectedThumbnail(index)}
            >
              <img
                src={thumbnail}
                alt={`Thumbnail ${index}`}
                className="aspect-[11/6] h-full w-full object-cover "
              />
            </div>
            <button
              onClick={() => removeThumbnail(index)}
              className="absolute right-1 top-1 flex h-6 w-6 -translate-y-1/4 translate-x-1/4 items-center justify-center rounded-full border-[3px] border-white bg-black p-[2px] text-white transition-colors hover:!bg-red-500 dark:border-[#1c1c1e] dark:bg-white  dark:text-black"
            >
              <span className="flex items-center justify-center">
                <XSolid className="h-4 w-4" />
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThumbnailCollector;
