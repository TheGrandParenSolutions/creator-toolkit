import { smoothScrollToTop } from "@src/utils/AnimationUtils";
import { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollRestorationProvider: FC = () => {
  const location = useLocation();

  useEffect(() => {
    smoothScrollToTop(600);
  }, [location]);

  return null;
};
