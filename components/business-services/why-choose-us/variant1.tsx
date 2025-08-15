// src/components/business-services/why-choose-us/WhyChooseUsVariant1.tsx
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

export default function WhyChooseUsVariant1(props: WhyChooseUsProps) {
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
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black dark:text-white leading-tight">
              {renderTitle()}
            </h2>
          </motion.div>

          {/* Trust Points Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16 lg:mb-20">
            {props.trustPoints.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: idx * 0.1,
                  ease: "easeOut" 
                }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white dark:bg-gray-900 p-6 sm:p-8 lg:p-10 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 
                             transition-all duration-300 hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-gray-800/50 
                             hover:border-gray-300 dark:hover:border-gray-700 hover:-translate-y-1">
                  
                  {/* Icon */}
                  <div className="mb-6 text-4xl sm:text-5xl text-gray-700 dark:text-gray-300 
                               transition-all duration-300 group-hover:text-orange-500 group-hover:scale-110">
                    {point.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-4 
                               transition-colors duration-300 group-hover:text-transparent 
                               group-hover:bg-gradient-to-r group-hover:from-orange-500 
                               group-hover:via-pink-500 group-hover:to-red-500 group-hover:bg-clip-text">
                    {point.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center"
          >
            <a
              href={props.cta.link}
              className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 
                       bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 
                       text-white font-semibold text-lg sm:text-xl rounded-2xl 
                       transition-all duration-300 hover:scale-105 hover:shadow-xl 
                       hover:shadow-orange-500/25 active:scale-95"
            >
              {props.cta.icon && <span className="text-xl sm:text-2xl">{props.cta.icon}</span>}
              {props.cta.text}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}