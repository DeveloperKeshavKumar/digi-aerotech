"use client";
import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

interface Technology {
  id: number;
  name: string;
  logo: string;
  category?: string;
}

interface TechStackProps {
  title: string;
  subtitle: string;
  description: string;
  technologies: Technology[];
  categories?: string[];
}

export const TechStack: React.FC<TechStackProps> = ({
  title,
  subtitle,
  description,
  technologies,
  categories
}) => {
  const [activeCategory, setActiveCategory] = React.useState<string | null>(
    categories && categories.length > 0 ? categories[0] : null
  );

  const filteredTechnologies = React.useMemo(() => {
    if (!activeCategory || !categories || categories.length === 0) {
      return technologies;
    }
    return technologies.filter(tech => tech.category === activeCategory);
  }, [technologies, activeCategory, categories]);

  return (
    <div className="py-16 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-sm md:text-base font-medium tracking-wider text-blue-600 dark:text-blue-400 uppercase mb-2">
            {subtitle}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {title}
          </h3>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            {description}
          </p>
        </div>

        {categories && categories.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
          {filteredTechnologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              className="relative p-4 flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 h-32 w-full"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image
                src={tech.logo}
                alt={tech.name}
                fill
                className="object-contain mb-3"
              />
              <p className="text-sm text-center font-medium text-gray-700 dark:text-gray-300">
                {tech.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
