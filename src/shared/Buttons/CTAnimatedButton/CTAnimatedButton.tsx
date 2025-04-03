import { Button, ButtonProps } from "@mantine/core";
import CTLoader from "@src/shared/Progress/CTLoader";
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
    disabled,
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
      loading={false}
      disabled={loading || disabled}
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
            : ""
          : undefined,
        background: !loading
          ? !isHovered
            ? "var(--brand-bg-theme)"
            : "#e4e4e7"
          : undefined,
      }}
      className={`relative flex !rounded-[2.5rem]
         shadow-[inset_3px_3px_5px_rgba(0,0,0,0.25),inset_-3px_-3px_5px_rgba(255,255,255,0.1)]
        min-w-28 md:min-w-44 min-h-7 md:min-h-12 items-center justify-center overflow-hidden border-none !bg-zinc-800 text-black transition-all duration-[350ms] ${buttonStyles} ${
        loading &&
        "disabled:border-zinc-200 disabled:bg-zinc-300 disabled:text-zinc-500 disabled:shadow-none"
      }`}
    >
      {loading ? (
        <div className="absolute flex items-center justify-center">
          <CTLoader />
        </div>
      ) : (
        <>
          <span
            className={`absolute inline-block text-center text-black transition-all duration-[350ms] ${
              isHovered
                ? "-translate-y-full opacity-0"
                : "translate-y-0 opacity-100"
            }`}
          >
            <span className="flex items-center justify-center gap-1 text-base font-semibold poppins text-zinc-900 md:text-lg">
              {icon && !isHovered && icon}
              {label}
            </span>
          </span>

          {/* Hover Label */}
          <span
            className={`absolute text-center text-sm md:text-base lg:text-lg poppins bg-main-gradient bg-clip-text text-transparent font-semibold transition-all duration-[350ms] ${
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
