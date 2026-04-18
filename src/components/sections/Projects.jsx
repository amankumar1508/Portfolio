import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaYoutube, FaExternalLinkAlt, FaTrophy, FaFigma } from 'react-icons/fa';
import { SiPostman } from 'react-icons/si';

const projectsData = [
    {
        id: 1,
        title: 'Click Counter – Reflex Game',
        category: 'Games',
        problem: 'Testing and improving user reaction time and click precision in a fun, competitive way.',
        solution: 'Developed a high-speed click challenge game with real-time score tracking and sound effects.',
        outcome: 'A lightweight, addictive browser game that helps users measure and improve their motor skills.',
        tags: ['JavaScript', 'CSS3', 'Game Design'],
        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',
        links: {
            live: 'https://gorgeous-cannoli-8ea9cc.netlify.app/',
            github: 'https://github.com/amankumar1508/game1.git',
            youtube: 'https://youtu.be/click-counter-demo',
        },
    },
    {
        id: 2,
        title: 'Trek Bikes Clone',
        category: 'Clones',
        problem: 'Digital storefronts for high-end products often fail to capture the premium brand experience.',
        solution: 'Developed a sleek, immersive landing page focusing on minimalist aesthetics and smooth showcases.',
        outcome: 'A high-conversion, responsive web experience that mirrors the quality of the Trek brand.',
        tags: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite'],
        image: '/projects/trek-bikes.png',
        links: {
            live: 'https://trekbikes23.netlify.app/',
            github: 'https://github.com/amankumarb778-crypto/trekbikes.git',
            youtube: 'https://youtu.be/fuUgaUs4Uig',
            figma: 'https://figma.com/file/trek-bikes-id',
        },
    },
    {
        id: 3,
        title: 'Nexus AI Optimizer',
        category: 'Full Stack',
        problem: 'Resume analysis and optimization are time-consuming and often inconsistent.',
        solution: 'Developed an enterprise-grade AI Resume Optimizer that provides intelligent feedback.',
        outcome: 'Helped users achieve higher interview hit rates with optimized resumes.',
        tags: ['React', 'AI', 'Tailwind CSS', 'Vite', 'Node.js'],
        image: '/projects/nexus-ai.png',
        links: {
            live: 'https://nexuss-ai.netlify.app',
            github: 'https://github.com/amankumarb778-crypto/Nexus-AI-charusat-hackathon.git',
            youtube: 'https://youtu.be/nexus-ai-demo',
            postman: 'https://documenter.getpostman.com/view/nexus-ai-api',
        },
    },
    {
        id: 4,
        title: 'IRCTC Updation',
        category: 'Frontend',
        problem: 'Legacy UI/UX in booking systems lacks modern speed and aesthetic appeal.',
        solution: 'Modernized the IRCTC interface with a premium Midnight & Azure theme and Framer Motion animations.',
        outcome: 'Enhanced user engagement and provided a smoother booking experience.',
        tags: ['React', 'Framer Motion', 'Tailwind CSS'],
        image: '/projects/irctc.png',
        links: {
            live: 'https://irctc-blush-omega.vercel.app/',
            github: 'https://github.com/amankumarb778-crypto/irctc.git',
            youtube: 'https://youtu.be/irctc-demo-live',
        },
    },
    {
        id: 5,
        title: 'CodingGita Clone',
        category: 'Clones',
        problem: 'Existing educational platforms often have complex and cluttered navigation.',
        solution: 'Built a high-performance clone of the CodingGita platform focusing on clean UI and fast navigation.',
        outcome: 'A lightweight and responsive learning portal that improves content accessibility.',
        tags: ['React', 'JavaScript', 'CSS Grid', 'Framer Motion'],
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
        links: {
            live: 'https://codinggita-clone.netlify.app',
            github: 'https://github.com/amankumarb778-crypto/codinggita-clone',
        },
    },
    {
        id: 6,
        title: 'Premium Portfolio OS',
        category: 'Frontend',
        problem: 'Standard portfolios often feel like static documents rather than interactive experiences.',
        solution: 'Engineered this Portfolio OS with glassmorphism, 3D tilt effects, and a terminal title bar.',
        outcome: 'An immersive digital environment that showcases technical architectural skills.',
        tags: ['React', 'Aceternity UI', 'Framer Motion', 'Three.js'],
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
        links: {
            live: 'https://aman-portfolio-os.vercel.app',
            github: 'https://github.com/amankumarb778-crypto/portfolio',
        },
    },
    {
        id: 7,
        title: 'Data Structures & Algorithms in C',
        category: 'More',
        problem: 'Understanding core data structures is essential but often taught without practical implementation.',
        solution: 'Implemented linked lists, stacks, queues, trees, and sorting algorithms from scratch in C.',
        outcome: 'A comprehensive library of DSA implementations with clean, well-documented C code.',
        tags: ['C', 'DSA', 'Algorithms'],
        image: 'https://images.unsplash.com/photo-1515879218367-8466d910aede?auto=format&fit=crop&q=80&w=800',
        links: {
            github: 'https://github.com/amankumar1508/dsa-in-c',
        },
    },
    {
        id: 8,
        title: 'Student Management System – C++',
        category: 'More',
        problem: 'Managing student records manually is error-prone and inefficient.',
        solution: 'Built a console-based CRUD application using C++ with OOP principles like inheritance and polymorphism.',
        outcome: 'A fast, reliable system for managing student data with file-based persistence.',
        tags: ['C++', 'OOP', 'File Handling'],
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
        links: {
            github: 'https://github.com/amankumar1508/student-management-cpp',
        },
    },
    {
        id: 9,
        title: 'Interactive Quiz App – Vanilla JS',
        category: 'More',
        problem: 'Static quizzes lack engagement and instant feedback for learners.',
        solution: 'Created a dynamic quiz application with timer, score tracking, and category selection using pure JavaScript.',
        outcome: 'An engaging, lightweight quiz experience with no framework dependencies.',
        tags: ['JavaScript', 'DOM Manipulation', 'CSS3'],
        image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=800',
        links: {
            github: 'https://github.com/amankumar1508/quiz-app-js',
        },
    },
];

const TABS = ['All', 'Games', 'Clones', 'Full Stack', 'Frontend', 'More'];

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
            className="group relative flex flex-col h-full rounded-2xl overflow-hidden bg-[var(--bg-card)] backdrop-blur-md transition-all duration-500"
            style={{
                border: '1px solid var(--border-main)',
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
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#FF0000]/10 text-[#FF0000] border border-[#FF0000]/20 text-xs font-bold transition-all hover:bg-[#FF0000]/20 active:scale-95"
                    >
                        <FaYoutube size={14} /> Demo
                    </a>
                )}
                {project.links.postman && (
                    <a
                        href={project.links.postman}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#FF6C37]/10 text-[#FF6C37] border border-[#FF6C37]/20 text-xs font-bold transition-all hover:bg-[#FF6C37]/20 active:scale-95"
                    >
                        <SiPostman size={14} /> API
                    </a>
                )}
                {project.links.figma && (
                    <a
                        href={project.links.figma}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#F24E1E]/10 text-[#F24E1E] border border-[#F24E1E]/20 text-xs font-bold transition-all hover:bg-[#F24E1E]/20 active:scale-95"
                    >
                        <FaFigma size={14} /> Design
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
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.h2
                            className="text-4xl md:text-6xl font-black text-white mb-6 leading-none tracking-tight"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
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
                            animate={{ opacity: 1 }}
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
