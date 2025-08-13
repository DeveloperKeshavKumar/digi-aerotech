// components/business/services.tsx
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { BusinessData } from '@/types/business.types';

type BusinessServicesProps = BusinessData['services'];


export function BusinessServices({
  title,
  subtitle,
  description,
  items
}: BusinessServicesProps) {
  return (
    <section className="py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
              className="text-lg text-gray-600 font-medium mb-4"
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
              <span className="text-black">{title.split(' ').slice(0, 3).join(' ')} </span>
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                {title.split(' ').slice(3).join(' ')}
              </span>
            </motion.h2>
          )}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((service, index) => (
            <motion.a
              href={`/services/${service.url || service.link || '#'}`}
              key={service.id || index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ y: -5 }}
              className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div className="mb-6">
                {typeof service.icon === 'string' ? (
                  <div className="w-16 h-16 bg-gradient-to-tr from-orange-500 via-pink-500 to-red-500 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                ) : (
                  <div className="w-16 h-16 bg-gradient-to-tr from-orange-500 via-pink-500 to-red-500 rounded-2xl flex items-center justify-center text-white">
                    {service.icon}
                  </div>
                )}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-black mb-4 transition-all duration-300">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>

              {service.link && (
                <motion.div
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-black font-semibold hover:bg-gradient-to-r hover:from-orange-500 hover:via-pink-500 hover:to-red-500 hover:bg-clip-text hover:text-transparent transition-all duration-300"
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.div>
              )}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
