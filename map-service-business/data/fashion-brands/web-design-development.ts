import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconShoppingBag,
  IconStar,
  IconRocket,
  IconUsers,
  IconShieldCheck,
  IconCode,
  IconDeviceDesktop,
  IconSettings,
  IconArrowRight,
  IconPhone,
  IconGlobe
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'web-design-development',
  business: 'fashion-brands',
  variants: {
    hero: 'variant1',
    whyChooseUs: 'variant3',
    process: 'variant2',
    testimonials: 'variant1'
  },
  data: {
    slug: 'web-design-development-maintenance-fashion-brands',
    showSections: {
      hero: true,
      whyChooseUs: true,
      process: true,
      testimonials: true,
      cta: true
    },
    customSections: [
      {
        component: Struggles,
        position: 'beforeWhyChooseUs',
        props: {
          title: [
            { text: "Web Challenges Fashion Brands Face", gradient: false },
            { text: "and How to Overcome Them", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Many fashion brands struggle with websites that fail to convert, look outdated, or lack proper maintenance.",
          painPoints: [
            "Outdated, non-responsive websites on mobile and desktop",
            "Low website conversion and slow page loading times",
            "Poor SEO performance leading to low organic traffic",
            "Difficulty managing content updates and inventory",
            "Frequent website downtime and technical issues"
          ],
          solutionPoints: [
            "Custom responsive web design with modern UI/UX",
            "Conversion-focused landing pages & e-commerce design",
            "SEO-friendly development for higher Google rankings",
            "Content and inventory management systems integration",
            "Ongoing website maintenance and performance monitoring"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Get Your Fashion Website Optimized"
          }
        }
      },
      {
        component: FaqSection,
        position: 'afterTestimonials',
        props: {
          faqs: [
            {
              id: 'faq-1',
              question: 'Can you redesign our existing fashion website?',
              answer: 'Yes. We revamp websites with modern design, better UX, and improved conversion rates.',
              icon: React.createElement(IconDeviceDesktop, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Do you build e-commerce websites?',
              answer: 'Absolutely. We design and develop fashion e-commerce sites optimized for sales.',
              icon: React.createElement(IconShoppingBag, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Do you provide website maintenance?',
              answer: 'Yes. We offer ongoing updates, backups, security patches, and technical support.',
              icon: React.createElement(IconSettings, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Is your development SEO-friendly?',
              answer: 'Our websites follow best SEO practices, ensuring higher visibility and organic traffic.',
              icon: React.createElement(IconGlobe, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'How long does a website project take?',
              answer: 'Typically 4–8 weeks depending on complexity, design, and functionality requirements.',
              icon: React.createElement(IconRocket, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'Do you integrate CMS for easy content updates?',
              answer: 'Yes. We integrate user-friendly CMS systems to manage products, blogs, and pages efficiently.',
              icon: React.createElement(IconCode, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Want ",
      headlineKeywords: [
        "A Stunning Fashion Website?",
        "High Conversion Landing Pages?",
        "Mobile-Optimized Design?",
        "Fast, Secure, SEO-Friendly Sites?",
        "Professional Web Design & Maintenance?"
      ],
      brandLine: [
        { text: "💻 Web Design, Development & Maintenance for Fashion Brands", gradient: false }
      ],
      subheadline: "We craft visually striking, conversion-focused, and SEO-optimized websites, while providing continuous maintenance to ensure peak performance.",
      ctaButtons: [
        { icon: React.createElement(IconPhone, { size: 28 }), text: "Book Free Website Audit", link: "/contact" },
        { icon: React.createElement(IconArrowRight, { size: 28 }), text: "Start Your Website Project", link: "/contact", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "300+ Fashion Websites",
          description: "Designed & maintained successfully"
        },
        {
          icon: React.createElement(IconRocket, { size: 32 }),
          title: "4.9/5 Client Satisfaction",
          description: "Loved by fashion entrepreneurs"
        },
        {
          icon: React.createElement(IconStar, { size: 32 }),
          title: "SEO Optimized",
          description: "Sites ranking high on Google"
        },
        {
          icon: React.createElement(IconGlobe, { size: 32 }),
          title: "Global Reach",
          description: "Websites serving customers worldwide"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the ", gradient: false },
        { text: "#1 Web Partner for Fashion Brands", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconCode, { size: 28 }),
          title: "Custom Development",
          description: "Websites tailored to your brand’s needs."
        },
        {
          icon: React.createElement(IconDeviceDesktop, { size: 28 }),
          title: "Responsive & Mobile-First Design",
          description: "Perfectly optimized for desktop, mobile, and tablets."
        },
        {
          icon: React.createElement(IconStar, { size: 28 }),
          title: "SEO & Performance Optimization",
          description: "Fast, SEO-friendly websites that rank and convert."
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 28 }),
          title: "Secure & Reliable",
          description: "Safe websites with regular security updates."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Conversion-Oriented Design",
          description: "Designs focused on increasing leads and sales."
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "Continuous Maintenance & Support",
          description: "Keep your site updated, fast, and secure at all times."
        }
      ],
      cta: {
        text: "Get Your Fashion Website Today",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Web Design, Development & Maintenance Process',
      subtitle: 'STEP-BY-STEP WEBSITE SUCCESS',
      className: 'border-t border-border dark:border-gray-700',
      description: 'From planning to launch and ongoing maintenance, our process ensures a modern, high-performing website for fashion brands.',
      steps: [
        {
          id: 1,
          title: 'Discovery & Research',
          description: 'Understand brand, target audience, and competitor landscape for an effective web strategy.'
        },
        {
          id: 2,
          title: 'Design & Wireframes',
          description: 'Create visually compelling wireframes and design prototypes reflecting your brand identity.'
        },
        {
          id: 3,
          title: 'Web Development',
          description: 'Develop responsive, fast, and SEO-optimized websites using latest technologies.'
        },
        {
          id: 4,
          title: 'Content & SEO Integration',
          description: 'Integrate content, product listings, and optimize SEO elements for search engine visibility.'
        },
        {
          id: 5,
          title: 'Testing & Launch',
          description: 'Comprehensive testing for performance, responsiveness, and security before going live.'
        },
        {
          id: 6,
          title: 'Ongoing Maintenance',
          description: 'Regular updates, backups, security patches, and optimizations to keep your site performing at its best.'
        }
      ]
    },
    testimonials: {
      title: [
        { text: "Fashion Brands Who ", gradient: false },
        { text: "Loved Their New Websites", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      description: 'See how Digi Aerotech helped fashion brands launch stunning, high-performing websites that convert visitors into customers.',
      testimonials: [
        {
          id: '1',
          message: 'Our website now perfectly reflects our brand identity, and our sales increased by 40% after launch!',
          highlight: 'sales increased by 40%',
          stars: 5,
          name: 'Sneha Kapoor',
          designation: 'Founder',
          company: 'VogueTrend'
        },
        {
          id: '2',
          message: 'The maintenance and support have been exceptional. No downtime and our site always runs smoothly.',
          highlight: 'always runs smoothly',
          stars: 5,
          name: 'Rahul Sharma',
          designation: 'CEO',
          company: 'Urban Chic Fashion'
        }
      ]
    },
    cta: {
      title: 'Ready to Launch a High-Performing Fashion Website?',
      subtitle: 'Design. Develop. Maintain.',
      description: 'Book a free consultation and let Digi Aerotech build, optimize, and maintain a website that converts and impresses your audience.'
    }
  }
};
