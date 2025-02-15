import { ImageSolid, Rocket } from "@mynaui/icons-react";
import { CTAnimatedButton } from "@src/shared/Buttons/CTAnimatedButton/CTAnimatedButton";
import CTBasicButton from "@src/shared/Buttons/CTBasicButton/CTBasicButton";
import { CrownIconSolid } from "@src/shared/Icons/IconLib";
import { motion } from "framer-motion";

const Sell = () => {
  return (
    <div className="flex w-full items-center justify-center px-4 py-12">
      <motion.div
        className="relative w-full max-w-6xl rounded-[2.5rem] bg-zinc-800 p-8 sm:p-12 text-white shadow-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col sm:flex-row items-end justify-between gap-8">
          {/* Left Content - Title & Icon */}
          <div className="flex flex-col items-center sm:items-start max-w-lg space-y-6">
            <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full border-2 border-yellow-500">
              <Rocket className="h-7 w-7 sm:h-8 sm:w-8 text-[--main-yellow]" />
            </div>

            <h1 className="font-grifter text-xl sm:text-5xl text-[--main-yellow] text-center sm:text-left leading-tight">
              Grow your channel with <br className="hidden sm:block" /> Creator Toolkit 
            </h1>
          </div>

          {/* Right Content - CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <CTAnimatedButton
              radius={"xl"}
              label="See pricing"
              hoverLabel="You will love it"
              to="/pricing"
              buttonStyles="w-full sm:w-[150px] p-6 sm:p-7"
              icon={<CrownIconSolid />}
            />
            <CTBasicButton
              label="Try our tools"
              className="w-full sm:w-auto whitespace-nowrap !p-4 sm:!p-4"
              icon={<ImageSolid />}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Sell;
