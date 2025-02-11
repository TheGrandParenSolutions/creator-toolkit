import { Avatar, Menu, Tooltip, Text } from "@mantine/core";
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
        <Tooltip label={user.userName}>
          <Avatar
            src={user?.avatar}
            alt={user.userName}
            radius="xl"
            size="lg"
            className="cursor-pointer"
            classNames={{
              root: "shadow-zinc-200 shadow-lg dark:!shadow-zinc-600",
            }}
          />
        </Tooltip>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item onClick={() => navigate("/profile")}>My Profile</Menu.Item>
        <Menu.Item>
          <Text className="text-base">Active plan: {user.type || "free"}</Text>
        </Menu.Item>
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
