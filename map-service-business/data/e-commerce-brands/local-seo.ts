import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import { 
  IconMapPin, IconTrendingUp, IconUsers, IconStar, IconRocket, IconGlobe, IconArrowRight, 
  IconPhone
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'local-seo',
  business: 'ecomm-brands',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant1',
    process: 'variant3',
  },
  data: {
    slug: 'local-seo-ecomm-brands',
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
            { text: "Local Visibility Challenges", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Without strong local SEO, your e-commerce brand misses nearby customers and local search opportunities.",
          painPoints: [
            "Low visibility in Google Maps & local searches",
            "Difficulty attracting nearby buyers",
            "Unoptimized Google Business Profile",
            "Lack of local citations and reviews",
            "Poor mobile search performance"
          ],
          solutionPoints: [
            "Optimized Google Business Profile for local search",
            "Local keyword research & on-page SEO",
            "Build local citations & directory listings",
            "Review management to boost trust",
            "Mobile-friendly pages for local customers"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Boost Your Local Sales Today"
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
              question: 'Why is local SEO important for my online store?',
              answer: 'It helps you appear in nearby searches, attract local customers, and increase footfall for store pickups or delivery.',
              icon: React.createElement(IconMapPin, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Can you optimize my Google Business Profile?',
              answer: 'Yes, we fully optimize your profile with correct NAP details, categories, and images to maximize local visibility.',
              icon: React.createElement(IconGlobe, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'How do you handle reviews?',
              answer: 'We implement review generation strategies, respond to customer feedback, and highlight positive reviews to build trust.',
              icon: React.createElement(IconStar, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Do you optimize for mobile local search?',
              answer: 'Absolutely. We ensure pages are mobile-friendly and load fast to capture local mobile customers.',
              icon: React.createElement(IconUsers, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'How do you track local SEO performance?',
              answer: 'We track local rankings, map placements, website visits, and conversions to measure performance.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'How soon will I see results?',
              answer: 'Local SEO improvements typically reflect within 4-8 weeks, with ongoing optimization improving traffic steadily.',
              icon: React.createElement(IconRocket, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Want ",
      headlineKeywords: [
        "More Local Customers?",
        "Top Map Rankings?",
        "Higher Nearby Conversions?",
        "Optimized Local Presence?",
        "360° Local SEO for E-commerce?"
      ],
      brandLine: [
        { text: "📍 Make Your E-commerce Brand Visible to Local Buyers", gradient: false }
      ],
      subheadline: "We help e-commerce brands dominate local search, attract nearby customers, and increase local conversions.",
      ctaButtons: [
        { icon: React.createElement(IconMapPin, { size: 28 }), text: "Book Free Local SEO Audit", link: "/contact" },
        { icon: React.createElement(IconPhone, { size: 28 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "50+ Local Leads Daily",
          description: "Driven through local SEO campaigns"
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "100+ Local Rankings",
          description: "For top e-commerce keywords in your area"
        },
        {
          icon: React.createElement(IconRocket, { size: 32 }),
          title: "5x Conversion Potential",
          description: "Through optimized local search strategies"
        },
        {
          icon: React.createElement(IconStar, { size: 32 }),
          title: "High-Quality Local Traffic",
          description: "Targeting nearby customers ready to buy"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the ", gradient: false },
        { text: "#1 Local SEO Partner for E-commerce Brands", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconMapPin, { size: 28 }),
          title: "Local Keyword Expertise",
          description: "Rank your products for relevant local searches."
        },
        {
          icon: React.createElement(IconGlobe, { size: 28 }),
          title: "Google Business Optimization",
          description: "Maximize visibility in Maps and local search."
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "Review & Reputation Management",
          description: "Boost trust with positive local reviews."
        },
        {
          icon: React.createElement(IconStar, { size: 28 }),
          title: "Mobile-Friendly Local Presence",
          description: "Fast and optimized pages for local mobile users."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Citation & Directory Listings",
          description: "Boost your brand presence across local platforms."
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Performance Tracking & Optimization",
          description: "Monitor rankings, traffic, and conversions for growth."
        }
      ],
      cta: {
        text: "Start Dominating Local Search Today",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Local SEO Process for E-commerce Brands',
      subtitle: 'STEP-BY-STEP LOCAL DOMINATION',
      className: 'border-t border-border dark:border-gray-700',
      description: 'We follow a structured approach to enhance your local presence, attract nearby buyers, and increase local conversions.',
      steps: [
        { id: 1, title: 'Local Market Analysis', description: 'Research nearby competitors and search trends to target high-intent local keywords.' },
        { id: 2, title: 'Google Business Profile Optimization', description: 'Ensure your profile is fully optimized with accurate info, images, and categories.' },
        { id: 3, title: 'Local Keyword & On-Page SEO', description: 'Optimize your website for location-based searches and product pages.' },
        { id: 4, title: 'Citations & Directory Listings', description: 'List your brand in local directories to increase visibility and trust.' },
        { id: 5, title: 'Review & Reputation Management', description: 'Collect, manage, and respond to customer reviews to boost credibility.' },
        { id: 6, title: 'Tracking & Reporting', description: 'Measure rankings, traffic, and local conversions, and continually optimize for better results.' }
      ]
    },
    cta: {
      title: 'Ready to Boost Local Traffic & Conversions?',
      subtitle: 'Dominate Local Search and Get More Nearby Customers',
      description: 'Book a free local SEO consultation with Digi Aerotech and start attracting high-quality local buyers.'
    }
  }
};
