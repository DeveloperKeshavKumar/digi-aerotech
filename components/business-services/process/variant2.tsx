import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import dynamic from "next/dynamic";
import { IconArrowRight, IconGoGame } from "@tabler/icons-react";

const ContactForm = dynamic(
  () => import("@/components/contact-form").then((mod) => mod.ContactForm),
  {
    loading: () => <div className="text-center py-8">Loading contact form...</div>,
    ssr: false,
  }
);

interface ProcessProps {
  title?: string | Array<{ text: string; gradient?: boolean }>;
  subtitle?: string;
  description?: string;
  className?: string;
  steps: Array<{
    id: number;
    title: string;
    description: string;
  }>;
}

export default function ProcessVariant2({
  title = 'Our Process',
  subtitle,
  description,
  className = "",
  steps,
}: ProcessProps) {
  const [showContact, setShowContact] = useState(false);

  return (
    <section
      className={`py-20 px-4 sm:px-8 bg-gray-50 dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 ${className}`}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className="mb-16 text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-sm font-semibold tracking-wider text-pink-500 dark:text-pink-500 uppercase mb-3"
          >
            {subtitle}
          </motion.p>

          <motion.h1 className="text-4xl md:text-5xl font-bold mb-5 dark:text-white">
            {typeof title === "string" ? (
              <span>{title}</span>
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
                      : "dark:text-white"
                  }
                >
                  {part.text}
                </motion.span>
              ))
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 mx-auto rounded-full mt-6"
          />
        </motion.div>

        {/* Enhanced Timeline Steps with Numbers */}
        <div className="relative pl-16 sm:pl-24">
          <div className="absolute left-8 md:left-15.5 top-0 w-1 h-full md:h-[94%] bg-gradient-to-b from-orange-500 via-pink-500 to-red-500 rounded-full" />
          
          {steps.map(({ id, title: t, description: d }, idx) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true, margin: "0px 0px -30% 0px" }}
              className="flex items-start pb-12 group relative min-h-[100px]"
            >
              {/* Step Number and Dot */}
              <div className="absolute -left-13 top-0 flex flex-col items-center w-10">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-500 via-pink-500 to-red-500 shadow-lg flex items-center justify-center z-10 ring-4 ring-white dark:ring-gray-950"
                >
                  <span className="text-white font-bold text-sm">{idx + 1}</span>
                </motion.div>
                <div className="w-1 h-full bg-gradient-to-b from-pink-500 to-red-500"></div>
              </div>
              
              {/* Step Content */}
              <div className="ml-2 flex-1">
                <motion.h3 
                  whileHover={{ x: 5 }}
                  className="text-2xl max-w-max font-semibold mb-3 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent"
                >
                  {t}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                  className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed transition-opacity"
                >
                  {d}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-6 text-center"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(251, 146, 60, 0.4)",
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowContact(true)}
            className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Get Started
            <motion.span
              animate={{ translateX: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="ml-3 text-2xl"
            >
              <IconArrowRight />
            </motion.span>
          </motion.button>
        </motion.div>
      </div>

      {/* Refined Contact Form Modal */}
      <AnimatePresence>
        {showContact && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 flex items-center justify-center  bg-opacity-50 z-50"
            onClick={() => setShowContact(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md mx-4"
            >
              <ContactForm className="bg-background rounded-2xl " />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}