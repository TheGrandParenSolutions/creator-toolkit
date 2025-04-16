import React from "react";

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  disabled = false,
  speed = 5,
  className = "",
}) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`inline-block bg-clip-text ${
        disabled ? "" : "animate-shine"
      } ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(120deg, rgba(255,255,255,0) 35%, rgba(255,255,255,0.9) 50%, rgba(255,255,255,0) 65%)",
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        animationDuration: animationDuration,
      }}
    >
      {text}
    </div>
  );
};

export default ShinyText;
