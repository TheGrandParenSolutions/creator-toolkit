import { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Image } from "@mantine/core";
import { Upload } from "@mynaui/icons-react";
import {
  CopyIcon,
  DownloadMovingIcon,
  UploadIcon,
} from "@src/shared/Icons/IconLib";
import { CTAnimatedButton } from "@src/shared/Buttons/CTAnimatedButton/CTAnimatedButton";
import { uploadImageForBGRemoval } from "@src/Api/Modules/RemoveBG/RemoveBGService";
import { AnimatePresence, motion } from "framer-motion";
import CTLoader from "@src/shared/Progress/CTLoader";
import { showToast } from "@src/utils/Theme";

const RemoveBackground = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [outputImage, setOutputImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Handle File Upload
  const handleUploadClick = () => {
    setImagePreview(null);
    fileInputRef.current?.click();
  };

  // Handle File Change
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setImagePreview(URL.createObjectURL(file)); // Show preview
      setOutputImage(null);
      setLoading(true);

      try {
        const processedImageUrl = await uploadImageForBGRemoval(file);
        showToast(
          "success",
          "Background removed",
          "Image processing complete!",
        );
        setTimeout(() => {
          setOutputImage(processedImageUrl);
          setLoading(false);
        }, 1200);
      } catch (error) {
        showToast("error", "We're sorry", "Failed to remove background:");
        console.error("Failed to remove background:", error);
        setLoading(false);
      }
    }
  };

  // Copy Image to Clipboard
  const handleCopyImage = async () => {
    if (!outputImage) return;
    try {
      const response = await fetch(outputImage);
      const blob = await response.blob();
      await navigator.clipboard.write([
        new ClipboardItem({ "image/png": blob }),
      ]);
      showToast("success", "Copy done", "Image copied to clipboard!");
    } catch (error) {
      console.error("Failed to copy image:", error);
    }
  };

  return (
    <div className="mx-auto max-w-5xl overflow-hidden p-8">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Remove Background - Creator Toolkit</title>
        <meta
          name="description"
          content="Remove background from images easily with Creator Toolkit. Upload your image and get a transparent background in seconds."
        />
      </Helmet>

      {/* Upload Section & Processed Image Container */}
      <div className="flex flex-col items-center justify-center gap-12 sm:flex-row">
        {/* Upload Box (Kept as is, just refined) */}
        <div className="group w-full max-w-lg rounded-[2.5rem]  border-4 border-dashed border-zinc-300 p-8 shadow-md transition-all duration-300 hover:border-[var(--brand-dark-yellow)] dark:border-black dark:bg-zinc-800">
          <div className="flex flex-col items-center justify-center space-y-5">
            <UploadIcon className="h-16 w-16  text-zinc-400 group-hover:text-[var(--brand-dark-yellow)] dark:text-zinc-500 dark:group-hover:text-[var(--brand-mid-yellow)]" />
            <h2 className="text-center text-lg font-semibold text-zinc-800 dark:text-zinc-200">
              Upload or Drag & Drop Your Image
            </h2>
            <p className="text-center text-sm text-zinc-600 dark:text-zinc-400">
              Supports all formats.
            </p>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <CTAnimatedButton
              label="Upload"
              icon={<Upload className="h-5 w-5" />}
              hoverLabel="Upload Image"
              size="md"
              radius="xl"
              onClick={handleUploadClick}
              w={160}
              buttonStyles="sm:w-[180px]"
              loading={loading}
            />
          </div>
        </div>

        {/* Processed Image Card */}
        <div className="flex flex-col items-center">
          <AnimatePresence>
            {/* Processing State with Circular Loader */}
            {imagePreview && !outputImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.0 }}
                className="relative flex items-center justify-center rounded-[2.5rem] border-2 border-zinc-200 bg-white  shadow-lg"
              >
                {/* Subtle Shiny Gradient Effect */}{" "}
                <motion.div
                  animate={{ x: ["0%", "50%"] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "linear",
                  }}
                  className="absolute h-64 w-64 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-30"
                ></motion.div>
                {/* <div className="relative h-full w-full"> */}
                <Image
                  src={imagePreview}
                  alt="Processing"
                  className=" relative h-64 w-64 rounded-lg object-cover"
                />
                {/* </div> */}
                {/* Circular Loader */}
                {loading && (
                  <div className="absolute z-50  flex items-center justify-center ">
                    <CTLoader />
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Processed Image Output */}
          <AnimatePresence>
            {outputImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.0 }}
                className="checkerboard-bg dark:checkerboard-bg-dark flex w-64 flex-col  items-center rounded-[2.5rem] border-zinc-100 p-4 shadow-md"
              >
                <h3 className="font-primary mb-2 text-lg font-semibold text-zinc-800 dark:text-zinc-200">
                  Background removed
                </h3>

                {/* Checkerboard Background for Transparency */}
                <div className="flex h-64 w-64 items-center justify-center rounded-lg bg-cover">
                  <Image
                    src={outputImage}
                    alt="Processed"
                    className="h-64 w-64 rounded-lg object-cover"
                  />
                </div>

                {/* Copy & Download Icons */}
                <div className="mt-3 flex gap-4">
                  <button
                    onClick={handleCopyImage}
                    className="rounded-full bg-gray-700 p-3 text-white transition-all hover:bg-gray-800"
                  >
                    <CopyIcon className="h-6 w-6" />
                  </button>
                  <a
                    href={outputImage}
                    download={`Creator-Toolkit__no-background-image__${Math.floor(
                      Math.random() * 100,
                    )}.png`}
                    className="rounded-full bg-main-gradient p-3 text-white transition-all hover:bg-[var(--brand-mid-yellow)]"
                    onClick={() => {
                      showToast(
                        "success",
                        "Download done",
                        "Image saved in your device.",
                      );
                    }}
                  >
                    <DownloadMovingIcon className="h-7 w-7 text-black" />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default RemoveBackground;
