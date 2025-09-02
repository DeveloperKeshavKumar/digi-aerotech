"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { StatsSection } from "@/components/stats-section";
import { IconFreeRights, IconPhone, IconReportAnalytics, IconSchool, IconStarsFilled, IconUsersGroup, IconTarget, IconBrain, IconUsers, IconHeartHandshake, IconBrandMeta, IconBrandFacebook, IconStars } from "@tabler/icons-react";
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
            <Link href="/contact" className="flex items-center gap-2 bg-gradient-to-r from-orange-500 via-pink-600 to-red-500 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              Contact Us
            </Link>
            <Link href="/services" className="flex items-center gap-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all">
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
                {/* <IconUsersGroup size={80} className="mx-auto text-primary mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Our Journey</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">From small beginnings to industry leaders</p> */}
                <Image
                className='object-cover'
                  src={'/our-office.jpg'}
                  alt='our-office'
                  fill />
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
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-200 dark:border-gray-800 md:w-1/4"
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
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-950 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
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
              className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            >
              Ready to take your business to the next level? Get in touch with our team today.
            </motion.p>
          </div>

          {/* Main Content Grid */}
          <div className="flex justify-evenly lg:gap-12 items-center">
            {/* Left Side - Circular Motion Icons with Particles */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative h-96 flex items-center justify-center"
            >
              {/* Background Particles */}
              {Array.from({ length: 50 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut"
                  }}
                />
              ))}

              {/* Rotating Background Circle */}
              <motion.div
                className="absolute w-72 h-72 rounded-full border border-gray-200 dark:border-gray-700 opacity-30"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              {/* Icons in Circular Motion */}
              {[
                { Icon: IconStars, angle: 60 },
                { Icon: IconReportAnalytics, angle: 0 },
                { Icon: IconUsersGroup, angle: 120 },
                { Icon: IconPhone, angle: 180 },
                { Icon: IconTarget, angle: 240 },
                { Icon: IconBrandFacebook, angle: 300 }
              ].map(({ Icon, angle }, index) => {
                const radius = 120;
                return (
                  <motion.div
                    key={index}
                    className="absolute"
                    style={{
                      transformOrigin: "center",
                    }}
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 0.5
                    }}
                  >
                    <motion.div
                      className="bg-white dark:bg-gray-900 p-3 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
                      style={{
                        x: Math.cos((angle * Math.PI) / 180) * radius,
                        y: Math.sin((angle * Math.PI) / 180) * radius,
                      }}
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: -360, // Counter-rotate to keep icon upright
                      }}
                      transition={{
                        scale: {
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3
                        },
                        rotate: {
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        }
                      }}
                      whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
                    >
                      <Icon size={20} className="text-gradient-to-r from-orange-500 to-pink-500" style={{
                        background: 'linear-gradient(45deg, #f97316, #ec4899)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }} />
                    </motion.div>
                  </motion.div>
                );
              })}

              {/* Center Pulse Effect */}
              <motion.div
                className="w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center relative z-10"
                animate={{
                  scale: [1, 1.2, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(249, 115, 22, 0.4)",
                    "0 0 0 20px rgba(249, 115, 22, 0)",
                    "0 0 0 0 rgba(249, 115, 22, 0)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
              >
                <IconHeartHandshake size={32} className="text-white" />
              </motion.div>

            </motion.div>

            {/* Center - Contact Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="lg:col-span-1 z-10"
            >
              <ContactForm />
            </motion.div>

            {/* Right Side - Beautiful Floating Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative h-96 flex items-center justify-center"
            >
              {/* Gradient Background Orbs */}
              <motion.div
                className="absolute w-32 h-32 bg-gradient-to-r from-orange-200 to-pink-200 dark:from-orange-900/30 dark:to-pink-900/30 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />
              <motion.div
                className="absolute w-24 h-24 bg-gradient-to-r from-pink-200 to-red-200 dark:from-pink-900/30 dark:to-red-900/30 rounded-full blur-xl"
                style={{ x: 60, y: -40 }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 1
                }}
              />
              {/* Background Particles */}
              {Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut"
                  }}
                />
              ))}

              {/* Floating Achievement Cards */}
              {[
                {
                  icon: IconStarsFilled,
                  number: "140+",
                  label: "Happy Clients",
                  color: "from-orange-500 to-red-500",
                  delay: 0,
                  x: -60,
                  y: -80
                },
                {
                  icon: IconTarget,
                  number: "98%",
                  label: "Success Rate",
                  color: "from-red-500 to-pink-500",
                  delay: 0.2,
                  x: 70,
                  y: -50
                },
                {
                  icon: IconUsersGroup,
                  number: "5+",
                  label: "Years Exp",
                  color: "from-red-500 to-pink-500",
                  delay: 0.4,
                  x: -50,
                  y: 70
                },
                {
                  icon: IconPhone,
                  number: "24/7",
                  label: "Support",
                  color: "from-red-500 to-orange-500",
                  delay: 0.6,
                  x: 80,
                  y: 80
                }
              ].map((card, index) => (
                <motion.div
                  key={index}
                  className="absolute cursor-pointer"
                  style={{ x: card.x, y: card.y }}
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: card.delay,
                    type: "spring",
                    bounce: 0.4
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div
                    className={`bg-gradient-to-br ${card.color} text-white p-4 rounded-2xl shadow-xl min-w-[100px] text-center backdrop-blur-sm border border-white/20`}
                  >
                    <card.icon size={20} className="mx-auto mb-2 text-white/90" />
                    <div className="text-xl font-bold">{card.number}</div>
                    <div className="text-xs opacity-90 font-medium">{card.label}</div>
                  </div>
                </motion.div>
              ))}


              {/* Central Animated Element */}
              <motion.div
                className="relative z-10"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <div className="w-16 h-16 bg-white dark:bg-gray-900 rounded-full shadow-lg border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: -360, // Counter rotate
                    }}
                    transition={{
                      scale: {
                        duration: 2,
                        repeat: Infinity
                      },
                      rotate: {
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                      }
                    }}
                  >
                    <IconUsers size={24} className="text-gray-600 dark:text-gray-400" />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Fun Element */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <motion.div
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
            >
              <motion.span
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🚀
              </motion.span>
              <span>Ready to launch your digital success?</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ✨
              </motion.span>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}