'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { inView } from 'motion'
import { ArrowRight, Layout } from 'lucide-react';
// import Link from 'next/link';

interface ServiceTag {
  icon: React.ReactNode;
  text: string;
  styles?: string;
}

interface Service {
  name: string;
  icon: React.ReactNode;
  gridClass: string;
  description: string;
  url?: string;
  highlight?: boolean;
  tag?: ServiceTag;
}

interface OurServicesProps {
  title: string;
  subheadline: string;
  services: Service[];
  cta: {
    text: string;
    link: string;
  };
}

export const OurServices: React.FC<OurServicesProps> = ({ title, subheadline, services, cta }) => {
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
    <section ref={sectionRef} className="py-16 px-4 bg-white dark:bg-black border-b border-border dark:border-gray-700">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black dark:text-white">
            {title}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {subheadline}
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={visible ? {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  delay: index * 0.08,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1]
                }
              } : {}}
              whileHover={{
                y: -5,
                scale: 1.02,
                transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
              }}
              className={`
                ${service.gridClass || 'md:col-span-3'} 
                border relative group overflow-hidden rounded-2xl p-6 transition-all duration-300 
                bg-gray-50 dark:bg-gray-800/60 
                hover:bg-gray-100 dark:hover:bg-gray-800/40 hover:ring-2 ring-pink-500/70 dark:ring-pink-400/50 hover:shadow-2xl shadow-pink-400/40 dark:shadow-pink-500/30 hover:105`
              }
            >
              {/* Tag */}
              {service.tag && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={visible ? {
                    opacity: 1,
                    x: 0,
                    transition: { delay: index * 0.08 + 0.2 }
                  } : {}}
                  className={`absolute top-4 right-4 flex items-center gap-1 px-3 py-2 rounded-full text-xs font-medium 
                    ${service.tag.styles || 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'}`}
                >
                  <span className="text-sm">{service.tag.icon}</span>
                  <span>{service.tag.text}</span>
                </motion.div>
              )}

              {/* Inner Content */}
              <div className="relative z-10 h-full flex flex-col">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={visible ? {
                    opacity: 1,
                    scale: 1,
                    transition: { delay: index * 0.08 + 0.1 }
                  } : {}}
                  className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-black/5 dark:bg-white/5"
                >
                  {service.icon}
                </motion.div>

                <h3 className="text-xl font-bold mb-2 text-black dark:text-white">
                  {service.name}
                </h3>

                <p className="mb-4 text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>

                <a href={`services${service.url || ''}`} className="mt-auto">
                  <motion.span
                    whileHover={{ x: 3 }}
                    className="inline-flex items-center gap-1 text-sm font-medium text-black dark:text-white"
                  >
                    Learn more
                    <ArrowRight size={16} />
                  </motion.span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={visible ? {
            opacity: 1,
            scale: 1,
            transition: {
              delay: 0.4,
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1]
            }
          } : {}}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
          className="text-center"
        >
          <a
            href={cta.link}
            className="inline-flex items-center gap-4 justify-center px-5 py-3 text-base font-medium text-center rounded-lg bg-gray-900 hover:bg-gray-200 border border-transparent hover:border-gray-700 hover:dark:bg-gray-200 hover:text-black dark:bg-white text-white dark:text-black"
          >
            <Layout size={20} />
            {cta.text}
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
