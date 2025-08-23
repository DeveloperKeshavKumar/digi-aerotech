import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconRocket, IconBulb, IconChartLine, IconUsers, IconWorld,
  IconShieldCheck, IconPhone, IconTrendingUp, IconTarget, IconBriefcase,
  IconStar, IconCoins, IconArrowRight
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: '360-digital-marketing',
  business: 'startups-entrepreneurs',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant1',
    process: 'variant3',
    testimonials: 'variant2'
  },
  data: {
    slug: '360-digital-marketing-startups',
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
            { text: "The Startup ", gradient: false },
            { text: "Struggles ", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" },
            { text: "Entrepreneurs Face Online", gradient: false }
          ],
          subheadline: "Launching a startup is tough. Getting traction, visibility, and funding trust is even harder without a proven digital growth system.",
          painPoints: [
            "Lack of visibility in crowded markets",
            "Difficulty acquiring first 1000 paying users",
            "Low trust among investors & customers",
            "Limited budget with high burn rate",
            "Scattered, inconsistent marketing efforts"
          ],
          solutionPoints: [
            "Brand positioning that cuts through the noise",
            "Rapid growth campaigns with performance ads",
            "Investor-friendly authority building",
            "Affordable & scalable digital strategies",
            "End-to-end funnel for customer acquisition"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Get Your Startup Growth Plan"
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
              question: 'Can digital marketing really help early-stage startups?',
              answer: 'Yes. With limited budgets, our data-driven campaigns bring maximum ROI and help you acquire early adopters fast.',
              icon: React.createElement(IconBulb, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Do you help startups raise brand credibility for investors?',
              answer: 'Absolutely. We build authority via PR, thought-leadership content, and social proof that impresses both investors and clients.',
              icon: React.createElement(IconShieldCheck, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'How do you keep costs optimized for bootstrapped startups?',
              answer: 'We prioritize channels that deliver the highest ROI first, then scale as your funding or revenue grows.',
              icon: React.createElement(IconCoins, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Can you help a startup with global customer reach?',
              answer: 'Yes. From global SEO to international ad targeting, we scale your brand across countries and customer bases.',
              icon: React.createElement(IconWorld, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Do you provide startup-specific growth playbooks?',
              answer: 'Yes. We customize 90-day traction roadmaps tailored to your product stage, market, and funding goals.',
              icon: React.createElement(IconBriefcase, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'How soon can I see results for my startup?',
              answer: 'You’ll start seeing traction in weeks through ads & campaigns, while organic branding compounds in 3–6 months.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Launching ",
      headlineKeywords: [
        "Your Startup?",
        "Need Investor Trust?",
        "Struggling for First 1000 Customers?",
        "Want Global Traction?",
        "360° Digital Marketing for Entrepreneurs?"
      ],
      brandLine: [
        { text: "🚀 Accelerate Your Startup Growth with 360 Digital Marketing", gradient: false }
      ],
      subheadline: "From zero to market leader — we help startups & entrepreneurs acquire users, attract investors, and scale globally.",
      ctaButtons: [
        { icon: React.createElement(IconRocket, { size: 28 }), text: "Book Free Growth Call", link: "/contact" },
        { icon: React.createElement(IconPhone, { size: 28 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "1000+ Users Acquired",
          description: "For startup campaigns"
        },
        {
          icon: React.createElement(IconStar, { size: 32 }),
          title: "50+ Startup Launches",
          description: "Scaled from scratch"
        },
        {
          icon: React.createElement(IconChartLine, { size: 32 }),
          title: "5X Faster Growth",
          description: "Than DIY marketing"
        },
        {
          icon: React.createElement(IconWorld, { size: 32 }),
          title: "Global Scaling",
          description: "Across 20+ states"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the ", gradient: false },
        { text: "#1 Growth Partner for Startups", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconBulb, { size: 28 }),
          title: "Startup DNA in Our Team",
          description: "We’ve worked with early-stage founders and understand startup challenges deeply."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Fast Traction Systems",
          description: "Proven 90-day systems to get your first 1000 customers."
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 28 }),
          title: "Investor-Ready Branding",
          description: "We build authority that boosts investor confidence & funding chances."
        },
        {
          icon: React.createElement(IconTarget, { size: 28 }),
          title: "Laser-Focused Marketing",
          description: "We target the right audience with zero wasted ad spend."
        },
        {
          icon: React.createElement(IconCoins, { size: 28 }),
          title: "ROI-Centric Growth",
          description: "We maximize every rupee/dollar you spend to give maximum impact."
        },
        {
          icon: React.createElement(IconWorld, { size: 28 }),
          title: "Scale Without Limits",
          description: "From local launches to global expansion, we scale startups everywhere."
        }
      ],
      cta: {
        text: "Scale Your Startup Today",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Proven Growth Process for Startups',
      subtitle: 'A STEP-BY-STEP DIGITAL GROWTH ENGINE',
      className: 'border-t border-border dark:border-gray-700',
      description: 'We use a structured, repeatable process that helps startups scale user acquisition, funding trust, and global growth.',
      steps: [
        {
          id: 1,
          title: 'Discovery & Positioning',
          description: 'Define USP, market positioning & startup story that connects.'
        },
        {
          id: 2,
          title: 'Branding & Credibility',
          description: 'Design branding & PR that wins investor and customer trust.'
        },
        {
          id: 3,
          title: 'Launch Growth Campaigns',
          description: 'Run targeted ads, SEO & growth hacks to acquire first 1000 users.'
        },
        {
          id: 4,
          title: 'Conversion Funnel Setup',
          description: 'Create landing pages, funnels & nurturing workflows for signups.'
        },
        {
          id: 5,
          title: 'Retention & Community',
          description: 'Engage users with content, loyalty campaigns & community growth.'
        },
        {
          id: 6,
          title: 'Scaling & Investor Visibility',
          description: 'Scale campaigns globally & enhance credibility with investors.'
        }
      ]
    },
    testimonials: {
      title: [
        { text: "Startups & Founders Who ", gradient: false },
        { text: "Scaled with Us", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
      ],
      description: 'See how Digi Aerotech helped startups acquire users, attract investors, and scale globally.',
      testimonials: [
        {
          id: '1',
          message: 'As a first-time founder, Digi Aerotech helped me position my brand and acquire 5,000+ users within 6 months.',
          highlight: '5,000+ users within 6 months',
          stars: 5,
          name: 'Rohit Verma',
          designation: 'Founder & CEO',
          company: 'TechHive'
        },
        {
          id: '2',
          message: 'Their digital campaigns not only brought customers but also boosted my credibility for investors. We closed our seed round confidently.',
          highlight: 'boosted my credibility for investors',
          stars: 5,
          name: 'Ananya Gupta',
          designation: 'Co-Founder',
          company: 'HealthBridge'
        }
      ]
    },
    cta: {
      title: 'Ready to Launch & Scale Your Startup?',
      subtitle: 'FROM IDEA TO GLOBAL BRAND',
      description: 'Book a free growth strategy call with Digi Aerotech and see how our 360° digital marketing can accelerate your startup journey.'
    }
  }
};
