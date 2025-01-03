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
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center rounded-full border-2 border-gray-800 px-6 py-2 text-sm font-semibold transition duration-75 hover:bg-slate-800 hover:text-[--brand-dark-orange] hover:shadow-inner hover:shadow-slate-400 dark:border-gray-200 dark:text-white dark:hover:bg-slate-50
                            dark:hover:text-[--brand-dark-orange] dark:hover:shadow-inner dark:hover:shadow-slate-600"
      {...rest}
    >
      <span className="flex items-center gap-2">
        {icon}
        {label}
      </span>
    </button>
  );
};

export default CTBasicButton;
