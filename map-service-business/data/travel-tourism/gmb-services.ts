import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconWorld, IconMap, IconTrendingUp, IconShieldCheck,
  IconUsers, IconPhone, IconStar, IconRocket,
  IconCalendarEvent, IconArrowRight, IconBuildingStore, IconSearch
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'gmb-services',
  business: 'travel-tourism',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant1',
    process: 'variant3',
  },
  data: {
    slug: 'gmb-services-travel-tourism',
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
            { text: "GMB Challenges Travel & Tourism ", gradient: false },
            { text: "Businesses Face", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Travel agencies, hotels, and tour operators often struggle to stand out locally on Google Maps and Search without strong GMB optimization.",
          painPoints: [
            "Low visibility in Google Maps & Local 3-Pack",
            "Incomplete or outdated Google Business Profiles",
            "Few reviews lowering traveler trust",
            "Incorrect business info confusing customers",
            "Missed bookings due to weak local presence"
          ],
          solutionPoints: [
            "Optimized GMB listings with accurate business details",
            "Local keyword targeting for better map rankings",
            "Review generation & reputation management",
            "High-quality photos & posts to attract travelers",
            "Regular updates to maximize local visibility"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Optimize My GMB Today"
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
              question: 'How does GMB help travel agencies & tour operators?',
              answer: 'Google My Business boosts your visibility on Google Maps and local search, helping travelers find and book with you instantly.',
              icon: React.createElement(IconBuildingStore, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Can you help my travel business rank in Google’s Local 3-Pack?',
              answer: 'Yes. We optimize your GMB profile with targeted keywords, reviews, and posts so you rank higher in the local 3-pack results.',
              icon: React.createElement(IconSearch, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Do you manage reviews and ratings for travel businesses?',
              answer: 'Absolutely. We implement review strategies and reputation management to build trust and increase bookings.',
              icon: React.createElement(IconStar, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Can GMB optimization bring international tourists too?',
              answer: 'Yes. Many global travelers search “near me” when they arrive, and optimized GMB helps you capture them instantly.',
              icon: React.createElement(IconWorld, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Do you also optimize photos and posts on GMB?',
              answer: 'Yes. High-quality images, videos, and regular posts improve engagement and drive more bookings for your travel brand.',
              icon: React.createElement(IconCalendarEvent, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'How soon can I see results from GMB optimization?',
              answer: 'You can expect increased local visibility and inquiries within 4–6 weeks of optimization.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Want ",
      headlineKeywords: [
        "More Local Bookings?",
        "Rank in Google Maps?",
        "Trusted Travel Brand?",
        "Higher Walk-in Customers?",
        "GMB Services for Travel Agencies?"
      ],
      brandLine: [
        { text: "📍 Boost Your Travel & Tourism Business with GMB Optimization", gradient: false }
      ],
      subheadline: "We help travel brands rank higher on Google Maps & local search, attract more travelers, and increase bookings.",
      ctaButtons: [
        { icon: React.createElement(IconMap, { size: 28 }), text: "Get Free GMB Audit", link: "/contact" },
        { icon: React.createElement(IconPhone, { size: 28 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "25,000+ Local Leads",
          description: "Generated via GMB optimization"
        },
        {
          icon: React.createElement(IconWorld, { size: 32 }),
          title: "Global Travelers Captured",
          description: "Optimized for ‘near me’ searches"
        },
        {
          icon: React.createElement(IconStar, { size: 32 }),
          title: "4.9★ Avg Rating",
          description: "Through review & trust building"
        },
        {
          icon: React.createElement(IconRocket, { size: 32 }),
          title: "Fast Results",
          description: "Local visibility boosted in weeks"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the ", gradient: false },
        { text: "#1 GMB Partner for Travel & Tourism", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconBuildingStore, { size: 28 }),
          title: "Complete GMB Management",
          description: "We handle your GMB from setup to growth."
        },
        {
          icon: React.createElement(IconSearch, { size: 28 }),
          title: "Local SEO Boost",
          description: "Optimized keywords to rank on Google Maps."
        },
        {
          icon: React.createElement(IconStar, { size: 28 }),
          title: "Review & Reputation Building",
          description: "Positive reviews that increase traveler trust."
        },
        {
          icon: React.createElement(IconMap, { size: 28 }),
          title: "Capture ‘Near Me’ Searches",
          description: "Rank for travelers searching on the go."
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 28 }),
          title: "Accurate Business Details",
          description: "We ensure your info is always correct & updated."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Quick Local Growth",
          description: "Get more walk-ins, calls, and bookings fast."
        }
      ],
      cta: {
        text: "Start Optimizing My GMB",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our GMB Optimization Process for Travel & Tourism',
      subtitle: 'STEP-BY-STEP LOCAL VISIBILITY GROWTH',
      className: 'border-t border-border dark:border-gray-700',
      description: 'We optimize your GMB profile to appear in Google’s Local 3-Pack and Maps results, attracting more travelers near you.',
      steps: [
        { id: 1, title: 'Profile Audit & Setup', description: 'Fix incomplete or inaccurate GMB details.' },
        { id: 2, title: 'Keyword & Category Optimization', description: 'Target keywords travelers use to book tours & hotels.' },
        { id: 3, title: 'Review & Rating Strategy', description: 'Boost traveler trust with reputation management.' },
        { id: 4, title: 'Photo & Post Optimization', description: 'Engaging photos & posts for higher click-throughs.' },
        { id: 5, title: 'Local SEO Integration', description: 'Strengthen visibility with backlinks & citations.' },
        { id: 6, title: 'Monitoring & Reporting', description: 'Track insights, calls, and bookings from GMB.' }
      ]
    },
    cta: {
      title: 'Ready to Boost Your Local Bookings with GMB?',
      subtitle: 'TURN SEARCHES INTO BOOKINGS',
      description: 'Get a free GMB audit with Digi Aerotech and start ranking higher on Google Maps and Local 3-Pack.'
    }
  }
};
