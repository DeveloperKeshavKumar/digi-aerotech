import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconTrendingUp,
  IconUsers,
  IconShieldCheck,
  IconStar,
  IconRocket,
  IconShoppingCart,
  IconPhone,
  IconArrowRight,
  IconAppWindow,
  IconCode,
  IconDeviceMobile
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'aso-services',
  business: 'fashion-brands',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant3',
    process: 'variant1',
  },
  data: {
    slug: 'aso-services-fashion-brands',
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
            { text: "Challenges Fashion Brands Face in ", gradient: false },
            { text: "App Visibility & Downloads", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Fashion apps face intense competition in app stores, making it hard to attract downloads and retain users.",
          painPoints: [
            "Low visibility among thousands of fashion apps",
            "Poor keyword targeting and discoverability",
            "Low conversion from app page views to downloads",
            "Difficulty retaining users and building loyalty",
            "Limited insights on competitor performance"
          ],
          solutionPoints: [
            "App Store Optimization with targeted fashion keywords",
            "Compelling app title, description, and visuals",
            "Conversion-focused app icons & screenshots",
            "User retention strategies with push notifications & in-app engagement",
            "Competitor analysis to outperform similar fashion apps"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Boost Your Fashion App Downloads"
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
              question: 'How does ASO help my fashion app?',
              answer: 'Our ASO strategies increase your app visibility, attract targeted users, and boost organic downloads.',
              icon: React.createElement(IconAppWindow, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Can you optimize both iOS and Android apps?',
              answer: 'Yes, we implement platform-specific ASO strategies for App Store and Google Play to maximize results.',
              icon: React.createElement(IconDeviceMobile, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Do you handle app reviews and ratings?',
              answer: 'Absolutely. We improve app credibility by managing reviews and encouraging positive user feedback.',
              icon: React.createElement(IconStar, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Will ASO increase my revenue?',
              answer: 'By increasing targeted downloads and improving retention, ASO helps boost in-app purchases and sales.',
              icon: React.createElement(IconShoppingCart, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'How long before I see results?',
              answer: 'Initial improvements are visible in weeks, but significant growth occurs over 3-6 months of continuous optimization.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'Do you provide ongoing ASO support?',
              answer: 'Yes, we continuously monitor, analyze, and optimize your app to maintain top rankings and high conversions.',
              icon: React.createElement(IconRocket, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Want ",
      headlineKeywords: [
        "More App Downloads?",
        "Higher Fashion App Visibility?",
        "Top Rankings in App Stores?",
        "Boost Fashion Engagement?",
        "360° ASO for Fashion Brands?"
      ],
      brandLine: [
        { text: "🚀 Elevate Your Fashion App with Proven ASO Strategies", gradient: false }
      ],
      subheadline: "We help fashion brands increase app downloads, visibility, and user engagement through tailored ASO strategies.",
      ctaButtons: [
        { icon: React.createElement(IconPhone, { size: 28 }), text: "Book Free ASO Consultation", link: "/contact" },
        { icon: React.createElement(IconArrowRight, { size: 28 }), text: "Get Your App Optimized", link: "/contact", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "100,000+ Users",
          description: "Organic app downloads driven"
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "250+ Fashion Apps Optimized",
          description: "Proven ASO success"
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 32 }),
          title: "4.9/5 Trust Rating",
          description: "Clients satisfied with results"
        },
        {
          icon: React.createElement(IconRocket, { size: 32 }),
          title: "Global Reach",
          description: "Optimizations for worldwide app stores"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the ", gradient: false },
        { text: "#1 ASO Partner for Fashion Apps", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Expert Fashion ASO Team",
          description: "Years of experience optimizing fashion apps for top rankings."
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Keyword & Market Research",
          description: "We target high-intent fashion keywords to drive downloads."
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "User Retention Strategies",
          description: "We ensure users stay engaged and return to your app."
        },
        {
          icon: React.createElement(IconShoppingCart, { size: 28 }),
          title: "Conversion-Focused Optimization",
          description: "Improved app page visuals, screenshots, and descriptions."
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 28 }),
          title: "Continuous Monitoring",
          description: "We track performance and adjust strategies proactively."
        },
        {
          icon: React.createElement(IconStar, { size: 28 }),
          title: "Proven Results",
          description: "Fashion brands see tangible growth in downloads and engagement."
        }
      ],
      cta: {
        text: "Optimize Your Fashion App Now",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Proven ASO Process for Fashion Apps',
      subtitle: 'STEP-BY-STEP APP OPTIMIZATION',
      className: 'border-t border-border dark:border-gray-700',
      description: 'From keyword research to user retention, we optimize every aspect of your fashion app for maximum downloads and engagement.',
      steps: [
        {
          id: 1,
          title: 'Market & Competitor Research',
          description: 'Analyze top fashion apps, identify high-performing keywords, and uncover opportunities.'
        },
        {
          id: 2,
          title: 'Keyword Optimization',
          description: 'Select the best app titles, subtitles, and keywords to improve app store rankings.'
        },
        {
          id: 3,
          title: 'App Page Optimization',
          description: 'Enhance visuals, screenshots, descriptions, and videos to maximize conversions.'
        },
        {
          id: 4,
          title: 'Review & Rating Management',
          description: 'Encourage positive reviews, handle feedback, and boost credibility.'
        },
        {
          id: 5,
          title: 'Retention & Engagement Strategies',
          description: 'Push notifications, in-app messages, and loyalty programs to keep users active.'
        },
        {
          id: 6,
          title: 'Continuous Monitoring & Updates',
          description: 'Track performance, A/B test visuals, and iterate for ongoing ASO success.'
        }
      ]
    },
    cta: {
      title: 'Ready to Skyrocket Your Fashion App Downloads?',
      subtitle: 'Boost Visibility, Downloads, and User Engagement Today',
      description: 'Schedule a free ASO consultation and watch your fashion app climb the ranks in app stores!'
    }
  }
};
