'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

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

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300 border-b border-border dark:border-gray-800">
            <div className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-6xl">
                    {/* Header Section */}
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.span
                            className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-br from-red-500 via-pink-600 to-orange-500 tracking-wide uppercase mb-4 block"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                        >
                            {subtitle}
                        </motion.span>

                        <motion.h1
                            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            {title}
                        </motion.h1>

                        <motion.p
                            className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            {description}
                        </motion.p>
                    </motion.div>

                    {/* Process Steps Grid */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        {steps.map((step) => (
                            <motion.div
                                key={step.id}
                                className="group"
                                whileHover={{ y: -4 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <div className="relative h-full bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 p-6">
                                    {/* Step Number/Icon */}
                                    <motion.div
                                        className="flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg mb-4 group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors duration-300"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: "spring", stiffness: 400 }}
                                    >
                                        <span className="text-gray-700 dark:text-gray-300 font-semibold">
                                            {step.icon || step.id}
                                        </span>
                                    </motion.div>

                                    <div className={`relative p-6 md:p-8 rounded-2xl border transition-all duration-500 ${'bg-white/80 border-black/10 hover:border-black/20 dark:bg-black/50 dark:border-white/10 dark:hover:border-white/20 backdrop-blur-sm'} group-hover:shadow-lg`}>

                                        <motion.h3
                                            className="text-xl md:text-2xl font-bold mb-4 text-black dark:text-white"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            {step.title}
                                        </motion.h3>

                                        <motion.p
                                            className="text-sm md:text-base leading-relaxed text-black dark:text-white/80"
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
                                </div>
                            </motion.div>
                        ))}
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
