// components/business/stats.tsx
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { StatsProps } from '@/business/business.types';

interface BusinessStatsProps {
  stats: StatsProps[];
  title?: string;
  subtitle?: string;
  description?: string;
}

export function BusinessStats({
  stats,
  title,
  subtitle,
  description
}: BusinessStatsProps) {
  return (
    <section className="py-20 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        {(title || subtitle || description) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {subtitle && (
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-lg text-gray-600 dark:text-gray-400 font-medium mb-4"
              >
                {subtitle}
              </motion.p>
            )}

            {title && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-3xl md:text-5xl font-bold mb-6"
              >
                <span className="text-black dark:text-white">Our </span>
                <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  Impact
                </span>
              </motion.h2>
            )}

            {description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
              >
                {description}
              </motion.p>
            )}
          </motion.div>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              className="text-center group border rounded-2xl p-6 bg-gray-50 dark:bg-gray-900"
            >
              {/* Icon */}
              {stat.icon && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-6 flex justify-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 via-pink-500 to-red-500 rounded-2xl flex items-center justify-center text-white text-2xl group-hover:shadow-lg group-hover:shadow-orange-500/25 transition-all duration-300">
                    {stat.icon}
                  </div>
                </motion.div>
              )}

              {/* Value */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-2"
              >
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </h3>
              </motion.div>

              {/* Title */}
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-xl font-semibold text-black dark:text-white mb-1 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300"
              >
                {stat.title}
              </motion.h4>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-base text-gray-600 dark:text-gray-400 leading-relaxed"
              >
                {stat.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}