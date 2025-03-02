import { post } from "@src/Api/Core/HttpClient";
import { IUser } from "@src/types/AuthenticationTypes";
import { isUserPremium } from "@src/utils/CommonUtils";
import { getVisitorId } from "@src/utils/DeviceFingerprintService";

const BASE_URL = "credits"; // Adjust this if needed

/**
 * Fetch or create guest credits
 * @returns {Promise<number>} - Available credits
 */
export const fetchGuestCredits = async (user?: IUser): Promise<number> => {
    const { visitorId } = await getVisitorId();
    const response = await post(BASE_URL, { visitorId, userId: user?.id || undefined, isPremium: isUserPremium(user) || undefined });
    return response.credits;
};

/**
 * Deduct a credit when a feature is used
 * @returns {Promise<number>} - Remaining credits
 */
export const consumeCredit = async (): Promise<number> => {
    const { visitorId } = await getVisitorId();
    const response = await post(`${BASE_URL}/use`, { visitorId });
    return response.credits;
};

/**
 * Unlock credits when a guest logs in
 * @param {string} userId - Logged-in user's ID
 * @returns {Promise<number>} - Updated credits
 */
export const unlockCredits = async (userId: string): Promise<number> => {
    const { visitorId } = await getVisitorId();
    const response = await post(`${BASE_URL}/unlock-credits`, { visitorId, userId });
    return response.credits;
};

/**
 * Reset credits manually (Admin or automated process)
 * @returns {Promise<void>}
 */
export const resetCredits = async (userId?: string): Promise<number> => {
    const { visitorId } = await getVisitorId();
    const response = await post(`${BASE_URL}/reset`, { visitorId, userId: userId || undefined });
    return response.credits;
};
