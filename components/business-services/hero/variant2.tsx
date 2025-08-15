// src/components/business-services/hero/HeroVariant2.tsx
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

export default function HeroVariant2(props: HeroProps) {
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
    <section className="bg-white dark:bg-black py-16 sm:py-20 lg:py-24 xl:py-32 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center max-w-7xl mx-auto">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          >
            {/* Brand Line */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-sm sm:text-base font-medium uppercase tracking-wider mb-4 sm:mb-6"
            >
              {renderBrandLine()}
            </motion.div>
            
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-black dark:text-white leading-tight mb-6 sm:mb-8">
              {props.initial}
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                {props.headlineKeywords[0]}
              </span>
            </h1>
            
            {/* Subheadline */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8 sm:mb-10 max-w-xl"
            >
              {props.subheadline}
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6"
            >
              {props.ctaButtons.map((btn, idx) => (
                <a
                  key={idx}
                  href={btn.link}
                  className={`
                    px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg
                    transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95
                    flex items-center justify-center gap-2
                    ${btn.variant === 'secondary'
                      ? 'bg-gray-100 dark:bg-gray-800 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600'
                      : 'bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white hover:shadow-xl hover:shadow-orange-500/25'
                    }
                  `}
                >
                  {btn.icon && <span className="text-lg">{btn.icon}</span>}
                  {btn.text}
                </a>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6 sm:gap-8"
          >
            {props.stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 + (idx * 0.1) }}
                className="relative group"
              >
                {/* Background Card */}
                <div className="bg-white dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-800 rounded-2xl p-6 sm:p-8 text-center h-full
                             transition-all duration-300 group-hover:border-orange-200 dark:group-hover:border-orange-800
                             group-hover:shadow-lg group-hover:shadow-orange-500/10">
                  
                  {/* Icon */}
                  <div className="mb-4 text-3xl sm:text-4xl text-gray-700 dark:text-gray-300 
                               transition-colors duration-300 group-hover:text-orange-500">
                    {stat.icon}
                  </div>
                  
                  {/* Title */}
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black dark:text-white mb-2">
                    {stat.title}
                  </div>
                  
                  {/* Description */}
                  <div className="text-sm sm:text-base text-gray-500 dark:text-gray-400 leading-relaxed">
                    {stat.description}
                  </div>
                </div>
                
                {/* Hover Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 rounded-2xl opacity-0 
                             group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm scale-105"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}