import { ShuffleAltSolid, Undo } from "@mynaui/icons-react"; // Mynaui Icons
import DarkModeToggle from "@src/Utility/DarkModeToggle";
import { Button } from "@mantine/core";

// Define the button configuration
const buttonsConfig = [
  {
    id: "lightMode",
    label: "",
    icon: <DarkModeToggle />,
  },
  {
    id: "shuffle",
    label: "Shuffle",
    icon: <ShuffleAltSolid className="mr-2 h-5 w-5" />,
  },
  {
    id: "reset",
    label: "Reset",
    icon: <Undo className="mr-2 h-5 w-5" />,
  },
];

const PlayWithThumbnails = () => {
  const handleClick = (id: string) => {
    switch (id) {
      case "lightMode":
        console.log("Toggled Light/Dark Mode");
        break;
      case "shuffle":
        console.log("Shuffle triggered");
        break;
      case "reset":
        console.log("Reset triggered");
        break;
      default:
        console.error("Unknown action");
    }
  };

  return (
    <div className="space-y-4">
      {/* Dynamic Buttons Row */}
      <div className="flex flex-wrap items-start justify-start gap-4">
        {buttonsConfig.map(({ id, label, icon }) => (
          <Button
            key={id}
            onClick={() => handleClick(id)}
            className={
              "flex items-center rounded-full border border-[var(--main-yellow)] bg-[--brand-main-bg] text-gray-700 transition-all  hover:!bg-[var(--brand-mid-yellow)]  hover:!text-black dark:border-2 dark:border-black dark:bg-gray-800 dark:text-gray-300       "
            }
          >
            {icon}
            <h1 className="font-medium">{label}</h1>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default PlayWithThumbnails;
