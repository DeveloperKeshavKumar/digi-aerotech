'use client';

import { motion, inView } from 'motion/react';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { StatsSection } from '../stats-section';
import { ContactForm } from '../contact-form';

interface StatsProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

interface CTAButton {
  icon?: React.ReactNode;
  text: string;
  link: string;
  variant?: 'primary' | 'secondary';
}

interface HeroProps {
  headlineKeywords: string[];
  brandLine: string | { text: string; gradient?: boolean; gradientClass?: string }[];
  subheadline: string;
  ctaButtons: CTAButton[];
  stats: StatsProps[];
}

export const Hero: React.FC<HeroProps> = ({ headlineKeywords, brandLine, subheadline, ctaButtons, stats }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [showing, setShowing] = useState(true);
  const [currentDisplay, setCurrentDisplay] = useState('');

  const currentWord = headlineKeywords[wordIndex];

  useEffect(() => {
    let timeout: NodeJS.Timeout;


    const animate = () => {
      if (showing) {
        if (letterIndex < currentWord.length) {
          setCurrentDisplay(currentWord.substring(0, letterIndex + 1));
          timeout = setTimeout(() => setLetterIndex(prev => prev + 1), 80);
        } else {
          timeout = setTimeout(() => setShowing(false), 3500);
        }
      } else {
        if (letterIndex > 0) {
          setCurrentDisplay(currentWord.substring(0, letterIndex - 1));
          timeout = setTimeout(() => setLetterIndex(prev => prev - 1), 40);
        } else {
          setWordIndex(prev => (prev + 1) % headlineKeywords.length);
          setShowing(true);
        }
      }
    };

    const animationFrame: number = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
      clearTimeout(timeout);
    };
  }, [letterIndex, showing, currentWord, headlineKeywords]);

  const gradientMap: Record<string, string> = {
    Leads: "from-green-400 via-blue-500 to-purple-500",
    Sales: "from-orange-400 via-pink-500 to-red-500",
    Reach: "from-yellow-300 via-rose-400 to-fuchsia-500",
    Growth: "from-green-400 via-blue-500 to-purple-500",
    Visibility: "from-orange-400 via-pink-500 to-red-500",
    Revenue: "from-yellow-300 via-rose-400 to-fuchsia-500",
    Success: "from-green-400 via-blue-500 to-purple-500",
  };

  useEffect(() => {
    if (heroRef.current) {
      inView(heroRef.current, () => {
        setVisible(true);
      }, { margin: '-100px' });
    }
  }, []);

  // Helper to render brandLine with gradients
  const renderBrandLine = () => {
    if (typeof brandLine === "string") {
      return <span className="block mt-2 text-gray-900 dark:text-white">{brandLine}</span>;
    }
    return (
      <span className="block mt-2 text-gray-900 dark:text-white">
        {brandLine.map((part, idx) =>
          part.gradient ? (
            <span
              key={idx}
              className={`inline bg-clip-text text-transparent bg-gradient-to-r ${part.gradientClass || "from-pink-500 via-yellow-500 to-blue-500"}`}
            >
              {part.text}
            </span>
          ) : (
            <span key={idx}>{part.text}</span>
          )
        )}
      </span>
    );
  };

  return (
    <section className="py-9 px-4 bg-white dark:bg-black border-b border-border dark:border-0 md:min-h-screen flex items-center">
      <div
        ref={heroRef}
        className=" max-w-7xl mx-auto px-4 py-8 lg:py-16 flex flex-col lg:grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 xl:gap-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center"
        >
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mb-4 text-4xl sm:text-center lg:text-left font-semibold tracking-tight leading-tight md:text-5xl xl:text-6xl dark:text-white"
          >
            <span className="block">
              Need{" "}
              <span className={`inline-flex bg-clip-text text-transparent bg-gradient-to-r ${gradientMap[currentWord] || "from-pink-500 via-yellow-500 to-blue-500"}`}>
                <motion.span
                  key={wordIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {currentDisplay}?
                  <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="ml-0.5"
                  >
                    |
                  </motion.span>
                </motion.span>
              </span>
            </span>
            {renderBrandLine()}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="max-w-xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg md:text-center lg:text-left lg:text-xl dark:text-gray-300"
          >
            {subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={visible ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 md:mb-8 sm:hidden"
          >
            {ctaButtons.map((button, index) => (
              <Link
                key={index}
                href={button.link}
                className={`inline-flex items-center justify-center px-4 py-3 text-base font-medium text-center rounded-lg transition-all duration-300 ${button.variant === 'secondary'
                  ? 'bg-gray-100 dark:bg-gray-900 text-black dark:text-gray-100 border border-black dark:border-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800'
                  : 'text-white bg-gradient-to-r from-orange-600 via-pink-600 to-red-500 hover:from-orange-500 hover:via-pink-500 hover:to-red-400'
                  }`}
              >
                {button.icon && <span className="mr-2">{button.icon}</span>}
                {button.text}
              </Link>
            ))}
          </motion.div>
          <StatsSection stats={stats} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={visible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:col-span-5 xl:col-span-6 hidden md:block sm:flex items-center "
        >
          <ContactForm />
        </motion.div>

      </div>
    </section>
  );
};