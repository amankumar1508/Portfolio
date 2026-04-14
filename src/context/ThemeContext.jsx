/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('portfolio-theme') || 'dark';
    });

    const [colorTheme, setColorTheme] = useState(() => {
        return localStorage.getItem('portfolio-color-theme') || 'rose';
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('portfolio-theme', theme);
    }, [theme]);

    useEffect(() => {
        document.documentElement.setAttribute('data-color', colorTheme);
        localStorage.setItem('portfolio-color-theme', colorTheme);
    }, [colorTheme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, colorTheme, setColorTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

