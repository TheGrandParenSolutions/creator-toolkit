import { FC } from "react";
import { motion } from "framer-motion";
import Tools from "@src/pages/Home/Tools";
import WhyUsSection from "@src/pages/Home/WhyUsSection";
import EngagementSection from "@src/pages/Home/EngagementSection";
import Sell from "@src/pages/Home/Sell";
import Timeline from "@src/pages/Home/Timeline";
import HeroSection from "@src/pages/Home/HeroSection";

// More noticeable slide-up + fade-in animation
const sectionAnimation = {
  hidden: { opacity: 0.5, y: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const Homepage: FC = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex w-full flex-col items-center justify-center overflow-hidden">
        {/* Hero Section (No animation) */}
        <HeroSection />

        {/* Other Sections with Stronger Scroll Animation */}
        <div className="w-full px-6 md:px-12 max-w-7xl">
          {[
            { Component: Timeline, key: "timeline" },
            { Component: Tools, key: "tools" },
            { Component: Sell, key: "sell" },
            { Component: WhyUsSection, key: "why-us" },
            { Component: EngagementSection, key: "engagement" },
          ].map(({ Component, key }) => (
            <motion.div
              key={key}
              variants={sectionAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }} // More sensitive trigger (30% of section must be visible)
              className="will-change-transform"
            >
              <Component />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
