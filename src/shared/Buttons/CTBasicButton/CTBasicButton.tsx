import { ButtonHTMLAttributes, ReactNode, FC } from "react";

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
  return (
    <button
      {...rest}
      onClick={onClick}
      className={`mx-auto flex min-h-14 w-full 
                   items-center justify-center rounded-[2.5rem] border-2 border-zinc-300 bg-zinc-100 px-6
                  
                  py-2 text-sm
                  font-semibold 
                  text-black
                  
                  shadow-[inset_4px_4px_6px_rgba(0,0,0,0.2),inset_-4px_-4px_6px_rgba(255,255,255,0.1)] transition duration-100
                  hover:bg-zinc-800 hover:text-[--brand-dark-orange]
                  
                  hover:shadow-[2px_2px_6px_rgba(0,0,0,0.2),-2px_-2px_6px_rgba(255,255,255,0.1)]
                  dark:border-zinc-600
                  
                  dark:bg-zinc-800 dark:text-white  
                  dark:shadow-[inset_4px_4px_6px_rgba(0,0,0,0.4),inset_-4px_-4px_6px_rgba(255,255,255,0.05)] dark:hover:bg-zinc-50

                  dark:hover:text-[--brand-dark-orange] dark:hover:shadow-[2px_2px_6px_rgba(0,0,0,0.5),-2px_-2px_6px_rgba(255,255,255,0.1)] sm:min-h-[50px] sm:w-auto sm:max-w-none
                  md:text-base lg:text-lg ${" "}
                  
                  ${className ? className : ""}`}
    >
      <span className="flex items-center gap-2 whitespace-nowrap text-sm md:text-base">
        {icon}
        {label}
      </span>
    </button>
  );
};

export default CTBasicButton;
