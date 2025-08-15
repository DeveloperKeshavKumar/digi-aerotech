// src/components/business-services/hero/variant1.tsx
import React from 'react';
import { motion } from 'framer-motion';

// Import the exact type from your service types
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
  // Handle brandLine being either string or array
  const brandText = typeof props.brandLine === 'string' 
    ? props.brandLine 
    : props.brandLine.map(part => part.text).join('');

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {props.initial}
            <span className="text-blue-600">{props.headlineKeywords[0]}</span>
          </h1>
          <div className="text-2xl font-semibold mb-4">{brandText}</div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {props.subheadline}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {props.ctaButtons.map((btn, idx) => (
              <a
                key={idx}
                href={btn.link}
                className={`px-6 py-3 rounded-lg font-medium ${
                  btn.variant === 'secondary'
                    ? 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {btn.icon && <span className="mr-2">{btn.icon}</span>}
                {btn.text}
              </a>
            ))}
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {props.stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold">{stat.title}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
