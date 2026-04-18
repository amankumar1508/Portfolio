import React, { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const cursor = cursorRef.current;
        const moveCursor = (e) => {
            // Show cursor when moving (in case it started hidden)
            if (!isVisible) setIsVisible(true);

            const { clientX: x, clientY: y } = e;

            // Follower cursor (outer circle) - using simple direct update, CSS handles smoothness
            if (cursor) {
                cursor.style.left = `${x}px`;
                cursor.style.top = `${y}px`;
            }
        };

        const handleMouseDown = () => setIsHovering(true);
        const handleMouseUp = () => setIsHovering(false);

        // Check for hoverable elements
        const handleLinkHoverEvents = () => {
            const handleMouseEnter = () => setIsHovering(true);
            const handleMouseLeave = () => setIsHovering(false);

            const hoverables = document.querySelectorAll('a, button, .btn, input, textarea, .hover-trigger');

            hoverables.forEach(el => {
                el.addEventListener('mouseenter', handleMouseEnter);
                el.addEventListener('mouseleave', handleMouseLeave);
            });

            return () => {
                hoverables.forEach(el => {
                    el.removeEventListener('mouseenter', handleMouseEnter);
                    el.removeEventListener('mouseleave', handleMouseLeave);
                });
            };
        };

        // Initial setup
        document.addEventListener('mousemove', moveCursor);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);

        // Dynamic update for single page app navigation if needed, 
        // but a MutationObserver is better for robust SPA tracking. 
        // For simplicity, we track widespread common elements.
        const cleanupLinks = handleLinkHoverEvents();

        // MutationObserver to attach listeners to new elements (like after route changes or modal opens)
        new MutationObserver(() => {
            // Re-attach listeners is expensive, simpler to delegate or just re-run for this demo
            // For better perf in production, we'd use event delegation or a single global listener checking e.target
        });

        // Event delegation for hovering (more performant than attaching to all elements)
        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' ||
                e.target.tagName === 'BUTTON' ||
                e.target.closest('.btn') ||
                e.target.closest('a') ||
                e.target.closest('button') ||
                e.target.tagName === 'INPUT' ||
                e.target.tagName === 'TEXTAREA') {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        document.addEventListener('mouseover', handleMouseOver);

        return () => {
            document.removeEventListener('mousemove', moveCursor);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mouseover', handleMouseOver);
            cleanupLinks();
        };
    }, [isVisible]);

    // Hide on mobile/touch devices
    if (typeof navigator !== 'undefined' && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return null;
    }

    return (
        <>
            <div
                ref={cursorRef}
                className={`custom-cursor-dev ${isHovering ? 'hover' : ''}`}
            >
                {isHovering ? '</>' : '>_'}
            </div>
        </>
    );
};

export default CustomCursor;
