import { ImageSolid, Rocket } from "@mynaui/icons-react";
import { CTAnimatedButton } from "@src/shared/Buttons/CTAnimatedButton/CTAnimatedButton";
import CTBasicButton from "@src/shared/Buttons/CTBasicButton/CTBasicButton";
import { CrownIconSolid } from "@src/shared/Icons/IconLib";
import { motion } from "framer-motion";

// const features = [
//   "AI-Powered Thumbnail Analysis",
//   "Smart Title Optimization",
//   "Instant A/B Testing Insights",
//   "Boost Engagement Automatically",
// ];

const Sell = () => {
  return (
    <div className="flex w-full items-center justify-center px-4 py-12">
      <motion.div
        className="relative w-full max-w-5xl rounded-[40px] bg-zinc-800 p-12 text-white shadow-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col  items-end justify-between gap-8 sm:flex-row">
          <div className="max-w-lg space-y-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-yellow-500">
              <Rocket className="h-8 w-8 text-yellow-500" />
            </div>

            <h1 className="font-grifter text-5xl text-yellow-500 md:text-5xl">
              Grow your channel with <br /> creator toolkit ?
            </h1>

            {/* Feature List */}
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:items-end">
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
              label="Try our tools"
              className="w-150 whitespace-nowrap !p-4"
              icon={<ImageSolid />}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Sell;
