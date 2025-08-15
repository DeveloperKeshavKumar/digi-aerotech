// src/components/business-services/process/ProcessVariant1.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface ProcessProps {
  title: string;
  subtitle: string;
  description: string;
  className?: string;
  steps: Array<{
    id: number;
    title: string;
    description: string;
  }>;
}

export default function ProcessVariant1(props: ProcessProps) {
  return (
    <section className={`py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-950 ${props.className || ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            {/* Subtitle */}
            <p className="text-sm sm:text-base font-semibold uppercase tracking-wider mb-4 
                       bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
              {props.subtitle}
            </p>
            
            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black dark:text-white mb-6 sm:mb-8 leading-tight">
              {props.title}
            </h2>
            
            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {props.description}
            </p>
          </motion.div>

          {/* Steps Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {props.steps.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: idx * 0.15,
                  ease: "easeOut" 
                }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Background Card */}
                <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-8 lg:p-10 h-full
                             shadow-sm border border-gray-200 dark:border-gray-800
                             transition-all duration-500 hover:shadow-xl hover:shadow-gray-200/50 
                             dark:hover:shadow-gray-800/50 hover:-translate-y-2
                             hover:border-orange-200 dark:hover:border-orange-800">
                  
                  {/* Step Number */}
                  <div className="relative mb-6 sm:mb-8">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 
                                 rounded-2xl flex items-center justify-center text-white font-bold text-xl sm:text-2xl
                                 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                      {step.id}
                    </div>
                    
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 
                                 rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 scale-110"></div>
                  </div>
                  
                  {/* Step Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-4 sm:mb-6 
                               transition-colors duration-300 group-hover:text-transparent 
                               group-hover:bg-gradient-to-r group-hover:from-orange-500 
                               group-hover:via-pink-500 group-hover:to-red-500 group-hover:bg-clip-text">
                    {step.title}
                  </h3>
                  
                  {/* Step Description */}
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connection Line (Hidden on mobile, shown between cards) */}
                {idx < props.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-10 h-0.5 bg-gradient-to-r 
                               from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 z-10
                               transform translate-x-0 translate-y-8">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 
                                 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mt-16 sm:mt-20 lg:mt-24"
          >
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 sm:p-12 lg:p-16 
                         shadow-lg border border-gray-200 dark:border-gray-800 max-w-3xl mx-auto">
              
              <h3 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-6">
                Ready to Start Your Journey?
              </h3>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Follow our proven process and achieve exceptional results for your business.
              </p>
              
              <div className="text-6xl sm:text-7xl lg:text-8xl font-black text-transparent 
                           bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text">
                {props.steps.length}
              </div>
              
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2">
                Simple Steps to Success
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}