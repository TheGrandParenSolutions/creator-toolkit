import { Routes, Route, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // For dynamic meta tags

import MainSection from "@src/components/MainSection/MainSection";
import LoginSignup from "@src/pages/LoginSignup/LoginSignup";
import Pricing from "@src/pages/Pricing/Pricing";
import YouTubeDownloader from "@src/pages/YoutubeDownloader/YoutubeDownloader";
import YoutubeThumbnailTestOnboarding from "@src/pages/YoutubeThumbnailTestOnboarding/YoutubeThumbnailTestOnboarding";
import YoutubeThumbnailTestDashboard from "@src/components/YoutubeThumbnailTestDashboard/YoutubeThumbnailTestDashboard";

const AppRouter = () => {
  return (
    <Routes>
      {/* Public Routes without Navbar */}
      <Route
        path="/login"
        element={
          <>
            <Helmet>
              <title>Login - Creator Toolkit</title>
              <meta
                name="description"
                content="Login to Creator Toolkit and access all tools for creators in one place."
              />
            </Helmet>
            <LoginSignup />
          </>
        }
      />
      <Route
        path="/signup"
        element={
          <>
            <Helmet>
              <title>Signup - Creator Toolkit</title>
              <meta
                name="description"
                content="Sign up for Creator Toolkit and start creating amazing content with ease."
              />
            </Helmet>
            <LoginSignup />
          </>
        }
      />

      {/* Public Routes with Navbar */}
      <Route
        path="/"
        element={
          <MainSection>
            <main className="flex-grow p-4 transition-all duration-300">
              <>
                <Helmet>
                  <title>Home - Creator Toolkit</title>
                  <meta
                    name="description"
                    content="Creator Toolkit is your one-stop solution for all content creation needs. Download videos, generate thumbnails, and more!"
                  />
                </Helmet>
                <div>Welcome to Creator Toolkit!</div>
              </>
            </main>
          </MainSection>
        }
      />
      <Route
        path="/youtube-downloader"
        element={
          <MainSection>
            <main className="flex-grow p-4 transition-all duration-300">
              <>
                <Helmet>
                  <title>Youtube Downloader - Creator Toolkit</title>
                  <meta
                    name="description"
                    content="Download YouTube videos in HD or convert them to MP3 with ease using Creator Toolkit."
                  />
                </Helmet>
                <YouTubeDownloader />
              </>
            </main>
          </MainSection>
        }
      />
      <Route
        path="/thumbnail-test"
        element={
          <MainSection>
            <main className="flex-grow p-4 transition-all duration-300">
              <>
                <Helmet>
                  <title>Thumbnail Test - Creator Toolkit</title>
                  <meta
                    name="description"
                    content="Test and preview your YouTube thumbnails with Creator Toolkit."
                  />
                </Helmet>
                <YoutubeThumbnailTestOnboarding />
              </>
            </main>
          </MainSection>
        }
      />
      <Route
        path="/thumbnail-test/youtubethumbnailpreview"
        element={
          <MainSection>
            <main className="flex-grow p-4 transition-all duration-300">
              <>
                <Helmet>
                  <title>Youtube Thumbnail Previewer - Creator Toolkit</title>
                  <meta
                    name="description"
                    content="Youtube thumbnail preview for testing YouTube thumbnails with Creator Toolkit."
                  />
                </Helmet>
                <YoutubeThumbnailTestDashboard />
              </>
            </main>
          </MainSection>
        }
      />
      <Route
        path="/pricing"
        element={
          <MainSection>
            <main className="flex-grow p-4 transition-all duration-300">
              <>
                <Helmet>
                  <title>Pricing - Creator Toolkit</title>
                  <meta
                    name="description"
                    content="Explore affordable pricing plans for Creator Toolkit's tools and features."
                  />
                </Helmet>
                <Pricing />
              </>
            </main>
          </MainSection>
        }
      />

      {/* Catch All */}
      <Route
        path="/404"
        element={
          <>
            <Helmet>
              <title>404 - Page Not Found</title>
              <meta
                name="description"
                content="Page not found. Please check the URL or return to the homepage."
              />
            </Helmet>
            <div>404 - Page Not Found</div>
          </>
        }
      />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
};

export default AppRouter;
