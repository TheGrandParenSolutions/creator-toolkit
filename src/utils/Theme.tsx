import toast from "react-hot-toast";

export const checkAppThemeForUser = () => {
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;
  const storedTheme = localStorage.getItem("theme");

  if (storedTheme) {
    document.documentElement.classList.add(storedTheme);
  } else if (systemPrefersDark) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
};

export const showToast = (
  type: "loading" | "success" | "error",
  title: string,
  message: string,
) => {
  toast.dismiss("status-toast");
  switch (type) {
    case "loading":
      return toast.loading(
        <div className="flex items-center gap-2">
          <div>
            <strong className="block">{title}</strong>
            <span className="text-sm">{message}</span>
          </div>
        </div>,
        { id: "status-toast" },
      );
    case "success":
      return toast.success(
        <div className="flex items-center gap-2">
          <div>
            <strong className="block">{title}</strong>
            <span className="text-sm">{message}</span>
          </div>
        </div>,
        { id: "status-toast" },
      );
    case "error":
      return toast.error(
        <div className="flex items-center gap-2">
          <div>
            <strong className="block">{title}</strong>
            <span className="text-sm">{message}</span>
          </div>
        </div>,
        { id: "status-toast" },
      );
  }
};
