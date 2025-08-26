import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconSearch, IconMapPin, IconTrendingUp, IconWorldWww, IconUsers, 
  IconStar, IconBuildingStore, IconChartArrowsVertical, IconRocket, 
  IconBrandGoogle, IconCoffee, IconChefHat,
  IconShoppingCart
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'seo-services',
  business: 'restaurants-cafes',
  variants: {
    hero: 'variant1',
    whyChooseUs: 'variant3',
    process: 'variant2',
    testimonials: 'variant2'
  },
  data: {
    slug: 'seo-services-restaurants-cafes',
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
            { text: "Why Restaurants & Cafés Struggle with ", gradient: false },
            { text: "SEO Rankings", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Without strong SEO, restaurants miss out on foot traffic and online orders. Competitors dominate search results, leaving potential diners unaware of your restaurant or café.",
          painPoints: [
            "Not ranking for 'restaurants near me'",
            "Menus not showing up in Google search",
            "Weak local visibility in maps & directories",
            "Competitors outranking for best cafés in city",
            "Missed opportunities for high-intent keywords"
          ],
          solutionPoints: [
            "Boost rankings for 'near me' and city-specific searches",
            "Menu & schema optimization for Google visibility",
            "Local SEO strategies for maps & directories",
            "Content marketing for food-related keywords",
            "Reputation management to grow online reviews"
          ],
          cta: {
            icon: React.createElement(IconRocket, { size: 20 }),
            text: "Boost My Restaurant SEO"
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
              question: 'How does SEO help restaurants & cafés?',
              answer: 'SEO makes your restaurant visible in searches like “restaurants near me” or “best café in [city],” bringing more walk-ins and online reservations.',
              icon: React.createElement(IconMapPin, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Will my menu appear in Google search?',
              answer: 'Yes! We optimize your menu with structured data so dishes show up directly in search results.',
              icon: React.createElement(IconChefHat, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Do reviews affect SEO?',
              answer: 'Yes, Google considers reviews as ranking signals. We help improve and manage your online reputation.',
              icon: React.createElement(IconStar, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Can SEO increase my online orders?',
              answer: 'Absolutely. Ranking higher for “order food online” and similar queries directly increases online sales.',
              icon: React.createElement(IconShoppingCart, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'How long does restaurant SEO take?',
              answer: 'Local SEO improvements can show results in 2–3 months, with long-term growth continuing over time.',
              icon: React.createElement(IconChartArrowsVertical, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "SEO Services for Restaurants & Cafés",
      headlineKeywords: [
        "Restaurant SEO",
        "Café Local SEO",
        "Food Business Rankings",
        "Near Me Searches"
      ],
      brandLine: [
        { text: "📍 Get Found When Hungry Customers Search for You Online", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      subheadline: "We help restaurants & cafés dominate Google search with local SEO, menu optimization, and review management to attract more diners and online orders.",
      ctaButtons: [
        { icon: React.createElement(IconSearch, { size: 28 }), text: "Rank My Restaurant", link: "/contact" },
        { icon: React.createElement(IconBrandGoogle, { size: 28 }), text: "Free SEO Audit", link: "/contact", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "300% More Traffic",
          description: "boosted restaurant visibility"
        },
        {
          icon: React.createElement(IconMapPin, { size: 32 }),
          title: "Local Rankings",
          description: "appear in Google Maps & search"
        },
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "Customer Reach",
          description: "drive more walk-ins & orders"
        },
        {
          icon: React.createElement(IconWorldWww, { size: 32 }),
          title: "Menu Optimization",
          description: "get dishes found in Google"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Restaurants Choose Our ", gradient: false },
        { text: "SEO Services", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconMapPin, { size: 28 }),
          title: "Dominate Local Search",
          description: "Rank for ‘restaurants near me’ and local café searches."
        },
        {
          icon: React.createElement(IconChefHat, { size: 28 }),
          title: "Menu Optimization",
          description: "Get your dishes visible in Google search results."
        },
        {
          icon: React.createElement(IconBuildingStore, { size: 28 }),
          title: "Google Business Boost",
          description: "Optimize GMB for reviews, photos, and discovery."
        },
        {
          icon: React.createElement(IconStar, { size: 28 }),
          title: "Review Management",
          description: "Grow 5-star reviews that build trust & rankings."
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Long-Term Visibility",
          description: "Sustainable SEO strategies that keep diners coming."
        }
      ],
      cta: {
        text: "Boost My Restaurant SEO",
        link: "#contact",
        icon: React.createElement(IconRocket, { size: 20 })
      }
    },
    process: {
      title: 'Our SEO Process for Restaurants & Cafés',
      subtitle: 'FROM KEYWORDS TO CUSTOMERS',
      className: 'border-t border-border dark:border-gray-700',
      description: 'Our SEO services help restaurants and cafés dominate local search, attract more diners, and grow online orders.',
      steps: [
        {
          id: 1,
          title: 'SEO Audit & Research',
          description: 'We analyze your current visibility, competitor rankings, and discover high-intent food-related keywords.'
        },
        {
          id: 2,
          title: 'On-Page Optimization',
          description: 'We optimize your menu pages, titles, meta descriptions, and images for maximum visibility.'
        },
        {
          id: 3,
          title: 'Local SEO Setup',
          description: 'We optimize your Google Business Profile, maps listing, and directories for local searches.'
        },
        {
          id: 4,
          title: 'Content Marketing',
          description: 'We create blogs, food guides, and event promotions to drive organic visibility.'
        },
        {
          id: 5,
          title: 'Reputation Management',
          description: 'We help you gather positive reviews and manage your online ratings to boost trust.'
        },
        {
          id: 6,
          title: 'Tracking & Growth',
          description: 'We monitor results and continuously improve rankings for consistent diner growth.'
        }
      ]
    },
    testimonials: {
      title: [
        { text: "Restaurants Thriving with ", gradient: false },
        { text: "Our SEO Services", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      description: 'Our SEO strategies help restaurants & cafés dominate local search, attract more customers, and grow online orders consistently.',
      testimonials: [
        {
          id: '1',
          message: 'We now appear for “best café near me” searches and our walk-ins have doubled.',
          highlight: 'Local SEO Success',
          stars: 5,
          name: 'Arjun Khanna',
          designation: 'Owner',
          company: 'Urban Grind Café'
        },
        {
          id: '2',
          message: 'Our restaurant menu now shows directly in Google search—online orders have grown massively.',
          highlight: 'Menu Optimization Win',
          stars: 5,
          name: 'Simran Bhatia',
          designation: 'Founder',
          company: 'Flavors & Spices'
        }
      ]
    },
    cta: {
      title: 'Boost Your Restaurant SEO & Attract More Diners',
      subtitle: 'FROM SEARCH TO BOOKINGS',
      description: 'We help restaurants & cafés rank higher, attract local diners, and grow online visibility with proven SEO strategies.',
    }
  }
};
