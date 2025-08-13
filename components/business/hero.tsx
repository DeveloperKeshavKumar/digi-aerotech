'use client';

import { motion, inView } from 'motion/react';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { BusinessData } from '@/types/business.types';
import { IconChartArea, IconTrophy } from '@tabler/icons-react';

type CTAButton = {
  text: string;
  link?: string;
  variant: 'primary' | 'secondary';
  icon?: React.ReactNode;
};

type BrandLinePart = {
  text: string;
  gradient?: boolean;
  gradientClass?: string;
};

type BusinessHeroProps = BusinessData['hero'] & {
  initial?: string;
  headlineKeywords?: string[];
  brandLine?: string | BrandLinePart[];
  subheadline?: string;
  ctaButtons?: CTAButton[];
};

export const BusinessHero: React.FC<BusinessHeroProps> = ({
  initial = "Accelerate your business growth with ",
  headlineKeywords = [],
  brandLine = "Smart marketing strategies for business and studio success",
  subheadline = "We help businesses drive 2X-3.5X more memberships through localized SEO, paid media, and automation.",
  ctaButtons = [
    {
      text: 'Get Free Growth Audit',
      link: '/free-revenue-audit',
      variant: 'primary',
      icon: <IconChartArea size={20} />
    },
    {
      text: 'Contact us',
      link: '/contact',
      variant: 'secondary',
      icon: <IconTrophy size={20} />
    }
  ],
}) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [showing, setShowing] = useState(true);
  const [currentDisplay, setCurrentDisplay] = useState('');

  const currentWord = headlineKeywords[wordIndex] || "";

  useEffect(() => {
    if (headlineKeywords.length === 0) return;

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

  useEffect(() => {
    if (heroRef.current) {
      inView(heroRef.current, () => {
        setVisible(true);
      }, { margin: '-100px' });
    }
  }, []);

  const renderBrandLine = () => {
    if (!brandLine) return null;

    if (typeof brandLine === "string") {
      return <span className="text-black dark:text-white">{brandLine}</span>;
    }

    return (
      <>
        {brandLine.map((part, index) =>
          part.gradient ? (
            <span
              key={index}
              className={`bg-gradient-to-r ${part.gradientClass || 'from-orange-500 via-pink-500 to-red-500'} bg-clip-text text-transparent`}
            >
              {part.text}
            </span>
          ) : (
            <span key={index} className="text-black dark:text-white">{part.text}</span>
          )
        )}
      </>
    );
  };

  return (
    <section className="bg-white dark:bg-black pt-20 lg:pt-32 mt-16">
      <div
        ref={heroRef}
        className="max-w-7xl mx-auto px-6 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          <span className="text-black dark:text-white mb-6">{initial} </span>
          <br />
          <span>
            {headlineKeywords.length > 0 && (
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                {currentDisplay}
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="ml-0.5"
                >
                  |
                </motion.span>
              </span>
            )}
          </span>
          <div className="mt-4">
            {renderBrandLine()}
          </div>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto"
        >
          {subheadline}
        </motion.p>

        {ctaButtons && ctaButtons.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            {ctaButtons.map((button, index) => (
              button.link ? (
                <Link
                  key={index}
                  href={button.link}
                  className={`px-8 py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${button.variant === 'secondary'
                    ? 'border-2 border-gray-300 dark:border-gray-700 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900'
                    : 'bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white hover:shadow-lg'
                    }`}
                >
                  {button.icon}
                  {button.text}
                </Link>
              ) : (
                <button
                  key={index}
                  className={`px-8 py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${button.variant === 'secondary'
                    ? 'border-2 border-gray-300 dark:border-gray-700 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900'
                    : 'bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white hover:shadow-lg'
                    }`}
                >
                  {button.icon}
                  {button.text}
                </button>
              )
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};