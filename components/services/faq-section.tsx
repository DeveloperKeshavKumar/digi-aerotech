'use client';

import { useState, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Code} from 'lucide-react';
import { BorderBeam } from '../ui/border-beam';

interface FAQItem {
    id: string;
    question: string;
    answer: string;
    icon?: React.ReactNode; // Add icon support
}

interface FaqSectionProps {
    heading: {
        part1: string;
        part2: string;
    };
    faqs: FAQItem[];
}

// Memoized FAQ item component with enhanced visuals
const FAQItem = memo(({ faq, onToggle, isActive }: {
    faq: FAQItem;
    onToggle: (id: string) => void;
    isActive: boolean;
}) => {
    const handleClick = useCallback(() => {
        onToggle(faq.id);
    }, [faq.id, onToggle]);

    return (
        <div className="relative">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 ${isActive ? 'scale-[1.01]' : ''}`}
            >
                {isActive &&
                    <BorderBeam size={200} />}
                <button
                    onClick={handleClick}
                    className="w-full px-6 py-4 text-left flex items-center justify-between group"
                    aria-expanded={isActive}
                    aria-controls={`faq-answer-${faq.id}`}
                >
                    <div className="flex items-start space-x-4">
                        <div className={`p-2 rounded-lg ${isActive ? 'bg-gradient-to-br from-orange-500 via-pink-600 to-red-500 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'}`}>
                            {faq.icon || <Code className="w-5 h-5" />}
                        </div>
                        <h3 className={`text-lg text-black dark:text-white pr-4 text-left`}>
                            {faq.question}
                        </h3>
                    </div>
                    <div className="flex-shrink-0 relative">
                        <motion.div
                            animate={{ rotate: isActive ? 180 : 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="relative z-10"
                        >
                            <ChevronDown className={`w-5 h-5  transition-colors rounded-full ${isActive ? 'text-white bg-gradient-to-br from-orange-500 via-pink-600 to-red-500' : 'text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300'}`} />
                        </motion.div>
                    </div>
                </button>

                <AnimatePresence mode="wait">
                    {isActive && (
                        <motion.div
                            key={`answer-${faq.id}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                                duration: 0.3,
                                ease: "easeInOut",
                                opacity: { duration: 0.2 }
                            }}
                            id={`faq-answer-${faq.id}`}
                            className="overflow-hidden"
                        >
                            <div className="px-6 pb-4 border-t border-gray-100 dark:border-gray-800">
                                <motion.p
                                    initial={{ y: -10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -10, opacity: 0 }}
                                    transition={{ delay: 0.1, duration: 0.3 }}
                                    className="text-gray-600 dark:text-gray-300 pt-4 leading-relaxed"
                                >
                                    {faq.answer}
                                </motion.p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
});

FAQItem.displayName = 'FAQItem';

export function FaqSection({ heading, faqs }: FaqSectionProps) {
    const [activeItems, setActiveItems] = useState<Set<string>>(new Set());

    const toggleItem = useCallback((id: string) => {
        setActiveItems(prev => {
            const newActiveItems = new Set(prev);
            if (newActiveItems.has(id)) {
                newActiveItems.delete(id);
            } else {
                newActiveItems.add(id);
            }
            return newActiveItems;
        });
    }, []);

    const leftColumnFaqs = faqs.filter((_, index) => index % 2 === 0);
    const rightColumnFaqs = faqs.filter((_, index) => index % 2 === 1);

    return (
        <section className="py-16 sm:py-20 bg-gray-50 dark:bg-black border-b border-border dark:border-gray-700">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white">
                        {heading.part1}
                        <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                            {heading.part2}
                        </span>
                    </h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
                    >
                        Explore our capabilities through these interactive questions. Each answer demonstrates our expertise.
                    </motion.p>
                </motion.div>

                <div className="max-w-7xl mx-auto">
                    {/* Mobile and Tablet Layout - Single Column */}
                    <div className="lg:hidden space-y-4">
                        {faqs.map((faq) => (
                            <FAQItem
                                key={faq.id}
                                faq={faq}
                                onToggle={toggleItem}
                                isActive={activeItems.has(faq.id)}
                            />
                        ))}
                    </div>

                    {/* Desktop Layout - Two Columns */}
                    <div className="hidden lg:grid lg:grid-cols-2 lg:gap-8">
                        {/* Left Column */}
                        <div className="space-y-4">
                            {leftColumnFaqs.map((faq) => (
                                <FAQItem
                                    key={faq.id}
                                    faq={faq}
                                    onToggle={toggleItem}
                                    isActive={activeItems.has(faq.id)}
                                />
                            ))}
                        </div>

                        {/* Right Column */}
                        <div className="space-y-4">
                            {rightColumnFaqs.map((faq) => (
                                <FAQItem
                                    key={faq.id}
                                    faq={faq}
                                    onToggle={toggleItem}
                                    isActive={activeItems.has(faq.id)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}