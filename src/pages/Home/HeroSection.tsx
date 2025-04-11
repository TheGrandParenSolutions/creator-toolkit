import { Text } from "@mantine/core";
import { ImageSolid } from "@mynaui/icons-react";
import AIDashboardEntry from "@src/components/Ai/AiDashboardEntry";
import { HeroBackground } from "@src/pages/Home/HeroBG";
import TrustedBy from "@src/pages/Home/TrustedBy";
import { CTAnimatedButton } from "@src/shared/Buttons/CTAnimatedButton/CTAnimatedButton";
import CTBasicButton from "@src/shared/Buttons/CTBasicButton/CTBasicButton";
import { CrownIconSolid } from "@src/shared/Icons/IconLib";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center px-4 py-2 text-center sm:px-8 md:px-12 md:py-8 lg:px-16 xl:px-24">
      {/* Background SVG Animation */}
      <div className="absolute inset-0 -z-0 w-full overflow-hidden">
        <HeroBackground />
      </div>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-primary relative mt-14 max-w-[90%] text-3xl font-semibold leading-tight text-black dark:text-white sm:text-4xl md:max-w-5xl md:text-5xl lg:text-[70px]"
      >
        <span className="bg-main-gradient bg-clip-text text-transparent">
          Content
        </span>{" "}
        Creation Made Easy. <br className="hidden sm:block" /> No More Wasted
        Hours.
      </motion.h1>

      {/* Hero Description */}
      <motion.p
        className="mt-4 max-w-lg text-base leading-relaxed text-zinc-600 dark:text-zinc-300 sm:mt-6 sm:max-w-xl sm:text-lg md:max-w-3xl md:text-xl lg:text-2xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Generate videos, thumbnails, and more in one click using AI.
      </motion.p>
      <div className="mt-10">
        <AIDashboardEntry />
      </div>

      {/* Catchphrase */}
      {/* <motion.p
        className="font-primary mt-4 bg-text-gradient bg-clip-text text-sm font-semibold uppercase text-transparent sm:mt-6 sm:text-lg md:text-2xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        ❝ CREATE, EDIT & DOMINATE. ❞
      </motion.p> */}

      {/* CTA Buttons */}
      <div className="sm:mt-18 relative mt-12 flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
        <div className="flex flex-col gap-1">
          <CTAnimatedButton
            w={200}
            radius={"xl"}
            label="See pricing"
            hoverLabel="You will love it"
            to="/pricing"
            buttonStyles="w-full sm:w-auto p-7"
            icon={<CrownIconSolid />}
          />
          <p className="text-xs text-zinc-600 dark:text-zinc-300">
            Earlybird discount available
          </p>
        </div>

        <CTBasicButton
          label="Try our tools"
          icon={<ImageSolid />}
          className="w-full sm:w-auto"
          enableBorderAnimation
        />
      </div>

      {/* Trusted By Section */}
      <div className="mt-14 w-full max-w-4xl overflow-hidden antialiased sm:mt-16">
        <Text
          size="lg"
          component="h1"
          className="font-primary relative mb-4 text-center text-base  font-semibold text-zinc-700 opacity-100 dark:text-zinc-300 sm:text-lg md:text-xl"
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
