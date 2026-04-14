import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const ROUTES = [
    '/',
    '/about',
    '/skills',
    '/projects',
    '/certificates',
    '/contact'
];

const PageNavigator = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Ensure we handle trailing slashes dynamically to avoid breakages
    const currentPath = location.pathname.endsWith('/') && location.pathname.length > 1
        ? location.pathname.slice(0, -1)
        : location.pathname;

    const currentIndex = ROUTES.indexOf(currentPath);

    if (currentIndex === -1) return null;

    const prevRoute = currentIndex > 0 ? ROUTES[currentIndex - 1] : null;
    const nextRoute = currentIndex < ROUTES.length - 1 ? ROUTES[currentIndex + 1] : null;

    const btnClasses = "fixed top-1/2 -translate-y-1/2 z-[9999] w-14 h-14 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-black/30 border border-white/5 text-white/40 hover:text-[var(--primary-color)] hover:bg-[var(--primary-color)]/5 hover:border-[var(--primary-color)]/40 hover:shadow-[0_0_25px_rgba(var(--primary-rgb),0.3)] transition-all duration-300 cursor-pointer backdrop-blur-2xl shadow-[0_0_30px_rgba(0,0,0,0.8)] hidden sm:flex";

    return (
        <AnimatePresence>
            {prevRoute && (
                <motion.button
                    key="prev-btn"
                    onClick={() => navigate(prevRoute)}
                    className={`${btnClasses} left-4 md:left-8`}
                    whileHover={{ scale: 1.05, x: -5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    aria-label="Previous Page"
                >
                    <FiChevronLeft size={28} strokeWidth={1.5} className="md:w-10 md:h-10" />
                </motion.button>
            )}

            {nextRoute && (
                <motion.button
                    key="next-btn"
                    onClick={() => navigate(nextRoute)}
                    className={`${btnClasses} right-4 md:right-8`}
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    aria-label="Next Page"
                >
                    <FiChevronRight size={28} strokeWidth={1.5} className="md:w-10 md:h-10" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default PageNavigator;
