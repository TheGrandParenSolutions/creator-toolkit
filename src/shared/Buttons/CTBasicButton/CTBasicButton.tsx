import { ThemeContext } from "@src/Context/Theme/ThemeContext";
import {
  ButtonHTMLAttributes,
  ReactNode,
  FC,
  useState,
  useContext,
} from "react";

type CustomButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  icon?: ReactNode;
  className?: string;
  enableBorderAnimation?: boolean;
  rightIcon?: ReactNode;
  occupyFullWidth?: boolean;
};

const CTBasicButton: FC<CustomButtonProps> = ({
  label,
  onClick,
  icon,
  className,
  enableBorderAnimation,
  rightIcon,
  occupyFullWidth,
  ...rest
}) => {
  const { darkMode } = useContext(ThemeContext);
  const [isPressed, setIsPressed] = useState(false);

  // Handle button press (scale down) and release (scale up)
  const handlePressStart = () => setIsPressed(true);
  const handlePressEnd = () => setIsPressed(false);

  const color = !darkMode ? "#27272a" : "#ffff";
  const animationDuration = "6s";
  const transparency = 25;
  return (
    <div
      className={`relative inline-block max-h-fit overflow-hidden rounded-xl py-[1px] ${
        occupyFullWidth ? "w-full" : ""
      }`}
    >
      {enableBorderAnimation ? (
        <>
          <div
            className="absolute bottom-[-10px] right-[-250%] z-0 h-[50%] w-[300%] animate-star-movement-bottom rounded-full opacity-70"
            style={{
              background: `radial-gradient(circle, ${color}, transparent ${transparency}%)`,
              animationDuration,
            }}
          ></div>
          <div
            className="absolute left-[-250%] top-[-10px] z-0 h-[50%] w-[300%] animate-star-movement-top rounded-full opacity-70"
            style={{
              background: `radial-gradient(circle, ${color}, transparent ${transparency}%)`,
              animationDuration,
            }}
          ></div>
        </>
      ) : (
        <></>
      )}

      <button
        {...rest}
        onClick={onClick}
        onMouseDown={handlePressStart}
        onMouseUp={handlePressEnd}
        onMouseLeave={handlePressEnd}
        onTouchStart={handlePressStart} // For mobile
        onTouchEnd={handlePressEnd} // For mobile
        onTouchCancel={handlePressEnd} // For mobile
        className={`relative mx-auto flex w-full
        items-center justify-center rounded-xl
                   border border-zinc-200 bg-zinc-100 bg-size-200 bg-pos-0 px-4 py-2 text-sm font-semibold
                   text-black transition
                  duration-[350ms] hover:bg-zinc-200
                  hover:bg-pos-100 
                  hover:text-black dark:border-zinc-700
                  dark:bg-zinc-800 dark:text-white 
                  dark:hover:bg-[#36363a] dark:hover:text-white sm:w-auto
                  sm:max-w-none  md:text-base 
                  ${className ? className : ""}
                  transform transition-all duration-200 ease-in-out 
                  ${isPressed ? "scale-90" : "scale-100"}
                  ${occupyFullWidth ? "!w-full" : ""}

                  `}
      >
        <span className="font-primary flex items-center gap-2 whitespace-nowrap text-xs font-medium md:text-base">
          {icon ? icon : <></>}
          {label}
          {rightIcon ? rightIcon : <></>}
        </span>
      </button>
    </div>
  );
};

export default CTBasicButton;
