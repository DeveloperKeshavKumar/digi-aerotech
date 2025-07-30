import React, { useEffect, useState } from 'react';
import { ContactForm } from '../contact-form';
import { motion } from 'motion/react';

interface ServiceHeroProps {
  titlepart1: string;
  titlepart2: string;
  subtitle: string;
  description: string;
}

export const ServiceHero: React.FC<ServiceHeroProps> = ({
  titlepart1,
  titlepart2,
  subtitle,
  description,
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      // Writing phase
      if (displayedText.length < titlepart2.length) {
        timeout = setTimeout(() => {
          setDisplayedText(titlepart2.slice(0, displayedText.length + 1));
        }, 50); // Writing speed
      } else {
        // Pause before deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1000); // Pause duration
      }
    } else {
      // Deleting phase
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50 ); // Deleting speed (faster)
      } else {
        // Pause before writing again
        timeout = setTimeout(() => {
          setIsDeleting(false);
        }, 100); // Short pause before rewriting
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, titlepart2]);

  useEffect(() => {
    // Blinking cursor effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    setDisplayedText('');
    setIsDeleting(false);
  }, [titlepart2]);

  return (
    <div className="relative lg:mt-16 w-full py-12 md:py-24 lg:py-32 lg:min-h-screen overflow-hidden border-b border-border dark:border-gray-800">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col space-y-4" data-aos="fade-up">
            <h2 className="text-sm md:text-base font-medium tracking-wider text-transparent bg-clip-text bg-gradient-to-br from-red-500 via-pink-600 to-orange-500 uppercase">
              {subtitle}
            </h2>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
              {titlepart1}
              <span className="relative block items-baseline">
                <span className="min-h-[1.2em] inline-flex items-baseline bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-red-500">
                  {displayedText.split('').map((char, index) => (
                    <motion.span
                      key={`${char}-${index}-${displayedText.length}`}
                      transition={{
                        duration: 0.2,
                        ease: "easeOut"
                      }}
                      className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-red-500"
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </motion.span>
                  ))}
                </span>

                {/* Animated cursor */}
                <motion.span
                  animate={{
                    opacity: showCursor ? 1 : 0.2
                  }}
                  transition={{
                    duration: 0.1,
                    ease: "easeInOut"
                  }}
                  className="inline-block ml-1 w-0.5 h-8 md:h-12 bg-gradient-to-b from-orange-500 via-pink-500 to-red-500"
                />
              </span>
            </h1>
            <p className="max-w-prose text-gray-600 dark:text-gray-400 md:text-lg">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button className="px-6 py-3 text-white font-medium bg-gradient-to-br from-red-500 via-pink-600 to-orange-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg transition-all hover:scale-105 transform">
                Get Started
              </button>
              <button className="px-6 py-3 text-transparent bg-clip-text font-medium bg-gradient-to-br from-red-500 via-pink-600 to-orange-500 border hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition-all hover:scale-105 transform">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative hidden md:block" data-aos="fade-up" data-aos-delay="200">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};