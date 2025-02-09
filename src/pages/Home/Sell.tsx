import { Rocket,  } from "@mynaui/icons-react";
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
        className="relative w-full max-w-5xl rounded-[40px] bg-black p-12 text-white shadow-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col  justify-between gap-8 sm:flex-row items-end">
          {/* Left Section: Icon, Heading, Features */}
          <div className="max-w-lg space-y-6">
            {/* Icon */}
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-yellow-500">
              <Rocket className="h-8 w-8 text-yellow-500" />
            </div>

            {/* Title */}
            <h1 className="text-5xl font-grifter text-yellow-500 md:text-5xl">
              Ready to discuss <br /> your project?
            </h1>

            {/* Feature List */}
            
          </div>

          {/* Right Section: Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
            {/* Pricing Button */}
            <button className="rounded-full bg-yellow-500 px-6 py-3 text-lg font-semibold text-black shadow-md transition-all hover:bg-yellow-600">
              See Pricing
            </button>

            {/* Book a Call Button */}
            <button className="flex items-center gap-3 rounded-full bg-white px-6 py-3 text-lg font-semibold text-black shadow-md transition-all hover:bg-gray-200">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg" // Replace with actual profile picture
                alt="User"
                className="h-8 w-8 rounded-full"
              />
              Book a Call
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Sell;
