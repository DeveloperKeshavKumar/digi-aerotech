import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconPizza, IconCoffee, IconChartLine, IconTrendingUp, IconWorld,
  IconSearch, IconUsers, IconRocket, IconChartBar, IconDeviceMobile
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'aso-services',
  business: 'restaurants-cafes',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant1',
    process: 'variant3',
  },
  data: {
    slug: 'aso-services-restaurants-cafes',
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
            { text: "Why Food Apps ", gradient: false },
            { text: "Struggle Without ASO", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Your restaurant or café may serve the best dishes in town, but if your app doesn’t appear in App Store & Play Store searches, hungry customers won’t find you.",
          painPoints: [
            "Restaurant apps buried under competitors",
            "Low downloads due to poor visibility",
            "Generic keywords missing local intent",
            "Poor ratings and reviews hurting rankings",
            "Limited footfall & online orders"
          ],
          solutionPoints: [
            "App Store Optimization tailored for F&B industry",
            "High-intent keyword targeting (local + cuisine based)",
            "Improved rankings on Play Store & App Store",
            "Boost downloads & repeat orders organically",
            "More online orders, reservations, and foot traffic"
          ],
          cta: {
            icon: React.createElement(IconDeviceMobile, { size: 20 }),
            text: "Optimize My Restaurant App"
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
              question: 'Why do restaurants need ASO?',
              answer: 'ASO ensures your restaurant app ranks higher in app store searches, helping customers find and order from you instead of competitors.',
              icon: React.createElement(IconSearch, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Can ASO help increase foot traffic?',
              answer: 'Yes, by improving visibility, more people discover your app and visit your restaurant or café through loyalty programs and offers.',
              icon: React.createElement(IconUsers, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Does ASO improve online food delivery orders?',
              answer: 'Absolutely! A higher-ranking app with optimized keywords and reviews means more people download and use your app to order food.',
              icon: React.createElement(IconPizza, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'How fast can restaurants see results from ASO?',
              answer: 'Most restaurants and cafés notice an increase in downloads and visibility within 6–8 weeks of consistent optimization.',
              icon: React.createElement(IconChartLine, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Do you manage app reviews & ratings?',
              answer: 'Yes, we implement review generation strategies and reputation management to boost positive ratings and improve rankings.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Turn Your Food App Into a ",
      headlineKeywords: [
        "Top-Ranked App",
        "Customer Magnet",
        "Revenue Driver",
        "Local Favorite"
      ],
      brandLine: [
        { text: "🍕 ASO Services for Restaurants & Cafés", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      subheadline: "We optimize your restaurant & café apps to rank higher, attract more downloads, and drive consistent online orders & reservations.",
      ctaButtons: [
        { icon: React.createElement(IconPizza, { size: 28 }), text: "Get ASO Plan", link: "/contact" },
        { icon: React.createElement(IconCoffee, { size: 28 }), text: "Free App Audit", link: "/contact", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconChartBar, { size: 32 }),
          title: "200% More Downloads",
          description: "on restaurant apps after ASO"
        },
        {
          icon: React.createElement(IconWorld, { size: 32 }),
          title: "Local Keyword Wins",
          description: "for cuisines & food niches"
        },
        {
          icon: React.createElement(IconRocket, { size: 32 }),
          title: "Boost Orders",
          description: "from app users & foodies"
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "Higher Retention",
          description: "through review optimization"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Us for ", gradient: false },
        { text: "Restaurant & Café ASO", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconPizza, { size: 28 }),
          title: "F&B Industry Focus",
          description: "We specialize in ASO strategies designed for restaurants, cafés, and food delivery apps."
        },
        {
          icon: React.createElement(IconChartLine, { size: 28 }),
          title: "Keyword Targeting",
          description: "We optimize with cuisine-specific and local-intent keywords for maximum reach."
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "More Downloads",
          description: "Increase organic downloads and reduce dependency on ads."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Boost Orders & Reservations",
          description: "Optimized apps lead to more food delivery orders and table bookings."
        },
        {
          icon: React.createElement(IconCoffee, { size: 28 }),
          title: "Reputation Management",
          description: "We drive positive reviews and ratings to improve your brand credibility."
        },
        {
          icon: React.createElement(IconWorld, { size: 28 }),
          title: "Local + Global Reach",
          description: "From local foodies to tourists, we make your app visible everywhere."
        }
      ],
      cta: {
        text: "Optimize My Food App",
        link: "#contact",
        icon: React.createElement(IconDeviceMobile, { size: 20 })
      }
    },
    process: {
      title: 'Our ASO Process for Restaurants & Cafés',
      subtitle: 'FROM APP LISTING TO FOOD ORDERS',
      className: 'border-t border-border dark:border-gray-700',
      description: 'We follow a proven ASO strategy that helps restaurants & cafés dominate app store rankings and drive organic downloads.',
      steps: [
        {
          id: 1,
          title: 'ASO Audit',
          description: 'We review your app store presence, keywords, reviews, and competitors to identify growth opportunities.'
        },
        {
          id: 2,
          title: 'Keyword Optimization',
          description: 'We target cuisine-specific, local, and high-intent food-related keywords to boost app discoverability.'
        },
        {
          id: 3,
          title: 'Creative Optimization',
          description: 'We optimize app titles, descriptions, screenshots, and promo videos to maximize downloads.'
        },
        {
          id: 4,
          title: 'Review & Rating Boost',
          description: 'We implement strategies to generate more positive reviews and maintain higher app ratings.'
        },
        {
          id: 5,
          title: 'Tracking & Scaling',
          description: 'We continuously monitor rankings, downloads, and conversions to refine and scale your ASO strategy.'
        }
      ]
    },
    cta: {
      title: 'Turn Your Restaurant App Into a Top-Ranked Food Destination',
      subtitle: 'ASO THAT DRIVES ORDERS & BOOKINGS',
      description: 'We help restaurants & cafés rank higher, get more downloads, and turn app users into loyal customers.',
    }
  }
};
