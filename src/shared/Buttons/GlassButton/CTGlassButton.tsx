import React from "react";

type CTGlassButtonProps = {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  label: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
};

const CTGlassButton: React.FC<CTGlassButtonProps> = ({
  iconLeft,
  iconRight,
  label,
  onClick,
  className = "",
  disabled = false,
}) => {
  const baseStyles = `
    inline-flex items-center justify-center gap-2
    px-4 py-2 rounded-xl text-sm md:text-base font-medium
    backdrop-blur-md transition-colors duration-200
    whitespace-nowrap overflow-hidden text-ellipsis
    max-w-full disabled:opacity-50 disabled:cursor-not-allowed
    shadow-sm
  `;

  const themeStyles = `
    bg-white/20 text-black hover:bg-white/30
    dark:bg-zinc-800/40 dark:text-white dark:hover:bg-zinc-700/50
    border border-black/10 dark:border-white/10
  `;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${themeStyles} ${className}`}
    >
      {iconLeft && <span className="text-lg flex-shrink-0">{iconLeft}</span>}
      <span className="truncate">{label}</span>
      {iconRight && <span className="text-lg flex-shrink-0">{iconRight}</span>}
    </button>
  );
};

export default CTGlassButton;
