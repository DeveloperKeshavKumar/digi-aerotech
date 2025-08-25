import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import dynamic from "next/dynamic";
import { IconGoGame, IconLoader3 } from "@tabler/icons-react";

const ContactForm = dynamic(
  () => import("@/components/contact-form").then((mod) => mod.ContactForm),
  {
    loading: () => <IconLoader3 />,
    ssr: false,
  }
);

interface ProcessProps {
  title?: string | Array<{ text: string; gradient?: boolean }>;
  subtitle?: string;
  description?: string;
  className?: string;
  steps: Array<{ id: number; title: string; description: string }>;
}

export default function ProcessVariant1({
  title = 'Our Process',
  subtitle,
  className = "",
  steps,
}: ProcessProps) {
  const [showContact, setShowContact] = useState(false);

  return (
    <section className={`py-20 bg-gray-50 dark:bg-gray-950 border-b border-border dark:border-gray-700 ${className}`}>
      <div className="container px-4 mx-auto max-w-6xl">

        {/* Header with animations */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg text-pink-500 dark:text-pink-600 font-medium tracking-wide uppercase mb-4"
          >
            {subtitle}
          </motion.p>
          <motion.h2 className="text-4xl font-bold mb-4 dark:text-white">
            {typeof title === "string" ? (
              title
            ) : (
              title.map((part, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={
                    part.gradient
                      ? "bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent"
                      : ""
                  }
                >
                  {part.text}
                </motion.span>
              ))
            )}
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 mx-auto rounded-full"
          />
        </motion.div>

        {/* Steps grid with equal height cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: step.id * 0.15 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative p-6 sm:p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden h-full flex flex-col md:flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                {/* Mobile: flex row; Desktop: column */}
                <div className="flex flex-row items-center justify-between md:flex-col-reverse md:gap-4 md:items-start md:justify-start mb-4">
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: step.id * 0.15 + 0.5,
                    }}
                    viewport={{ once: true }}
                    className="text-lg font-bold dark:text-white"
                  >
                    {step.title}
                  </motion.h3>
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: step.id * 0.15 + 0.3,
                      type: "spring",
                    }}
                    viewport={{ once: true }}
                    className="ml-2 md:ml-0 inline-flex items-center justify-center w-12 h-12 md:w-20 md:h-20 text-lg md:text-3xl font-bold text-white bg-gradient-to-tr from-orange-500 via-pink-500 to-red-500  rounded-lg md:rounded-2xl shadow-lg"
                  >
                    {idx + 1}
                  </motion.div>
                </div>
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: step.id * 0.12 + 0.6 }}
                  viewport={{ once: true }}
                  className="text-gray-600 dark:text-gray-300 leading-relaxed pb-2 md:pb-4"
                >
                  {step.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>


        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(251,146,60,0.3)"
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowContact(true)}
            className="relative inline-flex items-center px-8 py-4 text-xl font-medium text-white bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg shadow-lg overflow-hidden group"
          >
            <span className="relative z-10 flex items-center">
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="mr-4 text-3xl"
              >
                <IconGoGame />
              </motion.span>
              Let's Get Started
            </span>
          </motion.button>
        </motion.div>
      </div>
      {/* Contact Form Modal */}
      <AnimatePresence>
        {showContact && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-blur-sm z-50"
            onClick={() => setShowContact(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "tween", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md p-6"
            >
              <ContactForm className="bg-background rounded-2xl" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
