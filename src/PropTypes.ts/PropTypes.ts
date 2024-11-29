export type ViewModes = "desktop" | "tablet" | "search" | "mobile";

export interface YoutubeThumbnailProps {
    thumbnail: string;
    title?: string;
    channelName?: string;
    channelLogo?: string;
    views?: string;
    uploadedTime?: string;
    viewMode?: ViewModes;
}