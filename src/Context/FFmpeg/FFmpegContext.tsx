import { createContext, useContext } from "react";

export type FFmpegContextType = {
  loaded: boolean;
  mergeStreams: (
    videoUrl: string,
    audioUrl: string,
    audioContainer: string,
    videoContainer: string,
    fileName: string,
  ) => Promise<void>;
};


export const useFFmpeg = () => {
  const context = useContext(FFmpegContext);
  if (!context) {
    throw new Error("useFFmpeg must be used within an FFmpegProvider");
  }
  return context;
};

export const FFmpegContext = createContext<FFmpegContextType | null>(null);
