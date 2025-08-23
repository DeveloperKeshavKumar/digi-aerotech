import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { ServiceIcons } from '@/constants/service-icons';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import { 
  IconAd2, IconArrowRight, IconBrandMeta, IconCamera, IconChartBar, 
  IconDeviceLaptop, IconHeart, IconMapPin2, IconSearch, IconSocial, 
  IconShoppingCart, IconTrendingUp, IconUsers, IconTruckDelivery, 
  IconBriefcase2,
  IconStars,
  IconTimeDuration60
} from '@tabler/icons-react';

const { IconFreeRights, IconPhone, IconStarsFilled, IconRocket } = ServiceIcons;

export const map: ServiceBusinessMap = {
  service: '360-digital-marketing',
  business: 'e-commerce-brands',
  variants: {
    hero: 'variant1',
    whyChooseUs: 'variant3',
    process: 'variant2',
    testimonials: 'variant1'
  },
  data: {
    slug: '360-digital-marketing',
    showSections: {
      hero: true,
      whyChooseUs: true,
      typesOfServices: true,
      process: true,
      techStack: false,
      testimonials: true,
      cta: true
    },
    customSections: [
      {
        component: Struggles,
        position: 'beforeWhyChooseUs',
        props: {
          title: [
            { text: "The Problems ", gradient: false },
            { text: "E-Commerce Brands Face", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" },
            { text: " in Digital Growth", gradient: false }
          ],
          subheadline: "Running ads is easy. Scaling e-commerce profitably is the real challenge.",
          painPoints: [
            "High ad spend with low ROI",
            "Abandoned carts & poor conversions",
            "Low repeat purchase rates",
            "Struggling to build brand loyalty",
            "Dependence on one sales channel (Amazon/Flipkart only)"
          ],
          solutionPoints: [
            "Full-funnel marketing from awareness to purchase",
            "Conversion-optimized websites & product pages",
            "Automated email/SMS for cart recovery & repeat sales",
            "Omnichannel advertising (Meta, Google, TikTok, Influencers)",
            "Data-driven scaling strategies for profitable growth"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Boost My Online Sales Now"
          }
        }
      },
      {
        component: FaqSection,
        position: 'afterTestimonials',
        props: {
          faqs: [
            {
              id: 'ecom-1',
              question: 'How can 360° digital marketing grow e-commerce brand?',
              answer: 'We combine SEO, ads, influencer marketing, social media, and retention campaigns into one growth engine that drives traffic, sales, and loyalty.',
              icon: React.createElement(IconShoppingCart, { size: 22 })
            },
            {
              id: 'ecom-2',
              question: 'Do you handle Shopify, WooCommerce & D2C websites?',
              answer: 'Yes. We specialize in Shopify, WooCommerce, Magento, and custom D2C sites — ensuring your store is optimized for speed, UX, and conversions.',
              icon: React.createElement(IconDeviceLaptop, { size: 22 })
            },
            {
              id: 'ecom-3',
              question: 'Can you reduce my cart abandonment rate?',
              answer: 'Absolutely. We implement exit-intent popups, one-click checkout funnels, automated cart recovery emails, and remarketing ads to recover lost sales.',
              icon: React.createElement(IconHeart, { size: 22 })
            },
            {
              id: 'ecom-4',
              question: 'How do you make ads more profitable?',
              answer: 'We run data-driven Meta & Google ads with A/B testing, dynamic product ads, and retargeting strategies that bring down your CAC and boost ROAS.',
              icon: React.createElement(IconAd2, { size: 22 })
            },
            {
              id: 'ecom-5',
              question: 'Do you also focus on repeat sales & loyalty?',
              answer: 'Yes. We create post-purchase email flows, SMS campaigns, and loyalty programs that keep customers coming back again and again.',
              icon: React.createElement(IconUsers, { size: 22 })
            },
            {
              id: 'ecom-6',
              question: 'How do you measure success for e-commerce campaigns?',
              answer: 'We track ROAS, AOV, repeat purchase rate, CAC vs LTV, and revenue growth to ensure your brand scales sustainably.',
              icon: React.createElement(IconChartBar, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Need ",
      headlineKeywords: [
        "360 Digital Marketing for E-Commerce Brands?",
        "More Conversions?",
        "Lower CAC?",
        "Higher ROAS?",
        "Repeat Customers?"
      ],
      brandLine: [
        { text: "🛒 Turn Browsers Into Buyers. Buyers Into Loyal Fans.", gradient: false }
      ],
      subheadline: "With Digi Aerotech’s 360° E-Commerce Marketing, you get a proven growth system that drives profitable sales across channels and keeps customers coming back.",
      ctaButtons: [
        { icon: React.createElement(IconFreeRights, { size: 30 }), text: "Book Free Strategy Call", link: "/contact" },
        { icon: React.createElement(IconPhone, { size: 30 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconStarsFilled, { size: 34 }),
          title: "400%+ ROAS",
          description: "On average e-commerce campaigns"
        },
        {
          icon: React.createElement(IconBriefcase2, { size: 34 }),
          title: "140+ Brands",
          description: "Scaled successfully"
        },
        {
          icon: React.createElement(IconStars, { size: 34 }),
          title: "4.9/5 Rating",
          description: "Trusted by D2C founders"
        },
        {
          icon: React.createElement(IconTimeDuration60, { size: 34 }),
          title: "24/7 Support",
          description: "Always available"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the ", gradient: false },
        { text: "#1 Growth Partner for E-Commerce Brands", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconSearch, { size: 30 }),
          title: "E-Commerce SEO Expertise",
          description: "Rank product pages & blogs on Google for high-intent keywords that drive organic sales."
        },
        {
          icon: React.createElement(IconBrandMeta, { size: 30 }),
          title: "High-ROAS Ad Campaigns",
          description: "Proven Meta, Google, and TikTok campaigns with creative testing and audience scaling."
        },
        {
          icon: React.createElement(IconSocial, { size: 30 }),
          title: "Influencer & UGC Marketing",
          description: "Engage your audience with influencer collabs, UGC videos, and viral content that converts."
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 30 }),
          title: "Conversion Rate Optimization",
          description: "Landing pages & checkout flows optimized to turn visitors into buyers instantly."
        },
        {
          icon: React.createElement(IconTruckDelivery, { size: 30 }),
          title: "Omnichannel Growth Strategy",
          description: "Amazon, Flipkart, D2C website — we scale you across all channels, not just one."
        },
        {
          icon: React.createElement(IconRocket, { size: 30 }),
          title: "Data-Driven Scaling",
          description: "We track every metric (AOV, CAC, LTV) and optimize campaigns for sustainable growth."
        }
      ],
      cta: {
        text: "Scale My E-Commerce Brand Today",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    typesOfServices: {
      title: "360° Digital Marketing for E-Commerce Brands",
      subtitle: "SOLUTIONS THAT SELL",
      description: "End-to-end growth services designed for D2C and e-commerce brands to dominate their niche and scale revenue profitably.",
      services: [
        {
          id: 1,
          title: "Store & Funnel Optimization",
          description: "High-converting product pages, landing pages, and checkout flows.",
          icon: React.createElement(IconDeviceLaptop, { size: 24 })
        },
        {
          id: 2,
          title: "Performance Marketing",
          description: "Meta, Google, TikTok, and influencer ads optimized for ROAS.",
          icon: React.createElement(IconAd2, { size: 24 })
        },
        {
          id: 3,
          title: "Retention & Loyalty",
          description: "Email/SMS automation, loyalty programs, and customer retention flows.",
          icon: React.createElement(IconHeart, { size: 24 })
        }
      ]
    },
    process: {
      title: "Our Proven 360° Growth Process for E-Commerce",
      subtitle: "HOW WE SCALE BRANDS",
      className: "border-t border-border dark:border-gray-700",
      description: "A step-by-step system that turns e-commerce brands into profit-making machines.",
      steps: [
        {
          id: 1,
          title: "Audit & Research",
          description: "Deep dive into your brand, competitors, and target audience."
        },
        {
          id: 2,
          title: "Strategy Blueprint",
          description: "Custom growth roadmap with SEO, ads, CRO, and retention tactics."
        },
        {
          id: 3,
          title: "Creative & Funnel Setup",
          description: "Design high-impact creatives, funnels, and landing pages."
        },
        {
          id: 4,
          title: "Ad & SEO Execution",
          description: "Run high-ROAS campaigns + SEO for long-term traffic growth."
        },
        {
          id: 5,
          title: "Retention & Loyalty",
          description: "Automated flows, loyalty programs, and upsell strategies."
        },
        {
          id: 6,
          title: "Scale & Optimize",
          description: "Data-driven scaling with continuous optimization & growth tracking."
        }
      ]
    },
    testimonials: {
      title: [
        { text: "Brands That ", gradient: false },
        { text: "Scaled with Digi Aerotech", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
      ],
      description: "See how we helped D2C and e-commerce brands achieve explosive growth.",
      testimonials: [
        {
          id: "1",
          message: "Within 3 months, Digi Aerotech turned our 1.5x ROAS into a consistent 5x. We scaled from ₹5L to ₹25L monthly revenue without burning cash.",
          highlight: "scaled from ₹5L to ₹25L monthly revenue",
          stars: 5,
          name: "Ananya Sharma",
          designation: "Founder",
          company: "GlowSkin Naturals"
        },
        {
          id: "2",
          message: "They helped us dominate Google & Meta ads while building loyalty through email flows. Our repeat purchase rate jumped by 40%.",
          highlight: "repeat purchase rate jumped by 40%",
          stars: 5,
          name: "Rohit Mehta",
          designation: "Co-Founder",
          company: "FitFuel Nutrition"
        }
      ]
    },
    cta: {
      title: "Ready to Explode Your E-Commerce Growth?",
      subtitle: "From Clicks to Loyal Customers",
      description: "With Digi Aerotech’s 360° Digital Marketing, you’ll not just grow sales — you’ll build a powerful, lasting e-commerce brand."
    }
  }
};
