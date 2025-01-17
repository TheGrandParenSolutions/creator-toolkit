import React, { FC } from "react";
import { ActionIcon, Tooltip } from "@mantine/core";
import {
  ArrowRightCircleSolid,
  ClipboardSolid,
  XCircleSolid,
} from "@mynaui/icons-react";
import BamboozleLoader from "@src/shared/Progress/BamboozleLoader";

interface CTInputProps {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  onSubmit?: () => void;
  loading?: boolean;
  disabled?: boolean;
}

const CTInput: FC<CTInputProps> = ({
  value,
  placeholder,
  onChange,
  onSubmit,
  loading = false,
  disabled = false,
}) => {
  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      onChange(text);
    } catch (error) {
      console.error("Failed to read from clipboard:", error);
    }
  };

  const handleClear = () => {
    onChange("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && onSubmit) {
      onSubmit();
    }
  };

  const handleButtonClick = () => {
    if (onSubmit) {
      onSubmit();
    }
  };

  return (
    <div className="relative w-full">
      <input
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label="Common Input"
        className={`w-full rounded-full border-[2px] border-slate-300 bg-transparent py-3 pl-5 pr-20 text-sm shadow-sm transition placeholder:font-semibold hover:shadow-lg focus:border-2 focus:border-[--main-yellow] focus:shadow-xl focus:outline-none dark:shadow-gray-800  lg:text-lg ${
          loading
            ? "text-gray-400"
            : "border-[--main-yellow] text-gray-800 dark:border-black dark:text-gray-200"
        } dark:bg-gray-800`}
        onKeyDown={handleKeyDown}
        disabled={disabled || loading}
      />
      {!loading ? (
        <div className="absolute right-4 top-1/2 flex -translate-y-1/2  items-center justify-center gap-2">
          {/* Paste Button */}
          <button
            className="flex items-center rounded-full"
            onClick={handlePaste}
            aria-label="Paste Input"
            disabled={disabled}
          >
            <ActionIcon
              size="md"
              radius={"xl"}
              color="gray"
              variant="transparent"
            >
              <Tooltip label="Paste">
                <ClipboardSolid />
              </Tooltip>
            </ActionIcon>
          </button>
          {/* Clear Button */}
          {value && (
            <button
              className="flex  items-center rounded-full"
              onClick={handleClear}
              aria-label="Clear Input"
              disabled={disabled}
            >
              <ActionIcon
                size="md"
                radius={"xl"}
                color="gray"
                variant="transparent"
              >
                <Tooltip label="Clear">
                  <XCircleSolid />
                </Tooltip>
              </ActionIcon>
            </button>
          )}

          <button
            className=" flex items-center rounded-full"
            onClick={handleButtonClick}
            aria-label="Submit Input"
            disabled={disabled}
          >
            <ActionIcon size="md" radius={"xl"} color="yellow">
              <Tooltip label="Go">
                <ArrowRightCircleSolid />
              </Tooltip>
            </ActionIcon>
          </button>
        </div>
      ) : (
        <div className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center justify-center">
          <BamboozleLoader />
        </div>
      )}
    </div>
  );
};

export default CTInput;
