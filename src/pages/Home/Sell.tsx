import { ImageSolid, Rocket } from "@mynaui/icons-react";
import { CTAnimatedButton } from "@src/shared/Buttons/CTAnimatedButton/CTAnimatedButton";
import CTBasicButton from "@src/shared/Buttons/CTBasicButton/CTBasicButton";
import { CrownIconSolid } from "@src/shared/Icons/IconLib";
import { motion } from "framer-motion";

const Sell = () => {
  return (
    <div className="flex w-full items-center justify-center px-4 py-12">
      <motion.div
        className="relative w-full max-w-6xl rounded-[2.5rem] bg-zinc-800 p-8 text-white shadow-xl sm:p-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col items-end justify-between gap-8 sm:flex-row">
          {/* Left Content - Title & Icon */}
          <div className="flex max-w-lg flex-col items-center space-y-6 sm:items-start">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-yellow-500 sm:h-16 sm:w-16">
              <Rocket className="h-7 w-7 text-[--main-yellow] sm:h-8 sm:w-8" />
            </div>

            <h1 className="poppins-bold text-center text-xl leading-tight text-[--main-yellow] sm:text-left sm:text-5xl">
              Grow your channel with <br className="hidden sm:block" /> Creator
              Toolkit
            </h1>
          </div>

          {/* Right Content - CTA Buttons */}
          <div className="flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
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
              className="w-full whitespace-nowrap !p-4 sm:w-auto sm:!p-4"
              icon={<ImageSolid />}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Sell;
