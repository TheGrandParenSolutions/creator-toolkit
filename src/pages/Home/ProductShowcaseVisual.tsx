import { motion } from "framer-motion";

// --- Placeholder Data (Replace with your actual visual) ---
const showcaseImageUrl =
  "https://via.placeholder.com/800x450.png?text=Showcase+(Replace+Me)";
const showcaseAltText =
  "Example of Creator Toolkit turning a prompt into video content and thumbnails.";

const ProductShowcaseVisual = () => {
  return (
    // Outer container for positioning and optional entrance animation
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }} // Example animation
      className="mx-auto mt-10 w-full max-w-3xl px-4"
    >
      <div className="group mx-auto mt-10 w-full max-w-3xl px-4">
        {" "}
        {/* Added group for potential hover effects */}
        {/* Gradient Border/Glow Effect Container */}
        <div
          className="
 relative rounded-xl border
        bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 p-[2px]   shadow-xl transition-all
        duration-300 hover:shadow-2xl dark:from-pink-600 dark:via-purple-600 dark:to-blue-600 dark:shadow-2xl dark:shadow-blue-900/40 dark:hover:shadow-blue-700/50
      "
        >
          {/* Inner Container - Creates the background and holds the content */}
          <div
            className="
          h-full w-full overflow-hidden rounded-lg bg-zinc-50 dark:bg-zinc-900
        "
          >
            {/* Visual Content Area */}
            <div className="p-1">
              {" "}
              {/* Optional small padding inside the inner bg */}
              <img
                src={showcaseImageUrl}
                alt={showcaseAltText}
                className="
                h-auto
                w-full
                rounded-md 
                object-cover
                transition-transform duration-300
                group-hover:scale-[1.02] 
              "
                // width={800} // Add if known
                // height={450} // Add if known
              />
              {/* --- OR --- */}
              {/* <video ... className="w-full h-auto rounded-md ... group-hover:scale-[1.02]" ... /> */}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductShowcaseVisual;
