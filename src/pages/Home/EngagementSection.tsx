import { CTAnimatedButton } from "@src/shared/Buttons/CTAnimatedButton/CTAnimatedButton";
import { SparkleIcon } from "@src/shared/Icons/IconLib";
import { motion } from "framer-motion";
import { FC, useState } from "react";

const EngagementSection: FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [generatedIdea, setGeneratedIdea] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerateIdea = () => {
    if (!inputValue.trim() || loading) return;

    setLoading(true);
    setGeneratedIdea(null);

    setTimeout(() => {
      const ideas = [
        `How to master ${inputValue} in 30 days`,
        `The top 5 mistakes people make in ${inputValue}`,
        `A beginner's guide to ${inputValue}`,
        `The future of ${inputValue}: Trends & predictions`,
        `Why ${inputValue} is the next big thing`,
      ];
      setGeneratedIdea(ideas[Math.floor(Math.random() * ideas.length)]);
      setLoading(false);
    }, 2000); // Simulated loading time
  };

  return (
    <div className="flex w-full items-center justify-center px-4 py-12">
      <motion.div
        className="relative w-full max-w-4xl rounded-[2.5rem] bg-zinc-800 p-8 sm:p-12 text-white shadow-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          {/* Icon */}
          <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full border-2 border-[--main-yellow]">
            <SparkleIcon className="h-7 w-7 sm:h-8 sm:w-8 text-[--main-yellow]" />
          </div>

          {/* Title */}
          <h1 className="font-grifter text-center text-3xl sm:text-4xl md:text-5xl text-[--main-yellow] leading-tight">
            Generate Your Next <br className="hidden sm:block" /> Content Idea
          </h1>

          {/* Input Field */}
          <div className="flex w-full max-w-md sm:max-w-lg flex-col gap-4">
            <input
              type="text"
              className="w-full rounded-full px-4 sm:px-6 py-3 text-sm sm:text-lg text-black focus:outline-none focus:ring-2 focus:ring-[--main-yellow]"
              placeholder="Enter a topic (e.g., AI, Design, Marketing)"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              disabled={loading}
            />
            <div className="flex items-center justify-center">
              <CTAnimatedButton
                loading={loading}
                w={"100%"}
                radius={"xl"}
                label="Want a viral idea ?"
                hoverLabel="Click me!"
                onClick={() => handleGenerateIdea()}
                buttonStyles="w-full sm:w-auto p-5 sm:p-7"
              />
            </div>
          </div>

          {generatedIdea && !loading && (
            <motion.div
              className="w-full max-w-md sm:max-w-lg rounded-lg bg-white px-5 sm:px-6 py-3 sm:py-4 text-base sm:text-lg font-semibold text-black shadow-md"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p>💡 <strong>New Idea:</strong> {generatedIdea}</p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default EngagementSection;
