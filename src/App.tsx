import { ThemeProvider } from "@mui/material";
import "./App.css";
import { customTheme } from "./styles/theme";
import { LegislationPage } from "./pages";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <QueryClientProvider client={queryClient}>
        <LegislationPage />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
