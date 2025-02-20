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
                   items-center justify-center rounded-[2.5rem] border-2 border-zinc-50 bg-zinc-50 px-6
                  py-2 text-sm font-semibold text-zinc-800
                  
                  shadow-[inset_3px_3px_5px_rgba(0,0,0,0.15),inset_-3px_-3px_5px_rgba(255,255,255,0.8)]

                   transition duration-[350ms]
                  hover:bg-zinc-200 hover:text-black
                  
                  dark:border-zinc-800 dark:bg-zinc-800 dark:text-zinc-100  
                  dark:shadow-[inset_4px_4px_6px_rgba(0,0,0,0.4),inset_-4px_-4px_6px_rgba(255,255,255,0.05)]
                  dark:hover:bg-zinc-900 dark:hover:text-white
                  
                  sm:min-h-[50px] sm:w-auto sm:max-w-none md:text-base lg:text-lg ${
                    className ? className : ""
                  }`}
    >
      <span className="flex items-center gap-2 whitespace-nowrap text-sm md:text-base">
        {icon}
        {label}
      </span>
    </button>
  );
};

export default CTBasicButton;
