import React from 'react';
import './Footer.css';
import { motion } from 'framer-motion';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { name: 'GitHub', url: 'https://github.com/amankumarb778-crypto', icon: 'fab fa-github' },
        { name: 'LinkedIn', url: 'https://linkedin.com/in/aman-kumar-067825379/', icon: 'fab fa-linkedin' },
        { name: 'LeetCode', url: 'https://leetcode.com/u/OVzm6rcAP2/', icon: 'fas fa-code' },
        { name: 'Twitter', url: 'https://twitter.com/yourusername', icon: 'fab fa-twitter' },
        { name: 'YouTube', url: 'https://youtube.com/@yourchannel', icon: 'fab fa-youtube' }
    ];

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Aman.<span>dev</span>
                        </motion.h2>
                        <p>Building digital experiences with passion and precision.</p>
                    </div>

                    <div className="footer-links">
                        <div className="footer-nav">
                            <h3>Navigation</h3>
                            <ul>
                                {navLinks.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href}>{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="footer-social">
                            <h3>Connect</h3>
                            <div className="social-icons">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ y: -5, color: 'var(--primary-color)' }}
                                        title={social.name}
                                    >
                                        <i className={social.icon}></i>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Aman Kumar. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <a href="#privacy">Privacy Policy</a>
                        <a href="#terms">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
