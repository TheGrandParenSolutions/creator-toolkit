import { FC } from "react";

interface ComponentCardProps {
  name: string;
  count: number;
  image: string;
  link: string;
}

const ComponentCard: FC<ComponentCardProps> = ({ name, count, image, link }) => {
  return (
    <a
      href={link}
      className="block transition-all hover:shadow-lg rounded-2xl"
    >
      {/* Card Container */}
      <div className="flex flex-col items-center justify-between h-full w-full max-w-[260px] rounded-2xl border border-[--main-yellow] bg-[#fbf0c9] p-6 shadow-sm dark:border-2 dark:border-black dark:bg-zinc-800">
        
        {/* Image Wrapper */}
        <div className="flex w-full items-center justify-center rounded-xl bg-white p-4 shadow-sm">
          <img src={image} alt={name} className="h-auto w-full rounded-lg object-cover" />
        </div>

        {/* Title & Description */}
        <h5 className="font-grifter mt-4 text-base font-bold text-black text-center dark:text-white">
          {name}
        </h5>
        <p className="text-sm text-zinc-700 dark:text-zinc-300">
          {count.toLocaleString()} people loved this
        </p>
      </div>
    </a>
  );
};

const Tools: FC = () => {
  const components = [
    { name: "Video downloader", count: 1000, image: "assets/appsnapshots/vidD.png", link: "/components?component=Features" },
    { name: "Youtube thumbnail test and preview", count: 2000, image: "assets/appsnapshots/vidD.png", link: "/components?component=Pricing" },
    { name: "Youtube thumbnail downloader", count: 300, image: "assets/appsnapshots/vidD.png", link: "/components?component=Hero" },
    { name: "Youtube to text", count: 2400, image: "assets/appsnapshots/vidD.png", link: "/components?component=Testimonial" },
    { name: "Remove background from image", count: 450, image: "assets/appsnapshots/vidD.png", link: "/components?component=Testimonial" },
    { name: "Content script generator", count: 247, image: "assets/appsnapshots/vidD.png", link: "/components?component=Testimonial" },
    { name: "Youtube title generator", count: 456, image: "assets/appsnapshots/vidD.png", link: "/components?component=Testimonial" },
  ];

  return (
    <div className="bg-transparent px-4 py-16">
      {/* Section Title */}
      <h2 className="font-grifter mb-8 text-center text-3xl sm:text-4xl text-black dark:text-white">
        Tools We Offer
      </h2>

      {/* Responsive Grid for Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center">
        {components.map((component, index) => (
          <ComponentCard key={index} {...component} />
        ))}
      </div>
    </div>
  );
};

export default Tools;
