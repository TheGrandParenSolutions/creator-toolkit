import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "@mantine/core/styles.css";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";
import { ScrollRestorationProvider } from "@src/shared/ScrollRestorationProvider/ScrollRestorationProvider.tsx";
import { HelmetProvider } from "react-helmet-async";
import Providers from "@src/Context/Providers.tsx";

// Define the Mantine theme for consistent styling
const theme = {
  components: {
    Tooltip: {
      styles: {
        tooltip: {
          fontSize: "12px",
          padding: "4px 8px",
          borderRadius: "20px",
          backgroundColor: "#27272a",
          color: "#fff",
        },
      },
    },
    Button: {
      classNames: ["transition-all duration-300"],
    },
  },
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* Helmet is for SEO and meta purposes */}
    <HelmetProvider>
      <MantineProvider theme={theme}>
        <BrowserRouter future={{ v7_startTransition: true }}>
          <ScrollRestorationProvider />
          <Providers>
            <App />
          </Providers>
        </BrowserRouter>
      </MantineProvider>
    </HelmetProvider>
  </StrictMode>,
);
