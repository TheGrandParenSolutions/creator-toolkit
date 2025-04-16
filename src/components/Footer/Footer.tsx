import { Text } from "@mantine/core";
import { HeartIcon } from "@src/shared/Icons/IconLib";

const Footer = () => {
  return (
    <footer className="float-right   w-full text-center text-xs dark:text-white">
      {/* Divider Line */}
      {/* <div className=" my-4 w-[90%] border-t border-zinc-300 dark:border-zinc-600"></div> */}

      {/* Footer Bottom Section */}
      <div className="flex flex-col items-end justify-center gap-1  p-3">
        {/* Logo */}

        {/* Copyright Text (Dynamic) */}
        <Text size="xs" className="font-primary font-semibold text-zinc-500">
          © {new Date().getFullYear()} Creator Toolkit. All rights reserved.
        </Text>
        <Text
          size="xs"
          className="font-primary flex flex-wrap items-center justify-center gap-2 font-semibold text-zinc-500"
        >
          Designed with <HeartIcon /> by Team JJ
        </Text>
      </div>
    </footer>
  );
};

export default Footer;
