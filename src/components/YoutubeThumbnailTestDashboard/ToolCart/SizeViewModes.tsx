import React, { useState } from "react";

const SizeViewModes = () => {
  const [isYoutubeView, setIsYoutubeView] = useState<boolean>(true);

  return (
    <div className="relative  flex w-full max-w-md justify-center rounded-full border-[1px] border-solid border-[var(--brand-dark-orange)] bg-white px-1 py-1">
      {/* Active Background */}
      <div
        className={`absolute left-0 top-0 h-full w-1/2 rounded-full bg-[#ffd580] transition-transform duration-300 ${
          isYoutubeView ? "translate-x-0" : "translate-x-full"
        }`}
      ></div>

      {/* Buttons */}
      <button
        onClick={() => setIsYoutubeView(true)}
        className={`relative z-10 w-1/2 p-2  text-center text-sm font-semibold transition-all   ${
          isYoutubeView ? "text-black" : "text-gray-600"
        }`}
      >
        Youtube view
      </button>
      <button
        onClick={() => setIsYoutubeView(false)}
        className={`relative z-10 w-1/2  p-2 text-center text-sm font-semibold transition-all ${
          !isYoutubeView ? "text-black" : "text-gray-600"
        }`}
      >
        Size view
      </button>
    </div>
  );
};

export default SizeViewModes;
