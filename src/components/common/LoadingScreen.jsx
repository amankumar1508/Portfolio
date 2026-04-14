import React, { useState, useEffect } from 'react';

const LoadingScreen = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const duration = 2800; // Finish right before 3000ms
        const intervalTime = 30;
        const steps = duration / intervalTime;
        let currentStep = 0;

        const interval = setInterval(() => {
            currentStep++;
            const newProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
            setProgress(newProgress);

            if (currentStep >= steps) {
                clearInterval(interval);
            }
        }, intervalTime);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] text-white">
            {/* Animated Dark Background */}
            <div className="absolute inset-0 z-[-1] overflow-hidden">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#8b5cf6] opacity-[0.2] blur-[120px] rounded-full mix-blend-screen animate-pulse"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#3b82f6] opacity-[0.15] blur-[150px] rounded-full mix-blend-screen animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="flex flex-col items-center justify-center gap-6">
                <div className="text-6xl md:text-8xl font-black tracking-tighter tabular-nums text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                    {progress}%
                </div>

                <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-75 ease-linear rounded-full"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                <div className="text-gray-400 text-sm font-mono tracking-widest uppercase mt-4 animate-pulse">
                    Initializing System
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
