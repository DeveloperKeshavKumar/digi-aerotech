import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconLayout, IconCode, IconSettings, IconShieldCheck, IconRocket, 
  IconTarget, IconUsers, IconTrendingUp, IconCheck, IconWorld, IconRefresh
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'web-design-development-maintenance',
  business: 'all-industries',
  variants: {
    hero: 'variant1',
    whyChooseUs: 'variant2',
    process: 'variant1',
    testimonials: 'variant2'
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
            { text: "Why Businesses Struggle with ", gradient: false },
            { text: "Web Design & Maintenance", gradient: true, gradientClass: "from-indigo-500 via-blue-500 to-cyan-500" }
          ],
          subheadline: "A great-looking website isn’t enough. Without proper **development, optimization, and ongoing maintenance**, you lose credibility, leads, and revenue.",
          painPoints: [
            "Outdated design failing to impress visitors",
            "Slow websites causing high bounce rates",
            "Security vulnerabilities risking customer trust",
            "No technical support for updates & bugs",
            "Hard-to-manage websites with poor UX",
            "Losing leads due to broken forms or downtime"
          ],
          solutionPoints: [
            "Modern, user-first responsive designs",
            "High-performance, SEO-friendly development",
            "Strong security with regular updates & backups",
            "Full maintenance & 24/7 support",
            "Scalable solutions aligned with your growth",
            "Conversion-focused UI/UX for higher leads"
          ],
          cta: {
            icon: React.createElement(IconLayout, { size: 20 }),
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
              question: 'Why do I need ongoing website maintenance?',
              answer: 'Without updates, your site becomes vulnerable to hacks, downtime, and broken features. Maintenance ensures security, stability, and peak performance.',
              icon: React.createElement(IconShieldCheck, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Will my website be mobile-friendly?',
              answer: 'Yes. Every site we design is fully responsive, optimized for mobile, tablets, and desktops, ensuring a seamless user experience.',
              icon: React.createElement(IconTarget, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Do you also provide hosting & backups?',
              answer: 'Yes. We offer hosting, automated backups, and continuous monitoring to keep your site safe and live 24/7.',
              icon: React.createElement(IconRefresh, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Can you redesign my existing website?',
              answer: 'Absolutely. We analyze your current website, revamp the design, improve speed, and align it with modern SEO standards.',
              icon: React.createElement(IconLayout, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'How do you ensure my website generates leads?',
              answer: 'We build conversion-focused designs, integrate CTAs, optimize for SEO, and track user journeys to maximize ROI.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Web Design, Development & Maintenance That Delivers Results",
      headlineKeywords: [
        "Responsive Web Design",
        "Custom Website Development",
        "24/7 Website Maintenance",
        "Secure & Scalable Websites",
        "Conversion-Focused UX"
      ],
      brandLine: [
        { text: "🌐 Digi Aerotech builds and maintains **high-performing websites** that not only look stunning but also drive traffic, leads, and revenue.", gradient: false }
      ],
      subheadline: "From design to deployment to continuous support, we ensure your website remains your **strongest digital asset.**",
      ctaButtons: [
        { icon: React.createElement(IconRocket, { size: 28 }), text: "Start My Website Project", link: "/contact" },
        { icon: React.createElement(IconTarget, { size: 28 }), text: "Get Free Website Audit", link: "/audit", variant: "secondary" }
      ],
      stats: [
        { icon: React.createElement(IconUsers, { size: 32 }), title: "User-Centered Design", description: "Delight visitors with a seamless experience" },
        { icon: React.createElement(IconCode, { size: 32 }), title: "Clean Development", description: "High-quality, scalable & fast codebase" },
        { icon: React.createElement(IconShieldCheck, { size: 32 }), title: "Secure & Reliable", description: "Regular updates & advanced protection" },
        { icon: React.createElement(IconWorld, { size: 32 }), title: "Global Ready", description: "Optimized for international performance" }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Businesses Choose ", gradient: false },
        { text: "Digi Aerotech for Websites", gradient: true, gradientClass: "from-indigo-500 via-blue-500 to-cyan-500" }
      ],
      trustPoints: [
        { icon: React.createElement(IconLayout, { size: 28 }), title: "Custom Design", description: "Unique, branded websites tailored to your business" },
        { icon: React.createElement(IconCode, { size: 28 }), title: "Future-Ready Development", description: "Modern stack with speed, SEO & scalability" },
        { icon: React.createElement(IconRefresh, { size: 28 }), title: "Complete Maintenance", description: "From bug fixes to upgrades & backups" },
        { icon: React.createElement(IconShieldCheck, { size: 28 }), title: "Top Security Standards", description: "SSL, monitoring & malware protection" },
        { icon: React.createElement(IconTrendingUp, { size: 28 }), title: "Growth-Oriented", description: "Websites built to convert and scale with you" },
        { icon: React.createElement(IconCheck, { size: 28 }), title: "Transparent Pricing", description: "Clear packages with no hidden costs" }
      ],
      cta: {
        text: "Build & Maintain My Website",
        link: "#contact",
        icon: React.createElement(IconRocket, { size: 20 })
      }
    },
    process: {
      title: 'Our Web Design, Development & Maintenance Process',
      subtitle: 'STRATEGY → DESIGN → DEVELOPMENT → SUPPORT',
      description: 'We ensure your website is not just a digital brochure, but a **revenue-driving business asset.**',
      steps: [
        { id: 1, title: 'Discovery & Strategy', description: 'Business goals, competitor analysis, and project roadmap' },
        { id: 2, title: 'UX/UI Design', description: 'Wireframes, mockups & brand-aligned visuals' },
        { id: 3, title: 'Custom Development', description: 'SEO-friendly coding, integrations & CMS setup' },
        { id: 4, title: 'Testing & Launch', description: 'Performance, device & security testing' },
        { id: 5, title: 'Ongoing Maintenance', description: 'Updates, bug fixes, content edits, and upgrades' },
        { id: 6, title: 'Growth & Scaling', description: 'SEO, analytics, and CRO improvements' }
      ]
    },
    testimonials: {
      title: [
        { text: "Web Success Stories with ", gradient: false },
        { text: "Digi Aerotech", gradient: true, gradientClass: "from-indigo-500 via-blue-500 to-cyan-500" }
      ],
      description: 'From startups to enterprises, we’ve built & maintained websites that scale globally while converting locally.',
      testimonials: [
        {
          id: '1',
          message: 'Digi Aerotech redesigned our website and the results were instant — faster, cleaner, and higher leads.',
          highlight: '60% Increase in Lead Conversions',
          stars: 5,
          name: 'Priya Mehra',
          designation: 'Founder',
          company: 'EduCare Consulting'
        },
        {
          id: '2',
          message: 'They don’t just build websites, they maintain and grow them with us. A true long-term partner.',
          highlight: 'Zero Downtime & Seamless Upgrades',
          stars: 5,
          name: 'Rahul Bansal',
          designation: 'CTO',
          company: 'NextWave Technologies'
        }
      ]
    },
    cta: {
      title: 'Ready to Build, Secure & Scale Your Website?',
      subtitle: 'DESIGN • DEVELOPMENT • MAINTENANCE',
      description: 'Your website should be your **strongest sales tool** — not a liability. With Digi Aerotech, you get end-to-end **web design, development, and maintenance** built for growth.',
    }
  }
};
