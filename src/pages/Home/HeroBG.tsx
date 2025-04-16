import { ThemeContext } from "@src/Context/Theme/ThemeContext";
import Particles from "@src/shared/Animated/AnimatedComponents";
import { memo, useContext } from "react";

export const HeroBackground = memo(() => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className="absolute inset-0 -z-10">
      <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <Particles
          particleColors={darkMode ? ["#fff", "#ffd580", "rgba(200, 100, 255)"] : ["#000000", "#ffd580", "#171717"]} // yellow, purple, white
          particleCount={200}
          particleSpread={8}
          speed={0.2}
          particleBaseSize={50}
          disableRotation
        />
      </div>
    </div>
  );
});
