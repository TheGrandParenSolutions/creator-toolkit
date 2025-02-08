import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Box } from "@mantine/core";
import { ImageSolid, Upload } from "@mynaui/icons-react"; // Importing Mynaui icons
import { CTAnimatedButton } from "@src/shared/Buttons/CTAnimatedButton/CTAnimatedButton";
import { ImageUpload } from "@src/shared/Icons/IconLib";
import CTBasicButton from "@src/shared/Buttons/CTBasicButton/CTBasicButton";
import { useNavigate } from "react-router-dom";
import { showToast } from "@src/utils/Theme";

const YoutubeThumbnailTestOnboarding = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const navigate = useNavigate();

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files[0]) {
      const file = files[0];

      if (!file.type.startsWith("image/")) {
        showToast(
          "error",
          "Image Upload failed",
          "Please upload a valid image file.",
        );
        return;
      }

      const reader = new FileReader();
      reader.onload = e => {
        if (e.target?.result) {
          setImagePreview(e.target.result as string);
        }
      };
      reader.readAsDataURL(file); // Read the file
    }
  };

  const handleTrySampleClick = () => {
    const sampleImageUrl = "/assets/test/thumbnail.jpeg";
    setImagePreview(sampleImageUrl);
    console.log(imagePreview);
    navigate("/thumbnail-test/youtubethumbnailpreview");
  };

  return (
    <Box className="h-full transition-all duration-300">
      <Helmet>
        {/* Page Title */}
        <title>Test YouTube Thumbnails - Creator Toolkit</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Preview and test your YouTube thumbnail designs in real-time with Creator Toolkit's Thumbnail Tester. Ensure your content stands out and drives more views!"
        />

        {/* Canonical Tag */}
        <link
          rel="canonical"
          href="https://www.creator-toolkit.com/thumbnail-test"
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="YouTube Thumbnail Tester" />
        <meta
          property="og:description"
          content="Preview and test your YouTube thumbnails in real-time. Optimize your content for better engagement!"
        />
        <meta
          property="og:image"
          content="https://www.creator-toolkit.com/assets/test/thumbnail-preview.png"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.creator-toolkit.com/thumbnail-test"
        />

        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Test YouTube Thumbnails - Creator Toolkit",
            "description": "Preview and test your YouTube thumbnail designs in real-time with Creator Toolkit's Thumbnail Tester. Ensure your content stands out and drives more views!",
            "url": "https://www.creator-toolkit.com/thumbnail-test",
            "image": "https://www.creator-toolkit.com/assets/test/thumbnail-preview.png",
            "publisher": {
              "@type": "Organization",
              "name": "Creator Toolkit",
              "logo": "https://www.creator-toolkit.com/assets/logo.png"
            }
          }
        `}
        </script>
      </Helmet>

      <div
        id="right-section"
        className="bg-light-app text-center transition-colors duration-300 dark:bg-dark-app-content sm:px-6 lg:px-12 lg:py-16"
      >
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 sm:text-5xl lg:text-6xl">
            Preview Your Thumbnails Live on YouTube
          </h1>
          <p className="mt-4 text-sm text-gray-700 dark:text-gray-300 sm:text-base lg:text-lg">
            Test and preview your video thumbnail designs inside YouTube in real
            time.
            <br />
            Ensure your content stands out and attracts viewers with our
            easy-to-use and customizable tool.
            <br />
            Optimize your click-through rates and drive more traffic to your
            videos with Thumbnail Preview.
          </p>
        </div>

        <div className="group mx-auto mt-8 max-w-lg rounded-3xl border-4 border-dashed border-gray-300 bg-white px-6 py-8 shadow-md transition-all duration-300 hover:border-[var(--brand-dark-yellow)] dark:border-gray-700 dark:bg-dark-app sm:mt-12 sm:max-w-4xl lg:rounded-3xl lg:px-10 lg:py-12 lg:shadow-lg">
          <div className="flex flex-col items-center justify-center space-y-6">
            <ImageUpload className="h-16 w-16 text-gray-300 group-hover:text-[var(--brand-dark-yellow)] dark:text-gray-500 dark:group-hover:text-[var(--brand-mid-yellow)] sm:h-20 sm:w-20 lg:h-24 lg:w-24" />
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 sm:text-xl lg:text-2xl">
              Click below or drag & drop thumbnails to start
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
                icon={
                  <Upload className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
                }
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
      </div>
    </Box>
  );
};

export default YoutubeThumbnailTestOnboarding;
