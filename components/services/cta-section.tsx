import React from 'react';
import { ContactForm } from '../contact-form';

interface CTAProps {
  title: string;
  subtitle?: string;
  description: string;
  backgroundColor?: string;
}

export const CTA: React.FC<CTAProps> = ({
  title,
  subtitle,
  description,
  backgroundColor = "bg-blue-50 dark:bg-blue-950/30"
}) => {
  return (
    <div className={`py-16 ${backgroundColor}`}>
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-4" data-aos="fade-up">
            {subtitle && (
              <h2 className="text-sm md:text-base font-medium tracking-wider text-blue-600 dark:text-blue-400 uppercase">
                {subtitle}
              </h2>
            )}
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-prose">
              {description}
            </p>
            <div className="hidden lg:flex flex-row gap-4 pt-4">
              <button className="px-6 py-3 text-white font-medium bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg transition-all">
                Get Started
              </button>
              <button className="px-6 py-3 text-blue-600 font-medium bg-transparent border border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg transition-all">
                Contact Sales
              </button>
            </div>
          </div>
          
          <div data-aos="fade-up" data-aos-delay="200">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};
