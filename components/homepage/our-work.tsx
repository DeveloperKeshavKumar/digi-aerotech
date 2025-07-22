import Link from 'next/link';
import React from 'react';

interface Example {
  title: string;
  link: string;
}

interface OurWorkProps {
  title: string;
  examples: Example[];
  cta: {
    text: string;
    link: string;
  };
}

export const OurWork: React.FC<OurWorkProps> = ({ title, examples, cta }) => {
  return (
    <section className="py-12 px-4 bg-white dark:bg-black border-b border-black dark:border-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-black dark:text-white">
          {title}
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