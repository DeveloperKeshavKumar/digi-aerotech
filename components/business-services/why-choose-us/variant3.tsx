// src/components/business-services/why-choose-us/WhyChooseUsVariant3.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface WhyChooseUsProps {
  title: string | Array<{ text: string; gradient?: boolean; gradientClass?: string }>;
  trustPoints: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
  }>;
  cta: {
    text: string;
    link: string;
    icon: React.ReactNode;
  };
}

export default function WhyChooseUsVariant3(props: WhyChooseUsProps) {
  const renderTitle = () => {
    if (typeof props.title === 'string') {
      return props.title;
    }

    return props.title.map((part, idx) => (
      <span 
        key={idx}
        className={part.gradient 
          ? "bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent"
          : ""
        }
      >
        {part.text}
      </span>
    ));
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-950 relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-orange-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-pink-500/10 to-red-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header with Side Title */}
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 mb-16 sm:mb-20 lg:mb-24 items-start">
            
            {/* Side Title */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-black dark:text-white leading-tight">
                {renderTitle()}
              </h2>
            </motion.div>
            
            {/* Intro Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="lg:col-span-3 lg:pt-4"
            >
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Discover what sets us apart and why thousands of businesses trust us with their success.
              </p>
            </motion.div>
          </div>

          {/* Timeline Layout */}
          <div className="relative">
            
            {/* Central Timeline Line (Hidden on mobile) */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 via-pink-500 to-red-500 rounded-full"></div>
            
            {/* Trust Points */}
            <div className="space-y-12 sm:space-y-16 lg:space-y-20">
              {props.trustPoints.map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: idx * 0.2,
                    ease: "easeOut" 
                  }}
                  viewport={{ once: true }}
                  className={`relative grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                    idx % 2 === 1 ? 'lg:text-right' : ''
                  }`}
                >
                  
                  {/* Timeline Node (Hidden on mobile) */}
                  <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="w-6 h-6 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 rounded-full shadow-lg">
                      <div className="w-full h-full bg-white dark:bg-gray-950 rounded-full scale-50 flex items-center justify-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`${idx % 2 === 1 ? 'lg:col-start-2' : 'lg:col-start-1'} 
                                ${idx % 2 === 1 ? 'lg:pl-8' : 'lg:pr-8'}`}>
                    
                    <div className="group bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-8 lg:p-10 
                                 shadow-lg border border-gray-200 dark:border-gray-800
                                 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-300/20 
                                 dark:hover:shadow-gray-800/40 hover:-translate-y-2
                                 hover:border-orange-200 dark:hover:border-orange-800">
                      
                      {/* Number Badge */}
                      <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 
                                    bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 
                                    rounded-2xl text-white font-bold text-lg sm:text-xl mb-6 
                                    ${idx % 2 === 1 ? 'lg:ml-auto' : ''}`}>
                        {String(idx + 1).padStart(2, '0')}
                      </div>
                      
                      {/* Icon */}
                      <div className={`text-4xl sm:text-5xl lg:text-6xl text-gray-400 dark:text-gray-500 mb-6
                                    transition-all duration-300 group-hover:text-orange-500 group-hover:scale-110
                                    ${idx % 2 === 1 ? 'lg:text-right' : ''}`}>
                        {point.icon}
                      </div>
                      
                      {/* Title */}
                      <h3 className={`text-xl sm:text-2xl lg:text-3xl font-bold text-black dark:text-white mb-4 
                                    transition-colors duration-300 group-hover:text-transparent 
                                    group-hover:bg-gradient-to-r group-hover:from-orange-500 
                                    group-hover:via-pink-500 group-hover:to-red-500 group-hover:bg-clip-text
                                    ${idx % 2 === 1 ? 'lg:text-right' : ''}`}>
                        {point.title}
                      </h3>
                      
                      {/* Description */}
                      <p className={`text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed
                                   ${idx % 2 === 1 ? 'lg:text-right' : ''}`}>
                        {point.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Floating Icon (Hidden on mobile) */}
                  <div className={`hidden lg:block ${idx % 2 === 1 ? 'lg:col-start-1' : 'lg:col-start-2'}`}>
                    <div className={`flex ${idx % 2 === 1 ? 'justify-end' : 'justify-start'}`}>
                      <div className="text-8xl sm:text-9xl lg:text-[10rem] text-gray-100 dark:text-gray-800 opacity-50 
                                   group-hover:opacity-100 transition-opacity duration-300">
                        {point.icon}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mt-20 sm:mt-24 lg:mt-32"
          >
            <div className="relative inline-block">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 rounded-3xl blur-2xl opacity-20 scale-110"></div>
              
              {/* CTA Button */}
              <a
                href={props.cta.link}
                className="relative inline-flex items-center gap-4 px-12 sm:px-16 py-6 sm:py-8 
                         bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 
                         text-white font-bold text-xl sm:text-2xl rounded-3xl 
                         transition-all duration-300 hover:scale-105 hover:shadow-2xl 
                         hover:shadow-orange-500/40 active:scale-95
                         border-2 border-transparent hover:border-white/20"
              >
                {props.cta.icon && <span className="text-2xl sm:text-3xl">{props.cta.icon}</span>}
                {props.cta.text}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}