import { Text } from "@mantine/core";
import AIDashboardEntry from "@src/components/Ai/AiDashboardEntry";
import { HeroBackground } from "@src/pages/Home/HeroBG";
import TrustedBy from "@src/pages/Home/TrustedBy";
import { CTAnimatedButton } from "@src/shared/Buttons/CTAnimatedButton/CTAnimatedButton";
import CTBasicButton from "@src/shared/Buttons/CTBasicButton/CTBasicButton";
import { CrownIconSolid, SparkleIcon } from "@src/shared/Icons/IconLib";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const handleCreateNowClick = () => {
    console.log("Create magic now clicked - implement desired action");
  };

  const navigateToPricing = () => {
    navigate("pricing");
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 py-8 text-center sm:px-8 md:px-12 lg:px-16 xl:px-24">
      <div className="absolute inset-0 -z-0 w-full">
        <HeroBackground />
      </div>

      <div className="z-0 flex w-full max-w-5xl flex-col items-center">
        {" "}
        <h1 className="font-primary relative mt-14 max-w-4xl text-3xl font-extrabold leading-tight text-black dark:text-white sm:text-4xl md:text-5xl lg:text-5xl">
          {" "}
          Bring Your{" "}
          <span className="bg-main-gradient bg-clip-text text-transparent">
            Creative Vision
          </span>{" "}
          to Life.
        </h1>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-zinc-600 dark:text-zinc-300 sm:mt-6 sm:max-w-xl sm:text-lg md:max-w-2xl md:text-xl">
          {" "}
          Creator, writer, designer, musician, or filmmaker just share your idea
          and watch it transform into an inspiring project.
        </p>
        {/* <div className="w-full max-w-2xl">
          <ProductShowcaseVisual />
        </div> */}
        <div className="mt-10 w-full max-w-2xl">
          {" "}
          <AIDashboardEntry />
        </div>
        <div className="relative mt-12 flex flex-col items-start justify-center gap-4 sm:flex-row sm:gap-6">
          <CTAnimatedButton
            label="Start creating"
            onClick={handleCreateNowClick}
            icon={<SparkleIcon size={20} />}
          />

          <div className="flex flex-col items-center gap-1 w-full">
            {" "}
            <CTBasicButton
              label="View pricing"
              icon={<CrownIconSolid size={20} />}
              enableBorderAnimation
              onClick={navigateToPricing}
            />
            <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
              {" "}
              <span className="font-semibold">20%</span> discount available
            </p>
          </div>
        </div>
        <div className="mt-16 w-full max-w-4xl sm:mt-20">
          <Text
            size="lg"
            component="h2"
            className="font-primary mb-5 text-center text-base font-semibold text-zinc-600 dark:text-zinc-300 sm:text-lg" // Adjusted margin & color
          >
            Trusted by{" "}
            <span className="text-black dark:text-white">10,000+</span>{" "}
            creators, including:
          </Text>
          <div className="relative flex justify-center">
            <TrustedBy />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
