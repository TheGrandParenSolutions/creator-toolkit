import { Menu, Divider } from "@mantine/core";
import { Rocket } from "@mynaui/icons-react";
import Logo from "@src/components/AppLogo/Logo";
import { CTAnimatedButton } from "@src/shared/Buttons/CTAnimatedButton.tsx/CTAnimatedButton.tsx";
import { Link } from "react-router-dom";

export function MainNav() {
  return (
    <header className="z-50 h-auto w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Logo />
        </div>

        {/* Navigation Links */}
        <nav className="hidden items-center space-x-6 md:flex">
          <Link
            to="/youtube-downloader"
            className="text-sm font-medium text-gray-800 transition hover:text-gray-600 hover:underline"
          >
            YouTube Downloader
          </Link>
          <Link
            to="/pricing"
            className="text-sm font-medium text-gray-800 transition hover:text-gray-600 hover:underline"
          >
            Pricing
          </Link>
          {/* Dropdown using Mantine Menu */}
          <Menu shadow="md" width={200}>
            <Menu.Target>
              <button className="flex items-center text-sm font-medium text-gray-800 transition hover:text-gray-600 hover:underline">
                Resources
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1 h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.707a1 1 0 011.414 0L10 11.293l3.293-3.586a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item>Blog</Menu.Item>
              <Menu.Item>Case Studies</Menu.Item>
              <Divider />
              <Menu.Item>Help Center</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </nav>

        {/* Login and CTA Button */}
        <div className="flex items-center space-x-4">
          <Link
            to="/login"
            className="text-sm font-medium text-gray-800 transition hover:text-gray-600 hover:underline"
          >
            Log in
          </Link>

          <CTAnimatedButton
            w={140}
            radius={"xl"}
            label="Go pro"
            hoverLabel="You will love it"
            to="/pricing"
            buttonStyles="w-60"
            icon={<Rocket />}
          />
        </div>
      </div>
    </header>
  );
}
