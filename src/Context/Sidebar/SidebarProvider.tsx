import { SidebarContext } from "@src/Context/Sidebar/SidebarContext";
import { ReactNode, useState } from "react";

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [panelOpen, setPanelOpen] = useState(
    () => localStorage.getItem("panelOpen") === "true",
  );

  const togglePanel = () =>
    setPanelOpen(prev => {
      localStorage.setItem("panelOpen", String(!prev));
      return !prev;
    });

  return (
    <SidebarContext.Provider value={{ panelOpen, togglePanel, setPanelOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};
