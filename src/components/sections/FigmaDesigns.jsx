import React from 'react';
import { motion } from 'framer-motion';
import { FaFigma, FaExternalLinkAlt } from 'react-icons/fa';

const figmaData = [
    {
        id: 1,
        title: 'Air India – Website Redesign',
        description: 'My very first design project! Focused on modernizing the user interface for flight booking and loyalty management while maintaining brand identity.',
        image: '/projects/air-india.png',
        figmaLink: 'https://www.figma.com/design/D0XUyHOhbda1x309CtRYEQ/Untitled?node-id=1-6&t=WpMROvbUJUmlpihL-1',
    }
];

const FigmaDesigns = () => {
    return (
        <section id="figma" className="section py-20 bg-[var(--bg-dark)]">
            <div className="container px-4 mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        UI/UX <span className="text-[var(--primary-color)]">Figma Designs</span>
                    </h2>
                    <p className="text-white/50 text-lg max-w-2xl mx-auto">
                        Showcasing my design process and interface designs created using Figma.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {figmaData.map((design, index) => (
                        <motion.div
                            key={design.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md"
                        >
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={design.image}
                                    alt={design.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <a
                                        href={design.figmaLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-6 py-3 bg-[var(--primary-color)] text-white rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                                    >
                                        <FaFigma size={18} /> View on Figma
                                    </a>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-3">{design.title}</h3>
                                <p className="text-white/60 mb-4 leading-relaxed">{design.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FigmaDesigns;
