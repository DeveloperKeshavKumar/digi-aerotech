// components/business/why-choose-us.tsx
"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    IconTrophy,
    IconUsers,
    IconTrendingUp,
    IconShield,
    IconClock,
    IconChevronLeft,
    IconChevronRight,
    IconCircleCheck,
    IconCircleX
} from '@tabler/icons-react';

interface WhyChooseUsItem {
    icon: React.ReactNode;
    title: string;
    description: string;
    ourApproach: string;
    othersApproach: string;
}

interface WhyChooseUsProps {
    title?: string | { text: string; gradient?: boolean; gradientClass?: string }[];
    subtitle?: string;
    description?: string;
    items?: WhyChooseUsItem[];
    ctaButton?: {
        text: string;
        link: string;
        icon?: React.ReactNode;
    };
}

// SEO-optimized default data
const defaultItems: WhyChooseUsItem[] = [
    {
        icon: <IconTrendingUp className="w-6 h-6" />,
        title: "Proven Digital Marketing Results",
        description: "Data-driven growth strategies that deliver",
        ourApproach: "300%+ average ROI with transparent analytics",
        othersApproach: "Vague promises without measurable outcomes"
    },
    {
        icon: <IconUsers className="w-6 h-6" />,
        title: "Industry-Specific Expertise",
        description: "Tailored solutions for your business niche",
        ourApproach: "Specialized strategies for 16+ industries",
        othersApproach: "Generic one-size-fits-all templates"
    },
    {
        icon: <IconShield className="w-6 h-6" />,
        title: "All-in-One Marketing Solutions",
        description: "Complete digital ecosystem under one roof",
        ourApproach: "15 integrated services, seamless execution",
        othersApproach: "Fragmented tools requiring multiple vendors"
    },
    {
        icon: <IconClock className="w-6 h-6" />,
        title: "Fast Implementation & Support",
        description: "Quick launch with dedicated assistance",
        ourApproach: "5-day setup with 24/7 dedicated support",
        othersApproach: "Weeks of delays with limited availability"
    }
];

export function WhyChooseUs({
    title = [
        { text: "Why Choose " },
        { text: "Digi Aerotech", gradient: true, gradientClass: "from-orange-500 to-pink-500" },
        { text: "?" }
    ],
    subtitle = "The Smart Choice for Digital Growth",
    description = "Experience the difference with our results-driven approach",
    items = defaultItems,
    ctaButton = {
        text: "Start Your Growth Journey",
        link: "/contact",
        icon: <IconTrophy className="w-5 h-5" />
    }
}: WhyChooseUsProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    const renderTitle = () => {
        if (typeof title === 'string') {
            return <span>{title}</span>;
        }

        if (Array.isArray(title)) {
            return title.map((item, index) => (
                <span
                    key={index}
                    className={item.gradient ?
                        `bg-gradient-to-r ${item.gradientClass || 'from-orange-500 via-pink-500 to-red-500'} bg-clip-text text-transparent` :
                        ''
                    }
                >
                    {item.text}
                </span>
            ));
        }

        return null;
    };

    const nextItem = () => {
        setActiveIndex((prev) => (prev + 1) % items.length);
    };

    const prevItem = () => {
        setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
    };

    return (
        <section 
            className="py-12 md:py-16 bg-white dark:bg-black border-b border-border dark:border-gray-700"
            itemScope 
            itemType="https://schema.org/Service"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* SEO-optimized Header */}
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 md:mb-12"
                >
                    {subtitle && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                            className="text-sm md:text-md text-pink-600 font-semibold mb-2 uppercase tracking-wider"
                            itemProp="slogan"
                        >
                            {subtitle}
                        </motion.p>
                    )}

                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-2xl sm:text-3xl md:text-4xl  font-bold mb-4 text-gray-900 dark:text-white"
                        itemProp="name"
                    >
                        {renderTitle()}
                    </motion.h2>

                    {description && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                            itemProp="description"
                        >
                            {description}
                        </motion.p>
                    )}
                </motion.header>

                {/* Desktop Grid View */}
                <div className="hidden lg:grid grid-cols-2 gap-6 mb-10">
                    {items.map((item, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-xl dark:hover:shadow-gray-900/50 transition-all duration-300"
                            itemScope
                            itemType="https://schema.org/Offer"
                        >
                            {/* Header */}
                            <div className="p-6 pb-4">
                                <div className="flex items-start gap-4">
                                    <motion.div 
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.5 }}
                                        className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center text-white shadow-lg"
                                    >
                                        {item.icon}
                                    </motion.div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1" itemProp="name">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400" itemProp="description">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Comparison Table */}
                            <div className="px-6 pb-6">
                                <div className="space-y-3">
                                    <motion.div 
                                        whileHover={{ x: 3 }}
                                        className="flex items-start gap-3 p-3 bg-gray-200 dark:bg-gray-700/40 rounded-lg"
                                    >
                                        <IconCircleCheck className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <div className="flex-1">
                                            <div className="text-xs font-semibold text-gray-800 dark:text-gray-100 mb-1">Our Approach</div>
                                            <div className="text-sm text-gray-700 dark:text-gray-200">{item.ourApproach}</div>
                                        </div>
                                    </motion.div>

                                    <div className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-900/50 outline outline-dotted rounded-lg opacity-70">
                                        <IconCircleX className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                                        <div className="flex-1">
                                            <div className="text-xs font-semibold text-gray-500 dark:text-gray-300 mb-1">Others</div>
                                            <div className="text-sm text-gray-500 dark:text-gray-400">{item.othersApproach}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Tablet View (Medium Screens) */}
                <div className="hidden md:grid lg:hidden grid-cols-1 gap-6 mb-10">
                    {items.map((item, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-6 hover:shadow-lg transition-all"
                        >
                            <div className="flex flex-nowrap gap-8">
                                <div>
                                    <div className="flex items-start gap-3 mb-4">
                                        <div className="w-14 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg flex items-center justify-center text-white">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 dark:text-white">{item.title}</h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="p-3 bg-gray-100 dark:bg-gray-700/80 rounded-lg">
                                        <IconCircleCheck className="w-4 h-4 text-green-500 mb-2" />
                                        <div className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Our Way</div>
                                        <div className="text-xs text-gray-600 dark:text-gray-400">{item.ourApproach}</div>
                                    </div>
                                    <div className="p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg opacity-70 outline-dotted">
                                        <IconCircleX className="w-4 h-4 text-red-500 mb-2" />
                                        <div className="text-xs font-semibold text-gray-800 dark:text-gray-200 mb-1">Others</div>
                                        <div className="text-xs text-neutral-600 dark:text-gray-200">{item.othersApproach}</div>
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Mobile Carousel View */}
                <div className="md:hidden">
                    <div className="relative">
                        <AnimatePresence mode="wait">
                            <motion.article
                                key={activeIndex}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-700 p-6"
                            >
                                <div className="flex items-start gap-3 mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 via-pink-500 to-red-500 rounded-xl flex items-center justify-center text-white">
                                        {items[activeIndex].icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                                            {items[activeIndex].title}
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            {items[activeIndex].description}
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="p-4 bg-gray-200 dark:bg-gray-700/40 rounded-xl">
                                        <div className="flex items-center gap-2 mb-2">
                                            <IconCircleCheck className="w-5 h-5 text-green-500" />
                                            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Our Approach</span>
                                        </div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            {items[activeIndex].ourApproach}
                                        </p>
                                    </div>

                                    <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl opacity-70 outline-dotted">
                                        <div className="flex items-center gap-2 mb-2">
                                            <IconCircleX className="w-5 h-5 text-red-500" />
                                            <span className="text-sm font-semibold text-gray-500 dark:text-gray-300">Others</span>
                                        </div>
                                        <p className="text-sm text-gray-800 dark:text-gray-300">
                                            {items[activeIndex].othersApproach}
                                        </p>
                                    </div>
                                </div>
                            </motion.article>
                        </AnimatePresence>

                        {/* Navigation */}
                        <div className="flex items-center justify-between mt-6">
                            <button
                                onClick={prevItem}
                                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                                aria-label="Previous item"
                            >
                                <IconChevronLeft className="w-5 h-5" />
                            </button>

                            <div className="flex gap-2">
                                {items.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveIndex(index)}
                                        className={`w-2 h-2 rounded-full transition-all ${
                                            index === activeIndex
                                                ? 'w-8 bg-gradient-to-r from-orange-500 to-pink-500'
                                                : 'bg-gray-300 dark:bg-gray-300'
                                        }`}
                                        aria-label={`Go to item ${index + 1}`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={nextItem}
                                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                                aria-label="Next item"
                            >
                                <IconChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* CTA Button */}
                {ctaButton && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-center mt-10"
                    >
                        <motion.a
                            href={ctaButton.link}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
                            itemProp="url"
                        >
                            {ctaButton.icon && <span>{ctaButton.icon}</span>}
                            <span>{ctaButton.text}</span>
                        </motion.a>
                    </motion.div>
                )}
            </div>
        </section>
    );
}