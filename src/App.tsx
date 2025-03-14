import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router";
import { routes } from "./router/routes";
import { AuthContextProvider } from "./contexts/AuthContext/AuthContext.provider";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Routes>
            {routes.map((route) => (
              <Route key={route.path} {...route} index={route.index} />
            ))}
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
