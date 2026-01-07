import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles/theme.css";
import PageRoutes from "./Routes";

const root = createRoot(document.getElementById("root")!);
root.render(
    <StrictMode>
        <BrowserRouter basename="/">
            <PageRoutes />
        </BrowserRouter>
    </StrictMode>
);
