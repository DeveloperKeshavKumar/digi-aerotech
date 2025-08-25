'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface ProcessStep {
  id: number;
  title: string;
  description: string;
}

interface ProcessProps {
  title?: string;
  subtitle?: string;
  description?: string;
  steps: ProcessStep[];
  className?: string;
}

export default function ProcessVariant3({
  title='Our Process',
  subtitle,
  description,
  steps,
  className
}: ProcessProps){
  const [activeStep, setActiveStep] = useState(steps[0]?.id || 1);

  return (
    <div className={`bg-gray-50 dark:bg-gray-950 py-12 md:py-16 border-b border-border dark:border-gray-700 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 uppercase tracking-wider block mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            {subtitle}
          </motion.span>

          <motion.h1
            className="text-3xl font-bold text-gray-900 dark:text-white mb-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h1>

          <motion.p
            className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            {description}
          </motion.p>
        </motion.div>

        {/* Compact Step Navigation */}
        <div className="mb-8">
          <div className="flex justify-center gap-1 md:gap-2">
            {steps.map((step) => (
              <motion.button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${
                  activeStep === step.id
                    ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-md'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Step {step.id}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-1.5 mb-8">
          <motion.div
            className="h-full bg-gradient-to-r from-orange-500 to-pink-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${((activeStep) / (steps.length - 1)) * 75}%` }}
            transition={{ duration: 0.6 }}
          />
        </div>

        {/* Step Content */}
        <AnimatePresence mode="wait">
          {steps.map((step) => (
            activeStep === step.id && (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700"
              >
                <h2 className="max-w-max text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 mb-3">
                  {step.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </motion.div>
            )
          ))}
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="flex justify-between mt-8">
          <motion.button
            onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
            disabled={activeStep === 1}
            className={`px-4 py-2 rounded-lg ${
              activeStep === 1
                ? 'text-gray-400 dark:text-gray-600 cursor-not-allowed'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
            whileHover={{ scale: activeStep === 1 ? 1 : 1.05 }}
          >
            Previous
          </motion.button>

          <motion.button
            onClick={() => setActiveStep(Math.min(steps.length, activeStep + 1))}
            disabled={activeStep === steps.length}
            className={`px-4 py-2 rounded-lg ${
              activeStep === steps.length
                ? 'text-gray-400 dark:text-gray-600 cursor-not-allowed'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
            whileHover={{ scale: activeStep === steps.length ? 1 : 1.05 }}
          >
            Next
          </motion.button>
        </div>
      </div>
    </div>
  );
};