import CenterPrompt from "@src/modules/CreatorPlace/components/CenterPromptArea";
import Header from "@src/modules/CreatorPlace/components/Header";
import LeftSidebar from "@src/modules/CreatorPlace/components/LeftSidebar";
import Workbench from "@src/modules/CreatorPlace/components/Workbench";
import { PanelLeftIcon, PanelRightIcon } from "@src/shared/Icons/IconLib";
import UserProfile from "@src/shared/User/UserProfile";
import DarkModeToggle from "@src/Utility/DarkModeToggle";
import { FC,  useState } from "react";

const CreatorPlacePage: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  // const [openedWorkbench, setOpenedWorkbench] = useState<boolean>(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setOpenedWorkbench(true);
  //   }, 10000);
  // }, []);

  return (
    <div className="flex h-full w-full flex-col transition-all duration-500 dark:bg-zinc-900">
      <Header />
      <div className="_BaseChat_koc9b_1 bg-bolt-elements-background-depth-1 relative flex h-full w-full overflow-hidden">
        {/* Left Sidebar */}
        <div className="fixed bottom-0 top-[var(--header-height)] z-10 flex flex-col items-center justify-end py-3 pl-2.5">
          <div className="ml-px flex items-center">
            <button className="text-bolt-elements-textSecondary flex cursor-none flex-col items-center gap-4 bg-transparent">
              <DarkModeToggle />
              <UserProfile />
              <button
                className="bg-transparent text-zinc-800 dark:text-zinc-200"
                onClick={() => {
                  setOpen(!open);
                }}
                onMouseEnter={() => {
                  setOpen(true);
                }}
              >
                {!open ? (
                  <PanelLeftIcon size={24} />
                ) : (
                  <PanelRightIcon size={24} />
                )}
              </button>
            </button>
          </div>
        </div>

        <LeftSidebar
          setOpen={setOpen}
          open={open}
          userEmail="thegrandparensolutions@gmail.com"
          userPlan="Personal Plan"
          chats={[
            {
              id: "45356263",
              title: "Create Modern Project Selection Interface",
              date: "today",
            },
            {
              id: "45303746",
              title: "Implement Sidebar UI",
              date: "yesterday",
            },
            { id: "45286437", title: "Serenity App", date: "yesterday" },
          ]}
        />

        {/* Center Prompt Area */}
        <main className="flex size-full overflow-auto transition-[left,width,flex] duration-500">
          <div className="_Chat_koc9b_5 selection-accent flex flex-grow flex-col">
            <CenterPrompt workbenchOpen={false} />
          </div>
          <Workbench open={false} />
        </main>
      </div>
    </div>
  );
};

export default CreatorPlacePage;
