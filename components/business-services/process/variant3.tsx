// src/components/business-services/process/ProcessVariant3.tsx
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

export default function ProcessVariant3(props: ProcessProps) {
  return (
    <section className={`py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-950 relative overflow-hidden ${props.className || ''}`}>
      
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-gradient-to-br from-orange-500/20 to-pink-500/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-gradient-to-tl from-pink-500/20 to-red-500/20 rounded-full blur-2xl"></div>
        <div className="absolute top-3/4 left-1/3 w-24 h-24 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Centered Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20 lg:mb-24"
          >
            {/* Subtitle */}
            <p className="text-sm sm:text-base font-semibold uppercase tracking-wider mb-4 
                       bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
              {props.subtitle}
            </p>
            
            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black dark:text-white mb-6 sm:mb-8 leading-tight max-w-4xl mx-auto">
              {props.title}
            </h2>
            
            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {props.description}
            </p>
          </motion.div>

          {/* Vertical Timeline */}
          <div className="relative max-w-4xl mx-auto">
            
            {/* Central Timeline Line */}
            <div className="absolute left-8 sm:left-12 lg:left-1/2 lg:transform lg:-translate-x-1/2 
                         top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-700 rounded-full">
              
              {/* Animated Progress Line */}
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                transition={{ duration: 2, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="w-full bg-gradient-to-b from-orange-500 via-pink-500 to-red-500 rounded-full"
              />
            </div>

            {/* Process Steps */}
            <div className="space-y-12 sm:space-y-16 lg:space-y-20">
              {props.steps.map((step, idx) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: idx * 0.2,
                    ease: "easeOut" 
                  }}
                  viewport={{ once: true }}
                  className={`relative grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                    idx % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  
                  {/* Timeline Node */}
                  <div className="absolute left-8 sm:left-12 lg:left-1/2 lg:transform lg:-translate-x-1/2 
                               top-8 sm:top-12 z-20">
                    
                    {/* Outer Ring */}
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 
                                 rounded-full flex items-center justify-center shadow-lg">
                      
                      {/* Inner Dot */}
                      <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white dark:bg-gray-950 rounded-full 
                                   flex items-center justify-center">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className={`pl-20 sm:pl-24 lg:pl-0 ${idx % 2 === 1 ? 'lg:col-start-2' : 'lg:col-start-1'}`}>
                    
                    <div className="group">
                      {/* Step Number Badge */}
                      <div className={`inline-flex items-center gap-3 mb-6 ${idx % 2 === 1 ? 'lg:justify-end' : ''}`}>
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 
                                     rounded-2xl flex items-center justify-center text-white font-bold text-lg sm:text-xl
                                     transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                          {step.id}
                        </div>
                        <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-orange-500 to-pink-500"></div>
                      </div>
                      
                      {/* Step Title */}
                      <h3 className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-black dark:text-white mb-4 sm:mb-6 
                                    transition-colors duration-300 group-hover:text-transparent 
                                    group-hover:bg-gradient-to-r group-hover:from-orange-500 
                                    group-hover:via-pink-500 group-hover:to-red-500 group-hover:bg-clip-text
                                    ${idx % 2 === 1 ? 'lg:text-right' : ''}`}>
                        {step.title}
                      </h3>
                      
                      {/* Step Description */}
                      <p className={`text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-md
                                   ${idx % 2 === 1 ? 'lg:text-right lg:ml-auto' : ''}`}>
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Visual Side */}
                  <div className={`hidden lg:block ${idx % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : 'lg:col-start-2'}`}>
                    
                    <div className={`flex ${idx % 2 === 1 ? 'justify-start' : 'justify-end'}`}>
                      
                      {/* Large Background Number */}
                      <div className="relative">
                        <div className="text-8xl sm:text-9xl lg:text-[12rem] font-black text-gray-100 dark:text-gray-800 
                                     select-none transition-colors duration-300 hover:text-gray-200 dark:hover:text-gray-700">
                          {String(step.id).padStart(2, '0')}
                        </div>
                        
                        {/* Overlay Icon/Pattern */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-red-500/20 
                                       rounded-full flex items-center justify-center backdrop-blur-sm">
                            <div className="text-2xl sm:text-3xl text-gray-400 dark:text-gray-500">
                              ✓
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Completion Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mt-16 sm:mt-20 lg:mt-24"
          >
            <div className="relative inline-block">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 
                           rounded-full blur-2xl opacity-20 scale-110"></div>
              
              {/* Badge */}
              <div className="relative bg-white dark:bg-gray-900 rounded-full px-8 sm:px-12 py-6 sm:py-8 
                           shadow-lg border-2 border-gray-200 dark:border-gray-800">
                
                <div className="flex items-center gap-4">
                  {/* Success Icon */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 
                               rounded-full flex items-center justify-center text-white text-xl sm:text-2xl">
                    ✓
                  </div>
                  
                  <div className="text-left">
                    <div className="text-2xl sm:text-3xl font-bold text-black dark:text-white">
                      Process Complete
                    </div>
                    <div className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
                      {props.steps.length} Steps to Success
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}