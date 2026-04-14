import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { FaCog } from 'react-icons/fa';
import './ThemeSwitcher.css';

const themes = [
    { id: 'rose', name: 'Rose Slate', color: '#E2B4BD' },
    { id: 'emerald', name: 'Emerald Dusk', color: '#50C878' },
    { id: 'amber', name: 'Amber Wood', color: '#FFBF00' },
    { id: 'ice', name: 'Ice Silver', color: '#E2E8F0' },
];

const ThemeSwitcher = () => {
    const { colorTheme, setColorTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="theme-switcher-container z-[99999] fixed right-6 top-1/3">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: 20, scale: 0.8 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 20, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                        className="theme-panel glass-card p-4 rounded-xl mb-4 bg-zinc-900 border border-white/10"
                    >
                        <h4 className="text-xs font-semibold text-white/50 mb-3 uppercase tracking-wider text-center">Theme</h4>
                        <div className="flex flex-col gap-3">
                            {themes.map((t) => (
                                <button
                                    key={t.id}
                                    onClick={() => setColorTheme(t.id)}
                                    className={`w-8 h-8 rounded-full border-2 transition-all ${colorTheme === t.id ? 'scale-110 border-white' : 'border-transparent hover:scale-105'
                                        }`}
                                    style={{ backgroundColor: t.color }}
                                    title={t.name}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="w-12 h-12 flex items-center justify-center rounded-full glass-card bg-zinc-900/80 border border-white/20 text-white shadow-xl hover:bg-zinc-800 transition-colors ml-auto block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <motion.div
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <FaCog size={20} className={isOpen ? 'text-[var(--primary-color)]' : 'text-zinc-400'} />
                </motion.div>
            </motion.button>
        </div>
    );
};

export default ThemeSwitcher;
