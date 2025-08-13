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
  description
}) => {
  return (
    <div>
      <div className="container px-4 md:px-6 min-h-[70vh] flex flex-col justify-center mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-4" data-aos="fade-up">
            {subtitle && (
              <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-br from-red-500 via-pink-600 to-orange-500 tracking-wide uppercase mb-4 block">
                {subtitle}
              </span>
            )}
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-prose">
              {description}
            </p>
            <div className="hidden lg:flex flex-row gap-4 pt-4">
              <button
              onClick={() => {
                const firstInput = document.querySelector<HTMLInputElement>('#cta-form input');
                firstInput?.focus();
              }}
              className="px-6 py-3 text-white font-medium bg-gradient-to-r from-red-500 via-pink-600 to-orange-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 rounded-lg transition-all"
              >
              Get Started
              </button>
              <button
              onClick={() => {
                const firstInput = document.querySelector<HTMLInputElement>('#cta-form input');
                firstInput?.focus();
              }}
              className="px-6 py-3 text-semibold text-black dark:text-white font-medium bg-transparent border border-gray-600 hover:bg-gray-50 dark:hover:bg-blue-900/20 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 rounded-lg transition-all"
              >
              Contact Sales
              </button>
            </div>
          </div>

          <div data-aos="fade-up" id='cta-form' data-aos-delay="200">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};
