import { IUser } from "@src/types/AuthenticationTypes";
import { createContext } from "react";

interface AuthContextType {
  isAuthenticated: boolean; // Tracks if the user is authenticated
  user: IUser | null; // Contains user details (or null if not authenticated)
  checkAuth: () => Promise<void>; // Function to validate the session
  handleLogout: () => Promise<void>; // Function to log out the user
  updateAuth: (user: IUser) => Promise<void>; // Function to log out the user
}

const defaultAuthContext: AuthContextType = {
  isAuthenticated: false,
  user: null,
  checkAuth: async () => {}, // No-op default
  handleLogout: async () => {}, // No-op default
  updateAuth: async () => {}, // No-op default
};

export const AuthContext = createContext<AuthContextType>(defaultAuthContext);
