"use client";

import { motion } from "motion/react";
import React from "react";

interface StatsProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
}


export const StatsSection: React.FC<{ stats: StatsProps[] }> = ({ stats }) => {
  if (!stats || stats.length === 0) return null;
  return (
    <div className="w-full col-span-12 md:mt-8 lg:mt-4 sm:mb-20">
      {/* Small devices - individual cards */}
      <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:hidden">
        {stats?.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-start gap-3 p-4 sm:p-3 rounded-lg bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm border border-gray-200/40 dark:border-gray-800/40 shadow-lg hover:shadow-lg transition-shadow duration-300 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900/90 dark:shadow-gray-700/50 hover:scale-[1.02] transform"
          >
            {stat.icon && (
              <div className="flex-shrink-0 mt-0.5 text-gray-600 dark:text-gray-400">
                {stat.icon}
              </div>
            )}
            <div className="flex-1 min-w-0">
              <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-white leading-tight">
                {stat.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mt-1 leading-relaxed">
                {stat.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Large devices - single container with dividers */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="hidden lg:block max-w-4xl p-6 rounded-lg bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm border border-gray-200/40 dark:border-gray-800/40 shadow-lg"
      >
        <div className="grid grid-cols-4 divide-x divide-gray-300 dark:divide-gray-700">
          {stats?.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-3 px-6 first:pl-0 last:pr-0"
            >
              {stat.icon && (
                <div className="flex-shrink-0 text-gray-600 dark:text-gray-400">
                  {stat.icon}
                </div>
              )}
              <div className="flex-1">
                <h3 className="text-md font-medium text-gray-900 dark:text-white leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
                  {stat.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 leading-relaxed line-clamp-2">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};