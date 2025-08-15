// src/components/business-services/hero/Variant2.tsx
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

export default function HeroVariant2(props: HeroProps) {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
              {props.initial}
              <span className="text-yellow-300">{props.headlineKeywords[0]}</span>
            </h1>
            <p className="text-lg mb-8 opacity-90">
              {props.subheadline}
            </p>
            <div className="flex flex-wrap gap-4">
              {props.ctaButtons.map((btn, idx) => (
                <button
                  key={idx}
                  className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:bg-gray-100"
                >
                  {btn.text}
                </button>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {props.stats.map((stat, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold">{stat.title}</div>
                <div className="text-sm opacity-80">{stat.description}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
