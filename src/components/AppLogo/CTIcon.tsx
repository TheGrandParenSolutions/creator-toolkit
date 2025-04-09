import ToolsLogo from "@src/assets/logo/icon-tool-logo.svg";
import { IconRenderer } from "@src/shared/Icons/IconRenderer";

const CTIcon = () => {
  const Logo = IconRenderer(<ToolsLogo />);

  return <Logo className="!h-4 !w-4 md:!h-8 md:!w-8 lg:!h-9 lg:!w-9" />;
};

export default CTIcon;
