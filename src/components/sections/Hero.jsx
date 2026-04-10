import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';

const Hero = () => {
    const [textIndex, setTextIndex] = useState(0);
    const roles = ["Software Engineer", "Problem Solver", "Full Stack Developer"];
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[textIndex];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setDisplayText(currentRole.substring(0, displayText.length + 1));
                if (displayText.length === currentRole.length) {
                    setTimeout(() => setIsDeleting(true), 1500);
                }
            } else {
                setDisplayText(currentRole.substring(0, displayText.length - 1));
                if (displayText.length === 0) {
                    setIsDeleting(false);
                    setTextIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, isDeleting ? 50 : 150);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, textIndex]);

    return (
        <section id="home" className="section relative min-h-screen flex items-center overflow-hidden">
            <div className="container flex items-center justify-between gap-20 md:gap-32 lg:gap-56 lg:flex-nowrap flex-wrap-reverse relative z-10">

                {/* Text Content */}
                <motion.div
                    className="w-full md:w-auto md:flex-1 max-w-[700px]"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h2
                        className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-6"
                        style={{ color: 'var(--primary-color)' }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Hello, I'm
                    </motion.h2>

                    <motion.h1
                        className="mb-4"
                        style={{
                            fontFamily: "'Outfit', sans-serif",
                            fontSize: 'clamp(4rem, 9vw, 9rem)',
                            fontWeight: '900',
                            lineHeight: 1.0,
                            letterSpacing: '-0.05em',
                            background: 'linear-gradient(135deg, #ffffff 0%, #A855F7 50%, #d946ef 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        Aman Kumar
                    </motion.h1>

                    <motion.h3
                        className="text-2xl md:text-4xl lg:text-5xl font-semibold h-16 md:h-20"
                        style={{ color: 'var(--text-secondary)' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        I am a{' '}
                        <span style={{ color: 'var(--secondary-color)' }}>{displayText}</span>
                        <span className="cursor">|</span>
                    </motion.h3>

                    <motion.p
                        className="my-8 text-lg md:text-xl lg:text-2xl leading-relaxed"
                        style={{ color: 'var(--text-secondary)', maxWidth: '650px' }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        1st year student passionate about building modern web applications and learning new technologies.
                        Exploring the world of software development and creating innovative digital solutions.
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap gap-5 mt-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                    >
                        <Button onClick={() => window.open('/aman_kumar.html', '_blank')}>View Resume</Button>
                        <Button variant="outline" onClick={() => window.location.href = '#projects'}>View Projects</Button>
                    </motion.div>
                </motion.div>

                {/* Profile Photo with Animated Mesh Gradient Background */}
                <motion.div
                    className="w-full sm:w-auto flex justify-center relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {/* Animated Mesh Gradient Background */}
                    <div
                        className="absolute top-1/2 left-1/2 w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] rounded-full pointer-events-none"
                        style={{
                            background: 'conic-gradient(from 0deg, #A855F7, #3b82f6, #d946ef, #06b6d4, #A855F7)',
                            filter: 'blur(80px)',
                            opacity: 0.4,
                            animation: 'mesh-rotate 12s linear infinite',
                            transform: 'translate(-50%, -50%)',
                        }}
                    />
                    <div
                        className="absolute top-1/2 left-1/2 w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px] rounded-full pointer-events-none"
                        style={{
                            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.5), transparent 70%)',
                            animation: 'pulse-glow 4s ease-in-out infinite',
                            transform: 'translate(-50%, -50%)',
                        }}
                    />

                    {/* Profile Photo Circle */}
                    <div
                        className="relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px] rounded-full p-[5px] cursor-default transition-all duration-400 z-10"
                        style={{
                            background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
                            boxShadow: '0 0 0 6px rgba(168,85,247,0.15), 0 20px 50px rgba(168,85,247,0.35)',
                        }}
                        onMouseEnter={e => {
                            if (window.innerWidth > 768) {
                                e.currentTarget.style.transform = 'scale(1.03)';
                                e.currentTarget.style.boxShadow = '0 0 0 8px rgba(168,85,247,0.25), 0 25px 60px rgba(168,85,247,0.5)';
                            }
                        }}
                        onMouseLeave={e => {
                            if (window.innerWidth > 768) {
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.boxShadow = '0 0 0 6px rgba(168,85,247,0.15), 0 20px 50px rgba(168,85,247,0.35)';
                            }
                        }}
                    >
                        <div className="w-full h-full rounded-full overflow-hidden border-4 border-[var(--bg-dark)]"
                            style={{ background: 'var(--bg-card)' }}>
                            <img
                                src="https://avatars.githubusercontent.com/u/224962508?v=4"
                                alt="Aman - Software Engineer"
                                className="w-full h-full object-cover object-top block"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
