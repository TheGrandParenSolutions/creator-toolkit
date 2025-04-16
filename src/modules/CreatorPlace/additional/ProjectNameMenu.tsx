import { Menu, TextInput } from "@mantine/core";
import { useContext, useState } from "react";
import { ChevronDown } from "@mynaui/icons-react";
import { ThemeContext } from "@src/Context/Theme/ThemeContext";
import { HappyFileIcon, SharpCheckIcon } from "@src/shared/Icons/IconLib";

export const ProjectNameMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode } = useContext(ThemeContext);
  const [projectTitle, setProjectTitle] = useState("Implement Sidebar UI");
  const [inputValue, setInputValue] = useState(projectTitle);

  const isDark = darkMode === true;

  const baseText = isDark ? "text-white" : "text-zinc-800";
  const baseBg = isDark ? "bg-zinc-800" : "bg-zinc-100";
  const inputBg = isDark
    ? "bg-zinc-900 border-zinc-800 text-white"
    : "bg-zinc-200 border-zinc-200 text-black";
  const borderColor = isDark ? "border-zinc-800" : "border-zinc-200";
  const hoverBg = isDark ? "hover:bg-zinc-800" : "hover:bg-zinc-100";

  const handleUpdateTitle = () => {
    setProjectTitle(inputValue.trim() || projectTitle);
    setMenuOpen(false);
  };

  return (
    <Menu
      shadow="md"
      width={320}
      withinPortal
      transitionProps={{ transition: "pop", duration: 150 }}
      position="bottom"
      offset={6}
      opened={menuOpen}
      onOpen={() => setMenuOpen(true)}
      onClose={() => {
        setMenuOpen(false);
        setInputValue(projectTitle);
      }}
    >
      <Menu.Target>
        <button
          className={`inline-flex items-center  gap-1.5 rounded-lg border-none px-3 py-1.5 text-base font-semibold ${baseText}
            bg-zinc-100 bg-size-200 bg-pos-0 text-black transition hover:bg-zinc-200 hover:text-black
            dark:border-zinc-900 dark:bg-zinc-800 dark:text-white dark:hover:bg-[#36363a]
            ${!menuOpen ? "!bg-transparent" : ""}`}
        >
          <HappyFileIcon size={18} />

          <span className="max-w-[180px] truncate">{projectTitle}</span>
          <ChevronDown size={18} />
        </button>
      </Menu.Target>

      <Menu.Dropdown
        className={`${baseBg} ${borderColor} rounded-xl border p-4 shadow-xl`}
      >
        <div className={`mb-2 text-sm font-medium ${baseText}`}>
          Project title
        </div>
        <div className="mb-2 flex items-center gap-2">
          <TextInput
            value={inputValue}
            onChange={e => setInputValue(e.currentTarget.value)}
            size="xs"
            classNames={{
              input: `${inputBg} text-sm rounded-md`,
            }}
          />
          <button
            onClick={handleUpdateTitle}
            className={`rounded-md bg-zinc-200 p-1.5 transition dark:bg-zinc-900  ${hoverBg} ${
              isDark ? "text-white" : "text-zinc-800"
            }`}
            title="Confirm title"
          >
            <SharpCheckIcon className="text-green-400" />
          </button>
        </div>
      </Menu.Dropdown>
    </Menu>
  );
};
