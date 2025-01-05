import { Avatar, Menu, Tooltip } from "@mantine/core";
import { AuthContext } from "@src/Context/Auth/AuthContext";
import { IUser } from "@src/types/AuthenticationTypes";
import { FC, useContext } from "react";
import { useNavigate } from "react-router-dom";

export interface IUserProfile {
  user: IUser;
}

const UserProfile: FC<IUserProfile> = props => {
  const { user } = props;
  const navigate = useNavigate();
  const { handleLogout } = useContext(AuthContext);

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Tooltip label={user.username}>
          <Avatar
            src={user?.avatar}
            alt={user.username}
            radius="xl"
            size="md"
            className="cursor-pointer"
            classNames={{
              root: "shadow-md"
            }}
          />
        </Tooltip>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item onClick={() => navigate("/profile")}>My Profile</Menu.Item>
        <Menu.Item
          color="red"
          onClick={() => {
            handleLogout();
          }}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default UserProfile;
