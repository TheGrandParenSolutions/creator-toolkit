import { generateTranscriptText } from "@src/Api/Modules/YoutubeToText/YoutubeTranscriptService";
import { TranscriptRequest } from "@src/types/YoutubeTranscriptTypes";

export const generateTranscript = async (request: TranscriptRequest) => {
    const { videoDetails } = await generateTranscriptText(request);
    return videoDetails;
}