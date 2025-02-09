import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CTLoader = () => {
  const colors = ["#fbab7e ", "#ffd580 ", "rgb(255, 213, 128) "]; // Close, warm colors
  const [color1, setColor1] = useState(colors[0]);
  const [color2, setColor2] = useState(colors[1]);

  useEffect(() => {
    const interval = setInterval(() => {
      setColor1(colors[Math.floor(Math.random() * colors.length)]);
      setColor2(colors[Math.floor(Math.random() * colors.length)]);
    }, 1200); // Change colors smoothly every 1.2s
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="inline-flex h-full max-h-6 w-full max-w-6 items-center justify-center"
      initial={{ rotate: 0, scale: 1 }}
      animate={{
        rotate: [0, 270, -90, 360, 0], // Fast -> Slow -> Fast
        scale: [1, 1.1, 0.95, 1.05, 1], // Slight pulsing effect
        opacity: [1, 0.95, 1, 0.92, 1], // Flickering effect
      }}
      transition={{
        duration: 2.2,
        repeat: Infinity,
        ease: ["linear"],
        times: [0, 0.3, 0.6, 0.85, 1],
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-5 -10 110 135"
        className="h-[3rem] w-[3rem] md:h-[4rem] md:w-[4rem]" // Responsive size
      >
        <defs>
          <linearGradient
            id="dynamicGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor={color1} />
            <stop offset="100%" stopColor={color2} />
          </linearGradient>
        </defs>
        <path
          d="m93.109 76.172-27.609-27.609 2.375-2.375 2.5469 2.5625c0.35938 0.35938 0.85938 0.5625 1.375 0.5625s1.0156-0.20312 1.3906-0.5625l19.078-19.094c3.9688-3.9531 3.9688-10.391 0-14.359s-10.391-3.9531-14.344 0l-19.094 19.094c-0.76562 0.76562-0.76562 2 0 2.7656l2.5625 2.5469-2.375 2.375-14.344-14.344c-0.625-0.625-0.92188-1.4844-0.8125-2.375 0.09375-0.75 0.64062-1.4688 1.4531-1.9219l8.9219-5.0781c1.3281-0.71875 1.2344-2.5938 0.0625-3.4375-7.4688-7.4531-18.922-8.75-27.859-3.1406-4.2344 2.6719-7.2344 6.8125-8.4531 11.688-0.59375 1.8281-0.5 4.5938-2.6875 5.3125-0.46875 0.15625-1.375 0.34375-2.2344-0.3125-0.8125-0.90625-2.1719-1.2031-3.0938-0.28125l-5.0938 5.1094c-0.76562 0.76562-0.76562 2 0 2.7656l14.922 14.922c0.35938 0.35938 0.85938 0.57812 1.375 0.57812s1.0156-0.21875 1.375-0.57812l5.1094-5.1094c0.76562-0.71875 0.76562-2.0312 0-2.7656-1.0469-1-0.89062-2.8594 0.3125-3.6719 1.1406-0.8125 2.6719-0.6875 3.6562 0.29688l14.875 14.875-21.828 21.812c-0.32812-0.17188-0.71875-0.26562-1.1094-0.21875-0.59375 0.078125-1.1094 0.42188-1.4219 0.92188l-5.9375 9.6875c-0.46875 0.76562-0.34375 1.75 0.29688 2.3906l1.875 1.875c0.375 0.375 0.875 0.57812 1.375 0.57812 0.34375 0 0.70312-0.09375 1.0156-0.28125l9.6875-5.9375c0.5-0.3125 0.84375-0.84375 0.90625-1.4375 0.046875-0.375-0.03125-0.76562-0.20312-1.0938l21.812-21.828 27.625 27.625c1.6719 1.6719 3.8906 2.5938 6.25 2.5938s4.5938-0.92188 6.2656-2.5938 2.5938-3.9062 2.5938-6.2656-0.92188-4.5938-2.5938-6.2656z"
          fill="url(#dynamicGradient)"
        />
      </svg>
    </motion.div>
  );
};

export default CTLoader;
