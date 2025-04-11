import { Text } from "@mantine/core";
import { HeartIcon } from "@src/shared/Icons/IconLib";

const Footer = () => {
  return (
    <footer className="text-center text-black  dark:text-white">
      {/* Divider Line */}
      {/* <div className=" my-4 w-[90%] border-t border-zinc-300 dark:border-zinc-600"></div> */}

      {/* Footer Bottom Section */}
      <div className="mx-8 mt-9 flex flex-col items-center justify-center gap-2 text-zinc-600 sm:flex-col sm:gap-2">
        {/* Logo */}

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
