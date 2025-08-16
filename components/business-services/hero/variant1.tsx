// src/components/business-services/hero/HeroVariant1.tsx
import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

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
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderBrandLine = () => {
    const transition = { duration: 0.5, delay: 0.8 };
    
    if (typeof props.brandLine === 'string') {
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={transition}
          className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-pink-500/10 border border-orange-500/20 backdrop-blur-sm"
        >
          <span className="text-sm font-medium bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
            {props.brandLine}
          </span>
        </motion.div>
      );
    }
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={transition}
        className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-pink-500/10 border border-orange-500/20 backdrop-blur-sm"
      >
        {props.brandLine.map((part, idx) => (
          <span
            key={idx}
            className={`text-sm font-medium ${part.gradient
                ? 'bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent'
                : 'text-gray-600 dark:text-gray-300'
              }`}
          >
            {part.text}
          </span>
        ))}
      </motion.div>
    );
  };

  // Floating animation for stats cards
  const FloatingCard = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    
    useEffect(() => {
      const floatAnimation = () => {
        animate(x, [0, 5, -5, 3, -3, 0], {
          duration: 20 + Math.random() * 10,
          repeat: Infinity,
          repeatType: "reverse",
          delay: delay,
        });
        animate(y, [0, 5, -5, 3, -3, 0], {
          duration: 15 + Math.random() * 10,
          repeat: Infinity,
          repeatType: "reverse",
          delay: delay,
        });
      };
      
      floatAnimation();
    }, [x, y, delay]);

    return (
      <motion.div style={{ x, y }}>
        {children}
      </motion.div>
    );
  };

  return (
    <section className="lg:min-h-screen bg-white dark:bg-black relative overflow-hidden mt-12 lg:mt-16 border-b border-border dark:border-gray-700">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-orange-500/6 to-pink-500/6 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-pink-500/4 to-transparent rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-orange-500/4 to-transparent rounded-full blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-center pt-16 pb-32">
        <div className="relative w-full max-w-6xl">
          
          {/* Central Content - at z-1 */}
          <div className="relative z-1 text-center mb-24 lg:mb-32">
            <div className="mb-8">
              {renderBrandLine()}
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900 dark:text-white mb-6"
            >
              <span className="block mb-2">{props.initial}</span>
              <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                {props.headlineKeywords[0]}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed"
            >
              {props.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              {props.ctaButtons.map((btn, idx) => (
                <motion.a
                  key={idx}
                  href={btn.link}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all ${btn.variant === 'secondary'
                      ? 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:border-orange-500'
                      : 'bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:shadow-lg'
                    }`}
                >
                  <span className="flex items-center justify-center gap-2">
                    {btn.icon}
                    {btn.text}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Stats Cards - positioned around central content at z-5 */}
          {props.stats.slice(0, 4).map((stat, idx) => {
            // Calculate positions based on window size to prevent overlap
            const isLargeScreen = windowSize.width >= 1024;
            const positions = [
              // Top Left
              { 
                top: isLargeScreen ? '0%' : '5%', 
                left: isLargeScreen ? '2%' : '0%',
                transform: 'translate(-50%, -50%)'
              },
              // Top Right
              { 
                top: isLargeScreen ? '6%' : '10%', 
                right: isLargeScreen ? '-15%' : '0%',
                transform: 'translate(50%, -50%)'
              },
              // Bottom Left
              { 
                bottom: isLargeScreen ? '5%' : '10%', 
                left: isLargeScreen ? '-5%' : '0%',
                transform: 'translate(-50%, 50%)'
              },
              // Bottom Right
              { 
                bottom: isLargeScreen ? '18%' : '10%', 
                right: isLargeScreen ? '0%' : '0%',
                transform: 'translate(50%, 50%)'
              }
            ];

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 + (idx * 0.15) }}
                onHoverStart={() => setHoveredStat(idx)}
                onHoverEnd={() => setHoveredStat(null)}
                className="hidden lg:block absolute w-64 group cursor-pointer z-5"
                style={positions[idx]}
              >
                <FloatingCard delay={idx * 0.2}>
                  <div className="p-6 rounded-2xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 shadow-lg transition-all duration-300 hover:bg-white/90 dark:hover:bg-gray-900/90 hover:scale-105">
                    <div className="flex items-start gap-4">
                      <motion.div
                        className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-semibold"
                        animate={hoveredStat === idx ? { rotate: 360 } : { rotate: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        {stat.icon || `0${idx + 1}`}
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {stat.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                          {stat.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </FloatingCard>
              </motion.div>
            );
          })}

          {/* Mobile Stats - Grid Below Content (visible on small screens) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 gap-6 lg:hidden mt-12"
          >
            {props.stats.slice(0, 4).map((stat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-semibold">
                    {stat.icon || `0${idx + 1}`}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {stat.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}