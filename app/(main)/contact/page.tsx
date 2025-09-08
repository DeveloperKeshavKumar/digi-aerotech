"use client";

import React, { useRef, useState, useEffect } from 'react';
import { hover, motion } from 'motion/react';
import { inView } from 'motion';
import { ContactForm } from "@/components/contact-form";
import { IconBrandWhatsapp, IconMail, IconMapPin, IconPhone, IconClock, IconBrandLinkedin, IconBrandTwitter, IconBrandInstagram, IconBrandFacebook } from '@tabler/icons-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function ContactPage() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLDivElement>(null);
    const [visibleSection, setVisibleSection] = useState(false);
    const [visibleForm, setVisibleForm] = useState(false);

    useEffect(() => {
        if (sectionRef.current) {
            inView(sectionRef.current, () => setVisibleSection(true), { margin: '-100px' });
        }
        if (formRef.current) {
            inView(formRef.current, () => setVisibleForm(true), { margin: '-100px' });
        }
    }, []);

    const contactInfo = [
        {
            icon: <IconPhone size={28} />,
            title: "Phone Numbers",
            info: (
                <div className="space-y-2">
                    <a href="tel:+918607119872" className="block hover:text-primary transition-colors">
                        +91 86071 19872
                    </a>
                    <a href="tel:+918307105140" className="block hover:text-primary transition-colors">
                        +91 83071 05140
                    </a>
                </div>
            )
        },
        {
            icon: <IconMail size={28} />,
            title: "Email",
            info: (
                <div className="space-y-2">
                    <a href="mailto:business@digiaerotech.com" className="block hover:text-primary transition-colors">
                        business@digiaerotech.com
                    </a>
                    <a href="mailto:digiaerotech@gmail.com" className="block hover:text-primary transition-colors">
                        digiaerotech@gmail.com
                    </a>

                </div>
            )
        },
        {
            icon: <IconMapPin size={28} />,
            title: "Address",
            info: "Shop No.4, Palika Bazar, New Bus Stand Rd,  Ratia, Haryana 125051",
        },
    ];

    const socialLinks = [
        {
            icon: <IconBrandFacebook size={22} />,
            link: "https://facebook.com/digiaerotech",
            name: "Facebook",
            hover: "hover:text-blue-600 dark:hover:text-blue-400",
            glow: "hover:shadow-blue-500/50",
            bg: "hover:bg-blue-100 dark:hover:bg-blue-900/20"
        },
        {
            icon: <IconBrandInstagram size={22} />,
            link: "https://instagram.com/digiaerotech",
            name: "Instagram",
            hover: "hover:text-purple-600 dark:hover:text-purple-400",
            glow: "hover:shadow-purple-500/50",
            bg: "hover:bg-purple-100 dark:hover:bg-purple-900/20"
        },
        {
            icon: <IconBrandTwitter size={22} />,
            link: "https://twitter.com/digiaerotech",
            name: "Twitter",
            hover: "hover:text-sky-500 dark:hover:text-sky-400",
            glow: "hover:shadow-sky-500/50",
            bg: "hover:bg-sky-100 dark:hover:bg-sky-900/20"
        },
        {
            icon: <IconBrandLinkedin size={22} />,
            link: "https://linkedin.com/company/digiaerotech",
            name: "LinkedIn",
            hover: "hover:text-blue-700 dark:hover:text-blue-500",
            glow: "hover:shadow-blue-600/50",
            bg: "hover:bg-blue-100 dark:hover:bg-blue-900/20"
        }
    ];

    return (
        <main>
            {/* Hero Section */}
            <section className="min-h-[60vh] relative py-24 md:py-3 border-b border-border dark:border-gray-800 overflow-hidden flex flex-col items-center justify-center mt-16">
                <div className="absolute inset-0 opacity-20 pointer-events-none" />
                <div className="absolute inset-0 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-600 to-red-500">
                                Get In Touch
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
                    >
                        Have questions or need assistance? We're here to help! Our team is ready to discuss your project and provide solutions tailored to your business needs.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <a
                            href="tel:+918607119872"
                            className="flex items-center gap-2 bg-gradient-to-r from-orange-500 via-pink-600 to-red-500 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                        >
                            <IconPhone size={20} />
                            <span>Call Now</span>
                        </a>
                        <a
                            href="#contact-form"
                            className="flex items-center gap-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all"
                        >
                            <IconMail size={20} />
                            <span>Send Message</span>
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Contact Details */}
            <section ref={sectionRef} className="py-16 px-4 bg-gray-50 dark:bg-gray-950 border-b border-border dark:border-gray-800">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-600 to-red-500">
                                Reach Us
                            </span>
                        </h2>
                        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Choose the most convenient way to connect with our team. We're available through multiple channels to ensure you get the support you need.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {contactInfo.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={visibleSection ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-200 dark:border-gray-800"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="bg-gradient-to-tr from-orange-500 via-pink-600 to-red-500 text-white p-3 rounded-lg">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                                        <div className="text-gray-700 dark:text-gray-300">
                                            {item.info}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Social Media Links */}
                    <div className="mt-16 text-center">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Connect With Us</h3>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={visibleSection ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            className="flex flex-wrap justify-center gap-6"
                        >
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`
                                        bg-white dark:bg-gray-900 p-4 rounded-full shadow-md
                                        border border-gray-200 dark:border-gray-800
                                        transition-all duration-300 group relative
                                        hover:scale-110 overflow-hidden
                                        ${social.bg} ${social.hover}
                                    `}
                                    aria-label={social.name}
                                >
                                    {/* Glow effect */}
                                    <span className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${social.glow} group-hover:shadow-[0_0_15px_3px]`}></span>

                                    <span className={cn("relative z-10 text-gray-700 dark:text-gray-300 transition-colors", social.hover)}>
                                        {social.icon}
                                    </span>
                                </a>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section id="contact-form" ref={formRef} className="py-16 px-4 bg-white dark:bg-black relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none rotate-180" />

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={visibleForm ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-600 to-red-500">
                                    Let's Discuss Your Project
                                </span>
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                Whether you're looking to build a new website, launch a digital marketing campaign, or need
                                help with your existing digital presence, we're here to assist. Fill out the form, and our
                                team will get back to you within 24 hours.
                            </p>

                            <div className="flex items-center gap-3 py-2">
                                <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                                <div className="h-2 w-2 rounded-full bg-pink-600"></div>
                                <div className="h-2 w-2 rounded-full bg-red-500"></div>
                                <div className="h-2 w-16 rounded-full bg-gradient-to-r from-orange-500 via-pink-600 to-red-500"></div>
                            </div>

                            <div className="space-y-4 bg-gray-50 dark:bg-gray-950 p-5 rounded-xl border border-gray-100 dark:border-gray-800">
                                <div className="flex items-start gap-3">
                                    <IconClock className="mt-1" size={20} />
                                    <div>
                                        <p className="text-gray-900 dark:text-white font-medium">Working hours</p>
                                        <p className="text-gray-700 dark:text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                                        <p className="text-gray-700 dark:text-gray-300">Saturday: By appointment only</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <IconPhone className="mt-1" size={20} />
                                    <div>
                                        <p className="text-gray-900 dark:text-white font-medium">Call us directly</p>
                                        <a href="tel:+918607119872" className="text-gray-700 dark:text-gray-300 hover:text-primary">
                                            +91 86071 19872
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={visibleForm ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <ContactForm />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-16 px-4 bg-gray-50 dark:bg-gray-950 border-t border-border dark:border-gray-800">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-600 to-red-500">
                                Our Location
                            </span>
                        </h2>
                        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Visit our office in Gurugram, Haryana. We're located in a convenient tech hub with easy access from all parts of NCR.
                        </p>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-pink-600 to-red-500 rounded-xl blur opacity-30"></div>
                        <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 h-[450px]">
                            <iframe
                                src="https://www.google.com/maps?q=digiaerotech,Shop+No.4,+Palika+Bazar,+New+Bus+Stand+Rd,+opposite+Nidhi+Glass+Works,+Dera+Surjanhar,+Ratia,+Haryana+125051&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Digi Aerotech Ratia Office"
                            />
                        </div>
                    </div>

                    <div className="mt-8 flex flex-wrap justify-center gap-6">
                        <div className="flex items-center gap-2 bg-white dark:bg-gray-900 px-5 py-3 rounded-full shadow-md border border-gray-200 dark:border-gray-800">
                            <IconMapPin size={18} className="text-orange-500" />
                            <span className="text-sm text-gray-700 dark:text-gray-300">Shop No.4, Palika Bazar, Ratia, HR </span>
                        </div>
                        <div className="flex items-center gap-2 bg-white dark:bg-gray-900 px-5 py-3 rounded-full shadow-md border border-gray-200 dark:border-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-600">
                                <path d="m12 14 4-4" />
                                <path d="M3.34 19a10 10 0 1 1 17.32 0" />
                                <path d="M13 19H7a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h4" />
                            </svg>
                            <span className="text-sm text-gray-700 dark:text-gray-300">2 mins from New Bus Stand</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white dark:bg-gray-900 px-5 py-3 rounded-full shadow-md border border-gray-200 dark:border-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
                                <rect width="18" height="18" x="3" y="3" rx="2" />
                                <path d="M7 7h.01" />
                                <path d="M17 7h.01" />
                                <path d="M7 17h.01" />
                                <path d="M17 17h.01" />
                            </svg>
                            <span className="text-sm text-gray-700 dark:text-gray-300">Parking Available</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 px-4 bg-white dark:bg-black">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-600 to-red-500">
                                Frequently Asked Questions
                            </span>
                        </h2>
                        <p className="mt-4 text-gray-600 dark:text-gray-400">
                            Got questions? We've got answers to help you get started.
                        </p>
                    </div>

                    <div className="space-y-4 mt-10">
                        {[
                            {
                                id: "faq-1",
                                question: "How quickly can you respond to inquiries?",
                                answer: "We typically respond to all inquiries within 24 business hours. For urgent matters, please call us directly at +91 86071 19872 for immediate assistance."
                            },
                            {
                                id: "faq-2",
                                question: "Do you offer free consultations?",
                                answer: "Yes, we offer a free 30-minute strategy call to discuss your business needs, challenges, and how our services can help you achieve your goals."
                            },
                            {
                                id: "faq-3",
                                question: "What information should I prepare before contacting you?",
                                answer: "It's helpful if you can think about your business goals, current challenges, timeline, and budget. Having clarity on these aspects helps us provide more relevant information during our initial conversation."
                            },
                            {
                                id: "faq-4",
                                question: "Do you work with international clients?",
                                answer: "Yes, we work with clients globally. Our team is equipped to handle projects across different time zones and can communicate in English and Hindi."
                            },
                        ].map((faq, index) => (
                            <div
                                key={faq.id}
                                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                <div className="px-6 py-4">
                                    <div className="flex items-start space-x-4">
                                        <div className="p-2 rounded-lg bg-gradient-to-br from-orange-500 via-pink-600 to-red-500 text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M12 2v6.5" />
                                                <path d="M12 18v4" />
                                                <path d="M5 12h14" />
                                                <path d="M4.5 7h15" />
                                                <path d="M4.5 17h15" />
                                            </svg>
                                        </div>
                                        <h3 className="text-lg text-black dark:text-white pr-4 text-left">
                                            {faq.question}
                                        </h3>
                                    </div>
                                </div>
                                <div className="px-6 pb-4 border-t border-gray-100 dark:border-gray-800">
                                    <p className="text-gray-600 dark:text-gray-300 pt-4 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
