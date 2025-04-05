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
      className={`relative mx-auto flex min-h-14 w-full
        items-center justify-center rounded-[2.5rem] 
                   border-2 border-zinc-50 bg-zinc-50 bg-size-200 bg-pos-0 px-6 py-4
                  text-sm font-semibold text-zinc-800 shadow-ct-light
                  transition duration-[350ms]
                  hover:bg-zinc-200 
                  hover:bg-pos-100 hover:text-black
                  dark:border-zinc-800 dark:bg-zinc-800 dark:text-zinc-100  
                  dark:shadow-ct-dark dark:hover:bg-zinc-900 dark:hover:text-white
                  sm:min-h-[50px] sm:w-auto sm:max-w-none md:text-base lg:text-lg
                  ${className ? className : ""}
                  transform transition-all duration-200 ease-in-out 
                  ${isPressed ? "scale-90" : "scale-100"}`}
    >
      <span className="poppins flex items-center gap-2 whitespace-nowrap text-base font-semibold md:text-lg">
        {icon}
        {label}
      </span>
    </button>
  );
};

export default CTBasicButton;
