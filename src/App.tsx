import { checkAppThemeForUser } from "@src/utils/Theme";
import { HelmetProvider } from "react-helmet-async";
import "./App.css";
import "./styles/additional.css";
import AppRouter from "@src/Router/AppRouter";
import { Toaster } from "react-hot-toast";
import CTLoader from "@src/shared/Progress/CTLoader";

checkAppThemeForUser();

function App() {
  return (
    <HelmetProvider>
      {/* Global Toaster Configuration */}
      <Toaster
        reverseOrder={false}
        toastOptions={{
          style: {
            borderRadius: "12px",
            padding: "4px 8px",
            fontSize: "16px",
            fontWeight: "600",
            borderLeft: "5px solid var(--toast-border, #E5E7EB)", // Subtle left border
            background: "var(--toast-bg, #ffffff)", // Dynamic theme handling
            color: "var(--toast-text, #333)", // Dynamic text color
            display: "flex",
            alignItems: "center",
            gap: "10px",
          },
          success: {
            style: {
              background: "#ECFDF5", // Soft green
              color: "#065F46", // Deep green text
              borderLeft: "5px solid #10B981", // Green highlight
            },
            iconTheme: {
              primary: "#10B981",
              secondary: "#ECFDF5",
            },
          },
          error: {
            style: {
              background: "#FEF2F2", // Soft red
              color: "#7F1D1D", // Deep red text
              borderLeft: "5px solid #DC2626", // Red highlight
            },
            iconTheme: {
              primary: "#DC2626",
              secondary: "#FEF2F2",
            },
          },
          loading: {
            style: {
              background: "#F9FAFB",
              borderLeft: "4px solid #9CA3AF",
              boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.08)",
            },
            icon: <CTLoader />,
          },
        }}
      />

      <AppRouter />
    </HelmetProvider>
  );
}

export default App;
