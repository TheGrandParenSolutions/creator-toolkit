import { ChevronLeftSolid } from "@mynaui/icons-react";
import { FC } from "react";

interface Props {
  open?: boolean;
}

const Workbench: FC<Props> = ({ open = false }) => {
  return (
    <div
      className="z-workbench"
      style={{ width: !open ? 0 : "var(--workbench-width)" }}
    >
      <div
        style={{
          left: !open ? "1800px" : "var(--workbench-left)",
        }}
        className="fixed bottom-4 top-[calc(var(--header-height)+1rem)] z-0 w-[var(--workbench-inner-width)] transition-[left,width] duration-500"
      >
        <button
          className="z-1 absolute -left-[32px] top-[50%] -translate-y-[50%] cursor-pointer bg-transparent text-zinc-500"
          aria-label="Hide chat"
        >
          <ChevronLeftSolid />
        </button>

        <div className="absolute inset-0 select-none">
          <div className="flex h-full flex-col overflow-hidden rounded-lg border border-zinc-300 bg-zinc-200 dark:border-zinc-700 dark:bg-zinc-800">
            <div className="flex min-h-[var(--panel-header-height)] items-center border-b border-zinc-300 px-3 py-2 dark:border-zinc-700">
              <div className="flex shrink-0 flex-wrap items-center gap-1 overflow-hidden rounded-full p-1"></div>
            </div>
            <div className="relative flex-1 overflow-hidden" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workbench;
