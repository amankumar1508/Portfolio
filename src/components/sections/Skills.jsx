import React, { useMemo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Tilt from "react-parallax-tilt";
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNode, FaGitAlt, FaFigma, FaCheckCircle, FaPalette } from 'react-icons/fa';
import { TbBrandVscode } from 'react-icons/tb';
import {
    SiMongodb, SiLeetcode, SiFramer, SiFormik,
    SiTailwindcss, SiPostgresql, SiRedux, SiMui, SiVite,
    SiPostman, SiSupabase, SiRender, SiNetlify, SiVercel,
    SiCloudinary, SiCplusplus, SiC, SiExpress
} from 'react-icons/si';

const rawSkills = [
    // Frontend (7)
    { name: 'React', category: 'Frontend', level: 90, icon: <FaReact />, color: '#61DAFB' },
    { name: 'HTML5', category: 'Frontend', level: 95, icon: <FaHtml5 />, color: '#E34F26' },
    { name: 'CSS3', category: 'Frontend', level: 90, icon: <FaCss3Alt />, color: '#1572B6' },
    { name: 'Tailwind CSS', category: 'Frontend', level: 85, icon: <SiTailwindcss />, color: '#38B2AC' },
    { name: 'Redux', category: 'Frontend', level: 80, icon: <SiRedux />, color: '#764ABC' },
    { name: 'Material UI', category: 'Frontend', level: 75, icon: <SiMui />, color: '#007FFF' },
    { name: 'Framer Motion', category: 'Frontend', level: 80, icon: <SiFramer />, color: '#0055FF' },
    // Backend (5)
    { name: 'Node.js', category: 'Backend', level: 75, icon: <FaNode />, color: '#339933' },
    { name: 'Express', category: 'Backend', level: 80, icon: <SiExpress />, color: '#ffffff' },
    { name: 'MongoDB', category: 'Backend', level: 70, icon: <SiMongodb />, color: '#47A248' },
    { name: 'PostgreSQL', category: 'Backend', level: 70, icon: <SiPostgresql />, color: '#336791' },
    { name: 'Supabase', category: 'Backend', level: 65, icon: <SiSupabase />, color: '#3ECF8E' },
    // Languages (3)
    { name: 'JavaScript', category: 'Languages', level: 85, icon: <FaJs />, color: '#F7DF1E' },
    { name: 'C++', category: 'Languages', level: 60, icon: <SiCplusplus />, color: '#00599C' },
    { name: 'C', category: 'Languages', level: 60, icon: <SiC />, color: '#A8B9CC' },
    // Libraries (3)
    { name: 'Formik', category: 'Libraries', level: 75, icon: <SiFormik />, color: '#172B4D' },
    { name: 'Yup', category: 'Libraries', level: 80, icon: <FaCheckCircle />, color: '#FCC72C' },
    { name: 'Stitches', category: 'Libraries', level: 70, icon: <FaPalette />, color: '#FF0000' },
    // Tools (5)
    { name: 'Git', category: 'Tools', level: 85, icon: <FaGitAlt />, color: '#F05032' },
    { name: 'VS Code', category: 'Tools', level: 90, icon: <TbBrandVscode />, color: '#007ACC' },
    { name: 'Vite', category: 'Tools', level: 85, icon: <SiVite />, color: '#646CFF' },
    { name: 'Postman', category: 'Tools', level: 80, icon: <SiPostman />, color: '#FF6C37' },
    { name: 'Figma', category: 'Tools', level: 80, icon: <FaFigma />, color: '#F24E1E' },
    // Deployment (4)
    { name: 'Netlify', category: 'Deployment', level: 80, icon: <SiNetlify />, color: '#00C7B7' },
    { name: 'Vercel', category: 'Deployment', level: 80, icon: <SiVercel />, color: '#EEEEEE' },
    { name: 'Render', category: 'Deployment', level: 75, icon: <SiRender />, color: '#46E3B7' },
    { name: 'Cloudinary', category: 'Deployment', level: 75, icon: <SiCloudinary />, color: '#3448C5' },
];

const tiltOptions = {
    reverse: false,
    max: 15,
    perspective: 1000,
    scale: 1.03,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
};

const Skills = () => {
    const sortedSkills = useMemo(() => {
        return [...rawSkills].sort((a, b) => b.level - a.level);
    }, []);

    const [leetcodeStats, setLeetcodeStats] = useState(null);

    useEffect(() => {
        const fetchLeetCodeStats = async () => {
            try {
                const response = await fetch('https://leetcode-stats-api.herokuapp.com/OVzm6rcAP2');
                const data = await response.json();
                if (data.status === 'success') {
                    setLeetcodeStats(data);
                }
            } catch (error) {
                console.error("Failed to fetch LeetCode stats:", error);
            }
        };
        fetchLeetCodeStats();
    }, []);

    return (
        <section id="skills" className="section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Technical Skills
                </motion.h2>

                {/* Categories Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px' }}>
                    {['Frontend', 'Backend', 'Languages', 'Libraries', 'Tools', 'Deployment'].map((category, catIndex) => {
                        const categorySkills = sortedSkills.filter(s => s.category === category);
                        if (categorySkills.length === 0) return null;

                        return (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: catIndex * 0.15, ease: 'easeOut' }}
                            >
                                <Tilt options={tiltOptions} className="w-full">
                                    <div
                                        className="relative rounded-xl p-8 transition-all duration-300 group overflow-hidden"
                                        style={{
                                            background: 'var(--bg-card)',
                                            backdropFilter: 'blur(10px)',
                                            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                                            border: '1px solid var(--border-main)'
                                        }}
                                    >
                                        {/* Glare overlay */}
                                        <div
                                            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                            style={{
                                                background: 'linear-gradient(135deg, rgba(var(--primary-rgb), 0.08) 0%, transparent 50%, rgba(var(--primary-rgb), 0.03) 100%)',
                                            }}
                                        />

                                        {/* Top accent line */}
                                        <div
                                            className="absolute top-0 left-8 right-8 h-[1px]"
                                            style={{
                                                background: `linear-gradient(90deg, transparent, var(--primary-color), transparent)`,
                                                opacity: 0.3,
                                            }}
                                        />

                                        {/* Category Header */}
                                        <div className="relative z-10 flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                                            <div
                                                className="w-2 h-2 rounded-full"
                                                style={{
                                                    background: 'var(--primary-color)',
                                                    boxShadow: '0 0 8px var(--primary-color)',
                                                }}
                                            />
                                            <h3 className="text-2xl font-bold text-white tracking-wide m-0">{category}</h3>
                                            <span className="ml-auto text-xs font-mono text-white/30">{categorySkills.length} skills</span>
                                        </div>

                                        {/* Skills List */}
                                        <div className="relative z-10 grid grid-cols-1 gap-5">
                                            {categorySkills.map((skill, index) => (
                                                <div key={skill.name} className="flex flex-col gap-2">
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center gap-3">
                                                            <span style={{ color: skill.color, fontSize: '1.4rem', filter: `drop-shadow(0 0 6px ${skill.color}40)` }}>{skill.icon}</span>
                                                            <span className="text-white font-semibold text-base">{skill.name}</span>
                                                        </div>
                                                        <span className="text-sm font-mono font-semibold" style={{ color: skill.color }}>{skill.level}%</span>
                                                    </div>

                                                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            animate={{ width: `${skill.level}%` }}
                                                            transition={{ duration: 1.5, delay: 0.3 + index * 0.05 }}
                                                            className="h-full rounded-full"
                                                            style={{
                                                                background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`,
                                                                boxShadow: `0 0 12px ${skill.color}44`
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </Tilt>
                            </motion.div>
                        );
                    })}
                </div>

                {/* LeetCode Stats Section */}
                {leetcodeStats && (
                    <motion.div
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="glass-card"
                        style={{
                            padding: '40px',
                            maxWidth: '900px',
                            margin: '0 auto',
                            background: 'var(--bg-card)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(var(--primary-rgb), 0.15)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Background decoration */}
                        <div style={{
                            position: 'absolute',
                            top: '-50%',
                            right: '-20%',
                            width: '400px',
                            height: '400px',
                            background: 'radial-gradient(circle, rgba(248, 159, 27, 0.05) 0%, transparent 70%)',
                            pointerEvents: 'none'
                        }} />

                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '40px' }}>
                            <motion.div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '15px',
                                    background: 'rgba(255,255,255,0.03)',
                                    padding: '10px 25px',
                                    borderRadius: '50px',
                                    border: '1px solid rgba(255,255,255,0.05)'
                                }}
                                whileHover={{ scale: 1.03, borderColor: 'rgba(248, 159, 27, 0.3)' }}
                            >
                                <SiLeetcode size={28} color="#f89f1b" />
                                <h3 style={{ fontSize: '1.8rem', margin: 0, fontWeight: '700' }}>LeetCode Profile</h3>
                            </motion.div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>

                            {/* Main Stats Circle */}
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <motion.div
                                    style={{
                                        width: '140px',
                                        height: '140px',
                                        borderRadius: '50%',
                                        border: '4px solid rgba(255,255,255,0.1)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        position: 'relative',
                                        boxShadow: '0 0 30px rgba(0,0,0,0.3)'
                                    }}
                                    whileHover={{ scale: 1.08, boxShadow: '0 0 40px rgba(248, 159, 27, 0.2)' }}
                                >
                                    <motion.div
                                        style={{ fontSize: '3rem', fontWeight: '800', color: 'white' }}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.3, type: 'spring', bounce: 0.4 }}
                                    >
                                        {leetcodeStats.totalSolved}
                                    </motion.div>
                                    <div style={{ fontSize: '1rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Solved</div>

                                    {/* Decorative animated ring */}
                                    <motion.div
                                        style={{
                                            position: 'absolute',
                                            top: '-4px',
                                            left: '-4px',
                                            right: '-4px',
                                            bottom: '-4px',
                                            borderRadius: '50%',
                                            border: '4px solid transparent',
                                            borderTopColor: '#f89f1b',
                                        }}
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                                    />
                                </motion.div>
                                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Global Ranking</div>
                                    <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'white' }}>#{leetcodeStats.ranking.toLocaleString()}</div>
                                </div>
                            </div>

                            {/* Difficulty Breakdown */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', justifyContent: 'center' }}>
                                {[
                                    { label: 'Easy', count: leetcodeStats.easySolved, total: leetcodeStats.totalEasy, color: '#22c55e', bg: 'rgba(34, 197, 94, 0.1)' },
                                    { label: 'Medium', count: leetcodeStats.mediumSolved, total: leetcodeStats.totalMedium, color: '#eab308', bg: 'rgba(234, 179, 8, 0.1)' },
                                    { label: 'Hard', count: leetcodeStats.hardSolved, total: leetcodeStats.totalHard, color: '#ef4444', bg: 'rgba(239, 68, 68, 0.1)' }
                                ].map((item, idx) => (
                                    <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, x: 30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.4 + idx * 0.15 }}
                                        whileHover={{ x: 5, background: 'rgba(255,255,255,0.06)' }}
                                        style={{
                                            padding: '15px 20px',
                                            background: 'rgba(255,255,255,0.03)',
                                            borderRadius: '12px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            transition: 'all 0.3s',
                                            cursor: 'default',
                                        }}
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                            <motion.span
                                                style={{
                                                    width: '8px',
                                                    height: '8px',
                                                    borderRadius: '50%',
                                                    background: item.color,
                                                    boxShadow: `0 0 10px ${item.color}`,
                                                    display: 'inline-block',
                                                }}
                                                animate={{ scale: [1, 1.3, 1] }}
                                                transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                                            />
                                            <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{item.label}</span>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '5px' }}>
                                            <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'white' }}>{item.count}</span>
                                            <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)' }}>/ {item.total}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div style={{
                            marginTop: '40px',
                            paddingTop: '20px',
                            borderTop: '1px solid rgba(255,255,255,0.05)',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            gap: '20px'
                        }}>
                            <div style={{ display: 'flex', gap: '20px' }}>
                                <div>
                                    <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Acceptance Rate</span>
                                    <span style={{ fontSize: '1.1rem', fontWeight: '600', color: 'white' }}>{leetcodeStats.acceptanceRate}%</span>
                                </div>
                                <div>
                                    <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Contributions</span>
                                    <span style={{ fontSize: '1.1rem', fontWeight: '600', color: 'white' }}>{leetcodeStats.contributionPoints}</span>
                                </div>
                            </div>

                            <motion.a
                                href="https://leetcode.com/u/OVzm6rcAP2/"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ x: 8, color: '#FFD700' }}
                                style={{
                                    color: '#f89f1b',
                                    textDecoration: 'none',
                                    fontWeight: '500',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px'
                                }}
                            >
                                View full profile <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Skills;
