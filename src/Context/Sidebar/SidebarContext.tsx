import { createContext, useContext } from "react";

interface SidebarContextProps {
  panelOpen: boolean;
  togglePanel: () => void;
  setPanelOpen: (state: boolean) => void;
}

export const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined,
);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context)
    throw new Error("useSidebar must be used within a SidebarProvider");
  return context;
};
