import { ButtonHTMLAttributes, ReactNode, FC, useState } from "react";

type CustomButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  icon?: ReactNode;
  className?: string;
};

const CTBasicButton: FC<CustomButtonProps> = ({
  label,
  onClick,
  icon,
  className,
  ...rest
}) => {
  const [isPressed, setIsPressed] = useState(false);

  // Handle button press (scale down) and release (scale up)
  const handlePressStart = () => setIsPressed(true);
  const handlePressEnd = () => setIsPressed(false);

  return (
    <button
      {...rest}
      onClick={onClick}
      onMouseDown={handlePressStart}
      onMouseUp={handlePressEnd}
      onMouseLeave={handlePressEnd}
      onTouchStart={handlePressStart} // For mobile
      onTouchEnd={handlePressEnd} // For mobile
      onTouchCancel={handlePressEnd} // For mobile
      className={`relative mx-auto flex max-h-[60px]  min-h-[56px] w-full
        items-center justify-center rounded-3xl
                   border border-zinc-200 bg-zinc-50 bg-size-200 bg-pos-0 px-4 py-2 text-sm font-semibold
                   text-zinc-800 shadow-ct-light transition
                  duration-[350ms] hover:bg-zinc-200
                  hover:bg-pos-100 
                  hover:text-black dark:border-zinc-700
                  dark:bg-zinc-800 dark:text-zinc-100 dark:shadow-ct-dark  
                  dark:hover:bg-zinc-900 dark:hover:text-white sm:w-auto
                  sm:max-w-none md:px-6 md:py-3 md:text-base 
                  ${className ? className : ""}
                  transform transition-all duration-200 ease-in-out 
                  ${isPressed ? "scale-90" : "scale-100"}`}
    >
      <span className="poppins flex items-center gap-2 whitespace-nowrap text-sm font-semibold md:text-base ">
        {icon}
        {label}
      </span>
    </button>
  );
};

export default CTBasicButton;
