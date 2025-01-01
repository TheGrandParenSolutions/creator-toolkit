import { Button } from "@mantine/core";
import { logout } from "@src/Api/Modules/Authentication/AuthenticationService";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return <Button onClick={handleLogout}>Logout</Button>;
};

export default LogoutButton;
