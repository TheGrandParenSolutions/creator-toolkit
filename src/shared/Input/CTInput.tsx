import React, { FC } from "react";
import { ActionIcon, Loader, Tooltip } from "@mantine/core";
import {
  ArrowRightCircleSolid,
  ClipboardSolid,
  XCircleSolid,
} from "@mynaui/icons-react";

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
        className={`w-full rounded-3xl border-[0.5px] bg-transparent py-2 pl-4 pr-20 text-sm shadow-sm transition hover:shadow-lg focus:border-2 focus:shadow-xl focus:outline-none dark:shadow-gray-800 lg:text-base ${
          loading
            ? "text-gray-400"
            : "border-[--main-yellow] text-gray-800 dark:border-black dark:text-gray-200"
        } dark:bg-gray-800`}
        onKeyDown={handleKeyDown}
        disabled={disabled || loading}
      />
      {!loading ? (
        <>
          {/* Paste Button */}
          <button
            className="absolute right-20 top-1/2 flex -translate-y-1/2 items-center rounded-full p-2"
            onClick={handlePaste}
            aria-label="Paste Input"
            disabled={disabled}
          >
            <ActionIcon
              size="sm"
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
          <button
            className="absolute right-12 top-1/2 flex -translate-y-1/2 items-center rounded-full p-2"
            onClick={handleClear}
            aria-label="Clear Input"
            disabled={disabled}
          >
            <ActionIcon
              size="sm"
              radius={"xl"}
              color="gray"
              variant="transparent"
            >
              <Tooltip label="Clear">
                <XCircleSolid />
              </Tooltip>
            </ActionIcon>
          </button>
          <button
            className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center rounded-full p-2"
            onClick={handleButtonClick}
            aria-label="Submit Input"
            disabled={disabled}
          >
            <ActionIcon size="sm" radius={"xl"} color="yellow">
              <Tooltip label="Go">
                <ArrowRightCircleSolid />
              </Tooltip>
            </ActionIcon>
          </button>
        </>
      ) : (
        <div className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center justify-center">
          <Loader size="xs" color="var(--brand-dark-orange)" />
        </div>
      )}
    </div>
  );
};

export default CTInput;
