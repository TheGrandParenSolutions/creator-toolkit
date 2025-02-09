import { FC } from "react";
import { motion } from "framer-motion";
import { Text } from "@mantine/core";
import { BrandSpotify } from "@mynaui/icons-react";

const brands = [
  { name: "LettrLabs", logo: BrandSpotify },
  { name: "Uproar Automation", logo: BrandSpotify },
  { name: "Solid", logo: BrandSpotify },
  { name: "Athennian", logo: BrandSpotify },
  { name: "SIRC", logo: BrandSpotify },
];

const TrustedBy: FC = () => {
  return (
    <div className="relative w-full overflow-hidden rounded-[24px] bg-transparent py-6">
      {/* Animation Wrapper */}
      <div className="relative flex items-center justify-center overflow-hidden">
        <motion.div
          className="flex w-full gap-16"
          initial={{ x: "-20%" }}
          animate={{ x: "20%" }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror", // Swing back and forth without resetting
            duration: 6, // Speed of swinging motion
            ease: "easeInOut", // Smooth effect
          }}
        >
          {/* Logos moving in a swinging loop */}
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              className="flex flex-shrink-0 items-center justify-center gap-4"
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <brand.logo className="h-10 w-auto  dark:text-zinc-800 transition-opacity duration-300 hover:text-zinc-900 dark:hover:text-zinc-600" />
              <Text className="text-zinc-800 dark:text-zinc-900">{brand.name}</Text>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TrustedBy;
