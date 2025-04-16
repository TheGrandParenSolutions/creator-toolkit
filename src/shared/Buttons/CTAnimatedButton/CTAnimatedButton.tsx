import CTLoader from "@src/shared/Progress/CTLoader";
import { DetailedHTMLProps, FC, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface AnimatedButtonProps
  extends DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  label: string; // Default text
  hoverLabel?: string; // Text to display on hover
  url?: string; // Optional URL for redirection
  to?: string; // Route path for navigation
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void; // Optional custom click handler
  buttonStyles?: string; // Additional Tailwind classes for button
  hoverStyles?: string; // Additional Tailwind classes for hover state
  icon?: ReactNode; // Optional icon component
  loading?: boolean;
  occupyFullWidth?: boolean;
}

export const CTAnimatedButton: FC<AnimatedButtonProps> = props => {
  const { label, url, to, onClick, icon, loading, disabled, occupyFullWidth } =
    props;

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
    <button
      {...props}
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
      className={`inline-flex w-auto transform items-center justify-center rounded-xl border-none
         bg-size-200
         bg-pos-0 hover:bg-pos-100
         ${isPressed ? "!scale-90" : "scale-100"}  !bg-zinc-900 bg-main-gradient
                  bg-size-200
         bg-pos-0  px-4 py-2  text-black  transition-all duration-500 ease-in-out hover:bg-pos-100 
                          
         ${
           loading &&
           "disabled:border-zinc-200 disabled:bg-zinc-300 disabled:text-zinc-500 disabled:shadow-none"
         } 
           ${occupyFullWidth ? "!w-full" : ""}
           
         `} // Apply scale and shadow on press
    >
      {loading ? (
        <div className="flex items-center justify-center transition-all duration-500">
          <CTLoader />
        </div>
      ) : (
        <>
          <span
            className={` text-center text-black transition-all duration-500`}
          >
            <span className="font-primary flex items-center justify-center gap-2 text-sm font-medium text-zinc-900 md:text-base">
              {icon && !isHovered && icon}
              {label}
            </span>
          </span>
        </>
      )}
    </button>
  );
};
