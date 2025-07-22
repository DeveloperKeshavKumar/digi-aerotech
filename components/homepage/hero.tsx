'use client';

import { motion } from 'motion/react';
import { inView } from 'motion';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

interface CTAButton {
  icon?: React.ReactNode;
  text: string;
  link: string;
  variant?: 'primary' | 'secondary';
}

interface HeroProps {
  headline: string;
  subheadline: string;
  ctaButtons: CTAButton[];
}

export const Hero: React.FC<HeroProps> = ({ headline, subheadline, ctaButtons }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (heroRef.current) {
      inView(heroRef.current, () => {
        setVisible(true);
      }, { margin: '-100px' });
    }
  }, []);

  return (
    <section className="py-12 px-4 bg-white dark:bg-black border-b border-border dark:border-white">
      <div
        ref={heroRef}
        className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mr-auto place-self-center lg:col-span-7"
        >
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="max-w-xl mb-4 text-4xl font-medium tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
          >
            {headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="max-w-xl text-justify mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-300"
          >
            {subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={visible ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row justify-start gap-4"
          >
            {ctaButtons.map((button, index) => (
              <Link
                key={index}
                href={button.link}
                className={`inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center rounded-lg ${button.variant === 'secondary'
                  ? 'bg-gray-100 dark:bg-gray-900 text-black dark:text-gray-100 border border-black dark:border-gray-100'
                  : 'bg-gray-900 hover:bg-gray-200 border border-transparent hover:border-gray-700 hover:dark:bg-gray-200 hover:text-black dark:bg-white text-white dark:text-black'
                  }`}
              >
                {button.icon && <span className="mr-2">{button.icon}</span>}
                {button.text}
              </Link>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={visible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-4 relative hidden md:mt-0 lg:col-span-5 lg:flex"
        >
          <Image src="/logo.svg" alt="Digi aerotech" fill className="invert dark:invert-0" />
        </motion.div>
      </div>
    </section>
  );
};
