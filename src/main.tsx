import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "@mantine/core/styles.css";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";
import { ScrollRestorationProvider } from "@src/shared/ScrollRestorationProvider/ScrollRestorationProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider
      theme={{
        components: {
          Tooltip: {
            styles: {
              tooltip: {
                fontSize: "14px", // Smaller text size
                padding: "4px 8px", // Reduced padding
                borderRadius: "4px", // Rounded corners
                backgroundColor: "#333", // Darker background
                color: "#fff", // White text
              },
            },
          },
          Button: {
            classNames: ["transition-all duration-300"],
          },
        },
      }}
    >
      <BrowserRouter>
        <ScrollRestorationProvider />
        <App />
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>,
);
