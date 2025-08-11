"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { StatsSection } from "@/components/stats-section";
import { IconFreeRights, IconPhone, IconReportAnalytics, IconSchool, IconStarsFilled, IconUsersGroup, IconTarget, IconBrain, IconUsers, IconHeartHandshake } from "@tabler/icons-react";
import { Hero } from '@/components/homepage/hero';
import { ContactForm } from "@/components/contact-form";
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  
  const isSectionInView = useInView(sectionRef, { margin: "-100px", once: true });
  const isTeamInView = useInView(teamRef, { margin: "-100px", once: true });
  const isValuesInView = useInView(valuesRef, { margin: "-100px", once: true });

  const team = [
    { 
      name: "Deepak Goyal", 
      role: "CEO & Founder", 
      image: "/team/ceo.jpg",
      bio: "Over 10 years of experience in digital marketing and web development."
    },
    { 
      name: "Yatin", 
      role: "Creative Director", 
      image: "/team/creative-director.jpg",
      bio: "Award-winning designer with expertise in UX/UI and brand identity."
    },
    { 
      name: "Keshav Kumar", 
      role: "Tech Lead", 
      image: "/team/tech-lead.jpg",
      bio: "Full-stack developer with expertise in React, Next.js and Web development."
    },
  ];

  const values = [
    {
      icon: <IconTarget size={40} className="text-primary" />,
      title: "Results-Focused",
      description: "We measure success by the results we deliver - leads, sales, and revenue growth for our clients."
    },
    {
      icon: <IconBrain size={40} className="text-primary" />,
      title: "Innovation",
      description: "We stay at the cutting edge of technology and marketing strategies to give our clients a competitive edge."
    },
    {
      icon: <IconUsers size={40} className="text-primary" />,
      title: "Client Partnership",
      description: "We see ourselves as an extension of your team, fully invested in your growth and success."
    },
    {
      icon: <IconHeartHandshake size={40} className="text-primary" />,
      title: "Transparency",
      description: "Clear communication and honest reporting are the foundation of our client relationships."
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-[60vh] mt-16 flex items-center justify-center border-b border-border dark:border-gray-700">
        <div className="text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-600 to-red-500">
                                About Us
                            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl my-6 max-w-4xl text-neutral-700 dark:text-neutral-300"
          >
            Digi Aerotech is a leading digital marketing agency in India that provides top-notch marketing solutions to small, medium, and large-scale businesses.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex space-x-4 justify-center"
          >
            <Link href="/contact" className="flex items-center gap-2 bg-gradient-to-r from-orange-500 via-pink-600 to-red-500 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              Contact Us
            </Link>
            <Link href="/services" className="flex items-center gap-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-6 py-3 rounded-full font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all">
              Our Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section ref={sectionRef} className="py-16 px-4 bg-white dark:bg-black border-b border-border dark:border-gray-700">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isSectionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl max-w-max font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-red-500">Our Journey</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Founded in 2020, Digi Aerotech began with a simple mission: to help businesses succeed in the digital world. 
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We built our agency on the principle that digital marketing and web development should be transparent, 
                results-driven, and focused on real business outcomes.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Today, we've grown into a full-service digital agency with expertise spanning web development, 
                mobile apps, SEO, social media marketing, and more.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isSectionInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-orange-100 to-pink-200 dark:from-gray-800 dark:to-gray-700 shadow-xl flex items-center justify-center"
            >
              <div className="text-center p-8">
                <IconUsersGroup size={80} className="mx-auto text-primary mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Our Journey</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">From small beginnings to industry leaders</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section ref={valuesRef} className="py-16 px-4 bg-gray-50 dark:bg-gray-950 border-b border-border dark:border-gray-700">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mx-auto text-3xl md:text-4xl max-w-max font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-red-500">Our Values</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              These core principles guide our work and shape our relationships with clients.
            </p>
          </motion.div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-200 dark:border-gray-800"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{value.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section ref={teamRef} className="py-16 px-4 bg-white dark:bg-black border-b border-border dark:border-gray-700">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mx-auto text-3xl md:text-4xl max-w-max font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-red-500">Our Team</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Meet the experts behind our success stories.
            </p>
          </motion.div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-8 justify-center">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-200 dark:border-gray-800 w-1/4"
              >
                <div className="h-48 relative bg-gradient-to-br from-orange-100 to-pink-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center">
                  <IconUsers size={60} className="text-primary" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-gray-100">{member.name}</h3>
                  <p className="text-primary mb-3">{member.role}</p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-6xl mx-auto text-center mb-15">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-4xl max-w-max mx-auto font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-red-600"
          >
            Let's Work Together
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-5"
          >
            Ready to take your business to the next level? Get in touch with our team today.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-lg mx-auto"
        >
          <ContactForm className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800" />
        </motion.div>
      </section>
    </main>
  );
}