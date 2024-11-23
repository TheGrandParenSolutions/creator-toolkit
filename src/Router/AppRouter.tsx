import YouTubeDownloader from "@src/pages/YoutubeDownloader/YoutubeDownloader";
import { Routes, Route } from "react-router-dom";

const AppRouter = () => {
  return (
    <main className="flex-grow p-6 ">
      <Routes>
        <Route path="/" />
        <Route path="/youtube-downloader" element={<YouTubeDownloader />} />
      </Routes>
    </main>
  );
};

export default AppRouter;
