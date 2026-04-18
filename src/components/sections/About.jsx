import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "0px" });

    // Parallax for background text
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const bgTextX = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
    const bgTextOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.04, 0.04, 0]);

    const containerVariants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.15 }
        }
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
    };

    const tileVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 30 },
        visible: (i) => ({
            opacity: 1, scale: 1, y: 0,
            transition: { duration: 0.6, delay: 0.6 + i * 0.15, ease: [0.22, 1, 0.36, 1] }
        })
    };

    return (
        <section id="about" className="section" ref={ref} style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Parallax Background Text */}
            <motion.div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                x: bgTextX,
                opacity: bgTextOpacity,
                fontSize: '25vw',
                fontWeight: '900',
                color: 'var(--text-main)',
                zIndex: 0,
                whiteSpace: 'nowrap',
                pointerEvents: 'none',
                fontFamily: 'var(--font-heading)',
                textTransform: 'uppercase',
                transform: 'translate(-50%, -50%)',
                filter: 'blur(2px)'
            }}>
                ABOUT
            </motion.div>

            <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1000px' }}>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {/* Title with character-by-character animation */}
                    <motion.h2
                        className="section-title"
                        variants={fadeUp}
                        animate="visible"
                        style={{
                            fontSize: 'clamp(3rem, 8vw, 4.5rem)',
                            textAlign: 'center',
                            marginBottom: '4rem',
                            fontFamily: 'var(--font-heading)',
                            fontWeight: '900',
                            letterSpacing: '-0.04em'
                        }}
                    >
                        About <motion.span
                            style={{ color: 'var(--primary-color)', display: 'inline-block' }}
                            animate={{
                                textShadow: ['0 0 0px var(--primary-color)', '0 0 20px var(--primary-color)', '0 0 0px var(--primary-color)']
                            }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                        >Me</motion.span>
                    </motion.h2>

                    {/* Paragraphs with staggered reveals */}
                    <motion.div
                        variants={fadeUp}
                        animate="visible"
                        style={{
                            fontSize: '1.5rem',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.7,
                            textAlign: 'center',
                            fontFamily: 'var(--font-body)',
                            fontWeight: '400'
                        }}
                    >
                        <motion.p variants={fadeUp} style={{ marginBottom: '30px' }}>
                            I am <span style={{ color: 'var(--text-main)', fontWeight: '700' }}>Aman</span>, a first-year undergraduate fueled by a curiosity for <span style={{ color: 'var(--secondary-color)', fontWeight: '600' }}>building digital experiences</span>.
                            My journey into software development is driven by a desire to turn ideas into functional, <span style={{ color: 'var(--primary-color)', fontWeight: '600' }}>pixel-perfect reality</span>.
                        </motion.p>
                        <motion.p variants={fadeUp} style={{ marginBottom: '30px' }}>
                            I'm currently immersing myself in the modern web ecosystem—mastering <span style={{ color: 'var(--text-main)', fontWeight: '600' }}>React</span>, JavaScript, and CSS to craft intuitive user interfaces.
                            Beyond the code, I believe in learning by doing, constantly pushing the boundaries of my knowledge.
                        </motion.p>
                        <motion.p variants={fadeUp}>
                            I am looking to connect with like-minded developers, collaborate on innovative solutions, and build a robust foundation for a <span style={{ color: 'var(--secondary-color)', fontWeight: '600' }}>future in software engineering</span>.
                        </motion.p>
                    </motion.div>
                </motion.div>

                {/* Info Tiles with spring pop-in */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '20px',
                    marginTop: '60px'
                }}>
                    {[
                        { label: 'Location', value: 'India', icon: 'fa-location-dot' },
                        { label: 'Education', value: 'Swaminarayan University', icon: 'fa-graduation-cap' },
                        { label: 'Interests', value: 'Web & Crypto', icon: 'fa-laptop-code' }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            custom={idx}
                            variants={tileVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover={{
                                y: -10,
                                scale: 1.05,
                                boxShadow: '0 20px 40px rgba(0,0,0,0.2), 0 0 20px rgba(var(--primary-rgb), 0.1)',
                                borderColor: 'var(--primary-color)',
                                background: 'rgba(var(--primary-rgb), 0.05)'
                            }}
                            className="glass-card"
                            style={{
                                textAlign: 'center',
                                cursor: 'default',
                                background: 'var(--bg-card)',
                                border: '1px solid var(--border-main)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '30px 20px'
                            }}
                        >
                            <div className="mb-4 p-4 rounded-full bg-[var(--primary-color)]/10 text-[var(--primary-color)]">
                                <motion.i
                                    className={`fa-solid ${item.icon}`}
                                    style={{ fontSize: '1.8rem', display: 'block' }}
                                    animate={{ y: [0, -4, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                                />
                            </div>
                            <div style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '2px' }}>{item.label}</div>
                            <div style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--text-main)', letterSpacing: '-0.02em' }}>{item.value}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
