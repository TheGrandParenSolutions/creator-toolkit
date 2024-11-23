export interface VideoFormat {
    quality: string;
    format: string;
    size: string;
    url: string;
}

export interface VideoDetails {
    title: string;
    thumbnail: string;
    duration: string;
    uploader: string;
    formats: VideoFormat[];
    viewCount?: number;
}

export const getVideoDetails = async (youtubeUrl: string): Promise<VideoDetails> => {
    console.log({ youtubeUrl })
    try {
        // Simulated API call to fetch video details
        const mockResponse = {
            title: "Learn React in 60 Minutes",
            thumbnail: "assets/test/thumbnail.jpeg",
            duration: "1:00:00",
            uploader: "Code Academy",
            formats: [
                { quality: "1080p", format: "MP4", size: "1.2GB", url: "#" },
                { quality: "720p", format: "MP4", size: "800MB", url: "#" },
                { quality: "480p", format: "MP4", size: "400MB", url: "#" },
                { quality: "Audio", format: "MP3", size: "5MB", url: "#" },
            ],
        };

        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        return mockResponse;
    } catch (error) {
        console.error("Error fetching video details:", error);
        throw new Error("Failed to fetch video details. Please check the URL or try again.");
    }
};
