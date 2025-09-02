import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconDevices, IconRocket, IconUsers, IconShoppingCart,
  IconChartBar, IconHeart, IconCode, IconArrowRight, IconSparkles,
  IconDeviceMobile
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'mobile-apps-development',
  business: 'b2c-services',
  variants: {
    hero: 'variant1',
    whyChooseUs: 'variant3',
    process: 'variant2',
  },
  data: {
    slug: 'mobile-apps-b2c',
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
            { text: "Why B2C Businesses Struggle ", gradient: false },
            { text: "Without Mobile Apps", gradient: true, gradientClass: "from-indigo-500 via-purple-500 to-pink-500" }
          ],
          subheadline: "Your customers live on their phones. Without an app, you miss opportunities to engage, retain, and upsell.",
          painPoints: [
            "Losing repeat customers due to no loyalty program",
            "High competition with no brand differentiation",
            "Relying only on social media for engagement",
            "No direct channel for promotions & offers",
            "Missed sales because booking/buying isn’t seamless",
            "Poor customer retention due to lack of personalization"
          ],
          solutionPoints: [
            "Custom mobile apps tailored to your industry",
            "Built-in loyalty & rewards features",
            "Push notifications to drive instant engagement",
            "Seamless booking, ordering, and payments",
            "E-commerce integration for easy sales",
            "User-friendly design with smooth navigation"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Build My App Today"
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
              question: 'Why do B2C businesses need mobile apps?',
              answer: 'Apps help salons, gyms, restaurants, and retailers engage customers directly, boost repeat purchases, and build long-term loyalty.',
              icon: React.createElement(IconDevices, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Can you integrate booking and payments?',
              answer: 'Yes, we integrate appointment booking, reservations, e-commerce, and secure payment gateways to make customer journeys seamless.',
              icon: React.createElement(IconShoppingCart, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Do you provide both iOS and Android apps?',
              answer: 'We build cross-platform apps that work flawlessly on both iOS and Android devices, saving cost and time.',
              icon: React.createElement(IconDevices, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'What makes Digi Aerotech apps different?',
              answer: 'We focus on high-performing, user-friendly apps designed to convert. From loyalty programs to push notifications, we make your app a growth engine.',
              icon: React.createElement(IconSparkles, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Do you provide maintenance and updates?',
              answer: 'Yes, we offer end-to-end support including bug fixes, upgrades, feature enhancements, and ongoing maintenance.',
              icon: React.createElement(IconCode, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Engage Customers. Drive Loyalty. Boost Sales.",
      headlineKeywords: [
        "Mobile App Development for B2C Businesses",
        "Custom Apps for Salons, Gyms & Retail",
        "Customer-Friendly Apps That Drive Sales",
        "Loyalty & Engagement via Mobile",
        "Seamless Booking & Shopping Apps"
      ],
      brandLine: [
        { text: "📱 Stay in your customer’s pocket 24/7 with Digi Aerotech apps", gradient: false }
      ],
      subheadline: "We build high-performing mobile apps for B2C businesses like salons, gyms, restaurants, and retailers. From loyalty programs to bookings & e-commerce, our apps are designed to convert users into repeat customers.",
      ctaButtons: [
        { icon: React.createElement(IconRocket, { size: 28 }), text: "Start My App Project", link: "/contact" },
        { icon: React.createElement(IconUsers, { size: 28 }), text: "Get Free App Strategy Call", link: "/audit", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconHeart, { size: 32 }),
          title: "Higher Loyalty",
          description: "Engage & retain customers with rewards"
        },
        {
          icon: React.createElement(IconShoppingCart, { size: 32 }),
          title: "More Sales",
          description: "Frictionless booking & shopping experience"
        },
        {
          icon: React.createElement(IconChartBar, { size: 32 }),
          title: "Data Insights",
          description: "Track user behavior to improve offers"
        },
        {
          icon: React.createElement(IconDevices, { size: 32 }),
          title: "Cross-Platform Apps",
          description: "Built for both Android & iOS"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why B2C Businesses Choose ", gradient: false },
        { text: "Digi Aerotech for Mobile Apps", gradient: true, gradientClass: "from-indigo-500 via-purple-500 to-pink-500" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconDeviceMobile, { size: 28 }),
          title: "Industry-Specific Apps",
          description: "Custom apps designed for your niche — salons, gyms, cafés, retail, and more."
        },
        {
          icon: React.createElement(IconHeart, { size: 28 }),
          title: "Customer Retention",
          description: "Built-in loyalty & rewards to keep customers coming back."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Seamless Experience",
          description: "Easy booking, ordering, and checkout for higher sales."
        },
        {
          icon: React.createElement(IconChartBar, { size: 28 }),
          title: "Growth-Oriented",
          description: "We align app features with your revenue goals."
        },
        {
          icon: React.createElement(IconCode, { size: 28 }),
          title: "Scalable & Secure",
          description: "Apps built to scale as your business grows with top security."
        },
        {
          icon: React.createElement(IconSparkles, { size: 28 }),
          title: "End-to-End Support",
          description: "From development to updates, we handle it all."
        }
      ],
      cta: {
        text: "Let’s Build My App",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Mobile App Development Process',
      subtitle: 'FROM IDEA TO LAUNCH TO GROWTH',
      description: 'We follow a streamlined process to ensure your app is not only functional but also delivers measurable results for your B2C business.',
      steps: [
        { id: 1, title: 'Discovery & Strategy', description: 'Understand your business model, audience, and goals.' },
        { id: 2, title: 'UI/UX Design', description: 'Design intuitive, user-friendly interfaces for smooth navigation.' },
        { id: 3, title: 'App Development', description: 'Develop secure, scalable apps for iOS & Android.' },
        { id: 4, title: 'Integration & Testing', description: 'Integrate bookings, payments, and loyalty while ensuring bug-free performance.' },
        { id: 5, title: 'Launch & Optimization', description: 'Deploy apps to stores with ASO & early user acquisition strategies.' },
        { id: 6, title: 'Maintenance & Upgrades', description: 'Continuous support, new features, and performance monitoring.' }
      ]
    },
    cta: {
      title: 'Ready to Build Your Own Mobile App?',
      subtitle: 'LOYALTY → ENGAGEMENT → SALES',
      description: 'Digi Aerotech helps B2C businesses like yours build apps that don’t just exist, but grow your business every day. Let’s bring your app idea to life.',
    }
  }
};
