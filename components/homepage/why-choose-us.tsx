'use client';

import { motion } from 'motion/react';
import { inView } from 'motion';
import React, { useEffect, useRef, useState } from 'react';

interface TrustPoint {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface WhyChooseUsProps {
  title: string;
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
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sectionRef.current) {
      inView(sectionRef.current, () => {
        setVisible(true);
      }, { margin: '-100px' });
    }
  }, []);

  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-950 border-b border-border dark:border-white">
      <div ref={sectionRef} className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-light mb-12 text-center text-black dark:text-white"
        >
          {title}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {trustPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-8 border-1 bg-gray-100 dark:bg-gray-800/60 border-borde rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800/40 transition-colors duration-300 group"
            >
              <div className="text-black dark:text-white mb-4">
                {React.cloneElement(point.icon as React.ReactElement)}
              </div>
              <h3 className="text-xl font-bold mb-3 text-black dark:text-white">
                {point.title}
              </h3>
              <p className="text-black dark:text-white">{point.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={visible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center"
        >
          <a
            href={cta.link}
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center rounded-lg bg-gray-900 hover:bg-gray-200 border border-transparent hover:border-gray-700 hover:dark:bg-gray-200 hover:text-black dark:bg-white text-white dark:text-black"
          >
            {cta.icon && <span className="mr-2">{cta.icon}</span>}
            {cta.text}
          </a>
        </motion.div>
      </div>
    </section>
  );
};
