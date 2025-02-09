import { Text } from "@mantine/core";
import { ImageSolid } from "@mynaui/icons-react";
import TrustedBy from "@src/pages/Home/TrustedBy";
import { CTAnimatedButton } from "@src/shared/Buttons/CTAnimatedButton/CTAnimatedButton";
import CTBasicButton from "@src/shared/Buttons/CTBasicButton/CTBasicButton";
import { CrownIconSolid, HeroSectionBG } from "@src/shared/Icons/IconLib";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden px-6 py-20 text-center md:px-16">
      {/* Background SVG Animation - Adjusted for Consistency */}
      <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
        <HeroSectionBG className="animate-wave h-full w-full text-black opacity-100 mix-blend-soft-light dark:text-white dark:opacity-100" />
      </div>

      {/* Hero Content */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-grifter text-5xl leading-tight text-black dark:text-white sm:text-6xl md:text-7xl"
      >
        Tools That Supercharge Your{" "}
        <span className="bg-main-gradient bg-clip-text text-transparent">
          Content
        </span>{" "}
        Game.
      </motion.h1>

      <motion.p
  className="mt-6 max-w-3xl text-lg sm:text-xl text-center leading-relaxed text-zinc-800 dark:text-zinc-300"
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
>
<span className="font-medium">Creator Toolkit</span>{" "}
gives you everything you need to power your creative journey.  <br />
It’s all in one place,{" "}
<span className="font-medium">so you can focus on what truly matters</span>{" "}
<br />
<span className="font-grifter bg-main-gradient bg-clip-text text-sm md:text-2xl text-transparent tracking-wide uppercase ">
   ❝ CREATE, EDIT & DOMINATE. ❞
</span>



</motion.p>




      {/* CTA Buttons - Improved Spacing & Hover Effects */}
      <div className="mt-8 flex flex-col justify-center gap-6 ">
        <div className="flex flex-wrap justify-center gap-6">
          <CTAnimatedButton
            w={200}
            radius={"xl"}
            label="See pricing"
            hoverLabel="You will love it"
            to="/pricing"
            buttonStyles="w-150 p-7"
            icon={<CrownIconSolid />}
          />
          <CTBasicButton
            label="Try a Sample"
            icon={<ImageSolid className="" />}
          />
        </div>

        <div className="mt-20 max-w-4xl overflow-hidden antialiased">
          <Text
            size="lg"
            component="h1"
            className="font-grifter relative mb-4 text-center font-bold text-zinc-800 opacity-100 dark:text-zinc-900"
          >
            Used by 10,000+ creators, including
          </Text>
          <div className="relative flex overflow-hidden antialiased">
            <TrustedBy />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
