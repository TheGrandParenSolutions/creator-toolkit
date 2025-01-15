import { Button, ButtonProps, Loader } from "@mantine/core";
import { FC, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface AnimatedButtonProps extends ButtonProps {
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
    loading,
  } = props;

  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const navigate = useNavigate();

  // Check for touch devices
  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0,
      );
    };
    checkTouchDevice();
    window.addEventListener("resize", checkTouchDevice);
    return () => window.removeEventListener("resize", checkTouchDevice);
  }, []);

  return (
    <Button
      {...props}
      disabled={loading}
      onMouseEnter={() => !isTouchDevice && setIsHovered(true)}
      onMouseLeave={() => !isTouchDevice && setIsHovered(false)}
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
        label: "w-full items-center justify-center font-semibold",
      }}
      style={{
        border: !loading
          ? !isHovered
            ? ""
            : "1px solid var(--brand-dark-orange)"
          : undefined,
        background: !loading
          ? !isHovered
            ? "var(--brand-bg-theme)"
            : "#fff"
          : undefined,
      }}
      className={`relative border-none flex items-center justify-center overflow-hidden border bg-white text-black transition-all duration-300 ${buttonStyles} ${
        loading &&
        "disabled:border-slate-200 disabled:bg-gray-400 disabled:text-slate-500 disabled:shadow-none"
      }`}
    >
      {loading ? (
        <Loader size={"sm"} color="black" />
      ) : (
        <>
          <span
            className={`absolute inline-block text-center text-black transition-all duration-300 ${
              isHovered
                ? "-translate-y-full opacity-0"
                : "translate-y-0 opacity-100"
            }`}
          >
            <span className="flex items-center justify-center gap-1 text-xs text-inherit md:text-base">
              {icon && !isHovered && icon}
              {label}
            </span>
          </span>

          {/* Hover Label */}
          <span
            className={`absolute text-center text-orange-500 transition-all duration-300 ${
              isHovered
                ? "translate-y-0 opacity-100"
                : "translate-y-full opacity-0"
            } ${hoverStyles}`}
          >
            {hoverLabel}
          </span>
        </>
      )}
    </Button>
  );
};
