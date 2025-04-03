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
import { FC, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CrownIconSolid } from "@src/shared/Icons/IconLib";
import { Logout, User } from "@mynaui/icons-react";

const UserProfile: FC = () => {
  const { isAuthenticated, user } = useContext(AuthContext);

  const navigate = useNavigate();
  const { handleLogout } = useContext(AuthContext);

  if (!isAuthenticated || !user) return null;

  const isPremium = user.type === "premium";

  return (
    <Menu shadow="md" width={240}>
      <Menu.Target>
        <Tooltip
          label={
            <Text className="poppins-bold flex items-center justify-center gap-1 text-xs dark:text-zinc-300">
              {user.userName}
              {isPremium && (
                <CrownIconSolid className="inline h-4 w-4 text-yellow-500" />
              )}
            </Text>
          }
        >
          <div className="relative cursor-pointer">
            {/* Avatar with Soft Glow */}
            <div className="relative rounded-full">
              <Avatar
                src={user?.avatar}
                alt={user.userName}
                radius="xl"
                className="h-10 w-10 shadow-lg transition-all dark:shadow-zinc-600 "
              />
              <span
                className="absolute right-[6.5px] top-[85%] -mr-2 flex h-3 items-center justify-center rounded-full bg-white text-[8px] font-medium text-black"
                style={{
                  width: "2.6rem",
                  boxShadow: "rgba(128, 128, 128, 0.1) 0px 0px 0px 1.1px",
                  letterSpacing: "-0.2px",
                }}
              >
                {isPremium ? "PREMIUM" : "FREE"}
              </span>
            </div>
          </div>
        </Tooltip>
      </Menu.Target>

      <Menu.Dropdown
        className=""
        classNames={{
          dropdown:
            "bg-zinc-50 dark:bg-zinc-800 rounded-[2.5rem] border-none shadow-md dark:shadow-zinc-700 px-3 py-4",
        }}
      >
        {/* Header with Premium Status */}
        <div className="p-3 text-center">
          <Text className="poppins-bold flex items-center justify-center gap-2 text-lg dark:text-zinc-200">
            {user.userName}
            {isPremium && <CrownIconSolid className="inline text-yellow-500" />}
          </Text>

          <motion.div
            animate={isPremium ? { opacity: [1, 0.9, 1] } : {}}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Text
              size="sm"
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent text-zinc-500 dark:text-zinc-400"
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

        <Divider className="border-zinc-300 py-1 dark:border-zinc-700" />

        {/* Menu Items */}
        <Menu.Item
          className="rounded-[2.5rem] hover:bg-zinc-100 dark:hover:bg-zinc-800"
          onClick={() => navigate("/profile")}
        >
          <Group gap="xs">
            <User className="dark:text-zinc-300" />
            <Text className="dark:text-zinc-300">My Profile</Text>
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
          className="rounded-[2.5rem]  "
          onClick={handleLogout}
          color="red"
        >
          <Group gap="xs">
            <Logout className="dark:text-zinc-300" size={16} />
            <Text className="dark:text-zinc-300">Logout</Text>
          </Group>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default UserProfile;
