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
      className="block rounded-[24px] h-full transition-all hover:shadow-lg"
    >
      {/* Card Container */}
      <div className="flex w-[260px] h-[240px] flex-col items-center justify-between rounded-[24px] border border-[--main-yellow] bg-[#fbf0c9] p-6 shadow-sm dark:border-2 dark:border-black dark:bg-zinc-800">
        {/* Image Wrapper (Now Matches the Original) */}
        <div className="flex w-full items-center justify-center rounded-[20px] bg-white p-4 shadow-sm">
          <img src={image} alt="" className="h-auto w-full rounded-lg" />
        </div>

        {/* Title & Description */}
        <h5 className="font-grifter mt-[16px] text-sm font-bold text-black text-center dark:text-white">
          {name}
        </h5>
        <p className="text-[14px] text-zinc-700 dark:text-zinc-300 flex">{count} people{" "}loved {" "}this</p>
      </div>
    </a>
  );
};

const Tools: FC = () => {
  const components = [
    {
      name: "Video downloader",
      count: 1000,
      image: "src/assets/appsnapshots/vidD.png",
      link: "/components?component=Features",
    },
    {
      name: "Youtube thumbnail test and preview",
      count: 2000,
      image: "src/assets/appsnapshots/vidD.png",
      link: "/components?component=Pricing",
    },
    {
      name: "Youtube thumbnail downloader",
      count: 300,
      image: "src/assets/appsnapshots/vidD.png",
      link: "/components?component=Hero",
    },
    {
      name: "Youtube to text",
      count: 2400,
      image: "src/assets/appsnapshots/vidD.png",
      link: "/components?component=Testimonial",
    },
    {
      name: "Remove background from image",
      count: 450,
      image: "src/assets/appsnapshots/vidD.png",
      link: "/components?component=Testimonial",
    },
    {
      name: "Content script generator",
      count: 247,
      image: "src/assets/appsnapshots/vidD.png",
      link: "/components?component=Testimonial",
    },
    {
      name: "Youtube title generator",
      count: 456,
      image: "src/assets/appsnapshots/vidD.png",
      link: "/components?component=Testimonial",
    },
  ];

  return (
    <div className="bg-transparent px-0 py-16 ">
      {/* Section Title */}
      <h2 className="font-grifter mb-8 text-4xl text-black dark:text-white">
        Tools we offer
      </h2>

      {/* Components Grid */}
      <div className="flex flex-wrap gap-6 ">
        {components.map((component, index) => (
          <ComponentCard key={index} {...component} />
        ))}
      </div>
    </div>
  );
};

export default Tools;
