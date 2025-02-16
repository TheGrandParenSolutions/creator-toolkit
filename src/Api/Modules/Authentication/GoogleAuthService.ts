import { get, post } from "@src/Api/Core/HttpClient";

/**
 * Service for Google Authentication
 */
export const GoogleAuthService = {
  /**
   * Initiates Google OAuth login by fetching the redirect URL from backend
   * @returns {Promise<string>} - The Google login URL
   */
  initiateGoogleLogin: async (): Promise<string> => {
    try {
      const response = await get("auth/google-login");
      return response.data.authUrl; // Backend returns the Google OAuth URL
    } catch (error) {
      console.error("Google Login Initiation Failed:", error);
      throw error;
    }
  },

  /**
   * Handles the Google OAuth callback by sending the token to the backend
   * @param {string} token - The Google OAuth access token
   * @returns {Promise<any>} - Authenticated user data
   */
  handleGoogleCallback: async (token: string, refreshToken: string): Promise<any> => {
    try {
      const response = await post("auth/google-callback", { token, refreshToken });
      return response.data; // Returns user details & authentication status
    } catch (error) {
      console.error("Google Callback Handling Failed:", error);
      throw error;
    }
  },
};
