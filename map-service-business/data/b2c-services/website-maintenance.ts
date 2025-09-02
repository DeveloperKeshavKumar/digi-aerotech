import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconDeviceDesktop, IconWorld, IconWand, IconCode, IconTools,
  IconShieldCheck, IconCloud, IconChartBar, IconRefresh, IconRocket,
  IconBug, IconUsers
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'web-design-development-maintenance',
  business: 'combined-services',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant1',
    process: 'variant2',
  },
  data: {
    slug: 'web-design-development-maintenance',
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
            { text: "Why Businesses Struggle ", gradient: false },
            { text: "Without a Professional Website", gradient: true, gradientClass: "from-blue-500 via-purple-500 to-indigo-500" }
          ],
          subheadline: "Your website is your digital storefront — but if it looks outdated, loads slowly, or isn’t maintained, you lose customers instantly.",
          painPoints: [
            "Outdated website design that doesn’t reflect brand identity",
            "Slow, buggy websites that frustrate visitors",
            "Mobile-unfriendly sites losing mobile customers",
            "Security vulnerabilities leading to hacks & downtime",
            "Broken links, outdated content & poor user experience",
            "No ongoing maintenance leading to costly breakdowns"
          ],
          solutionPoints: [
            "Modern, responsive & conversion-focused web design",
            "Custom web development tailored to your business goals",
            "Mobile-first design for seamless experience across devices",
            "Secure hosting, backups & performance optimization",
            "Content updates, bug fixes & technical support",
            "Continuous monitoring, reporting & maintenance plans"
          ],
          cta: {
            icon: React.createElement(IconRocket, { size: 20 }),
            text: "Build & Maintain My Website"
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
              question: 'Do you provide both design and development?',
              answer: 'Yes — we handle everything from UI/UX design to custom coding, ensuring a fully functional and attractive website.',
              icon: React.createElement(IconWand, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'What is included in website maintenance?',
              answer: 'Maintenance includes regular updates, bug fixes, backups, security patches, content updates, and performance monitoring.',
              icon: React.createElement(IconTools, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Can you redesign my old website?',
              answer: 'Absolutely — we specialize in website redesigns to modernize the look, improve usability, and boost conversions.',
              icon: React.createElement(IconRefresh, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Will my website be SEO-friendly?',
              answer: 'Yes — we integrate on-page SEO, fast load times, and mobile responsiveness to maximize visibility on Google.',
              icon: React.createElement(IconChartBar, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'What industries do you serve?',
              answer: 'We work with B2B, B2C, consultants, doctors, startups, restaurants, fashion brands, gyms, e-commerce, and more.',
              icon: React.createElement(IconWorld, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Your Website is Your Growth Engine",
      headlineKeywords: [
        "Web Design That Converts",
        "Custom Web Development for Growth",
        "Website Maintenance & Security",
        "Mobile-First, SEO-Friendly Websites",
        "Complete Digital Presence Solutions"
      ],
      brandLine: [
        { text: "🚀 Digi Aerotech designs, develops & maintains websites that drive traffic, leads & sales.", gradient: false }
      ],
      subheadline: "From stunning design to secure coding and long-term maintenance, we build websites that don’t just look great — they perform, scale, and grow with your business.",
      ctaButtons: [
        { icon: React.createElement(IconRocket, { size: 28 }), text: "Start My Website Project", link: "/contact" },
        { icon: React.createElement(IconDeviceDesktop, { size: 28 }), text: "Free Website Audit", link: "/audit", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconWand, { size: 32 }),
          title: "Creative Design",
          description: "Modern, engaging UI/UX to attract customers"
        },
        {
          icon: React.createElement(IconCode, { size: 32 }),
          title: "Custom Development",
          description: "Fast, scalable, and secure web apps & sites"
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 32 }),
          title: "24/7 Maintenance",
          description: "Security, updates & performance monitoring"
        },
        {
          icon: React.createElement(IconCloud, { size: 32 }),
          title: "SEO & Mobile Ready",
          description: "Optimized for speed, ranking & mobile devices"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Businesses Trust ", gradient: false },
        { text: "Digi Aerotech for Websites", gradient: true, gradientClass: "from-blue-500 via-purple-500 to-indigo-500" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconWand, { size: 28 }),
          title: "Custom Design",
          description: "Unique, brand-focused layouts that impress & convert."
        },
        {
          icon: React.createElement(IconCode, { size: 28 }),
          title: "Full-Stack Development",
          description: "From landing pages to complex apps, we handle it all."
        },
        {
          icon: React.createElement(IconTools, { size: 28 }),
          title: "Ongoing Maintenance",
          description: "Regular updates, bug fixes & performance tuning."
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 28 }),
          title: "Secure & Reliable",
          description: "SSL, backups & proactive security monitoring."
        },
        {
          icon: React.createElement(IconChartBar, { size: 28 }),
          title: "Growth-Focused",
          description: "Built with SEO, conversions & scalability in mind."
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "Cross-Industry Expertise",
          description: "Experience across B2B, B2C, healthcare, education & retail."
        }
      ],
      cta: {
        text: "Get My Website Designed",
        link: "#contact",
        icon: React.createElement(IconDeviceDesktop, { size: 20 })
      }
    },
    process: {
      title: 'Our Web Design, Development & Maintenance Process',
      subtitle: 'DESIGN → DEVELOP → LAUNCH → MAINTAIN',
      description: 'We don’t just build websites. We create digital ecosystems that keep performing for years with consistent updates and support.',
      steps: [
        { id: 1, title: 'Discovery & Strategy', description: 'Understand business goals & plan website roadmap.' },
        { id: 2, title: 'UI/UX Design', description: 'Craft user-centric designs with stunning visuals.' },
        { id: 3, title: 'Custom Development', description: 'Code websites with speed, SEO & scalability in mind.' },
        { id: 4, title: 'Testing & Launch', description: 'Quality checks, bug fixes & smooth deployment.' },
        { id: 5, title: 'Ongoing Maintenance', description: 'Updates, security patches & performance optimization.' },
        { id: 6, title: 'Support & Growth', description: 'Monitor, upgrade & scale with business growth.' }
      ]
    },
    cta: {
      title: 'Ready for a Website That Works 24/7?',
      subtitle: 'DESIGN + DEVELOPMENT + MAINTENANCE = GROWTH',
      description: 'Partner with Digi Aerotech to get a stunning, secure & scalable website that attracts customers and grows your business.',
    }
  }
};
