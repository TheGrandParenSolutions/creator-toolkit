import { FC } from "react";

interface ComponentCardProps {
  name: string;
  count: number;
  image: string;
  link: string;
}

const ComponentCard: FC<ComponentCardProps> = ({
  name,
  count,
  image,
  link,
}) => {
  return (
    <a
      href={link}
      className="block rounded-[24px] transition-all hover:shadow-lg"
    >
      {/* Card Container */}
      <div className="flex w-[260px]  flex-col items-center rounded-[24px] bg-[#fbf0c9] border border-[--main-yellow] dark:border-2 dark:border-black p-6 shadow-sm dark:bg-zinc-800">
        {/* Image Wrapper (Now Matches the Original) */}
        <div className="flex w-full items-center justify-center rounded-[20px] bg-white p-4 shadow-sm">
          <img src={image} alt="" className="h-auto w-full rounded-lg" />
        </div>

        {/* Title & Description */}
        <h5 className="font-grifter mt-[16px] text-[20px] font-bold text-black dark:text-white">
          {name}
        </h5>
        <p className="text-[14px] text-zinc-600">{count} Components</p>
      </div>
    </a>
  );
};

const Tools: FC = () => {
  const components = [
    {
      name: "Features",
      count: 45,
      image: "src/assets/appsnapshots/vidD.png",
      link: "/components?component=Features",
    },
    {
      name: "Pricing",
      count: 22,
      image: "src/assets/appsnapshots/vidD.png",
      link: "/components?component=Pricing",
    },
    {
      name: "Hero",
      count: 37,
      image: "src/assets/appsnapshots/vidD.png",
      link: "/components?component=Hero",
    },
    {
      name: "Testimonial",
      count: 29,
      image: "src/assets/appsnapshots/vidD.png",
      link: "/components?component=Testimonial",
    },
  ];

  return (
    <div className="bg-transparent px-0 py-16">
      {/* Section Title */}
      <h2 className="font-grifter mb-8 text-4xl text-black dark:text-white">
        Components
      </h2>

      {/* Components Grid */}
      <div className="flex flex-wrap gap-6">
        {components.map((component, index) => (
          <ComponentCard key={index} {...component} />
        ))}
      </div>
    </div>
  );
};

export default Tools;
