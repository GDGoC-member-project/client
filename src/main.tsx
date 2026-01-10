import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "@/api/auth/AuthProvider";
import PageRoutes from "./Routes";
import "./styles/theme.css";

const root = createRoot(document.getElementById("root")!);
root.render(
    <StrictMode>
        <AuthProvider>
            <BrowserRouter basename="/">
                <PageRoutes />
            </BrowserRouter>
        </AuthProvider>
    </StrictMode>
);
