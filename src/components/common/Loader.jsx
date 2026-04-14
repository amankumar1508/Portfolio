import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GLITCH_CHARS = '!@#$%^&*_+-={}|;<>?/~01234567890ABCDEF';

const Loader = ({ onComplete, onStartExiting }) => {
    const [counter, setCounter] = useState(0);
    const [phase, setPhase] = useState('counting');
    // phases: 'counting' -> 'flash' -> 'split' -> 'done'
    const [glitchText, setGlitchText] = useState('AMAN KUMAR');
    const [scanY, setScanY] = useState(0);
    const [particles, setParticles] = useState([]);

    // Glitch name effect
    useEffect(() => {
        if (phase !== 'counting') return;
        const glitchInterval = setInterval(() => {
            const original = 'AMAN KUMAR';
            setGlitchText(
                original.split('').map((ch) => {
                    if (ch === ' ') return ' ';
                    return Math.random() > 0.65
                        ? GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
                        : ch;
                }).join('')
            );
        }, 80);
        return () => clearInterval(glitchInterval);
    }, [phase]);

    // Scan line
    useEffect(() => {
        if (phase !== 'counting') return;
        const scanInterval = setInterval(() => {
            setScanY((prev) => (prev + 3) % 100);
        }, 30);
        return () => clearInterval(scanInterval);
    }, [phase]);

    // Counter
    useEffect(() => {
        let count = 0;
        const interval = setInterval(() => {
            count += Math.floor(Math.random() * 4) + 1;
            if (count > 99) {
                count = 100;
                clearInterval(interval);
                setGlitchText('AMAN KUMAR'); // Lock to real name
                setTimeout(() => setPhase('flash'), 400);
            }
            setCounter(count);
        }, 30);
        return () => clearInterval(interval);
    }, []);

    // Create burst particles on flash
    useEffect(() => {
        if (phase === 'flash') {
            const newParticles = Array.from({ length: 40 }, (_, i) => ({
                id: i,
                x: (Math.random() - 0.5) * window.innerWidth * 1.5,
                y: (Math.random() - 0.5) * window.innerHeight * 1.5,
                size: Math.random() * 6 + 2,
                delay: Math.random() * 0.2,
            }));
            setParticles(newParticles);

            setTimeout(() => {
                setPhase('split');
                if (onStartExiting) onStartExiting();
            }, 600);
        } else if (phase === 'split') {
            setTimeout(() => {
                setPhase('done');
                setTimeout(onComplete, 50);
            }, 900);
        }
    }, [phase, onComplete, onStartExiting]);

    const isDone = phase === 'done';

    return (
        <AnimatePresence>
            {!isDone && (
                <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden">

                    {/* ===== TOP PANEL ===== */}
                    <motion.div
                        className="absolute top-0 left-0 w-full h-[50vh] bg-zinc-950 overflow-hidden"
                        initial={{ y: 0 }}
                        animate={{ y: phase === 'split' ? '-100%' : 0 }}
                        transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
                    >
                        {/* Steel brushed texture */}
                        <div className="absolute inset-0 opacity-[0.04]" style={{
                            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)'
                        }} />

                        {/* Glitching Name (top half) */}
                        <div className="absolute bottom-0 left-0 right-0 h-full flex items-end justify-center overflow-hidden">
                            <h1
                                className="text-[10vw] md:text-[8vw] font-black tracking-[0.15em] leading-none translate-y-[55%] select-none"
                                style={{
                                    fontFamily: 'var(--font-heading)',
                                    color: 'var(--primary-color)',
                                    opacity: 0.06,
                                    textShadow: '0 0 60px var(--primary-color)',
                                }}
                            >
                                {glitchText}
                            </h1>
                        </div>

                        {/* Top-left corner detail */}
                        <div className="absolute top-8 left-8 md:top-12 md:left-12 flex flex-col gap-1">
                            <div className="text-[10px] font-mono tracking-[0.3em] text-white/20 uppercase">SYS.BOOT.v2.4</div>
                            <div className="w-16 h-[1px] bg-white/10" />
                        </div>
                    </motion.div>

                    {/* ===== BOTTOM PANEL ===== */}
                    <motion.div
                        className="absolute bottom-0 left-0 w-full h-[50vh] bg-zinc-950 overflow-hidden"
                        initial={{ y: 0 }}
                        animate={{ y: phase === 'split' ? '100%' : 0 }}
                        transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
                    >
                        {/* Steel brushed texture */}
                        <div className="absolute inset-0 opacity-[0.04]" style={{
                            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)'
                        }} />

                        {/* Glitching Name (bottom half mirrored) */}
                        <div className="absolute top-0 left-0 right-0 h-full flex items-start justify-center overflow-hidden">
                            <h1
                                className="text-[10vw] md:text-[8vw] font-black tracking-[0.15em] leading-none -translate-y-[55%] select-none"
                                style={{
                                    fontFamily: 'var(--font-heading)',
                                    color: 'var(--primary-color)',
                                    opacity: 0.06,
                                    textShadow: '0 0 60px var(--primary-color)',
                                }}
                            >
                                {glitchText}
                            </h1>
                        </div>

                        {/* Counter + Status */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
                            <motion.div
                                className="text-5xl md:text-7xl font-mono font-black tracking-[0.3em]"
                                style={{
                                    color: 'var(--primary-color)',
                                    textShadow: '0 0 40px var(--primary-color), 0 0 80px var(--primary-color)',
                                }}
                                animate={{ opacity: phase === 'split' ? 0 : 1 }}
                            >
                                {counter.toString().padStart(3, '0')}
                            </motion.div>

                            {/* Progress bar */}
                            <div className="w-48 md:w-72 h-[2px] bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full rounded-full"
                                    style={{ background: 'var(--primary-color)', boxShadow: '0 0 10px var(--primary-color)' }}
                                    initial={{ width: '0%' }}
                                    animate={{ width: `${counter}%` }}
                                    transition={{ duration: 0.1 }}
                                />
                            </div>

                            <motion.div
                                className="text-[10px] md:text-xs font-mono tracking-[0.5em] text-white/25 uppercase"
                                animate={{ opacity: phase === 'split' ? 0 : 1 }}
                            >
                                LOADING PORTFOLIO
                            </motion.div>
                        </div>

                        {/* Bottom-right corner detail */}
                        <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 flex flex-col items-end gap-1">
                            <div className="w-16 h-[1px] bg-white/10" />
                            <div className="text-[10px] font-mono tracking-[0.3em] text-white/20 uppercase">PORTFOLIO.OS</div>
                        </div>
                    </motion.div>

                    {/* ===== SCANNING LINE ===== */}
                    {phase === 'counting' && (
                        <div
                            className="absolute left-0 w-full h-[1px] z-[102] pointer-events-none"
                            style={{
                                top: `${scanY}%`,
                                background: 'linear-gradient(90deg, transparent, var(--primary-color), transparent)',
                                boxShadow: '0 0 15px var(--primary-color)',
                                opacity: 0.3,
                            }}
                        />
                    )}

                    {/* ===== CENTER GLOWING LINE ===== */}
                    <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[3px] z-[103]"
                        style={{
                            background: 'var(--primary-color)',
                            boxShadow: '0 0 40px 6px var(--primary-color), 0 0 120px 20px var(--primary-color)',
                        }}
                        initial={{ width: 0, opacity: 0 }}
                        animate={{
                            width: phase === 'flash' || phase === 'split' ? '110vw' : 0,
                            opacity: phase === 'flash' ? 1 : phase === 'split' ? 0 : 0,
                        }}
                        transition={{
                            width: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                            opacity: { duration: 0.4, delay: phase === 'split' ? 0.2 : 0 },
                        }}
                    />

                    {/* ===== PARTICLE BURST ===== */}
                    {phase === 'flash' && particles.map((p) => (
                        <motion.div
                            key={p.id}
                            className="absolute top-1/2 left-1/2 rounded-full z-[102]"
                            style={{
                                width: p.size,
                                height: p.size,
                                background: 'var(--primary-color)',
                                boxShadow: '0 0 10px var(--primary-color)',
                            }}
                            initial={{ x: 0, y: 0, opacity: 1 }}
                            animate={{ x: p.x, y: p.y, opacity: 0 }}
                            transition={{ duration: 0.8, delay: p.delay, ease: 'easeOut' }}
                        />
                    ))}

                    {/* ===== WHITE FLASH OVERLAY ===== */}
                    {phase === 'flash' && (
                        <motion.div
                            className="absolute inset-0 z-[104]"
                            style={{ background: 'var(--primary-color)' }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 0.4, 0] }}
                            transition={{ duration: 0.6, times: [0, 0.15, 1] }}
                        />
                    )}

                </div>
            )}
        </AnimatePresence>
    );
};

export default Loader;
