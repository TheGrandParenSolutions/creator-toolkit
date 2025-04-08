import { Sparkles, ShieldCheck, LayersOne } from "@mynaui/icons-react";
import { FC } from "react";

const features = [
  {
    title: "Avoid Scams, Choose Safety",
    description:
      "Most online tools are filled with spam, ads, and security risks. Creator Toolkit is the only premium, all-in-one platform designed to be safe, efficient, and scam-free for creators.",
    icon: ShieldCheck,
  },
  {
    title: "Versatile & AI-Powered",
    description:
      "Access a suite of tools designed for video editing, design, and automation—everything you need, all in one place.",
    icon: LayersOne,
  },
  {
    title: "Constantly Evolving",
    description:
      "We release frequent updates, adding new tools and features to keep your creative workflow efficient and ahead of the curve.",
    icon: Sparkles,
  },
];

const WhyUsSection: FC = () => {
  return (
    <div className="px-6 py-16 text-center md:px-12">
      {/* Section Heading */}
      <h2 className="font-primary mb-8 text-3xl font-semibold text-black dark:text-white sm:text-4xl">
        Why Choose Creator Toolkit?
      </h2>

      {/* Responsive Features Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center rounded-[2.5rem] border border-[--main-yellow] bg-[#fbf0c9] p-6 shadow-md transition-all duration-300 hover:shadow-lg dark:border-2 dark:border-black dark:bg-zinc-800"
          >
            {/* Icon Container */}
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black shadow-md sm:h-16 sm:w-16">
              <feature.icon className="text-2xl text-[var(--brand-mid-yellow)] sm:text-3xl" />
            </div>

            {/* Title */}
            <h3 className="mt-4 text-lg font-bold text-black dark:text-white sm:text-xl">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-400 sm:text-base">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUsSection;
