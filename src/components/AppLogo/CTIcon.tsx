import ToolsLogo from "@src/assets/logo/icon-tool-logo.svg";
import { IconRenderer } from "@src/shared/Icons/IconRenderer";

const CTIcon = () => {
  const Logo = IconRenderer(<ToolsLogo />);

  return <Logo className="!h-5 !w-5 md:!h-8 md:!w-8 lg:!h-10 lg:!w-10" />;
};

export default CTIcon;
