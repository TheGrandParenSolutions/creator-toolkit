import { YTLogo, InstagramLogo } from "@src/shared/Icons/Logos"; // Import the logos

const services = [
  { name: "YouTube", icon: <YTLogo className="h-5 w-5" />, bg: "bg-white" },
  {
    name: "Instagram",
    icon: <InstagramLogo className="h-5 w-5" />,
    bg: "bg-white",
  },
];

const SupportedServices = () => {
  return (
    <div className="mx-auto mt-2 flex flex-col items-center gap-2">
      {/* Title with Better Spacing */}
      <p className="text-center text-sm font-medium text-zinc-700 dark:text-gray-300">
        <span className="text-sm text-zinc-600 dark:text-zinc-300">
          Creator toolkit supports:
        </span>{" "}
      </p>

      {/* Icons Row with Improved Layout */}
      <div className="flex items-center gap-2 flex-wrap justify-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-50 dark:bg-zinc-800"
          >
            {service.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportedServices;
