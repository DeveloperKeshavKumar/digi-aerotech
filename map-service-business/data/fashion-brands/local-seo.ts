import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconMapPin,
  IconUsers,
  IconStar,
  IconTrendingUp,
  IconShieldCheck,
  IconRocket,
  IconShoppingBag,
  IconSearch,
  IconGlobe,
  IconTag,
  IconArrowRight,
  IconPhone,
  IconChartLine
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'local-seo',
  business: 'fashion-brands',
  variants: {
    hero: 'variant1',
    whyChooseUs: 'variant3',
    process: 'variant2',
  },
  data: {
    slug: 'local-seo-fashion-brands',
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
            { text: "Local SEO Challenges for ", gradient: false },
            { text: "Fashion Brands", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Boost your local visibility and attract nearby customers to your fashion store or boutique.",
          painPoints: [
            "Low local search visibility on Google Maps & Search",
            "Difficulty ranking for city or neighborhood-specific keywords",
            "Missing out on local foot traffic and sales",
            "Negative reviews affecting local reputation",
            "Inconsistent business listings across platforms"
          ],
          solutionPoints: [
            "Optimize Google Business Profile for maximum exposure",
            "Target neighborhood & city-specific keywords",
            "Local citations & directory submissions",
            "Review management and reputation building",
            "Consistent NAP (Name, Address, Phone) across platforms"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Boost Your Local Visibility Today"
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
              question: 'Why is local SEO important for fashion boutiques?',
              answer: 'Local SEO ensures your store appears for people searching nearby, driving foot traffic and sales.',
              icon: React.createElement(IconMapPin, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Can you optimize my Google Business Profile?',
              answer: 'Yes. We fully optimize your profile with images, services, hours, and posts to attract local customers.',
              icon: React.createElement(IconGlobe, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'How do you handle reviews?',
              answer: 'We implement review generation strategies and manage responses to maintain a positive reputation.',
              icon: React.createElement(IconStar, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Do you target neighborhood-specific keywords?',
              answer: 'Absolutely. We focus on geo-specific keywords to capture nearby shoppers actively searching for fashion products.',
              icon: React.createElement(IconTag, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Will my boutique appear on Google Maps?',
              answer: 'Yes. With optimized local SEO, your store ranks higher on Google Maps and local searches.',
              icon: React.createElement(IconSearch, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'Do you provide reporting on local SEO performance?',
              answer: 'Yes. You get detailed insights on rankings, traffic, map visibility, and local leads generated.',
              icon: React.createElement(IconChartLine, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Want ",
      headlineKeywords: [
        "More Local Customers?",
        "Top Rank in Your City?",
        "Increase Foot Traffic?",
        "Get Found Locally Fast?",
        "Boost Your Fashion Boutique’s Local Sales?"
      ],
      brandLine: [
        { text: "📍 Attract Nearby Customers with Expert Local SEO for Fashion Brands", gradient: false }
      ],
      subheadline: "We help fashion boutiques and stores rank locally, attract foot traffic, and convert nearby shoppers into loyal customers.",
      ctaButtons: [
        { icon: React.createElement(IconPhone, { size: 28 }), text: "Book Free Local SEO Strategy", link: "/contact" },
        { icon: React.createElement(IconArrowRight, { size: 28 }), text: "Get Local Visibility", link: "/contact", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "10,000+ Local Customers",
          description: "Attracted via local SEO"
        },
        {
          icon: React.createElement(IconShoppingBag, { size: 32 }),
          title: "500+ Fashion Stores Optimized",
          description: "Across multiple cities"
        },
        {
          icon: React.createElement(IconStar, { size: 32 }),
          title: "4.9/5 Client Rating",
          description: "Satisfied local store owners"
        },
        {
          icon: React.createElement(IconRocket, { size: 32 }),
          title: "30%+ Increase in Local Foot Traffic",
          description: "Stores ranking higher locally"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the ", gradient: false },
        { text: "#1 Local SEO Partner for Fashion Brands", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Optimized Google Business Profile",
          description: "Maximize visibility on Google Search & Maps."
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 28 }),
          title: "Reputation & Review Management",
          description: "Enhance credibility with customer reviews."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Targeted Local Keywords",
          description: "Geo-specific SEO for better local reach."
        },
        {
          icon: React.createElement(IconShoppingBag, { size: 28 }),
          title: "Local Citations & Directory Listings",
          description: "Consistency across platforms ensures trust."
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "Foot Traffic & Sales Growth",
          description: "Drive customers directly to your store."
        },
        {
          icon: React.createElement(IconStar, { size: 28 }),
          title: "Transparent Reporting",
          description: "Track rankings, leads, and local performance."
        }
      ],
      cta: {
        text: "Boost Your Local Visibility Today",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Proven Local SEO Process for Fashion Brands',
      subtitle: 'STEP-BY-STEP LOCAL RANKING',
      className: 'border-t border-border dark:border-gray-700',
      description: 'From research to optimization, our local SEO process ensures your boutique gets noticed by nearby customers ready to buy.',
      steps: [
        {
          id: 1,
          title: 'Local Market & Keyword Research',
          description: 'Identify geo-specific keywords and competitors in your city or neighborhood.'
        },
        {
          id: 2,
          title: 'Google Business Profile Optimization',
          description: 'Create and optimize profile with photos, services, and accurate business info.'
        },
        {
          id: 3,
          title: 'On-Page Local SEO',
          description: 'Optimize website content for city and neighborhood-based searches.'
        },
        {
          id: 4,
          title: 'Citations & Directory Listings',
          description: 'Ensure consistent NAP info across all local directories and platforms.'
        },
        {
          id: 5,
          title: 'Review Management',
          description: 'Encourage positive reviews and respond to maintain credibility.'
        },
        {
          id: 6,
          title: 'Tracking & Continuous Optimization',
          description: 'Monitor rankings, traffic, and adjust strategies to maximize local visibility and foot traffic.'
        }
      ]
    },
    cta: {
      title: 'Ready to Get Your Fashion Boutique Found Locally?',
      subtitle: 'Rank Higher, Attract Nearby Customers, Boost Sales',
      description: 'Book a free strategy session and let Digi Aerotech optimize your local SEO to drive foot traffic and sales.'
    }
  }
};
