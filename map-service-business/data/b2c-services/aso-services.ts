import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconAppWindow, IconShoppingCart, IconUsers, IconTrendingUp,
  IconChartArcs, IconStar, IconRocket, IconTarget, IconWorld,
  IconArrowRight, IconChartBar, IconSettings
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'aso-services',
  business: 'b2c-services',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant1',
    process: 'variant2',
  },
  data: {
    slug: 'aso-services-b2c',
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
            { text: "Why B2C Apps Struggle ", gradient: false },
            { text: "Without ASO", gradient: true, gradientClass: "from-pink-500 via-red-500 to-yellow-500" }
          ],
          subheadline: "With millions of apps competing in the App Store and Google Play, even the best B2C services fail to grow without proper App Store Optimization (ASO).",
          painPoints: [
            "App buried under competitors, barely visible in search results",
            "Low download numbers despite huge marketing spends",
            "Poor app rating & negative reviews reducing trust",
            "Weak keyword optimization leading to zero organic visibility",
            "Unoptimized creatives (icons, screenshots, videos) failing to attract installs",
            "High uninstall rates due to poor onboarding or lack of credibility"
          ],
          solutionPoints: [
            "App title, description & metadata optimized with high-converting keywords",
            "Category targeting & competitor benchmarking for better positioning",
            "High-quality app creatives (icon, screenshots, preview video) to boost installs",
            "Review & rating management to build trust & improve rankings",
            "Localized ASO for global visibility & reach",
            "Continuous optimization to increase downloads, engagement, and retention"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Optimize My App Now"
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
              question: 'Why do B2C apps need ASO?',
              answer: 'Because most app installs come from organic searches in the App Store and Play Store. Without ASO, your app stays invisible to your ideal users.',
              icon: React.createElement(IconAppWindow, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Can ASO really increase downloads?',
              answer: 'Yes! With the right keywords, creatives, and ratings management, apps can see 2x-5x more organic downloads within weeks.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Do you also handle app reviews & ratings?',
              answer: 'Absolutely. We implement review generation strategies and manage responses to negative feedback, improving your credibility and rankings.',
              icon: React.createElement(IconStar, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Is ASO a one-time process?',
              answer: 'No. Just like SEO, ASO requires continuous optimization and competitor tracking. We provide ongoing ASO support for sustainable growth.',
              icon: React.createElement(IconSettings, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Which industries benefit most from ASO?',
              answer: 'Any B2C app — e-commerce, fitness, travel, food delivery, fintech, education, or lifestyle — can boost visibility, downloads, and retention through ASO.',
              icon: React.createElement(IconShoppingCart, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'Do you provide global ASO?',
              answer: 'Yes. We optimize for multiple languages and regions so your app reaches users worldwide with localized targeting.',
              icon: React.createElement(IconWorld, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Visibility. Installs. Retention.",
      headlineKeywords: [
        "App Store Optimization (ASO) Services",
        "Boost B2C App Downloads",
        "Rank Higher in App Store & Google Play",
        "Optimize Reviews & Ratings",
        "Engage & Retain More Users"
      ],
      brandLine: [
        { text: "📱 ASO Services for B2C Businesses", gradient: false }
      ],
      subheadline: "From e-commerce to fitness, travel to food delivery, Digi Aerotech helps B2C apps rise above the noise with proven ASO strategies that drive installs, improve ratings, and grow revenue.",
      ctaButtons: [
        { icon: React.createElement(IconRocket, { size: 28 }), text: "Get My App Optimized", link: "/contact" },
        { icon: React.createElement(IconChartArcs, { size: 28 }), text: "Request Free ASO Audit", link: "/audit", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "3x Higher Visibility",
          description: "Optimized apps rank faster in app store search"
        },
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "More Organic Installs",
          description: "Quality downloads without heavy ad spend"
        },
        {
          icon: React.createElement(IconStar, { size: 32 }),
          title: "Better Ratings & Reviews",
          description: "Trust-building strategies for long-term growth"
        },
        {
          icon: React.createElement(IconTarget, { size: 32 }),
          title: "Higher Retention",
          description: "Keep users engaged and loyal to your app"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the #1 Choice ", gradient: false },
        { text: "for B2C App ASO", gradient: true, gradientClass: "from-pink-500 via-red-500 to-yellow-500" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconChartBar, { size: 28 }),
          title: "Data-Driven ASO",
          description: "We rely on research, analytics, and real metrics to deliver results."
        },
        {
          icon: React.createElement(IconTarget, { size: 28 }),
          title: "Industry-Specific Expertise",
          description: "E-commerce, travel, fitness, food delivery, fintech — we’ve optimized them all."
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "Focus on Users",
          description: "Our strategies improve not just downloads but user engagement & retention."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Proven Growth",
          description: "Apps we optimized have doubled installs and climbed category rankings."
        },
        {
          icon: React.createElement(IconWorld, { size: 28 }),
          title: "Global Reach",
          description: "Localized ASO to target users in multiple countries & languages."
        },
        {
          icon: React.createElement(IconStar, { size: 28 }),
          title: "End-to-End ASO",
          description: "From keyword research to creatives to reviews — we manage it all."
        }
      ],
      cta: {
        text: "Boost My App Visibility",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Proven B2C ASO Process',
      subtitle: 'FROM DISCOVERY TO DOWNLOADS',
      description: 'We combine creativity, data, and continuous optimization to help your app rise above the competition and generate loyal users.',
      steps: [
        { id: 1, title: 'App Audit & Market Research', description: 'We analyze your current app performance and study competitors to identify growth opportunities.' },
        { id: 2, title: 'Keyword Strategy & Metadata Optimization', description: 'We find high-value keywords and optimize app titles, descriptions, and tags for maximum visibility.' },
        { id: 3, title: 'Creative Optimization', description: 'We design compelling icons, screenshots, and preview videos that drive clicks and installs.' },
        { id: 4, title: 'Review & Ratings Management', description: 'We help generate positive reviews and manage negative feedback for better trust.' },
        { id: 5, title: 'Launch & Ongoing Optimization', description: 'We track performance and continuously tweak strategies for sustainable growth.' },
        { id: 6, title: 'Localization & Scaling', description: 'Expand reach by optimizing your app for different regions and languages globally.' }
      ]
    },
    cta: {
      title: 'Ready to Skyrocket Your B2C App?',
      subtitle: 'ASO THAT DRIVES DOWNLOADS & REVENUE',
      description: 'Partner with Digi Aerotech and make your B2C app visible, credible, and unstoppable on the App Store & Google Play.',
    }
  }
};
