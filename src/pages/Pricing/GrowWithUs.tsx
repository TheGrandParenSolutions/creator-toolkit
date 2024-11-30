import { Text } from "@mantine/core";
import { Rocket } from "@mynaui/icons-react";

const GrowWithUs = () => {
  const logos = [
    "YesTheory",
    "FlowSpark",
    "Proton",
    "TastyEdits",
    "TNM",
    "Growly",
  ]; // Replace with actual logo names or images

  const scrollToSection = () => {
    const target = document.getElementById("initial-section"); // Use the ID of the initial section
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="py-12">
      {/* Animated Logos Section */}
      <div className="mb-12 max-w-3xl antialiased overflow-hidden">
        <Text
          size="lg"
          component="h1"
          className="mb-4 text-center font-bold text-gray-600 dark:text-white"
        >
          Used by 10,000+ YouTubers, Including
        </Text>
        <div className="relative flex overflow-hidden">
          <div className="logos-track dark:text-gray-300">
            {logos.map((logo, index) => (
              <div key={index} className="logo-item dark:text-gray-300">
                {logo}
              </div>
            ))}
            {logos.map((logo, index) => (
              <div key={`duplicate-${index}`} className="logo-item dark:text-gray-300">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Call-to-Action Card */}
      <div className="flex items-center justify-center px-6 py-10">
        <div
          className="relative w-full max-w-4xl rounded-3xl bg-[#ffd580] p-12 text-black"
          style={{
            background: "linear-gradient(135deg, #ffd580 0%, #ffc966 100%)",
          }}
        >
          <div className="flex items-center justify-between  gap-10">
            {/* Text Section */}
            <div>
              <h1 className="font-grifter mb-4 text-2xl font-bold leading-tight md:text-3xl">
                Grow your channel with <br />
                Creator Toolkit
              </h1>
              <p className="text-sm text-black opacity-90 md:text-base">
                Get access to all the tools you need to create the highest{" "}
                <br />
                converting Thumbnail & Titles.
              </p>
            </div>

            {/* Button Section */}
            <div>
              <button
                onClick={scrollToSection}
                className="flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-black px-6 py-3 font-bold text-white  transition hover:bg-gray-800"
              >
                <span>
                  <Rocket />
                </span>{" "}
                Get Started
              </button>
            </div>
          </div>

          {/* Subtle Background Element */}
          <div
            className="absolute right-0 top-0 h-[150px] w-[150px] rounded-full bg-[var(--brand-bg-light)] md:h-[200px] md:w-[200px]"
            style={{ transform: "translate(50%, -50%)", zIndex: -1 }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default GrowWithUs;
