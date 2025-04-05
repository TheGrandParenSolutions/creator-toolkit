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
    hoverStyles = "",
    icon,
    loading,
    disabled,
  } = props;

  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false); // State for handling press animation
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  const navigate = useNavigate();

  const handlePressStart = () => setIsPressed(true);
  const handlePressEnd = () => setIsPressed(false);

  // Check for touch devices
  useEffect(() => {
    if (!isTouchDevice) setIsTouchDevice(true);
  }, []);

  return (
    <Button
      {...props}
      loading={false}
      disabled={loading || disabled}
      onMouseEnter={() => !isTouchDevice && setIsHovered(true)}
      onMouseDown={() => setIsPressed(true)} // Start press animation on mouse down
      onMouseUp={() => setIsPressed(false)} // End press animation on mouse up
      onMouseLeave={() => {
        if (!isTouchDevice) setIsHovered(false);
        setIsPressed(false);
      }} // Ensure the animation ends if the mouse leaves
      onTouchStart={handlePressStart} // For mobile
      onTouchEnd={handlePressEnd} // For mobile
      onTouchCancel={handlePressEnd} // For mobile
      onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        onClick?.(e); // Call custom click handler if provided
        if (to) {
          navigate(to); // Navigate to the specified route
        } else if (url) {
          window.open(url, "_blank"); // Open the URL in a new tab if provided
        }
      }}
      classNames={{
        inner: "w-full text-center transition-all duration-500",
        label:
          "w-full items-center justify-center font-semibold transition-all duration-500",
      }}
      size="xl"
      className={`relative flex transform  items-center justify-center overflow-hidden !rounded-[2.5rem]
        
         ${
           isPressed ? "!scale-90" : "scale-100"
         } border-none !bg-zinc-800 bg-main-gradient
                  bg-size-200
         bg-pos-0 px-6 py-4 text-black shadow-ct-dark transition-all duration-500 ease-in-out  
                          
         hover:bg-pos-100  ${""} ${
        loading &&
        "disabled:border-zinc-200 disabled:bg-zinc-300 disabled:text-zinc-500 disabled:shadow-none"
      } `} // Apply scale and shadow on press
    >
      {loading ? (
        <div className="absolute flex items-center justify-center transition-all duration-500">
          <CTLoader />
        </div>
      ) : (
        <>
          <span
            className={`absolute inline-block text-center text-black transition-all duration-500 ${
              isHovered
                ? "-translate-y-full opacity-0"
                : "translate-y-0 opacity-100"
            }`}
          >
            <span className="poppins flex items-center justify-center gap-2 text-base font-semibold text-zinc-900 md:text-lg">
              {icon && !isHovered && icon}
              {label}
            </span>
          </span>

          {/* Hover Label */}
          <span
            className={`poppins absolute bg-main-gradient bg-clip-text text-center text-sm font-semibold text-transparent transition-all duration-[350ms] md:text-base lg:text-lg ${
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
