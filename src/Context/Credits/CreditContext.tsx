import { IUser } from "@src/types/AuthenticationTypes";
import { createContext, useContext } from "react";

interface CreditContextType {
  credits: number | null;
  refreshCredits: (user?: IUser) => Promise<void>;
  deductCredit: () => Promise<void>;
  unlockUserCredits: (userId: string) => Promise<void>;
  resetUserCredits: (userId?: string) => Promise<void>;
}

export const CreditContext = createContext<CreditContextType | undefined>(
  undefined,
);

export const useCreditContext = () => {
  const context = useContext(CreditContext);
  if (!context) {
    throw new Error("useCreditContext must be used within a CreditProvider");
  }
  return context;
};
