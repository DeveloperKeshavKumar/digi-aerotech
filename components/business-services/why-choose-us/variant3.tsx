import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import { IconLoader3 } from '@tabler/icons-react';

const ContactForm = dynamic(
  () => import('@/components/contact-form').then(mod => mod.ContactForm),
  {
    loading: () => <IconLoader3 className='text-4xl' />,
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

export default function WhyChooseUsVariant3({ title, trustPoints, cta }: WhyChooseUsProps) {
  const [showContact, setShowContact] = React.useState(false);

  // Remove fixed height calculation and let content determine card height
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white dark:bg-gray-950 overflow-hidden">
      <div className="container px-4 mx-auto max-w-7xl">
        {/* Animated Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white mb-6 px-2">
            {typeof title === 'string' ? title : title.map((part, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={part.gradient ? "bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent" : ""}
              >
                {part.text}
              </motion.span>
            ))}
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative mb-12 md:mb-16">
          {/* Timeline Line - Hidden on mobile, shown on tablet and desktop */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="hidden sm:block absolute top-[120px] sm:top-1/2 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full transform -translate-y-1/2 origin-left"
          />

          {/* Timeline Points and Cards - Grid layout for better responsiveness */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {trustPoints.slice(0, 4).map((point, i) => (
              <div key={i} className="w-full">
                {/* Card with dynamic height */}
                <motion.div
                  initial={{ opacity: 0, y: 50, rotateX: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="relative group h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity" />
                  <div className="relative p-5 sm:p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-orange-300 dark:hover:border-pink-400 transition-all h-full flex flex-col">
                    {/* Icon with responsive positioning */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: i * 0.2 + 0.3 }}
                      viewport={{ once: true }}
                      className=" mb-4"
                    >
                      {point.icon}
                    </motion.div>
                    <h3 className="text-lg font-bold mb-3 dark:text-white">{point.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA with Pulse Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowContact(true)}
            className="relative inline-flex items-center px-6 py-3 text-base sm:text-lg font-bold text-white bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 rounded-lg overflow-hidden group"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 rounded-lg max-w-max opacity-30"
            />
            <span className="relative z-10 flex items-center">
              {cta.icon && <span className="mr-2 sm:mr-3 text-xl">{cta.icon}</span>}
              {cta.text}
            </span>
          </motion.button>
        </motion.div>
      </div>

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