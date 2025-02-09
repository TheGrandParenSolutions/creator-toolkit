import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const words = ["Create.", "Edit.", "Own it."]; // Rotating words

const TypewriterText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <p className="mt-4 text-lg sm:text-xl font-medium text-zinc-700 dark:text-zinc-300 leading-relaxed">
      <motion.span
        key={words[index]}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
        className="font-bold text-black dark:text-white"
      >
        {words[index]}
      </motion.span>
      <br />
      <span className="text-zinc-600 dark:text-zinc-400">
        AI handles the grind. You take the spotlight. 🎬
      </span>
    </p>
  );
};

export default TypewriterText;
