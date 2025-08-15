// src/components/business-services/process/ProcessVariant2.tsx
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

export default function ProcessVariant2(props: ProcessProps) {
  return (
    <section className={`py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-950 ${props.className || ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-16 sm:mb-20 lg:mb-24 items-center">
            
            {/* Left: Title Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              {/* Subtitle */}
              <p className="text-sm sm:text-base font-semibold uppercase tracking-wider mb-4 
                         bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                {props.subtitle}
              </p>
              
              {/* Main Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black dark:text-white leading-tight">
                {props.title}
              </h2>
            </motion.div>
            
            {/* Right: Description */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {props.description}
              </p>
            </motion.div>
          </div>

          {/* Horizontal Process Flow */}
          <div className="relative">
            
            {/* Main Flow Line (Hidden on mobile) */}
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 rounded-full">
              <div className="h-full bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 rounded-full 
                           transition-all duration-1000 ease-in-out" style={{width: '100%'}}></div>
            </div>

            {/* Process Steps */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 lg:gap-6">
              {props.steps.map((step, idx) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: idx * 0.2,
                    ease: "easeOut" 
                  }}
                  viewport={{ once: true }}
                  className="relative group text-center lg:text-left"
                >
                  
                  {/* Step Circle */}
                  <div className="relative mb-6 lg:mb-8">
                    {/* Main Circle */}
                    <div className="mx-auto lg:mx-0 w-16 h-16 sm:w-20 sm:h-20 bg-white dark:bg-gray-900 
                                 border-4 border-gray-200 dark:border-gray-700 rounded-full 
                                 flex items-center justify-center relative z-20
                                 transition-all duration-500 group-hover:border-orange-500 
                                 group-hover:shadow-lg group-hover:shadow-orange-500/25">
                      
                      <span className="text-xl sm:text-2xl font-bold text-black dark:text-white 
                                   transition-colors duration-300 group-hover:text-transparent 
                                   group-hover:bg-gradient-to-r group-hover:from-orange-500 
                                   group-hover:via-pink-500 group-hover:to-red-500 group-hover:bg-clip-text">
                        {step.id}
                      </span>
                    </div>
                    
                    {/* Pulse Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 
                                 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 
                                 animate-pulse scale-125"></div>
                  </div>

                  {/* Content Card */}
                  <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 sm:p-8 
                               shadow-sm border border-gray-200 dark:border-gray-800
                               transition-all duration-500 hover:shadow-lg hover:shadow-gray-200/50 
                               dark:hover:shadow-gray-800/50 hover:-translate-y-1
                               hover:border-orange-200 dark:hover:border-orange-800
                               group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-orange-50/30
                               dark:group-hover:from-gray-900 dark:group-hover:to-orange-950/20">
                    
                    {/* Step Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-black dark:text-white mb-3 sm:mb-4">
                      {step.title}
                    </h3>
                    
                    {/* Step Description */}
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow Connector (Hidden on mobile and last item) */}
                  {idx < props.steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full transform translate-x-2 z-10">
                      <div className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500"></div>
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 
                                   w-0 h-0 border-l-4 border-l-pink-500 
                                   border-y-2 border-y-transparent"></div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Summary */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mt-16 sm:mt-20 lg:mt-24"
          >
            <div className="relative inline-block">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 
                           rounded-3xl blur-2xl opacity-10 scale-110"></div>
              
              {/* Content */}
              <div className="relative bg-white dark:bg-gray-900 rounded-3xl p-8 sm:p-12 
                           shadow-lg border border-gray-200 dark:border-gray-800">
                
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="text-4xl sm:text-5xl font-black text-transparent 
                               bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text">
                    {props.steps.length}
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-black dark:text-white">
                    Steps to Success
                  </div>
                </div>
                
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Our streamlined process ensures consistent results and exceptional outcomes for every project.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}