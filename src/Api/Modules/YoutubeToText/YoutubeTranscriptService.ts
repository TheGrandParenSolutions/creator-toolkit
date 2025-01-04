import { post } from "@src/Api/Core/HttpClient";
import { VideoDetails } from "@src/types/YoutubeDownloaderTypes";
import { TranscriptRequest } from "@src/types/YoutubeTranscriptTypes";

export const generateTranscriptText = async (request: TranscriptRequest): Promise<{
    videoDetails: VideoDetails
}> => {
    try {
        const response = await post("transcript/generate-transcript", { ...request });
        return response;
    } catch (error) {
        console.error('Error fetching transcript of the video:', error);
        throw error;
    }
}