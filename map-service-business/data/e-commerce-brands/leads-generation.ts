import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import { 
  IconUsers, IconTrendingUp, IconMail, IconPhone, IconRocket, IconStar, IconArrowRight 
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'leads-generation',
  business: 'ecomm-brands',
  variants: {
    hero: 'variant1',
    whyChooseUs: 'variant3',
    process: 'variant2',
    testimonials: 'variant1'
  },
  data: {
    slug: 'leads-generation-ecomm-brands',
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
            { text: "E-commerce Brands Struggle With ", gradient: false },
            { text: "Generating Quality Leads", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Without proper lead generation strategies, e-commerce stores struggle with low inquiries, abandoned carts, and poor conversions.",
          painPoints: [
            "High cart abandonment and lost revenue",
            "Low-quality leads from untargeted campaigns",
            "Difficulty tracking lead sources",
            "Inefficient follow-up process",
            "Limited automation for nurturing leads"
          ],
          solutionPoints: [
            "Targeted campaigns to attract high-intent buyers",
            "Optimized landing pages & forms for conversions",
            "Advanced tracking of lead sources & behavior",
            "Automated email & SMS follow-ups",
            "Lead nurturing sequences to convert cold leads"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Start Generating High-Quality Leads"
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
              question: 'Why is lead generation critical for e-commerce?',
              answer: 'It ensures a consistent flow of potential buyers, reducing abandoned carts and increasing conversions.',
              icon: React.createElement(IconUsers, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Do you target specific buyer segments?',
              answer: 'Yes, we identify high-intent audiences for your products to generate qualified leads.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'How do you follow up with leads?',
              answer: 'Through automated email, SMS, and remarketing campaigns to nurture leads and drive sales.',
              icon: React.createElement(IconMail, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Can you help recover abandoned carts?',
              answer: 'Yes, we implement remarketing and targeted campaigns to bring back lost customers.',
              icon: React.createElement(IconPhone, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'How do you measure lead quality?',
              answer: 'By tracking conversion rates, engagement metrics, and actual purchase behavior of leads.',
              icon: React.createElement(IconStar, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'When will I see results?',
              answer: 'Qualified leads often start coming in within a few weeks, with improved ROI over the following months.',
              icon: React.createElement(IconRocket, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Want ",
      headlineKeywords: [
        "More Qualified Leads?",
        "Higher Conversions?",
        "Better Sales Opportunities?",
        "Automated Lead Funnels?",
        "360° Lead Generation for E-commerce?"
      ],
      brandLine: [
        { text: "📈 Generate High-Quality Leads and Boost Your E-commerce Revenue", gradient: false }
      ],
      subheadline: "We help e-commerce brands attract, nurture, and convert high-intent leads through proven lead generation strategies.",
      ctaButtons: [
        { icon: React.createElement(IconMail, { size: 28 }), text: "Book Free Consultation", link: "/contact" },
        { icon: React.createElement(IconPhone, { size: 28 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "10,000+ Leads",
          description: "Generated for e-commerce clients"
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "200+ Campaigns",
          description: "Successfully managed and optimized"
        },
        {
          icon: React.createElement(IconRocket, { size: 32 }),
          title: "5x ROI Potential",
          description: "Through lead nurturing & targeted funnels"
        },
        {
          icon: React.createElement(IconStar, { size: 32 }),
          title: "High-Quality Leads",
          description: "Focused on conversion-ready buyers"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the ", gradient: false },
        { text: "#1 Lead Generation Partner for E-commerce Brands", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "Targeted Audience Research",
          description: "Identify high-intent buyers for your products."
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Optimized Lead Funnels",
          description: "Design landing pages and forms that convert visitors into leads."
        },
        {
          icon: React.createElement(IconMail, { size: 28 }),
          title: "Automated Follow-Ups",
          description: "Email & SMS sequences to nurture leads effectively."
        },
        {
          icon: React.createElement(IconPhone, { size: 28 }),
          title: "Remarketing Expertise",
          description: "Bring back lost customers and abandoned carts."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Conversion Tracking",
          description: "Track leads from click to purchase for actionable insights."
        },
        {
          icon: React.createElement(IconStar, { size: 28 }),
          title: "Scalable Lead Campaigns",
          description: "Whether small or large store, we scale campaigns efficiently."
        }
      ],
      cta: {
        text: "Start Generating Quality Leads Today",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Lead Generation Process for E-commerce Brands',
      subtitle: 'STEP-BY-STEP CONVERSION FUNNEL',
      className: 'border-t border-border dark:border-gray-700',
      description: 'From lead attraction to conversion, our structured process ensures consistent high-quality lead acquisition for your e-commerce store.',
      steps: [
        { id: 1, title: 'Audience & Market Research', description: 'Identify potential customers and understand their buying behavior.' },
        { id: 2, title: 'Landing Page & Form Optimization', description: 'Create high-converting pages with persuasive CTAs.' },
        { id: 3, title: 'Targeted Campaigns', description: 'Run ads and campaigns to attract high-intent visitors.' },
        { id: 4, title: 'Lead Nurturing Automation', description: 'Automate follow-ups via email, SMS, and retargeting.' },
        { id: 5, title: 'Monitoring & Optimization', description: 'Track leads and continuously optimize campaigns for better conversions.' },
        { id: 6, title: 'Reporting & Insights', description: 'Provide actionable reports to measure lead quality and ROI.' }
      ]
    },
    testimonials: {
      title: [
        { text: "E-commerce Brands Who ", gradient: false },
        { text: "Scaled with Our Lead Generation", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      description: 'See how Digi Aerotech helped e-commerce brands acquire high-quality leads that converted into loyal customers.',
      testimonials: [
        { id: '1', message: 'Our lead flow has never been better. Every week we get qualified inquiries that convert into sales.', highlight: 'qualified inquiries', stars: 5, name: 'Rohit Sharma', designation: 'Founder', company: 'StyleCart' },
        { id: '2', message: 'Thanks to Digi Aerotech, we have a systematic lead nurturing process that consistently increases our revenue.', highlight: 'systematic lead nurturing', stars: 5, name: 'Meera Jain', designation: 'CEO', company: 'Trendify' }
      ]
    },
    cta: {
      title: 'Ready to Acquire High-Quality Leads for Your E-commerce Store?',
      subtitle: 'Boost Conversions, Increase Sales, Grow Revenue',
      description: 'Book a free consultation with Digi Aerotech and start generating leads that convert into loyal customers.'
    }
  }
};
