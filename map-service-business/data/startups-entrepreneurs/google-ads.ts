import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconRocket, IconTarget, IconCoin, IconChartBar, IconTrendingUp,
  IconUsers, IconBriefcase, IconBulb,
  IconStars, IconArrowRight,
  IconMouse
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'google-ads',
  business: 'startups-entrepreneurs',
  variants: {
    hero: 'variant1',
    whyChooseUs: 'variant2',
    process: 'variant3',
  },
  data: {
    slug: 'google-ads-startups-entrepreneurs',
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
            { text: "Why Most Startups Struggle with ", gradient: false },
            { text: "Google Ads", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Running ads without strategy can drain budgets fast. Startups need precision, not guesswork.",
          painPoints: [
            "High ad spend with little ROI",
            "Wrong targeting leading to irrelevant clicks",
            "Low Quality Scores increasing CPC",
            "No conversion tracking setup",
            "Struggling to compete with bigger brands"
          ],
          solutionPoints: [
            "Startup-focused ad strategy to maximize ROI",
            "Laser-sharp audience targeting & keywords",
            "Conversion tracking & performance reporting",
            "Ad creatives designed to sell, not just click",
            "Continuous A/B testing to reduce costs & scale"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Run Profitable Google Ads"
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
              question: 'Are Google Ads effective for startups?',
              answer: 'Yes. With precise targeting, startups can reach ready-to-buy customers and generate qualified leads from day one.',
              icon: React.createElement(IconMouse, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'What is the minimum budget required?',
              answer: 'We work with startup-friendly budgets and scale campaigns once we achieve positive ROI. Many see results starting at $500/month.',
              icon: React.createElement(IconCoin, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'How fast can we see results?',
              answer: 'Google Ads can deliver leads within days of campaign launch, making it one of the fastest growth channels for startups.',
              icon: React.createElement(IconRocket, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Do you provide conversion tracking?',
              answer: 'Absolutely. We set up tracking for calls, forms, signups, and purchases so every dollar spent is measurable.',
              icon: React.createElement(IconChartBar, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Can you help us scale campaigns?',
              answer: 'Yes. Once ads are profitable, we scale campaigns across Google Search, Display, YouTube, and Retargeting for exponential growth.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Smart Ads for ",
      headlineKeywords: [
        "Startup Growth",
        "Entrepreneurs",
        "Early-Stage Ventures",
        "New Businesses"
      ],
      brandLine: [
        { text: "🚀 Google Ads That Drive Conversions", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      subheadline: "We create and manage high-performing Google Ads campaigns designed to generate leads, boost sales, and scale startups faster.",
      ctaButtons: [
        { icon: React.createElement(IconTarget, { size: 28 }), text: "Launch My Ads", link: "/contact" },
        { icon: React.createElement(IconBulb, { size: 28 }), text: "Get Free Audit", link: "/google-ads-audit", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconCoin, { size: 32 }),
          title: "2X ROI",
          description: "achieved for startups"
        },
        {
          icon: React.createElement(IconMouse, { size: 32 }),
          title: "50% Lower CPC",
          description: "through optimization"
        },
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "Qualified Leads",
          description: "driven every month"
        },
        {
          icon: React.createElement(IconRocket, { size: 32 }),
          title: "Faster Growth",
          description: "from Day 1 campaigns"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Startups Trust Us for ", gradient: false },
        { text: "Google Ads Management", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconTarget, { size: 28 }),
          title: "Data-Driven Targeting",
          description: "We target only high-intent customers."
        },
        {
          icon: React.createElement(IconBriefcase, { size: 28 }),
          title: "Startup-Friendly Pricing",
          description: "Flexible plans that fit early budgets."
        },
        {
          icon: React.createElement(IconChartBar, { size: 28 }),
          title: "Transparent Reporting",
          description: "Every dollar spent is measurable."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Faster Conversions",
          description: "Campaigns optimized for instant results."
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Scalable Growth",
          description: "From launch to aggressive scaling."
        },
        {
          icon: React.createElement(IconStars, { size: 28 }),
          title: "Proven Expertise",
          description: "We’ve grown 100+ startups with ads."
        }
      ],
      cta: {
        text: "Start My Google Ads Campaign",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Google Ads Process for Startups',
      subtitle: 'FROM STRATEGY TO SCALE',
      className: 'border-t border-border dark:border-gray-700',
      description: 'We design campaigns that convert clicks into paying customers with a proven, startup-focused framework.',
      steps: [
        {
          id: 1,
          title: 'Research & Strategy',
          description: 'We analyze your market, competitors, and audience to craft a data-backed strategy that aligns with your startup’s growth goals.'
        },
        {
          id: 2,
          title: 'Campaign Setup',
          description: 'From keyword selection to ad group structuring, we set up campaigns for maximum visibility and lowest cost per click.'
        },
        {
          id: 3,
          title: 'Ad Creatives',
          description: 'Compelling ad copy, visuals, and extensions designed to attract attention and drive high-quality clicks that convert.'
        },
        {
          id: 4,
          title: 'Conversion Tracking',
          description: 'We implement tracking for leads, calls, and purchases to ensure every click is measurable and ROI-driven.'
        },
        {
          id: 5,
          title: 'Optimization & A/B Testing',
          description: 'We continuously refine targeting, bidding, and creatives with A/B testing to lower CPCs and increase conversions.'
        },
        {
          id: 6,
          title: 'Scaling & Expansion',
          description: 'Once profitable, we expand campaigns across Search, Display, YouTube, and Retargeting for maximum startup growth.'
        }
      ]
    },
    cta: {
      title: 'Run High-ROI Google Ads for Your Startup',
      subtitle: 'FROM LAUNCH TO SCALE',
      description: 'Stop wasting money on ineffective ads. Our Google Ads management ensures every click counts towards startup growth.',
    }
  }
};
