import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import { IconLoader } from '@tabler/icons-react';

const ContactForm = dynamic(
  () => import('@/components/contact-form').then(mod => mod.ContactForm),
  {
    loading: () => <IconLoader className='text-4xl' />,
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

export default function WhyChooseUsVariant2({ title, trustPoints, cta }: WhyChooseUsProps) {
  const [showContact, setShowContact] = React.useState(false);

  return (
    <section className="py-24 bg-white dark:bg-black relative overflow-hidden transition-colors duration-300 border-b border-border dark:border-gray-700">
      {/* Background Decorations */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full opacity-10 blur-3xl dark:opacity-5" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full opacity-5 blur-3xl dark:opacity-3" />
      
      <div className="container px-4 mx-auto max-w-6xl relative z-10">
        {/* Split Title Animation */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
          >
            {typeof title === 'string' ? (
              title.split(' ').map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 50, rotateX: -90 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="inline-block mr-4"
                >
                  {word}
                </motion.span>
              ))
            ) : (
              title.map((part, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className={part.gradient ? "bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent" : "text-gray-900 dark:text-white"}
                >
                  {part.text}
                </motion.span>
              ))
            )}
          </motion.h2>
        </div>

        {/* Equal Height Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {trustPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 100, rotate: 5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15, type: "spring", damping: 20 }}
              viewport={{ once: true }}
              className={`relative group ${i === 1 ? 'md:mt-12' : ''} ${i === 2 ? 'lg:mt-24' : ''}`}
            >
              <motion.div
                whileHover={{ y: -10, rotateY: 5 }}
                transition={{ duration: 0.3 }}
                className="relative p-8 bg-white dark:bg-gray-900 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden flex flex-col"
              >
                {/* Floating Background Element */}
                <motion.div
                  animate={{ 
                    rotate: [0, 180, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 20, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                  className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full opacity-5 dark:opacity-3"
                />
                
                <div className="relative z-10 flex-1 flex flex-col">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: i * 0.15 + 0.3, type: "spring" }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="inline-flex items-center justify-center w-20 h-20 mb-6 text-3xl text-white bg-gradient-to-tr from-orange-500 via-pink-500 to-red-500 rounded-2xl shadow-lg"
                  >
                    {point.icon}
                  </motion.div>
                  
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.15 + 0.5 }}
                    viewport={{ once: true }}
                    className="text-2xl font-bold mb-4 text-gray-900 dark:text-white"
                  >
                    {point.title}
                  </motion.h3>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.15 + 0.7 }}
                    viewport={{ once: true }}
                    className="text-gray-700 dark:text-gray-200 leading-relaxed flex-1"
                  >
                    {point.description}
                  </motion.p>
                </div>

                {/* Hover Glow Effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 rounded-3xl opacity-0 blur-xl -z-10 group-hover:opacity-5 transition-opacity duration-300"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Magnetic CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 25px 50px rgba(251, 146, 60, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowContact(true)}
            className="relative group inline-flex items-center px-8 py-4 text-xl font-bold text-white bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 rounded-lg shadow-2xl overflow-hidden"
          >
            <motion.div
              animate={{ x: [-5, 5, -5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <span className="relative z-10 flex items-center">
              {cta.icon && (
                <motion.span
                  animate={{ rotate: [0, -45] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="mr-4 text-3xl"
                >
                  {cta.icon}
                </motion.span>
              )}
              {cta.text}
            </span>
          </motion.button>
        </motion.div>
      </div>

      <AnimatePresence>
        {showContact && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 dark:bg-opacity-70 z-50"
            onClick={() => setShowContact(false)}
          >
            <motion.div
              initial={{ scale: 0, rotate: -180, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0, rotate: 180, opacity: 0 }}
              transition={{ type: "spring", damping: 15, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ContactForm />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}