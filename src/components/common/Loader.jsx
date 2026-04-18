import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ onComplete, onStartExiting }) => {
    // Signal the app to start becoming visible shortly before we finish
    useEffect(() => {
        const revealTimer = setTimeout(() => {
            if (onStartExiting) onStartExiting();
        }, 700);

        const doneTimer = setTimeout(() => {
            if (onComplete) onComplete();
        }, 1100);

        return () => {
            clearTimeout(revealTimer);
            clearTimeout(doneTimer);
        };
    }, [onComplete, onStartExiting]);

    return (
        <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 9999,
                background: '#0f172a',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '28px',
            }}
        >
            {/* Name */}
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                style={{
                    fontFamily: 'var(--font-heading, sans-serif)',
                    fontSize: '2rem',
                    fontWeight: 800,
                    color: 'var(--primary-color, #8b5cf6)',
                    letterSpacing: '-0.03em',
                }}
            >
                Aman Kumar
            </motion.div>

            {/* Spinner ring */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
                style={{
                    width: 40,
                    height: 40,
                    border: '3px solid rgba(139, 92, 246, 0.2)',
                    borderTopColor: 'var(--primary-color, #8b5cf6)',
                    borderRadius: '50%',
                }}
            />

            {/* Progress bar at bottom */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.0, ease: 'easeInOut' }}
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    height: '3px',
                    width: '100%',
                    background: 'linear-gradient(90deg, var(--primary-color, #8b5cf6), var(--secondary-color, #d946ef))',
                    transformOrigin: 'left',
                }}
            />
        </motion.div>
    );
};

export default Loader;
