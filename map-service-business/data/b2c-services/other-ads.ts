import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconVideo, IconBrandYoutube, IconScreenShare, IconTarget, IconShoppingCart,
  IconRocket, IconUsers, IconArrowRight, IconDeviceTv, IconRepeat
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'other-ads',
  business: 'b2c-services',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant1',
    process: 'variant3',
    testimonials: 'variant2'
  },
  data: {
    slug: 'other-ads-b2c',
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
            { text: "Why B2C Businesses Lose Growth ", gradient: false },
            { text: "Without Multi-Channel Ads", gradient: true, gradientClass: "from-pink-500 via-red-500 to-yellow-500" }
          ],
          subheadline: "If you rely only on Google or Meta Ads, you’re missing huge opportunities where your audience spends time — YouTube, OTT, and across the web.",
          painPoints: [
            "Over-reliance on one ad channel increases risk",
            "Missing brand presence on YouTube & OTT platforms",
            "No remarketing means lost potential customers",
            "Competitors dominate with multi-channel ads",
            "Lower recall because of limited visibility",
            "Not leveraging storytelling in video ads"
          ],
          solutionPoints: [
            "YouTube Ads for brand awareness & storytelling",
            "Google Display Ads for cross-web visibility",
            "OTT/CTV Ads to reach streaming audiences",
            "Remarketing Ads to convert lost visitors",
            "Native Ads for subtle, non-intrusive marketing",
            "Multi-channel integration for higher ROI"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Expand My Ad Reach"
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
              question: 'What are “Other Ads” for B2C businesses?',
              answer: 'These include YouTube Ads, Display Ads, OTT/CTV Ads, Native Ads, and Remarketing campaigns that complement Google & Meta Ads.',
              icon: React.createElement(IconVideo, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Why should I use YouTube Ads?',
              answer: 'YouTube is the second largest search engine. Video ads build trust, show your brand personality, and convert better than static content.',
              icon: React.createElement(IconBrandYoutube, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'How do OTT/CTV ads help B2C businesses?',
              answer: 'OTT/CTV ads allow you to target audiences on Netflix, Hotstar, Amazon Prime, and more — perfect for building strong brand recall.',
              icon: React.createElement(IconDeviceTv, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'What is remarketing?',
              answer: 'Remarketing shows ads to people who already visited your site or app but didn’t convert, helping you recover lost sales.',
              icon: React.createElement(IconRepeat, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Is multi-channel advertising expensive?',
              answer: 'No — when done strategically, it actually lowers cost per acquisition by diversifying ad spend and improving conversions.',
              icon: React.createElement(IconTarget, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Don’t Limit Your Ads. Dominate Everywhere.",
      headlineKeywords: [
        "Other Ads for B2C Services",
        "YouTube & OTT Ads for Retail & Gyms",
        "Remarketing Ads for B2C Growth",
        "Cross-Channel Ads for Salons & Restaurants",
        "Display & Native Ads for Local Businesses"
      ],
      brandLine: [
        { text: "🎯 Reach your customers across YouTube, OTT, and the web — not just on one platform.", gradient: false }
      ],
      subheadline: "We help B2C businesses like salons, gyms, restaurants, fashion brands, and retailers run high-performing campaigns beyond Google & Meta. From YouTube Ads to OTT, Display, and Remarketing, Digi Aerotech ensures your brand stays everywhere your customers are.",
      ctaButtons: [
        { icon: React.createElement(IconRocket, { size: 28 }), text: "Run My Multi-Channel Ads", link: "/contact" },
        { icon: React.createElement(IconUsers, { size: 28 }), text: "Get Free Ad Strategy", link: "/audit", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconBrandYoutube, { size: 32 }),
          title: "High Engagement",
          description: "YouTube ads capture attention & build trust"
        },
        {
          icon: React.createElement(IconDeviceTv, { size: 32 }),
          title: "OTT Reach",
          description: "Target audiences on Netflix, Hotstar, Prime"
        },
        {
          icon: React.createElement(IconRepeat, { size: 32 }),
          title: "Better Conversions",
          description: "Remarketing reduces cart abandonment"
        },
        {
          icon: React.createElement(IconShoppingCart, { size: 32 }),
          title: "More Sales",
          description: "Cross-channel ads drive higher ROI"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why B2C Brands Trust ", gradient: false },
        { text: "Digi Aerotech for Multi-Channel Ads", gradient: true, gradientClass: "from-pink-500 via-red-500 to-yellow-500" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconVideo, { size: 28 }),
          title: "Full Ad Spectrum",
          description: "From YouTube to OTT to remarketing, we manage it all."
        },
        {
          icon: React.createElement(IconTarget, { size: 28 }),
          title: "Precision Targeting",
          description: "Reach the right customers with the right message."
        },
        {
          icon: React.createElement(IconScreenShare, { size: 28 }),
          title: "Creative Storytelling",
          description: "Video & display ads that connect emotionally."
        },
        {
          icon: React.createElement(IconShoppingCart, { size: 28 }),
          title: "Sales-First Approach",
          description: "We focus on conversions, not just impressions."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "ROI-Focused",
          description: "Transparent reporting and revenue-driven strategy."
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "Cross-Platform Growth",
          description: "Your brand is everywhere your customers are."
        }
      ],
      cta: {
        text: "Launch Multi-Channel Ads",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Multi-Channel Ads Process',
      subtitle: 'STRATEGY → CREATIVE → LAUNCH → OPTIMIZE',
      description: 'We don’t just run ads — we craft experiences across multiple channels to maximize conversions for your B2C business.',
      steps: [
        { id: 1, title: 'Audit & Strategy', description: 'Analyze your market, audience, and competitors.' },
        { id: 2, title: 'Creative Production', description: 'Design video, display, and native ads that resonate.' },
        { id: 3, title: 'Campaign Setup', description: 'Launch ads across YouTube, OTT, Display, and more.' },
        { id: 4, title: 'Remarketing Setup', description: 'Retarget visitors who didn’t convert the first time.' },
        { id: 5, title: 'Optimization & Scaling', description: 'Test, refine, and scale campaigns for ROI growth.' },
        { id: 6, title: 'Transparent Reporting', description: 'Get insights into performance, spend, and ROI.' }
      ]
    },
    testimonials: {
      title: [
        { text: "B2C Brands Growing ", gradient: false },
        { text: "with Digi Aerotech Multi-Channel Ads", gradient: true, gradientClass: "from-pink-500 via-red-500 to-yellow-500" }
      ],
      description: 'From fashion to food, our multi-channel ad strategies have helped B2C brands dominate across YouTube, OTT, and remarketing campaigns.',
      testimonials: [
        {
          id: '1',
          message: 'Running YouTube + Remarketing Ads with Digi Aerotech helped us cut customer acquisition costs by 35% while increasing repeat orders.',
          highlight: '35% lower acquisition cost',
          stars: 5,
          name: 'Ritika Sharma',
          designation: 'Founder',
          company: 'Glow Fashion'
        },
        {
          id: '2',
          message: 'Their OTT campaigns gave our restaurant massive brand visibility. We saw more walk-ins and repeat customers after just 6 weeks.',
          highlight: 'Higher footfall',
          stars: 5,
          name: 'Arjun Mehta',
          designation: 'Owner',
          company: 'Grill & Chill Café'
        }
      ]
    },
    cta: {
      title: 'Ready to Expand Beyond Google & Meta Ads?',
      subtitle: 'YOUTUBE → OTT → DISPLAY → REMARKETING → SALES',
      description: 'With Digi Aerotech’s multi-channel ads, your B2C business dominates every platform your customers use. More reach, more conversions, more growth.',
    }
  }
};
