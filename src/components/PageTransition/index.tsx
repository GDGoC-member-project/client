import { AnimatePresence, motion } from "motion/react";
import { Outlet, useLocation } from "react-router-dom";

export default function PageTransition() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={location.pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                style={{ willChange: "opacity" }}
            >
                <Outlet />
            </motion.div>
        </AnimatePresence>
    );
}
