'use client';

import { motion, inView } from 'motion/react';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { BorderBeam } from '../ui/border-beam';

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
                  : 'bg-gray-900 hover:bg-gray-700 border border-transparent hover:border-gray-700 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-black bg-gradient-to-r from-orange-600 via-pink-600 to-red-500 hover:from-orange-500 hover:via-pink-500 hover:to-red-400'
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
          className="lg:col-span-5 xl:col-span-6 flex items-center"
        >
          <ContactForm />
        </motion.div>

      </div>
    </section>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    businessType: '',
    startDate: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="hidden md:block w-full max-w-md mx-auto lg:mx-0 lg:ml-auto lg:-mt-10">
      <div className="bg-white/80 dark:bg-gray-800/60 border-b-0 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-6 lg:p-8 shadow-xl dark:shadow-gray-600/50">
        <div className="mb-4">
          <h3 className="text-2xl text-center font-semibold text-gray-900 dark:text-white mb-2">
            Get Started Today
          </h3>
          <p className="text-gray-600 text-center dark:text-gray-400 text-sm">
            Tell us about your project and we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name"></Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete={"true"}
                placeholder="Enter your full name"
                className="bg-white/50 dark:bg-gray-800/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone"></Label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                autoComplete={"true"}
                placeholder="+1 (555) 123-4567"
                className="bg-white/50 dark:bg-gray-800/50"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email"></Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete={"true"}
                placeholder="your@email.com"
                className="bg-white/50 dark:bg-gray-800/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="service"></Label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="flex h-10 w-full rounded-md border border-input bg-white/50 dark:bg-gray-800/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:rounded-2xl file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="">Service you looking for?</option>
                <option value="web-development">Web Development</option>
                <option value="mobile-app">Mobile App Development</option>
                <option value="digital-marketing">Digital Marketing</option>
                <option value="ecommerce">E-commerce Solutions</option>
                <option value="consulting">IT Consulting</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="businessType"></Label>
            <select
              id="businessType"
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
              required
              className="flex h-10 w-full rounded-md border border-input bg-white/50 dark:bg-gray-800/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="">What&apos;s your business type</option>
              <option value="startup">Startup</option>
              <option value="small-business">Small Business</option>
              <option value="enterprise">Enterprise</option>
              <option value="agency">Agency</option>
              <option value="nonprofit">Non-Profit</option>
              <option value="individual">Individual</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="startDate"></Label>
            <Input
              type="text"
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
              placeholder="When do you want to start?"
              className="bg-white/50 dark:bg-gray-800/50"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-600 via-pink-600 to-red-500 text-lg text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 shadow-lg mt-4"
          >
            Send Inquiry
          </button>

        </form>

        <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">
          We respect your privacy. Your information is secure and won&apos;t be shared.
        </p>
        <BorderBeam
          duration={6}
          size={400}
          className="from-transparent via-red-500 to-transparent mt-4"
        />
        <BorderBeam
          duration={6}
          delay={3}
          size={400}
          borderWidth={2}
          className="rounded-lg from-transparent via-blue-500 to-transparent"
        />
      </div>

    </div>
  );
};

const StatsSection: React.FC<{ stats: StatsProps[] }> = ({ stats }) => {
  if (!stats || stats.length === 0) return null;
  return (
    <div className="w-full col-span-12 md:mt-8 lg:mt-4 sm:mb-20">
      {/* Small devices - individual cards */}
      <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:hidden">
        {stats?.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-start gap-3 p-4 sm:p-3 rounded-lg bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm border border-gray-200/40 dark:border-gray-800/40 shadow-lg hover:shadow-lg transition-shadow duration-300 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900/90 dark:shadow-gray-700/50 hover:scale-[1.02] transform"
          >
            {stat.icon && (
              <div className="flex-shrink-0 mt-0.5 text-gray-600 dark:text-gray-400">
                {stat.icon}
              </div>
            )}
            <div className="flex-1 min-w-0">
              <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-white leading-tight">
                {stat.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mt-1 leading-relaxed">
                {stat.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Large devices - single container with dividers */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="hidden lg:block max-w-4xl p-6 rounded-lg bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm border border-gray-200/40 dark:border-gray-800/40 shadow-lg"
      >
        <div className="grid grid-cols-4 divide-x divide-gray-300 dark:divide-gray-700">
          {stats?.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-3 px-6 first:pl-0 last:pr-0"
            >
              {stat.icon && (
                <div className="flex-shrink-0 text-gray-600 dark:text-gray-400">
                  {stat.icon}
                </div>
              )}
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white leading-tight">
                  {stat.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};