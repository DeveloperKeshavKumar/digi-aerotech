'use client';

import React from 'react';
import Link from 'next/link';

interface TrustPoint {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface WhyChooseUsProps {
  title: string | { text: string; gradient?: boolean; gradientClass?: string }[];
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
  // Helper to render title with gradient
  const renderTitle = () => {
    if (typeof title === 'string') {
      return title;
    }
    return title.map((part, idx) =>
      part.gradient ? (
        <span
          key={idx}
          className={`bg-clip-text text-transparent bg-gradient-to-r ${part.gradientClass || "from-green-400 via-blue-500 to-purple-500"}`}
        >
          {part.text}
        </span>
      ) : (
        <span key={idx}>{part.text}</span>
      )
    );
  };

  return (
    <section className="py-16 mt-10 px-4 bg-gray-50 dark:bg-gray-950 border-b border-border dark:border-gray-700">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center text-black dark:text-white">
          {renderTitle()}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className="p-8 border-1 bg-white dark:bg-gray-800/60 border-borde rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800/40 transition-colors duration-300 group shadow-lg "
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
            className="inline-flex items-center justify-center px-5 py-3 text-lg font-medium text-center rounded-lg bg-gray-900 hover:bg-gray-200 border border-transparent hover:border-gray-700 hover:dark:bg-gray-200 dark:bg-white   transition-all duration-300 text-white bg-gradient-to-r from-red-600 via-pink-600 to-orange-500 hover:from-orange-500 hover:via-pink-500 hover:to-red-400"
          >
            {cta.icon && <span className="mr-2">{cta.icon}</span>}
            {cta.text}
          </Link>
        </div>
      </div>
    </section>
  );
};
