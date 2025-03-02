import { IUser } from "@src/types/AuthenticationTypes";

/**
 * Delays the execution of an async function for a specified duration.
 *
 * @param {number} duration - The delay duration in milliseconds.
 * @returns {Promise<void>} A promise that resolves after the specified delay.
 */
export const waitFor = (duration: number): Promise<void> => new Promise(resolve => setTimeout(resolve, duration));

export const isUserPremium = (user: IUser | null | undefined) => {
    if (!user) return false;
    const isPremium = user.type === "premium";
    return isPremium;
}

export const isNil = (value: any): value is null | undefined => {
    return value === null || value === undefined;
};