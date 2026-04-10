import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const NAV_ITEMS = ['Home', 'About', 'Skills', 'Projects', 'Certificates', 'Contact'];

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });
    const navRef = useRef(null);
    const linkRefs = useRef({});

    // Glass effect on scroll
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // IntersectionObserver — auto-highlight section in view
    useEffect(() => {
        const observers = [];
        NAV_ITEMS.forEach(item => {
            const id = item.toLowerCase();
            const el = document.getElementById(id);
            if (!el) return;
            const observer = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
                { threshold: 0.2, rootMargin: '-60px 0px -40% 0px' }
            );
            observer.observe(el);
            observers.push(observer);
        });
        return () => observers.forEach(o => o.disconnect());
    }, []);

    // Move the sliding pill
    const updatePill = () => {
        const activeEl = linkRefs.current[activeSection];
        const containerEl = navRef.current;
        if (!activeEl || !containerEl) return;
        const containerRect = containerEl.getBoundingClientRect();
        const activeRect = activeEl.getBoundingClientRect();
        setPillStyle({
            left: activeRect.left - containerRect.left,
            width: activeRect.width,
        });
    };

    useEffect(() => {
        const raf = requestAnimationFrame(updatePill);
        return () => cancelAnimationFrame(raf);
    }, [activeSection]);

    useEffect(() => {
        window.addEventListener('resize', updatePill);
        return () => window.removeEventListener('resize', updatePill);
    }, [activeSection]);

    const handleNavClick = (e, item) => {
        e.preventDefault();
        const id = item.toLowerCase();
        setActiveSection(id);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="w-full px-6 lg:px-12 nav-content" style={{ height: 'var(--nav-height)' }}>

                {/* Logo */}
                <div
                    className="text-[1.1rem] font-extrabold tracking-wide w-[50px] h-[50px] flex items-center justify-center cursor-pointer rounded-[10px] border-2 border-[var(--primary-color)] shrink-0 transition-shadow duration-400"
                    style={{
                        background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        boxShadow: '0 0 12px rgba(168,85,247,0.35)',
                    }}
                    onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 22px rgba(168,85,247,0.65)'}
                    onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 12px rgba(168,85,247,0.35)'}
                    onClick={() => {
                        setActiveSection('home');
                        document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                >
                    AK
                </div>

                {/* Nav pill container */}
                <div ref={navRef} className="desktop-menu">
                    {/* Sliding background pill */}
                    <div
                        className="desktop-menu-pill"
                        style={{
                            left: pillStyle.left,
                            width: pillStyle.width,
                        }}
                    />

                    {NAV_ITEMS.map(item => {
                        const id = item.toLowerCase();
                        const isActive = activeSection === id;
                        return (
                            <a
                                key={item}
                                href={`#${id}`}
                                ref={el => { if (el) linkRefs.current[id] = el; }}
                                onClick={e => handleNavClick(e, item)}
                                className={`desktop-menu-link ${isActive ? 'active' : ''}`}
                            >
                                {item}
                            </a>
                        );
                    })}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {/* Theme toggle */}
                    <button
                        onClick={toggleTheme}
                        className="theme-toggle"
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? <FaSun /> : <FaMoon />}
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
                        aria-label="Toggle menu"
                    >
                        <div className="hamburger-lines">
                            <span className="line line1"></span>
                            <span className="line line2"></span>
                            <span className="line line3"></span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <div className="mobile-menu-inner">
                    {NAV_ITEMS.map(item => {
                        const id = item.toLowerCase();
                        const isActive = activeSection === id;
                        return (
                            <a
                                key={`mobile-${item}`}
                                href={`#${id}`}
                                onClick={e => handleNavClick(e, item)}
                                className={`mobile-menu-link ${isActive ? 'active' : ''}`}
                            >
                                {item}
                            </a>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
