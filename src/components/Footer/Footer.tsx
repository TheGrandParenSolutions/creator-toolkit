import { Text } from "@mantine/core";
import Logo from "@src/components/AppLogo/Logo";
import { HeartIcon } from "@src/shared/Icons/IconLib";
import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Home", to: "/" },
  {
    label: "Video Download Gear",
    to: "/video-download-gear",
  },
  {
    label: "Thumbnail test & preview",
    to: "/thumbnail-test",
  },
  {
    label: "Youtube to text",
    to: "/YoutubeToText",
  },
  {
    label: "Pricing",
    to: "/pricing",
  },
  {
    label: "Thumbnail downloader",
    to: "/thumbnail-downloader",
  },
  {
    label: "Remove background",
    to: "/remove-background",
  },
];

const Footer = () => {
  return (
    <footer className="px-6 py-6 text-center text-black  dark:text-white bg-transparent rounded-3xl border border-zinc-100/70 dark:border-zinc-800">
      {/* Navigation Links */}
      <nav className="mx-10 my-6 flex flex-wrap justify-center gap-4 text-sm font-semibold text-zinc-600 dark:text-zinc-300 sm:gap-6">
        {footerLinks.map((link, index) => (
          <Link
            key={index}
            to={link.to}
            className="hover:text-black dark:hover:text-white"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Divider Line */}
      {/* <div className=" my-4 w-[90%] border-t border-zinc-300 dark:border-zinc-600"></div> */}

      {/* Footer Bottom Section */}
      <div className="mx-8 mt-9 flex flex-col items-center justify-center gap-2 text-zinc-600 sm:flex-col sm:gap-2">
        {/* Logo */}
        <Logo />

        {/* Copyright Text (Dynamic) */}
        <Text
          size="sm"
          className="font-primary font-semibold text-zinc-600 dark:text-zinc-300"
        >
          © {new Date().getFullYear()} Creator Toolkit. All rights reserved.
        </Text>
        <Text
          size="sm"
          className="font-primary flex flex-wrap items-center justify-center gap-2 font-semibold text-zinc-600 dark:text-zinc-300"
        >
          Designed with <HeartIcon /> by Team JJ
        </Text>
      </div>
    </footer>
  );
};

export default Footer;
