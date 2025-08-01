'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Service {
  id: string;
  name: string;
  image: string;
  slug: string;
}

interface ServicesCarouselProps {
  services: Service[];
  heading: string;
  subheading: string;
}

const servicess = [
  {
    id: '1',
    name: 'Real Estate',
    image: '/web-dev/real-estate.jpeg',
    slug: 'real-estate'
  },
  {
    id: '2',
    name: 'Hotel & Resorts',
    image: '/web-dev/hotel-resorts.jpeg',
    slug: 'hotel-resorts'
  },
  {
    id: '3',
    name: 'Gyms & Fitness',
    image: '/web-dev/gyms.jpeg',
    slug: 'gyms-fitness'
  },
  {
    id: '4',
    name: 'Restaurants & Cafes',
    image: '/web-dev/cafes.jpeg',
    slug: 'restaurants-cafes'
  },
  {
    id: '5',
    name: 'Fashion Brands',
    image: '/web-dev/fashion-brands.jpeg',
    slug: 'fashion-brands'
  },
  {
    id: '6',
    name: 'B2B Services',
    image: '/web-dev/b2b-services.jpeg',
    slug: 'b2b-services'
  },
  {
    id: '7',
    name: 'Consultants & Coaches',
    image: '/web-dev/consultants.jpeg',
    slug: 'consultants'
  },
  {
    id: '8',
    name: 'Local Businesses',
    image: '/web-dev/locals.png',
    slug: 'local-businesses'
  },
  {
    id: '9',
    name: 'Pharma Companies',
    image: '/web-dev/pharma.jpeg',
    slug: 'pharma-companies'
  },
  {
    id: '10',
    name: 'Interior Designers',
    image: '/web-dev/interior-designers.jpeg',
    slug: 'interior-designers'
  },
  {
    id: '11',
    name: 'Travel & Tourism',
    image: '/web-dev/travel-tourism.jpeg',
    slug: 'travel-tourism'
  },
  {
    id: '12',
    name: 'Doctors & Clinics',
    image: '/web-dev/doctors-clinics.jpeg',
    slug: 'doctors-clinics'
  },
  {
    id: '13',
    name: 'Startups & Entrepreneurs',
    image: '/web-dev/startups.jpeg',
    slug: 'startups-entrepreneurs'
  },
  {
    id: '14',
    name: 'B2C Services',
    image: '/web-dev/b2c-services.jpeg',
    slug: 'b2c-services'
  },
  {
    id: '15',
    name: 'Educational Institutions',
    image: '/web-dev/educational.jpeg',
    slug: 'educational-institutions'
  },
  {
    id: '16',
    name: 'E-Commerce Brands',
    image: '/web-dev/ecommerce.jpeg',
    slug: 'e-commerce-brands'
  }
]

export function ProvideServicesTo({ services = servicess, heading, subheading }: ServicesCarouselProps) {
  const pathName = usePathname();
  const parent = pathName.split('/')[2];
  const [isPaused, setIsPaused] = React.useState(false);
  // Duplicate services for infinite scroll effect
  const infiniteServices = [...services, ...services, ...services];

  return (
    <section className="relative py-20 overflow-hidden bg-white dark:bg-black border-b border-border dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-4 tracking-tight"
          >
            {heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            {subheading}
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Gradient Backdrop */}
          <div className="hidden sm:block absolute left-0 top-0 bottom-0 md:w-12 lg:w-24 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-black dark:via-black/80 z-10 pointer-events-none" />

          {/* Right Gradient Backdrop */}
          <div className="hidden sm:block absolute right-0 top-0 bottom-0 md:w-12 lg:w-24 bg-gradient-to-l from-white via-white/80 to-transparent dark:from-black dark:via-black/80 z-10 pointer-events-none" />

          {/* Infinite Scrolling Container */}
          <div className="flex overflow-hidden group/carousel">
            <motion.div
              className="flex gap-6"
              animate={{
                x: isPaused ? undefined : ['0%', '-33.333%'],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 30,
                  ease: 'linear',
                },
              }}
            >
              {infiniteServices.map((service, index) => (
                <ServiceCard
                  key={`${service.id}-${index}`}
                  service={service}
                  index={index}
                  parent={parent}
                  setIsPaused={setIsPaused}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: Service;
  index: number;
  parent?: string
  setIsPaused: React.Dispatch<React.SetStateAction<boolean>>;
}

function ServiceCard({ service, index, parent, setIsPaused }: ServiceCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex-shrink-0 w-80 h-64 group cursor-pointer"
      onHoverStart={() => {
        setIsHovered(true);
        setIsPaused(true);
      }}
      onHoverEnd={() => {
        setIsHovered(false);
        setIsPaused(false);
      }}
    >
      <Link href={`/services/${parent}/for-${service.slug}`}>
        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black shadow-2xl border border-gray-200 dark:border-gray-700">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70 group-hover:opacity-40 transition-opacity duration-500"
            style={{ backgroundImage: `url(${service.image})` }}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-black/10 to-transparent " />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col-reverse justify-between p-8">
            {/* Bottom Section - Service Name */}
            <div className="flex justify-start  rounded-lg transition-background duration-300">
              <div>
                <motion.h3
                  className="text-xl font-bold text-white mb-3 tracking-wide"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {service.name}
                </motion.h3>
                <motion.div
                  className="h-0.5 bg-white opacity-60"
                  initial={{ width: '3rem' }}
                  animate={{
                    width: isHovered ? '4.5rem' : '3rem',
                    opacity: isHovered ? 1 : 0.6
                  }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                />
              </div>
            </div>

            {/* Top Section - Small Elegant Arrow */}
            <div className="flex justify-end items-end">
              <motion.div
                whileHover={{ x: 3, y: -3, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-10 h-10 rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-sm border border-white/30 dark:border-gray-300 flex items-center justify-center group-hover:bg-white/30 dark:group-hover:bg-black/30 transition-colors duration-300"
              >
                <motion.div
                  animate={{ rotate: isHovered ? -45 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <ArrowRight className="w-4 h-4 text-white dark:text-white" />
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Hover Effect Overlay */}
          {/* <motion.div
            className="absolute inset-0 bg-gradient-to-r dark:from-gray-800/80 to-transparent dark:via-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            initial={false}
            whileHover={{
              x: ['-100%', '100%'],
              transition: { duration: 0.6, ease: 'easeInOut' }
            }}
          /> */}
        </div>
      </Link>
    </motion.div>
  );
}