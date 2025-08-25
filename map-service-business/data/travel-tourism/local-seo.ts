import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconMapPin, IconBuilding, IconStar, IconCompass, IconPhoneCall,
  IconUsers, IconTarget, IconChartHistogram, IconCalendarEvent, IconTrendingUp,
  IconShieldCheck, IconArrowRight, IconSearch, IconMessageCircle2, IconWorld
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'local-seo',
  business: 'travel-tourism',
  variants: {
    hero: 'variant3',
    whyChooseUs: 'variant2',
    process: 'variant1',
    testimonials: 'variant1'
  },
  data: {
    slug: 'local-seo-travel-tourism',
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
            { text: "Travel & Tourism Businesses", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Travel agencies, tour operators, and local tourism brands often struggle to appear in local searches, costing them potential bookings.",
          painPoints: [
            "Low visibility in Google Maps & local search results",
            "Competitors dominating 'near me' searches",
            "Few or no reviews hurting trustworthiness",
            "Poor optimization for local traveler intent",
            "Missed seasonal & location-based opportunities"
          ],
          solutionPoints: [
            "Boost rankings with optimized Google Business Profile",
            "Dominate 'near me' searches with geo-targeted SEO",
            "Build credibility through 5-star reviews & reputation management",
            "Create local content that matches traveler intent",
            "Seasonal & event-based local SEO campaigns"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Rank Higher in Local Searches"
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
              question: 'How does Local SEO help my travel agency?',
              answer: 'Local SEO boosts your visibility on Google Maps and local searches, helping nearby travelers find and book your services faster.',
              icon: React.createElement(IconMapPin, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Can you get us into Google’s 3-Pack?',
              answer: 'Yes. We optimize your Google Business Profile and listings to increase your chances of appearing in the top 3 local results.',
              icon: React.createElement(IconChartHistogram, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Do reviews impact local rankings?',
              answer: 'Absolutely. Positive reviews boost credibility and improve your chances of ranking higher in local SEO results.',
              icon: React.createElement(IconStar, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Can Local SEO attract international tourists too?',
              answer: 'Yes. Many tourists search for agencies, hotels, and guides locally while traveling. Optimized local SEO ensures they find you.',
              icon: React.createElement(IconCompass, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'How long does it take to see results?',
              answer: 'With proper optimization, you may see local search improvements within 4-8 weeks, with consistent growth over time.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'What if my agency is small and local?',
              answer: 'Local SEO is perfect for small travel businesses—it levels the playing field, making you more discoverable than big OTAs in local searches.',
              icon: React.createElement(IconBuilding, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Want ",
      headlineKeywords: [
        "More Local Bookings?",
        "Higher Google Map Rankings?",
        "Tourists Finding You First?",
        "Dominate 'Near Me' Searches?",
        "360° Local SEO for Travel Agencies?"
      ],
      brandLine: [
        { text: "📍 Attract More Travelers Nearby with Local SEO That Works", gradient: false }
      ],
      subheadline: "We help travel agencies, tour operators, and local tourism brands rank higher in Google Maps and local search results, boosting walk-ins, calls, and bookings.",
      ctaButtons: [
        { icon: React.createElement(IconSearch, { size: 28 }), text: "Get Free Local SEO Audit", link: "/contact" },
        { icon: React.createElement(IconPhoneCall, { size: 28 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "40,000+ Local Travelers",
          description: "Driven via optimized local SEO"
        },
        {
          icon: React.createElement(IconStar, { size: 32 }),
          title: "1,000+ Reviews Boosted",
          description: "Reputation management success"
        },
        {
          icon: React.createElement(IconWorld, { size: 32 }),
          title: "Multi-City Rankings",
          description: "Optimized for 50+ destinations"
        },
        {
          icon: React.createElement(IconTarget, { size: 32 }),
          title: "High Conversion Rate",
          description: "Travelers booking from local searches"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the ", gradient: false },
        { text: "#1 Local SEO Partner for Travel Brands", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconMapPin, { size: 28 }),
          title: "Google Maps Optimization",
          description: "Rank higher on Google Maps & get discovered by nearby travelers."
        },
        {
          icon: React.createElement(IconMessageCircle2, { size: 28 }),
          title: "Review & Reputation Building",
          description: "We build trust with 5-star reviews & response strategies."
        },
        {
          icon: React.createElement(IconSearch, { size: 28 }),
          title: "Geo-Targeted SEO Campaigns",
          description: "Attract travelers searching for tours & agencies 'near me'."
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 28 }),
          title: "Trust & Credibility",
          description: "Your agency becomes the most reliable option locally."
        },
        {
          icon: React.createElement(IconWorld, { size: 28 }),
          title: "Domestic & International Reach",
          description: "Help both local travelers & international tourists find you."
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Sustainable Growth",
          description: "Consistent leads & bookings with long-term SEO results."
        }
      ],
      cta: {
        text: "Rank Higher Locally Today",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Local SEO Process for Travel & Tourism',
      subtitle: 'STEP-BY-STEP MAPS VISIBILITY SYSTEM',
      className: 'border-t border-border dark:border-gray-700',
      description: 'From optimizing your Google Business Profile to review strategies, we ensure your agency is found first in local searches.',
      steps: [
        { id: 1, title: 'Google Business Profile Setup', description: 'Optimize listings with photos, services, & booking links.' },
        { id: 2, title: 'Local Keyword Research', description: 'Target "near me" & city-specific travel search terms.' },
        { id: 3, title: 'On-Page & Local Content SEO', description: 'Blogs & landing pages optimized for local searches.' },
        { id: 4, title: 'Review & Reputation Building', description: 'Gather 5-star reviews and manage responses.' },
        { id: 5, title: 'Citations & Local Backlinks', description: 'Boost local authority with directory & media listings.' },
        { id: 6, title: 'Tracking & Optimization', description: 'Monitor maps rankings and optimize continuously.' }
      ]
    },
    testimonials: {
      title: [
        { text: "Travel Brands That ", gradient: false },
        { text: "Won with Local SEO", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      description: 'See how Digi Aerotech helped travel agencies & local tourism brands boost local visibility, reviews, and bookings.',
      testimonials: [
        {
          id: '1',
          message: 'We went from being invisible to ranking in the top 3 on Google Maps. Walk-ins and calls increased immediately.',
          highlight: 'top 3 on Google Maps',
          stars: 5,
          name: 'Ananya Gupta',
          designation: 'Founder',
          company: 'ExploreCity Tours'
        },
        {
          id: '2',
          message: 'Our local bookings doubled thanks to Digi Aerotech’s local SEO strategy and review management.',
          highlight: 'local bookings doubled',
          stars: 5,
          name: 'Ravi Sharma',
          designation: 'CEO',
          company: 'Heritage Holidays'
        }
      ]
    },
    cta: {
      title: 'Ready to Dominate Local Searches for Your Travel Brand?',
      subtitle: 'BE FOUND FIRST LOCALLY',
      description: 'Book a free consultation with Digi Aerotech and discover how Local SEO can drive walk-ins, calls, and bookings for your travel & tourism business.'
    }
  }
};
