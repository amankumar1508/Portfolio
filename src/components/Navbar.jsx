import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { FaHome, FaUser, FaCode, FaFolderOpen, FaAward, FaEnvelope, FaSun, FaMoon, FaFigma, FaTrophy, FaStar, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import ThemeSwitcher from './common/ThemeSwitcher';
import './Navbar.css';

const NAV_ITEMS = [
    { id: 'home', label: 'HOME', icon: <FaHome size={12} /> },
    { id: 'about', label: 'ABOUT', icon: <FaUser size={12} /> },
    { id: 'skills', label: 'TECH STACK', icon: <FaCode size={12} /> },
    { id: 'projects', label: 'PROJECTS', icon: <FaFolderOpen size={12} /> },
    { id: 'figma', label: 'FIGMA', icon: <FaFigma size={12} /> },
    { id: 'hackathons', label: 'HACKATHONS', icon: <FaTrophy size={11} /> },
    { id: 'achievements', label: 'ACHIEVEMENTS', icon: <FaStar size={12} /> },
    { id: 'education', label: 'EDUCATION', icon: <FaGraduationCap size={12} /> },
    { id: 'certificates', label: 'CERTIFICATES', icon: <FaAward size={12} /> },
    { id: 'contact', label: 'CONTACT', icon: <FaEnvelope size={12} /> }
];

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const location = useLocation();
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollEl = document.getElementById('os-content-scroll');
            if (scrollEl && scrollEl.scrollTop > 20) {
                setIsScrolling(true);
            } else {
                setIsScrolling(false);
            }
        };
        document.getElementById('os-content-scroll')?.addEventListener('scroll', handleScroll);
        return () => document.getElementById('os-content-scroll')?.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`sticky top-0 z-[100] h-12 w-full flex items-center justify-center transition-all duration-300 pointer-events-auto ${isScrolling ? 'bg-[var(--bg-dark)] backdrop-blur-xl border-b border-white/5 opacity-40 hover:opacity-100 shadow-lg' : 'bg-transparent backdrop-blur-sm border-b border-transparent opacity-100'}`}>
            {/* Scroll Progress Bar */}
            <div className={`absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] transition-all duration-300 ${isScrolling ? 'opacity-100' : 'opacity-0'}`} style={{ width: 'var(--scroll-progress, 0%)' }} />

            {/* Main Navigation Container */}
            <div className="flex bg-[var(--bg-card)] backdrop-blur-3xl px-6 py-2 rounded-full border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.5)] overflow-x-auto hide-scrollbar max-w-[85vw] gap-6 md:gap-8 hover:brightness-110 hover:border-white/20 transition-all duration-300">
                {NAV_ITEMS.map((item) => {
                    const targetPath = item.id === 'home' ? '/' : `/${item.id}`;
                    const isActive = location.pathname === targetPath;
                    const commonClasses = `flex items-center gap-2 text-[10px] md:text-xs tracking-widest font-semibold pb-1 border-b-2 transition-all duration-300`;

                    if (item.id === 'resume') {
                        return (
                            <a
                                key={item.id}
                                href="/aman_kumar.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${commonClasses} text-[#6b7280] border-transparent hover:text-[var(--primary-color)] hover:border-[var(--primary-color)]/50`}
                                style={{ textDecoration: 'none' }}
                            >
                                {item.icon}
                                <span>{item.label}</span>
                            </a>
                        );
                    }

                    return (
                        <NavLink
                            key={item.id}
                            to={targetPath}
                            className={`${commonClasses} ${isActive ? 'text-[var(--primary-color)] border-[var(--primary-color)]' : 'text-[#6b7280] border-transparent hover:text-[var(--primary-color)] hover:border-[var(--primary-color)]/50'}`}
                            style={{ textDecoration: 'none' }}
                        >
                            {item.icon}
                            <span>{item.label}</span>
                        </NavLink>
                    );
                })}
            </div>

            {/* Absolute positioning for theme/mobile buttons to keep nav centered */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-5">
                <ThemeSwitcher />
                <div className="w-px h-4 bg-white/10"></div>
                <button
                    onClick={toggleTheme}
                    className="text-[#6b7280] hover:text-[var(--primary-color)] transition-colors bg-transparent border-none cursor-pointer flex items-center"
                    aria-label="Toggle dark/light mode"
                >
                    {theme === 'dark' ? <FaSun size={14} /> : <FaMoon size={14} />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
