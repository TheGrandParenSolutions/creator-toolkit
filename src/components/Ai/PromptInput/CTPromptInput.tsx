import React from "react";
import { Upload, ArrowUpCircle, ChevronUp } from "@mynaui/icons-react";
import { SparkleIcon } from "@src/shared/Icons/IconLib";

type CTPromptInputProps = {
  prompt: string;
  demoPrompts: { label: string; value: string }[];
  onPromptChange: (prompt: string) => void;
  onDemoPromptSelect: (prompt: string) => void;
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onStartCreating: () => void;
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
  return (
    <div className="!font-secondary my-2  w-full max-w-3xl">
      <div className="relative w-full">
        <div className="flex w-full flex-col items-center px-4">
          <form className="duration-125 !font-secondary focus-within:bg-card-hover border-muted-border group flex w-full flex-col gap-2 rounded-3xl border border-zinc-300 bg-zinc-100 p-2 shadow-ct-light transition-colors ease-in-out dark:border-zinc-700 dark:bg-zinc-800 dark:shadow-ct-dark">
            {/* Prompt Input */}
            <textarea
              className="ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring scrollbar-thin scrollbar-track-transparent scrollbar-thumb-muted-foreground flex max-h-[200px] w-full resize-none rounded-md bg-transparent px-2 py-2 text-[16px] leading-snug placeholder-shown:text-ellipsis placeholder-shown:whitespace-nowrap focus:bg-transparent focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 md:text-base"
              id="chatinput"
              autoFocus
              style={{ minHeight: 80, height: 80 }}
              placeholder={`Ask creator toolkit to create`}
              value={prompt}
              onChange={e => onPromptChange(e.target.value)}
            />

            <div className="flex flex-wrap items-end gap-1">
              {/* Attach Button */}
              <button
                className="focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground flex h-fit items-center justify-center gap-1 whitespace-nowrap rounded-md px-1 py-0.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-0 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none"
                type="button"
                onClick={() => document.getElementById("file-upload")?.click()}
              >
                <Upload />
                Upload files
              </button>

              {/* Hidden File Upload */}
              <input
                id="file-upload"
                className="hidden"
                accept="image/jpeg,.jpg,.jpeg,image/png,.png,image/webp,.webp"
                multiple
                type="file"
                onChange={onFileUpload}
              />

              {/* Enhance Prompt Button */}
              <button
                className="focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground flex h-fit items-center justify-center gap-1 whitespace-nowrap rounded-md px-1 py-0.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-0 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none"
                type="button"
              >
                <SparkleIcon />
                Enhance prompt
              </button>

              <div className="flex flex-grow items-center justify-end gap-2">
                {/* Start Button */}
                <button
                  id="chatinput-send-message-button"
                  type="submit"
                  className="transition-opacity duration-150 ease-out disabled:cursor-not-allowed disabled:opacity-50"
                  onClick={onStartCreating}
                >
                  <ArrowUpCircle />
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
                        onDemoPromptSelect(demo.value);
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
