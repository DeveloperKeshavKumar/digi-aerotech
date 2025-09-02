import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
 IconRocket, IconShieldCheck, IconTrendingUp, IconArrowRight,
  IconCode, IconServer, IconTools, IconUsers, IconStar, IconGlobe, IconCalendarEvent, IconPhone
} from '@tabler/icons-react';
import { Monitor, Wrench } from 'lucide-react';

export const map: ServiceBusinessMap = {
  service: 'web-design-development',
  business: 'web-design-development', // combined with maintenance
  variants: {
    hero: 'variant1',
    whyChooseUs: 'variant3',
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
            { text: "Website Challenges Businesses Face ", gradient: false },
            { text: "Without Expert Design & Maintenance", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
          ],
          subheadline: "Many businesses struggle with slow, outdated, or insecure websites, leading to lost customers and poor SEO rankings.",
          painPoints: [
            "Outdated website design that fails to engage users",
            "Slow page load times affecting user experience & SEO",
            "Frequent downtime or broken pages causing trust issues",
            "Complex CMS or backend making updates difficult",
            "Poor mobile responsiveness & accessibility",
            "Inconsistent branding across website and campaigns"
          ],
          solutionPoints: [
            "Custom, responsive website design optimized for conversions",
            "Performance tuning & speed optimization for all devices",
            "Regular website maintenance to prevent downtime and errors",
            "Easy-to-manage CMS and admin panels with support",
            "Mobile-first design & accessibility compliance",
            "Consistent branding and UX that reinforces your company identity"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Get a Stunning Website Now"
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
              question: 'Do you redesign existing websites or only create new ones?',
              answer: 'We handle both: redesign outdated sites for modern performance and UX, and build new websites from scratch with full customization.',
              icon: React.createElement(IconCode, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Can you maintain my website after launch?',
              answer: 'Absolutely. We provide ongoing maintenance including security updates, backups, bug fixes, and performance optimization.',
              icon: React.createElement(Wrench, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Will my website be SEO-friendly?',
              answer: 'Yes, all our websites are built with SEO best practices, fast load times, and mobile optimization to boost search engine rankings.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Do you support e-commerce functionality?',
              answer: 'Yes, we can integrate secure, scalable e-commerce platforms with payment gateways, product catalogs, and marketing tools.',
              icon: React.createElement(IconServer, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'How do you ensure website security?',
              answer: 'We implement SSL, regular updates, firewall protections, and monitoring to prevent hacks and downtime.',
              icon: React.createElement(IconShieldCheck, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'Can you provide multi-language or international websites?',
              answer: 'Yes, we design multilingual, multi-region websites to target international audiences with localized content and SEO.',
              icon: React.createElement(IconGlobe, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Want a ",
      headlineKeywords: [
        "Stunning Website?",
        "Fast & Secure Website?",
        "Mobile-Optimized Design?",
        "Scalable Web Solution?",
        "360° Web Design & Maintenance?"
      ],
      brandLine: [
        { text: "💻 Build & Maintain a Powerful Website That Converts Visitors into Customers", gradient: false }
      ],
      subheadline: "We provide full-cycle web design, development, and maintenance services to ensure your website drives growth and stays error-free.",
      ctaButtons: [
        { icon: React.createElement(IconRocket, { size: 28 }), text: "Schedule Free Consultation", link: "/contact" },
        { icon: React.createElement(IconPhone, { size: 28 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(Monitor, { size: 32 }),
          title: "300+ Websites",
          description: "Designed & maintained"
        },
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "150+ Clients",
          description: "Trusted across industries"
        },
        {
          icon: React.createElement(IconStar, { size: 32 }),
          title: "4.9/5 Client Rating",
          description: "Based on satisfaction & support"
        },
        {
          icon: React.createElement(IconTools, { size: 32 }),
          title: "24/7 Maintenance",
          description: "Uptime, updates, & security covered"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the ", gradient: false },
        { text: "Top Choice for Web Design & Maintenance", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
      ],
      trustPoints: [
        {
          icon: React.createElement(Monitor, { size: 28 }),
          title: "Custom, Conversion-Focused Design",
          description: "We craft visually stunning websites optimized to convert visitors into leads and paying customers."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "High Performance & Speed",
          description: "Optimized websites with lightning-fast load times for better user experience and SEO."
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 28 }),
          title: "Reliable Security & Maintenance",
          description: "Regular updates, SSL, and monitoring to ensure your website is secure and always online."
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "SEO & Mobile Optimized",
          description: "Built with SEO best practices and responsive design for all devices and screen sizes."
        },
        {
          icon: React.createElement(IconTools, { size: 28 }),
          title: "Full-Cycle Development Support",
          description: "From concept, design, and development to maintenance and scaling, we cover the entire website lifecycle."
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "Scalable & Custom Solutions",
          description: "Flexible websites that grow with your business needs, supporting new features and expansions."
        }
      ],
      cta: {
        text: "Get Your Website Today",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Complete Web Design, Development & Maintenance Process',
      subtitle: 'STEP-BY-STEP WEBSITE SUCCESS SYSTEM',
      className: 'border-t border-border dark:border-gray-700',
      description: 'From concept to launch and ongoing maintenance, our 6-step process ensures your website is beautiful, fast, secure, and always up-to-date.',
      steps: [
        {
          id: 1,
          title: 'Discovery & Planning',
          description: 'We analyze your business goals, target audience, competitors, and technical requirements to craft a comprehensive website plan.'
        },
        {
          id: 2,
          title: 'UX/UI Design',
          description: 'Create user-friendly, responsive, and visually appealing website designs that enhance engagement and drive conversions.'
        },
        {
          id: 3,
          title: 'Development & Coding',
          description: 'Implement responsive, fast, and scalable websites using the latest technologies, frameworks, and security standards.'
        },
        {
          id: 4,
          title: 'SEO & Performance Optimization',
          description: 'Optimize website speed, structure, and content for search engines to increase organic visibility and rankings.'
        },
        {
          id: 5,
          title: 'Launch & Quality Assurance',
          description: 'Test across devices and browsers, fix bugs, and deploy your website safely to ensure a seamless launch experience.'
        },
        {
          id: 6,
          title: 'Maintenance & Support',
          description: 'Continuous monitoring, updates, backups, and security patches to ensure your website remains fully functional, secure, and high-performing.'
        }
      ]
    },
    cta: {
      title: 'Ready for a High-Performing Website?',
      subtitle: 'BUILD, LAUNCH, AND MAINTAIN WITH EASE',
      description: 'Book a free consultation with Digi Aerotech to create a website that looks great, performs perfectly, and stays secure long-term.'
    }
  }
};
