import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconTrendingUp,
  IconUsers,
  IconShieldCheck,
  IconStar,
  IconRocket,
  IconShoppingCart,
  IconPhone,
  IconArrowRight,
  IconPackage,
  IconBarcode,
  IconTruck
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'ecommerce-marketing',
  business: 'fashion-brands',
  variants: {
    hero: 'variant1',
    whyChooseUs: 'variant2',
    process: 'variant3',
    testimonials: 'variant1'
  },
  data: {
    slug: 'ecommerce-marketing-fashion-brands',
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
            { text: "Challenges Fashion E-commerce ", gradient: false },
            { text: "Brands Face Online", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Fashion e-commerce brands often struggle to attract traffic, convert visitors, and retain loyal customers.",
          painPoints: [
            "Low website traffic despite quality products",
            "High cart abandonment rates",
            "Difficulty standing out among competitors",
            "Limited customer retention and repeat purchases",
            "Inefficient advertising spend on multiple platforms"
          ],
          solutionPoints: [
            "Targeted ad campaigns on Google, Meta & other platforms",
            "Conversion-optimized product pages & checkout funnels",
            "SEO strategies tailored for fashion e-commerce",
            "Email & retargeting campaigns for loyal customer retention",
            "Data-driven advertising to maximize ROI"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Boost Your Fashion E-commerce Sales"
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
              question: 'How can ecommerce marketing increase my sales?',
              answer: 'We drive highly targeted traffic to your fashion store, optimize conversions, and implement retention strategies for repeat sales.',
              icon: React.createElement(IconShoppingCart, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Do you manage advertising campaigns?',
              answer: 'Yes, we create and optimize campaigns on Google, Meta, and other ad networks to maximize ROI for fashion brands.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Can you help reduce cart abandonment?',
              answer: 'Absolutely. We improve UX, implement retargeting, and optimize checkout processes to minimize abandoned carts.',
              icon: React.createElement(IconPackage, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Do you provide SEO for fashion e-commerce?',
              answer: 'Yes, we optimize product pages, categories, and blog content to increase organic search traffic.',
              icon: React.createElement(IconBarcode, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'How do you help with customer retention?',
              answer: 'We implement email marketing, push notifications, loyalty programs, and personalized campaigns to retain customers.',
              icon: React.createElement(IconUsers, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'How soon can I expect results?',
              answer: 'Paid campaigns show immediate traffic, while SEO and retention strategies build sustainable growth over months.',
              icon: React.createElement(IconRocket, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Want ",
      headlineKeywords: [
        "Higher Online Sales?",
        "More Fashion Customers?",
        "Better Conversion Rates?",
        "Optimized Ad Campaigns?",
        "360° E-commerce Marketing for Fashion Brands?"
      ],
      brandLine: [
        { text: "🛍️ Scale Your Fashion E-commerce with Proven Digital Strategies", gradient: false }
      ],
      subheadline: "We help fashion brands attract traffic, convert visitors, and increase repeat sales with targeted e-commerce marketing strategies.",
      ctaButtons: [
        { icon: React.createElement(IconPhone, { size: 28 }), text: "Book Free Growth Call", link: "/contact" },
        { icon: React.createElement(IconArrowRight, { size: 28 }), text: "Increase Sales Now", link: "/contact", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconShoppingCart, { size: 32 }),
          title: "50,000+ Orders",
          description: "Generated via campaigns"
        },
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "100+ Fashion Stores",
          description: "Scaled with our strategies"
        },
        {
          icon: React.createElement(IconStar, { size: 32 }),
          title: "4.9/5 Client Rating",
          description: "Satisfaction guaranteed"
        },
        {
          icon: React.createElement(IconRocket, { size: 32 }),
          title: "Global Reach",
          description: "Campaigns across multiple countries"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the ", gradient: false },
        { text: "#1 E-commerce Marketing Partner for Fashion Brands", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Data-Driven Campaigns",
          description: "We optimize ad spend and campaigns for maximum ROI."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Conversion-Focused Design",
          description: "Product pages and funnels designed to convert visitors into buyers."
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "Customer Retention Experts",
          description: "Email, push, and loyalty programs for repeat purchases."
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 28 }),
          title: "Trusted by Fashion Brands",
          description: "Proven results across multiple fashion e-commerce stores."
        },
        {
          icon: React.createElement(IconStar, { size: 28 }),
          title: "SEO & Paid Marketing Synergy",
          description: "Combining organic and paid strategies for exponential growth."
        },
        {
          icon: React.createElement(IconShoppingCart, { size: 28 }),
          title: "Scalable Strategies",
          description: "Whether boutique or large brand, campaigns scale with growth."
        }
      ],
      cta: {
        text: "Grow Your Fashion E-commerce Now",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Proven E-commerce Marketing Process',
      subtitle: 'STEP-BY-STEP SALES BOOSTER',
      className: 'border-t border-border dark:border-gray-700',
      description: 'From traffic generation to conversions and repeat sales, we optimize every stage of your fashion e-commerce business.',
      steps: [
        {
          id: 1,
          title: 'Market & Competitor Analysis',
          description: 'Analyze competitors, trends, and customer behavior for fashion e-commerce.'
        },
        {
          id: 2,
          title: 'Traffic Acquisition Strategy',
          description: 'Targeted ads, social media campaigns, and influencer collaborations.'
        },
        {
          id: 3,
          title: 'Conversion Optimization',
          description: 'Improve product pages, checkout flow, and call-to-actions for higher sales.'
        },
        {
          id: 4,
          title: 'Retention & Loyalty Programs',
          description: 'Email, push notifications, and loyalty initiatives to retain customers.'
        },
        {
          id: 5,
          title: 'SEO for Product & Category Pages',
          description: 'Optimize content for organic search visibility and long-term growth.'
        },
        {
          id: 6,
          title: 'Continuous Monitoring & Scaling',
          description: 'Track performance, optimize campaigns, and scale for maximum ROI.'
        }
      ]
    },
    testimonials: {
      title: [
        { text: "Fashion Stores That ", gradient: false },
        { text: "Scaled with Us", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      description: 'See how Digi Aerotech helped fashion brands boost sales, conversions, and customer loyalty.',
      testimonials: [
        {
          id: '1',
          message: 'Our fashion e-commerce store saw a 300% increase in sales within 6 months thanks to Digi Aerotech.',
          highlight: '300% increase in sales',
          stars: 5,
          name: 'Sana Kapoor',
          designation: 'Founder',
          company: 'StyleHaven'
        },
        {
          id: '2',
          message: 'They optimized our ads, checkout process, and retention campaigns. Revenue skyrocketed!',
          highlight: 'Revenue skyrocketed',
          stars: 5,
          name: 'Aditya Sharma',
          designation: 'CEO',
          company: 'FashionFi Store'
        }
      ]
    },
    cta: {
      title: 'Ready to Scale Your Fashion E-commerce Store?',
      subtitle: 'Drive Traffic, Boost Conversions, and Maximize Sales',
      description: 'Book a free growth session and watch your fashion store dominate online sales!'
    }
  }
};
