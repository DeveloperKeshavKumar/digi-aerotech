import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import { 
  IconDeviceMobile, IconShoppingCart, IconUsers, IconRocket, IconStack, IconStar, IconArrowRight, IconSettings
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'mobile-apps-development',
  business: 'ecomm-brands',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant1',
    process: 'variant3',
  },
  data: {
    slug: 'mobile-apps-development-ecomm-brands',
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
            { text: "E-commerce Brands Face ", gradient: false },
            { text: "Mobile App Challenges", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Without a high-performing mobile app, your customers may abandon carts, experience slow browsing, or move to competitors.",
          painPoints: [
            "Low app downloads and engagement",
            "High cart abandonment on mobile",
            "Poor app performance & slow load times",
            "Limited push notification & retention strategies",
            "Difficulty integrating payment gateways and analytics"
          ],
          solutionPoints: [
            "Custom, high-performing mobile apps for iOS & Android",
            "Seamless UX/UI for easy shopping and checkout",
            "Push notifications & in-app promotions to boost retention",
            "Optimized speed, performance, and security",
            "Integrated analytics & payment solutions to drive sales"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Get a High-Performing Mobile App"
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
              question: 'Why does my e-commerce brand need a mobile app?',
              answer: 'Mobile apps increase engagement, reduce cart abandonment, and offer a seamless shopping experience for your customers.',
              icon: React.createElement(IconDeviceMobile, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Do you develop apps for both iOS and Android?',
              answer: 'Yes, we deliver fully native or cross-platform apps optimized for all devices.',
              icon: React.createElement(IconShoppingCart, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Can you integrate payment gateways in the app?',
              answer: 'Absolutely. We integrate secure and popular payment gateways for smooth checkout experiences.',
              icon: React.createElement(IconSettings, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Do you provide analytics and tracking within the app?',
              answer: 'Yes, we implement analytics to track user behavior, sales, and retention to optimize performance.',
              icon: React.createElement(IconStack, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'How do you boost app retention?',
              answer: 'Through push notifications, in-app promotions, and loyalty features to keep customers engaged.',
              icon: React.createElement(IconRocket, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'How long does it take to develop an app?',
              answer: 'Typically, 6–12 weeks depending on features, design complexity, and platform requirements.',
              icon: React.createElement(IconUsers, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Want ",
      headlineKeywords: [
        "A Mobile App that Converts?",
        "Higher Customer Retention?",
        "Better Mobile Sales?",
        "Seamless Shopping Experience?",
        "360° Mobile App Solutions for E-commerce?"
      ],
      brandLine: [
        { text: "📱 Transform Your E-commerce Store with Powerful Mobile Apps", gradient: false }
      ],
      subheadline: "We design and develop high-performing mobile apps that drive sales, boost retention, and enhance customer loyalty.",
      ctaButtons: [
        { icon: React.createElement(IconDeviceMobile, { size: 28 }), text: "Book Free App Consultation", link: "/contact" },
        { icon: React.createElement(IconShoppingCart, { size: 28 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "50,000+ Active Users",
          description: "Using our mobile apps daily"
        },
        {
          icon: React.createElement(IconShoppingCart, { size: 32 }),
          title: "500+ Products Sold",
          description: "Via mobile app channels"
        },
        {
          icon: React.createElement(IconRocket, { size: 32 }),
          title: "4.9/5 App Rating",
          description: "User satisfaction and retention"
        },
        {
          icon: React.createElement(IconStar, { size: 32 }),
          title: "Seamless Performance",
          description: "Optimized for speed, security, and UX"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the ", gradient: false },
        { text: "#1 Mobile App Partner for E-commerce Brands", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        { icon: React.createElement(IconDeviceMobile, { size: 28 }), title: "Cross-Platform Expertise", description: "Native & hybrid apps for iOS and Android." },
        { icon: React.createElement(IconRocket, { size: 28 }), title: "High Conversion Design", description: "UI/UX designed to maximize sales and retention." },
        { icon: React.createElement(IconShoppingCart, { size: 28 }), title: "Payment Integration", description: "Secure gateways for smooth checkout." },
        { icon: React.createElement(IconUsers, { size: 28 }), title: "User Engagement & Retention", description: "Push notifications & loyalty features." },
        { icon: React.createElement(IconStack, { size: 28 }), title: "Analytics & Insights", description: "Track app performance and user behavior." },
        { icon: React.createElement(IconStar, { size: 28 }), title: "Optimized Performance", description: "Fast, responsive, and secure apps." }
      ],
      cta: {
        text: "Build Your Mobile App Today",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Mobile App Development Process for E-commerce',
      subtitle: 'STEP-BY-STEP APP CREATION',
      className: 'border-t border-border dark:border-gray-700',
      description: 'From concept to launch, we create mobile apps optimized for conversions, retention, and user experience.',
      steps: [
        { id: 1, title: 'Requirement Analysis', description: 'Understand your brand, products, and app goals for a clear roadmap.' },
        { id: 2, title: 'UI/UX Design', description: 'Design visually appealing interfaces that provide smooth navigation.' },
        { id: 3, title: 'App Development', description: 'Build high-performance apps with scalable architecture.' },
        { id: 4, title: 'Integration & Testing', description: 'Integrate payment gateways, analytics, and perform thorough testing.' },
        { id: 5, title: 'Launch & Deployment', description: 'Deploy apps to Google Play Store and Apple App Store efficiently.' },
        { id: 6, title: 'Maintenance & Updates', description: 'Continuous updates, optimization, and feature enhancement to retain users.' }
      ]
    },
    cta: {
      title: 'Ready to Launch Your E-commerce Mobile App?',
      subtitle: 'Turn Your Store into a Mobile Shopping Destination',
      description: 'Book a free consultation with Digi Aerotech and create a mobile app that converts visitors into loyal customers.'
    }
  }
};
