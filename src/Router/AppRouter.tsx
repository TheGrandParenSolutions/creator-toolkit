import { Routes, Route, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // For dynamic meta tags

import MainSection from "@src/components/MainSection/MainSection";
import LoginSignup from "@src/pages/LoginSignup/LoginSignup";
import Pricing from "@src/pages/Pricing/Pricing";
import YoutubeThumbnailTestOnboarding from "@src/pages/YoutubeThumbnailTestAndPreview/YoutubeThumbnailTestOnboarding";
import YoutubeThumbnailTestDashboard from "@src/components/YoutubeThumbnailTestDashboard/YoutubeThumbnailTestDashboard";
import YoutubeToText from "@src/pages/YoutubeToText/YoutubeToText";
import ThumbnailDownloader from "@src/pages/ThumbnailDownloader/ThumbnailDownloader";
import ForgotPassword from "@src/pages/LoginSignup/ForgotPassword";
import ResetPassword from "@src/pages/LoginSignup/ResetPassword";
import VideoDownloader from "@src/pages/VideoDownloader/VideoDownloader";
import RemoveBackground from "@src/pages/RemoveBackground/RemoveBackground";
import HomePage from "@src/pages/Home/Home";
import PaymentSuccess from "@src/pages/Pricing/PaymentSuccess";
import CreatorPlacePage from "@src/pages/Ai/Workplace/CreatorPlacePage";

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
            <main className="flex-grow transition-all duration-300">
              <>
                <Helmet>
                  <title>Home - Creator Toolkit</title>
                  <meta
                    name="description"
                    content="Creator Toolkit is your one-stop solution for all content creation needs. Download videos, generate thumbnails, and more!"
                  />
                </Helmet>
                <HomePage />
              </>
            </main>
          </MainSection>
        }
      />
      {/* <Route
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
      /> */}
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
        path="/thumbnail-test/youtube-thumbnail-preview"
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
        path="/YoutubeToText"
        element={
          <MainSection>
            <main className="flex-grow p-4 transition-all duration-300">
              <>
                <Helmet>
                  <title>Youtube to Text - Creator Toolkit</title>
                  <meta
                    name="description"
                    content="Welcome to Youtube to Text online converter, where you can easily convert any video from popular platforms like Youtube to text. Whether it's a regular video, a live stream, or a short, our tool can handle it all in Creator Toolkit."
                  />
                </Helmet>
                <YoutubeToText />
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
      <Route
        path="/thumbnail-downloader"
        element={
          <MainSection>
            <main className="flex-grow p-4 transition-all duration-300">
              <>
                <Helmet>
                  <title>Download Thumbnail - Creator Toolkit</title>
                  <meta
                    name="description"
                    content="Test and preview your YouTube thumbnails with Creator Toolkit."
                  />
                </Helmet>
                <ThumbnailDownloader />
              </>
            </main>
          </MainSection>
        }
      />

      {/* <Route
        path="/instagramReelsDownloader"
        element={
          <MainSection>
            <main className="flex-grow p-4 transition-all duration-300">
              <>
                <Helmet>
                  <title>Instagram Reels Downloader - Creator Toolkit</title>
                  <meta
                    name="description"
                    content="Download Instagram Reels easily and save them in high quality using Creator Toolkit."
                  />
                </Helmet>
                <InstagramReelsDownloader />
              </>
            </main>
          </MainSection>
        }
      /> */}

      <Route
        path="/video-download-gear"
        element={
          <MainSection>
            <main className="flex-grow p-4 transition-all duration-300">
              <>
                <Helmet>
                  <title>
                    Video Download Gear | Download YouTube Videos & Instagram
                    Reels
                  </title>
                  <meta
                    name="description"
                    content="Video Download Gear: The ultimate tool for downloading YouTube videos, Instagram reels, and more. Fast, secure, and reliable video downloader for creators."
                  />
                  <meta
                    name="keywords"
                    content="YouTube downloader, YouTube video downloader, Instagram reel downloader, Reels downloader, video downloader, multi-platform downloader, download YouTube videos, download Instagram reels"
                  />
                  <link
                    rel="canonical"
                    href="https://www.creator-toolkit.com/video-download-gear"
                  />
                  <meta
                    property="og:title"
                    content="Video Download Gear | Download YouTube Videos & Instagram Reels"
                  />
                  <meta
                    property="og:description"
                    content="Download videos from YouTube and Instagram Reels with Video Download Gear. Easy-to-use, fast, and reliable downloader for creators."
                  />
                  <meta
                    property="og:image"
                    content="https://www.creator-toolkit.com/assets/video-download-gear-thumbnail.jpg"
                  />
                  <meta property="og:type" content="website" />
                  <meta
                    property="og:url"
                    content="https://www.creator-toolkit.com/video-download-gear"
                  />
                </Helmet>

                <VideoDownloader />
              </>
            </main>
          </MainSection>
        }
      />

      <Route
        path="/remove-background"
        element={
          <MainSection>
            <main className="flex-grow p-4 transition-all duration-300">
              <>
                <Helmet>
                  <title>Remove Background - Creator Toolkit</title>
                  <meta
                    name="description"
                    content="Remove background from images easily with Creator Toolkit. Upload your image and get a transparent background in seconds."
                  />
                  <meta
                    name="keywords"
                    content="remove background, background remover, transparent image, image editor, AI background remover"
                  />
                  <link
                    rel="canonical"
                    href="https://www.creator-toolkit.com/remove-background"
                  />
                  <meta
                    property="og:title"
                    content="Remove Background - Creator Toolkit"
                  />
                  <meta
                    property="og:description"
                    content="Instantly remove background from images with Creator Toolkit's AI-powered tool."
                  />
                  <meta
                    property="og:image"
                    content="https://www.creator-toolkit.com/assets/remove-background-tool-thumbnail.jpg"
                  />
                  <meta property="og:type" content="website" />
                  <meta
                    property="og:url"
                    content="https://www.creator-toolkit.com/remove-background"
                  />
                </Helmet>

                <RemoveBackground />
              </>
            </main>
          </MainSection>
        }
      />
      <Route
        path="/payment-success"
        element={
          <MainSection>
            <main className="flex-grow p-4 transition-all duration-300">
              <>
                <Helmet>
                  <title>Payment Successful - Creator Toolkit</title>
                </Helmet>
                <PaymentSuccess />
              </>
            </main>
          </MainSection>
        }
      />

      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />

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
      <Route
        path="/creation/:id"
        element={
          <>
            <Helmet>
              <title>CreationPlace</title>
              <meta
                name="description"
                content="Your creative AI workspace to generate videos, scripts, thumbnails and more."
              />
            </Helmet>
            <CreatorPlacePage />
          </>
        }
      />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
};

export default AppRouter;
