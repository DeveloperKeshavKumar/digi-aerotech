import React from 'react';
import { ContactForm } from '../contact-form';

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
  image?: string;
}

export const ServiceHero: React.FC<ServiceHeroProps> = ({
  title,
  subtitle,
  description,
}) => {
  return (
    <div className="relative lg:mt-16 w-full py-12 md:py-24 lg:py-32 min-h-screen overflow-hidden border-b border-border dark:border-gray-950">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col space-y-4" data-aos="fade-up">
            <h2 className="text-sm md:text-base font-medium tracking-wider text-transparent bg-clip-text bg-gradient-to-br from-red-500 via-pink-600 to-orange-500 uppercase">
              {subtitle}
            </h2>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h1>
            <p className="max-w-prose text-gray-600 dark:text-gray-400 md:text-lg">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button className="px-6 py-3 text-white font-medium bg-gradient-to-br from-red-500 via-pink-600 to-orange-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg transition-all">
                Get Started
              </button>
              <button className="px-6 py-3 text-transparent bg-clip-text  font-medium bg-gradient-to-br from-red-500 via-pink-600 to-orange-500 border  hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition-all">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative" data-aos="fade-up" data-aos-delay="200">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};
