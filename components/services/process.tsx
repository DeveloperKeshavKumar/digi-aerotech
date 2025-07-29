'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, Zap, Target, Rocket, CheckCircle, ArrowRight } from 'lucide-react';

interface ProcessStep {
    id: number;
    title: string;
    description: string;
    icon?: React.ReactNode;
}

interface ProcessProps {
    title: string;
    subtitle: string;
    description: string;
    steps: ProcessStep[];
}

export const Process: React.FC<ProcessProps> = ({
    title,
    subtitle,
    description,
    steps
}) => {
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 30,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    };

    return (
        <div className={`min-h-screen transition-all duration-700 ${isDark ? 'bg-black' : 'bg-white'}`}>
            <div className="py-16 px-6">
                <div className="container mx-auto max-w-7xl">
                    {/* Header Section */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.h2
                            className="text-sm md:text-base font-medium tracking-wider text-transparent bg-clip-text bg-gradient-to-br from-red-500 via-pink-600 to-orange-500 uppercase">
                            <span className="text-sm font-semibold tracking-[0.2em] uppercase">
                                {subtitle}
                            </span>
                            <ArrowRight size={16} />
                        </motion.h2>

                        <motion.h1
                            className={`text-3xl md:text-4xl font-bold mb-6 leading-tight ${isDark ? 'text-white' : 'text-black'
                                }`}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            <span >
                                {title}
                            </span>
                        </motion.h1>

                        <motion.p
                            className={`max-w-2xl mx-auto text-base md:text-lg leading-relaxed ${isDark ? 'text-white/70' : 'text-black/70'
                                }`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            {description}
                        </motion.p>
                    </motion.div>

                    {/* Process Steps */}
                    <motion.div
                        className="relative"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {/* Central Timeline */}
                        <div className={`absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 hidden lg:block ${isDark ? 'bg-white/10' : 'bg-black/10'
                            }`}>
                            <motion.div
                                className={`w-full ${isDark ? 'bg-gradient-to-b from-orange-400 to-pink-500' : 'bg-gradient-to-b from-orange-500 to-red-500'
                                    }`}
                                initial={{ height: 0 }}
                                whileInView={{ height: "100%" }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                                viewport={{ once: true }}
                            />
                        </div>

                        <div className="space-y-12 lg:space-y-16">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={step.id}
                                    className="relative group"
                                >
                                    <div className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                                        }`}>

                                        {/* Content Card */}
                                        <motion.div
                                            className="w-full lg:w-5/12"
                                            whileHover={{ y: -2 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <div className={`relative p-6 md:p-8 rounded-2xl border transition-all duration-500 ${isDark
                                                ? 'bg-black/50 border-white/10 hover:border-white/20 backdrop-blur-sm'
                                                : 'bg-white/80 border-black/10 hover:border-black/20 backdrop-blur-sm'
                                                } group-hover:shadow-lg`}>

                                                <motion.h3
                                                    className={`text-xl md:text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'
                                                        }`}
                                                    initial={{ opacity: 0 }}
                                                    whileInView={{ opacity: 1 }}
                                                    transition={{ delay: 0.2 }}
                                                >
                                                    {step.title}
                                                </motion.h3>

                                                <motion.p
                                                    className={`text-sm md:text-base leading-relaxed ${isDark ? 'text-white/80' : 'text-black/80'
                                                        }`}
                                                    initial={{ opacity: 0 }}
                                                    whileInView={{ opacity: 1 }}
                                                    transition={{ delay: 0.3 }}
                                                >
                                                    {step.description}
                                                </motion.p>

                                                {/* Gradient accent line */}
                                                <motion.div
                                                    className="mt-4 h-0.5 bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 rounded-full"
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: "60%" }}
                                                    transition={{ delay: 0.5, duration: 0.8 }}
                                                />
                                            </div>
                                        </motion.div>

                                        {/* Center Circle Icon */}
                                        <motion.div
                                            className="flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 text-white font-bold text-lg shadow-lg z-10"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ type: "spring", stiffness: 200 }}
                                        >
                                            {step.icon || step.id}
                                        </motion.div>

                                        {/* Spacer */}
                                        <div className="w-0 lg:w-5/12"></div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </div>
    );
};
