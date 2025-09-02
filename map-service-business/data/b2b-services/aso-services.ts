import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconRocket, IconBuilding, IconTrendingUp, IconSearch,
  IconChartBar, IconUsers, IconTarget, IconShieldCheck,
  IconWorld, IconTools, IconWand
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'aso-services',
  business: 'b2b-services',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant2',
    process: 'variant1',
  },
  data: {
    slug: 'aso-services-b2b',
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
            { text: "Why B2B Apps Struggle ", gradient: false },
            { text: "Without ASO", gradient: true, gradientClass: "from-blue-500 via-indigo-500 to-purple-500" }
          ],
          subheadline: "In the crowded app marketplace, even B2B apps get buried without proper optimization. Without ASO, your app is invisible to potential enterprise clients.",
          painPoints: [
            "Low app visibility in App Store & Play Store searches",
            "Generic descriptions failing to convince business buyers",
            "Poor keyword targeting, missing out on high-value searches",
            "Lack of reviews hurting brand trust",
            "No localization for global B2B markets",
            "Competitors dominating search rankings with optimized profiles"
          ],
          solutionPoints: [
            "Keyword research & targeting for B2B industry terms",
            "Compelling copywriting that speaks to decision-makers",
            "Optimization of titles, metadata, screenshots & videos",
            "Review & reputation management to build trust",
            "Localization for international B2B audiences",
            "Advanced analytics to track installs & enterprise leads"
          ],
          cta: {
            icon: React.createElement(IconRocket, { size: 20 }),
            text: "Optimize My B2B App"
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
              question: 'Why do B2B apps need ASO?',
              answer: 'B2B apps compete in a niche but highly valuable market. ASO ensures decision-makers can easily find, trust, and download your app.',
              icon: React.createElement(IconSearch, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Can ASO generate enterprise leads?',
              answer: 'Yes — optimized app listings improve discovery, boost installs, and bring qualified B2B leads directly through the app.',
              icon: React.createElement(IconTarget, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Do you handle both iOS and Android?',
              answer: 'Absolutely. We optimize for both Apple App Store and Google Play Store to maximize reach across platforms.',
              icon: React.createElement(IconTools, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'What industries do you serve?',
              answer: 'We specialize in B2B SaaS, IT services, manufacturing, logistics, healthcare, finance, and consulting apps.',
              icon: React.createElement(IconBuilding, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'How do you measure ASO success?',
              answer: 'We track keyword rankings, app visibility, organic installs, reviews, and most importantly — enterprise lead conversions.',
              icon: React.createElement(IconChartBar, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "B2B Apps Deserve Enterprise Visibility",
      headlineKeywords: [
        "ASO for B2B SaaS Apps",
        "Enterprise App Store Optimization",
        "Lead-Generating B2B App Strategies",
        "Global Visibility for B2B Apps",
        "Boost Downloads & Conversions"
      ],
      brandLine: [
        { text: "🚀 Digi Aerotech helps B2B apps rank higher, attract enterprise clients, and convert installs into business deals.", gradient: false }
      ],
      subheadline: "Your B2B app should be more than just live — it should be discoverable, credible, and optimized to generate real business leads.",
      ctaButtons: [
        { icon: React.createElement(IconRocket, { size: 28 }), text: "Start My ASO Strategy", link: "/contact" },
        { icon: React.createElement(IconTrendingUp, { size: 28 }), text: "Free ASO Audit", link: "/audit", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "Decision-Maker Reach",
          description: "Target CXOs & managers searching for B2B solutions"
        },
        {
          icon: React.createElement(IconSearch, { size: 32 }),
          title: "Keyword Optimization",
          description: "Rank for high-intent B2B search terms"
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 32 }),
          title: "Trust & Reviews",
          description: "Build credibility with managed feedback systems"
        },
        {
          icon: React.createElement(IconWorld, { size: 32 }),
          title: "Global Visibility",
          description: "Multi-language ASO for international B2B markets"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why B2B Companies Trust ", gradient: false },
        { text: "Digi Aerotech for ASO", gradient: true, gradientClass: "from-blue-500 via-indigo-500 to-purple-500" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Lead-Driven ASO",
          description: "Not just downloads — we optimize for quality B2B leads."
        },
        {
          icon: React.createElement(IconTarget, { size: 28 }),
          title: "B2B Keyword Expertise",
          description: "Deep research into enterprise-focused search terms."
        },
        {
          icon: React.createElement(IconBuilding, { size: 28 }),
          title: "Cross-Industry Success",
          description: "Proven ASO results in SaaS, IT, logistics, and consulting."
        },
        {
          icon: React.createElement(IconWand, { size: 28 }),
          title: "Conversion-Focused Listings",
          description: "Optimized visuals, copy, and CTAs that convince buyers."
        },
        {
          icon: React.createElement(IconChartBar, { size: 28 }),
          title: "Data-Backed Strategy",
          description: "Tracking rankings, installs & ROI in transparent reports."
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 28 }),
          title: "Scalable Approach",
          description: "Flexible plans to grow with your B2B app’s lifecycle."
        }
      ],
      cta: {
        text: "Optimize My B2B App Now",
        link: "#contact",
        icon: React.createElement(IconRocket, { size: 20 })
      }
    },
    process: {
      title: 'Our B2B App Store Optimization Process',
      subtitle: 'DISCOVER → OPTIMIZE → RANK → LEADS',
      description: 'Our ASO process ensures your B2B app doesn’t just appear in stores — it attracts enterprise buyers and drives real opportunities.',
      steps: [
        { id: 1, title: 'Market Research', description: 'Analyze competitors & find B2B keyword gaps.' },
        { id: 2, title: 'Profile Optimization', description: 'Titles, descriptions, screenshots & videos tuned for B2B buyers.' },
        { id: 3, title: 'Review Strategy', description: 'Build credibility with review & rating systems.' },
        { id: 4, title: 'Localization', description: 'Expand reach with international market targeting.' },
        { id: 5, title: 'Analytics & Tracking', description: 'Monitor keyword ranking, downloads & lead flow.' },
        { id: 6, title: 'Ongoing Optimization', description: 'Continuous updates to stay ahead of competition.' }
      ]
    },
    cta: {
      title: 'Ready to Make Your B2B App Visible to Enterprise Buyers?',
      subtitle: 'ASO That Drives Leads, Not Just Installs',
      description: 'Partner with Digi Aerotech to rank higher, attract decision-makers, and convert installs into long-term B2B partnerships.',
    }
  }
};
