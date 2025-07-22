'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, inView } from 'motion/react';
import { IconMoodCry, IconMoodHappy } from '@tabler/icons-react';
import { LucideArrowBigRightDash } from 'lucide-react';

interface StrugglesProps {
  title: string;
  subheadline: string;
  painPoints: string[];
  solutionPoints: string[];
  cta: {
    icon: React.ReactNode;
    text: string;
    link: string;
  };
}

export const Struggles: React.FC<StrugglesProps> = ({
  title,
  subheadline,
  painPoints,
  solutionPoints,
  cta,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sectionRef.current) {
      inView(sectionRef.current, () => {
        setVisible(true);
      }, { margin: '-50px' });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-12 px-4 bg-white dark:bg-black border-b border-border dark:border-white"
    >
      <div className="flex flex-col items-center justify-center max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-2xl text-center md:text-3xl font-light mb-4 text-black dark:text-white"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-md text-center mb-8 text-black dark:text-white"
        >
          {subheadline}
        </motion.p>

        <ul className="space-y-4 md:space-y-0 mb-10">
          <li className="hidden md:grid md:grid-cols-2 md:gap-8 border-b border-gray-200 dark:border-gray-800 pb-4 md:pb-0 md:border-0 last:border-0">
            <div className="flex items-start mb-7 md:mb-4">
              <span className="flex items-center text-xl text-black dark:text-white underline underline-offset-5">
                <LucideArrowBigRightDash /> If your business is struggling from this.
              </span>
            </div>
            <div className="flex items-start">
              <span className="flex items-center text-xl text-black dark:text-white underline underline-offset-5">
                <LucideArrowBigRightDash /> Digi Aerotech can do this!
              </span>
            </div>
          </li>

          {painPoints.map((painPoint, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
              className="md:grid md:grid-cols-2 md:gap-8 border-b border-gray-200 dark:border-gray-800 pb-4 md:pb-0 md:border-0 last:border-0"
            >
              <div className="flex items-start mb-7 md:mb-4">
                <span className="text-2xl mr-2 text-red-400 dark:text-red-300">
                  <IconMoodCry />
                </span>
                <span className="text-lg text-black dark:text-white">{painPoint}</span>
              </div>
              <div className="flex items-start">
                <span className="text-2xl mr-2 text-green-400 dark:text-green-300">
                  <IconMoodHappy />
                </span>
                <span className="text-lg text-black dark:text-white">
                  {solutionPoints[index]}
                </span>
              </div>
            </motion.li>
          ))}
        </ul>

        <motion.a
          href={cta.link}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={visible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center rounded-lg bg-gray-900 hover:bg-gray-200 border border-transparent hover:border-gray-700 hover:dark:bg-gray-200 hover:text-black dark:bg-white text-white dark:text-black"
        >
          <div className="flex items-center gap-3">
            <span>{cta.icon}</span>
            <span className="text-lg">{cta.text}</span>
          </div>
        </motion.a>
      </div>
    </section>
  );
};
