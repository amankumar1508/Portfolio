import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaGithub, FaYoutube, FaLightbulb, FaRocket, FaCheckCircle } from 'react-icons/fa';

const hackathonsData = [
    {
        id: 1,
        title: 'Nexus AI – Resume Optimizer Suite',
        event: 'Swaminarayan University Hackathon',
        image: '/projects/nexus-ai.png',
        problem: 'Resume analysis and optimization are time-consuming and often inconsistent, leading to missing out on job opportunities.',
        solution: 'Developed an enterprise-grade AI Resume Optimizer that provides intelligent feedback using NLP techniques.',
        outcome: 'Secured a top position and helped users achieve 40% higher interview hit rates with optimized resumes.',
        links: {
            github: 'https://github.com/amankumarb778-crypto/Nexus-AI-charusat-hackathon.git',
            live: 'https://nexuss-ai.netlify.app',
        },
        tags: ['AI', 'React', 'NLP']
    },
    {
        id: 2,
        title: 'Modernizing IRCTC',
        event: 'UI/UX Design Sprint',
        image: '/projects/irctc.png',
        problem: 'The legacy UI/UX of train booking systems lacks the speed and appeal required for modern users.',
        solution: 'Modernized the interface with a premium Midnight & Azure theme, adding advanced filtering and real-time availability features.',
        outcome: 'Received high praise for accessibility features and professional design aesthetics.',
        links: {
            github: 'https://github.com/amankumarb778-crypto/irctc.git',
            live: 'https://irctc-blush-omega.vercel.app/',
        },
        tags: ['UI/UX', 'Framer Motion']
    }
];

const Hackathons = () => {
    return (
        <section id="hackathons" className="section py-20 bg-[var(--bg-dark)] px-4">
            <div className="container mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        Hackathon <span className="text-[var(--primary-color)]">Experiences</span>
                    </h2>
                    <p className="text-white/50 text-lg max-w-2xl mx-auto">
                        Building solutions under pressure, collaborating with teams, and turning ideas into reality.
                    </p>
                </motion.div>

                <div className="space-y-16">
                    {hackathonsData.map((hack, index) => (
                        <motion.div
                            key={hack.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/[0.02] border border-white/5 rounded-3xl p-8 md:p-12 hover:border-white/10 transition-colors"
                        >
                            {/* Left Side: Mockup Image */}
                            <div className="lg:col-span-5 relative group">
                                <div className="absolute inset-0 bg-[var(--primary-color)]/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <motion.div
                                    className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <img
                                        src={hack.image}
                                        alt={hack.title}
                                        className="w-full h-auto object-cover aspect-video md:aspect-auto"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                </motion.div>
                            </div>

                            {/* Right Side: Title & Context */}
                            <div className="lg:col-span-7 space-y-8">
                                <div>
                                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--primary-color)]/10 text-[var(--primary-color)] text-xs font-bold uppercase tracking-wider mb-6">
                                        <FaTrophy /> {hack.event}
                                    </span>
                                    <h3 className="text-3xl font-bold text-white mb-6 leading-tight">{hack.title}</h3>

                                    <div className="flex flex-wrap gap-4 mb-8">
                                        {hack.links.github && (
                                            <a href={hack.links.github} target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all flex items-center gap-2 text-sm font-bold">
                                                <FaGithub size={18} /> View Code
                                            </a>
                                        )}
                                        {hack.links.live && (
                                            <a href={hack.links.live} target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 rounded-full bg-[var(--primary-color)] text-white hover:brightness-110 transition-all flex items-center gap-2 text-sm font-bold shadow-[0_4px_15px_var(--primary-glow)]">
                                                <FaRocket size={18} /> Launch Demo
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <div className="grid gap-6">
                                    <div className="flex gap-5">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                                            <FaLightbulb size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-[var(--primary-color)] font-bold text-xs uppercase tracking-widest mb-2">Problem Statement</h4>
                                            <p className="text-white/70 text-sm leading-relaxed">{hack.problem}</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-5">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                                            <FaRocket size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-[var(--primary-color)] font-bold text-xs uppercase tracking-widest mb-2">The Solution</h4>
                                            <p className="text-white/70 text-sm leading-relaxed">{hack.solution}</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-5">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500">
                                            <FaCheckCircle size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-[var(--primary-color)] font-bold text-xs uppercase tracking-widest mb-2">Final Outcome</h4>
                                            <p className="text-white/70 text-sm leading-relaxed">{hack.outcome}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hackathons;
