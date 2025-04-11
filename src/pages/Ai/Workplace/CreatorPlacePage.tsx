import CenterPrompt from "@src/modules/CreatorPlace/components/CenterPromptArea";
import LeftSidebar from "@src/modules/CreatorPlace/components/LeftSidebar";
import RightSidebar from "@src/modules/CreatorPlace/components/RightSidebar";
import { FC } from "react";

const CreatorPlacePage: FC = () => {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-dark-app text-white">
      {/* Left Sidebar */}
      <LeftSidebar />

      {/* Center Prompt Area */}
      <main className="flex flex-1 flex-col items-center justify-start overflow-y-auto p-6">
        <CenterPrompt />
      </main>

      {/* Right Sidebar */}
      <RightSidebar />
    </div>
  );
};

export default CreatorPlacePage;
