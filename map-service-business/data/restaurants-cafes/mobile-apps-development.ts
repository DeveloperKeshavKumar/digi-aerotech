import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconDeviceMobile, IconCoffee, IconCreditCard,
  IconBell, IconUsers, IconShoppingCart, IconHeartHandshake, IconTrendingUp,
  IconChartArrows
} from '@tabler/icons-react';
import { Utensils } from 'lucide-react';

export const map: ServiceBusinessMap = {
  service: 'mobile-apps-development',
  business: 'restaurants-cafes',
  variants: {
    hero: 'variant3',
    whyChooseUs: 'variant2',
    process: 'variant1',
  },
  data: {
    slug: 'mobile-apps-development-restaurants-cafes',
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
            { text: "Need Mobile Apps", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Relying only on walk-ins or aggregator platforms limits growth. A custom restaurant app puts your brand directly in your customers’ pockets.",
          painPoints: [
            "High commissions on Swiggy/Zomato eating into profits",
            "No direct channel to send offers & updates",
            "Difficulty building loyal customer base",
            "No online table reservation system",
            "Dependency on third-party apps for deliveries"
          ],
          solutionPoints: [
            "Custom-branded mobile app for your restaurant",
            "Online ordering with in-app payments",
            "Loyalty & reward programs to retain customers",
            "Push notifications for offers & events",
            "Direct control over customer relationships"
          ],
          cta: {
            icon: React.createElement(IconDeviceMobile, { size: 20 }),
            text: "Build My Restaurant App"
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
              question: 'Why do restaurants need a mobile app?',
              answer: 'A mobile app gives you direct access to customers, boosts repeat orders, enables loyalty programs, and reduces dependency on third-party delivery apps.',
              icon: React.createElement(IconDeviceMobile, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Can customers order food directly from the app?',
              answer: 'Yes! We integrate full online ordering, menu browsing, customization, and in-app payments for a seamless experience.',
              icon: React.createElement(IconShoppingCart, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Do you support table reservations?',
              answer: 'Absolutely. Customers can book tables in advance with real-time availability updates to reduce waiting time.',
              icon: React.createElement(Utensils, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Can I send offers through the app?',
              answer: 'Yes, push notifications allow you to instantly share discounts, happy hour deals, or new menu launches with your customers.',
              icon: React.createElement(IconBell, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Will my restaurant app support loyalty programs?',
              answer: 'We build loyalty and reward features that encourage repeat visits and long-term customer retention.',
              icon: React.createElement(IconHeartHandshake, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Bring Your Restaurant to Customers’ Pockets ",
      headlineKeywords: [
        "Restaurant Mobile App Development",
        "Food Ordering Apps for Cafés",
        "Custom Apps for Restaurants",
        "Loyalty & Reservation Apps"
      ],
      brandLine: [
        { text: "📱 Restaurant & Café Mobile Apps", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      subheadline: "From online ordering to loyalty programs, we build mobile apps that help restaurants increase sales, reduce commission costs, and build stronger customer connections.",
      ctaButtons: [
        { icon: React.createElement(IconDeviceMobile, { size: 28 }), text: "Get My Restaurant App", link: "/contact" },
        { icon: React.createElement(IconChartArrows, { size: 28 }), text: "Free App Consultation", link: "/contact", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "40% Higher Sales",
          description: "with direct app-based orders"
        },
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "Customer Loyalty",
          description: "reward & retention programs built-in"
        },
        {
          icon: React.createElement(IconCreditCard, { size: 32 }),
          title: "Seamless Payments",
          description: "multiple options for quick checkout"
        },
        {
          icon: React.createElement(IconBell, { size: 32 }),
          title: "Direct Engagement",
          description: "push offers & promotions instantly"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Us for ", gradient: false },
        { text: "Restaurant App Development", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconShoppingCart, { size: 28 }),
          title: "Online Ordering & Payments",
          description: "Built-in ordering, cart, and checkout for faster sales."
        },
        {
          icon: React.createElement(Utensils, { size: 28 }),
          title: "Table Reservations",
          description: "Real-time reservations with reduced waiting times."
        },
        {
          icon: React.createElement(IconHeartHandshake, { size: 28 }),
          title: "Loyalty Programs",
          description: "Points, discounts, and rewards to keep customers hooked."
        },
        {
          icon: React.createElement(IconBell, { size: 28 }),
          title: "Push Notifications",
          description: "Instantly notify customers about offers, events & deals."
        },
        {
          icon: React.createElement(IconChartArrows, { size: 28 }),
          title: "Scalable & Secure",
          description: "Future-ready apps optimized for speed and safety."
        }
      ],
      cta: {
        text: "Start My Restaurant App Project",
        link: "#contact",
        icon: React.createElement(IconDeviceMobile, { size: 20 })
      }
    },
    process: {
      title: 'Our Mobile App Development Process for Restaurants & Cafés',
      subtitle: 'FROM IDEA TO ORDERS',
      className: 'border-t border-border dark:border-gray-700',
      description: 'We craft restaurant apps that enhance ordering, reservations, loyalty, and engagement — built for growth and customer satisfaction.',
      steps: [
        {
          id: 1,
          title: 'Requirement Analysis',
          description: 'We understand your restaurant’s needs — whether you want online ordering, loyalty programs, or reservations — and plan accordingly.'
        },
        {
          id: 2,
          title: 'UI/UX Design',
          description: 'We design a user-friendly interface with beautiful food menus, easy navigation, and seamless ordering experience.'
        },
        {
          id: 3,
          title: 'App Development',
          description: 'Our developers build a robust mobile app with secure payments, fast performance, and complete backend integration.'
        },
        {
          id: 4,
          title: 'Testing & Deployment',
          description: 'We rigorously test the app for performance, security, and user experience before launching on iOS & Android.'
        },
        {
          id: 5,
          title: 'Ongoing Support',
          description: 'We provide updates, maintenance, and new feature integrations to ensure long-term success of your restaurant app.'
        }
      ]
    },
    cta: {
      title: 'Launch Your Restaurant App Today',
      subtitle: 'ONLINE ORDERS, LOYALTY & BOOKINGS IN ONE APP',
      description: 'From ordering to reservations, we build apps that make restaurants future-ready and more profitable.',
    }
  }
};
