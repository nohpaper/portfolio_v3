import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import PortfolioView from "./components/PortfolioView.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/portfolio/:name" element={<PortfolioView />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
);
