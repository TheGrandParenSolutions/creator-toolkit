import { useState, useEffect, FC, PropsWithChildren } from "react";
import {
  logout,
  refreshToken,
} from "@src/Api/Modules/Authentication/AuthenticationService";
import { IUser } from "@src/types/AuthenticationTypes";
import { AuthContext } from "@src/Context/Auth/AuthContext";

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);

  // Function to validate session and update auth state
  const checkAuth = async () => {
    try {
      // Attempt token refresh
      const user = await refreshToken();
      if (user) {
        setIsAuthenticated(true);

        // Fetch and update user details
        const userDetails = user;
        if (userDetails) {
          setUser(userDetails);
        } else {
          // If validation fails, reset auth state
          setIsAuthenticated(false);
          setUser(null);
        }
      } else {
        // If refresh fails, reset auth state
        setIsAuthenticated(false);
        setUser(null);
      }
    } catch (error) {
      console.error("Error during authentication check:", error);
      setIsAuthenticated(false);
      setUser(null);
    }
  };

  const updateAuth = async (user: IUser) => {
    if (user) {
      setUser(user);
      setIsAuthenticated(true);
    } else {
      await checkAuth();
    }
  };

  // Function to log out the user
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Error during logout:", error);
    }
    setIsAuthenticated(false);
    setUser(null);
  };

  useEffect(() => {
    const setupAuth = async () => {
      await checkAuth();
    };
    setupAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        checkAuth,
        handleLogout,
        updateAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
