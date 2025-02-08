import { FC, useState } from "react";

const EngagementSection: FC = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="mx-auto max-w-4xl rounded-[24px] bg-[#f5f3eb] px-6 py-20 text-center dark:bg-zinc-800 md:px-12">
      {/* Section Title */}
      <h2 className="mb-4 text-4xl font-bold text-black dark:text-white">
        New Breath-Taking <br /> Templates Every Week
      </h2>
      <p className="mb-8 text-zinc-600 dark:text-zinc-300">
        Be the first to try out our new AI-powered tools and unique templates.
        No spam, just quality!
      </p>

      {/* Interactive Input - Generate Idea */}
      <div className="mx-auto flex max-w-lg items-center justify-center overflow-hidden rounded-full bg-white shadow-md">
        <input
          type="text"
          placeholder="Enter a template idea..."
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          className="w-full px-4 py-3 text-zinc-800 placeholder-zinc-400 outline-none"
        />
        <button className="rounded-none bg-black px-6 py-3 font-semibold text-white transition hover:bg-zinc-800">
          Generate Idea
        </button>
      </div>
    </div>
  );
};

export default EngagementSection;
