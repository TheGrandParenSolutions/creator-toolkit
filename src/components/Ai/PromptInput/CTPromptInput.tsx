import React, { useState, useRef, FormEvent } from "react";
import { ChevronUp } from "@mynaui/icons-react";
import {
  AiBotLogo,
  ArrowIcon,
  AttachFileIcon,
} from "@src/shared/Icons/IconLib";
import { ListType } from "@src/PropTypes.ts/CommonTypes";

type CTPromptInputProps = {
  prompt: string;
  demoPrompts: ListType[];
  onPromptChange: (prompt: string) => void;
  onDemoPromptSelect: (prompt: string) => void;
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onStartCreating: (promptDetails: string) => void;
  showSuggestions?: boolean;
};

const CTPromptInput: React.FC<CTPromptInputProps> = ({
  prompt,
  demoPrompts,
  onPromptChange,
  onDemoPromptSelect,
  onFileUpload,
  onStartCreating,
  showSuggestions,
}) => {
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

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

  return (
    <div className="!font-secondary my-1 w-full max-w-3xl">
      <div className="relative w-full">
        <div className="flex w-full flex-col items-center px-4">
          <form
            onSubmit={handleSubmit}
            className={`duration-125 !font-secondary focus-within:bg-card-hover border-muted-border group flex w-full flex-col gap-2 rounded-3xl border border-zinc-300 bg-white ${
              error ? "!border-2 !border-red-500" : ""
            } p-2 shadow-ct-light transition-colors ease-in-out dark:border-zinc-700 dark:bg-zinc-800 dark:shadow-ct-dark`}
          >
            <textarea
              ref={inputRef}
              className="ring-offset-background placeholder:text-zinc-400 focus-visible:ring-ring scrollbar-thin scrollbar-track-transparent  scrollbar-thumb-muted-foreground flex max-h-[500px] w-full resize-none rounded-md bg-transparent px-2 py-2 text-[16px] font-medium leading-snug placeholder:font-medium placeholder:italic placeholder-shown:text-ellipsis placeholder-shown:whitespace-nowrap focus:bg-transparent focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 md:text-base"
              id="chatinput"
              autoFocus
              aria-invalid={!!error}
              aria-describedby={error ? "prompt-error" : undefined}
              style={{ minHeight: 80 }}
              placeholder="What do you want to create today?"
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
                className="flex h-fit items-center justify-center gap-1 whitespace-nowrap rounded-lg px-1 py-0.5 text-sm font-medium transition-colors duration-500 hover:bg-zinc-300 dark:hover:bg-zinc-600"
                onClick={() => document.getElementById("file-upload")?.click()}
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
                className="flex h-fit items-center justify-center gap-1 whitespace-nowrap rounded-lg px-1 py-0.5 text-sm font-medium transition-colors duration-500 hover:bg-zinc-300 dark:hover:bg-zinc-600"
              >
                <AiBotLogo />
                Enhance prompt
              </button>

              <div className="flex flex-grow items-center justify-end gap-2">
                <button
                  id="chatinput-send-message-button"
                  type="submit"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white transition-opacity duration-150 ease-out hover:bg-zinc-600 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white dark:text-black dark:hover:bg-zinc-300"
                >
                  <ArrowIcon />
                </button>
              </div>
            </div>
          </form>

          {Boolean(showSuggestions) && (
            <div className="relative mx-2 mt-5 flex max-w-full gap-1 md:mt-8">
              <div className="scrollbar-hide w-full overflow-x-auto whitespace-nowrap">
                <div className="flex gap-2.5">
                  {demoPrompts.map(demo => (
                    <button
                      key={demo.label}
                      onClick={e => {
                        e.preventDefault();
                        onDemoPromptSelect(demo.value as string);
                      }}
                      className="flex shrink-0 cursor-pointer items-center gap-2 rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1.5 shadow-ct-light transition-colors hover:bg-zinc-800/20 dark:border-zinc-800 dark:bg-zinc-800 dark:shadow-ct-dark"
                    >
                      <p className="text-xs text-zinc-800 dark:text-zinc-50">
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
