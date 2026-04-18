import React, { useReducer, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { SiLeetcode } from 'react-icons/si';
import emailjs from '@emailjs/browser';

// useReducer: Managing complex form state
const initialState = {
    name: '',
    email: '',
    message: '',
    status: 'idle', // idle, submitting, success, error
    errors: {}
};

const formReducer = (state, action) => {
    switch (action.type) {
        case 'SET_FIELD':
            return {
                ...state,
                [action.field]: action.value,
                errors: { ...state.errors, [action.field]: '' }
            };
        case 'SUBMIT_START':
            return { ...state, status: 'submitting' };
        case 'SUBMIT_SUCCESS':
            return { ...initialState, status: 'success' };
        case 'SUBMIT_ERROR':
            return { ...state, status: 'error', errors: action.errors };
        case 'RESET_STATUS':
            return { ...state, status: 'idle' };
        default:
            return state;
    }
};

const LoadingSpinner = () => (
    <svg className="w-5 h-5" style={{ animation: 'spin 1s linear infinite' }} viewBox="0 0 24 24" fill="none">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </svg>
);

const InputField = ({ label, name, type = "text", value, error, isTextArea = false, onChange, onFocus, onBlur, focusedField }) => {
    const isFocused = focusedField === name;
    const hasValue = value.length > 0;
    const isActive = isFocused || hasValue;

    const baseInputClasses = `w-full px-4 py-3 rounded-xl text-[var(--text-main)] text-base outline-none transition-all duration-300 
        bg-[var(--bg-card)] border ${error ? 'border-red-500' : isFocused ? 'border-[var(--primary-color)]' : 'border-[var(--border-main)]'}`;

    const focusGlowStyle = isFocused ? {
        boxShadow: '0 0 15px rgba(var(--primary-rgb), 0.3), 0 0 30px rgba(var(--primary-rgb), 0.1)',
        animation: 'focus-glow-pulse 2s ease-in-out infinite'
    } : {};

    return (
        <div className="relative mb-6">
            <label
                className={`absolute left-4 transition-all duration-300 pointer-events-none ${isActive
                    ? 'top-[-10px] text-xs px-2 bg-[var(--bg-card)] rounded'
                    : 'top-3 text-sm'
                    }`}
                style={{ color: isFocused ? 'var(--primary-color)' : 'var(--text-secondary)' }}
            >
                {label}
            </label>
            {isTextArea ? (
                <textarea
                    name={name}
                    value={value}
                    onChange={onChange}
                    onFocus={() => onFocus(name)}
                    onBlur={() => onBlur(null)}
                    rows="4"
                    className={baseInputClasses + ' resize-none'}
                    style={focusGlowStyle}
                />
            ) : (
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onFocus={() => onFocus(name)}
                    onBlur={() => onBlur(null)}
                    className={baseInputClasses}
                    style={focusGlowStyle}
                />
            )}
            {error && (
                <span className="absolute bottom-[-20px] left-0 text-red-400 text-xs">
                    {error}
                </span>
            )}
        </div>
    );
};

const Contact = () => {
    const [state, dispatch] = useReducer(formReducer, initialState);
    const [focusedField, setFocusedField] = useState(null);

    const validate = () => {
        const errors = {};
        if (!state.name.trim()) errors.name = 'Name is required';
        if (!state.email.includes('@')) errors.email = 'Valid email is required';
        if (state.message.length < 10) errors.message = 'Message must be at least 10 characters';
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validate();
        if (Object.keys(errors).length > 0) {
            dispatch({ type: 'SUBMIT_ERROR', errors });
            return;
        }
        try {
            dispatch({ type: 'SUBMIT_START' });

            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            const isPlaceholder = (val) => !val || val.includes('your_') || val.length < 5;

            if (isPlaceholder(serviceId) || isPlaceholder(templateId) || isPlaceholder(publicKey)) {
                console.warn("EmailJS configuration is missing. Simulating success for demo purposes. Please add your VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY to your .env file to enable real emails.");
                await new Promise(resolve => setTimeout(resolve, 1500));
            } else {
                const templateParams = {
                    from_name: state.name,
                    from_email: state.email,
                    to_name: 'Aman',
                    message: state.message,
                    reply_to: state.email,
                };

                await emailjs.send(
                    serviceId,
                    templateId,
                    templateParams,
                    publicKey
                );
            }
            dispatch({ type: 'SUBMIT_SUCCESS' });
            setTimeout(() => dispatch({ type: 'RESET_STATUS' }), 4000);
        } catch (err) {
            dispatch({ type: 'SUBMIT_ERROR', errors: { submit: err.message || 'Failed to send message.' } });
        }
    };

    const handleChange = (e) => {
        dispatch({ type: 'SET_FIELD', field: e.target.name, value: e.target.value });
    };

    const socialLinks = [
        { icon: <FaLinkedin size={20} />, href: 'https://www.linkedin.com/in/aman-kumar-067825379/', label: 'LinkedIn', color: '#0077b5' },
        { icon: <FaGithub size={20} />, href: 'https://github.com/amankumarb778-crypto', label: 'GitHub', color: '#fff' },
        { icon: <SiLeetcode size={20} />, href: 'https://leetcode.com/u/OVzm6rcAP2/', label: 'LeetCode', color: '#f89f1b' },
        { icon: <FaTwitter size={20} />, href: 'https://twitter.com/yourusername', label: 'Twitter', color: '#1DA1F2' },
        { icon: <FaYoutube size={20} />, href: 'https://youtube.com/@yourchannel', label: 'YouTube', color: '#FF0000' },
    ];

    const contactDetails = [
        { icon: <MdEmail />, text: 'aman.kr.cg@gmail.com', href: 'mailto:aman.kr.cg@gmail.com' },
        { icon: <FaPhone />, text: '+91 92798 11913', href: 'tel:+919279811913' },
        { icon: <FaMapMarkerAlt />, text: 'India', href: null },
    ];

    return (
        <section id="contact" className="min-h-full flex flex-col justify-center py-20 px-4 relative overflow-hidden">
            <div
                className="absolute top-1/2 left-[20%] w-[600px] h-[600px] pointer-events-none z-0"
                style={{
                    background: 'radial-gradient(circle, rgba(var(--primary-rgb), 0.12) 0%, transparent 70%)',
                    transform: 'translate(-50%, -50%)',
                }}
            />
            <div
                className="absolute bottom-0 right-[10%] w-[400px] h-[400px] pointer-events-none z-0"
                style={{
                    background: 'radial-gradient(circle, rgba(var(--primary-rgb), 0.08) 0%, transparent 70%)',
                }}
            />

            <div className="container relative z-10 w-full max-w-[1000px] mx-auto">
                <motion.h2
                    className="text-4xl md:text-5xl font-extrabold mb-12 text-white text-center tracking-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    Get In <motion.span
                        style={{ color: 'var(--primary-color)', display: 'inline-block' }}
                        animate={{ textShadow: ['0 0 0px var(--primary-color)', '0 0 20px var(--primary-color)', '0 0 0px var(--primary-color)'] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >Touch</motion.span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="rounded-2xl overflow-hidden"
                    style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(20px)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
                        border: '1px solid var(--border-main)'
                    }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {/* Left Side: Info */}
                        <div
                            className="p-10 md:p-14 flex flex-col justify-between relative overflow-hidden"
                            style={{ background: 'var(--bg-card)', borderRight: '1px solid var(--border-main)' }}
                        >
                            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-[var(--primary-color)] opacity-5 pointer-events-none" />
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-[var(--primary-color)] opacity-5 pointer-events-none" />

                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--text-main)]">Let's Work Together</h2>
                                <p className="text-[var(--text-secondary)] leading-relaxed mb-10 text-lg">
                                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                                </p>

                                <div className="flex flex-col gap-5">
                                    {contactDetails.map((detail, idx) => {
                                        const Content = (
                                            <>
                                                <span className="bg-[var(--primary-color)]/10 text-[var(--primary-color)] p-2.5 rounded-full flex items-center justify-center">
                                                    {detail.icon}
                                                </span>
                                                {detail.text}
                                            </>
                                        );

                                        return detail.href ? (
                                            <motion.a
                                                key={idx}
                                                href={detail.href}
                                                className="flex items-center gap-4 text-[var(--text-main)] hover:text-[var(--primary-color)] transition-colors no-underline text-base"
                                                whileHover={{ x: 8 }}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.3 + idx * 0.1 }}
                                            >
                                                {Content}
                                            </motion.a>
                                        ) : (
                                            <div key={idx} className="flex items-center gap-4 text-[var(--text-secondary)] text-base">
                                                {Content}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="flex gap-4 mt-10 relative z-10">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{
                                            scale: 1.15,
                                            y: -8,
                                            backgroundColor: social.color + '33',
                                            color: social.color,
                                            borderColor: social.color,
                                            boxShadow: `0 10px 20px ${social.color}22`
                                        }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 + index * 0.1, type: 'spring', stiffness: 300 }}
                                        className="flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--bg-card)] text-[var(--text-main)] border border-white/10 shadow-lg transition-all duration-300"
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Right Side: Form */}
                        <div className="p-10 md:p-14" style={{ background: 'rgba(var(--primary-rgb), 0.03)' }}>
                            <h3 className="text-xl font-semibold mb-8 text-[var(--text-main)]">Send me a message</h3>

                            <form onSubmit={handleSubmit}>
                                <InputField label="Your Name" name="name" value={state.name} error={state.errors.name} onChange={handleChange} onFocus={setFocusedField} onBlur={setFocusedField} focusedField={focusedField} />
                                <InputField label="Email Address" name="email" type="email" value={state.email} error={state.errors.email} onChange={handleChange} onFocus={setFocusedField} onBlur={setFocusedField} focusedField={focusedField} />
                                <InputField label="Your Message" name="message" isTextArea value={state.message} error={state.errors.message} onChange={handleChange} onFocus={setFocusedField} onBlur={setFocusedField} focusedField={focusedField} />

                                {state.status === 'success' && (
                                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-4 p-3 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-sm text-center">
                                        ✓ Message sent successfully!
                                    </motion.div>
                                )}

                                {(state.errors.submit || state.status === 'error') && (
                                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm text-center">
                                        {state.errors.submit || "Please fix errors above."}
                                    </motion.div>
                                )}

                                <motion.button
                                    whileHover={{ scale: state.status === 'submitting' ? 1 : 1.02 }}
                                    whileTap={{ scale: state.status === 'submitting' ? 1 : 0.98 }}
                                    type="submit"
                                    disabled={state.status === 'submitting'}
                                    className="w-full py-4 rounded-xl text-zinc-900 border-none text-base font-bold cursor-pointer flex items-center justify-center gap-2.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                                    style={{
                                        background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
                                        boxShadow: '0 10px 25px -5px rgba(var(--primary-rgb), 0.4)',
                                    }}
                                >
                                    {state.status === 'submitting' ? (
                                        <>
                                            <LoadingSpinner />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <FaPaperPlane size={14} />
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
