import { ChevronDown } from "@mynaui/icons-react";
import Logo from "@src/components/AppLogo/Logo";
import { ProjectNameMenu } from "@src/modules/CreatorPlace/additional/ProjectNameMenu";
import { CTAnimatedButton } from "@src/shared/Buttons/CTAnimatedButton/CTAnimatedButton";
import CTBasicButton from "@src/shared/Buttons/CTBasicButton/CTBasicButton";
import { ExportIcon, RocketIcon } from "@src/shared/Icons/IconLib";
import { YTLogo } from "@src/shared/Icons/Logos";

const Header = () => {
  return (
    <header className="mx-auto flex h-[var(--header-height)] w-full shrink-0  select-none items-center justify-center border-b border-white/10 bg-white/10 px-4 py-2  backdrop-blur-sm dark:bg-zinc-900/30">
      <div className="grow-1 z-logo text-bolt-elements-textPrimary flex basis-60 items-center gap-2">
        <a
          href="/"
          className="text-accent flex items-center text-2xl font-semibold"
        >
          <Logo />
        </a>
      </div>
      <div className="text-bolt-elements-textPrimary flex-1 select-text px-4 text-center text-sm">
        <div className="relative flex items-center justify-center gap-1.5">
          <ProjectNameMenu />
        </div>
      </div>
      <div className="grow-1 flex basis-80 items-center justify-end gap-2.5">
        <div className="flex items-center justify-center gap-3">
          <CTBasicButton
            icon={<YTLogo size={16} />}
            label="Connect"
            onClick={() => console.log("Export")}
            enableBorderAnimation
          />

          <CTBasicButton
            icon={<ExportIcon size={16} />}
            rightIcon={<ChevronDown size={16} />}
            label="Export"
            onClick={() => console.log("Export")}
          />

          <CTAnimatedButton label="Post" icon={<RocketIcon size={16} />} />
        </div>
      </div>
    </header>
  );
};

export default Header;
