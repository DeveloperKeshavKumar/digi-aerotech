import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconDeviceMobile, IconWorld, IconCalendarEvent, IconRoute, IconUserCheck,
  IconPhoneCall, IconRocket, IconShieldCheck, IconMap, IconUsers,
  IconChartArrows, IconArrowRight, IconHeart, IconTrendingUp, IconStar
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'mobile-apps-development',
  business: 'travel-tourism',
  variants: {
    hero: 'variant3',
    whyChooseUs: 'variant2',
    process: 'variant1',
  },
  data: {
    slug: 'mobile-apps-development-travel-tourism',
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
            { text: "Mobile App Challenges for ", gradient: false },
            { text: "Travel & Tourism Brands", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Travel agencies, tour operators, and destination brands struggle to retain customers and simplify bookings without robust mobile apps.",
          painPoints: [
            "Manual booking & inquiry handling",
            "No mobile-friendly traveler experience",
            "Difficulty managing itineraries & packages",
            "Low customer retention without loyalty features",
            "Missing global reach with localized apps"
          ],
          solutionPoints: [
            "Seamless booking apps with payment gateways",
            "User-friendly mobile design for travelers",
            "Smart itinerary planners & package management",
            "Loyalty programs & personalized push notifications",
            "Multilingual, scalable apps for global users"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Build Your Travel App Today"
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
              question: 'Why do travel businesses need a mobile app?',
              answer: 'A mobile app streamlines bookings, itineraries, and customer engagement, boosting traveler trust and loyalty.',
              icon: React.createElement(IconDeviceMobile, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Can you build apps with integrated booking systems?',
              answer: 'Yes. We develop apps with booking, payments, and itinerary management tailored to your travel business.',
              icon: React.createElement(IconCalendarEvent, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Do you create apps for international travelers?',
              answer: 'Absolutely. We design multilingual, multi-currency apps for global travelers and tourism operators.',
              icon: React.createElement(IconWorld, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'How do you increase traveler retention?',
              answer: 'Through loyalty programs, push notifications, and AI-based recommendations inside the app.',
              icon: React.createElement(IconHeart, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Do you provide security for payment systems?',
              answer: 'Yes. We integrate secure payment gateways with encryption, fraud protection, and compliance checks.',
              icon: React.createElement(IconShieldCheck, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'How long does it take to launch a travel app?',
              answer: 'Depending on features, most travel apps are developed and deployed within 8–12 weeks.',
              icon: React.createElement(IconRocket, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Want ",
      headlineKeywords: [
        "Seamless Bookings?",
        "Loyal Travelers?",
        "Smart Itinerary Apps?",
        "Higher Retention?",
        "360° Mobile Apps for Travel Brands?"
      ],
      brandLine: [
        { text: "📱 Build Next-Gen Travel Apps that Convert Travelers into Loyal Customers", gradient: false }
      ],
      subheadline: "We design & develop powerful mobile apps for travel agencies, tour operators, and tourism brands to increase bookings, engagement, and loyalty.",
      ctaButtons: [
        { icon: React.createElement(IconRocket, { size: 28 }), text: "Get Free App Consultation", link: "/contact" },
        { icon: React.createElement(IconPhoneCall, { size: 28 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "100,000+ Travelers",
          description: "Engaged via custom travel apps"
        },
        {
          icon: React.createElement(IconRoute, { size: 32 }),
          title: "500+ Travel Packages",
          description: "Digitally managed & booked"
        },
        {
          icon: React.createElement(IconChartArrows, { size: 32 }),
          title: "5X Customer Retention",
          description: "Through loyalty-driven apps"
        },
        {
          icon: React.createElement(IconStar, { size: 32 }),
          title: "4.9/5 User Rating",
          description: "Across client mobile apps"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the ", gradient: false },
        { text: "#1 Mobile App Partner for Travel Brands", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconDeviceMobile, { size: 28 }),
          title: "Custom Travel Apps",
          description: "We build tailor-made apps for agencies, operators & tourism boards."
        },
        {
          icon: React.createElement(IconMap, { size: 28 }),
          title: "Smart Itinerary Planners",
          description: "Interactive maps, schedules, and trip planners built-in."
        },
        {
          icon: React.createElement(IconUserCheck, { size: 28 }),
          title: "Seamless Booking Systems",
          description: "Integrated booking engines with secure payments."
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Boost Retention & Loyalty",
          description: "Push notifications & loyalty rewards keep travelers engaged."
        },
        {
          icon: React.createElement(IconWorld, { size: 28 }),
          title: "Global Ready",
          description: "Multilingual apps with multi-currency support for global users."
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 28 }),
          title: "High Security Standards",
          description: "Data encryption, fraud detection & compliance built-in."
        }
      ],
      cta: {
        text: "Launch Your Travel App Today",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Mobile App Development Process for Travel & Tourism',
      subtitle: 'STEP-BY-STEP APP CREATION',
      className: 'border-t border-border dark:border-gray-700',
      description: 'From ideation to global launch, our app development process ensures smooth traveler experiences and long-term business scalability.',
      steps: [
        { id: 1, title: 'Discovery & Research', description: 'Understand business needs & traveler expectations.' },
        { id: 2, title: 'UI/UX Design', description: 'Craft intuitive, travel-focused mobile interfaces.' },
        { id: 3, title: 'App Development', description: 'Develop apps with booking, itineraries & payments.' },
        { id: 4, title: 'Integration & Security', description: 'Integrate APIs, payments, and secure traveler data.' },
        { id: 5, title: 'Testing & QA', description: 'Ensure seamless performance & bug-free experience.' },
        { id: 6, title: 'Launch & Scaling', description: 'Deploy apps and optimize for long-term traveler engagement.' }
      ]
    },
    cta: {
      title: 'Ready to Build Your Travel Mobile App?',
      subtitle: 'TURN IDEAS INTO TRAVEL EXPERIENCES',
      description: 'Book a free app consultation with Digi Aerotech and discover how custom travel apps can increase bookings, retention, and global reach.'
    }
  }
};
