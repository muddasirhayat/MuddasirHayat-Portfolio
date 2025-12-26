import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorFollower = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Detect if device is mobile/touch
        const checkMobile = () => {
            const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
                || ('ontouchstart' in window)
                || (navigator.maxTouchPoints > 0);
            setIsMobile(mobile);
        };

        checkMobile();

        // Don't add event listeners on mobile
        if (isMobile) return;

        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        }

        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            scale: 1,
            opacity: 0.5
        },
        hover: {
            x: mousePosition.x - 24,
            y: mousePosition.y - 24,
            scale: 1.5,
            opacity: 0.8,
            mixBlendMode: "screen"
        }
    };

    // Don't render on mobile devices
    if (isMobile) return null;

    return (
        <motion.div
            className={`fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[100] blur-xl transition-colors duration-300 ${isHovering ? 'bg-[var(--accent-color)] opacity-80' : 'bg-blue-400 opacity-50'}`}
            variants={variants}
            animate={isHovering ? "hover" : "default"}
            transition={{
                type: "spring",
                damping: 25,
                stiffness: 150,
                mass: 0.5
            }}
        />
    );
};

export default CursorFollower;
