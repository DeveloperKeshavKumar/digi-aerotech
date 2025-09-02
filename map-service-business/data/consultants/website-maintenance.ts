import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconDeviceDesktop, IconCode, IconSettings, IconLock, IconRocket,
  IconTrendingUp, IconWorld, IconUsers, IconTarget, IconArrowRight,
  IconTools, IconChartArcs, IconDatabase
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'web-design-development-maintenance',
  business: 'all-industries',
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
            { text: "Without Professional Web Solutions", gradient: true, gradientClass: "from-blue-500 via-indigo-500 to-purple-500" }
          ],
          subheadline: "A website isn’t just your digital presence — it’s your growth engine. Without a well-designed, high-performing, and regularly maintained site, businesses lose credibility, traffic, and revenue.",
          painPoints: [
            "Outdated or poorly designed websites drive away customers instantly",
            "Slow loading speed & bad mobile experience hurt rankings and conversions",
            "Security vulnerabilities risk customer trust and sensitive data",
            "Broken links, downtime & errors create poor user experience",
            "Lack of SEO-friendly structure makes it hard to rank on Google",
            "No regular updates or maintenance = performance drops & missed opportunities"
          ],
          solutionPoints: [
            "Modern, responsive, and conversion-focused website designs",
            "Custom web development built for scalability & performance",
            "Regular updates, backups, and bug-fixes for reliability",
            "Robust security protocols to keep your site safe 24/7",
            "SEO-friendly structure & optimization baked into every site",
            "End-to-end maintenance so you focus on growth, not tech headaches"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Upgrade My Website Now"
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
              question: 'Why do I need professional web design & development?',
              answer: 'Because your website is often the first impression. A modern, responsive, and user-friendly site builds trust, drives conversions, and supports SEO rankings.',
              icon: React.createElement(IconDeviceDesktop, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Do you also provide website maintenance?',
              answer: 'Yes, we provide full maintenance — from performance monitoring, backups, and bug-fixes to adding new features and ensuring security patches are up-to-date.',
              icon: React.createElement(IconTools, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Will my website be SEO-optimized?',
              answer: 'Absolutely. Every site we build follows SEO best practices — fast load speed, mobile responsiveness, schema, meta tags, and clean code.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Do you handle e-commerce websites?',
              answer: 'Yes, we develop and maintain secure, scalable e-commerce platforms with payment integration, inventory systems, and conversion-focused design.',
              icon: React.createElement(IconDatabase, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Can you redesign my old website?',
              answer: 'Definitely. We revamp outdated websites into modern, mobile-first, lead-generating platforms without losing your existing SEO authority.',
              icon: React.createElement(IconRocket, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'How do you ensure security of my site?',
              answer: 'We implement SSL, firewalls, regular audits, malware scans, and backups so your site stays secure, stable, and trusted by users & Google.',
              icon: React.createElement(IconLock, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Modern. Secure. Growth-Ready.",
      headlineKeywords: [
        "Web Design That Converts",
        "Custom Web Development",
        "Full-Scope Website Maintenance",
        "SEO-Friendly Architecture",
        "24/7 Secure & Scalable Sites"
      ],
      brandLine: [
        { text: "🌐 Web Design, Development & Maintenance Services", gradient: false }
      ],
      subheadline: "Digi Aerotech builds websites that don’t just look stunning — they perform, convert, and scale. From design to development to ongoing maintenance, we handle everything end-to-end so your business can thrive online.",
      ctaButtons: [
        { icon: React.createElement(IconRocket, { size: 28 }), text: "Get My Website Designed", link: "/contact" },
        { icon: React.createElement(IconChartArcs, { size: 28 }), text: "Request Free Website Audit", link: "/audit", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconDeviceDesktop, { size: 32 }),
          title: "Responsive Designs",
          description: "Flawless across all devices & screens"
        },
        {
          icon: React.createElement(IconCode, { size: 32 }),
          title: "Custom Development",
          description: "Tailored websites for business goals"
        },
        {
          icon: React.createElement(IconSettings, { size: 32 }),
          title: "Full Maintenance",
          description: "Regular updates, backups & monitoring"
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "SEO-Optimized",
          description: "Rank higher, load faster, convert better"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Businesses Trust ", gradient: false },
        { text: "Digi Aerotech for Web Design & Development", gradient: true, gradientClass: "from-blue-500 via-indigo-500 to-purple-500" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "Client-Centric Approach",
          description: "We build websites that reflect your brand and speak to your customers’ needs."
        },
        {
          icon: React.createElement(IconTarget, { size: 28 }),
          title: "Conversion-Driven Design",
          description: "Every design element is optimized for engagement, trust, and conversions."
        },
        {
          icon: React.createElement(IconWorld, { size: 28 }),
          title: "Scalable Development",
          description: "From startups to enterprises, our code adapts as your business grows."
        },
        {
          icon: React.createElement(IconSettings, { size: 28 }),
          title: "End-to-End Maintenance",
          description: "Ongoing updates, bug fixes, and security monitoring for total peace of mind."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "SEO + Performance Focused",
          description: "Built with speed, SEO, and ranking in mind for long-term success."
        },
        {
          icon: React.createElement(IconTools, { size: 28 }),
          title: "24/7 Support",
          description: "Round-the-clock technical support to keep your site running smoothly."
        }
      ],
      cta: {
        text: "Let’s Build My Website",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Web Design, Development & Maintenance Process',
      subtitle: 'STEP-BY-STEP TO A HIGH-PERFORMING WEBSITE',
      description: 'We follow a structured process that ensures your website not only looks great but also drives results, remains secure, and stays updated.',
      steps: [
        { id: 1, title: 'Discovery & Planning', description: 'We understand your business, audience, and goals to craft a winning web strategy.' },
        { id: 2, title: 'Wireframing & Design', description: 'User-focused layouts & stunning designs aligned with brand identity.' },
        { id: 3, title: 'Custom Development', description: 'Clean, scalable, and SEO-friendly code to power your website.' },
        { id: 4, title: 'Testing & Launch', description: 'Cross-device, performance, and security testing before going live.' },
        { id: 5, title: 'Ongoing Maintenance', description: 'Regular updates, backups, security checks, and bug fixes.' },
        { id: 6, title: 'Performance Optimization', description: 'Continuous monitoring, speed tuning, and SEO updates for growth.' }
      ]
    },
    cta: {
      title: 'Ready to Upgrade Your Website?',
      subtitle: 'WEB DESIGN + DEVELOPMENT + MAINTENANCE',
      description: 'From creating a stunning design to handling ongoing updates, Digi Aerotech is your end-to-end partner for building and maintaining websites that grow your business.',
    }
  }
};
