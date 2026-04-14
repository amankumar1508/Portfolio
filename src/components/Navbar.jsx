import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { FaHome, FaUser, FaCode, FaFolderOpen, FaEnvelope, FaSun, FaMoon } from 'react-icons/fa';
import './Navbar.css';

const NAV_ITEMS = [
    { id: 'home', label: 'HOME', icon: <FaHome size={12} /> },
    { id: 'about', label: 'ABOUT', icon: <FaUser size={12} /> },
    { id: 'skills', label: 'TECH STACK', icon: <FaCode size={12} /> },
    { id: 'projects', label: 'PROJECTS', icon: <FaFolderOpen size={12} /> },
    { id: 'contact', label: 'CONTACT', icon: <FaEnvelope size={12} /> }
];

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const location = useLocation();
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Glass effect on scroll (inside os-content)
    useEffect(() => {
        const handleScroll = () => {
            const osContent = document.getElementById('os-content-scroll');
            if (osContent) {
                setScrolled(osContent.scrollTop > 50);
            } else {
                setScrolled(window.scrollY > 50);
            }
        };

        const osContent = document.getElementById('os-content-scroll');
        if (osContent) osContent.addEventListener('scroll', handleScroll);
        else window.addEventListener('scroll', handleScroll);

        return () => {
            if (osContent) osContent.removeEventListener('scroll', handleScroll);
            else window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleNavClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={`navbar flex justify-center py-6 px-6 relative z-50 ${scrolled ? 'scrolled' : ''}`}>

            {/* Desktop Navbar container (matching charmireddy EXACTLY) */}
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
                {NAV_ITEMS.map((item) => {
                    const targetPath = item.id === 'home' ? '/' : `/${item.id}`;
                    return (
                        <NavLink
                            key={item.id}
                            to={targetPath}
                            onClick={handleNavClick}
                            className={({ isActive }) => `flex items-center gap-2 text-[10px] md:text-xs tracking-widest font-semibold pb-1 border-b-2 transition-all duration-300 ${isActive ? 'text-[var(--primary-color)] border-[var(--primary-color)]' : 'text-[#6b7280] border-transparent hover:text-[var(--primary-color)] hover:border-[var(--primary-color)]/50'}`}
                            style={{ textDecoration: 'none' }}
                        >
                            {item.icon}
                            <span>{item.label}</span>
                        </NavLink>
                    );
                })}
            </div>

            {/* Absolute positioning for theme/mobile buttons to keep nav centered */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-4">
                <button
                    onClick={toggleTheme}
                    className="text-[#6b7280] hover:text-[var(--primary-color)] transition-colors bg-transparent border-none cursor-pointer"
                    aria-label="Toggle theme"
                >
                    {theme === 'dark' ? <FaSun size={14} /> : <FaMoon size={14} />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
