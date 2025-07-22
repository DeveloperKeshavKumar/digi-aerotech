'use client';

import React from 'react';
import Link from 'next/link';

interface TrustPoint {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface WhyChooseUsProps {
  title: string;
  trustPoints: TrustPoint[];
  cta: {
    text: string;
    link: string;
    icon?: React.ReactNode;
  };
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({
  title,
  trustPoints,
  cta,
}) => {
  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-950 border-b border-border dark:border-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light mb-12 text-center text-black dark:text-white">
          {title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className="p-8 border-1 bg-gray-100 dark:bg-gray-800/60 border-borde rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800/40 transition-colors duration-300 group"
            >
              <div className="text-black dark:text-white mb-4">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-black dark:text-white">
                {point.title}
              </h3>
              <p className="text-black dark:text-white">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href={cta.link}
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center rounded-lg bg-gray-900 hover:bg-gray-200 border border-transparent hover:border-gray-700 hover:dark:bg-gray-200 hover:text-black dark:bg-white text-white dark:text-black transition-all duration-300"
          >
            {cta.icon && <span className="mr-2">{cta.icon}</span>}
            {cta.text}
          </Link>
        </div>
      </div>
    </section>
  );
};
