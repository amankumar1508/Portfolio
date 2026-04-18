import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaGlobe, FaCode, FaTwitter, FaDownload, FaBriefcase, FaGraduationCap, FaTrophy, FaStar, FaAward, FaYoutube, FaProjectDiagram } from 'react-icons/fa';
import { SiPostman, SiLeetcode } from 'react-icons/si';
import './Resume.css';

const Resume = () => {
    const handlePrint = () => {
        window.print();
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const projects = [
        {
            title: 'Nexus AI - Resume Optimizer',
            role: 'Full Stack Developer',
            description: 'Enterprise-grade AI Resume Optimizer that analyzes resumes and provides intelligent feedback.',
            links: {
                youtube: 'https://youtu.be/nexus-ai-demo',
                postman: 'https://documenter.getpostman.com/view/nexus-ai-api',
                github: 'https://github.com/amankumarb778-crypto/Nexus-AI-charusat-hackathon.git'
            },
            tech: 'React, Node.js, AI, Tailwind',
            highlights: ['Skill gap detection', 'Intelligent feedback', 'Real-time scoring']
        },
        {
            title: 'IRCTC Updation',
            role: 'Frontend Architect',
            description: 'Modern UI/UX overhaul of IRCTC featuring a premium theme and high-impact animations.',
            links: {
                youtube: 'https://youtu.be/irctc-demo-live',
                github: 'https://github.com/amankumarb778-crypto/irctc.git'
            },
            tech: 'React, Framer Motion, Tailwind',
            highlights: ['Midnight & Azure theme', 'Smooth transitions', 'Optimized performance']
        },
        {
            title: 'Trek Bikes Clone',
            role: 'UI Developer',
            description: 'Immersive landing page for a premium e-bike brand with minimalist aesthetics.',
            links: {
                youtube: 'https://youtu.be/fuUgaUs4Uig',
                github: 'https://github.com/amankumarb778-crypto/trekbikes.git'
            },
            tech: 'React, Framer Motion, Tailwind',
            highlights: ['Minimalist design', 'Product showcases', 'Responsive layout']
        }
    ];

    const certificates = [
        'PostgreSQL & Node.js (CodingGita)',
        'Udemy Full Stack Certification',
        'Responsive Web Design (freeCodeCamp)',
        'Problem Solving Basic (HackerRank)',
        'Hacrux Hackathon Excellence',
        'Doppelganger Build Sprint'
    ];

    return (
        <div className="resume-container py-20 px-4 sm:px-8 md:px-12 relative min-h-screen bg-[var(--bg-dark)]">
            {/* Header / Actions */}
            <div className="max-w-5xl mx-auto flex justify-end mb-8 no-print">
                <button
                    onClick={handlePrint}
                    className="flex items-center gap-2 px-6 py-3 bg-[var(--primary-color)] text-white rounded-xl font-bold hover:brightness-110 active:scale-95 transition-all shadow-[0_4px_15px_var(--primary-glow)]"
                >
                    <FaDownload /> Download PDF
                </button>
            </div>

            <motion.div
                className="resume-paper max-w-5xl mx-auto bg-[var(--bg-card)] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Decorative background glow */}
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--primary-color)]/5 blur-[100px] pointer-events-none rounded-full" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--secondary-color)]/5 blur-[100px] pointer-events-none rounded-full" />

                <div className="grid grid-cols-1 lg:grid-cols-12">
                    {/* Left Column - Sidebar */}
                    <aside className="lg:col-span-4 bg-white/[0.02] border-r border-white/5 p-8 md:p-12 space-y-12">
                        {/* Profile Info */}
                        <motion.div variants={itemVariants} className="space-y-4">
                            <div className="w-32 h-32 rounded-2xl overflow-hidden border-2 border-[var(--primary-color)]/30 p-1 mb-6">
                                <img
                                    src="https://avatars.githubusercontent.com/u/224962508?v=4"
                                    alt="Aman Kumar"
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-white/70">
                                    <FaPhone className="text-[var(--primary-color)]" size={14} />
                                    <span className="text-sm font-medium">8128281326</span>
                                </div>
                                <div className="flex items-center gap-3 text-white/70">
                                    <FaEnvelope className="text-[var(--primary-color)]" size={14} />
                                    <span className="text-sm font-medium">aman.kr.cg@gmail.com</span>
                                </div>
                                <div className="flex items-center gap-3 text-white/70">
                                    <FaMapMarkerAlt className="text-[var(--primary-color)]" size={14} />
                                    <span className="text-sm font-medium">Kalol, Gujarat</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Skills */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            <h2 className="text-xs font-black text-[var(--primary-color)] uppercase tracking-[0.2em]">Core Expertise</h2>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-2">Frontend</p>
                                    <div className="flex flex-wrap gap-2">
                                        {['React', 'Next.js', 'Tailwind', 'Framer Motion', 'Redux', 'MUI'].map(s => (
                                            <span key={s} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] text-white/70 font-bold">{s}</span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-2">Backend & DB</p>
                                    <div className="flex flex-wrap gap-2">
                                        {['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Supabase', 'REST API'].map(s => (
                                            <span key={s} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] text-white/70 font-bold">{s}</span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-2">Tools & Languages</p>
                                    <div className="flex flex-wrap gap-2">
                                        {['JS (ES6+)', 'C', 'C++', 'Git', 'Vite', 'Postman', 'Figma'].map(s => (
                                            <span key={s} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] text-white/70 font-bold">{s}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Education */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            <h2 className="text-xs font-black text-[var(--primary-color)] uppercase tracking-[0.2em]">Education</h2>
                            <div className="space-y-4">
                                <div className="relative pl-6 before:absolute before:left-0 before:top-1.5 before:w-2 before:h-2 before:rounded-full before:bg-[var(--primary-color)]">
                                    <h4 className="text-sm font-bold text-white">Swaminarayan University</h4>
                                    <p className="text-xs text-white/50">B.E. Computer Engineering</p>
                                    <div className="flex justify-between items-center mt-1">
                                        <p className="text-[10px] font-black text-[var(--primary-color)] uppercase tracking-widest">2023 — 2027</p>
                                        <p className="text-[10px] font-black px-2 py-0.5 rounded bg-[var(--primary-color)]/10 text-[var(--primary-color)]">8.34 CGPA</p>
                                    </div>
                                </div>
                                <div className="relative pl-6 before:absolute before:left-0 before:top-1.5 before:w-2 before:h-2 before:rounded-full before:bg-white/20">
                                    <h4 className="text-sm font-bold text-white/80">MLSM Darbhanga</h4>
                                    <p className="text-xs text-white/40">Class 12th (PCM)</p>
                                    <div className="flex justify-between items-center mt-1">
                                        <p className="text-[10px] font-black text-white/30 uppercase tracking-widest">2021 — 2023</p>
                                        <p className="text-[10px] font-black px-2 py-0.5 rounded bg-white/5 text-white/30">75% Score</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Languages */}
                        <motion.div variants={itemVariants} className="space-y-4">
                            <h2 className="text-xs font-black text-[var(--primary-color)] uppercase tracking-[0.2em]">Languages</h2>
                            <div className="flex gap-4">
                                {['English', 'Hindi', 'Maithili'].map(l => (
                                    <span key={l} className="text-xs font-bold text-white/50">{l}</span>
                                ))}
                            </div>
                        </motion.div>
                    </aside>

                    {/* Right Column - Main Content */}
                    <main className="lg:col-span-8 p-8 md:p-16 space-y-16">
                        {/* Name & Summary */}
                        <motion.div variants={itemVariants} className="space-y-8">
                            <div>
                                <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-2">
                                    Aman <span className="text-[var(--primary-color)]">Kumar</span>
                                </h1>
                                <p className="text-xl md:text-2xl font-bold text-white/40 tracking-wide uppercase">Full-Stack Software Engineer</p>
                            </div>
                            <p className="text-base md:text-lg text-white/60 leading-relaxed italic border-l-4 border-[var(--primary-color)]/30 pl-6">
                                "Computer Engineering student with a passion for building premium web experiences. Specialized in MERN stack and AI integrations, with a record of success in national-level hackathons."
                            </p>
                        </motion.div>

                        {/* Projects */}
                        <motion.div variants={itemVariants} className="space-y-10">
                            <div className="flex items-center gap-4">
                                <FaProjectDiagram className="text-[var(--primary-color)]" size={20} />
                                <h2 className="text-2xl font-black text-white uppercase tracking-wider">Strategic Projects</h2>
                            </div>

                            <div className="grid gap-12">
                                {projects.map((p, idx) => (
                                    <div key={idx} className="relative group">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h3 className="text-xl font-bold text-white group-hover:text-[var(--primary-color)] transition-colors">{p.title}</h3>
                                                <div className="flex gap-4 mt-2 no-print">
                                                    <a href={p.links.youtube} target="_blank" className="text-xs font-bold text-[#FF0000] flex items-center gap-1 hover:underline"><FaYoutube /> Demo</a>
                                                    {p.links.postman && <a href={p.links.postman} target="_blank" className="text-xs font-bold text-[#FF6C37] flex items-center gap-1 hover:underline"><SiPostman /> API Docs</a>}
                                                    <a href={p.links.github} target="_blank" className="text-xs font-bold text-white/40 flex items-center gap-1 hover:underline"><FaGithub /> Source</a>
                                                </div>
                                            </div>
                                            <span className="text-[10px] font-black px-3 py-1 rounded-full bg-white/5 border border-white/5 text-white/40 uppercase tracking-widest">{p.tech}</span>
                                        </div>
                                        <p className="text-sm text-white/70 mb-4 leading-relaxed">{p.description}</p>
                                        <div className="flex flex-wrap gap-4">
                                            {p.highlights.map((h, i) => (
                                                <span key={i} className="text-[10px] font-bold text-[var(--primary-color)]/60 bg-[var(--primary-color)]/5 px-2 py-0.5 rounded uppercase tracking-tighter">✓ {h}</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Hackathons & Achievements */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <motion.div variants={itemVariants} className="space-y-8">
                                <div className="flex items-center gap-4">
                                    <FaTrophy className="text-[var(--primary-color)]" size={20} />
                                    <h2 className="text-xl font-black text-white uppercase tracking-wider">Hackathons</h2>
                                </div>
                                <div className="space-y-6">
                                    {[
                                        { title: 'Redesign Hackathon', rank: 'Top 4 Finalist', desc: '@codingGita' },
                                        { title: 'LNMIT Hackathon', rank: 'Finalist', desc: 'National Level' },
                                        { title: 'OceanLab X Charusat', rank: 'Finalist', desc: 'Build Sprint' },
                                        { title: 'Hack with Gujarat', rank: 'Active Participant', desc: 'State Sprint' }
                                    ].map((h, i) => (
                                        <div key={i} className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-[var(--primary-color)] before:rounded-full">
                                            <h4 className="text-sm font-bold text-white">{h.title}</h4>
                                            <p className="text-[10px] font-black text-[var(--primary-color)] uppercase tracking-widest mt-0.5">{h.rank}</p>
                                            <p className="text-xs text-white/40 mt-1">{h.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariants} className="space-y-8">
                                <div className="flex items-center gap-4">
                                    <FaAward className="text-[var(--primary-color)]" size={20} />
                                    <h2 className="text-xl font-black text-white uppercase tracking-wider">Certifications</h2>
                                </div>
                                <div className="grid gap-3">
                                    {certificates.map((c, i) => (
                                        <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                                            <FaStar className="text-[var(--primary-color)] mt-0.5" size={10} />
                                            <span className="text-xs font-medium text-white/70">{c}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </main>
                </div>
            </motion.div>

            {/* Print Footer */}
            <div className="max-w-5xl mx-auto text-center mt-12 text-white/20 text-[10px] font-bold uppercase tracking-[0.3em] no-print">
                Interactive Professional Summary © 2026
            </div>
        </div>
    );
};

export default Resume;
