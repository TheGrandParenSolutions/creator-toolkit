import apiClient from "@src/Api/Core/BaseService";
import { AxiosRequestConfig } from "axios";

/**
 * Common GET method
 * @param {string} url - The endpoint to call
 * @param {object} [params] - Query parameters
 * @returns {Promise<any>}
 */
export const get = async (url: string, params?: Record<string, any>, config?: AxiosRequestConfig, rawResponse: boolean = false) => {
    try {
        const response = await apiClient.get(url, { params, ...config });
        return rawResponse ? response : response.data;
    } catch (error) {
        console.error('GET request error:', error);
        throw error;
    }
};

/**
 * Common POST method
 * @param {string} url - The endpoint to call
 * @param {object} data - Request body
 * @returns {Promise<any>}
 */
export const post = async (url: string, params?: Record<string, any>, config?: AxiosRequestConfig, rawResponse: boolean = false) => {
    try {
        const response = await apiClient.post(url, { ...params }, { ...config });
        return rawResponse ? response : response.data;

    } catch (error) {
        console.error('POST request error:', error);
        throw error;
    }
};

/**
 * Common PUT method
 * @param {string} url - The endpoint to call
 * @param {object} data - Request body
 * @returns {Promise<any>}
 */
export const put = async (url: string, data: Record<string, any>) => {
    try {
        const response = await apiClient.put(url, data);
        return response.data;
    } catch (error) {
        console.error('PUT request error:', error);
        throw error;
    }
};

/**
 * Common DELETE method
 * @param {string} url - The endpoint to call
 * @param {object} [params] - Query parameters
 * @returns {Promise<any>}
 */
export const del = async (url: string, params?: Record<string, any>) => {
    try {
        const response = await apiClient.delete(url, { params });
        return response.data;
    } catch (error) {
        console.error('DELETE request error:', error);
        throw error;
    }
};
