import  { useState, useRef, useEffect } from "react";
import {
  BrandYoutubeSolid,
  BrandInstagramSolid,
  BrandXSolid,
} from "@mynaui/icons-react";

const SupportedServices = () => {
  const [expanded, setExpanded] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const services = [
    {
      name: "YouTube",
      icon: <BrandYoutubeSolid size={20} className="text-[#FF0000]" />, // YouTube red
    },
    {
      name: "Instagram",
      icon: <BrandInstagramSolid size={20} className="text-[#E4405F]" />, // Instagram pink
    },
    {
      name: "(formely twitter)",
      icon: <BrandXSolid size={20} className="text-[#000]" />, // Twitter blue
    },
  ];

  // Close the dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setExpanded(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full max-w-sm mx-auto flex justify-center" ref={dropdownRef}>
      {/* Toggle Button */}
      <button
        className="flex items-center gap-2 px-4 justify-center py-2 text-sm font-medium !bg-transparent text-gray-800 bg-slate-50 dark:bg-gray-800  border-none rounded-full shadow-xs hover:bg-gray-200 focus:outline-none focus:ring-none transition-all"
        onClick={() => setExpanded(!expanded)}
      >
        <span
          className={`text-xl font-bold dark:text-slate-300 p-2 bg-gray-100 dark:bg-slate-800 rounded-full h-6 w-6 flex justify-center items-center text-gray-800 transform transition-transform duration-300 ${
            expanded ? "rotate-45" : "rotate-0"
          }`}
        >
          +
        </span>
        <span className="font-medium text-gray-700 dark:text-slate-300">supported services</span>
      </button>

      {/* Dropdown Modal */}
      <div
        className={`absolute top-full z-10 mt-2 w-full bg-slate-50 border-none border-slate-200 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-500 ${
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
                className="flex items-center dark:bg-slate-600 gap-2 px-3 py-1 text-sm font-medium text-gray-800 dark:text-white bg-slate-200 rounded-lg shadow-sm  transition-all"
              >
                {service.icon}
                <span>{service.name}</span>
              </div>
            ))}
          </div>
          {/* Disclaimer */}
          <p className="mt-4 text-sm text-gray-400">
            Creator Toolkit is not affiliated with any of the services listed above.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SupportedServices;
