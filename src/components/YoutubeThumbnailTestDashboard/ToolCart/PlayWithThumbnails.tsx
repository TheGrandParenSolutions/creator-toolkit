import  { useState } from "react";
import {
  Sun,
  Moon,
  ShuffleAltSolid,
  Undo,
} from "@mynaui/icons-react"; // Mynaui Icons

const PlayWithThumbnails = () => {
  const [isLightMode, setIsLightMode] = useState(true); // Toggles between Light and Dark modes

  return (
    <div className="space-y-4">
      {/* Row 1 */}
      <div className="flex flex-wrap gap-4 items-start justify-start">
        {/* Light/Dark Mode */}
        <button
          onClick={() => setIsLightMode(!isLightMode)}
          className={`flex items-center rounded-full border border-gray-300 px-4 py-2 transition-all ${
            isLightMode
              ? "border-[var(--brand-dark-orange)] bg-gray-50 text-black"
              : "border-gray-300 bg-gray-50 text-gray-700 hover:border-[var(--brand-dark-orange)] hover:bg-[var(--brand-mid-yellow)]"
          }`}
        >
          {!isLightMode ? (
            <Moon className="h-5 w-5 mr-2 text-[var(--brand-purple)]" />
          ) : (
            <Sun className="h-5 w-5 mr-2 text-[var(--brand-purple)]" />
          )}
          <span className="font-medium">
            {!isLightMode ? "Dark" : "Light"}
          </span>
        </button>

        {/* Shuffle */}
        <button className="flex items-center rounded-full border border-gray-300 bg-gray-50 px-4 py-2 text-gray-700 transition-all hover:border-[var(--brand-dark-orange)] hover:bg-[var(--brand-mid-yellow)]">
          <ShuffleAltSolid className="h-5 w-5 mr-2" />
          <span className="font-medium">Shuffle</span>
        </button>

        {/* Reset */}
        <button className="flex items-center rounded-full border border-gray-300 bg-gray-50 px-4 py-2 text-gray-700 transition-all hover:border-[var(--brand-dark-orange)] hover:bg-[var(--brand-mid-yellow)]">
          <Undo className="h-5 w-5 mr-2" />
          <span className="font-medium">Reset</span>
        </button>
      </div>
    </div>
  );
};

export default PlayWithThumbnails;
