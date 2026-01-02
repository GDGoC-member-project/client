import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/theme.css";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./Layout";
import Home from "./pages/home";
import ProjectDetail from "./pages/projects/[projectId]";
import Projects from "./pages/projects";
import Profile from "./pages/profile";
import ProfileCreate from "./pages/profile/create";
import ProfileEdit from "./pages/profile/edit";
import { enableMocking } from "./api/mock/startup";
import NewProject from "./pages/projects/new";

enableMocking().then(() => {
    const root = createRoot(document.getElementById("root")!);
    root.render(
        <StrictMode>
            <BrowserRouter basename="/">
                <ScrollToTop />
                <Routes>
                    <Route element={<Layout />}>
                        <Route index element={<Home />} />

                        <Route path="projects">
                            <Route index element={<Projects />} />
                            <Route path="new" element={<NewProject />} />
                            <Route path=":projectId" element={<ProjectDetail />} />
                        </Route>

                        <Route path="profile">
                            <Route index element={<Profile />} />
                            <Route path="create" element={<ProfileCreate />} />
                            <Route path="edit" element={<ProfileEdit />} />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </StrictMode>
    );
});
