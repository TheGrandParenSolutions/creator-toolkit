import { refreshToken } from '@src/Api/Modules/Authentication/AuthenticationService';
import axios, { AxiosInstance, AxiosResponse } from 'axios';

/**
 * Create an instance of axios with common configurations.
 */
const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_DEV_API_BASE_URL, // Base URL from environment variables
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true
  // timeout: 10000, // Timeout for requests
});

/**
 * Request interceptor to modify requests before they are sent.
 */
apiClient.interceptors.request.use(
  (config) => {
    // You can add common headers or token here
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

/**
 * Response interceptor to handle common response logic.
 */
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error) => {
    console.error('Response error:', error);
    // Handle common errors like unauthorized or server errors
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      // const refreshed = await refreshToken();
      // if (refreshed) {
      //   // Retry the original request with the refreshed token
      //   return apiClient.request(originalRequest);
      // }
    }
    alert('Unauthorized! Please log in again.');

    return Promise.reject(error);
  }
);

export default apiClient;
