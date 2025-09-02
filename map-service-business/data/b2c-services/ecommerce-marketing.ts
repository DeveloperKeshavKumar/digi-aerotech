import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconShoppingCart, IconUsers, IconTrendingUp, IconStar, IconWorld,
  IconArrowRight, IconChartBar, IconTarget, IconRocket, IconChartArcs,
  IconDeviceMobile, IconCreditCard, IconPackage
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'ecommerce-marketing',
  business: 'b2c-services',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant1',
    process: 'variant2',
  },
  data: {
    slug: 'ecommerce-marketing-b2c',
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
            { text: "Why B2C E-commerce Brands Struggle ", gradient: false },
            { text: "Without Smart Marketing", gradient: true, gradientClass: "from-indigo-500 via-purple-500 to-pink-500" }
          ],
          subheadline: "In today’s crowded online market, simply having an e-commerce store isn’t enough. Without the right digital marketing strategy, most B2C brands fail to grow profitably.",
          painPoints: [
            "High website traffic but low conversion rates",
            "Cart abandonment eating away at revenue",
            "Weak brand visibility against stronger competitors",
            "Ineffective ad spend with poor ROI",
            "Lack of repeat purchases & customer loyalty",
            "No data-driven strategies to scale profitably"
          ],
          solutionPoints: [
            "360° e-commerce marketing tailored to your niche",
            "Conversion Rate Optimization (CRO) to maximize sales",
            "Retargeting ads to recover abandoned carts",
            "SEO & paid ads to rank higher and attract quality buyers",
            "Email & loyalty campaigns to retain customers",
            "Advanced analytics & reporting for data-driven growth"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Scale My E-commerce Store"
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
              question: 'What makes e-commerce marketing different from regular digital marketing?',
              answer: 'E-commerce marketing is focused on driving sales, increasing average order value, and maximizing customer lifetime value — not just generating traffic.',
              icon: React.createElement(IconShoppingCart, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Can you help reduce cart abandonment?',
              answer: 'Yes. We use retargeting ads, personalized emails, and CRO techniques to recover lost sales and reduce cart abandonment rates significantly.',
              icon: React.createElement(IconCreditCard, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Do you provide SEO for e-commerce stores?',
              answer: 'Absolutely. We optimize product listings, categories, and technical SEO to help your store rank higher on Google and attract organic buyers.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'What about repeat sales and loyalty?',
              answer: 'We design email sequences, loyalty programs, and remarketing strategies to increase repeat purchases and build long-term customer relationships.',
              icon: React.createElement(IconUsers, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Can you run paid ads for my store?',
              answer: 'Yes. We specialize in running high-ROI Google Ads, Meta Ads, and Shopping Campaigns that drive conversions without wasting spend.',
              icon: React.createElement(IconRocket, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'Do you work with global e-commerce brands?',
              answer: 'Yes. Whether local or global, we help e-commerce stores scale across multiple markets with localized SEO and ads.',
              icon: React.createElement(IconWorld, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Clicks. Conversions. Customers.",
      headlineKeywords: [
        "E-commerce Marketing Services",
        "Scale B2C Online Stores",
        "Boost Sales & Revenue",
        "Recover Abandoned Carts",
        "Increase Repeat Customers"
      ],
      brandLine: [
        { text: "🛒 B2C E-commerce Marketing Experts", gradient: false }
      ],
      subheadline: "Digi Aerotech helps B2C e-commerce stores attract more buyers, convert better, and build loyal customer bases with data-driven marketing strategies.",
      ctaButtons: [
        { icon: React.createElement(IconRocket, { size: 28 }), text: "Grow My Store", link: "/contact" },
        { icon: React.createElement(IconChartArcs, { size: 28 }), text: "Get Free Marketing Audit", link: "/audit", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "4x Higher ROI",
          description: "Optimized campaigns that maximize ad spend efficiency"
        },
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "More Repeat Buyers",
          description: "Customer loyalty campaigns that increase retention"
        },
        {
          icon: React.createElement(IconShoppingCart, { size: 32 }),
          title: "More Sales Per Visit",
          description: "CRO strategies that turn clicks into conversions"
        },
        {
          icon: React.createElement(IconPackage, { size: 32 }),
          title: "Scalable Growth",
          description: "Marketing strategies built to scale your store globally"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why B2C Brands Trust Digi Aerotech ", gradient: false },
        { text: "for E-commerce Marketing", gradient: true, gradientClass: "from-indigo-500 via-purple-500 to-pink-500" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconChartBar, { size: 28 }),
          title: "Data-Driven Marketing",
          description: "We analyze every metric to maximize conversions and ROI."
        },
        {
          icon: React.createElement(IconTarget, { size: 28 }),
          title: "Conversion Focused",
          description: "Our strategies don’t just drive traffic, they turn visitors into buyers."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "High-ROI Ads",
          description: "We run Google Ads, Meta Ads & Shopping Campaigns optimized for sales."
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "Customer Loyalty",
          description: "We design campaigns that increase repeat purchases and lifetime value."
        },
        {
          icon: React.createElement(IconDeviceMobile, { size: 28 }),
          title: "Mobile-First Approach",
          description: "Optimized campaigns and stores that convert mobile users seamlessly."
        },
        {
          icon: React.createElement(IconWorld, { size: 28 }),
          title: "Global Expansion",
          description: "Scale your store across regions with localized SEO & paid campaigns."
        }
      ],
      cta: {
        text: "Start Growing My Store",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Proven E-commerce Marketing Process',
      subtitle: 'FROM TRAFFIC TO REVENUE',
      description: 'We combine CRO, paid ads, SEO, and customer retention strategies into a unified system to help B2C stores scale profitably.',
      steps: [
        { id: 1, title: 'Store & Market Audit', description: 'We analyze your store, traffic sources, and competitors to uncover growth opportunities.' },
        { id: 2, title: 'SEO & Product Optimization', description: 'We optimize product pages, categories, and metadata for search visibility.' },
        { id: 3, title: 'Paid Ads Strategy', description: 'We design and manage high-ROI campaigns across Google, Meta, and Shopping platforms.' },
        { id: 4, title: 'Conversion Rate Optimization', description: 'We implement A/B testing, UX improvements, and checkout optimization to maximize sales.' },
        { id: 5, title: 'Retention & Loyalty', description: 'We build repeat sales strategies via email, SMS, and loyalty programs.' },
        { id: 6, title: 'Scaling & Global Expansion', description: 'We expand your reach with international SEO and targeted ads for new markets.' }
      ]
    },
    cta: {
      title: 'Ready to Scale Your E-commerce Store?',
      subtitle: 'TRAFFIC. CONVERSIONS. LOYAL CUSTOMERS.',
      description: 'Partner with Digi Aerotech to turn your online store into a sales-generating powerhouse with our proven e-commerce marketing strategies.'
    }
  }
};
