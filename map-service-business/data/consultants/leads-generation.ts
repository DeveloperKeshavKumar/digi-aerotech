import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconUsers, IconChartBar, IconTarget, IconPhone, IconTrendingUp,
  IconSearch, IconBriefcase, IconBrain, IconCheck, IconArrowRight,
  IconBuilding, IconWorld, IconStar
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'lead-generation',
  business: 'consultants',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant2',
    process: 'variant3',
    testimonials: 'variant1'
  },
  data: {
    slug: 'lead-generation-consultants',
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
            { text: "Why Consultants ", gradient: false },
            { text: "Struggle with Consistent Leads", gradient: true, gradientClass: "from-blue-500 via-indigo-500 to-purple-500" }
          ],
          subheadline: "Most consultants have expertise but lack a predictable client acquisition system.",
          painPoints: [
            "Relying only on referrals and word-of-mouth",
            "Unclear ideal client targeting",
            "Low visibility on digital channels",
            "Getting unqualified or irrelevant leads",
            "Inconsistent pipeline & revenue fluctuations",
            "No structured follow-up or nurturing process"
          ],
          solutionPoints: [
            "Laser-focused lead generation campaigns tailored for consultants",
            "Precise targeting by industry, role, and geography",
            "Omni-channel strategies (LinkedIn, Google, Email, Ads)",
            "Smart filtering for high-quality, relevant prospects",
            "Consistent lead flow that fills your pipeline",
            "Lead nurturing systems that convert inquiries into paying clients"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Start My Lead Generation Now"
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
              question: 'Why is lead generation important for consultants?',
              answer: 'Without a consistent flow of leads, consultants face unpredictable revenue. Lead generation ensures a stable pipeline of clients.',
              icon: React.createElement(IconUsers, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Do you provide B2B or B2C leads?',
              answer: 'We specialize in both — depending on whether you consult businesses (B2B) or individuals (B2C).',
              icon: React.createElement(IconBriefcase, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'How do you ensure leads are qualified?',
              answer: 'Through targeted campaigns, filters, and intent-based marketing, ensuring you only get leads with high conversion potential.',
              icon: React.createElement(IconTarget, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Can lead generation work for niche consultants?',
              answer: 'Yes, whether you are a business consultant, career coach, financial advisor, or niche expert, campaigns are customized to your audience.',
              icon: React.createElement(IconBrain, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'How soon can I expect results?',
              answer: 'Depending on the channel, you can start seeing leads within days from Google Ads/LinkedIn Ads, and steady growth via SEO/email nurturing.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'Do you also help with lead nurturing?',
              answer: 'Yes. We not only generate leads but also build systems for follow-ups, email drip campaigns, and conversions.',
              icon: React.createElement(IconCheck, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Need ",
      headlineKeywords: [
        "More Clients?",
        "Predictable Leads?",
        "High-Value Prospects?",
        "Consistent Growth?",
        "Lead Generation for Consultants?"
      ],
      brandLine: [
        { text: "💼 Fill Your Pipeline with High-Quality Leads, Not Just Random Inquiries.", gradient: false }
      ],
      subheadline: "At Digi Aerotech, we build customized lead generation systems for consultants that deliver consistent, high-value clients and ensure steady revenue growth.",
      ctaButtons: [
        { icon: React.createElement(IconPhone, { size: 28 }), text: "Get Free Lead Gen Audit", link: "/contact" },
        { icon: React.createElement(IconWorld, { size: 28 }), text: "Talk to Lead Expert", link: "/contact", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "10,000+ Leads",
          description: "Generated for consultants across industries"
        },
        {
          icon: React.createElement(IconChartBar, { size: 32 }),
          title: "70% Conversion",
          description: "Leads turned into paying clients"
        },
        {
          icon: React.createElement(IconBuilding, { size: 32 }),
          title: "25+ Niches",
          description: "Business, career, coaching & more"
        },
        {
          icon: React.createElement(IconStar, { size: 32 }),
          title: "Proven Systems",
          description: "That keep your pipeline full"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the ", gradient: false },
        { text: "#1 Choice for Consultant Lead Generation", gradient: true, gradientClass: "from-blue-500 via-indigo-500 to-purple-500" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconTarget, { size: 28 }),
          title: "Laser Targeting",
          description: "We reach your exact audience — decision-makers, professionals, or individuals who need your expertise."
        },
        {
          icon: React.createElement(IconSearch, { size: 28 }),
          title: "Omni-Channel Approach",
          description: "Google Ads, LinkedIn, SEO, email campaigns — all working together for results."
        },
        {
          icon: React.createElement(IconBriefcase, { size: 28 }),
          title: "B2B & B2C Mastery",
          description: "Whether you consult businesses or individuals, we design unique lead gen funnels."
        },
        {
          icon: React.createElement(IconBrain, { size: 28 }),
          title: "Quality Over Quantity",
          description: "We focus on bringing you high-intent leads, not just random contact lists."
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "ROI-Driven Campaigns",
          description: "Every rupee spent is optimized for maximum client acquisition and revenue growth."
        },
        {
          icon: React.createElement(IconStar, { size: 28 }),
          title: "Proven Case Studies",
          description: "We’ve successfully scaled independent consultants to 6- and 7-figure revenues."
        }
      ],
      cta: {
        text: "Start My Lead Flow Now",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Lead Generation System',
      subtitle: 'CONSULTANT-SPECIFIC PIPELINE STRATEGY',
      description: 'We build predictable systems that fill your calendar with qualified client calls.',
      steps: [
        {
          id: 1,
          title: 'Discovery & ICP Setup',
          description: 'Define your Ideal Client Profile (ICP) and unique value proposition.'
        },
        {
          id: 2,
          title: 'Channel Selection',
          description: 'Pick the right channels — LinkedIn, Google Ads, SEO, Email — based on your consulting niche.'
        },
        {
          id: 3,
          title: 'Campaign Development',
          description: 'Craft ad copy, landing pages, and funnels that attract high-value clients.'
        },
        {
          id: 4,
          title: 'Lead Capture & Tracking',
          description: 'Implement systems to capture inquiries via calls, forms, and emails.'
        },
        {
          id: 5,
          title: 'Lead Nurturing',
          description: 'Automated email drips, follow-ups, and content to convert leads into clients.'
        },
        {
          id: 6,
          title: 'Optimization & Scaling',
          description: 'Refine campaigns, improve CPL, and scale up once results are consistent.'
        }
      ]
    },
    testimonials: {
      title: [
        { text: "Consultants Who ", gradient: false },
        { text: "Transformed with Our Lead Systems", gradient: true, gradientClass: "from-blue-500 via-indigo-500 to-purple-500" }
      ],
      description: 'Here’s how Digi Aerotech helped consultants scale with predictable lead generation.',
      testimonials: [
        {
          id: '1',
          message: 'Before Digi Aerotech, my leads were irregular. Now I get 20+ qualified calls every month like clockwork.',
          highlight: '20+ qualified calls',
          stars: 5,
          name: 'Anita Verma',
          designation: 'Career Consultant',
          company: 'FuturePath Consulting'
        },
        {
          id: '2',
          message: 'Their system filled my pipeline with exactly the kind of business clients I wanted. Best decision for my consulting practice.',
          highlight: 'pipeline with ideal clients',
          stars: 5,
          name: 'Rohit Mehta',
          designation: 'Business Strategy Consultant',
          company: 'ScaleX Advisory'
        }
      ]
    },
    cta: {
      title: 'Want a Steady Flow of Clients Every Month?',
      subtitle: 'LEAD GENERATION SERVICES FOR CONSULTANTS',
      description: 'Book a free lead generation audit with Digi Aerotech and start building a predictable client acquisition system today.'
    }
  }
};
