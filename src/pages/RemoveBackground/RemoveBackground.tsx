import { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Image } from "@mantine/core";
import { Upload, ImageSolid } from "@mynaui/icons-react";
import { ImageUpload } from "@src/shared/Icons/IconLib";
import { CTAnimatedButton } from "@src/shared/Buttons/CTAnimatedButton/CTAnimatedButton";
import CTBasicButton from "@src/shared/Buttons/CTBasicButton/CTBasicButton";

const RemoveBackground = () => {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [outputImage, setOutputImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files[0]) {
      const file = files[0];
      if (file) {
        setImage(URL.createObjectURL(file));
        setOutputImage(null);
      }
    }
  };

  const removeBackground = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOutputImage(""); // Placeholder for actual AI background removal
    }, 2000);
  };

  const handleTrySampleClick = () => {
    const sampleImageUrl = "/assets/test/thumbnail.jpeg";
    setImage(sampleImageUrl);
  };

  return (
    <div className="mx-auto max-w-2xl p-6">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Remove Background - Creator Toolkit</title>
        <meta
          name="description"
          content="Remove background from images easily with Creator Toolkit. Upload your image and get a transparent background in seconds."
        />
        <meta
          name="keywords"
          content="remove background, AI background remover, image editor"
        />
        <link
          rel="canonical"
          href="https://www.creator-toolkit.com/remove-background"
        />
        <meta
          property="og:title"
          content="Remove Background - Creator Toolkit"
        />
        <meta
          property="og:description"
          content="Instantly remove background from images using AI-powered tools."
        />
        <meta
          property="og:image"
          content="https://www.creator-toolkit.com/assets/remove-background-tool-thumbnail.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.creator-toolkit.com/remove-background"
        />
      </Helmet>

      {/* Custom Dropzone */}
      <div className="group mx-auto mt-8 max-w-lg rounded-3xl border-4 border-dashed border-gray-300 bg-white px-6 py-8 shadow-md transition-all duration-300 hover:border-[var(--brand-dark-yellow)] dark:border-gray-700 dark:bg-dark-app sm:mt-12 sm:max-w-4xl lg:rounded-3xl lg:px-10 lg:py-12 lg:shadow-lg">
        <div className="flex flex-col items-center justify-center space-y-6">
          <ImageUpload className="h-16 w-16 text-gray-300 group-hover:text-[var(--brand-dark-yellow)] dark:text-gray-500 dark:group-hover:text-[var(--brand-mid-yellow)] sm:h-20 sm:w-20 lg:h-24 lg:w-24" />
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 sm:text-xl lg:text-2xl">
            Click below or drag & drop images to start
          </h2>
          <p className="text-xs text-gray-600 dark:text-gray-400 sm:text-sm lg:text-base">
            Supports JPG, PNG, and WebP formats.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <CTAnimatedButton
              label="Upload"
              icon={<Upload className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />}
              hoverLabel="Upload thumbnail"
              size="md"
              radius="xl"
              onClick={handleUploadClick}
              w={160}
              buttonStyles="sm:w-[180px] lg:w-[200px]"
            />
            <CTBasicButton
              onClick={handleTrySampleClick}
              label="Try a Sample"
              icon={
                <ImageSolid className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
              }
            />
          </div>
        </div>
      </div>

      {/* Uploaded Image Preview */}
      {image && (
        <div className="mt-6 text-center">
          <Image
            src={image}
            alt="Uploaded"
            className="mx-auto w-full max-w-md rounded-lg"
          />
          <button
            onClick={removeBackground}
            className="mt-4 w-full rounded-xl bg-green-600 px-6 py-3 text-white transition-all duration-300 hover:bg-green-700"
          >
            {loading ? "Processing..." : "Remove Background"}
          </button>
        </div>
      )}

      {/* Processed Image Output */}
      {outputImage && (
        <div className="mt-6 text-center">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            Background Removed
          </h3>
          <Image
            src={outputImage}
            alt="Processed"
            className="mx-auto w-full max-w-md rounded-lg"
          />
          <button
            onClick={() => setImage(null)}
            className="mt-4 w-full rounded-xl bg-red-600 px-6 py-3 text-white transition-all duration-300 hover:bg-red-700"
          >
            Upload Another Image
          </button>
        </div>
      )}
    </div>
  );
};

export default RemoveBackground;
