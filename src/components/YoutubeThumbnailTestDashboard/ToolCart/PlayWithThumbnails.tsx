import { useState } from "react";
import { Sun, Moon, ShuffleAltSolid, Undo } from "@mynaui/icons-react"; // Mynaui Icons
import { Button } from "@mantine/core";

const PlayWithThumbnails = () => {
  const [isLightMode, setIsLightMode] = useState(true); // Toggles between Light and Dark modes

  return (
    <div className="space-y-4">
      {/* Row 1 */}
      <div className="flex flex-wrap items-start justify-start gap-4">
        {/* Light/Dark Mode */}
        <Button
          onClick={() => setIsLightMode(!isLightMode)}
          className="flex items-center rounded-full border border-gray-300 bg-gray-50 px-4 py-2 text-gray-700 transition-all hover:!border-[var(--brand-dark-orange)] hover:!bg-[var(--brand-mid-yellow)] hover:!text-black dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300"
        >
          {!isLightMode ? (
            <Moon className="mr-2 h-5 w-5 " />
          ) : (
            <Sun className="mr-2 h-5 w-5 " />
          )}
          <span className="font-medium">{!isLightMode ? "Dark" : "Light"}</span>
        </Button>

        {/* Shuffle */}
        <Button className="flex items-center rounded-full border border-gray-300 bg-gray-50 px-4 py-2 text-gray-700 transition-all hover:!border-[var(--brand-dark-orange)] hover:!bg-[var(--brand-mid-yellow)] hover:!text-black dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
          <ShuffleAltSolid className="mr-2 h-5 w-5" />
          <span className="font-medium">Shuffle</span>
        </Button>

        {/* Reset */}
        <Button className="flex items-center rounded-full border border-gray-300 bg-gray-50 px-4 py-2 text-gray-700 transition-all hover:!border-[var(--brand-dark-orange)] hover:!bg-[var(--brand-mid-yellow)] hover:!text-black dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
          <Undo className="mr-2 h-5 w-5" />
          <span className="font-medium">Reset</span>
        </Button>
      </div>
    </div>
  );
};

export default PlayWithThumbnails;
