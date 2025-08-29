import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconUsers,
  IconStar,
  IconTrendingUp,
  IconShieldCheck,
  IconRocket,
  IconShoppingBag,
  IconMail,
  IconChartLine,
  IconCreditCard,
  IconTag,
  IconArrowRight,
  IconPhone,
  IconCurrencyDollar,
  IconCurrencyRupee
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'leads-generation',
  business: 'fashion-brands',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant1',
    process: 'variant3',
    testimonials: 'variant1'
  },
  data: {
    slug: 'leads-generation-fashion-brands',
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
            { text: "Challenges Fashion Brands Face in ", gradient: false },
            { text: "Lead Generation", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Generating high-quality leads is crucial for fashion brands to drive sales and growth.",
          painPoints: [
            "Low-quality leads that don’t convert",
            "High cost per lead without ROI",
            "Difficulty targeting the right audience",
            "Inconsistent lead flow",
            "Lack of effective lead nurturing strategies"
          ],
          solutionPoints: [
            "Targeted campaigns reaching buyers ready to shop",
            "Optimized landing pages & lead forms",
            "Email & SMS nurturing workflows to convert leads",
            "Retargeting visitors who didn’t convert initially",
            "Data-driven insights to improve lead quality continuously"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Start Capturing High-Quality Leads"
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
              question: 'Can lead generation campaigns actually increase my fashion sales?',
              answer: 'Yes. Our campaigns deliver targeted leads who are more likely to purchase, increasing revenue for your fashion brand.',
              icon: React.createElement(IconShoppingBag, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Do you provide lead nurturing strategies?',
              answer: 'Absolutely. We use email, SMS, and retargeting to turn leads into paying customers.',
              icon: React.createElement(IconMail, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'How do you ensure lead quality?',
              answer: 'We target specific demographics, interests, and buyer behavior to generate high-intent leads.',
              icon: React.createElement(IconChartLine, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Can you generate leads for both online and offline stores?',
              answer: 'Yes. We create campaigns for e-commerce platforms as well as local boutiques and showrooms.',
              icon: React.createElement(IconCurrencyRupee, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'How soon will I see leads coming in?',
              answer: 'Leads start flowing within days for paid campaigns, while organic strategies build consistent long-term leads.',
              icon: React.createElement(IconCreditCard, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'Do you provide reporting on lead performance?',
              answer: 'Yes, you get detailed insights with lead metrics, quality scores, and conversion tracking.',
              icon: React.createElement(IconTag, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Want ",
      headlineKeywords: [
        "More High-Quality Leads?",
        "Boost Fashion Sales Fast?",
        "Targeted Leads for Your Brand?",
        "Consistent Lead Flow?",
        "Leads That Convert into Customers?"
      ],
      brandLine: [
        { text: "🚀 Capture & Convert High-Quality Leads for Your Fashion Brand", gradient: false }
      ],
      subheadline: "We generate and nurture leads for fashion brands using data-driven campaigns, ensuring high conversion rates and ROI.",
      ctaButtons: [
        { icon: React.createElement(IconPhone, { size: 28 }), text: "Book Free Lead Strategy", link: "/contact" },
        { icon: React.createElement(IconArrowRight, { size: 28 }), text: "Start Generating Leads", link: "/contact", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "15,000+ Leads",
          description: "Generated for fashion brands"
        },
        {
          icon: React.createElement(IconShoppingBag, { size: 32 }),
          title: "500+ Campaigns",
          description: "Optimized for high conversion"
        },
        {
          icon: React.createElement(IconStar, { size: 32 }),
          title: "4.9/5 Client Rating",
          description: "Satisfied fashion brand owners"
        },
        {
          icon: React.createElement(IconRocket, { size: 32 }),
          title: "Average Conversion 30%+",
          description: "Leads turned into paying customers"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the ", gradient: false },
        { text: "#1 Lead Generation Partner for Fashion Brands", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Targeted Lead Campaigns",
          description: "Reach buyers who are most likely to purchase your products."
        },
        {
          icon: React.createElement(IconStar, { size: 28 }),
          title: "Conversion-Optimized Funnels",
          description: "Landing pages and forms designed to convert visitors into leads."
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 28 }),
          title: "Smart Audience Segmentation",
          description: "Segmented targeting ensures high-intent leads."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Lead Nurturing & Retargeting",
          description: "We convert leads into loyal customers with follow-ups and remarketing."
        },
        {
          icon: React.createElement(IconShoppingBag, { size: 28 }),
          title: "Fashion Industry Expertise",
          description: "Years of experience generating leads specifically for fashion brands."
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "Transparent Reporting",
          description: "Detailed reports showing lead quality, source, and conversion rates."
        }
      ],
      cta: {
        text: "Start Capturing High-Quality Leads Today",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Lead Generation Process for Fashion Brands',
      subtitle: 'STEP-BY-STEP LEAD ACQUISITION',
      className: 'border-t border-border dark:border-gray-700',
      description: 'From strategy to nurturing, we ensure your fashion brand consistently receives high-quality leads that convert.',
      steps: [
        {
          id: 1,
          title: 'Audience Research & Targeting',
          description: 'Analyze demographics, interests, and buying behavior to target the right audience.'
        },
        {
          id: 2,
          title: 'Landing Page & Form Optimization',
          description: 'Create high-converting landing pages and lead capture forms.'
        },
        {
          id: 3,
          title: 'Ad Campaigns & Promotions',
          description: 'Run paid campaigns across Google, Meta, and other platforms.'
        },
        {
          id: 4,
          title: 'Lead Nurturing & Follow-up',
          description: 'Automated email/SMS sequences and retargeting to convert leads.'
        },
        {
          id: 5,
          title: 'Performance Tracking & Analytics',
          description: 'Monitor lead quality, cost per lead, and conversions to optimize campaigns.'
        },
        {
          id: 6,
          title: 'Scaling Successful Campaigns',
          description: 'Identify winning campaigns and scale them for maximum leads and revenue.'
        }
      ]
    },
    testimonials: {
      title: [
        { text: "Fashion Brands That ", gradient: false },
        { text: "Grew with Our Lead Generation", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      description: 'See how Digi Aerotech helped fashion brands generate high-quality leads and convert them into loyal customers.',
      testimonials: [
        {
          id: '1',
          message: 'Our boutique now receives 200+ high-quality leads per month, all thanks to Digi Aerotech’s lead campaigns.',
          highlight: '200+ high-quality leads',
          stars: 5,
          name: 'Ananya Kapoor',
          designation: 'Owner',
          company: 'Chic Vogue'
        },
        {
          id: '2',
          message: 'The leads generated were well-targeted, converting into real sales almost immediately.',
          highlight: 'converting into real sales',
          stars: 5,
          name: 'Rishi Malhotra',
          designation: 'Founder',
          company: 'Urban Fashion Hub'
        }
      ]
    },
    cta: {
      title: 'Ready to Get High-Quality Leads for Your Fashion Brand?',
      subtitle: 'Consistent Leads, More Sales, Better ROI',
      description: 'Book a free strategy session and let Digi Aerotech generate targeted leads that convert for your fashion brand.'
    }
  }
};
