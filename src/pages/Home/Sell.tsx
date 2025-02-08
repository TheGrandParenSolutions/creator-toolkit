import { Rocket, CheckCircle } from "@mynaui/icons-react";
import { motion } from "framer-motion";

const features = [
  "AI-Powered Thumbnail Analysis",
  "Smart Title Optimization",
  "Instant A/B Testing Insights",
  "Boost Engagement Automatically",
];

const Sell = () => {
  return (
    <div className="flex w-full items-center justify-center px-4 py-6">
      <motion.div
        className="relative w-full max-w-3xl rounded-3xl bg-main-gradient p-10 text-black shadow-lg transition-all duration-300 hover:shadow-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col items-center justify-between gap-6 text-center sm:gap-10 md:flex-row">
          {/* Text Section */}
          <div className="max-w-md">
            <h1 className="font-grifter mb-4 text-start text-xl leading-tight text-black md:text-3xl lg:text-4xl">
              Supercharge Your Channel with Creator Toolkit
            </h1>
            <p className="text-sm text-black opacity-90 md:text-base lg:text-lg">
              Get access to all the tools you need to create high-converting
              thumbnails & titles effortlessly.
            </p>

            {/* Feature List with Animation */}
            <div className="mt-4 space-y-2 text-sm md:text-base lg:text-lg">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 text-black"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <CheckCircle className="h-5 w-5 text-[var(--brand-dark-orange)]" />
                  {feature}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Button Section with Floating Effect */}
          <motion.div
            className="flex justify-center sm:justify-end"
            whileHover={{ scale: 1.05 }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          >
            <button
              className="flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-black px-6 py-3 
              text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-zinc-800 hover:shadow-[0_0_15px_rgba(0,0,0,0.4)] md:text-base lg:text-lg"
            >
              <Rocket className="h-5 w-5" />
              Get Started
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Sell;
