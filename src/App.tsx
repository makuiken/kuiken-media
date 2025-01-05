import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import FontOptimizer from "./components/FontOptimizer";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <FontOptimizer />
        <Routes>
          <Route
            path="/"
            element={<Index />}
          />
          <Route
            path="/privacy"
            element={<Privacy />}
          />
          <Route
            path="/terms"
            element={<Terms />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
