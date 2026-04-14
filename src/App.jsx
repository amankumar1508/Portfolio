import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Certificates from './components/sections/Certificates';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import './App.css';
import CustomCursor from './components/common/CustomCursor';
import ThemeSwitcher from './components/common/ThemeSwitcher';
import Loader from './components/common/Loader';
import FloatingLogos from './components/common/FloatingLogos';
import PageNavigator from './components/common/PageNavigator';

import { useTheme } from './context/ThemeContext';

function App() {
  const { theme } = useTheme();
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [isLoading, setIsLoading] = useState(true);
  const [isAppVisible, setIsAppVisible] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="App">
      <CustomCursor />
      <ThemeSwitcher />

      {/* Loading Screen Overlay */}
      {isLoading && (
        <Loader
          onStartExiting={() => setIsAppVisible(true)}
          onComplete={() => setIsLoading(false)}
        />
      )}

      <div
        className={`transition-all duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] ${!isAppVisible ? 'opacity-0 scale-[0.96] blur-md' : 'opacity-100 scale-100 blur-0'
          }`}
      >
        {/* Global Animated Floating Logos Background */}
        <FloatingLogos />

        {/* Global Directional Navigators (Outside Window) */}
        <PageNavigator />

        <div className="os-window">
          {/* Premium Terminal Title Bar */}
          <div className="os-titlebar relative flex items-center justify-between px-4 py-3 bg-[#0a0f1c]/50 border-b border-white/5 shadow-sm">
            {/* Left: Terminal Path */}
            <div className="flex items-center gap-2 z-10">
              <div className="w-3 h-3 rounded-full bg-[var(--primary-color)]/20 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary-color)] animate-pulse"></div>
              </div>
              <span className="font-mono text-[11px] md:text-xs text-[var(--primary-color)]/90 tracking-widest font-semibold flex items-center gap-2">
                <span>aman@portfolio</span>
                <span className="text-white/30 hidden sm:inline">:</span>
                <span className="text-white/50 hidden sm:inline">~/FULL_STACK_DEV</span>
              </span>
            </div>

            {/* Center: Time (absolute to stay perfectly centered) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-white/40 font-mono text-[10px] md:text-xs tracking-wider">
                {time}
              </span>
            </div>

            {/* Right: Window Controls (SVGs for perfect baseline alignment) */}
            <div className="flex items-center gap-4 z-10 opacity-70">
              {/* Minimize */}
              <button aria-label="Minimize" className="text-white/50 hover:text-white transition-colors">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 6H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
              {/* Maximize */}
              <button aria-label="Maximize" className="text-white/50 hover:text-[var(--primary-color)] transition-colors">
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1.5" y="1.5" width="9" height="9" stroke="currentColor" strokeWidth="1.5" rx="1" />
                </svg>
              </button>
              {/* Close */}
              <button aria-label="Close" className="text-white/50 hover:text-red-400 transition-colors">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 3L9 9M9 3L3 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* Inner Content Area */}
          <div className="os-content" id="os-content-scroll">
            <Navbar />

            {/* Main Viewport Routing */}
            <Routes>
              <Route path="/" element={<><Helmet><title>Aman | Developer Portfolio</title></Helmet><Hero /></>} />
              <Route path="/about" element={<><Helmet><title>About | Aman Kumar</title></Helmet><About /></>} />
              <Route path="/skills" element={<><Helmet><title>Skills & Tech Stack</title></Helmet><Skills /></>} />
              <Route path="/projects" element={<><Helmet><title>Projects Portfolio</title></Helmet><Projects /></>} />
              <Route path="/certificates" element={<><Helmet><title>Certifications</title></Helmet><Certificates /></>} />
              <Route path="/contact" element={<><Helmet><title>Contact Me</title></Helmet><Contact /></>} />
            </Routes>

            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
