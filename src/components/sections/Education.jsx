import React from 'react';
import { motion } from 'framer-motion';
import { CardContainer, CardBody, CardItem } from '../ui/3d-card';
import { FaGraduationCap, FaSchool } from 'react-icons/fa';

const educationData = [
    {
        id: 1,
        degree: 'Bachelor of Engineering',
        specialization: 'Computer Engineering',
        institute: 'Swaminarayan University',
        duration: '2023 - 2027',
        result: '8.34 CGPA',
        description: 'Currently pursuing an undergraduate degree with a focus on core engineering principles, software development, and modern technologies.',
        icon: <FaGraduationCap />,
    },
    {
        id: 2,
        degree: '12th Grade (HSC)',
        specialization: 'Science (PCM)',
        institute: 'MLSM Darbhanga',
        duration: '2021 - 2023',
        result: '75%',
        description: 'Completed higher secondary education with a focus on Physics, Chemistry, and Mathematics, building a strong analytical foundation.',
        icon: <FaSchool />,
    }
];

const Education = () => {
    return (
        <section id="education" className="section py-20">
            <div className="container px-4 mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        My <span className="text-[var(--primary-color)]">Education</span>
                    </h2>
                    <p className="text-white/50 text-lg max-w-2xl mx-auto">
                        A summary of my academic journey and formal qualifications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {educationData.map((edu, index) => (
                        <CardContainer key={edu.id} containerClassName="py-10">
                            <CardBody
                                className="bg-[var(--bg-card)] backdrop-blur-md relative group/card dark:hover:shadow-2xl dark:hover:shadow-[var(--primary-color)]/[0.1] w-full h-auto rounded-xl p-8 border transition-all duration-300"
                                style={{ border: '1px solid var(--border-main)' }}
                            >
                                <CardItem
                                    translateZ="50"
                                    className="text-2xl font-bold text-white mb-2"
                                >
                                    {edu.degree}
                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="text-[var(--primary-color)] text-sm font-bold tracking-widest uppercase mb-4"
                                >
                                    {edu.specialization}
                                </CardItem>

                                <CardItem translateZ="100" className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-lg bg-[var(--primary-color)]/10 text-[var(--primary-color)] flex items-center justify-center text-xl">
                                        {edu.icon}
                                    </div>
                                    <div>
                                        <div className="text-white font-semibold">{edu.institute}</div>
                                        <div className="text-white/40 text-sm">{edu.duration}</div>
                                    </div>
                                </CardItem>

                                <CardItem
                                    translateZ="80"
                                    className="text-white/60 text-sm leading-relaxed mb-8"
                                >
                                    {edu.description}
                                </CardItem>

                                <div className="flex justify-between items-center mt-auto">
                                    <CardItem
                                        translateZ={20}
                                        className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-white/5 border border-white/10"
                                    >
                                        Result
                                    </CardItem>
                                    <CardItem
                                        translateZ={20}
                                        className="text-[var(--primary-color)] font-black text-xl"
                                    >
                                        {edu.result}
                                    </CardItem>
                                </div>
                            </CardBody>
                        </CardContainer>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
