import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { ServiceIcons } from '@/constants/service-icons';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconMapPin, IconShoppingCart, IconUsers, IconTrendingUp,
  IconPhone, IconRocket, IconBuildingStore, IconChartBar,
  IconSearch, IconWorld, IconArrowRight, IconThumbUp
} from '@tabler/icons-react';

const { IconFreeRights } = ServiceIcons;

export const map: ServiceBusinessMap = {
  service: '360-digital-marketing',
  business: 'local-businesses',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant1',
    process: 'variant3',
  },
  data: {
    slug: '360-digital-marketing-local-businesses',
    showSections: {
      hero: true,
      whyChooseUs: true,
      typesOfServices: false,
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
            { text: "The Struggles ", gradient: false },
            { text: "Local Businesses ", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" },
            { text: "Face in Going Digital", gradient: false }
          ],
          subheadline: "Local shops & businesses thrive on visibility — but in the digital era, word-of-mouth alone is no longer enough.",
          painPoints: [
            "Not showing up in Google local search results",
            "Dependence only on walk-in traffic",
            "Competition from bigger chains & e-commerce",
            "Low customer engagement online",
            "Difficulty managing online reviews & reputation"
          ],
          solutionPoints: [
            "Google Business Profile optimization for local rankings",
            "Social media strategies to drive local engagement",
            "Targeted ads reaching customers nearby",
            "Review & reputation management",
            "Loyalty campaigns to increase repeat customers"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Boost My Local Business"
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
              question: 'How does digital marketing help my local shop?',
              answer: 'By making your business appear at the top when nearby customers search, driving both foot traffic and online orders.',
              icon: React.createElement(IconMapPin, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Can you help me rank higher on Google Maps?',
              answer: 'Yes. Our local SEO strategies optimize your Google Business Profile for maximum visibility in Maps & search results.',
              icon: React.createElement(IconSearch, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'What kind of businesses can benefit?',
              answer: 'Restaurants, retail stores, salons, repair shops, gyms, and every business serving a local community.',
              icon: React.createElement(IconBuildingStore, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Do you handle social media marketing?',
              answer: 'Absolutely. We manage your Instagram, Facebook, and WhatsApp presence to engage nearby customers and drive sales.',
              icon: React.createElement(IconUsers, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Can small local businesses afford this?',
              answer: 'Yes. Our packages are designed to give local businesses a high ROI without breaking the budget.',
              icon: React.createElement(IconChartBar, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'How quickly can I see results?',
              answer: 'Local SEO and ads start showing impact within weeks, with compounding growth as reviews and engagement build.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Need ",
      headlineKeywords: [
        "More Local Customers?",
        "360° Digital Marketing for Local Businesses?",
        "Better Google Ranking?",
        "Increased Footfall?",
        "Higher Sales?"
      ],
      brandLine: [
        { text: "📍 Grow Your Local Business with 360° Digital Marketing", gradient: false }
      ],
      subheadline: "We help local businesses get discovered, build reputation, and increase sales through powerful digital strategies.",
      ctaButtons: [
        { icon: React.createElement(IconFreeRights, { size: 28 }), text: "Book Free Local Strategy Call", link: "/contact" },
        { icon: React.createElement(IconPhone, { size: 28 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconMapPin, { size: 32 }),
          title: "90% Local Search Growth",
          description: "Average client boost in visibility"
        },
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "50K+ Customers",
          description: "Driven to local businesses"
        },
        {
          icon: React.createElement(IconShoppingCart, { size: 32 }),
          title: "300% ROI",
          description: "On digital campaigns"
        },
        {
          icon: React.createElement(IconThumbUp, { size: 32 }),
          title: "4.9★ Avg Reviews",
          description: "Reputation management success"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Local Businesses ", gradient: false },
        { text: "Choose Digi Aerotech", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconMapPin, { size: 30 }),
          title: "Local SEO Experts",
          description: "We know how to put your business on top of Google Maps & search."
        },
        {
          icon: React.createElement(IconUsers, { size: 30 }),
          title: "Community Engagement",
          description: "We craft campaigns that connect with your neighborhood customers."
        },
        {
          icon: React.createElement(IconBuildingStore, { size: 30 }),
          title: "Tailored for Small Businesses",
          description: "Affordable packages designed for retail shops, salons, restaurants & more."
        },
        {
          icon: React.createElement(IconChartBar, { size: 30 }),
          title: "ROI-Driven Marketing",
          description: "We focus only on strategies that bring measurable sales growth."
        },
        {
          icon: React.createElement(IconWorld, { size: 30 }),
          title: "Online + Offline Growth",
          description: "From footfall to online orders, we grow your brand everywhere."
        },
        {
          icon: React.createElement(IconRocket, { size: 30 }),
          title: "Fast & Scalable",
          description: "Quick wins + long-term growth strategies to scale your business."
        }
      ],
      cta: {
        text: "Start Growing My Local Business",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Proven Process for Local Businesses',
      subtitle: 'STEP-BY-STEP CUSTOMER ACQUISITION',
      className: 'border-t border-border dark:border-gray-700',
      description: 'A tested framework that turns local searches into paying customers.',
      steps: [
        {
          id: 1,
          title: 'Local Market Research',
          description: 'Understand your neighborhood, competition, and customer base.'
        },
        {
          id: 2,
          title: 'Google Business Optimization',
          description: 'Optimize listings with keywords, reviews, and photos.'
        },
        {
          id: 3,
          title: 'Social Media Marketing',
          description: 'Engaging posts & ads to attract and retain customers.'
        },
        {
          id: 4,
          title: 'Local SEO Campaigns',
          description: 'Rank for “near me” searches and dominate local results.'
        },
        {
          id: 5,
          title: 'Reputation Management',
          description: 'Collect reviews, manage ratings, and improve trust.'
        },
        {
          id: 6,
          title: 'Scaling Sales',
          description: 'Expand from local reach to online orders & wider coverage.'
        }
      ]
    },
    cta: {
      title: 'Ready to Boost Your Local Business?',
      subtitle: 'Your customers are searching online — make sure they find you first.',
      description: 'With Digi Aerotech’s 360° Digital Marketing for Local Businesses, you’ll get discovered, trusted, and chosen over competitors.'
    }
  }
};
