"use client";
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { inView } from 'motion';
import { ArrowRight } from 'lucide-react';
import { StatsSection } from "@/components/stats-section";
import { IconReportAnalytics, IconSchool, IconStarsFilled, IconUsersGroup } from "@tabler/icons-react";

export default function ServicesPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sectionRef.current) {
      inView(sectionRef.current, () => setVisible(true), { margin: '-100px' });
    }
  }, []);

  const services = [
    { id: 1, title: 'Website Development', description: 'Custom-designed, responsive websites tailored to your business needs.', image: '/services/1.png', href: '/services/web-development-and-design' },
    { id: 2, title: 'Mobile App Development', description: 'Scalable and user-friendly Android applications for your business.', image: '/services/2.png', href: '/services/mobile-app-development' },
    { id: 3, title: 'Digital Marketing', description: 'End-to-end solutions to enhance your digital presence and brand visibility.', image: '/services/3.png', href: '/services/digital-marketing' },
    {
      id: 4,
      title: "Social Media Marketing",
      description: "Complete social media management for audience engagement and growth.",
      image: "/services/4.png",
      href: "/services/social-media-marketing",
    },
    {
      id: 5,
      title: "SEO Services",
      description: "Boost organic traffic and visibility through proven SEO strategies.",
      image: "/services/5.png",
      href: "/services/seo-services",
    },
    {
      id: 6,
      title: "Lead Generation",
      description: "Targeted ad campaigns and landing pages to drive quality leads.",
      image: "/services/6.png",
      href: "/services/lead-generation",
    },
    {
      id: 7,
      title: "E-Commerce Services",
      description: "End-to-end support for selling on Amazon, Flipkart, Meesho, and more.",
      image: "/services/7.png",
      href: "/services/e-commerce-services",
    },
    {
      id: 8,
      title: "Local SEO",
      description: "Optimize for local search and reach more customers in your area.",
      image: "/services/8.png",
      href: "/services/local-seo",
    },
    {
      id: 9,
      title: "App Promotion",
      description: "Increase app downloads and visibility through effective ASO strategies.",
      image: "/services/9.png",
      href: "/services/app-promotion",
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 px-4 bg-white dark:bg-black border-b border-border dark:border-gray-700">
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl md:text-4xl font-semibold text-black dark:text-white"
        >
          Our Services
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={visible ? {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { delay: index * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }
            } : {}}
            whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
            className="border relative group overflow-hidden rounded-2xl p-6 bg-gray-50 dark:bg-gray-800/60 shadow-lg dark:shadow-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800/40 hover:ring-2 ring-pink-500/70 dark:hover:ring-pink-400/50 hover:shadow-2xl hover:shadow-pink-400/40"
          >
            <div className="relative z-10 flex flex-col h-full">
              <motion.img
                src={service.image}
                alt={service.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={visible ? { opacity: 1, scale: 1, transition: { delay: index * 0.08 + 0.1, duration: 0.5 } } : {}}
                className="w-full h-40 object-contain mb-4 rounded-lg"
              />
              <h3 className="text-xl font-bold mb-2 text-black dark:text-white">{service.title}</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">{service.description}</p>
              <a href={service.href} className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-black dark:text-white">
                Learn More <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.5 } } : {}}
        >
          <StatsSection stats={[
            {
              icon: <IconUsersGroup size={34} className='fill-gray-600 dark:fill-gray-400' />,
              title: "140+ Clients",
              description: "Trusted by over 140 businesses"
            },
            {
              icon: <IconReportAnalytics size={34} />,
              title: "50 Lac+",
              description: "leads generated"
            },
            {
              icon: <IconSchool size={34} />,
              title: "10+ Years",
              description: "of experience in market"
            },
            {
              icon: <IconStarsFilled size={34} />,
              title: "4.9 Stars",
              description: "Avg. rating from happy clients"
            }
          ]} />
        </motion.div>
      </div>
    </section>
  );
}