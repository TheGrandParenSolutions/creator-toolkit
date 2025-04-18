import React, { useState, useRef, FormEvent, useContext } from "react";
import { ChevronUp, SendSolid } from "@mynaui/icons-react";
import { AiBotLogo, AttachFileIcon, StopIcon } from "@src/shared/Icons/IconLib";
import { ListType } from "@src/PropTypes.ts/CommonTypes";
import { ThemeContext } from "@src/Context/Theme/ThemeContext";
import { APP_NAME } from "@src/constants/constants";

type CTPromptInputProps = {
  prompt: string;
  demoPrompts?: ListType[];
  onPromptChange: (prompt: string) => void;
  onDemoPromptSelect?: (prompt: string) => void;
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onStartCreating: (promptDetails: string) => void;
  showSuggestions?: boolean;
  loading?: boolean;
  enableBorderAnimation?: boolean;
  enableBlurEffect?: boolean;
};

const CTPromptInput: React.FC<CTPromptInputProps> = ({
  prompt,
  demoPrompts,
  onPromptChange,
  onDemoPromptSelect,
  onFileUpload,
  onStartCreating,
  showSuggestions,
  loading,
  enableBlurEffect,
  enableBorderAnimation,
}) => {
  const { darkMode } = useContext(ThemeContext);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit(e as any);
    }
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = prompt.trim();

    if (!trimmed) {
      setError("Please enter a prompt before submitting.");
      inputRef.current?.focus();
      return;
    }

    if (trimmed.length < 10) {
      setError("Prompt too small.");
      inputRef.current?.focus();
      return;
    }

    setError(null);

    onStartCreating(trimmed);
  };

  const color = !darkMode ? "#27272a" : "#ffff";
  const animationDuration = "6s";
  const transparency = 25;
  const promptBg = enableBlurEffect
    ? `dark:bg-zinc-900/85 bg-white/85`
    : `dark:bg-zinc-900 bg-white`;

  return (
    <div className="!font-secondary w-full max-w-3xl ">
      <div className="relative w-full">
        <div className="flex w-full flex-col items-center px-4 ">
          <div
            className={`focused-glow relative inline-block max-h-fit w-full overflow-hidden rounded-3xl border border-zinc-200 py-[1px]  shadow-[0_12px_20px_-4px_rgba(13,148,136,0.2)]
                    dark:border-zinc-700  ${
                      error ? "!border-2 !border-red-500" : ""
                    }`}
          >
            {enableBorderAnimation ? (
              <>
                <div
                  className="absolute bottom-[-10px] right-[-250%] z-0 h-[50%] w-[300%] animate-star-movement-bottom rounded-full opacity-70"
                  style={{
                    background: `radial-gradient(circle, ${color}, transparent ${transparency}%)`,
                    animationDuration,
                  }}
                ></div>
                <div
                  className="absolute left-[-250%] top-[-10px] z-0 h-[50%] w-[300%] animate-star-movement-top rounded-full opacity-70"
                  style={{
                    background: `radial-gradient(circle, ${color}, transparent ${transparency}%)`,
                    animationDuration,
                  }}
                ></div>
              </>
            ) : (
              <></>
            )}
            <form
              onSubmit={handleSubmit}
              onKeyDown={e => handleKeyPress(e as any)}
              className={`duration-125 !font-secondary focus-within:bg-card-hover border-muted-border group flex w-full flex-col gap-2 rounded-3xl  ${promptBg}  p-2  backdrop-blur-sm transition-colors ease-in-out `}
            >
              <textarea
                ref={inputRef}
                className="ring-offset-background font-secondary focus-visible:ring-ring scrollbar-thin scrollbar-track-transparent scrollbar-thumb-muted-foreground  flex max-h-[500px] w-full resize-none rounded-md bg-transparent px-2 py-2 text-[14px] font-medium leading-snug placeholder:font-medium placeholder:text-zinc-400 placeholder-shown:text-ellipsis placeholder-shown:whitespace-nowrap focus:bg-transparent focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 md:text-base"
                id="chatinput"
                autoFocus
                aria-invalid={!!error}
                aria-describedby={error ? "prompt-error" : undefined}
                placeholder="Describe your idea and watch creosea bring it to life...."
                value={prompt}
                onChange={e => {
                  onPromptChange(e.target.value);
                  if (error) setError(null);
                }}
              />

              {error && (
                <p id="prompt-error" className="px-1 text-sm text-red-500">
                  {error}
                </p>
              )}

              <div className="flex flex-wrap items-end gap-1">
                <button
                  type="button"
                  className="flex h-fit items-center justify-center gap-1 whitespace-nowrap rounded-lg  px-1 py-0.5 text-sm font-medium text-zinc-900/60 transition-colors duration-500 hover:bg-zinc-200 hover:text-zinc-900 dark:text-zinc-300/50 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
                  onClick={() =>
                    document.getElementById("file-upload")?.click()
                  }
                >
                  <AttachFileIcon />
                  Attach files
                </button>

                <input
                  id="file-upload"
                  className="hidden"
                  accept="image/jpeg,.jpg,.jpeg,image/png,.png,image/webp,.webp"
                  multiple
                  type="file"
                  onChange={onFileUpload}
                />

                <button
                  type="button"
                  className="flex h-fit items-center justify-center gap-1 whitespace-nowrap rounded-lg px-1 py-0.5 text-sm font-medium text-zinc-900/60 transition-colors duration-500 hover:bg-zinc-200 hover:text-zinc-900 dark:text-zinc-300/50 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
                >
                  <AiBotLogo />
                  Enhance prompt
                </button>

                <div className="flex flex-grow items-center justify-end gap-2">
                  <button
                    id="chatinput-send-message-button"
                    type="submit"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white  transition-opacity duration-150 ease-out hover:bg-zinc-600  disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white dark:text-black  dark:hover:bg-zinc-300 "
                  >
                    {loading ? <StopIcon /> : <SendSolid />}
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="relative mt-auto flex min-h-8 w-full items-center justify-center p-2 text-center text-xs text-zinc-400 dark:text-zinc-500 md:px-[60px]">
            <div>
              {APP_NAME} is smart, just not flawless. Always double-check the
              important stuff.
            </div>
          </div>
          {Boolean(showSuggestions) && (
            <div className="relative mx-2 mt-5 flex max-w-full gap-1 md:mt-8">
              <div className="scrollbar-hide w-full overflow-x-auto whitespace-nowrap">
                <div className="flex gap-2.5">
                  {(demoPrompts || []).map(demo => (
                    <button
                      key={demo.label}
                      onClick={e => {
                        e.preventDefault();
                        onDemoPromptSelect?.(demo.value as string);
                      }}
                      className="flex shrink-0 cursor-pointer items-center gap-2 rounded-xl border border-zinc-200 bg-zinc-100 px-3 py-1.5 transition-colors hover:bg-zinc-800/20 dark:border-zinc-800 dark:bg-zinc-800 "
                    >
                      <p className="font-secondary  text-sm  text-zinc-800 dark:text-zinc-50">
                        {demo.label}
                      </p>
                      <ChevronUp />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CTPromptInput;
