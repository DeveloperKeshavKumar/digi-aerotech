// src/components/business-services/hero/Variant3.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  initial: string;
  headlineKeywords: string[];
  brandLine: Array<{ text: string; gradient?: boolean; gradientClass?: string }>;
  subheadline: string;
  ctaButtons: any[];
  stats: any[];
}

export default function HeroVariant3(props: HeroProps) {
  return (
    <section className="bg-black text-white py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-pink-500/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="text-6xl md:text-8xl font-black mb-8">
            {props.initial}
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              {props.headlineKeywords[0]}
            </span>
          </h1>
          <p className="text-2xl mb-12 max-w-4xl mx-auto leading-relaxed">
            {props.subheadline}
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {props.ctaButtons.map((btn, idx) => (
              <button
                key={idx}
                className="px-12 py-5 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full text-xl font-bold hover:scale-105 transition-transform"
              >
                {btn.text}
              </button>
            ))}
          </div>
          <div className="flex justify-center items-center space-x-12">
            {props.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-orange-500">{stat.title}</div>
                <div className="text-sm opacity-70">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
