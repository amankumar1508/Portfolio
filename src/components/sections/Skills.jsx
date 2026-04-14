import React, { useMemo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNode, FaGitAlt, FaFigma } from 'react-icons/fa';
import { SiMongodb, SiLeetcode } from 'react-icons/si';

const rawSkills = [
    { name: 'React', category: 'Frontend', level: 90, icon: <FaReact />, color: '#61DAFB' },
    { name: 'JavaScript', category: 'Frontend', level: 85, icon: <FaJs />, color: '#F7DF1E' },
    { name: 'HTML5', category: 'Frontend', level: 95, icon: <FaHtml5 />, color: '#E34F26' },
    { name: 'CSS3', category: 'Frontend', level: 90, icon: <FaCss3Alt />, color: '#1572B6' },
    { name: 'Node.js', category: 'Backend', level: 75, icon: <FaNode />, color: '#339933' },
    { name: 'MongoDB', category: 'Backend', level: 70, icon: <SiMongodb />, color: '#47A248' },
    { name: 'Figma', category: 'Design', level: 80, icon: <FaFigma />, color: '#F24E1E' },
    { name: 'Git', category: 'Tools', level: 85, icon: <FaGitAlt />, color: '#F05032' }
];

const skillCardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.85, rotateX: 15 },
    visible: (i) => ({
        opacity: 1, y: 0, scale: 1, rotateX: 0,
        transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }
    })
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
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    Technical Skills
                </motion.h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '30px', marginBottom: '60px' }}>
                    {sortedSkills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            custom={index}
                            variants={skillCardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            whileHover={{
                                y: -12,
                                scale: 1.05,
                                boxShadow: `0 20px 40px rgba(0,0,0,0.3), 0 0 30px ${skill.color}22`,
                                borderColor: `${skill.color}44`,
                            }}
                            className="glass-card"
                            style={{ padding: '30px', textAlign: 'center', cursor: 'pointer' }}
                        >
                            <motion.div
                                style={{ fontSize: '3rem', color: skill.color, marginBottom: '15px' }}
                                whileHover={{ scale: 1.2, rotate: 10 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                {skill.icon}
                            </motion.div>
                            <h3 style={{ marginBottom: '10px' }}>{skill.name}</h3>
                            <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.2, delay: 0.3 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                                    style={{ height: '100%', background: `linear-gradient(90deg, ${skill.color}, var(--secondary-color))`, borderRadius: '3px' }}
                                />
                            </div>
                            <motion.span
                                className="text-xs font-mono mt-2 block"
                                style={{ color: skill.color, opacity: 0.7 }}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 0.7 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 + index * 0.08 }}
                            >
                                {skill.level}%
                            </motion.span>
                        </motion.div>
                    ))}
                </div>

                {/* LeetCode Stats Section */}
                {leetcodeStats && (
                    <motion.div
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="glass-card"
                        style={{
                            padding: '40px',
                            maxWidth: '900px',
                            margin: '0 auto',
                            background: 'linear-gradient(145deg, rgba(23, 25, 35, 0.95), rgba(17, 24, 39, 0.9))',
                            border: '1px solid rgba(248, 159, 27, 0.15)',
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
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
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
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
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
