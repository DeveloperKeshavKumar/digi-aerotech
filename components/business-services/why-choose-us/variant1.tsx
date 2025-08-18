import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import { IconLoader2 } from '@tabler/icons-react';

const ContactForm = dynamic(
  () => import('@/components/contact-form').then(mod => mod.ContactForm),
  {
    loading: () => <IconLoader2 className='text-4xl' />,
    ssr: false
  }
);

interface WhyChooseUsProps {
  title: string | Array<{ text: string; gradient?: boolean }>;
  trustPoints: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
  }>;
  cta: {
    text: string;
    icon?: React.ReactNode;
  };
}

export default function WhyChooseUsVariant1({ title, trustPoints, cta }: WhyChooseUsProps) {
  const [showContact, setShowContact] = React.useState(false);

  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="container px-4 mx-auto max-w-6xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 dark:text-white">
            {typeof title === 'string' ? title : title.map((part, i) => (
              <span key={i} className={part.gradient ? "bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent" : ""}>
                {part.text}
              </span>
            ))}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        {/* Cards Grid - Equal Height */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          {trustPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <div className="flex-1 p-8 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300 flex flex-col h-full">
                <div className="w-14 h-14 mb-6 flex items-center justify-center text-2xl text-white bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg">
                  {point.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 dark:text-white">{point.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">{point.description}</p>
                <div className="w-10 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Centered CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button
            onClick={() => setShowContact(true)}
            className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg hover:shadow-lg transition-all"
          >
            {cta.icon && <span className="mr-3">{cta.icon}</span>}
            {cta.text}
          </button>
        </motion.div>
      </div>

      {/* Contact Form Modal */}
       <AnimatePresence>
              {showContact && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 flex items-center justify-center bg-opacity-75 backdrop-blur-md z-50 p-4"
                  onClick={() => setShowContact(false)}
                >
                  <motion.div
                    initial={{ scale: 0.5, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0.5, rotate: 10 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    onClick={(e) => e.stopPropagation()}
                    className="w-full max-w-md sm:max-w-lg"
                  >
                    <ContactForm className='bg-background rounded-2xl' />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
    </section>
  );
}