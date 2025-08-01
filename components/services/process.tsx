'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check } from 'lucide-react';

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
    const [activeStep, setActiveStep] = useState(steps[0]?.id || 1);

    const handleStepHover = (stepId: number) => {
        setActiveStep(stepId);
    };

    const activeStepData = steps.find(step => step.id === activeStep);

    return (
        <div className="bg-gray-50 dark:bg-gray-950 transition-colors duration-300 py-8 md:py-12 border-b border-border dark:border-gray-700">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-7xl">
                    {/* Header Section - Compact */}
                    <motion.div
                        className="text-center mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.span
                            className="text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-br from-red-500 via-pink-600 to-orange-500 tracking-wide uppercase mb-2 block"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                        >
                            {subtitle}
                        </motion.span>

                        <motion.h1
                            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            {title}
                        </motion.h1>

                        <motion.p
                            className="max-w-xl mx-auto text-gray-600 dark:text-gray-300 text-sm leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            {description}
                        </motion.p>
                    </motion.div>

                    {/* Compact Process Steps */}
                    <div className="space-y-6">
                        {/* Horizontal Steps Bar - Very Compact */}
                        <div className="relative w-full lg:w-3/4 mx-auto">
                            <div className=" flex justify-between items-center relative px-4">
                                {/* Background line */}
                                <div className="absolute top-1/2 left-8 right-8 h-px bg-gray-200 dark:bg-gray-800 -translate-y-1/2" />

                                {steps.map((step) => (
                                    <motion.div
                                        key={step.id}
                                        className="relative cursor-pointer group flex flex-col items-center"
                                        onHoverStart={() => handleStepHover(step.id)}
                                        onMouseEnter={() => handleStepHover(step.id)}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        {/* Step Circle - Smaller */}
                                        <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full border-2 flex items-center justify-center text-sm md:text-base font-bold transition-all duration-300 relative z-10 ${activeStep === step.id
                                            ? 'bg-gradient-to-r from-red-500 via-pink-600 to-orange-500 border-transparent text-white shadow-md'
                                            : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700'
                                            }`}>
                                            {step.icon || String(step.id).padStart(2, '0')}
                                        </div>

                                        {/* Step Title - Only on larger screens and when active/hovered */}
                                        <div className="hidden md:block absolute -bottom-8 left-1/2 -translate-x-1/2 text-center min-w-max">
                                            <motion.h3
                                                className={`text-xs font-medium transition-all duration-300 ${activeStep === step.id
                                                    ? 'text-gray-900 dark:text-white opacity-100'
                                                    : 'text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100'
                                                    }`}
                                                animate={{
                                                    scale: activeStep === step.id ? 1.05 : 1
                                                }}
                                            >
                                            </motion.h3>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Compact Content Area */}
                        <AnimatePresence mode="wait">
                            {activeStepData && (
                                <motion.div
                                    key={activeStep}
                                    className="max-w-3xl mx-auto"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm p-4 md:p-6">
                                        <motion.h2
                                            className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2 md:mb-3"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.1 }}
                                        >
                                            {activeStepData.title}
                                        </motion.h2>

                                        <motion.p
                                            className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.15 }}
                                        >
                                            {activeStepData.description}
                                        </motion.p>
                                        <div className='flex relative mt-3'>
                                            <motion.div
                                                className="h-0.5 bg-gradient-to-r from-red-500 via-pink-600 to-orange-500 rounded-full"
                                                initial={{ width: 0 }}
                                                animate={{ width: activeStep / steps.length * 98 + '%' }}
                                                transition={{ delay: 0.2, duration: 0.6 }}
                                            />

                                            {activeStep === steps.length && (
                                                <motion.div
                                                    className="absolute right-0 -translate-y-1/2"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ delay: 0.4 }}
                                                >
                                                    <Check className="w-4 h-4 text-white bg-gradient-to-br from-red-500 via-pink-600 to-orange-500 rounded-full p-0.5 shadow" />
                                                </motion.div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};