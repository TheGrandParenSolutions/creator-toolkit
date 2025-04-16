import { Dispatch, FC } from "react";
import { useContext } from "react";
import { ThemeContext } from "@src/Context/Theme/ThemeContext";
import { AddNewChat } from "@src/shared/Icons/IconLib";
import ShinyText from "@src/shared/Animated/Text/ShinyText";
import { TextInput } from "@mantine/core";
import UserProfile from "@src/shared/User/UserProfile";
import SidebarActionAccordion from "@src/modules/CreatorPlace/additional/SidebarActionAccordion";
import { AuthContext } from "@src/Context/Auth/AuthContext";
import { useClickOutside } from "@mantine/hooks";

export interface ChatItem {
  id: string;
  title: string;
  date: "today" | "yesterday";
}

export interface LeftSidebarProps {
  open?: boolean;
  setOpen?: Dispatch<boolean>;
  chats?: ChatItem[];
  userEmail?: string;
  userPlan?: string;
  avatarUrl?: string;
}

const LeftSidebar: FC<LeftSidebarProps> = ({
  open = false,
  chats = [],
  setOpen,
}) => {
  const ref = useClickOutside(() => setOpen?.(false));

  const { user } = useContext(AuthContext);

  const { darkMode } = useContext(ThemeContext);
  const isDark = darkMode;

  const groupedChats = {
    today: chats.filter(c => c.date === "today"),
    yesterday: chats.filter(c => c.date === "yesterday"),
  };

  const currentPath =
    typeof window !== "undefined" ? window.location.pathname : "";

  return (
    <div
      ref={ref}
      className={`
        fixed left-0 top-0 z-[50] flex h-full w-[320px] flex-col 
        overflow-hidden rounded-r-3xl border-r shadow-xl transition-all
        duration-300 ${
          isDark ? "border-zinc-800 bg-zinc-900" : "border-zinc-200 bg-zinc-100"
        }
        ${
          open
            ? "visible translate-x-0 opacity-100"
            : "invisible -translate-x-full opacity-0"
        }
      `}
    >
      {/* User Profile Top Section */}
      <div className={`flex items-center gap-3  p-4 pb-6`}>
        <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full">
          <UserProfile />
        </div>
        <div className="flex flex-col truncate">
          <div
            className={`truncate text-sm font-semibold ${
              isDark ? "text-white" : "text-zinc-900"
            }`}
          >
            {user?.userName}
          </div>
          <div
            className={`text-xs ${
              isDark ? "text-zinc-400" : "text-zinc-500"
            } truncate`}
          >
            {user?.email}
          </div>
        </div>
      </div>

      {/* <div className="flex h-[var(--header-height)] items-center px-4" /> */}

      {/* Main Body */}
      <div className="flex flex-1 flex-col overflow-y-auto">
        {/* New Chat */}
        <div className="w-full px-4 pb-3 pt-2">
          <button
            className={`flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2 text-base font-semibold transition-colors duration-200
            ${
              isDark
                ? "bg-zinc-800 text-orange-300 hover:bg-zinc-700"
                : "bg-orange-50 text-orange-600 hover:bg-orange-100"
            }
            shadow-sm hover:shadow-md
          `}
          >
            <span className="text-lg">
              <AddNewChat />
            </span>
            <span className="leading-none text-orange-600 dark:text-orange-300">
              <ShinyText text="New creation" disabled={false} speed={3} />
            </span>
          </button>
        </div>

        {/* Search */}
        <div className="mb-3 px-4">
          <TextInput
            placeholder="Search"
            size="sm"
            classNames={{
              input: `
                w-full rounded-xl border px-3 py-2 text-sm placeholder-opacity-70 focus:outline-none
                ${
                  isDark
                    ? "border-zinc-700 bg-zinc-800 text-white placeholder-zinc-400"
                    : "border-zinc-300 bg-white text-black placeholder-zinc-500"
                }
              `,
            }}
          />
        </div>

        {/* Chat Sections */}
        <div
          className={`mb-2 px-4 font-semibold ${
            isDark ? "text-white" : "text-zinc-800"
          }`}
        >
          Your Chats
        </div>

        <div className="space-y-6 px-4 pb-6">
          {(["today", "yesterday"] as const).map(group =>
            groupedChats[group].length > 0 ? (
              <div key={group}>
                <div
                  className={`mb-2 text-sm font-semibold ${
                    isDark ? "text-zinc-400" : "text-zinc-500"
                  }`}
                >
                  <h1>{group.charAt(0).toUpperCase() + group.slice(1)}</h1>
                </div>
                <div className="space-y-1">
                  {groupedChats[group].map(chat => {
                    const isActive = currentPath.includes(chat.id);
                    return (
                      <a
                        key={chat.id}
                        href={`/p/${chat.id}`}
                        className={`
                          block truncate rounded-xl px-3 py-1.5 transition
                          ${
                            isActive
                              ? isDark
                                ? "bg-zinc-700 text-white"
                                : "bg-zinc-200 text-zinc-900"
                              : isDark
                              ? "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                              : "text-zinc-700 hover:bg-zinc-200 hover:text-zinc-900"
                          }
                        `}
                      >
                        {chat.title}
                      </a>
                    );
                  })}
                </div>
              </div>
            ) : null,
          )}
        </div>
      </div>

      <SidebarActionAccordion />
    </div>
  );
};

export default LeftSidebar;
