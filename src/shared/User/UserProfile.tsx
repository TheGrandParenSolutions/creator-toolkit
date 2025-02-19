import {
  Avatar,
  Menu,
  Tooltip,
  Text,
  Button,
  Group,
  Divider,
} from "@mantine/core";
import { motion } from "framer-motion";
import { AuthContext } from "@src/Context/Auth/AuthContext";
import { IUser } from "@src/types/AuthenticationTypes";
import { FC, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CrownIconSolid } from "@src/shared/Icons/IconLib";
import { Logout, User } from "@mynaui/icons-react";

export interface IUserProfile {
  user: IUser;
}

const UserProfile: FC<IUserProfile> = ({ user }) => {
  const navigate = useNavigate();
  const { handleLogout } = useContext(AuthContext);

  const isPremium = user.type === "premium";

  return (
    <Menu shadow="md" width={240}>
      <Menu.Target>
        <Tooltip
          label={
            <Text className="font-grifter flex items-center justify-center gap-1 text-xs dark:text-gray-300">
              {user.userName}
              {isPremium && (
                <CrownIconSolid className="inline h-4 w-4 text-yellow-500" />
              )}
            </Text>
          }
        >
          <div className="relative cursor-pointer">
            {/* Avatar with Soft Glow */}
            <motion.div
              animate={
                isPremium
                  ? {
                      boxShadow:
                        "0px 0px 5px rgba(255, 215, 0, 0.6), 0px 0px 2px rgba(255, 215, 0, 0.4), inset 0px 0px 3px rgba(255, 215, 0, 0.3)",
                      background:
                        "linear-gradient(135deg, rgba(255, 223, 0, 0.08), rgba(255, 140, 0, 0.08))",
                      filter: "drop-shadow(0px 0px 4px rgba(255, 215, 0, 0.5))",
                      animation: "subtlePremiumGlow 6s infinite alternate",
                    }
                  : {}
              }
              // transition={{ duration: 6,  ease: "easeInOut" }}
              className="rounded-full"
            >
              <Avatar
                src={user?.avatar}
                alt={user.userName}
                radius="xl"
                className="h-10 w-10 shadow-lg transition-all dark:shadow-zinc-600 md:h-14 md:w-14"
              />
            </motion.div>
          </div>
        </Tooltip>
      </Menu.Target>

      <Menu.Dropdown className="bg-white dark:bg-zinc-900">
        {/* Header with Premium Status */}
        <div className="p-3 text-center">
          <Text className="font-grifter flex items-center justify-center gap-2 text-lg dark:text-gray-200">
            {user.userName}
            {isPremium && <CrownIconSolid className="inline text-yellow-500" />}
          </Text>

          <motion.div
            animate={isPremium ? { opacity: [1, 0.9, 1] } : {}}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Text
              size="sm"
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-gray-500 text-transparent dark:text-gray-400"
            >
              {isPremium ? (
                <span className="flex items-center justify-center ">
                  {"Premium plan"}
                </span>
              ) : (
                "Free Plan"
              )}
            </Text>
          </motion.div>
        </div>

        <Divider className="border-gray-300 dark:border-gray-700" />

        {/* Menu Items */}
        <Menu.Item
          className="dark:hover:bg-zinc-800"
          onClick={() => navigate("/profile")}
        >
          <Group gap="xs">
            <User className="dark:text-gray-300" />
            <Text className="dark:text-gray-300">My Profile</Text>
          </Group>
        </Menu.Item>

        {!isPremium && (
          <Menu.Item>
            <Button
              color="yellow"
              variant="light"
              fullWidth
              className="dark:bg-yellow-500 dark:text-black"
              onClick={() => navigate("/upgrade")}
            >
              Upgrade to Premium
            </Button>
          </Menu.Item>
        )}

        <Menu.Item
          className="dark:hover:bg-zinc-800"
          onClick={handleLogout}
          color="red"
        >
          <Group gap="xs">
            <Logout className="dark:text-gray-300" size={16} />
            <Text className="dark:text-gray-300">Logout</Text>
          </Group>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default UserProfile;
