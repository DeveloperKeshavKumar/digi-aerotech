import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import { 
  IconBrandMeta, IconBrandInstagram, IconShoppingCart, IconUsers, IconTrendingUp, IconStar, IconRocket, IconArrowRight 
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'meta-ads',
  business: 'ecomm-brands',
  variants: {
    hero: 'variant1',
    whyChooseUs: 'variant3',
    process: 'variant2',
    testimonials: 'variant1'
  },
  data: {
    slug: 'meta-ads-ecomm-brands',
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
            { text: "E-commerce Brands Face ", gradient: false },
            { text: "Challenges with Meta Ads", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Without optimized Meta Ads, your products may not reach the right audience, wasting ad spend and missing sales opportunities.",
          painPoints: [
            "Low ad ROI due to poor targeting",
            "Difficulty scaling campaigns profitably",
            "Ignoring remarketing & dynamic ads",
            "Poor ad creative engagement",
            "Unoptimized campaign structure & bidding"
          ],
          solutionPoints: [
            "Precise audience targeting on Facebook & Instagram",
            "High-converting ad creatives & formats",
            "Remarketing campaigns to recover lost visitors",
            "Dynamic product ads to boost sales",
            "Continuous optimization for maximum ROI"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Maximize Your Meta Ads ROI"
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
              question: 'Why should I invest in Meta Ads for my e-commerce store?',
              answer: 'Meta Ads allow precise targeting, high engagement, and measurable ROI to attract ready-to-buy customers.',
              icon: React.createElement(IconBrandMeta, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Do you manage both Facebook and Instagram campaigns?',
              answer: 'Yes, we manage campaigns across all Meta platforms with optimal budget allocation.',
              icon: React.createElement(IconBrandInstagram, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'How do you improve ad ROI?',
              answer: 'We A/B test creatives, optimize audiences, and adjust bidding strategies to maximize return.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Do you create ad creatives for my products?',
              answer: 'Yes, we design compelling images, videos, and carousel ads to drive higher engagement and conversions.',
              icon: React.createElement(IconShoppingCart, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Can you help with remarketing campaigns?',
              answer: 'Absolutely. We create dynamic and personalized remarketing campaigns to recover abandoned carts and increase sales.',
              icon: React.createElement(IconRocket, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'How soon can I expect results?',
              answer: 'Well-optimized Meta campaigns start showing measurable results within days, with ongoing scaling for higher conversions.',
              icon: React.createElement(IconUsers, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Want ",
      headlineKeywords: [
        "Higher ROAS?",
        "More E-commerce Sales?",
        "Better Engagement?",
        "Targeted Meta Ads?",
        "360° Meta Advertising for Your Store?"
      ],
      brandLine: [
        { text: "📈 Scale Your E-commerce Sales with High-Impact Meta Ads", gradient: false }
      ],
      subheadline: "We help e-commerce brands run highly targeted and converting Meta Ads campaigns to maximize sales and ROI.",
      ctaButtons: [
        { icon: React.createElement(IconBrandMeta, { size: 28 }), text: "Book Free Meta Ads Strategy Call", link: "/contact" },
        { icon: React.createElement(IconBrandInstagram, { size: 28 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconShoppingCart, { size: 32 }),
          title: "10,000+ Products Sold",
          description: "Through Meta Ads campaigns"
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "5x ROI",
          description: "On well-optimized ad campaigns"
        },
        {
          icon: React.createElement(IconRocket, { size: 32 }),
          title: "50+ Campaigns Managed",
          description: "Across multiple e-commerce verticals"
        },
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "High-Quality Targeted Traffic",
          description: "Engaged users ready to buy"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the ", gradient: false },
        { text: "#1 Meta Ads Partner for E-commerce Brands", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconBrandMeta, { size: 28 }),
          title: "Precise Audience Targeting",
          description: "Reach the right customers at the right time."
        },
        {
          icon: React.createElement(IconBrandInstagram, { size: 28 }),
          title: "High-Converting Ad Creatives",
          description: "Engaging visuals that drive clicks & purchases."
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "ROI-Focused Campaigns",
          description: "Optimizing for maximum return on ad spend."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Remarketing & Dynamic Ads",
          description: "Recover lost visitors and abandoned carts."
        },
        {
          icon: React.createElement(IconShoppingCart, { size: 28 }),
          title: "Budget Optimization",
          description: "Smart allocation to ensure cost-effective campaigns."
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "Performance Tracking",
          description: "Monitor KPIs and continuously improve campaigns."
        }
      ],
      cta: {
        text: "Boost Your Meta Ads Today",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Meta Ads Process for E-commerce Brands',
      subtitle: 'STEP-BY-STEP META SUCCESS',
      className: 'border-t border-border dark:border-gray-700',
      description: 'We implement a structured approach to create high-converting Meta Ads campaigns that drive sales and ROI.',
      steps: [
        { id: 1, title: 'Audience Research & Segmentation', description: 'Identify your target buyers and segment audiences for precise ad delivery.' },
        { id: 2, title: 'Ad Creative Design', description: 'Craft compelling visuals, videos, and carousels that engage and convert.' },
        { id: 3, title: 'Campaign Setup & Structure', description: 'Organize campaigns for optimal performance and budget utilization.' },
        { id: 4, title: 'A/B Testing & Optimization', description: 'Test creatives, copy, and audiences to maximize ROI.' },
        { id: 5, title: 'Remarketing Strategies', description: 'Recover abandoned carts and re-engage interested customers.' },
        { id: 6, title: 'Reporting & Scaling', description: 'Track performance metrics, scale winning campaigns, and continually refine for better results.' }
      ]
    },
    testimonials: {
      title: [
        { text: "E-commerce Brands Who ", gradient: false },
        { text: "Scaled Sales with Meta Ads", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      description: 'See how Digi Aerotech helped e-commerce brands run high-converting Meta Ads campaigns and generate massive sales.',
      testimonials: [
        { id: '1', message: 'Our Facebook & Instagram ads are now driving consistent sales. ROI has improved drastically.', highlight: 'consistent sales', stars: 5, name: 'Riya Kapoor', designation: 'Founder', company: 'TrendyCart' },
        { id: '2', message: 'Meta Ads campaigns created by Digi Aerotech brought us more conversions than we expected.', highlight: 'more conversions', stars: 5, name: 'Amit Singh', designation: 'CEO', company: 'ShopSmart' }
      ]
    },
    cta: {
      title: 'Ready to Maximize Your Meta Ads ROI?',
      subtitle: 'Turn Social Engagement into E-commerce Sales',
      description: 'Book a free Meta Ads strategy session with Digi Aerotech and start generating high-converting campaigns.'
    }
  }
};
