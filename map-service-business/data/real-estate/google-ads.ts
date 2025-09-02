import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconBuildingSkyscraper, IconHome, IconTrendingUp, IconTarget,
  IconPhoneCall, IconChartLine, IconUsers, IconArrowRight
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'google-ads',
  business: 'real-estate',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant1',
    process: 'variant3',
  },
  data: {
    slug: 'google-ads-real-estate',
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
            { text: "Why Real Estate Businesses", gradient: false },
            { text: "Struggle with Online Ads", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Running ads without the right targeting wastes budget. Real estate requires precision-focused Google Ads for high-quality leads.",
          painPoints: [
            "Low-quality clicks that don’t convert",
            "High ad spend with poor ROI",
            "Not targeting property buyers & sellers correctly",
            "Generic ads failing to build trust",
            "Lack of call tracking & conversion setup"
          ],
          solutionPoints: [
            "Laser-focused keyword targeting (Buy, Rent, Sell queries)",
            "High-converting landing pages for property inquiries",
            "Smart bidding & ad extensions for higher visibility",
            "Call tracking & lead form integrations",
            "Continuous campaign optimization for maximum ROI"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Get High-Intent Real Estate Leads"
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
              question: 'Do Google Ads really work for real estate?',
              answer: 'Yes. People searching for properties on Google have strong purchase intent. Properly optimized ads bring calls, inquiries, and site visits.',
              icon: React.createElement(IconTarget, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'What types of real estate ads perform best?',
              answer: 'Search ads, local service ads, and display remarketing campaigns drive the best results for property sales and rentals.',
              icon: React.createElement(IconHome, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Can Google Ads help with luxury property sales?',
              answer: 'Yes, we create niche campaigns targeting HNI buyers, investors, and international clients searching for premium properties.',
              icon: React.createElement(IconBuildingSkyscraper, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'How soon can I expect leads?',
              answer: 'Most campaigns start generating qualified property inquiries within the first 7–14 days.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Looking for ",
      headlineKeywords: [
        "More Property Buyers?",
        "High-Intent Real Estate Leads?",
        "Faster Sales Closures?",
        "Targeted Property Inquiries?",
        "Better ROI from Ads?"
      ],
      brandLine: [
        { text: "📈 Run Google Ads That Actually Sell Properties", gradient: false }
      ],
      subheadline: "We help real estate agencies, brokers, and property consultants generate quality buyer & seller leads with precision-targeted Google Ads campaigns.",
      ctaButtons: [
        { icon: React.createElement(IconPhoneCall, { size: 28 }), text: "Start Google Ads Today", link: "/contact" },
        { icon: React.createElement(IconUsers, { size: 28 }), text: "Get Free Campaign Audit", link: "tel:+918607119872", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconBuildingSkyscraper, { size: 32 }),
          title: "300+ Real Estate Projects",
          description: "Scaled via Google Ads campaigns"
        },
        {
          icon: React.createElement(IconChartLine, { size: 32 }),
          title: "10,000+ Leads Generated",
          description: "From property-focused ad targeting"
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "4X ROI",
          description: "Achieved with optimized campaigns"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Digi Aerotech for", gradient: false },
        { text: "Real Estate Google Ads?", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconTarget, { size: 28 }),
          title: "High-Intent Targeting",
          description: "Ads shown only to serious property buyers & sellers."
        },
        {
          icon: React.createElement(IconChartLine, { size: 28 }),
          title: "Conversion-Focused Ads",
          description: "Landing pages & CTAs built to capture leads instantly."
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "Call & Form Tracking",
          description: "Measure real leads from every ad click."
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "ROI-Driven Scaling",
          description: "We double-down on campaigns that generate results."
        }
      ],
      cta: {
        text: "Generate Property Leads Today",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Google Ads Process for Real Estate',
      subtitle: 'LEAD-FOCUSED CAMPAIGN EXECUTION',
      className: 'border-t border-border dark:border-gray-700',
      description: 'From keyword research to call tracking, we build and scale Google Ads campaigns that drive real property inquiries.',
      steps: [
        {
          id: 1,
          title: 'Market & Keyword Research',
          description: 'We analyze high-intent property keywords like “flats for sale in [city]” and competitor ads to identify profitable opportunities.'
        },
        {
          id: 2,
          title: 'Ad Copy & Extensions',
          description: 'We craft compelling ad copies with call, location, and lead form extensions to increase CTR and direct calls.'
        },
        {
          id: 3,
          title: 'Landing Page Optimization',
          description: 'Custom property landing pages designed for conversions — highlighting listings, offers, and CTAs.'
        },
        {
          id: 4,
          title: 'Campaign Setup & Launch',
          description: 'Targeting by city, pin code, and buyer intent to ensure your budget brings only serious property seekers.'
        },
        {
          id: 5,
          title: 'Tracking & Reporting',
          description: 'We integrate call tracking, lead forms, and analytics to measure every click’s ROI.'
        },
        {
          id: 6,
          title: 'Scaling & Optimization',
          description: 'We continuously optimize campaigns, A/B test creatives, and scale ads that generate maximum qualified leads.'
        }
      ]
    },
    cta: {
      title: 'Want More Qualified Property Leads?',
      subtitle: 'GET BUYERS & SELLERS FROM GOOGLE ADS',
      description: 'Stop wasting ad spend. Run targeted campaigns that bring real estate buyers & sellers straight to your phone.',
    }
  }
};
