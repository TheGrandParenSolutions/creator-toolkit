import { useState, useRef, useEffect } from "react";

import { InstagramLogo, YTLogo } from "@src/shared/Icons/Logos";

const SupportedServices = () => {
  const [expanded, setExpanded] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const services = [
    {
      name: "YouTube",
      icon: <YTLogo />, // YouTube red
    },
    {
      name: "Instagram",
      icon: <InstagramLogo />, // Instagram pink
    },
    // {
    //   name: "(formely twitter)",
    //   icon: <BrandXSolid size={20} className="text-[#000]" />, // Twitter blue
    // },
  ];

  // Close the dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setExpanded(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="relative mx-auto flex w-full max-w-sm justify-center"
      ref={dropdownRef}
      onMouseEnter={() => {
        setExpanded(true);
      }}
      onMouseLeave={() => {
        setExpanded(false);
      }}
    >
      {/* Toggle Button */}
      <button
        className="shadow-xs focus:ring-none flex items-center justify-center gap-2 rounded-full border-none !bg-transparent bg-slate-50 px-4 py-2  text-sm font-medium text-gray-800 transition-all hover:bg-gray-200 focus:outline-none dark:bg-gray-800"
        onClick={() => setExpanded(!expanded)}
      >
        <span
          className={`flex h-6 w-6 transform items-center justify-center rounded-full bg-gray-100 p-2 text-xl font-bold text-gray-800 transition-transform duration-300 dark:bg-slate-800 dark:text-slate-300 ${
            expanded ? "rotate-45" : "rotate-0"
          }`}
        >
          +
        </span>
        <span className="font-medium text-gray-700 dark:text-slate-300">
          supported services
        </span>
      </button>

      {/* Dropdown Modal */}
      <div
        className={`absolute top-full z-10 mt-2 w-full overflow-hidden rounded-lg border-none border-slate-200 bg-slate-50 shadow-lg transition-all duration-500 dark:bg-gray-800 ${
          expanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ transitionProperty: "max-height, opacity" }}
      >
        <div className="p-4">
          {/* Service List */}
          <div className="flex flex-wrap gap-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-2 rounded-lg bg-slate-200 px-3 py-1 text-sm font-medium text-gray-800 shadow-sm transition-all dark:bg-slate-600  dark:text-white"
              >
                {service.icon}
                <span>{service.name}</span>
              </div>
            ))}
          </div>
          {/* Disclaimer */}
          <p className="mt-4 text-sm text-gray-400">
            Creator Toolkit is not affiliated with any of the services listed
            above.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SupportedServices;
