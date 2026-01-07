import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles/theme.css";
import { enableMocking } from "./api/mock/startup";
import PageRoutes from "./Routes";

enableMocking().then(() => {
    const root = createRoot(document.getElementById("root")!);
    root.render(
        <StrictMode>
            <BrowserRouter basename="/">
                <PageRoutes />
            </BrowserRouter>
        </StrictMode>
    );
});
