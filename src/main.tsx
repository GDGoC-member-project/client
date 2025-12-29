import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/theme.css";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./Layout";
import Home from "./pages/home";
import ProjectDetail from "./pages/projects/[projectId]";
import Projects from "./pages/projects";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter basename="/">
            <ScrollToTop />
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Home />} />

                    <Route path="projects">
                        <Route index element={<Projects />} />
                        <Route path=":projectId" element={<ProjectDetail />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
