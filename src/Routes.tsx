import { motion } from "motion/react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/home";
import Projects from "./pages/projects";
import NewProject from "./pages/projects/new";
import ProjectDetail from "./pages/projects/[projectId]";
import Profile from "./pages/profile";
import ProfileCreate from "./pages/profile/create";
import EditProfile from "./pages/profile/edit";
import { useEffect, useRef, useState } from "react";

type Phase = "idle" | "fadingOut" | "fadingIn";

export default function PageRoutes() {
    const location = useLocation();

    const [displayLocation, setDisplayLocation] = useState(location);

    const [phase, setPhase] = useState<Phase>("idle");

    const pendingRef = useRef(location);

    useEffect(() => {
        if (location.pathname === displayLocation.pathname) return;

        pendingRef.current = location;
        setPhase("fadingOut");
    }, [location, displayLocation.pathname]);

    return (
        <motion.div
            style={{ willChange: "opacity" }}
            animate={{ opacity: phase === "fadingOut" ? 0 : 1 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            onAnimationComplete={() => {
                if (phase === "fadingOut") {
                    setDisplayLocation(pendingRef.current);
                    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
                    setPhase("fadingIn");
                } else if (phase === "fadingIn") {
                    setPhase("idle");
                }
            }}
        >
            <Routes location={displayLocation}>
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
                        <Route path="edit" element={<EditProfile />} />
                    </Route>

                    <Route path="profiles/:userId" element={<Profile />} />
                </Route>
            </Routes>
        </motion.div>
    );
}
