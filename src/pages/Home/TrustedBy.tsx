import { FC } from "react";
import { motion } from "framer-motion";
import { YTLogo } from "@src/shared/Icons/Logos";

const brands = [
  { name: "LettrLabs", logo: YTLogo },
  { name: "Uproar Automation", logo: YTLogo },
  { name: "Solid", logo: YTLogo },
  { name: "Athennian", logo: YTLogo },
  { name: "SIRC", logo: YTLogo },
];

const TrustedBy: FC = () => {
  return (
    <div className="relative w-full overflow-hidden rounded-[24px] bg-[#F2EEE3] py-6 dark:bg-zinc-800">
      {/* Animation Wrapper */}
      <div className="relative flex items-center justify-center">
        <motion.div
          className="flex w-full gap-16"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            duration: 30, // Even slower, premium-like
            ease: "linear",
          }}
        >
          {/* Duplicate Logos for Seamless Infinite Scroll */}
          {[...brands, ...brands].map((brand, index) => (
            <motion.div
              key={index}
              className="flex flex-shrink-0 items-center justify-center"
              whileHover={{ scale: 1.1, opacity: 1 }}
            >
              <brand.logo className="h-10 w-auto text-zinc-400 transition-opacity duration-300 hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TrustedBy;
