import { Book, ClockCircle, PaperclipSolid } from "@mynaui/icons-react";
import { FC } from "react";

const features = [
  {
    title: "Save Time",
    description:
      "Build your projects lightning fast with high-quality Templates built by Webflow Experts.",
    icon: ClockCircle,
  },
  {
    title: "Different Styles",
    description:
      "Explore high-quality templates in different styles made for a variety of business niches.",
    icon: PaperclipSolid,
  },
  {
    title: "Frequent Updates",
    description:
      "We release new template updates frequently, either expanding existing templates or creating new ones.",
    icon: Book,
  },
];

const WhyUsSection: FC = () => {
  return (
    <div className=" px-6 py-20 text-center  md:px-12">
      {/* Section Heading */}
      <h2 className="mb-12 text-3xl font-extrabold text-black dark:text-white md:text-4xl">
        Why Our Templates & Components
      </h2>

      {/* Features Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center rounded-xl bg-[#f5f3eb] p-8 text-center shadow-md transition-all duration-300 hover:shadow-lg dark:bg-zinc-800"
          >
            {/* Icon Container */}
            <div className="flex h-[64px] w-[64px] items-center justify-center rounded-full bg-black shadow-md">
              <feature.icon className="text-3xl text-[var(--brand-mid-yellow)]" />
            </div>

            {/* Title */}
            <h3 className="mt-4 text-lg font-bold text-black dark:text-white md:text-xl">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 md:text-base">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUsSection;
