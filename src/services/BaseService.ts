import axios, { AxiosInstance, AxiosResponse } from 'axios';

/**
 * Create an instance of axios with common configurations.
 */
const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_DEV_API_BASE_URL, // Base URL from environment variables
  headers: {
    'Content-Type': 'application/json',
  },
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
  (error) => {
    console.error('Response error:', error);
    // Handle common errors like unauthorized or server errors
    if (error.response?.status === 401) {
      alert('Unauthorized! Please log in again.');
      // Optionally redirect to login
    }
    return Promise.reject(error);
  }
);

export default apiClient;
