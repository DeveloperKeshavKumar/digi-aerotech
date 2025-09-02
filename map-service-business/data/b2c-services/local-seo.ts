import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconMapPin, IconUsers, IconChartBar, IconSearch, IconTarget, IconRocket, 
  IconBuildingStore, IconTrendingUp, IconWorld, IconArrowRight, IconStar
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'local-seo',
  business: 'b2c-services',
  variants: {
    hero: 'variant1',
    whyChooseUs: 'variant2',
    process: 'variant3',
  },
  data: {
    slug: 'local-seo-b2c',
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
            { text: "Why Most B2C Businesses Fail ", gradient: false },
            { text: "in Local Search", gradient: true, gradientClass: "from-green-500 via-blue-500 to-purple-500" }
          ],
          subheadline: "If customers can’t find you when they search ‘near me’, they’ll find your competitors instead.",
          painPoints: [
            "Not appearing in Google’s Local 3-Pack (Maps results)",
            "Inconsistent NAP (Name, Address, Phone) details",
            "No reviews or poor reputation management",
            "Competitors dominating local searches",
            "Weak on-page optimization for local keywords",
            "Losing walk-in customers to better-optimized businesses"
          ],
          solutionPoints: [
            "Google Business Profile setup & optimization",
            "Consistent citations & local directory listings",
            "Local keyword optimization for your city & niche",
            "Review generation & reputation management",
            "Mobile-first local landing pages",
            "Map ranking strategies to increase foot traffic"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Rank Me Locally"
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
              question: 'What is Local SEO for B2C businesses?',
              answer: 'It’s optimizing your online presence so your salon, gym, restaurant, or shop appears in local Google search results and Maps.',
              icon: React.createElement(IconSearch, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Which businesses benefit the most?',
              answer: 'Any B2C business that depends on local customers – salons, gyms, spas, restaurants, cafés, clinics, and retail stores.',
              icon: React.createElement(IconBuildingStore, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'How fast can I see results?',
              answer: 'Local SEO usually shows results within 2-3 months, with continuous improvements as we optimize and build authority.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Do reviews matter for Local SEO?',
              answer: 'Yes! Positive reviews help boost your visibility and attract more local customers. We help manage and generate them.',
              icon: React.createElement(IconStar, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Is Local SEO different from normal SEO?',
              answer: 'Yes. Local SEO focuses on ranking in Maps and localized searches, while normal SEO focuses on broader keyword rankings.',
              icon: React.createElement(IconWorld, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Get Found in Your City. Get More Customers.",
      headlineKeywords: [
        "Local SEO for B2C Businesses",
        "Rank Higher on Google Maps",
        "Attract More Walk-In Customers",
        "Dominate Local Search Results",
        "Turn Searches into Sales"
      ],
      brandLine: [
        { text: "📍 Be the #1 Choice When Customers Search 'Near Me'", gradient: false }
      ],
      subheadline: "At Digi Aerotech, we specialize in Local SEO for B2C businesses. From salons and gyms to restaurants and retail stores, we help you dominate Google’s local results and bring more customers through your doors.",
      ctaButtons: [
        { icon: React.createElement(IconRocket, { size: 28 }), text: "Boost My Local SEO", link: "/contact" },
        { icon: React.createElement(IconMapPin, { size: 28 }), text: "Free Local Audit", link: "/audit", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconTarget, { size: 32 }),
          title: "Top 3 Rankings",
          description: "Get into Google’s Local 3-Pack results"
        },
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "More Customers",
          description: "Turn local searches into walk-in clients"
        },
        {
          icon: React.createElement(IconChartBar, { size: 32 }),
          title: "Higher Visibility",
          description: "Show up where your competitors dominate"
        },
        {
          icon: React.createElement(IconBuildingStore, { size: 32 }),
          title: "Local Reputation",
          description: "Build authority with reviews & consistency"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why B2C Brands Choose ", gradient: false },
        { text: "Digi Aerotech for Local SEO", gradient: true, gradientClass: "from-green-500 via-blue-500 to-purple-500" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconMapPin, { size: 28 }),
          title: "Google Maps Expertise",
          description: "We specialize in getting B2C businesses ranked in the Google Local 3-Pack."
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "Industry-Focused Strategies",
          description: "We design campaigns specifically for salons, gyms, clinics, restaurants, and retail."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Faster Results",
          description: "Our proven framework delivers visibility within weeks."
        },
        {
          icon: React.createElement(IconSearch, { size: 28 }),
          title: "Local Keyword Optimization",
          description: "We optimize for city-based and neighborhood keywords customers use."
        },
        {
          icon: React.createElement(IconStar, { size: 28 }),
          title: "Reputation Management",
          description: "We help generate 5-star reviews and manage customer feedback."
        },
        {
          icon: React.createElement(IconChartBar, { size: 28 }),
          title: "Transparent Reporting",
          description: "Track your rankings, calls, and walk-ins directly from our reports."
        }
      ],
      cta: {
        text: "Boost My Local Rankings",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Local SEO Process',
      subtitle: 'TURN SEARCHES INTO WALK-INS',
      description: 'We create a step-by-step Local SEO strategy that ensures your B2C business dominates your neighborhood and city.',
      steps: [
        { id: 1, title: 'Local Audit', description: 'Analyze your business presence and competitors in local search.' },
        { id: 2, title: 'Google Business Profile Optimization', description: 'Setup & optimize your GMB listing for maximum visibility.' },
        { id: 3, title: 'Local Keyword Strategy', description: 'Target city & niche-specific search terms customers use daily.' },
        { id: 4, title: 'Citations & Listings', description: 'Ensure NAP consistency across directories & maps.' },
        { id: 5, title: 'Review Management', description: 'Generate positive reviews & manage negative ones.' },
        { id: 6, title: 'Tracking & Reporting', description: 'Monitor local rankings, calls, and customer engagement.' }
      ]
    },
    cta: {
      title: 'Ready to Dominate Local Search?',
      subtitle: 'LOCAL VISIBILITY → MORE CUSTOMERS',
      description: 'Be the first choice when customers search “near me.” With Digi Aerotech’s Local SEO services, your business will attract consistent walk-ins and bookings.',
    }
  }
};
