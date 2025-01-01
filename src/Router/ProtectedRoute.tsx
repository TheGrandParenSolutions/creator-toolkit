import { Navigate } from "react-router-dom";
import { FC, PropsWithChildren, useContext } from "react";
import { AuthContext } from "@src/Context/Auth/AuthContext";

const ProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children; // Render the protected component if authenticated
};

export default ProtectedRoute;
