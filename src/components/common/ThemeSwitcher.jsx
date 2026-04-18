import React, { useState, useRef, useEffect } from 'react';
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
    const dropdownRef = useRef(null);

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative flex items-center justify-center z-[100]" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-[#6b7280] hover:text-[var(--primary-color)] transition-colors bg-transparent border-none cursor-pointer flex items-center"
                aria-label="Color theme settings"
            >
                <div
                    style={{ transform: `rotate(${isOpen ? 90 : 0}deg)`, transition: 'transform 0.3s' }}
                >
                    <FaCog size={14} className={isOpen ? 'text-[var(--primary-color)]' : ''} />
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full right-0 mt-3 theme-panel glass-card p-3 rounded-xl bg-[#0a0f1c]/95 backdrop-blur-xl border border-white/10 shadow-2xl"
                        style={{ minWidth: 'max-content' }}
                    >
                        <h4 className="text-[10px] font-bold text-white/50 mb-2 uppercase tracking-widest text-center">Color Accent</h4>
                        <div className="flex gap-2">
                            {themes.map((t) => (
                                <button
                                    key={t.id}
                                    onClick={() => {
                                        setColorTheme(t.id);
                                    }}
                                    className={`w-6 h-6 rounded-full border-2 transition-all ${colorTheme === t.id ? 'scale-110 border-white shadow-[0_0_10px_var(--primary-color)]' : 'border-transparent hover:scale-105'
                                        }`}
                                    style={{ backgroundColor: t.color }}
                                    title={t.name}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ThemeSwitcher;
