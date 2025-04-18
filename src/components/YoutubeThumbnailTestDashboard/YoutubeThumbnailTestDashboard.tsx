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
import SizeView from "@src/components/YoutubeThumbnailTestDashboard/ThumbnailPresentation/SizeView";
import { Helmet } from "react-helmet-async";

const YoutubeThumbnailTestDashboard = () => {
  const [thumbnails, setThumbnails] = useState<string[]>([...TEST_THUMBNAILS]);
  const [activeView, setActiveView] = useState<ViewModes>("desktop"); // Default view
  const [searchValue, setSearchValue] = useState<string>("");
  const [activeTitle, setActiveTitle] = useState<string>("");
  const [activeSizeViewMode, setActiveSizeViewMode] =
    useState<string>("Youtube view");

  const fillerThumbnails: string[] = [];

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
    <div>
      <Helmet>
        <title>YouTube Thumbnail Preview - Creator Toolkit</title>
        <meta
          name="description"
          content="Test and preview your YouTube thumbnails with Creator Toolkit. Optimize your thumbnails for better CTR with live previews on various devices."
        />
        <meta
          name="keywords"
          content="YouTube thumbnail preview, test thumbnails, YouTube thumbnail checker, YouTube video thumbnail, YouTube thumbnail size, Creator Toolkit"
        />
        <meta
          property="og:title"
          content="YouTube Thumbnail Preview - Creator Toolkit"
        />
        <meta
          property="og:description"
          content="Preview and test your YouTube thumbnails in different layouts and screen sizes. Ensure high-quality thumbnails for better performance."
        />
        <meta
          property="og:image"
          content="https://www.creator-toolkit.com/assets/youtube-thumbnail-preview.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.creator-toolkit.com/thumbnail-test/youtube-thumbnail-preview"
        />
      </Helmet>
      <div className="flex flex-col scroll-smooth transition-all mt-14 duration-500 sm:overflow-y-hidden md:flex-row lg:h-[calc(100vh-58px)]">
        <aside className="no-scrollbar border-background-secondary px-global mx-auto mb-6 h-[300px] w-full max-w-[450px] flex-none overflow-y-scroll scroll-smooth rounded-3xl border-2 border-solid border-zinc-200  bg-zinc-100 py-4 dark:border-black dark:bg-zinc-800  sm:h-[350px] md:my-0 md:h-full md:w-[350px]">
          <div className="h-full space-y-6 scroll-smooth px-4">
            <SizeViewModes
              activeSizeViewMode={activeSizeViewMode}
              setActiveSizeViewMode={setActiveSizeViewMode}
            />
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
            <AddTitles setActiveTitle={setActiveTitle} />
            <CTDivider />
            <AdCard />
            <CTDivider />
          </div>
        </aside>

        <div className="no-scrollbar flex w-full flex-col items-center scroll-smooth  p-0 transition-colors duration-300 sm:overflow-y-scroll md:p-4 md:px-6">
          {activeSizeViewMode === "Size view" ? (
            <SizeView thumbnails={thumbnails} title={activeTitle} />
          ) : (
            <div
              className={`${activeView === "tablet" && "max-w-[760px]"} ${
                activeView === "search" && "max-w-[960px]"
              }`}
            >
              <div className=" top-0 z-[200] mb-6 w-full pb-1">
                <div className=" relative z-20 flex h-[56px] w-full items-center justify-between ">
                  <div
                    id="logos"
                    className="hidden items-center sm:ml-4 sm:flex"
                  >
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
                    <div className="mx-auto w-full max-w-sm">
                      <TextInput
                        type="text"
                        value={searchValue}
                        placeholder={"Search - get live results from YouTube"}
                        onChange={e => handleYtSearchChange(e)}
                        onKeyDown={e => handleKeyDown(e)}
                        radius={"xl"}
                        classNames={{
                          input: `w-full p-5 rounded-full text-base text-sm border-transparent dark:bg-zinc-800 border border-solid ring-[0.5px] text-zinc-600 dark:text-zinc-300 outline-none transition focus:ring-2
                   focus:ring-[var(--brand-dark-yellow)] ring-zinc-300 dark:ring-zinc-600
                                  `,
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

              <div className="w-full px-4">
                <div
                  className={`grid grid-cols-1 ${
                    activeView === "mobile" || activeView === "search"
                      ? "sm:grid-cols-1"
                      : "sm:grid-cols-2"
                  } gap-4`}
                >
                  {thumbnails.map((thumbnail, index) => (
                    <div
                      className={`
                ${activeView === "mobile" && "mx-auto"} mx-10`}
                    >
                      <YoutubeThumbnail
                        key={index}
                        thumbnail={thumbnail}
                        viewMode={activeView}
                        title={activeTitle ? activeTitle : undefined}
                      />
                    </div>
                  ))}
                  {fillerThumbnails.map((thumbnail, index) => (
                    <div
                      className={`
                ${activeView === "mobile" && "mx-auto"} mx-10`}
                    >
                      <YoutubeThumbnail
                        key={index}
                        thumbnail={thumbnail}
                        viewMode={activeView}
                      />
                    </div>
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

export default YoutubeThumbnailTestDashboard;
