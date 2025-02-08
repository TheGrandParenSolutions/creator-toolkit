import { FC } from "react";
import { motion } from "framer-motion";
import TrustedBy from "@src/pages/Home/TrustedBy";
import Tools from "@src/pages/Home/Tools";
import WhyUsSection from "@src/pages/Home/WhyUsSection";
import EngagementSection from "@src/pages/Home/EngagementSection";
import Sell from "@src/pages/Home/Sell";

const Homepage: FC = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex w-full max-w-7xl flex-col     items-center justify-center gap-20">
        {/* Hero Section */}
        <div className="relative flex w-full flex-col items-center justify-center  px-6  md:flex-row md:gap-10 md:px-16">
          {/* Left Content */}
          <div className="w-full max-w-2xl text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-grifter text-4xl text-black dark:text-white sm:text-5xl md:text-6xl"
            >
              Build your next <br />
              <span className="text-black dark:text-white">
                Website
              </span> even <span className="text-yellow-500">faster.</span>
            </motion.h1>
            <p className="mt-4 text-base text-zinc-600 dark:text-zinc-300 sm:text-lg">
              Free Premium Templates. Build high-quality sites in minutes
              without the hassle of finding a designer and building it yourself.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap justify-center gap-4 md:justify-start">
              <button className="rounded-lg bg-yellow-500 px-6 py-3 font-semibold text-black shadow-lg transition hover:bg-yellow-600">
                View Templates
              </button>
              <button className="rounded-lg bg-black px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-zinc-800">
                View Components
              </button>
            </div>
          </div>

          {/* Right Visual Elements with Forced Grid Background */}
          <div className="relative flex min-h-[400px] w-full max-w-md items-center justify-center md:max-w-lg">
            {/* Strong Grid Background with Fixed Height */}
            <div
              className="absolute inset-0 -z-10 opacity-50"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='40' height='40' fill='none' stroke='%23F2EEE3' stroke-width='2' stroke-opacity='0.3' /%3E%3C/svg%3E")`,
                backgroundSize: "40px 40px",
                height: "100%", // Ensures the grid covers the whole section
                width: "100%", // Keeps it aligned
              }}
            ></div>

            {/* Floating UI Cards */}
            <motion.img
              src="src/assets/appsnapshots/vidD.png"
              alt="Video UI"
              className="absolute right-2 top-2 w-40 rounded-lg shadow-lg sm:w-48 md:w-56 lg:w-64"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
            <motion.img
              src="src/assets/appsnapshots/vidD.png"
              alt="Testimonial UI"
              className="absolute bottom-2 left-2 w-44 rounded-lg shadow-lg sm:w-52 md:w-60 lg:w-64"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            />
            <motion.img
              src="src/assets/appsnapshots/vidD.png"
              alt="Tablet UI"
              className="absolute right-8 top-10 w-36 rounded-lg shadow-lg sm:w-40 md:w-44 lg:w-48"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1.2, x: -180, y: 125 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            />
          </div>
        </div>

        {/* Other Sections */}
        <div className="w-full px-6 md:px-12">
          <TrustedBy />
          <Tools />
          <Sell />
          <WhyUsSection />
          <EngagementSection />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
