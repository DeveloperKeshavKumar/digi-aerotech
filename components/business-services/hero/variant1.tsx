// src/components/business-services/hero/HeroVariant1.tsx
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

export default function HeroVariant1(props: HeroProps) {
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
    <section className="bg-white dark:bg-black py-16 sm:py-20 lg:py-24 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-6xl mx-auto"
        >
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black dark:text-white leading-tight mb-4 sm:mb-6">
            {props.initial}{' '}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
              {props.headlineKeywords[0]}
            </span>
          </h1>
          
          {/* Brand Line */}
          <div className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 sm:mb-8">
            {renderBrandLine()}
          </div>
          
          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12"
          >
            {props.subheadline}
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-12 sm:mb-16"
          >
            {props.ctaButtons.map((btn, idx) => (
              <a
                key={idx}
                href={btn.link}
                className={`
                  w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg
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
          
          {/* Stats Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12"
          >
            {props.stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 + (idx * 0.1) }}
                className="text-center p-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800"
              >
                <div className="mb-3 text-2xl sm:text-3xl text-gray-700 dark:text-gray-300">
                  {stat.icon}
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-black dark:text-white mb-1">
                  {stat.title}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}