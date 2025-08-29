import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconShoppingBag,
  IconUsers,
  IconStar,
  IconTrendingUp,
  IconShieldCheck,
  IconRocket,
  IconCreditCard,
  IconChartLine,
  IconCurrencyRupee,
  IconTag,
  IconPackage,
  IconArrowRight,
  IconPhone
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'google-ads',
  business: 'fashion-brands',
  variants: {
    hero: 'variant1',
    whyChooseUs: 'variant3',
    process: 'variant2',
    testimonials: 'variant1'
  },
  data: {
    slug: 'google-ads-fashion-brands',
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
            { text: "Challenges Fashion Brands Face with ", gradient: false },
            { text: "Google Ads", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Fashion brands often struggle to generate high ROI from Google Ads without expert strategies.",
          painPoints: [
            "High ad costs with low conversions",
            "Difficulty targeting the right fashion audience",
            "Poor ad creatives leading to low engagement",
            "Low-quality traffic from untargeted campaigns",
            "Limited insights and analytics to optimize campaigns"
          ],
          solutionPoints: [
            "Targeted campaigns to reach buyers ready to shop",
            "Conversion-focused ad creatives & copywriting",
            "Smart bidding strategies to reduce CPC & increase ROI",
            "Detailed analytics and continual optimization",
            "Remarketing & retargeting to maximize sales opportunities"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Launch High-ROI Ads Today"
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
              question: 'Can Google Ads bring actual sales for my fashion store?',
              answer: 'Yes, with targeted campaigns and optimized creatives, Google Ads drives ready-to-buy traffic directly to your store or website.',
              icon: React.createElement(IconShoppingBag, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Do you manage campaigns for both online and offline stores?',
              answer: 'Absolutely. We create campaigns for e-commerce stores as well as local fashion boutiques to maximize ROI.',
              icon: React.createElement(IconCurrencyRupee, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'How do you optimize ad spend?',
              answer: 'We use smart bidding, audience segmentation, and continuous A/B testing to reduce wasted spend and improve performance.',
              icon: React.createElement(IconChartLine, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Can you create creatives and ad copies?',
              answer: 'Yes, our team designs high-quality visuals and compelling copy tailored for your fashion audience.',
              icon: React.createElement(IconTag, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'How soon can I see results?',
              answer: 'Paid campaigns can bring traffic and leads almost immediately, while we optimize for long-term ROI over time.',
              icon: React.createElement(IconCreditCard, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'Do you provide reporting and insights?',
              answer: 'Yes, you receive detailed campaign reports with actionable insights to improve ad performance continuously.',
              icon: React.createElement(IconPackage, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Want ",
      headlineKeywords: [
        "More Online Fashion Sales?",
        "Better ROI from Ads?",
        "Targeted Fashion Campaigns?",
        "Maximized Conversions?",
        "Google Ads for Your Fashion Brand?"
      ],
      brandLine: [
        { text: "🛍️ Boost Sales & Revenue with Expert Google Ads for Fashion Brands", gradient: false }
      ],
      subheadline: "We create high-converting Google Ads campaigns tailored to fashion brands, driving traffic, leads, and sales efficiently.",
      ctaButtons: [
        { icon: React.createElement(IconPhone, { size: 28 }), text: "Book Free Ads Strategy", link: "/contact" },
        { icon: React.createElement(IconArrowRight, { size: 28 }), text: "Start Campaign Now", link: "/contact", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "20,000+ Clicks",
          description: "Generated for fashion clients"
        },
        {
          icon: React.createElement(IconShoppingBag, { size: 32 }),
          title: "500+ Fashion Campaigns",
          description: "Optimized for high ROI"
        },
        {
          icon: React.createElement(IconStar, { size: 32 }),
          title: "4.9/5 Client Rating",
          description: "Satisfied fashion brands"
        },
        {
          icon: React.createElement(IconRocket, { size: 32 }),
          title: "Average ROI 3x+",
          description: "Maximized ad returns"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the ", gradient: false },
        { text: "#1 Google Ads Partner for Fashion Brands", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Data-Driven Campaigns",
          description: "We analyze user behavior to target the right audience."
        },
        {
          icon: React.createElement(IconStar, { size: 28 }),
          title: "Conversion-Focused Ads",
          description: "Optimized creatives & copy for maximum leads and sales."
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 28 }),
          title: "Smart Budget Management",
          description: "Reduce CPC, increase ROI and minimize wasted spend."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Remarketing & Retargeting",
          description: "Bring back visitors who didn’t convert initially."
        },
        {
          icon: React.createElement(IconShoppingBag, { size: 28 }),
          title: "Industry Expertise",
          description: "Years of experience running ads for fashion brands."
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "Transparent Reporting",
          description: "Detailed insights with actionable recommendations."
        }
      ],
      cta: {
        text: "Start Your High-ROI Campaign Today",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Google Ads Process for Fashion Brands',
      subtitle: 'STEP-BY-STEP SALES BOOST',
      className: 'border-t border-border dark:border-gray-700',
      description: 'From strategy to execution, our Google Ads process ensures maximum visibility, clicks, and sales for fashion brands.',
      steps: [
        {
          id: 1,
          title: 'Target Audience Research',
          description: 'Identify buyers based on age, gender, location, and fashion preferences.'
        },
        {
          id: 2,
          title: 'Keyword & Competitor Analysis',
          description: 'Find high-converting keywords and analyze competitor campaigns.'
        },
        {
          id: 3,
          title: 'Ad Creative & Copywriting',
          description: 'Design attention-grabbing visuals and compelling ad copy.'
        },
        {
          id: 4,
          title: 'Smart Campaign Setup',
          description: 'Configure campaigns, bidding strategies, and extensions for optimal performance.'
        },
        {
          id: 5,
          title: 'Continuous Optimization',
          description: 'Monitor performance, A/B test ads, and adjust bids to improve ROI.'
        },
        {
          id: 6,
          title: 'Reporting & Scaling',
          description: 'Provide transparent reports and scale winning campaigns for more revenue.'
        }
      ]
    },
    testimonials: {
      title: [
        { text: "Fashion Brands That ", gradient: false },
        { text: "Grew with Google Ads", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      description: 'Discover how Digi Aerotech helped fashion brands increase traffic, leads, and sales through Google Ads.',
      testimonials: [
        {
          id: '1',
          message: 'Our online boutique saw a 5x ROI within the first month of Google Ads managed by Digi Aerotech.',
          highlight: '5x ROI',
          stars: 5,
          name: 'Ananya Kapoor',
          designation: 'Owner',
          company: 'Chic Vogue'
        },
        {
          id: '2',
          message: 'The campaigns brought high-quality traffic that converted to real sales, boosting our revenue significantly.',
          highlight: 'boosting our revenue',
          stars: 5,
          name: 'Rishi Malhotra',
          designation: 'Founder',
          company: 'Urban Fashion Hub'
        }
      ]
    },
    cta: {
      title: 'Ready to Maximize Your Fashion Sales with Google Ads?',
      subtitle: 'Get More Clicks, Leads & Conversions',
      description: 'Book a free strategy call and let Digi Aerotech create high-ROI Google Ads campaigns for your fashion brand.'
    }
  }
};
