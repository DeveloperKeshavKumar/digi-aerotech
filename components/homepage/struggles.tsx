'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, inView } from 'motion/react';
import { IconMoodCry, IconMoodHappy } from '@tabler/icons-react';
import { LucideArrowBigRightDash } from 'lucide-react';

interface StrugglesProps {
  title: string | { text: string; gradient?: boolean; gradientClass?: string }[];
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
      inView(
        sectionRef.current,
        () => {
          setVisible(true);
        },
        { margin: '-50px' }
      );
    }
  }, []);

  // Helper to render title with gradient
  const renderTitle = () => {
    if (typeof title === 'string') {
      return title;
    }
    return title.map((part, idx) =>
      part.gradient ? (
        <span
          key={idx}
          className={`bg-clip-text text-transparent bg-gradient-to-r ${part.gradientClass || "from-red-500 via-pink-500 to-yellow-500"}`}
        >
          {part.text}
        </span>
      ) : (
        <span key={idx}>{part.text}</span>
      )
    );
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 sm:mt-10 px-4 bg-white dark:bg-black border-b border-gray-300 dark:border-gray-700"
    >
      <div className="flex flex-col items-center justify-center max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-2xl text-center md:text-3xl font-semibold mb-4 text-gray-900 dark:text-white"
        >
          {renderTitle()}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-md text-center mb-8 text-gray-800 dark:text-gray-200"
        >
          {subheadline}
        </motion.p>

        <ul className="space-y-4 md:space-y-0 mb-10 mx-auto">
          <li className="hidden md:grid md:grid-cols-2 md:gap-8 border-b border-gray-300 dark:border-gray-700 pb-4 md:pb-0 md:border-0 last:border-0">
            <div className="flex items-start mb-7 md:mb-4">
              <span className="flex items-center text-xl text-gray-900 dark:text-white underline underline-offset-4">
                <LucideArrowBigRightDash className="mr-2" />
                Your business is struggling from this.
              </span>
            </div>
            <div className="flex items-start">
              <span className="flex items-center text-xl text-gray-900 dark:text-white underline underline-offset-4">
                <LucideArrowBigRightDash className="mr-2" />
                Digi Aerotech can do this!
              </span>
            </div>
          </li>

          {painPoints.map((painPoint, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
              className="md:grid md:grid-cols-2 md:gap-8 border-b border-gray-300 dark:border-gray-700 pb-4 md:pb-0 md:border-0 last:border-0"
            >
              <div className="flex items-start mb-7 md:mb-4">
                <span className="text-2xl mr-2 text-red-600 dark:text-red-400">
                  <IconMoodCry />
                </span>
                <span className="text-lg text-gray-900 dark:text-gray-100">
                  {painPoint}
                </span>
              </div>
              <div className="flex items-start">
                <span className="text-2xl mr-2 text-green-600 dark:text-green-400">
                  <IconMoodHappy />
                </span>
                <span className="text-lg text-gray-900 dark:text-gray-100">
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
          className="inline-flex items-center justify-center px-5 py-3 text-lg font-medium rounded-lg bg-gray-900 hover:bg-gray-100 hover dark:bg-white dark:hover:bg-gray-800 hover:scale-105 transition-all duration-200 border border-transparent text-white bg-gradient-to-r from-red-600 via-pink-600 to-orange-500 hover:from-orange-500 hover:via-pink-500 hover:to-red-400"
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
