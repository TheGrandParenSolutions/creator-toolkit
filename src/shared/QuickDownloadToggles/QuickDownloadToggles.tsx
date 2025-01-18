import { Dispatch, FC } from "react";
import { Text } from "@mantine/core";
import { FolderTwo, Music, Sparkles, VolumeX } from "@mynaui/icons-react";

const QuickDownloadToggles: FC<{
  setSelectedOption: Dispatch<string>;
  selectedOption: string;
  disabled: boolean;
  hideChooseFormat?: boolean;
}> = ({
  setSelectedOption,
  selectedOption,
  disabled,
  hideChooseFormat = false,
}) => {
  return (
    <div className="flex w-full max-w-2xl items-center justify-center md:justify-start">
      <div className="flex w-full flex-wrap justify-center gap-1.5 sm:gap-2 md:max-w-xl md:justify-start">
        {/* Auto & Choose Format Group */}
        <div
          className={`flex overflow-hidden rounded-full border border-none ${
            disabled ? "cursor-not-allowed opacity-50" : ""
          }`}
        >
          {/* Auto Option */}
          <button
            className={`flex items-center gap-1.5 px-4 py-1.5 text-xs font-medium transition-all duration-200 focus:outline-none
            ${
              selectedOption === "auto"
                ? "shadow-xs bg-main-gradient text-black"
                : "bg-gray-100 text-gray-800 dark:bg-zinc-800 dark:text-gray-300"
            } ${disabled ? "cursor-not-allowed" : ""}`}
            onClick={() => !disabled && setSelectedOption("auto")}
            aria-pressed={selectedOption === "auto"}
            disabled={disabled}
          >
            <Sparkles
              className={
                selectedOption === "auto" ? "text-black" : "text-yellow-500"
              }
            />
            <Text className="font-semibold">auto</Text>
          </button>

          {/* Select Format Option */}
          {!hideChooseFormat && (
            <button
              className={`flex items-center gap-1.5 border-none px-4 py-1.5 text-xs font-medium transition-all duration-200 focus:outline-none dark:border-gray-600
              ${
                selectedOption === "format"
                  ? "shadow-xs bg-green-600 text-white"
                  : "bg-gray-100 text-gray-800 dark:bg-zinc-800 dark:text-gray-300"
              } ${disabled ? "cursor-not-allowed" : ""}`}
              onClick={() => !disabled && setSelectedOption("format")}
              aria-pressed={selectedOption === "format"}
              disabled={disabled}
            >
              <FolderTwo
                className={
                  selectedOption === "format" ? "text-white" : "text-green-600"
                }
              />
              <Text className="font-semibold">Choose format</Text>
            </button>
          )}
        </div>

        {/* Audio Option */}
        <button
          className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-200 focus:outline-none
          ${
            selectedOption === "audio"
              ? "shadow-xs scale-100 bg-purple-600 text-white"
              : "bg-gray-100 text-gray-800 dark:bg-zinc-800 dark:text-gray-300"
          } ${disabled ? "cursor-not-allowed opacity-50" : ""}`}
          onClick={() => !disabled && setSelectedOption("audio")}
          aria-pressed={selectedOption === "audio"}
          disabled={disabled}
        >
          <Music
            className={
              selectedOption === "audio" ? "text-white" : "text-purple-600"
            }
          />
          <Text className="font-semibold">audio</Text>
        </button>

        {/* Mute Option */}
        <button
          className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-200 focus:outline-none
          ${
            selectedOption === "mute"
              ? "shadow-xs scale-100 bg-red-500 text-white"
              : "bg-gray-100 text-gray-800 dark:bg-zinc-800 dark:text-gray-300"
          } ${disabled ? "cursor-not-allowed opacity-50" : ""}`}
          onClick={() => !disabled && setSelectedOption("mute")}
          aria-pressed={selectedOption === "mute"}
          disabled={disabled}
        >
          <VolumeX
            className={
              selectedOption === "mute" ? "text-white" : "text-red-500"
            }
          />
          <Text className="font-semibold">mute</Text>
        </button>
      </div>
    </div>
  );
};

export default QuickDownloadToggles;
