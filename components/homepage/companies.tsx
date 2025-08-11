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
    image?: string;
}

interface CompaniesProps {
    logos?: Logo[];
    title?: string | { text: string; gradient?: boolean; gradientClass?: string }[];
    description?: string;
    rows?: number;
    speed?: 'slow' | 'medium' | 'fast';
}

const CLogos: Logo[] = [{ image: '/logos/1.png', },
{ image: '/logos/2.png', },
{ image: '/logos/3.png', },
{ image: '/logos/4.png', },
{ image: '/logos/5.png', },
{ image: '/logos/6.png', },
{ image: '/logos/7.png', },
{ image: '/logos/8.png', },
{ image: '/logos/9.png', },
{ image: '/logos/10.png', },
{ image: '/logos/11.png', },
{ image: '/logos/12.png', },
{ image: '/logos/13.png', },
{ image: '/logos/14.png', },
{ image: '/logos/15.png', },
{ image: '/logos/16.png', },
{ image: '/logos/17.png', },
{ image: '/logos/18.png', },
{ image: '/logos/18.png', },
{ image: '/logos/19.png', },
{ image: '/logos/20.png', },
{ image: '/logos/21.png', },
{ image: '/logos/22.png', },
{ image: '/logos/23.png', },
{ image: '/logos/24.png', },
{ image: '/logos/25.png', },
]

export const Companies = ({
    logos = CLogos,
    title =  [
    { text: 'Trusted By ' },
    { text: '140+ Businesses', gradient: true, gradientClass: "from-purple-500 via-pink-500 to-red-500" }
],
    description = 'We are grateful to work with incredible clients 💖',
    rows = 2,
    speed = 'fast',
}: CompaniesProps) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    const [randomizedRows, setRandomizedRows] = useState<Logo[][]>([]);

    useEffect(() => {
        if (sectionRef.current) {
            inView(sectionRef.current, () => {
                setVisible(true);
            }, { margin: '-50px' });
        }

        // Create randomized rows with unique logos per row
        const createRandomizedRows = () => {
            if (logos.length === 0) return;

            const newRows: Logo[][] = [];

            // If we have fewer logos than rows, duplicate logos but distribute them differently
            if (logos.length < rows) {
                // Create a larger pool by duplicating logos
                const expandedLogos = [];
                const duplicationsNeeded = Math.ceil(rows / logos.length);

                for (let d = 0; d < duplicationsNeeded; d++) {
                    expandedLogos.push(...logos);
                }

                // Shuffle the expanded pool
                const shuffledExpanded = [...expandedLogos].sort(() => 0.5 - Math.random());

                // Distribute to rows ensuring no duplicates within each row
                for (let i = 0; i < rows; i++) {
                    const rowLogos = [];
                    const usedInThisRow = new Set();

                    // Try to fill each row with unique logos
                    for (const logo of shuffledExpanded) {
                        const logoKey = logo.name || logo.image || JSON.stringify(logo.icon);
                        if (!usedInThisRow.has(logoKey) && rowLogos.length < Math.ceil(logos.length * 0.8)) {
                            rowLogos.push(logo);
                            usedInThisRow.add(logoKey);
                        }
                    }

                    // If we still need more logos for visual continuity, add from remaining pool
                    if (rowLogos.length < 5) {
                        const remaining = shuffledExpanded.filter(logo => {
                            const logoKey = logo.name || logo.image || JSON.stringify(logo.icon);
                            return !usedInThisRow.has(logoKey);
                        });

                        rowLogos.push(...remaining.slice(0, 5 - rowLogos.length));
                    }

                    newRows.push(rowLogos);
                }
            } else {
                // We have enough logos to create unique sets for each row
                const shuffledLogos = [...logos].sort(() => 0.5 - Math.random());
                const logosPerRow = Math.floor(logos.length / rows);
                const remainingLogos = logos.length % rows;

                let startIndex = 0;

                for (let i = 0; i < rows; i++) {
                    // Calculate how many logos this row should get
                    const currentRowSize = logosPerRow + (i < remainingLogos ? 1 : 0);

                    // Get logos for this row
                    const rowLogos = shuffledLogos.slice(startIndex, startIndex + currentRowSize);

                    // Shuffle the row logos again for extra randomness
                    const shuffledRowLogos = [...rowLogos].sort(() => 0.5 - Math.random());

                    newRows.push(shuffledRowLogos);
                    startIndex += currentRowSize;
                }
            }

            setRandomizedRows(newRows);
        };

        createRandomizedRows();
    }, [logos, rows]);

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
        const getRowItems = (rowItems: Logo[]) => {
            // Create multiple shuffled versions of the same row items for seamless scrolling
            const itemWidth = 120;
            const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1920;
            const itemsNeeded = Math.ceil((screenWidth * 2) / itemWidth);
            const duplications = Math.ceil(itemsNeeded / rowItems.length);

            const fullItems = [];
            for (let i = 0; i < duplications; i++) {
                // Shuffle the same set of logos differently each time for visual variety
                const shuffledItems = [...rowItems].sort(() => 0.5 - Math.random());
                fullItems.push(...shuffledItems);
            }

            return fullItems;
        };

        const rowItems = getRowItems(items);

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
            <div className="overflow-hidden py-4  whitespace-nowrap relative w-full">
                <div className="hidden sm:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 dark:from-gray-950 via-gray-50/80 dark:via-gray-950/80 to-transparent z-10 backdrop-blur-sm" />
                <div className="hidden sm:block absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 dark:from-gray-950 via-gray-50/80 dark:via-gray-950/80 to-transparent z-10 backdrop-blur-sm" />

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
                            key={`${item.name || 'logo'}-${index}-${delay}`}
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

    const renderTitle = () => {
        if (typeof title === 'string') {
            return title;
        }
        return title.map((part, idx) =>
            part.gradient ? (
                <span
                    key={idx}
                    className={`bg-clip-text text-transparent bg-gradient-to-r ${part.gradientClass || "from-pink-500 via-yellow-500 to-blue-500"}`}
                >
                    {part.text}
                </span>
            ) : (
                <span key={idx}>{part.text}</span>
            )
        );
    };

    return (
        <section
            ref={sectionRef}
            className="py-24 sm:py-32 sm:min-h-[50vh] bg-gray-50 dark:bg-gray-950 overflow-hidden border-b border-border dark:border-gray-700 w-full"
        >
            <div className="w-full">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={visible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 px-4"
                >
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-4 leading-tight">
                        {renderTitle()}
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
                    {randomizedRows.map((row, i) => (
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