"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import { IconDeviceDesktop, IconLoader3, IconMoon, IconSun } from '@tabler/icons-react';

type Position = {
    vertical: 'top' | 'bottom';
    horizontal: 'left' | 'right';
};

export function ModeToggle({ className }: { className: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [position, setPosition] = useState<Position>({ vertical: 'bottom', horizontal: 'right' });
    const { theme, setTheme } = useTheme();
    const dropdownRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    // Ensure component is mounted before showing theme
    useEffect(() => {
        setMounted(true);
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const calculatePosition = (): Position => {
        if (!buttonRef.current) return { vertical: 'bottom', horizontal: 'right' };

        const buttonRect = buttonRef.current.getBoundingClientRect();
        const dropdownHeight = 120;
        const dropdownWidth = 144; 
        const margin = 8;

        const viewportHeight = window.innerHeight;
        const viewportWidth = window.innerWidth;

        // Determine vertical position
        const spaceBelow = viewportHeight - buttonRect.bottom;
        const spaceAbove = buttonRect.top;
        const vertical = spaceBelow >= dropdownHeight + margin ? 'bottom' :
            spaceAbove >= dropdownHeight + margin ? 'top' : 'bottom';

        // Determine horizontal position
        const spaceRight = viewportWidth - buttonRect.left;
        const spaceLeft = buttonRect.right;
        const horizontal = spaceRight >= dropdownWidth + margin ? 'right' :
            spaceLeft >= dropdownWidth + margin ? 'left' : 'right';

        return { vertical, horizontal };
    };

    const handleToggle = () => {
        if (!isOpen) {
            const newPosition = calculatePosition();
            setPosition(newPosition);
        }
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (isOpen) {
                const newPosition = calculatePosition();
                setPosition(newPosition);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isOpen]);

    if (!mounted) {
        return (
            <button className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 transition-all">
                <IconLoader3 />
            </button>
        );
    }

    const handleThemeChange = (newTheme: string) => {
        setTheme(newTheme);
        setIsOpen(false);
    };

    const getPositionClasses = () => {
        const classes = [];

        if (position.vertical === 'bottom') {
            classes.push('top-full mt-2');
        } else {
            classes.push('bottom-full mb-2');
        }

        if (position.horizontal === 'right') {
            classes.push('right-0');
        } else {
            classes.push('left-0');
        }

        return classes.join(' ');
    };

    return (
        <div className={cn("relative rounded-lg border border-gray-300 dark:border-gray-600", className)} ref={dropdownRef}>
            <button
                ref={buttonRef}
                onClick={handleToggle}
                className="p-2 rounded-lg overflow-hidden hover:bg-gray-50 dark:hover:bg-white/30 transition-colors duration-200 flex items-center justify-center"
                aria-label="Toggle theme"
            >
                {theme === 'dark' ? (
                    <IconMoon />
                ) : theme === 'light' ? (
                    <IconSun />
                ) : (
                    <IconDeviceDesktop />
                )}
            </button>

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 z-[9998]"
                        onClick={() => setIsOpen(false)}
                    />
                    <div
                        className={cn(
                            "absolute w-36 bg-white dark:bg-black rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-[9999] animate-in fade-in-0 zoom-in-95",
                            getPositionClasses()
                        )}
                        style={{
                            animationDuration: '150ms',
                            animationTimingFunction: 'ease-out'
                        }}
                    >
                        <button
                            onClick={() => handleThemeChange('light')}
                            className={`cursor-pointer w-full px-3 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-white/10 flex items-center gap-3 transition-colors ${theme === 'light' ? 'bg-gray-100 dark:bg-white/15 font-medium' : ''
                                }`}
                        >
                            <IconSun />
                            Light
                        </button>

                        <button
                            onClick={() => handleThemeChange('dark')}
                            className={`cursor-pointer w-full px-3 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-white/10 flex items-center gap-3 transition-colors ${theme === 'dark' ? 'bg-gray-100 dark:bg-white/15 font-medium' : ''
                                }`}
                        >
                            <IconMoon />
                            Dark
                        </button>

                        <button
                            onClick={() => handleThemeChange('system')}
                            className={`cursor-pointer w-full px-3 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-white/10 flex items-center gap-3 transition-colors ${theme === 'system' ? 'bg-gray-100 dark:bg-white/15 font-medium' : ''
                                }`}
                        >
                            <IconDeviceDesktop />
                            System
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}