import { Box } from "@mantine/core";
import { ImageSolid, Upload } from "@mynaui/icons-react"; // Importing Mynaui icons
import YoutubeThumbnailTestDashboard from "@src/components/YoutubeThumbnailTestDashboard/YoutubeThumbnailTestDashboard";
import { CTAnimatedButton } from "@src/shared/Buttons/CTAnimatedButton.tsx/CTAnimatedButton.tsx";
import { ImageUpload } from "@src/shared/Icons/ImageUpload";
import { useRef, useState } from "react";

const YoutubeThumbnailTestOnboarding = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");

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
        alert("Please upload a valid image file.");
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
  };

  return (
    <Box>
      {imagePreview ? (
        <div id="left-section" className="p-2">
          <YoutubeThumbnailTestDashboard />
        </div>
      ) : (
        <div id="right-section" className="px-2 py-8 text-center">
          <>
            <div className="mx-auto max-w-3xl">
              <h1 className="text-6xl font-bold text-gray-900">
                Preview your Thumbnails live on YouTube
              </h1>
              <p className="mt-4 text-lg text-gray-700">
                Test and preview your video thumbnail designs inside YouTube in
                real time.
                <br />
                Ensure your content stands out and attracts viewers with our
                easy-to-use and customizable tool. <br />
                Optimize your click-through rates and drive more traffic to your
                videos with Thumbnail Preview.
              </p>
            </div>

            <div className="group mx-auto mt-12 max-w-4xl rounded-3xl  border-4 border-dashed border-gray-300 bg-white px-6 py-12 shadow-sm hover:border-[var(--brand-dark-yellow)]">
              <div className="flex flex-col items-center justify-center">
                <ImageUpload className="mb-4 h-24 w-24 text-gray-300 group-hover:text-[--brand-dark-yellow]" />
                <h1 className="text-xl font-bold text-black">
                  Click below or drag & drop thumbnails to start
                </h1>
                <div className="mt-6 flex gap-4">
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
                    hoverLabel="Upload thumbnail"
                    size="md"
                    radius={"xl"}
                    onClick={handleUploadClick}
                    w={"180px"}
                  />

                  <button
                    onClick={handleTrySampleClick}
                    className="rounded-full border border-gray-300 px-6 py-2 font-medium text-gray-800 transition hover:bg-gray-100"
                  >
                    <span className="flex items-center gap-2">
                      <ImageSolid className="h-5 w-5" />
                      Try a Sample
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </>
        </div>
      )}
    </Box>
  );
};

export default YoutubeThumbnailTestOnboarding;
