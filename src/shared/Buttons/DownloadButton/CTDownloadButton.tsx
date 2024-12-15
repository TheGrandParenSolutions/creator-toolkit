import React, { useState } from "react";
import { Button, Tooltip } from "@mantine/core";

interface CKDownloadButtonProps {
  label: string; // Label to display on the button
  url: string; // Download URL
  size: string; // File size (e.g., "1.2GB")
  quality: string; // Quality or format (e.g., "MP4", "MP3")
  onClick?: () => void; // Optional click handler;
  isDownloading?: boolean;
}

const CTDownloadButton: React.FC<CKDownloadButtonProps> = ({
  label,
  // url,
  size,
  quality,
  onClick,
  isDownloading = false
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Tooltip
      label={`Size: ${size} • Format: ${quality}`}
      withArrow
      opened={isHovered}
    >
      <Button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => {
          onClick?.();
          // window.open(url, "_blank");
        }}
        size="md"
        radius="md"
        className={`w-100 relative flex items-center justify-center  overflow-hidden bg-white text-orange-600 transition-all duration-300 hover:bg-[var(--brand-bg-light)] hover:text-white`}
        style={{
          border: isHovered ? "" : "1px solid var(--brand-dark-orange)",
          background: isHovered ? "var(--brand-bg-theme)" : "",
        }}
        classNames={{
          inner: "w-full text-center",
          label: "w-full items-center justify-center",
        }}
      >
        <span
          className={`w-100 absolute text-center font-bold transition-all duration-300 ${
            isHovered
              ? "-translate-y-full opacity-0"
              : "translate-y-0 opacity-100"
          }`}
        >
           {isDownloading ? "Downloading..." : label}
        </span>
        <span
          className={`w-100 absolute text-center font-bold text-black transition-all duration-300 ${
            isHovered
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          }`}
        >
          Start Download
        </span>
      </Button>
    </Tooltip>
  );
};

export default CTDownloadButton;
