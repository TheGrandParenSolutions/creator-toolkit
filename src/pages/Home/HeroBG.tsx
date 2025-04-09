import Particles from "@src/shared/Animated/AnimatedComponents";
import { memo } from "react";

export const HeroBackground = memo(() => {
  return (
    <div className="absolute inset-0 -z-10 antialiased will-change-transform">
      <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <Particles
          particleColors={["#fff", "#f79046", "#ffd580", "rgba(0, 255, 255)"]} // yellow, purple, white
          particleCount={200}
          particleSpread={10}
          speed={0.15}
          particleBaseSize={50}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
    </div>
  );
});
