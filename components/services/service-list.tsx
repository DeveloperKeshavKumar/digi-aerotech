'use client';

import React from 'react';
import { motion } from 'motion/react';

interface ServiceItem {
    id: number;
    title: string;
    description: string;
    image: string;
    url?: string;
    href?: string;
}

interface ServiceListProps {
    title: string | { text: string; gradient?: boolean; gradientClass?: string }[];
    services: ServiceItem[];
}

export const ServiceList: React.FC<ServiceListProps> = ({
    title,
    services,
}) => {
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
        <section className="py-16 mt-10 px-4 w-full bg-gray-50 dark:bg-gray-950 border-b border-border dark:border-gray-700">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center text-black dark:text-white">
                    {renderTitle()}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {services.map((point, index) => (
                        <div
                            key={index}
                            className="p-8 border-1 bg-white dark:bg-gray-800/60 border-borde rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/40 transition-colors duration-300 group shadow-lg "
                        >
                            <div className="text-black dark:text-white mb-4">
                                {point.image && (
                                    <motion.img
                                        src={point.image}
                                        alt={point.title}
                                        className="w-full h-40 object-contain rounded-lg mb-"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: 0.1 }}
                                        whileHover={{ scale: 1.05 }}
                                    />
                                )}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-black dark:text-white">
                                {point.title}
                            </h3>
                            <p className="text-black dark:text-white">{point.description}</p>
                            <a href={point.href || (point.url ? `/services/${point.url}` : '#')} className='mt-4 inline-block bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 text-white py-2 px-4 rounded '>
                                Know More
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
