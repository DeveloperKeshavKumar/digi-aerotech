'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, inView } from 'motion/react';
import { Ambulance, Briefcase, Dumbbell, Home, Hotel, Phone, Plane, Shirt, ShoppingCart, Stethoscope, Store, TrendingUp, Utensils } from 'lucide-react';
import Link from 'next/link';
import { IconBuilding, IconBuildingFactory2, IconPalette } from '@tabler/icons-react';
import { cn } from '@/lib/utils';

interface IndustryItem {
  name: string;
  url: string;
  icon?: React.ReactNode;
}

interface WhoWeWorkWithProps {
  industries?: IndustryItem[];
  title?: string | { text: string; gradient?: boolean; gradientClass?: string }[];
  description?: string;
  rows?: number;
  speed?: 'slow' | 'medium' | 'fast';
  className?: string;
}

export const WhoWeWorkWith = ({
  industries = [
    {
      name: "Restaurants & Cafes",
      url: "/restaurants-cafes",
      icon: <Utensils className="w-5 h-5" />
    },
    {
      name: "Hotels & Resorts",
      url: "/hotel-resorts",
      icon: <Hotel className="w-5 h-5" />
    },
    {
      name: "Doctors & Clinics",
      url: "/doctors-clinics",
      icon: <Stethoscope className="w-5 h-5" />
    },
    {
      name: "Gyms & Fitness",
      url: "/gyms-fitness",
      icon: <Dumbbell className="w-5 h-5" />
    },
    {
      name: "Fashion Brands",
      url: "/fashion-brands",
      icon: <Shirt className="w-5 h-5" />
    },
    {
      name: "Real Estate",
      url: "/real-estate",
      icon: <Home className="w-5 h-5" />
    },
    {
      name: "B2C Brands",
      url: "/b2c-services",
      icon: <IconBuilding className="w-5 h-5" />
    },
    {
      name: "Consultants",
      url: "/consultants",
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      name: "Local Shops",
      url: "/local-businesses",
      icon: <Store className="w-5 h-5" />
    },
    {
      name: "eCommerce",
      url: "/e-commerce-brands",
      icon: <ShoppingCart className="w-5 h-5" />
    },
    {
      name: "Startups",
      url: "/startups-entrepreneurs",
      icon: <Phone className="w-5 h-5" />
    },
    {
      name: "B2B Businesses",
      url: "/b2b-services",
      icon: <IconBuildingFactory2 className="w-5 h-5" />
    },
    {
      name: "Travel & Tourism",
      url: "/travel-tourism",
      icon: <Plane className="w-5 h-5" />
    },
    {
      name: "Interior Designers",
      url: "/interior-designers",
      icon: <IconPalette className="w-5 h-5" />
    },
    {
      name: "Pharma Companies",
      url: '/pharma-companies',
      icon: <Ambulance className="w-5 h-5" />
    }
  ],
  title = [
    { text: "Who we " },
    { text: "work with?", gradient: true, gradientClass: "from-red-500 via-pink-500 to-yellow-500" }
  ],
  description = 'We work with businesses across these industries',
  rows = 3,
  speed = 'fast',
  className = '',
}: WhoWeWorkWithProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sectionRef.current) {
      inView(sectionRef.current, () => {
        setVisible(true);
      }, { margin: '-50px' });
    }
  }, []);

  const itemsPerRow = Math.ceil(industries.length / rows);
  const industryRows = Array.from({ length: rows }).map((_, i) =>
    industries.slice(i * itemsPerRow, (i + 1) * itemsPerRow)
  );

  const speedClasses = {
    slow: '60s',
    medium: '40s',
    fast: '20s',
  };

  const TopicRow = ({
    items,
    direction = 'left',
    delay = 0,
  }: {
    items: IndustryItem[];
    direction: 'left' | 'right';
    delay: number;
  }) => {
    const duplicatedItems = [...items, ...items, ...items, ...items];

    return (
      <div className="overflow-hidden py-4 whitespace-nowrap relative w-full">
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-50 dark:from-gray-950 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-50 dark:from-gray-950 to-transparent z-10" />

        <div
          className={`inline-flex items-center gap-4 ${direction === 'left'
            ? 'animate-scroll-left-infinite'
            : 'animate-scroll-right-infinite'
            }`}
          style={{
            animationDelay: `${delay}ms`,
            animationDuration: speedClasses[speed],
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
          }}
        >
          {duplicatedItems.map((item, index) => (
            <Link
              href={`/business${item.url}`}
              key={`${index}`}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-full px-6 py-3 flex items-center gap-3 hover:shadow-md transition-all duration-300 group flex-shrink-0"
            >
              {item.icon ? (
                <div className="w-6 h-6 flex items-center justify-center text-gray-700 dark:text-gray-300">
                  {item.icon}
                </div>
              ) : (
                <TrendingUp className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              )}
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200 whitespace-nowrap">
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    );
  };

  // Helper to render title with gradient
  const renderTitle = () => {
    if (typeof title === 'string') {
      return title;
    }
    return title.map((part, idx) =>
      part.gradient ? (
        <span
          key={idx}
          className={`bg-clip-text text-transparent bg-gradient-to-r ${part.gradientClass || "from-pink-500 via-yellow-500 to-blue-500"}`}
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
      className={cn("py-16 px-4 bg-gray-50 dark:bg-gray-950 overflow-hidden border-b border-border dark:border-gray-700", className)}
    >
      <div className="container mx-auto">
        {
          title.length > 0 &&
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-4 leading-tight">
              {renderTitle()}
            </h2>
            {
              description.length > 0 &&
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                {description}
              </p>
            }
          </motion.div>}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {industryRows.map((row, i) => (
            <TopicRow
              key={i}
              items={row}
              direction={i % 2 === 0 ? 'left' : 'right'}
              delay={i * 300}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
