import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconCode, IconDeviceMobile, IconWorld, IconRocket, IconLayout, IconSettings,
  IconChartBar, IconBulb, IconCheck, IconTrendingUp, IconBuildingStore
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'web-design-development',
  business: 'startups-entrepreneurs',
  variants: {
    hero: 'variant1',
    whyChooseUs: 'variant3',
    process: 'variant2',
  },
  data: {
    slug: 'web-design-development-startups-entrepreneurs',
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
            { text: "Why Most Startup Websites Fail ", gradient: false },
            { text: "to Convert Visitors", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Many startups treat their website as just a digital brochure. But in reality, it should be your growth engine for customers, investors, and partnerships.",
          painPoints: [
            "Outdated designs that don’t inspire trust",
            "Slow loading speeds that repel visitors",
            "No clear CTAs or lead funnels",
            "Non-responsive layouts losing mobile users",
            "Unscalable structure not ready for growth"
          ],
          solutionPoints: [
            "Modern, investor-ready web designs",
            "Blazing fast, mobile-first performance",
            "Conversion-focused CTAs and funnels",
            "Responsive, SEO-friendly layouts",
            "Scalable frameworks that grow with you"
          ],
          cta: {
            icon: React.createElement(IconRocket, { size: 20 }),
            text: "Build My Startup Website"
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
              question: 'Do you build MVP websites for startups?',
              answer: 'Yes! We specialize in building MVP websites and SaaS platforms that help startups validate quickly.',
              icon: React.createElement(IconBulb, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Are your websites SEO-ready?',
              answer: 'Absolutely. Every site we build follows SEO best practices to ensure visibility from day one.',
              icon: React.createElement(IconChartBar, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Can my website scale as my startup grows?',
              answer: 'Yes. We design with scalability in mind, so your site can handle future traffic, features, and expansions.',
              icon: React.createElement(IconSettings, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Do you integrate CRMs and lead capture?',
              answer: 'Of course! We integrate lead forms, CRMs, and marketing automation tools to turn your website into a sales funnel.',
              icon: React.createElement(IconCheck, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'How fast will my site load?',
              answer: 'We ensure optimized performance with best coding practices, CDN, caching, and lightweight frameworks.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Startup Websites That ",
      headlineKeywords: [
        "Win Investors",
        "Generate Leads",
        "Convert Customers",
        "Scale with You"
      ],
      brandLine: [
        { text: "🚀 Web Design & Development for Startups & Entrepreneurs", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      subheadline: "We design websites that not only look great but also build credibility, capture leads, and scale as your startup grows.",
      ctaButtons: [
        { icon: React.createElement(IconRocket, { size: 28 }), text: "Build My Startup Website", link: "/contact" },
        { icon: React.createElement(IconTrendingUp, { size: 28 }), text: "Get Free Website Audit", link: "/contact", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconLayout, { size: 32 }),
          title: "100+ Startup Sites",
          description: "designed & deployed successfully"
        },
        {
          icon: React.createElement(IconWorld, { size: 32 }),
          title: "Global Reach",
          description: "optimized for worldwide users"
        },
        {
          icon: React.createElement(IconDeviceMobile, { size: 32 }),
          title: "Mobile-First",
          description: "responsive across all devices"
        },
        {
          icon: React.createElement(IconBuildingStore, { size: 32 }),
          title: "MVP Ready",
          description: "fast prototyping for validation"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Us for ", gradient: false },
        { text: "Startup Web Development", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Investor-Ready Designs",
          description: "Professional, modern layouts that impress VCs and clients."
        },
        {
          icon: React.createElement(IconCode, { size: 28 }),
          title: "Custom Development",
          description: "Tailored solutions with clean, scalable codebases."
        },
        {
          icon: React.createElement(IconChartBar, { size: 28 }),
          title: "SEO Optimized",
          description: "Every build is optimized for search visibility and ranking."
        },
        {
          icon: React.createElement(IconSettings, { size: 28 }),
          title: "Scalable Infrastructure",
          description: "Websites that grow as your startup expands."
        },
        {
          icon: React.createElement(IconDeviceMobile, { size: 28 }),
          title: "Mobile First",
          description: "Smooth experiences across smartphones, tablets, and desktops."
        },
        {
          icon: React.createElement(IconBulb, { size: 28 }),
          title: "Growth-Focused",
          description: "Conversion funnels built to generate leads & sales."
        }
      ],
      cta: {
        text: "Launch My Startup Website",
        link: "#contact",
        icon: React.createElement(IconRocket, { size: 20 })
      }
    },
    process: {
      title: 'Our Website Design & Development Process for Startups',
      subtitle: 'FROM IDEA TO INVESTOR-READY LAUNCH',
      className: 'border-t border-border dark:border-gray-700',
      description: 'We combine creativity, strategy, and technology to build startup websites that attract investors, generate leads, and scale.',
      steps: [
        {
          id: 1,
          title: 'Discovery & Strategy',
          description: 'We understand your startup vision, business model, and goals to create a web strategy that aligns with growth.'
        },
        {
          id: 2,
          title: 'Wireframes & Prototypes',
          description: 'We design UX wireframes and clickable prototypes for validation before development starts.'
        },
        {
          id: 3,
          title: 'UI/UX Design',
          description: 'Modern, sleek, and user-centric designs that align with your brand and audience expectations.'
        },
        {
          id: 4,
          title: 'Custom Development',
          description: 'We build websites using scalable frameworks, ensuring fast, secure, and optimized performance.'
        },
        {
          id: 5,
          title: 'Integrations & Lead Funnels',
          description: 'From CRMs to payment gateways, we integrate essential tools to turn your site into a lead-gen machine.'
        },
        {
          id: 6,
          title: 'Testing & Launch',
          description: 'Rigorous testing ensures flawless performance before your startup goes live with investor-ready confidence.'
        }
      ]
    },
    cta: {
      title: 'Build Your Startup Website That Converts',
      subtitle: 'FROM IDEA TO SCALE',
      description: 'Whether it’s MVP validation, investor pitch, or full-scale platform, we build startup websites designed for growth and funding.',
    }
  }
};
