import { checkAppThemeForUser } from "@src/utils/Theme";
import { HelmetProvider } from "react-helmet-async";
import "./App.css";
import "./styles/additional.css";
import AppRouter from "@src/Router/AppRouter";

checkAppThemeForUser();

function App() {
  return ( 
    <HelmetProvider>
      <AppRouter />
    </HelmetProvider>
  );
}

export default App;
