import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import { 
  IconShoppingCart, IconTrendingUp, IconCreditCard, IconUsers, IconStar, IconRocket, IconArrowRight 
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'google-ads',
  business: 'ecomm-brands',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant1',
    process: 'variant3',
  },
  data: {
    slug: 'google-ads-ecomm-brands',
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
            { text: "Google Ads ROI", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Running Google Ads without proper targeting or strategy leads to wasted budget, low conversions, and poor sales growth.",
          painPoints: [
            "High ad spend with low ROI",
            "Poor targeting for product categories",
            "Low click-through rates and conversions",
            "Difficulty managing multiple campaigns",
            "Inadequate tracking and optimization"
          ],
          solutionPoints: [
            "Advanced keyword & audience research",
            "Conversion-focused campaign setup",
            "Continuous A/B testing & optimization",
            "Smart bidding & budget allocation",
            "Performance tracking & actionable insights"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Boost Your Google Ads ROI"
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
              question: 'Why should e-commerce brands use Google Ads?',
              answer: 'Google Ads drives highly targeted traffic, boosting conversions and sales for online stores.',
              icon: React.createElement(IconShoppingCart, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Do you manage product-specific campaigns?',
              answer: 'Yes. We create campaigns tailored to your product categories for maximum relevance and ROI.',
              icon: React.createElement(IconCreditCard, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'How do you improve low-performing campaigns?',
              answer: 'Through continuous A/B testing, bid adjustments, audience refinement, and creative optimization.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Can Google Ads increase repeat customers?',
              answer: 'Yes. We run remarketing campaigns targeting previous visitors to boost repeat purchases.',
              icon: React.createElement(IconUsers, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'How do you track campaign ROI?',
              answer: 'We integrate analytics and conversion tracking to monitor clicks, sales, and revenue per campaign.',
              icon: React.createElement(IconStar, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'When will I see results from Google Ads?',
              answer: 'E-commerce stores often see measurable traffic and conversion increases within weeks of campaign launch.',
              icon: React.createElement(IconRocket, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Want ",
      headlineKeywords: [
        "Higher Conversions?",
        "More Online Sales?",
        "Better ROAS?",
        "Google Ads That Work?",
        "360° PPC Management for E-commerce?"
      ],
      brandLine: [
        { text: "💰 Scale Your E-commerce Sales with Targeted Google Ads", gradient: false }
      ],
      subheadline: "We help e-commerce brands run high-ROI Google Ads campaigns that drive clicks, conversions, and revenue growth.",
      ctaButtons: [
        { icon: React.createElement(IconCreditCard, { size: 28 }), text: "Book Free Ads Consultation", link: "/contact" },
        { icon: React.createElement(IconUsers, { size: 28 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "5,000+ Conversions",
          description: "Generated for e-commerce clients"
        },
        {
          icon: React.createElement(IconShoppingCart, { size: 32 }),
          title: "200+ Campaigns",
          description: "Successfully managed and optimized"
        },
        {
          icon: React.createElement(IconRocket, { size: 32 }),
          title: "10x ROI Potential",
          description: "Smart bidding and audience targeting"
        },
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "Global Reach",
          description: "Campaigns targeting worldwide customers"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the ", gradient: false },
        { text: "#1 Google Ads Partner for E-commerce Brands", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconShoppingCart, { size: 28 }),
          title: "Product-Specific Campaigns",
          description: "We target the right products to the right audiences for maximum ROI."
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Continuous Optimization",
          description: "We constantly refine bids, keywords, and creatives to improve results."
        },
        {
          icon: React.createElement(IconCreditCard, { size: 28 }),
          title: "Conversion Tracking & Analytics",
          description: "Track clicks, sales, and revenue per campaign for actionable insights."
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "Remarketing Expertise",
          description: "Bring back previous visitors to boost repeat purchases and customer lifetime value."
        },
        {
          icon: React.createElement(IconStar, { size: 28 }),
          title: "ROI-Focused Strategy",
          description: "Every campaign is designed to maximize return on ad spend."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Scalable Campaigns",
          description: "From small startups to large e-commerce stores, we scale campaigns effectively."
        }
      ],
      cta: {
        text: "Start High-ROI Ads Today",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Proven Google Ads Process for E-commerce Brands',
      subtitle: 'STEP-BY-STEP ROI-DRIVEN CAMPAIGNS',
      className: 'border-t border-border dark:border-gray-700',
      description: 'From research to optimization, our process ensures every Google Ads campaign delivers measurable results for your e-commerce business.',
      steps: [
        { id: 1, title: 'Keyword & Audience Research', description: 'Identify high-intent keywords and target audiences that convert.' },
        { id: 2, title: 'Campaign Structure Setup', description: 'Organize campaigns, ad groups, and product targeting for maximum relevance.' },
        { id: 3, title: 'Ad Creatives & Copywriting', description: 'Design compelling ad creatives with persuasive copy to drive clicks.' },
        { id: 4, title: 'Bidding & Budget Allocation', description: 'Optimize bids and budgets for cost-efficient conversions.' },
        { id: 5, title: 'Performance Monitoring & A/B Testing', description: 'Continuously test and tweak campaigns to improve CTR and ROAS.' },
        { id: 6, title: 'Reporting & Insights', description: 'Provide actionable reports to track revenue, conversions, and ROI.' }
      ]
    },
    cta: {
      title: 'Ready to Scale Your E-commerce Sales with Google Ads?',
      subtitle: 'Drive Conversions, Increase ROI, Boost Revenue',
      description: 'Book a free Google Ads consultation with Digi Aerotech and start running high-ROI campaigns for your e-commerce store.'
    }
  }
};
