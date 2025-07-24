import Link from 'next/link';
import React from 'react';

interface Example {
  title: string;
  link: string;
}

interface OurWorkProps {
  title: string | { text: string; gradient?: boolean; gradientClass?: string }[];
  examples: Example[];
  cta: {
    text: string;
    link: string;
  };
}

export const OurWork: React.FC<OurWorkProps> = ({ title, examples, cta }) => {
  // Helper to render title with gradient
  const renderTitle = () => {
    if (typeof title === 'string') {
      return title;
    }
    return title.map((part, idx) =>
      part.gradient ? (
        <span
          key={idx}
          className={`bg-clip-text text-transparent bg-gradient-to-r ${part.gradientClass || "from-orange-400 via-pink-500 to-red-500"}`}
        >
          {part.text}
        </span>
      ) : (
        <span key={idx}>{part.text}</span>
      )
    );
  };

  return (
    <section className="py-12 px-4 bg-white dark:bg-black border-b border-black dark:border-gray-700">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-black dark:text-white">
          {renderTitle()}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {examples.map((example, index) => (
            <Link
              key={index}
              href={example.link}
              className="p-6 border-2 border-black dark:border-white rounded-lg hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors"
            >
              <h3 className="text-xl font-bold">{example.title}</h3>
            </Link>
          ))}
        </div>
        
        <div className="text-center">
          <Link
            href={cta.link}
            className="inline-block px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-medium rounded-md text-lg"
          >
            {cta.text}
          </Link>
        </div>
      </div>
    </section>
  );
};