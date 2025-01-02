import { Text, TextInput, ActionIcon } from "@mantine/core";
import { ArrowRight } from "@mynaui/icons-react";
import Logo from "@src/components/AppLogo/Logo";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const location = useLocation();
  const [isHidden, setIsHidden] = useState<boolean>(false);

  const handleNotifyMe = () => {
    console.log("Email submitted:", email);
  };

  useEffect(() => {
    setIsHidden(location.pathname.includes("thumbnail-test"));
  }, [location]);

  if (isHidden) return <></>;
  return (
    <footer className="ml-6 mt-10 border-t border-solid border-gray-100 bg-white p-12 text-black shadow-xl dark:border-black dark:bg-dark-app-content dark:text-white">
      {/* Logo */}
      <div className="mb-10">
        <Logo />
      </div>

      {/* Footer Content */}
      <div className="mr- flex w-full flex-wrap justify-between gap-24 px-5 lg:flex-nowrap">
        {/* Links Section */}
        <div className="grid w-full  grid-cols-2 gap-x-10 lg:grid-cols-3">
          {/* Products */}
          <div>
            <Text
              size="xl"
              component="h1"
              className="mb-4 font-bold uppercase tracking-wide text-[var(--brand-dark-yellow)]"
            >
              Products
            </Text>
            <ul className="space-y-4 text-base font-semibold">
              <li className="dark:text-gray-300">Thumbnail AI Creator</li>
              <li className="dark:text-gray-300">Thumbnail A/B Tester</li>
              <li className="dark:text-gray-300">Thumbnail Rater</li>
              <li className="dark:text-gray-300">Thumbnail Previewer</li>
              <li className="dark:text-gray-300">Thumbnail Ideas</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <Text
              size="xl"
              component="h1"
              className="mb-4 font-bold uppercase tracking-wide text-[var(--brand-dark-yellow)]"
            >
              Resources
            </Text>
            <ul className="space-y-4 text-base font-semibold">
              <li className="dark:text-gray-300">Thumbnail Downloader</li>
              <li className="dark:text-gray-300">
                YouTube Revenue Calculator
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <Text
              size="xl"
              component="h1"
              className="mb-4 font-bold uppercase tracking-wide text-[var(--brand-dark-yellow)]"
            >
              Company
            </Text>
            <ul className="space-y-4 text-base font-semibold">
              <li className="dark:text-gray-300">Terms of Service</li>
              <li className="dark:text-gray-300">Privacy Policy</li>
              <li className="dark:text-gray-300">Become an Affiliate</li>
            </ul>
          </div>
        </div>

        {/* Community and Contact */}
        <div className="flex w-full flex-col items-start">
          {/* Subscription Section */}
          <div className="w-full">
            <Text size="lg" className="mb-2 font-bold ">
              Become a part of our community
            </Text>
            <Text size="md" className="mb-4 text-gray-500 dark:text-gray-400">
              No spam, just quality pixels.
            </Text>
            <div className="flex w-full items-center justify-start">
              <TextInput
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                radius={"xl"}
                size="md"
                width={"100%"}
                classNames={{
                  root: "w-full",
                  wrapper: "w-full",
                  input:
                    "w-full border border-solid border-[var(--brand-dark-orange)] p-6 text-sm bg-zinc-100 dark:bg-dark-app-secondary text-black dark:text-white",
                }}
                rightSection={
                  <ActionIcon
                    size={32}
                    style={{ marginRight: 24 }}
                    radius="xl"
                    variant="filled"
                    className="bg-[var(--brand-dark-yellow)] hover:bg-yellow-500"
                    onClick={handleNotifyMe}
                  >
                    <ArrowRight size={18} stroke={2.5} color="black" />
                  </ActionIcon>
                }
              />
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-8">
            <Text
              size="md"
              className="mb-2 font-semibold text-gray-500 dark:text-gray-400"
            >
              Email us
            </Text>
            <Text component="h1" size="lg" className="font-bold">
              support@creatortoolkit.com
            </Text>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-6 text-center lg:flex lg:justify-between lg:text-left">
        <Text
          size="sm"
          className="font-grifter mt-4 font-bold opacity-60 dark:text-gray-400 lg:mt-0"
        >
          © 2024 Creator Toolkit ALL RIGHTS RESERVED.
        </Text>
        <Text
          size="sm"
          className="font-grifter mt-4 font-bold opacity-60 dark:text-gray-400 lg:mt-0"
        >
          Designed with ❤️ by Team JJ
        </Text>
      </div>
    </footer>
  );
};

export default Footer;
