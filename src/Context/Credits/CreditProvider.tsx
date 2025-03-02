import {
  fetchGuestCredits,
  consumeCredit,
  unlockCredits,
  resetCredits,
} from "@src/Api/Modules/Credits/CreditsService";
import { CreditContext } from "@src/Context/Credits/CreditContext";
import { IUser } from "@src/types/AuthenticationTypes";
import { waitFor } from "@src/utils/CommonUtils";
import { useEffect, useState } from "react";

export const CreditProvider = ({ children }: { children: React.ReactNode }) => {
  const [credits, setCredits] = useState<number | null>(null);

  // Fetch credits on mount
  useEffect(() => {
    refreshCredits();
  }, []);

  // Function to refresh credits
  const refreshCredits = async (user?: IUser) => {
    try {
      await waitFor(2000);
      const availableCredits = await fetchGuestCredits(user);
      setCredits(availableCredits);
    } catch (error) {
      console.error("Error fetching credits:", error);
    }
  };

  // Function to deduct a credit when a feature is used
  const deductCredit = async () => {
    if (credits !== null && credits > 0) {
      try {
        const updatedCredits = await consumeCredit();
        setCredits(updatedCredits);
      } catch (error) {
        console.error("Error using a credit:", error);
      }
    }
  };

  // Function to unlock credits when user logs in
  const unlockUserCredits = async (userId: string) => {
    try {
      const updatedCredits = await unlockCredits(userId);
      setCredits(updatedCredits);
    } catch (error) {
      console.error("Error unlocking credits:", error);
    }
  };

  const resetUserCredits = async (userId?: string) => {
    try {
      await resetCredits(userId || undefined);
      // setCredits(updatedCredits);
    } catch (error) {
      console.error("Error resetting credits:", error);
    }
  };

  return (
    <CreditContext.Provider
      value={{
        credits,
        refreshCredits,
        deductCredit,
        unlockUserCredits,
        resetUserCredits,
      }}
    >
      {children}
    </CreditContext.Provider>
  );
};
