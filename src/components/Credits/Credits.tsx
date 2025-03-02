import { Center, RingProgress, Tooltip } from "@mantine/core";
import { Plus } from "@mynaui/icons-react";
import "./credits.css";
import { Link } from "react-router-dom";
import { WalletIcon } from "@src/shared/Icons/IconLib";

const bubble_count = 12; // Reduced bubbles for less visual clutter

interface CreditsProps {
  credits: number;
  totalCredits: number;
}

const Credits = ({ credits, totalCredits }: CreditsProps) => {
  const percentage = (credits / totalCredits) * 100;
  let progressColor = "#14b8a6";

  if (percentage <= 10) progressColor = "#e72f3c";
  else if (percentage <= 30) progressColor = "#f79046";
  else if (percentage <= 60) progressColor = "#facc15";
  else progressColor = "#14b8a6";

  const getTooltipText = () => {
    if (credits === 0) return "You're out of credits! Unlock more to keep going.";
    if (percentage <= 10) return "Low credits! Consider boosting.";
    if (percentage <= 30) return "Running low. Top-up soon!";
    return `${credits} credits left.`;
  };

  const getButtonText = () => (percentage <= 10 ? "Boost" : percentage <= 30 ? "Top-up" : "Add");

  return (
    <Tooltip label={getTooltipText()} position="bottom">
      <div className="futuristic small">
        <span className="fold" />
        <div className="bubbles_wrapper">
          {Array(bubble_count)
            .fill(1)
            .map((_, index) => (
              <i key={index + "__bubble-node"} className="bubble" />
            ))}
        </div>
        <div className="inner">
          <div className="relative flex items-center gap-1 overflow-hidden">
            <RingProgress
              roundCaps
              rootColor="#f4f4f5"
              size={34} // Smaller size
              thickness={3} // Thinner ring
              sections={[{ value: percentage, color: progressColor }]}
              transitionDuration={500}
              label={
                <Center>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 shadow-[inset_0px_0px_4px_rgba(255,255,255,0.2)] backdrop-blur-xl">
                    <WalletIcon className="h-4 w-4 text-white opacity-90" />
                  </div>
                </Center>
              }
            />

            <div className="flex flex-col">
              <span className="text-xs font-semibold text-white">
                {credits} / {totalCredits} Credits
              </span>
              <span className="text-[9px] text-gray-300">
                {percentage <= 10 ? "Low balance!" : "Powering your experience"}
              </span>
            </div>

            <Link
              to={"/pricing"}
              className={`ml-auto flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium text-white transition-all duration-300 ${
                percentage <= 10 ? "bg-red-500 hover:bg-red-600" : "bg-white/20 hover:bg-white/30"
              }`}
            >
              <Plus className="h-3 w-3 text-white opacity-80" />
              {getButtonText()}
            </Link>
          </div>
        </div>
      </div>
    </Tooltip>
  );
};

export default Credits;
