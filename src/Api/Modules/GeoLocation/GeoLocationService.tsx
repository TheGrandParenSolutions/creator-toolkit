import { get } from "@src/Api/Core/HttpClient";
import { GeoLocationResponse } from "@src/types/GeoLocationTypes";

export const getUserLocationData =
  async (): Promise<GeoLocationResponse | null> => {
    try {
      const response = await get("location", {}, {}, true);
      return response?.data || null;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return null;
    }
  };

export const getUserCurrencyByLoc = async (): Promise<string | null> => {
  const response = await get("payment/currency", {}, {}, true);
  return response?.data || "USD";
};
