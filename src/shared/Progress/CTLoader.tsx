import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CTLoader = () => {
  const colors = ["#FF9145 ", "#FFB060 ", "#FFC676"]; // Close, warm colors
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
        viewBox="0 0 20 20"
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
          d="M3.135 6.89c.933-.725 1.707-.225 2.74.971c.116.135.272-.023.361-.1S7.687 6.456 7.754 6.4c.066-.059.146-.169.041-.292a36 36 0 0 1-.743-.951c-1.808-2.365 4.946-3.969 3.909-3.994c-.528-.014-2.646-.039-2.963-.004c-1.283.135-2.894 1.334-3.705 1.893c-1.061.726-1.457 1.152-1.522 1.211c-.3.262-.048.867-.592 1.344c-.575.503-.934.122-1.267.414c-.165.146-.627.492-.759.607c-.133.117-.157.314-.021.471c0 0 1.264 1.396 1.37 1.52c.105.122.391.228.567.071c.177-.156.632-.553.708-.623c.078-.066-.05-.861.358-1.177m5.708.517c-.12-.139-.269-.143-.397-.029L7.012 8.63a.29.29 0 0 0-.027.4l8.294 9.439c.194.223.53.246.751.053l.97-.813a.54.54 0 0 0 .052-.758zM19.902 3.39c-.074-.494-.33-.391-.463-.182c-.133.211-.721 1.102-.963 1.506c-.24.4-.832 1.191-1.934.41c-1.148-.811-.749-1.377-.549-1.758c.201-.383.818-1.457.907-1.59c.089-.135-.015-.527-.371-.363c-.357.164-2.523 1.025-2.823 2.26c-.307 1.256.257 2.379-.85 3.494l-1.343 1.4l1.349 1.566l1.654-1.57c.394-.396 1.236-.781 1.998-.607c1.633.369 2.524-.244 3.061-1.258c.482-.906.402-2.814.327-3.308M2.739 17.053a.54.54 0 0 0 0 .758l.951.93c.208.209.538.121.746-.088l4.907-4.824l-1.503-1.714z"
          fill="url(#dynamicGradient)"
        />
      </svg>
    </motion.div>
  );
};

export default CTLoader;
