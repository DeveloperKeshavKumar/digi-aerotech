// src/components/business-services/hero/HeroVariant2.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

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
        <div className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full mb-8">
          <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
          {props.brandLine}
        </div>
      );
    }
    return (
      <div className="mb-8">
        {props.brandLine.map((part, idx) => (
          <span
            key={idx}
            className={`text-sm font-medium ${part.gradient
              ? 'bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent'
              : 'text-gray-700 dark:text-gray-300'
              }`}
          >
            {part.text}
          </span>
        ))}
      </div>
    );
  };

  return (
    <section className="min-h-screen mt-12 bg-white dark:bg-black border-b border-border dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center py-16">

        {/* Main Content - Centered */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          {renderBrandLine()}

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-gray-900 dark:text-white mb-8">
            {props.initial}{' '}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
              {props.headlineKeywords[0]}
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed mb-10 max-w-3xl mx-auto">
            {props.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {props.ctaButtons.map((btn, idx) => (
              <a
                key={idx}
                href={btn.link}
                className={`inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 ${btn.variant === 'secondary'
                  ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                  : 'bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white hover:shadow-lg hover:scale-105'
                  }`}
              >
                {btn.icon && <span>{btn.icon}</span>}
                {btn.text}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-16">
          {/* Mobile 2×2 Grid (shown on small screens) */}
          <div className="grid grid-cols-2 gap-4 md:hidden">
            {props.stats.slice(0, 4).map((stat, idx) => (
              <motion.div
                key={`mobile-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
                className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
              >
                <StatBlock stat={stat} />
              </motion.div>
            ))}
          </div>

          {/* Desktop 1×4 Grid (shown on medium screens and up) */}
          <div className="hidden md:grid grid-cols-4 gap-8 max-w-5xl mx-auto">
            {props.stats.map((stat, idx) => (
              <motion.div
                key={`desktop-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
                className="text-center border dark:border-gray-700 p-4 rounded-lg"
              >
                <StatBlock stat={stat} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatBlock({ stat }: { stat: { title: string; description: string; icon?: React.ReactNode } }) {
  return (
    <div className="h-full flex flex-col">
      {stat.icon ? <div className="mb-2">{stat.icon}</div> : <div className="mb-2">
        <Globe />
      </div>}
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
        {stat.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mt-2">
        {stat.description}
      </p>
      <div className="mt-auto pt-4 border-gray-100 dark:border-gray-800">
        <div className="w-15 h-0.5 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 rounded-full animate-pulse" />
      </div>
    </div>
  );
}