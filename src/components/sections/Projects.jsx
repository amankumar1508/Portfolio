import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaYoutube, FaExternalLinkAlt, FaTrophy } from 'react-icons/fa';

const projectsData = [
    {
        id: 1,
        title: 'Nexus AI – Resume Optimizer Suite',
        category: 'AI',
        isHackathon: true,
        problem: 'Resume analysis and optimization are time-consuming and often inconsistent.',
        solution: 'Developed an enterprise-grade AI Resume Optimizer that provides intelligent feedback.',
        outcome: 'Helped users achieve higher interview hit rates with optimized resumes.',
        tags: ['React', 'AI', 'Tailwind CSS', 'Vite'],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
        links: {
            live: 'https://nexuss-ai.netlify.app',
            github: 'https://github.com/amankumarb778-crypto/Nexus-AI-charusat-hackathon.git',
        },
    },
    {
        id: 2,
        title: 'IRCTC Updation',
        category: 'Web',
        isHackathon: true,
        problem: 'Legacy UI/UX in booking systems lacks modern speed and aesthetic appeal.',
        solution: 'Modernized the IRCTC interface with a premium Midnight & Azure theme and Framer Motion animations.',
        outcome: 'Enhanced user engagement and provided a smoother booking experience.',
        tags: ['React', 'Framer Motion', 'Tailwind CSS'],
        image: '/projects/irctc.png',
        links: {
            live: 'https://irctc-blush-omega.vercel.app/',
            github: 'https://github.com/amankumarb778-crypto/irctc.git',
        },
    },
    {
        id: 3,
        title: 'Trek Bikes Clone',
        category: 'Web',
        isHackathon: false,
        problem: 'Digital storefronts for high-end products often fail to capture the premium brand experience.',
        solution: 'Developed a sleek, immersive landing page focusing on minimalist aesthetics and smooth showcases.',
        outcome: 'A high-conversion, responsive web experience that mirrors the quality of the Trek brand.',
        tags: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite'],
        image: '/projects/trek-bikes.png',
        links: {
            live: 'https://trekbikes23.netlify.app/',
            github: 'https://github.com/amankumarb778-crypto/trekbikes.git',
            youtube: 'https://youtu.be/fuUgaUs4Uig',
        },
    },
];

const TABS = ['All', 'Hackathon', 'AI', 'Web'];

const ProjectCard = ({ project, index }) => {
    const cardRef = useRef(null);
    const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 50 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = useCallback((e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setSpotlightPos({ x, y });
    }, []);

    return (
        <motion.div
            ref={cardRef}
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group relative flex flex-col h-full rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] transition-all duration-500"
            style={{
                boxShadow: isHovered
                    ? '0 25px 50px rgba(0,0,0,0.5), 0 0 40px rgba(var(--primary-rgb), 0.12)'
                    : '0 8px 32px rgba(0, 0, 0, 0.2)',
                borderColor: isHovered ? 'rgba(var(--primary-rgb), 0.3)' : 'rgba(255,255,255,0.1)',
                transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Cursor-tracking spotlight glow */}
            <div
                className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-500"
                style={{
                    opacity: isHovered ? 1 : 0,
                    background: `radial-gradient(600px circle at ${spotlightPos.x}% ${spotlightPos.y}%, rgba(var(--primary-rgb), 0.12), transparent 60%)`,
                }}
            />

            {/* Animated bottom accent line */}
            <div
                className="absolute bottom-0 left-0 h-[2px] z-10 transition-all duration-700 ease-out"
                style={{
                    width: isHovered ? '100%' : '0%',
                    background: 'linear-gradient(90deg, transparent, var(--primary-color), transparent)',
                    boxShadow: isHovered ? '0 0 15px var(--primary-color)' : 'none',
                }}
            />

            {/* Image Section */}
            <div className="relative h-52 overflow-hidden z-[1]">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white border border-white/10 rounded-full">
                        {project.category}
                    </span>
                    {project.isHackathon && (
                        <span className="flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-[#FFD700]/10 backdrop-blur-md text-[#FFD700] border border-[#FFD700]/20 rounded-full">
                            <FaTrophy size={10} /> Hackathon
                        </span>
                    )}
                </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-grow p-5 md:p-6 relative z-[1]">
                <h3 className="text-xl font-bold text-white mb-4 line-clamp-1 group-hover:text-[var(--primary-color)] transition-colors duration-300">
                    {project.title}
                </h3>

                <div className="space-y-4 mb-6">
                    <div>
                        <span className="block text-[10px] font-bold text-[var(--primary-color)] uppercase tracking-widest mb-1">Problem</span>
                        <p className="text-sm text-white/60 leading-relaxed line-clamp-2">
                            {project.problem}
                        </p>
                    </div>
                    <div>
                        <span className="block text-[10px] font-bold text-[var(--primary-color)] uppercase tracking-widest mb-1">Outcome</span>
                        <p className="text-sm text-white/60 leading-relaxed line-clamp-2">
                            {project.outcome}
                        </p>
                    </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-2 py-1 text-[10px] font-medium text-white/50 bg-white/5 rounded-md border border-white/5"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Actions Section */}
            <div className="p-5 pt-0 flex flex-wrap gap-3 relative z-[1]">
                <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--primary-color)] text-white text-xs font-bold transition-all hover:brightness-110 active:scale-95 shadow-[0_4px_12px_var(--primary-glow)]"
                >
                    <FaExternalLinkAlt size={12} /> Live Demo
                </a>
                <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 text-white border border-white/10 text-xs font-bold transition-all hover:bg-white/10 active:scale-95"
                >
                    <FaGithub size={14} /> GitHub
                </a>
                {project.links.youtube && (
                    <a
                        href={project.links.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#FF0000]/10 text-[#FF0000] border border-[#FF0000]/20 text-xs font-bold transition-all hover:bg-[#FF0000]/20 active:scale-95"
                    >
                        <FaYoutube size={14} /> Watch Showcase
                    </a>
                )}
            </div>
        </motion.div>
    );
};

const SectionHeader = ({ icon: Icon, label, color = "var(--primary-color)" }) => (
    <div className="flex items-center gap-4 mb-8">
        <Icon className="text-2xl" style={{ color }} />
        <h3 className="text-xl font-extrabold text-white whitespace-nowrap tracking-tight">{label}</h3>
        <div className="flex-grow h-px bg-gradient-to-r from-white/10 to-transparent" />
    </div>
);

const Projects = () => {
    const [activeTab, setActiveTab] = useState(0);

    const getFilteredProjects = () => {
        const t = TABS[activeTab];
        if (t === 'All') return projectsData;
        if (t === 'Hackathon') return projectsData.filter(p => p.isHackathon);
        return projectsData.filter(p => p.category === t);
    };

    return (
        <section id="projects" className="py-20 md:py-32 bg-[var(--bg-dark)] px-4 sm:px-8 md:px-12 relative overflow-hidden">
            {/* Design elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none opacity-20"
                style={{ background: 'radial-gradient(circle, var(--primary-color) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />

            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Header */}
                <div className="text-center mb-16 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.h2
                            className="text-4xl md:text-6xl font-black text-white mb-6 leading-none tracking-tight"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            Project <motion.span
                                className="text-[var(--primary-color)]"
                                animate={{ textShadow: ['0 0 0px var(--primary-color)', '0 0 20px var(--primary-color)', '0 0 0px var(--primary-color)'] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >Portfolio</motion.span>
                        </motion.h2>
                        <motion.p
                            className="text-white/50 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            A curated selection of my best work — from AI-powered tools to high-performance web apps and engineering solutions.
                        </motion.p>
                    </motion.div>

                    {/* Custom Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 mt-10">
                        {TABS.map((tab, idx) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(idx)}
                                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 relative ${activeTab === idx
                                    ? 'text-white'
                                    : 'text-white/40 hover:text-white/60 hover:bg-white/5'
                                    }`}
                            >
                                {activeTab === idx && (
                                    <motion.div
                                        layoutId="tab-pill"
                                        className="absolute inset-0 bg-[var(--primary-color)] rounded-full z-[-1]"
                                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Display — flat grid for all tabs */}
                <div className="min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                        >
                            {getFilteredProjects().map((p, i) => (
                                <ProjectCard key={p.id} project={p} index={i} />
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Projects;
