import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconBrandFacebook, IconBrandInstagram, IconUsers, IconTarget, IconArrowRight,
  IconRocket, IconTrendingUp, IconChartBar, IconCreditCard, IconDeviceMobile,
  IconHeart, IconCalendarEvent, IconAd
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'meta-ads',
  business: 'all-industries',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant1',
    process: 'variant3',
  },
  data: {
    slug: 'meta-ads-services',
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
            { text: "Why Businesses Struggle with ", gradient: false },
            { text: "Meta Ads (Facebook & Instagram)", gradient: true, gradientClass: "from-pink-500 via-purple-500 to-indigo-500" }
          ],
          subheadline: "Running ads is easy. Running ads that convert and give ROI is where most businesses fail.",
          painPoints: [
            "High ad spend with very low returns",
            "Wrong audience targeting leading to wasted budget",
            "Creative fatigue – same ads stop working after weeks",
            "Poor ad copy that doesn’t grab attention",
            "Low CTR and high CPC due to weak strategies",
            "No proper funnel or retargeting in place"
          ],
          solutionPoints: [
            "Advanced audience targeting & lookalike audiences",
            "High-converting creatives and ad copywriting",
            "Retargeting ads to convert interested prospects",
            "A/B testing to scale winning campaigns",
            "Optimized budget allocation to reduce wasted spend",
            "Conversion-focused ad funnels for higher ROI"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Launch ROI-Driven Meta Ads"
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
              question: 'What are Meta Ads?',
              answer: 'Meta Ads are paid advertising campaigns on Facebook and Instagram that help businesses reach targeted audiences and drive sales.',
              icon: React.createElement(IconAd, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'How do Meta Ads help businesses?',
              answer: 'They boost brand awareness, generate leads, and drive conversions by targeting the right audience with precision.',
              icon: React.createElement(IconTarget, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'What kind of ROI can I expect?',
              answer: 'ROI depends on your industry, ad budget, and offer, but our campaigns are optimized to reduce costs and maximize conversions.',
              icon: React.createElement(IconChartBar, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Do you create ad creatives and copies?',
              answer: 'Yes, we handle everything from ad design, creatives, copywriting, audience research, to full campaign management.',
              icon: React.createElement(IconDeviceMobile, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Can Meta Ads work for small businesses?',
              answer: 'Absolutely! Meta Ads can be scaled for any budget, making them perfect for both startups and established brands.',
              icon: React.createElement(IconUsers, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'How soon can I see results?',
              answer: 'Most businesses start seeing results within the first 2-4 weeks of optimized campaigns.',
              icon: React.createElement(IconCalendarEvent, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Want ",
      headlineKeywords: [
        "More Sales with Facebook Ads?",
        "Profitable Instagram Campaigns?",
        "High-ROI Meta Ads?",
        "Targeted Customers on Social Media?",
        "Growth with Paid Ads?"
      ],
      brandLine: [
        { text: "📈 Scale Your Business with High-ROI Meta Ads (Facebook & Instagram)", gradient: false }
      ],
      subheadline: "We help businesses create powerful, ROI-focused Meta Ads campaigns that drive sales, leads, and growth.",
      ctaButtons: [
        { icon: React.createElement(IconRocket, { size: 28 }), text: "Get Free Ads Strategy Call", link: "/contact" },
        { icon: React.createElement(IconBrandFacebook, { size: 28 }), text: "Run My Meta Ads", link: "/contact", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "3x ROAS",
          description: "Average return on ad spend for our clients"
        },
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "Precision Targeting",
          description: "Reach only the most relevant audience"
        },
        {
          icon: React.createElement(IconCreditCard, { size: 32 }),
          title: "Reduced Ad Costs",
          description: "Optimized budgets & cost-effective strategies"
        },
        {
          icon: React.createElement(IconHeart, { size: 32 }),
          title: "Engaged Customers",
          description: "Campaigns designed for clicks, leads & sales"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the ", gradient: false },
        { text: "#1 Meta Ads Partner for Growth", gradient: true, gradientClass: "from-pink-500 via-purple-500 to-indigo-500" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconTarget, { size: 28 }),
          title: "Advanced Audience Targeting",
          description: "Laser-focused targeting for maximum ROI."
        },
        {
          icon: React.createElement(IconBrandInstagram, { size: 28 }),
          title: "High-Quality Creatives",
          description: "Ad designs & videos that stop the scroll."
        },
        {
          icon: React.createElement(IconChartBar, { size: 28 }),
          title: "ROI-Driven Strategy",
          description: "We prioritize conversions, not just clicks."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Funnel Building & Retargeting",
          description: "Turn cold audiences into paying customers."
        },
        {
          icon: React.createElement(IconCreditCard, { size: 28 }),
          title: "Budget Optimization",
          description: "Get the most out of every rupee spent."
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Scalable Campaigns",
          description: "From startups to enterprises, we scale growth."
        }
      ],
      cta: {
        text: "Start My Meta Ads Today",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our 6-Step Meta Ads Process',
      subtitle: 'RESULT-DRIVEN CAMPAIGN BLUEPRINT',
      className: 'border-t border-border dark:border-gray-700',
      description: 'From research to execution, we follow a proven process to maximize your Meta Ads performance.',
      steps: [
        {
          id: 1,
          title: 'Market & Audience Research',
          description: 'Identify high-value target audiences & competitor strategies.'
        },
        {
          id: 2,
          title: 'Ad Creative & Copywriting',
          description: 'Design stunning creatives & write persuasive ad copies.'
        },
        {
          id: 3,
          title: 'Campaign Setup',
          description: 'Launch ads with proper structure & optimized targeting.'
        },
        {
          id: 4,
          title: 'A/B Testing & Optimization',
          description: 'Test multiple creatives, audiences & placements.'
        },
        {
          id: 5,
          title: 'Funnel & Retargeting',
          description: 'Convert cold leads into buyers using retargeting strategies.'
        },
        {
          id: 6,
          title: 'Reporting & Scaling',
          description: 'Detailed ROI reports & scaling of winning campaigns.'
        }
      ]
    },
    cta: {
      title: 'Ready to Scale with Meta Ads?',
      subtitle: 'BOOST SALES, LEADS & GROWTH WITH ROI-DRIVEN CAMPAIGNS',
      description: 'Book a free Meta Ads strategy call with Digi Aerotech and let us build profitable Facebook & Instagram ad campaigns for your business.'
    }
  }
};
