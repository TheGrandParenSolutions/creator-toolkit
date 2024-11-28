import { Text, TextInput, ActionIcon } from "@mantine/core";
import { ArrowRight } from "@mynaui/icons-react";
import Logo from "@src/components/AppLogo/Logo";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNotifyMe = () => {
    console.log("Email submitted:", email);
  };

  return (
    <footer
      className="bg-white p-12 ml-6 text-black shadow-xl border border-solid border-gray-50"
      style={{
        // borderTop: "1px solid var(--brand-dark-orange)",
        // boxShadow: "0 4px 8px grey",\
      }}
    >
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
              <li>Thumbnail AI Creator </li>
              <li>Thumbnail A/B Tester</li>
              <li>Thumbnail Rater</li>
              <li>Thumbnail Previewer</li>
              <li>Thumbnail Ideas</li>
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
              <li>Thumbnail Downloader</li>
              <li>YouTube Revenue Calculator</li>
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
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Become an Affiliate</li>
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
            <Text size="md" className="mb-4 text-gray-400">
              No spam, just quality pixels.
            </Text>
            <div className="flex items-center justify-start w-full">
              <TextInput
                placeholder="Enter your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                radius={"xl"}
                size="md"
                width={"100%"}
                classNames={{
                  root: "w-full",
                  wrapper: "w-full",
                  input: "w-full border border-solid border-[var(--brand-dark-orange)] p-6 text-sm bg-zinc-700 text-white text-semibold"
                }}
                rightSection={
                  <ActionIcon
                    size={32}
                    style={{ marginRight: 24 }}
                    radius="xl"
                    variant="filled"
                    color="var(--brand-dark-yellow)"
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
            <Text size="md" className="mb-2 font-semibold text-gray-400">
              Email us
            </Text>
            <Text component="h1" size="lg" className="font-bold">
              support@creatortoolkit.com
            </Text>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center lg:flex lg:justify-between lg:text-left">
        <Text
          size="sm"
          className="font-grifter mt-4 font-bold opacity-60 lg:mt-0"
        >
          © 2024 Creator Toolkit ALL RIGHTS RESERVED.
        </Text>
        <Text
          size="sm"
          className="font-grifter mt-4 font-bold opacity-60 lg:mt-0"
        >
          Designed with ❤️ by Team JJ
        </Text>
      </div>
    </footer>
  );
};

export default Footer;
