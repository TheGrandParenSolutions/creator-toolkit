import MainSection from "@src/components/MainSection/MainSection";
import LoginSignup from "@src/pages/LoginSignup/LoginSignup";
import Pricing from "@src/pages/Pricing/Pricing";
import YouTubeDownloader from "@src/pages/YoutubeDownloader/YoutubeDownloader";
import { Routes, Route } from "react-router-dom";

const AppRouter = () => {
  return (
    <Routes>
      {/* Public Routes without Navbar */}
      <Route path="/login" element={<LoginSignup />} />
      <Route path="/signup" element={<LoginSignup />} />

      {/* Public Routes with Navbar */}
      <Route
        path="/*"
        element={
          <MainSection>
            <main className="flex-grow p-6">
              <Routes>
                <Route path="/" element={<></>} />
                <Route
                  path="/youtube-downloader"
                  element={<YouTubeDownloader />}
                />
                <Route path="/thumbnail-test" element={<></>} />
                <Route
                  path="/pricing"
                  element={
                    <>
                      <Pricing />
                    </>
                  }
                />
              </Routes>
            </main>
          </MainSection>
        }
      />

      {/* Catch All */}
      <Route path="*" element={<></>} />
    </Routes>
  );
};

export default AppRouter;
