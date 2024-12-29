import { ChangeEvent, useEffect, useState } from "react";
import YoutubeThumbnail from "@src/shared/Youtube/YoutubeThumbnail";
import SizeViewModes from "@src/components/YoutubeThumbnailTestDashboard/ToolCart/SizeViewModes";
import DeviceViewToggles from "@src/components/YoutubeThumbnailTestDashboard/ToolCart/DeviceViewToggles";
import ThumbnailCollector from "@src/components/YoutubeThumbnailTestDashboard/ToolCart/ThumbnailCollector";
import PlayWithThumbnails from "@src/components/YoutubeThumbnailTestDashboard/ToolCart/PlayWithThumbnails";
import AddTitles from "@src/components/YoutubeThumbnailTestDashboard/ToolCart/AddTitles";
import AdCard from "@src/components/YoutubeThumbnailTestDashboard/ToolCart/AdCard";
import CTDivider from "@src/shared/Divider/CTDivider";
import { BrandYoutubeSolid, Search } from "@mynaui/icons-react";
import { TEST_THUMBNAILS } from "@src/components/constants/Constants";
import { ViewModes } from "@src/PropTypes.ts/PropTypes";
import { smoothScrollToTop } from "@src/utils/AnimationUtils";
import { ActionIcon, TextInput } from "@mantine/core";

const YoutubeThumbnailTestDashboard = () => {
  const [thumbnails, setThumbnails] = useState<string[]>([]);
  const [activeView, setActiveView] = useState<ViewModes>("desktop"); // Default view
  const [searchValue, setSearchValue] = useState<string>("");
  const availableThumbnails = [...TEST_THUMBNAILS, ...thumbnails];

  const handleYtSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      findYtVideos();
    }
  };

  const findYtVideos = () => {};

  useEffect(() => {
    smoothScrollToTop(600);
  }, []);

  return (
    <div className="flex flex-col scroll-smooth transition-all duration-500 sm:overflow-y-hidden md:flex-row lg:h-[calc(100vh-58px)]">
      {/* Sidebar */}
      <aside className="no-scrollbar border-background-secondary px-global mx-auto my-6 h-[300px] w-full max-w-[350px] flex-none overflow-y-scroll scroll-smooth rounded-lg border-2 border-solid border-gray-100 bg-light-app py-4 dark:border-black dark:bg-dark-app-content sm:h-[350px] md:my-0 md:h-full md:w-[290px]">
        <div className="h-full space-y-6 scroll-smooth px-2">
          <SizeViewModes />
          <CTDivider />
          <DeviceViewToggles
            setActiveView={setActiveView}
            activeView={activeView}
          />
          <CTDivider />
          <ThumbnailCollector
            setThumbnails={setThumbnails}
            thumbnails={thumbnails}
          />
          <CTDivider />
          <PlayWithThumbnails />
          <CTDivider />
          <AddTitles />
          <CTDivider />
          <AdCard />
          <CTDivider />
        </div>
      </aside>

      <div className="no-scrollbar flex w-full flex-col items-center scroll-smooth bg-light-app p-0 transition-colors duration-300 dark:bg-dark-app-content sm:overflow-y-scroll md:p-4 md:px-6">
        <div className="dark:bg-dark-navigation top-0 z-[200] mb-6 w-full bg-light-app pb-1">
          <div className="dark:bg-dark-navigation relative z-20 flex h-[56px] w-full items-center justify-between bg-light-app">
            <div id="logos" className="hidden items-center sm:ml-4 sm:flex">
              <BrandYoutubeSolid
                size={24}
                className="hidden text-red-600 lg:block"
              />
            </div>

            <div
              id="search_bar"
              className="mx-2 flex flex-1 items-center sm:mx-4"
              style={{ maxWidth: 720 }}
            >
              <div className="mx-auto w-full max-w-[600px]">
                <TextInput
                  type="text"
                  value={searchValue}
                  placeholder={"Search - get live results from YouTube"}
                  onChange={e => handleYtSearchChange(e)}
                  onKeyDown={e => handleKeyDown(e)}
                  radius={"xl"}
                  classNames={{
                    input: `w-full p-5 rounded-full text-base text-sm font-medium border-transparent bg-gray-100 dark:bg-gray-800 ring-2 ring-gray-300 dark:ring-gray-600 text-gray-600 dark:text-gray-300 outline-none transition focus:ring-2
                                 focus:ring-[var(--brand-dark-yellow)] ring-gray-300 dark:ring-gray-600
                                }`,
                  }}
                  rightSection={
                    <div className="flex items-center space-x-2">
                      <ActionIcon
                        className="mr-2"
                        radius="xl"
                        size={"sm"}
                        variant="light"
                        onClick={() => {
                          findYtVideos();
                        }}
                        style={{
                          backgroundColor: "var(--brand-dark-yellow)",
                        }}
                      >
                        <Search size={14} stroke={2.5} color="black" />
                      </ActionIcon>
                    </div>
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div className=" w-full px-4">
          <div
            className={`grid ${
              activeView === "mobile" || activeView === "search"
                ? "grid-cols-1"
                : "grid-cols-2 sm:grid-cols-3"
            } gap-4`}
          >
            {availableThumbnails.map((thumbnail, index) => (
              <YoutubeThumbnail
                key={index}
                thumbnail={thumbnail}
                viewMode={activeView}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center space-y-4 py-6 text-sm text-gray-800 dark:text-gray-300">
          <div className="flex items-center space-x-2 text-xs">
            <a
              href="/ratemythumbnail"
              className="hover:text-[--brand-dark-yellow] hover:underline"
            >
              Thumbnail Ranker
            </a>
          </div>
          <div className="flex space-x-4 font-medium">
            <a href="/termsofservice" target="_blank">
              Terms of Service
            </a>
            <a href="/privacypolicy" target="_blank">
              Privacy Policy
            </a>
            <a href="/affiliate-program">Refer & Earn</a>
          </div>
          <a
            href="mailto:support@creatortoolkit.com"
            className="text-lg font-bold"
          >
            support@creatortoolkit.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default YoutubeThumbnailTestDashboard;
