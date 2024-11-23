import MainSection from "@src/components/MainSection/MainSection";
import "./App.css";
import "./styles/additional.css";
import AppRouter from "@src/Router/AppRouter";

function App() {
  return (
    <MainSection>
      <AppRouter />
    </MainSection>
  );
}

export default App;
