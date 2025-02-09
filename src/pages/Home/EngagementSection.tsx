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
      {/* <CTLoader /> */}

      <motion.div
        className="relative w-full max-w-4xl rounded-[40px] bg-black p-12 text-white shadow-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col items-center gap-8">
          {/* Icon */}
          <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-yellow-500">
            <SparkleIcon className="h-8 w-8 text-yellow-500" />
          </div>

          {/* Title */}
          <h1 className="font-grifter text-center text-4xl text-yellow-500 md:text-5xl">
            Generate Your Next <br /> Content Idea
          </h1>

          {/* Input Field */}
          <div className="flex w-full max-w-lg flex-col gap-4">
            <input
              type="text"
              className="w-full rounded-full px-6 py-3 text-lg text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
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
                label="Generate your next viral idea"
                hoverLabel="for absolutely free"
                onClick={() => handleGenerateIdea()}
                buttonStyles="w-150 p-7"
              />
            </div>
          </div>

          {/* Loading or Generated Idea */}
          {loading && (
            <motion.div
              className="w-full max-w-lg rounded-lg bg-white px-6 py-4 text-center text-lg font-semibold text-black shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Generating idea...
            </motion.div>
          )}

          {generatedIdea && !loading && (
            <motion.div
              className="w-full max-w-lg rounded-lg bg-white px-6 py-4 text-lg font-semibold text-black shadow-md"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p>💡 **New Idea:** {generatedIdea}</p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default EngagementSection;
