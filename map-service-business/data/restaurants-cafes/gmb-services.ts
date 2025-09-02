import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconMapPin, IconCoffee, IconPizza, IconChartBar, IconStar,
  IconTrendingUp, IconUsers, IconPhoneCall, IconCalendarEvent, IconWorld
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'gmb-services',
  business: 'restaurants-cafes',
  variants: {
    hero: 'variant3',
    whyChooseUs: 'variant2',
    process: 'variant1',
  },
  data: {
    slug: 'gmb-services-restaurants-cafes',
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
            { text: "Why Restaurants & Cafés ", gradient: false },
            { text: "Struggle Without GMB", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Hungry customers often search for restaurants, cafés, and food outlets nearby. Without an optimized GMB listing, you’re invisible to local diners.",
          painPoints: [
            "Not showing up in 'restaurants near me' searches",
            "Outdated menu & photos on Google",
            "Negative reviews without response",
            "Low calls, reservations & walk-ins",
            "Competitors outranking in local maps"
          ],
          solutionPoints: [
            "Google My Business optimization for restaurants & cafés",
            "Fresh menus, photos, and offers updated regularly",
            "Review management & reputation building",
            "Boost local search visibility & rankings",
            "Drive more calls, orders, and foot traffic"
          ],
          cta: {
            icon: React.createElement(IconMapPin, { size: 20 }),
            text: "Optimize My GMB Profile"
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
              question: 'Why is GMB important for restaurants & cafés?',
              answer: 'Over 60% of food & beverage searches happen on Google Maps. GMB ensures you appear when locals search for nearby dining.',
              icon: React.createElement(IconWorld, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Can GMB optimization increase footfall?',
              answer: 'Yes, optimized GMB listings bring more walk-in customers by improving local rankings and showcasing your food better.',
              icon: React.createElement(IconUsers, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Do reviews affect my restaurant’s GMB ranking?',
              answer: 'Absolutely! Positive reviews boost trust and ranking. We also manage negative feedback to protect your reputation.',
              icon: React.createElement(IconStar, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Can you update menus and offers on GMB?',
              answer: 'Yes, we regularly update menus, specials, and event promotions on your GMB to attract food lovers.',
              icon: React.createElement(IconCalendarEvent, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'How soon can restaurants see results?',
              answer: 'Most restaurants see an increase in calls, directions, and visits within 4–6 weeks of GMB optimization.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Turn Google Searches Into ",
      headlineKeywords: [
        "Dine-in Customers",
        "Online Orders",
        "Table Bookings",
        "Regular Foodies"
      ],
      brandLine: [
        { text: "📍 GMB Services for Restaurants & Cafés", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      subheadline: "We optimize your restaurant’s Google My Business profile to appear in top local searches, attract more diners, and boost reservations.",
      ctaButtons: [
        { icon: React.createElement(IconPhoneCall, { size: 28 }), text: "Get More Calls", link: "/contact" },
        { icon: React.createElement(IconMapPin, { size: 28 }), text: "Free GMB Audit", link: "/contact", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconChartBar, { size: 32 }),
          title: "2X More Footfall",
          description: "for restaurants after GMB optimization"
        },
        {
          icon: React.createElement(IconPizza, { size: 32 }),
          title: "Menu Click Boost",
          description: "customers check menus before visiting"
        },
        {
          icon: React.createElement(IconCoffee, { size: 32 }),
          title: "Higher Calls",
          description: "from diners searching nearby"
        },
        {
          icon: React.createElement(IconStar, { size: 32 }),
          title: "Better Reputation",
          description: "via review management & responses"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Us for ", gradient: false },
        { text: "Restaurant & Café GMB Services", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconMapPin, { size: 28 }),
          title: "Local SEO Experts",
          description: "We specialize in optimizing GMB listings for maximum local visibility."
        },
        {
          icon: React.createElement(IconCoffee, { size: 28 }),
          title: "Restaurant-Centric Strategy",
          description: "Our approach is tailored to food businesses, menus, and dining offers."
        },
        {
          icon: React.createElement(IconStar, { size: 28 }),
          title: "Review & Reputation Boost",
          description: "We improve your ratings and manage responses to build trust."
        },
        {
          icon: React.createElement(IconCalendarEvent, { size: 28 }),
          title: "Promotions & Events",
          description: "Highlight seasonal offers, events, and new dishes to attract customers."
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Increased Reservations",
          description: "Optimized profiles encourage bookings directly through Google."
        },
        {
          icon: React.createElement(IconPhoneCall, { size: 28 }),
          title: "More Calls & Directions",
          description: "We help you get discovered by foodies searching in your area."
        }
      ],
      cta: {
        text: "Optimize My Restaurant’s GMB",
        link: "#contact",
        icon: React.createElement(IconMapPin, { size: 20 })
      }
    },
    process: {
      title: 'Our GMB Optimization Process for Restaurants & Cafés',
      subtitle: 'FROM SEARCH TO SEATING',
      className: 'border-t border-border dark:border-gray-700',
      description: 'We follow a step-by-step GMB optimization process to help restaurants and cafés dominate local searches and attract more hungry customers.',
      steps: [
        {
          id: 1,
          title: 'GMB Profile Audit',
          description: 'We analyze your existing Google My Business profile, visibility, reviews, and competitor listings.'
        },
        {
          id: 2,
          title: 'Profile Optimization',
          description: 'We optimize categories, descriptions, business hours, menus, and photos for maximum local search reach.'
        },
        {
          id: 3,
          title: 'Review Management',
          description: 'We boost positive reviews and manage responses to strengthen your online reputation.'
        },
        {
          id: 4,
          title: 'Content & Offers Update',
          description: 'We add regular updates about new dishes, events, and promotions to keep your listing engaging.'
        },
        {
          id: 5,
          title: 'Performance Tracking',
          description: 'We track calls, direction requests, and bookings to refine your GMB strategy for more growth.'
        }
      ]
    },
    cta: {
      title: 'Turn Your Restaurant’s GMB Into a Customer Magnet',
      subtitle: 'RANK. ATTRACT. SERVE.',
      description: 'With our GMB services, your restaurant or café can dominate local searches, attract more diners, and grow bookings.',
    }
  }
};
