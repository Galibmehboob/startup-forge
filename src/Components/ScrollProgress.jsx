"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div
            style={{
                scaleX: scrollYProgress,
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                height: 4,
                transformOrigin: "0%",
                backgroundColor: "#3b82f6",
                zIndex: 9999,
            }}
        />
    );
}