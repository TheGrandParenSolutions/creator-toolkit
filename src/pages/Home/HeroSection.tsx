import { Text } from "@mantine/core";
import { ImageSolid } from "@mynaui/icons-react";
import TrustedBy from "@src/pages/Home/TrustedBy";
import { CTAnimatedButton } from "@src/shared/Buttons/CTAnimatedButton/CTAnimatedButton";
import CTBasicButton from "@src/shared/Buttons/CTBasicButton/CTBasicButton";
import { CrownIconSolid, HeroSectionBG } from "@src/shared/Icons/IconLib";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center px-4 py-16 text-center sm:px-8 md:px-12 lg:px-16 xl:px-24">
      {/* Background SVG Animation */}
      <div className="absolute inset-0 -z-0 w-full overflow-hidden">
        <HeroSectionBG className="animate-wave w-full text-black opacity-100 mix-blend-soft-light dark:text-white dark:opacity-100" />
      </div>

      {/* Hero Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-grifter text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-black dark:text-white max-w-[90%] md:max-w-5xl"
      >
        Tools That Supercharge Your{" "}
        <span className="bg-main-gradient bg-clip-text text-transparent">
          Content
        </span>{" "}
        Game.
      </motion.h1>

      {/* Hero Description */}
      <motion.p
        className="mt-4 sm:mt-6 max-w-lg sm:max-w-xl md:max-w-3xl text-base sm:text-lg md:text-xl leading-relaxed text-zinc-800 dark:text-zinc-300"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="font-medium">Creator Toolkit</span> gives you
        everything you need to power your creative journey. <br className="hidden sm:block" />
        It’s all in one place,{" "}
        <span className="font-medium">
          so you can focus on what truly matters
        </span>
      </motion.p>

      {/* Catchphrase */}
      <motion.p
        className="mt-4 font-grifter sm:mt-6 text-sm sm:text-lg md:text-2xl uppercase tracking-wide text-transparent bg-main-gradient bg-clip-text font-bold"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        ❝ CREATE, EDIT & DOMINATE. ❞
      </motion.p>

      {/* CTA Buttons */}
      <div className="relative mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
        <CTAnimatedButton
          w={200}
          radius={"xl"}
          label="See pricing"
          hoverLabel="You will love it"
          to="/pricing"
          buttonStyles="w-full sm:w-auto p-7"
          icon={<CrownIconSolid />}
        />
        <CTBasicButton
          label="Try our tools"
          icon={<ImageSolid />}
          className="w-full sm:w-auto"
        />
      </div>

      {/* Trusted By Section */}
      <div className="mt-16 sm:mt-20 max-w-4xl w-full overflow-hidden antialiased">
        <Text
          size="lg"
          component="h1"
          className="font-grifter relative mb-4 text-center font-bold text-zinc-800 opacity-100 dark:text-zinc-900 text-base sm:text-lg md:text-xl"
        >
          Used by 10,000+ creators, including
        </Text>
        <div className="relative flex justify-center overflow-hidden antialiased">
          <TrustedBy />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
