import React, { FC } from "react";
import { ActionIcon, Tooltip } from "@mantine/core";
import {
  ArrowRightCircleSolid,
  ClipboardSolid,
  XCircleSolid,
} from "@mynaui/icons-react";
import CTLoader from "@src/shared/Progress/CTLoader";

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
    <div className="relative w-full rounded-[2.5rem] shadow-md shadow-zinc-300 transition-all duration-100 hover:shadow-2xl dark:shadow-zinc-700">
      <input
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label="Common Input"
        className={`w-full rounded-full border-0 border-transparent  bg-zinc-50
          py-3 pl-5 pr-32 text-lg 
          shadow-[inset_3px_3px_5px_rgba(0,0,0,0.15),inset_-3px_-3px_5px_rgba(255,255,255,0.8)]
           placeholder:font-semibold placeholder:text-zinc-400
          hover:bg-zinc-100 focus:border-2 focus:border-[--main-yellow] focus:outline-none  dark:border-zinc-700
          dark:bg-zinc-800 dark:text-zinc-100 dark:shadow-[inset_4px_4px_6px_rgba(0,0,0,0.4),inset_-4px_-4px_6px_rgba(255,255,255,0.05)] dark:hover:bg-zinc-800
          dark:focus:border-[--brand-dark-orange]`}
        style={{
          paddingRight: "7rem",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
        onKeyDown={handleKeyDown}
        disabled={disabled || loading}
      />
      {!loading ? (
        <div className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center justify-center gap-2">
          {/* Paste Button */}
          <button
            className="flex items-center rounded-full"
            onClick={handlePaste}
            aria-label="Paste Input"
            disabled={disabled}
          >
            <ActionIcon
              size="md"
              radius="xl"
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
              className="flex items-center rounded-full"
              onClick={handleClear}
              aria-label="Clear Input"
              disabled={disabled}
            >
              <ActionIcon
                size="md"
                radius="xl"
                color="gray"
                variant="transparent"
              >
                <Tooltip label="Clear">
                  <XCircleSolid />
                </Tooltip>
              </ActionIcon>
            </button>
          )}
          {/* Submit Button */}
          <button
            className="flex items-center rounded-full"
            onClick={handleButtonClick}
            aria-label="Submit Input"
            disabled={disabled}
          >
            <ActionIcon size="md" radius="xl" color="yellow">
              <Tooltip label="Go">
                <ArrowRightCircleSolid />
              </Tooltip>
            </ActionIcon>
          </button>
        </div>
      ) : (
        <div className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center justify-center">
          <CTLoader />
        </div>
      )}
    </div>
  );
};

export default CTInput;
