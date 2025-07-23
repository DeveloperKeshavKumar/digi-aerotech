'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, inView } from 'motion/react';
import { TrendingUp } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface Logo {
    name?: string;
    url?: string;
    icon?: React.ReactNode;
    image?: string; // Added image property
}

interface CompaniesProps {
    logos: Logo[];
    title?: string;
    description?: string;
    rows?: number;
    speed?: 'slow' | 'medium' | 'fast';
}

export const Companies = ({
    logos = [],
    title = 'Our Partners',
    description = 'Trusted by businesses across industries',
    rows = 2,
    speed = 'medium',
}: CompaniesProps) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (sectionRef.current) {
            inView(sectionRef.current, () => {
                setVisible(true);
            }, { margin: '-50px' });
        }
    }, []);

    const industryRows = Array.from({ length: rows }).map((_, i) => logos);

    const speedClasses = {
        slow: '60s',
        medium: '40s',
        fast: '20s',
    };

    const TopicRow = ({
        items,
        direction = 'left',
        delay = 0,
    }: {
        items: Logo[];
        direction: 'left' | 'right';
        delay: number;
    }) => {
        const getRowItems = (colIndex: number) => {
            const startPos = Math.floor(items.length * (colIndex / rows));
            const baseItems = [...items.slice(startPos), ...items.slice(0, startPos)];

            // Calculate how many duplications we need to fill screen width
            // Using average item width of ~120px (min-width + padding + gap)
            const itemWidth = 120; // Estimated average width including padding and gaps
            const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1920;
            const itemsNeeded = Math.ceil((screenWidth * 2) / itemWidth);
            const duplications = Math.ceil(itemsNeeded / baseItems.length);

            // Create enough duplicated items to fill the screen
            const fullItems = [];
            for (let i = 0; i < duplications; i++) {
                fullItems.push(...baseItems);
            }

            return fullItems;
        };
        const rowItems = getRowItems(delay);

        // Render icon or image appropriately with flexible sizing
        const renderLogoContent = (item: Logo) => {
            if (item.image) {
                return (
                    <Image
                        src={item.image}
                        alt={item.name || 'company logo'}
                        width={120}
                        height={60}
                        className="max-w-[120px] max-h-[60px] w-auto h-auto object-contain"
                    />
                );
            } else if (item.icon) {
                return (
                    <div className="w-8 h-8 text-gray-700 dark:text-gray-300 flex items-center justify-center">
                        {item.icon}
                    </div>
                );
            } else {
                return <TrendingUp className="w-6 h-6 text-gray-500 dark:text-gray-400" />;
            }
        };

        return (
            <div className="overflow-hidden py-4 whitespace-nowrap relative w-full">
                {/* Enhanced blur gradients for full width */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 dark:from-gray-950 via-gray-50/80 dark:via-gray-950/80 to-transparent z-10 backdrop-blur-sm" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 dark:from-gray-950 via-gray-50/80 dark:via-gray-950/80 to-transparent z-10 backdrop-blur-sm" />

                <div
                    className={`inline-flex items-center gap-6 ${direction === 'left'
                        ? 'animate-scroll-left-infinite'
                        : 'animate-scroll-right-infinite'
                        }`}
                    style={{
                        animationDelay: `${delay}ms`,
                        animationDuration: speedClasses[speed],
                        animationTimingFunction: 'linear',
                        animationIterationCount: 'infinite',
                        width: 'max-content',
                        minWidth: '200%', 
                    }}
                >
                    {rowItems.map((item, index) => (
                        <Link
                            href={item.url || '#'}
                            key={index}
                            title={item.name || 'company logo'}
                            className="flex-shrink-0 flex items-center justify-center min-w-[80px] min-h-[60px] px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-sm"
                        >
                            {renderLogoContent(item)}
                        </Link>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <section
            ref={sectionRef}
            className="py-16 bg-gray-50 dark:bg-gray-950 overflow-hidden border-b border-border dark:border-gray-50 w-full"
        >
            {/* Full width container without px-4 constraint */}
            <div className="w-full">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={visible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 px-4"
                >
                    <h2 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-4 leading-tight">
                        {title}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        {description}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={visible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-full"
                >
                    {industryRows.map((row, i) => (
                        <TopicRow
                            key={i}
                            items={row}
                            direction={i % 2 === 0 ? 'left' : 'right'}
                            delay={i * 300}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};