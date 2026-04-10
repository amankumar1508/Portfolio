import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projectsData = [
    {
        id: 1,
        title: 'Autonomous Drone Navigation',
        category: 'Robotics',
        problem: 'GPS signals are unreliable in indoor environments causing drift.',
        solution: 'Implemented SLAM algorithm using LIDAR and Optical Flow sensors.',
        outcome: 'Achieved 98% navigation accuracy in GPS-denied zones.',
        tags: ['Python', 'ROS', 'C++']
    },
    {
        id: 2,
        title: 'Smart Grid Energy Monitor',
        category: 'IoT',
        problem: 'Homeowners lack real-time data to optimize energy consumption.',
        solution: 'Developed an IoT device with React dashboard and MQTT messaging.',
        outcome: 'Reduced test user energy bills by 15% on average.',
        tags: ['React', 'Node.js', 'MQTT']
    },
    {
        id: 3,
        title: 'E-Commerce Microservices',
        category: 'Web',
        problem: 'Monolithic architecture was causing downtime during traffic spikes.',
        solution: 'Refactored backend into Dockerized microservices with Kubernetes.',
        outcome: '99.99% uptime during stress testing.',
        tags: ['Docker', 'Kubernetes', 'Go']
    }
];

const Projects = () => {
    const [filter, setFilter] = useState('All');

    // useCallback: Memoizing the handler to prevent re-creation on every render
    // Useful when passing to child components (though we use it directly here for demonstration)
    const handleFilterChange = useCallback((category) => {
        setFilter(category);
    }, []);

    const filteredProjects = filter === 'All'
        ? projectsData
        : projectsData.filter(p => p.category === filter);

    return (
        <section id="projects" className="section" style={{ background: 'var(--bg-color)' }}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Featured Projects
                </motion.h2>

                <motion.div
                    style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '15px', marginBottom: '40px' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {['All', 'Robotics', 'IoT', 'Web'].map(cat => (
                        <button
                            key={cat}
                            onClick={() => handleFilterChange(cat)}
                            style={{
                                background: filter === cat ? 'var(--primary-color)' : 'transparent',
                                border: '1px solid var(--primary-color)',
                                color: filter === cat ? '#fff' : 'var(--primary-color)',
                                padding: '10px 24px',
                                borderRadius: '30px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                fontSize: '1.1rem',
                                fontWeight: '600'
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                <motion.div layout className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="glass-card"
                                style={{ padding: '30px', display: 'flex', flexDirection: 'column' }}
                            >
                                <div style={{ marginBottom: 'auto' }}>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--secondary-color)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                        {project.category}
                                    </span>
                                    <h3 style={{ margin: '15px 0', fontSize: '1.8rem', fontWeight: '700' }}>{project.title}</h3>

                                    <div style={{ marginTop: '20px' }}>
                                        <p style={{ marginBottom: '10px' }}><strong style={{ color: 'var(--text-main)' }}>Problem:</strong> <span style={{ color: 'var(--text-secondary)' }}>{project.problem}</span></p>
                                        <p style={{ marginBottom: '10px' }}><strong style={{ color: 'var(--text-main)' }}>Solution:</strong> <span style={{ color: 'var(--text-secondary)' }}>{project.solution}</span></p>
                                        <p><strong style={{ color: 'var(--text-main)' }}>Outcome:</strong> <span style={{ color: 'var(--text-secondary)' }}>{project.outcome}</span></p>
                                    </div>
                                </div>

                                <div style={{ marginTop: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                                    {project.tags.map(tag => (
                                        <span key={tag} style={{ background: 'rgba(255,255,255,0.1)', padding: '5px 10px', borderRadius: '4px', fontSize: '0.85rem' }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
