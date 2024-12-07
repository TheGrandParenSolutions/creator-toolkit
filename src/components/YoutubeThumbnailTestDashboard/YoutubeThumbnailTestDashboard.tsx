import { useEffect, useState } from "react";
import YoutubeThumbnail from "@src/shared/Youtube/YoutubeThumbnail";
import SizeViewModes from "@src/components/YoutubeThumbnailTestDashboard/ToolCart/SizeViewModes";
import DeviceViewToggles from "@src/components/YoutubeThumbnailTestDashboard/ToolCart/DeviceViewToggles";
import ThumbnailCollector from "@src/components/YoutubeThumbnailTestDashboard/ToolCart/ThumbnailCollector";
import PlayWithThumbnails from "@src/components/YoutubeThumbnailTestDashboard/ToolCart/PlayWithThumbnails";
import AddTitles from "@src/components/YoutubeThumbnailTestDashboard/ToolCart/AddTitles";
import AdCard from "@src/components/YoutubeThumbnailTestDashboard/ToolCart/AdCard";
import CTDivider from "@src/shared/Divider/CTDivider";
import {
  Bell,
  BrandYoutubeSolid,
  Menu,
  MicrophoneSolid,
  Search,
  Video,
  X,
} from "@mynaui/icons-react";
import { TEST_THUMBNAILS } from "@src/components/constants/Constants";
import { ViewModes } from "@src/PropTypes.ts/PropTypes";
import { smoothScrollToTop } from "@src/utils/AnimationUtils";

const YoutubeThumbnailTestDashboard = () => {
  const [thumbnails, setThumbnails] = useState<string[]>([]);
  const [activeView, setActiveView] = useState<ViewModes>("desktop"); // Default view

  const availableThumbnails = [...TEST_THUMBNAILS, ...thumbnails];

  useEffect(() => {
    smoothScrollToTop(600);
  }, []);

  return (
    <div className="flex flex-col scroll-smooth transition-all duration-500 sm:overflow-y-hidden md:flex-row lg:h-[calc(100vh-58px)]">
      <aside className="no-scrollbar bg-light-app dark:bg-dark-app-content border-background-secondary px-global mx-auto my-10 h-[300px] w-full max-w-[350px] flex-none overflow-y-scroll scroll-smooth rounded-lg border py-5 sm:h-[350px] md:my-0 md:h-full md:w-[290px] md:rounded-none md:border-b-0 md:border-l-0 md:border-r-[1px] md:border-t-0 md:border-[#939AAA] md:border-opacity-[30%]">
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
          <CTDivider />
        </div>
      </aside>
      <div className="bg-light-app dark:bg-dark-app-content flex w-full flex-col items-center scroll-smooth px-0 sm:overflow-y-scroll md:px-4 transition-colors duration-300">
        <div style={{ maxWidth: "100%" }}>
          <div className="bg-light-app dark:bg-dark-navigation top-0 z-[200] mb-6 w-full pb-1">
            <div>
              <div className="bg-light-app dark:bg-dark-navigation relative z-20 flex h-[56px] w-full items-center justify-between">
                <div
                  id="logos"
                  className="hidden flex-none items-center sm:flex"
                >
                  <Menu size={28} className="mr-4 text-gray-800 dark:text-gray-300" />
                  <button className="hidden lg:block">
                    <BrandYoutubeSolid size={28} className="text-red-600" />
                  </button>
                </div>

                <div
                  id="search_bar"
                  className="flex items-center"
                  style={{ maxWidth: 720, minWidth: 155 }}
                >
                  <div
                    className="border-1 ml-8 mr-1 flex items-center justify-between rounded-3xl border bg-light-app dark:border-gray-600 dark:bg-dark-input"
                    style={{ minWidth: 83, maxWidth: 636, height: 40 }}
                  >
                    <div
                      className="ml-4 flex items-center"
                      style={{ minWidth: 80, maxWidth: 550 }}
                    >
                      <input
                        id="myInput"
                        className="h-6 bg-transparent outline-none text-gray-800 dark:text-gray-300"
                        placeholder="Search - get live results from YouTube"
                        defaultValue=""
                        style={{ width: 525 }}
                      />
                      <div className="mr-2">
                        <X className="text-gray-800 dark:text-gray-300" />
                      </div>
                    </div>
                    <button className="border-1 float-right flex h-10 w-16 flex-none items-center justify-center rounded-r-3xl border bg-gray-200 dark:border-gray-600 dark:bg-gray-800">
                      <Search className="text-gray-800 dark:text-gray-300" />
                    </button>
                  </div>
                  <div className="ml-1 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                    <MicrophoneSolid size={28} className="text-gray-800 dark:text-gray-300" />
                  </div>
                </div>

                <div
                  id="account_info"
                  className="flex h-10 w-56 items-center justify-end"
                >
                  <div className="flex h-10 w-10 items-center justify-center">
                    <Video size={28} className="text-gray-800 dark:text-gray-300" />
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center">
                    <Bell size={28} className="text-gray-800 dark:text-gray-300" />
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center">
                    <div className="h-8 w-8 rounded-full bg-[--brand-dark-yellow]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnails Section */}
          <div className="h-[800px]">
            <div
              className={`grid ${
                (activeView === "mobile" || activeView === "search") ? "grid-cols-1" : "grid-cols-2"
              } gap-6 px-10 transition-all duration-300`}
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
          <div
            id="footer"
            className="mx-auto flex w-full flex-col items-center justify-center py-16 text-gray-800 dark:text-gray-300 mt-52"
          >
            <div className="bottom-0 mx-4 flex items-center space-x-2 py-1 text-xs">
              <a
                className="hover:text-[--brand-dark-yellow] hover:underline"
                href="/ratemythumbnail"
              >
                Thumbnail Ranker
              </a>
            </div>
            <div className="bottom-0 mx-4 flex space-x-4 py-1 text-sm md:font-semibold">
              <a href="/termsofservice" target="_blank">
                Terms of Service
              </a>
              <a href="/privacypolicy" target="_blank">
                Privacy Policy
              </a>
              <a href="/affiliate-program">Refer &amp; Earn</a>
            </div>
            <div className="hover:text-primary mt-2 flex flex-row items-center justify-center text-sm transition-all">
              <a
                className="font-bold"
                href="mailto:support@testmythumbnails.com"
                target="_blank"
              >
                <h1 className="text-lg">support@creatortoolkit.com</h1>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeThumbnailTestDashboard;
