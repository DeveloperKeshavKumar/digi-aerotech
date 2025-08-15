// src/components/business-services/hero/HeroVariant3.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  initial: string;
  headlineKeywords: string[];
  brandLine: string | Array<{ text: string; gradient?: boolean; gradientClass?: string }>;
  subheadline: string;
  ctaButtons: Array<{
    icon?: React.ReactNode;
    text: string;
    link: string;
    variant?: 'primary' | 'secondary';
  }>;
  stats: Array<{
    icon?: React.ReactNode;
    title: string;
    description: string;
  }>;
}

export default function HeroVariant3(props: HeroProps) {
  const renderBrandLine = () => {
    if (typeof props.brandLine === 'string') {
      return (
        <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
          {props.brandLine}
        </span>
      );
    }

    return props.brandLine.map((part, idx) => (
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
    <section className="bg-white dark:bg-black min-h-screen flex flex-col justify-center py-16 sm:py-20 lg:py-24 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex flex-col justify-center">
        
        {/* Main Content Area */}
        <div className="text-center max-w-5xl mx-auto mb-16 sm:mb-20 lg:mb-24">
          
          {/* Brand Line - Small at top */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-sm sm:text-base font-medium uppercase tracking-widest mb-8 sm:mb-12"
          >
            {renderBrandLine()}
          </motion.div>
          
          {/* Large Centered Headline */}
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-black dark:text-white leading-tight mb-8 sm:mb-12"
          >
            {props.initial}
            <br />
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent inline-block mt-2 sm:mt-4">
              {props.headlineKeywords[0]}
            </span>
          </motion.h1>
          
          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-10 sm:mb-16"
          >
            {props.subheadline}
          </motion.p>
          
          {/* CTA Buttons - Larger and centered */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 lg:gap-8"
          >
            {props.ctaButtons.map((btn, idx) => (
              <a
                key={idx}
                href={btn.link}
                className={`
                  w-full sm:w-auto px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 rounded-2xl font-bold text-lg sm:text-xl
                  transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95
                  flex items-center justify-center gap-3
                  ${btn.variant === 'secondary'
                    ? 'bg-gray-100 dark:bg-gray-800 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
                    : 'bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white hover:shadow-2xl hover:shadow-orange-500/30 border-2 border-transparent'
                  }
                `}
              >
                {btn.icon && <span className="text-xl sm:text-2xl">{btn.icon}</span>}
                {btn.text}
              </a>
            ))}
          </motion.div>
        </div>
        
        {/* Bottom Stats Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="border-t-2 border-gray-100 dark:border-gray-800 pt-12 sm:pt-16"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {props.stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 + (idx * 0.1) }}
                className="text-center group"
              >
                {/* Icon with hover effect */}
                <div className="mb-4 sm:mb-6 text-3xl sm:text-4xl lg:text-5xl text-gray-400 dark:text-gray-500 
                             transition-all duration-300 group-hover:text-orange-500 group-hover:scale-110">
                  {stat.icon}
                </div>
                
                {/* Large stat number */}
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-black dark:text-white mb-2 sm:mb-3
                             transition-colors duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r 
                             group-hover:from-orange-500 group-hover:via-pink-500 group-hover:to-red-500 group-hover:bg-clip-text">
                  {stat.title}
                </div>
                
                {/* Description */}
                <div className="text-sm sm:text-base text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}