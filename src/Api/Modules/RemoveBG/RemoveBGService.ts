import apiClient from "@src/Api/Core/BaseService";
import { AxiosRequestConfig } from "axios";

/**
 * Upload an image to remove the background
 * @param {File} file - Image file to be processed
 * @returns {Promise<string>} - Returns the processed image URL
 */
export const uploadImageForBGRemoval = async (file: File): Promise<string> => {
    try {
        const uniqueNumber = Math.floor(Math.random() * 10000);

        const fileExtension = file?.name?.split('.')?.pop() || 'png';

        const tempFileName = `temp-${uniqueNumber}.${fileExtension}`;

        const renamedFile = new File([file], tempFileName, { type: file.type });

        const formData = new FormData();
        formData.append("file", renamedFile);
        const config: AxiosRequestConfig = {
            headers: { "Content-Type": "multipart/form-data" },
            responseType: "blob", // Expect binary data (image)
        };

        const response = await apiClient.post("remove-bg", formData, config);

        return URL.createObjectURL(response.data);
    } catch (error) {
        console.error("Error removing background:", error);
        throw error;
    }
};
