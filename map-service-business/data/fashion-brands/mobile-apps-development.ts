import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconShoppingBag,
  IconUsers,
  IconTrendingUp,
  IconShieldCheck,
  IconRocket,
  IconGlobe,
  IconArrowRight,
  IconPhone,
  IconStar,
  IconDeviceMobile,
  IconChartPie
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'mobile-apps-development',
  business: 'fashion-brands',
  variants: {
    hero: 'variant1',
    whyChooseUs: 'variant3',
    process: 'variant2',
    testimonials: 'variant1'
  },
  data: {
    slug: 'mobile-apps-development-fashion-brands',
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
            { text: "Fashion Brands", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "A fashion app must engage users, showcase products, and drive sales seamlessly.",
          painPoints: [
            "Difficulty designing an intuitive shopping experience",
            "Low app downloads & engagement",
            "Integrating secure payment and checkout",
            "Keeping the app updated with latest collections",
            "Tracking user behavior and optimizing conversions"
          ],
          solutionPoints: [
            "Custom mobile apps with stunning UI/UX tailored for fashion shoppers",
            "Seamless product catalog, search, and checkout integration",
            "Push notifications & promotions to boost engagement",
            "Analytics integration to track performance and optimize user journey",
            "Regular updates with new collections & offers for higher retention"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Build Your Fashion App Today"
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
              question: 'Why should fashion brands have a mobile app?',
              answer: 'A mobile app allows direct engagement with customers, boosts loyalty, and increases sales.',
              icon: React.createElement(IconDeviceMobile, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Do you design apps for both iOS and Android?',
              answer: 'Yes. We develop fully responsive, native and cross-platform apps for iOS and Android.',
              icon: React.createElement(IconGlobe, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Can I integrate my e-commerce store into the app?',
              answer: 'Absolutely. We connect your app to Shopify, WooCommerce, Magento, or custom stores seamlessly.',
              icon: React.createElement(IconShoppingBag, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Will the app help increase user engagement?',
              answer: 'Yes. Push notifications, in-app promotions, and personalized offers keep users engaged.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Do you provide app analytics?',
              answer: 'Yes. We integrate analytics to track downloads, retention, user behavior, and conversions.',
              icon: React.createElement(IconChartPie, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'How long does it take to launch a fashion app?',
              answer: 'Typically 8-12 weeks depending on features, design, and integrations.',
              icon: React.createElement(IconRocket, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Want ",
      headlineKeywords: [
        "Your Own Fashion App?",
        "Increase Fashion Sales via Mobile?",
        "Engage Customers 24/7?",
        "Boost Brand Loyalty?",
        "Showcase Collections Seamlessly?"
      ],
      brandLine: [
        { text: "📱 Elevate Your Fashion Brand with a Custom Mobile App", gradient: false }
      ],
      subheadline: "We design mobile apps for fashion brands that drive sales, engage users, and showcase your latest collections.",
      ctaButtons: [
        { icon: React.createElement(IconPhone, { size: 28 }), text: "Book Free App Consultation", link: "/contact" },
        { icon: React.createElement(IconArrowRight, { size: 28 }), text: "Get Your App Now", link: "/contact", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "50,000+ Engaged Users",
          description: "Using apps developed by us"
        },
        {
          icon: React.createElement(IconShoppingBag, { size: 32 }),
          title: "200+ Fashion Brands",
          description: "Scaled with custom apps"
        },
        {
          icon: React.createElement(IconStar, { size: 32 }),
          title: "4.9/5 Satisfaction",
          description: "Brands love our apps"
        },
        {
          icon: React.createElement(IconRocket, { size: 32 }),
          title: "30%+ Sales Increase",
          description: "Brands achieving higher mobile conversions"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the ", gradient: false },
        { text: "#1 Mobile App Partner for Fashion Brands", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconDeviceMobile, { size: 28 }),
          title: "Custom UX/UI Design",
          description: "Apps crafted for fashion-savvy users."
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 28 }),
          title: "Secure Payment & Checkout",
          description: "Safe and seamless shopping experience."
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "User Engagement Features",
          description: "Push notifications, offers, and promotions."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Cross-Platform Apps",
          description: "iOS, Android, and responsive web apps."
        },
        {
          icon: React.createElement(IconChartPie, { size: 28 }),
          title: "Analytics & Insights",
          description: "Track user behavior and optimize performance."
        },
        {
          icon: React.createElement(IconStar, { size: 28 }),
          title: "Trusted by Fashion Brands",
          description: "Successfully delivered 200+ apps."
        }
      ],
      cta: {
        text: "Get Your Fashion App Now",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Fashion App Development Process',
      subtitle: 'STEP-BY-STEP MOBILE SOLUTION',
      className: 'border-t border-border dark:border-gray-700',
      description: 'From concept to launch, we design fashion apps that engage users, boost sales, and enhance brand loyalty.',
      steps: [
        {
          id: 1,
          title: 'Concept & Planning',
          description: 'Define app goals, target users, and required features.'
        },
        {
          id: 2,
          title: 'UI/UX Design',
          description: 'Create intuitive, stylish, and engaging interfaces.'
        },
        {
          id: 3,
          title: 'App Development',
          description: 'Develop native and cross-platform apps with smooth performance.'
        },
        {
          id: 4,
          title: 'Payment & Integrations',
          description: 'Integrate e-commerce, payment gateways, and analytics.'
        },
        {
          id: 5,
          title: 'Testing & Optimization',
          description: 'QA testing, bug fixes, and performance optimization.'
        },
        {
          id: 6,
          title: 'Launch & Support',
          description: 'Deploy on App Store & Play Store with ongoing updates.'
        }
      ]
    },
    testimonials: {
      title: [
        { text: "Fashion Brands That ", gradient: false },
        { text: "Loved Their Mobile Apps", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      description: 'See how Digi Aerotech helped fashion brands boost engagement, sales, and brand loyalty with custom mobile apps.',
      testimonials: [
        {
          id: '1',
          message: 'Our mobile app transformed our online sales, making it easier for customers to shop directly.',
          highlight: 'transformed our online sales',
          stars: 5,
          name: 'Ananya Kapoor',
          designation: 'Founder',
          company: 'Vogue Threads'
        },
        {
          id: '2',
          message: 'The app is smooth, stylish, and keeps users engaged, significantly increasing repeat purchases.',
          highlight: 'significantly increasing repeat purchases',
          stars: 5,
          name: 'Rahul Mehta',
          designation: 'Owner',
          company: 'Urban Chic'
        }
      ]
    },
    cta: {
      title: 'Ready to Launch Your Fashion App?',
      subtitle: 'Engage Users, Boost Sales, and Strengthen Brand Loyalty',
      description: 'Book a free consultation and let Digi Aerotech build a high-converting mobile app for your fashion brand.'
    }
  }
};
