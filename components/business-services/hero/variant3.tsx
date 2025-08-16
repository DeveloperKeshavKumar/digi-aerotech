import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Icon } from 'lucide-react';
import { IconStar } from '@tabler/icons-react';

interface HeroProps {
  initial: string;
  headlineKeywords: string[];
  brandLine: string | Array<{ text: string; gradient?: boolean }>;
  subheadline: string;
  ctaButtons: Array<{ text: string; link: string; variant?: 'primary' | 'secondary', icon?: React.ReactNode }>;
  stats: Array<{ title: string; description: string; icon?: React.ReactNode }>;
}

export default function HeroVariant3(props: HeroProps) {
  // Your specified grid structure (Row ↓ | Col 0 | Col 1)
  const statsLayout = [
    { id: 0, row: 0, col: 1, rowSpan: 2 }, // Stat 1 (right, spans rows 0-1)
    { id: 1, row: 1, col: 0, rowSpan: 2 }, // Stat 2 (left, spans rows 1-2)
    { id: 2, row: 2, col: 1, rowSpan: 2 }, // Stat 3 (right, spans rows 2-3)
    { id: 3, row: 3, col: 0, rowSpan: 2 }  // Stat 4 (left, spans rows 3-4)
  ];

  return (
    <section className="bg-white min-h-screen dark:bg-black mt-12 border-b border-border dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left Column (Text Content) - 3/5 width */}
          <div className="lg:col-span-3 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-sm font-semibold leading-tight tracking-wider uppercase text-pink-600"
            >
              {typeof props.brandLine === 'string' ? (
                props.brandLine
              ) : (
                <>
                  {props.brandLine.map((part, i) => (
                    <span
                      key={i}
                      className={part.gradient ? "bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent" : ""}
                    >
                      {part.text}
                    </span>
                  ))}
                </>
              )}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white"
            >
              {props.initial}
              <span className="block bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                {props.headlineKeywords[0]}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-200"
            >
              {props.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex gap-4 flex-col sm:flex-row"
            >
              {props.ctaButtons.map((btn, i) => (
                <a
                  key={i}
                  href={btn.link}
                  className={`px-6 py-4 rounded-lg font-medium transition-all flex items-center gap-3 ${btn.variant === 'secondary'
                    ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
                    : 'bg-gradient-to-r from-orange-600 to-pink-600 text-white hover:shadow-lg'
                    }`}
                >
                  {btn.icon && <span className="mr-2">{btn.icon}</span>}
                  {btn.text}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Column (Bento Grid) */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4 h-auto lg:grid-rows-5 lg:h-[550px] relative">
              {/* Stats - Mobile 2x2 grid */}
              {props.stats.slice(0, 4).map((stat, id) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * id }}
                  className={`p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 md:hidden`}
                >
                  <StatBlock stat={stat} />
                </motion.div>
              ))}

              {/* Stats - Desktop bento grid (hidden on mobile) */}
              {statsLayout.map(({ id, row, col, rowSpan }) => (
                <motion.div
                  key={`desktop-${id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * id }}
                  className={` p-6 rounded-xl bg-white dark:bg-gray-950  border border-gray-200 dark:border-gray-800 hidden md:block col-start-${col + 1} row-start-${row + 1} row-span-${rowSpan} `}
                >
                  <StatBlock stat={props.stats[id]} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatBlock({ stat }: { stat: { title: string; description: string; icon?: React.ReactNode } }) {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-3 mb-3">
        {stat.icon ? (
          <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
            {stat.icon}
          </div>
        ) : (
          <div className="flex-shrink-0 w-8 h-8 flex items-center justify-cente">
            <Globe className="w-5 h-5" />
          </div>
        )}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {stat.title}
        </h3>
      </div>
      <p className="text-gray-600 dark:text-gray-400 mt-2">
        {stat.description}
      </p>
      <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
        <div className="w-15 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500" />
      </div>
    </div>
  );
}