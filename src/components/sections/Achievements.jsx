import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaMedal, FaStar, FaBuilding } from 'react-icons/fa';

const achievementsData = [
    {
        id: 1,
        title: 'Academic Excellence – 8.34 CGPA',
        org: 'Swaminarayan University',
        description: 'Maintained a strong academic record with an 8.34 CGPA in Computer Engineering, demonstrating consistency and a deep understanding of core engineering principles.',
        icon: <FaAward />,
    },
    {
        id: 2,
        title: 'Higher Secondary Success – 75%',
        org: 'MLSM Darbhanga',
        description: 'Completed 12th Grade (Science) with a solid 75% score, building a strong foundation in Physics, Chemistry, and Mathematics.',
        icon: <FaMedal />,
    },
    {
        id: 3,
        title: '4th Rank – Redesign Hackathon',
        org: 'Tech Design Challenge',
        description: 'Secured the 4th rank among numerous participants for an innovative website redesign project, focusing on user experience, accessibility, and modern aesthetics.',
        icon: <FaStar />,
    }
];

const Achievements = () => {
    return (
        <section id="achievements" className="section py-20 bg-[var(--bg-card)]">
            <div className="container px-4 mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        Key <span className="text-[var(--primary-color)]">Achievements</span>
                    </h2>
                    <p className="text-white/50 text-lg max-w-2xl mx-auto">
                        Milestones and recognitions earned throughout my academic and professional journey.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {achievementsData.map((achievement, index) => (
                        <motion.div
                            key={achievement.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[var(--primary-color)]/30 transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 rounded-xl bg-[var(--primary-color)]/10 text-[var(--primary-color)] flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                                {achievement.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                            <h4 className="text-[var(--primary-color)] text-sm font-bold tracking-widest uppercase mb-4">{achievement.org}</h4>
                            <p className="text-white/60 leading-relaxed">{achievement.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
