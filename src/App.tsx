import { ThemeProvider } from "@mui/material";
import "./App.css";
import { Header, Sidebar } from "./components";
import { customTheme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Header />
      <Sidebar />
    </ThemeProvider>
  );
}

export default App;
