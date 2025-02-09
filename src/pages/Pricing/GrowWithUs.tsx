import { Text } from "@mantine/core";
import { Rocket } from "@mynaui/icons-react";
import TrustedBy from "@src/pages/Home/TrustedBy";

const GrowWithUs = () => {
  const scrollToSection = () => {
    const target = document.getElementById("initial-section"); // Use the ID of the initial section
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-xs py-12  md:max-w-3xl">
      {/* Animated Logos Section */}
      <div className="mb-12 overflow-hidden antialiased">
        <Text
          size="lg"
          component="h1"
          className="mb-4 text-center font-grifter text-zinc-600 dark:text-white"
        >
          Used by 10,000+ creators, Including
        </Text>
        <div className="relative flex overflow-hidden">
          <div className="logos-track dark:text-zinc-300">
            <TrustedBy />
          </div>
        </div>
      </div>
      {/* Call-to-Action Card */}
      <div className="flex items-center justify-center px-4 py-10">
        <div
          className="relative rounded-3xl bg-[#ffd580] p-12 text-black"
          style={{
            background: "linear-gradient(135deg, #ffd580 0%, #ffc966 100%)",
          }}
        >
          <div className="flex flex-col items-center justify-between gap-6 text-center sm:gap-10 md:flex-row">
            {/* Text Section */}
            <div>
              <h1 className="mb-4 text-lg font-bold leading-tight text-black md:text-3xl lg:text-4xl">
                Grow your channel with Creator Toolkit
              </h1>
              <p className="text-sm text-black opacity-90 md:text-base lg:text-lg">
                Get access to all the tools you need to create the highest{" "}
                <br className="hidden sm:block" />
                converting Thumbnails & Titles.
              </p>
            </div>

            {/* Button Section */}
            <div className="flex justify-center sm:justify-end">
              <button
                onClick={scrollToSection}
                className="flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-black px-6 py-3 text-sm font-bold text-white transition hover:bg-zinc-800 md:text-base lg:text-lg"
              >
                <Rocket />
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowWithUs;
