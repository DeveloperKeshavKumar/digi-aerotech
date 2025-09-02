import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconWorld, IconPlane, IconCamera, IconHeart, IconTrendingUp,
  IconCalendarEvent, IconPhone, IconShieldCheck, IconUsers, IconStar,
  IconRocket, IconMap, IconArrowRight
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: '360-digital-marketing',
  business: 'travel-tourism',
  variants: {
    hero: 'variant1',
    whyChooseUs: 'variant2',
    process: 'variant3',
  },
  data: {
    slug: '360-digital-marketing-travel-tourism',
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
            { text: "Challenges Travel & Tourism ", gradient: false },
            { text: "Businesses Face Online", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
          ],
          subheadline: "Tour operators, travel agencies, and tourism brands face fierce competition online. Without strong digital presence, travelers book elsewhere.",
          painPoints: [
            "High competition from OTAs & aggregators",
            "Low organic visibility on Google & social media",
            "Struggling to attract international travelers",
            "Seasonal demand fluctuations",
            "Lack of trust & online reviews"
          ],
          solutionPoints: [
            "High-ranking SEO & Google travel listings",
            "Visually stunning ad campaigns & reels",
            "Global targeting to attract foreign travelers",
            "Seasonal packages with conversion-focused funnels",
            "Trust-building through reviews & social proof"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Boost Your Travel Bookings"
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
              question: 'How can digital marketing help my travel agency?',
              answer: 'We boost your online presence with SEO, ads, and social media, attracting travelers directly instead of losing them to big OTAs.',
              icon: React.createElement(IconWorld, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Can you help us target international tourists?',
              answer: 'Yes. We run multilingual SEO, ads, and campaigns targeting travelers from specific countries and demographics.',
              icon: React.createElement(IconPlane, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Do you create seasonal marketing campaigns?',
              answer: 'Absolutely. We optimize campaigns around peak seasons, festivals, and holiday periods to maximize bookings.',
              icon: React.createElement(IconCalendarEvent, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'How do you build traveler trust for a new agency?',
              answer: 'Through reviews, influencer partnerships, and social proof, we build credibility that convinces travelers to book with you.',
              icon: React.createElement(IconShieldCheck, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'What if my travel business is small and local?',
              answer: 'We design affordable, scalable strategies so even local tour operators can compete with bigger brands.',
              icon: React.createElement(IconMap, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'How soon can I expect more bookings?',
              answer: 'With ads & social media, you’ll see inquiries in weeks. SEO & content build long-term consistent bookings.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Want ",
      headlineKeywords: [
        "More Bookings?",
        "Global Travelers?",
        "Higher Trip Sales?",
        "Seasonal Package Success?",
        "360° Digital Marketing for Travel Brands?"
      ],
      brandLine: [
        { text: "🌍 Scale Your Travel & Tourism Business with 360° Digital Marketing", gradient: false }
      ],
      subheadline: "We help travel agencies, tour operators, and tourism brands attract more travelers, boost bookings, and scale globally.",
      ctaButtons: [
        { icon: React.createElement(IconPlane, { size: 28 }), text: "Book Free Strategy Call", link: "/contact" },
        { icon: React.createElement(IconPhone, { size: 28 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "5000+ Travelers",
          description: "Driven via campaigns"
        },
        {
          icon: React.createElement(IconCamera, { size: 32 }),
          title: "50+ Travel Brands",
          description: "Scaled with our strategies"
        },
        {
          icon: React.createElement(IconHeart, { size: 32 }),
          title: "4.9/5 Trust Rating",
          description: "Traveler satisfaction"
        },
        {
          icon: React.createElement(IconWorld, { size: 32 }),
          title: "Global Reach",
          description: "Campaigns across all continents"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the ", gradient: false },
        { text: "#1 Growth Partner for Travel & Tourism Brands", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconPlane, { size: 28 }),
          title: "Deep Travel Industry Knowledge",
          description: "We understand traveler psychology and booking behavior."
        },
        {
          icon: React.createElement(IconWorld, { size: 28 }),
          title: "Global Audience Reach",
          description: "Multilingual SEO & ads to attract international tourists."
        },
        {
          icon: React.createElement(IconCamera, { size: 28 }),
          title: "Visual Storytelling Mastery",
          description: "We craft reels, videos & ads that make travelers dream & book."
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "ROI-Focused Campaigns",
          description: "We optimize every campaign to maximize bookings & profit."
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 28 }),
          title: "Trust & Credibility Building",
          description: "Influencer marketing, reviews & PR that build traveler trust."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Scalable for Small & Big Brands",
          description: "Whether local agency or global operator — we scale you up."
        }
      ],
      cta: {
        text: "Get More Bookings Today",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Proven Digital Growth Process for Travel & Tourism',
      subtitle: 'STEP-BY-STEP BOOKING SYSTEM',
      className: 'border-t border-border dark:border-gray-700',
      description: 'From awareness to bookings — our process ensures consistent traveler acquisition and trust-building for your brand.',
      steps: [
        {
          id: 1,
          title: 'Travel Market Research',
          description: 'Analyze destinations, competitors, and traveler psychology.'
        },
        {
          id: 2,
          title: 'Branding & Visual Identity',
          description: 'Craft a compelling travel brand story with stunning creatives.'
        },
        {
          id: 3,
          title: 'SEO & Content Marketing',
          description: 'Rank for travel keywords, blogs & packages that travelers search.'
        },
        {
          id: 4,
          title: 'Ad Campaigns & Social Media',
          description: 'High-impact ads & reels that drive instant bookings.'
        },
        {
          id: 5,
          title: 'Review & Trust Building',
          description: 'Leverage testimonials, reviews & influencer collabs.'
        },
        {
          id: 6,
          title: 'Scaling & Global Expansion',
          description: 'Target global travelers with multilingual, multi-country campaigns.'
        }
      ]
    },
    cta: {
      title: 'Ready to Get More Bookings for Your Travel Brand?',
      subtitle: 'TURN TRAVEL DREAMS INTO BOOKINGS',
      description: 'Book a free growth session with Digi Aerotech and discover how 360° digital marketing can skyrocket your travel & tourism business.'
    }
  }
};
