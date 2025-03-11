import { ThemeProvider } from "@mui/material";
import "./App.css";
import { customTheme } from "./styles/theme";
import { LegislationPage } from "./pages";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <LegislationPage />
    </ThemeProvider>
  );
}

export default App;
