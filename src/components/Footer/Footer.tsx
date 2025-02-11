import { Text } from "@mantine/core";
import Logo from "@src/components/AppLogo/Logo";
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
    <footer className="mt-10 border-t border-zinc-100  shadow-xl shadow-zinc-500 dark:shadow-zinc-100 ml-4  px-6 py-6 text-center text-black dark:border-zinc-700 dark:bg-dark-app-content dark:text-white">
      {/* Navigation Links */}
      <nav className="flex flex-wrap justify-center gap-4 text-sm font-semibold text-zinc-600 dark:text-zinc-300 sm:gap-6 mx-10 my-6">
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
      <div className="mt-9 flex flex-col mx-8 items-center justify-center gap-2 sm:flex-col sm:gap-2">
        {/* Logo */}
        <Logo />

        {/* Copyright Text (Dynamic) */}
        <Text
          size="sm"
          className="font-grifter text-zinc-800 dark:text-zinc-300"
        >
          © {new Date().getFullYear()} Creator Toolkit. All rights reserved.
        </Text>
        <Text
          size="sm"
          className="font-grifter text-zinc-800 dark:text-zinc-300"
        >
          Designed with ❤️ by Team JJ
        </Text>
      </div>
    </footer>
  );
};

export default Footer;
