import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/theme.css";
import Layout from "./Layout";
import Home from "./pages/home";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter basename="/">
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
