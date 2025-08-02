"use client";
import React from 'react';
import { motion } from 'motion/react';
import { IconDiscGolf, IconMessageCircle } from '@tabler/icons-react';
import { ContactForm } from '../contact-form';

interface Service {
  id: number;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface TypesOfServicesProps {
  title: string;
  subtitle: string;
  description: string;
  services: Service[];
}

export const TypesOfServices: React.FC<TypesOfServicesProps> = ({
  title,
  subtitle,
  description,
  services
}) => {
  const [showContact, setShowContact] = React.useState(false);
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-16 border-b border-border dark:border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-br from-red-500 via-pink-600 to-orange-500 tracking-wide uppercase mb-4 block">
            {subtitle}
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            {title}
          </h2>
          <p className="text-md text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 via-pink-600 to-orange-500 rounded-xl mb-6 text-white shadow-lg"
                >
                  {service.icon}
                </motion.div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white  bg-clip-text transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Hover indicator */}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                  className="h-1   bg-gradient-to-br from-red-500 via-pink-600 to-orange-500 rounded-full mt-6"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <>
            <div className="flex justify-center">
              <motion.button
                type="button"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="inline-flex items-center justify-center px-5 py-3 text-lg font-medium rounded-lg bg-gradient-to-r from-red-600 via-pink-600 to-orange-500 hover:from-orange-500 hover:via-pink-500 hover:to-red-400 transition-all duration-200 border border-transparent text-white"
                onClick={() => setShowContact(true)}
              >
                <div className="flex items-center gap-3">
                    <IconMessageCircle size={24} className="text-white" />
                  <span className="text-lg">Discuss Your Project</span>
                </div>
              </motion.button>
            </div>

            {showContact && (
              <div
                className="fixed inset-0 flex items-center justify-center bg-opacity-70 backdrop-blur-md z-50"
                onClick={() => setShowContact(false)}
              >
                <div
                  className=""
                  onClick={(e) => e.stopPropagation()}
                >
                  <ContactForm />
                </div>
              </div>
            )}
          </>

        </motion.div>
      </div>
    </motion.section>
  );
};