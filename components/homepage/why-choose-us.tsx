'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ContactForm } from '../contact-form';

interface TrustPoint {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface WhyChooseUsProps {
  title: string | { text: string; gradient?: boolean; gradientClass?: string }[];
  trustPoints: TrustPoint[];
  cta: {
    text: string;
    link: string;
    icon?: React.ReactNode;
  };
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({
  title,
  trustPoints,
  cta,
}) => {
  const [showContact, setShowContact] = React.useState(false);
  // Helper to render title with gradient
  const renderTitle = () => {
    if (typeof title === 'string') {
      return title;
    }
    return title.map((part, idx) =>
      part.gradient ? (
        <span
          key={idx}
          className={`bg-clip-text text-transparent bg-gradient-to-r ${part.gradientClass || "from-green-400 via-blue-500 to-purple-500"}`}
        >
          {part.text}
        </span>
      ) : (
        <span key={idx}>{part.text}</span>
      )
    );
  };

  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-950 border-b border-border dark:border-gray-700">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center text-black dark:text-white">
          {renderTitle()}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className="p-8 border-1 bg-white dark:bg-gray-800/60 border-borde rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800/40 transition-colors duration-300 group shadow-lg "
            >
              <div className="text-black dark:text-white mb-4">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-black dark:text-white">
                {point.title}
              </h3>
              <p className="text-black dark:text-white">{point.description}</p>
            </div>
          ))}
        </div>

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
              <span>{cta.icon}</span>
              <span className="text-lg">{cta.text}</span>
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
      </div>
    </section>
  );
};
