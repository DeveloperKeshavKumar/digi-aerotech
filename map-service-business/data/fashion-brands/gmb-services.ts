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
  IconPhone,
  IconArrowRight,
  IconPackage,
  IconClock,
  IconTag
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'gmb-services',
  business: 'fashion-brands',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant1',
    process: 'variant3',
    testimonials: 'variant2'
  },
  data: {
    slug: 'gmb-services-fashion-brands',
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
            { text: "GMB Challenges for ", gradient: false },
            { text: "Fashion Brands", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Fashion stores often miss out on local customers due to poorly optimized Google Business Profiles.",
          painPoints: [
            "Low visibility in local search results",
            "Incomplete or inconsistent business information",
            "Difficulty attracting footfall to physical stores",
            "Negative or unverified reviews affecting credibility",
            "Limited engagement with local shoppers online"
          ],
          solutionPoints: [
            "Fully optimized Google Business Profiles with correct info and images",
            "Reputation management & verified reviews to build trust",
            "Targeted posts & offers for local audiences",
            "Enhanced local SEO to appear in “near me” searches",
            "Tracking insights to improve store visits & conversions"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Boost Your Local Fashion Visibility"
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
              question: 'How does GMB help my fashion store?',
              answer: 'Optimizing your Google Business Profile increases visibility, attracts local shoppers, and drives in-store visits.',
              icon: React.createElement(IconMapPin, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Can you manage my reviews?',
              answer: 'Yes, we help generate verified reviews, respond professionally, and improve your overall rating.',
              icon: React.createElement(IconStar, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Do you update posts and offers?',
              answer: 'Absolutely. Regular posts, events, and offers keep your profile engaging for local customers.',
              icon: React.createElement(IconTag, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Will GMB improve my local SEO?',
              answer: 'Yes, we optimize listings with keywords, categories, and local signals to rank higher in nearby searches.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'How do you track performance?',
              answer: 'We monitor insights like search queries, direction requests, calls, and clicks to optimize results.',
              icon: React.createElement(IconClock, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'Is GMB suitable for online fashion stores?',
              answer: 'Even online stores with showrooms or pickup points benefit from local visibility and trust signals.',
              icon: React.createElement(IconShoppingBag, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Want ",
      headlineKeywords: [
        "More Local Customers?",
        "Better Store Visibility?",
        "Higher Footfall?",
        "Optimized GMB Profile?",
        "Boost Your Fashion Brand Locally?"
      ],
      brandLine: [
        { text: "🏬 Increase Footfall & Local Reach with GMB Services for Fashion Stores", gradient: false }
      ],
      subheadline: "We help fashion brands appear in local searches, attract nearby customers, and increase in-store conversions.",
      ctaButtons: [
        { icon: React.createElement(IconPhone, { size: 28 }), text: "Book Free GMB Audit", link: "/contact" },
        { icon: React.createElement(IconArrowRight, { size: 28 }), text: "Improve Local Presence", link: "/contact", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "10,000+ Local Shoppers",
          description: "Reached via optimized GMB"
        },
        {
          icon: React.createElement(IconShoppingBag, { size: 32 }),
          title: "200+ Fashion Stores",
          description: "Scaled locally with our GMB services"
        },
        {
          icon: React.createElement(IconStar, { size: 32 }),
          title: "4.9/5 Client Rating",
          description: "Trust & credibility"
        },
        {
          icon: React.createElement(IconRocket, { size: 32 }),
          title: "Local Reach Boost",
          description: "Appearing in top 3 local results"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the ", gradient: false },
        { text: "#1 Local Marketing Partner for Fashion Brands", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconMapPin, { size: 28 }),
          title: "Expert GMB Optimization",
          description: "Complete setup, verification, and local SEO enhancement."
        },
        {
          icon: React.createElement(IconStar, { size: 28 }),
          title: "Reputation & Review Management",
          description: "Builds trust with local shoppers and improves credibility."
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Local SEO Boost",
          description: "Rank higher in “near me” and location-based searches."
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 28 }),
          title: "Consistent Business Info",
          description: "Ensure accurate NAP, hours, and categories across platforms."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Engaging Posts & Offers",
          description: "Attract attention with events, promotions, and updates."
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "Actionable Insights",
          description: "Track calls, clicks, and store visits for performance improvement."
        }
      ],
      cta: {
        text: "Boost Your Local Fashion Visibility Now",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our GMB Optimization Process for Fashion Stores',
      subtitle: 'STEP-BY-STEP LOCAL SUCCESS',
      className: 'border-t border-border dark:border-gray-700',
      description: 'From profile optimization to local engagement, we ensure your fashion brand attracts nearby customers efficiently.',
      steps: [
        {
          id: 1,
          title: 'Audit & Profile Setup',
          description: 'Check current GMB status, verify listings, and complete essential info.'
        },
        {
          id: 2,
          title: 'Keyword & Category Optimization',
          description: 'Select relevant categories and keywords to rank in local searches.'
        },
        {
          id: 3,
          title: 'Visual & Content Enhancement',
          description: 'Add high-quality photos, videos, and posts to engage local users.'
        },
        {
          id: 4,
          title: 'Review Management',
          description: 'Generate, verify, and respond to reviews to build credibility.'
        },
        {
          id: 5,
          title: 'Insights Tracking',
          description: 'Monitor clicks, calls, and direction requests to optimize results.'
        },
        {
          id: 6,
          title: 'Continuous Updates & Scaling',
          description: 'Regularly update profile, add offers, and scale visibility to more locations.'
        }
      ]
    },
    testimonials: {
      title: [
        { text: "Fashion Stores That ", gradient: false },
        { text: "Grew Locally with Us", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      description: 'See how Digi Aerotech helped fashion brands increase local visibility and store visits.',
      testimonials: [
        {
          id: '1',
          message: 'Our local boutique saw a 200% increase in footfall after GMB optimization by Digi Aerotech.',
          highlight: '200% increase in footfall',
          stars: 5,
          name: 'Meera Kapoor',
          designation: 'Owner',
          company: 'Chic Boutique'
        },
        {
          id: '2',
          message: 'They managed reviews, updated posts, and our store ranking improved in local searches!',
          highlight: 'store ranking improved',
          stars: 5,
          name: 'Rohan Singh',
          designation: 'Founder',
          company: 'Urban Threads'
        }
      ]
    },
    cta: {
      title: 'Ready to Boost Your Fashion Store Locally?',
      subtitle: 'Get More Footfall, Visibility, and Engagement',
      description: 'Book a free local marketing session and watch your fashion brand dominate local searches!'
    }
  }
};
