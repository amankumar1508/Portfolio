import React, { useMemo } from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiMongodb, SiPostgresql, SiMysql, SiRedux, SiReactrouter, SiTailwindcss, SiJavascript, SiTypescript, SiFirebase, SiSupabase, SiPrisma, SiNextdotjs } from 'react-icons/si';

const LOGOS = [
    <FaReact className="w-full h-full text-[#61DAFB]" />,
    <FaNodeJs className="w-full h-full text-[#339933]" />,
    <SiMongodb className="w-full h-full text-[#47A248]" />,
    <SiPostgresql className="w-full h-full text-[#4169E1]" />,
    <SiMysql className="w-full h-full text-[#4479A1]" />,
    <SiRedux className="w-full h-full text-[#764ABC]" />,
    <SiReactrouter className="w-full h-full text-[#CA4245]" />,
    <SiTailwindcss className="w-full h-full text-[#38B2AC]" />,
    <SiJavascript className="w-full h-full text-[#F7DF1E]" />,
    <SiTypescript className="w-full h-full text-[#3178C6]" />,
    <SiFirebase className="w-full h-full text-[#FFCA28]" />,
    <SiSupabase className="w-full h-full text-[#3ECF8E]" />,
    <SiPrisma className="w-full h-full text-[#2D3748]" />,
    <SiNextdotjs className="w-full h-full text-white/70" />,
    <FaHtml5 className="w-full h-full text-[#E34F26]" />,
    <FaCss3Alt className="w-full h-full text-[#1572B6]" />,
];

const FloatingLogos = () => {
    const icons = useMemo(() => {
        return Array.from({ length: 25 }).map((_, i) => {
            const size = Math.random() * 45 + 18;
            const depth = size / 70;
            return {
                id: i,
                logoIndex: Math.floor(Math.random() * LOGOS.length),
                size,
                left: Math.random() * 100,
                delay: Math.random() * 20,
                duration: (Math.random() * 20 + 25) / depth,
                opacity: Math.max(0.25, depth * 0.8),
                rotation: Math.random() * 360,
                rotationDir: Math.random() > 0.5 ? 1 : -1,
                depth,
            };
        });
    }, []);

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#020617]">
            {icons.map((item) => {
                return (
                    <div
                        key={item.id}
                        className="absolute opacity-0 flex items-center justify-center"
                        style={{
                            left: `${item.left}%`,
                            width: `${item.size}px`,
                            height: `${item.size}px`,
                            animation: `floatUp ${item.duration}s linear infinite`,
                            animationDelay: `-${item.delay}s`,
                            bottom: '-15%',
                            willChange: 'transform, opacity',
                            zIndex: Math.floor(item.size),
                        }}
                    >
                        <div style={{ transform: `rotate(${item.rotation}deg)`, width: '100%', height: '100%', opacity: item.opacity }}>
                            <div
                                className="w-full h-full"
                                style={{
                                    animation: `spinAndSway ${item.duration * 0.4}s ease-in-out infinite alternate`,
                                    animationDirection: item.rotationDir === 1 ? 'normal' : 'reverse'
                                }}
                            >
                                {LOGOS[item.logoIndex]}
                            </div>
                        </div>
                    </div>
                );
            })}

            {/* Sci-Fi Ambient Gradient Underlay mapped to theme primary-rgb */}
            <div
                className="absolute inset-0 pointer-events-none mix-blend-multiply"
                style={{ background: 'radial-gradient(ellipse at center, rgba(var(--primary-rgb), 0.15) 0%, rgba(5, 3, 10, 0.7) 50%, rgba(5, 3, 10, 1) 100%)' }}
            ></div>
            <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>
        </div>
    );
};

export default FloatingLogos;
