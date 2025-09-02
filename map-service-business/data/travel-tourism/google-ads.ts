import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconAd2, IconCurrencyDollar, IconTarget, IconUsers, IconTrendingUp,
  IconPhone, IconCalendarEvent, IconArrowRight, IconChartBar, IconGlobe,
  IconRocket, IconEye, IconStar, IconWorld, IconMapPin
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'google-ads',
  business: 'travel-tourism',
  variants: {
    hero: 'variant3',
    whyChooseUs: 'variant2',
    process: 'variant1',
  },
  data: {
    slug: 'google-ads-travel-tourism',
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
            { text: "Google Ads Challenges for ", gradient: false },
            { text: "Travel & Tourism Brands", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Travel agencies and tour operators waste huge ad budgets without the right targeting, creative strategy, or bidding optimization.",
          painPoints: [
            "High cost per click with little ROI",
            "Ads not reaching the right traveler audience",
            "Poorly optimized landing pages with low conversions",
            "Seasonal ads failing to perform",
            "Low visibility against big OTAs"
          ],
          solutionPoints: [
            "Smart bidding & budget optimization for better ROI",
            "Geo-targeted ads for domestic & international travelers",
            "Conversion-focused landing pages with strong CTAs",
            "Seasonal ad campaigns aligned with peak demand",
            "Competitive ad strategies to outperform OTAs"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Run High-ROI Google Ads"
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
              question: 'Why should travel businesses invest in Google Ads?',
              answer: 'Google Ads put your tours and packages in front of travelers actively searching, ensuring faster bookings and higher ROI.',
              icon: React.createElement(IconAd2, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Can you target travelers from specific countries or cities?',
              answer: 'Yes. We run geo-targeted campaigns so you attract both local tourists and international travelers searching for trips.',
              icon: React.createElement(IconGlobe, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'How do you ensure Google Ads don’t waste money?',
              answer: 'We use smart bidding, negative keywords, and audience segmentation to ensure every rupee spent drives results.',
              icon: React.createElement(IconCurrencyDollar, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Do you create landing pages for higher ad conversions?',
              answer: 'Absolutely. We design optimized landing pages with strong CTAs and visuals to convert clicks into bookings.',
              icon: React.createElement(IconChartBar, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Can you run seasonal ad campaigns for holidays and festivals?',
              answer: 'Yes. We craft seasonal ad funnels that maximize bookings during peak periods like Diwali, Christmas, and summer vacations.',
              icon: React.createElement(IconCalendarEvent, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'How quickly can I see results with Google Ads?',
              answer: 'You’ll start receiving inquiries within days of campaign launch, while long-term strategies ensure sustained growth.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Struggling with ",
      headlineKeywords: [
        "Low Bookings?",
        "High Ad Costs?",
        "Ineffective Campaigns?",
        "Seasonal Gaps?",
        "Need Google Ads Experts?"
      ],
      brandLine: [
        { text: "🎯 Boost Your Travel Business with High-ROI Google Ads Campaigns", gradient: false }
      ],
      subheadline: "We help travel brands run profitable Google Ads campaigns that generate leads, increase bookings, and outperform OTAs.",
      ctaButtons: [
        { icon: React.createElement(IconTarget, { size: 28 }), text: "Launch My Ads", link: "/contact" },
        { icon: React.createElement(IconPhone, { size: 28 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "40,000+ Leads",
          description: "Driven via Google Ads campaigns"
        },
        {
          icon: React.createElement(IconEye, { size: 32 }),
          title: "20M+ Impressions",
          description: "Across travel ad campaigns"
        },
        {
          icon: React.createElement(IconCurrencyDollar, { size: 32 }),
          title: "3X ROI",
          description: "Average return on ad spend"
        },
        {
          icon: React.createElement(IconRocket, { size: 32 }),
          title: "Fast Growth",
          description: "Bookings boosted within weeks"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the ", gradient: false },
        { text: "#1 Google Ads Partner for Travel & Tourism", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconAd2, { size: 28 }),
          title: "Travel Ads Expertise",
          description: "We’ve run 1000+ travel ad campaigns with proven success."
        },
        {
          icon: React.createElement(IconTarget, { size: 28 }),
          title: "Precise Targeting",
          description: "Reach domestic & international travelers at the right time."
        },
        {
          icon: React.createElement(IconCurrencyDollar, { size: 28 }),
          title: "Budget Optimization",
          description: "Smart bidding strategies that save money & maximize ROI."
        },
        {
          icon: React.createElement(IconChartBar, { size: 28 }),
          title: "Conversion-Ready Pages",
          description: "Landing pages designed to turn clicks into bookings."
        },
        {
          icon: React.createElement(IconWorld, { size: 28 }),
          title: "Seasonal Growth Campaigns",
          description: "Festivals, holidays & peak season campaigns that work."
        },
        {
          icon: React.createElement(IconStar, { size: 28 }),
          title: "Trusted by Travel Brands",
          description: "We scale agencies, hotels, and operators worldwide."
        }
      ],
      cta: {
        text: "Start My Google Ads Campaign",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Proven Google Ads Process for Travel & Tourism',
      subtitle: 'STEP-BY-STEP AD SUCCESS SYSTEM',
      className: 'border-t border-border dark:border-gray-700',
      description: 'We follow a structured Google Ads process to ensure your travel brand gets maximum visibility, clicks, and bookings.',
      steps: [
        { id: 1, title: 'Travel Market Analysis', description: 'Understand traveler behavior, competitors, and keywords.' },
        { id: 2, title: 'Campaign Setup & Targeting', description: 'Set up precise targeting based on location & traveler intent.' },
        { id: 3, title: 'Ad Copy & Creative Design', description: 'Engaging creatives that attract clicks and build trust.' },
        { id: 4, title: 'Landing Page Optimization', description: 'Design conversion-focused booking pages with strong CTAs.' },
        { id: 5, title: 'Performance Tracking & Scaling', description: 'Monitor conversions, optimize budgets, and scale winning ads.' },
        { id: 6, title: 'Seasonal Campaigns & Retargeting', description: 'Re-engage travelers with remarketing and seasonal offers.' }
      ]
    },
    cta: {
      title: 'Want to Boost Your Bookings with Google Ads?',
      subtitle: 'TURN EVERY CLICK INTO A BOOKING',
      description: 'Get a free consultation with Digi Aerotech and discover how Google Ads can skyrocket your travel & tourism business.'
    }
  }
};
