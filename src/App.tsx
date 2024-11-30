import { checkAppThemeForUser } from "@src/utils/Theme";
import "./App.css";
import "./styles/additional.css";
import AppRouter from "@src/router/AppRouter";

checkAppThemeForUser();

function App() {
  return <AppRouter />;
}

export default App;
