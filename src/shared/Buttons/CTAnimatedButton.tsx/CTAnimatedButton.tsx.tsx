import { Button, ButtonProps } from "@mantine/core";
import { FC, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";

interface AnimatedButtonProps extends ButtonProps  {
  label: string; // Default text
  hoverLabel: string; // Text to display on hover
  url?: string; // Optional URL for redirection
  to?: string; // Route path for navigation
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void; // Optional custom click handler
  buttonStyles?: string; // Additional Tailwind classes for button
  hoverStyles?: string; // Additional Tailwind classes for hover state
  icon?: ReactNode; // Optional icon component
}

export const CTAnimatedButton: FC<AnimatedButtonProps> = props => {
  const {
    label,
    hoverLabel,
    url,
    to,
    onClick,
    buttonStyles = "",
    hoverStyles = "",
    icon,
  } = props;

  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <Button
      {...props}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        onClick?.(e); // Call custom click handler if provided
        if (to) {
          navigate(to); // Navigate to the specified route
        } else if (url) {
          window.open(url, "_blank"); // Open the URL in a new tab if provided
        }
      }}
      classNames={{
        inner: "w-full text-center",
        label: "w-full items-center justify-center",
      }}
      style={{
        border: !isHovered ? "" : "1px solid var(--brand-dark-orange)",
        background: !isHovered ? "var(--brand-bg-theme)" : "#fff",
      }}
      className={`relative flex items-center justify-center overflow-hidden border bg-white text-black transition-all duration-300 ${buttonStyles}`}
    >
      {/* Icon (if provided) */}

      {/* Default Label */}
      <span
        className={`absolute inline-block text-center text-black transition-all duration-300 ${
          isHovered
            ? "-translate-y-full opacity-0"
            : "translate-y-0 opacity-100"
        }`}
      >
        <span className={`flex items-center justify-center gap-2 text-inherit`}>
          {icon && !isHovered && icon}
          {label}
        </span>
      </span>

      {/* Hover Label */}
      <span
        className={`absolute text-center text-orange-500 transition-all duration-300 ${
          isHovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        } ${hoverStyles}`}
      >
        {hoverLabel}
      </span>
    </Button>
  );
};
