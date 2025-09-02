import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconHome, IconUserCheck, IconPhoneCall, IconBuildingSkyscraper,
  IconTarget, IconUsers, IconTrendingUp, IconArrowRight
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'leads-generation',
  business: 'real-estate',
  variants: {
    hero: 'variant1',
    whyChooseUs: 'variant3',
    process: 'variant2',
  },
  data: {
    slug: 'lead-generation-real-estate',
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
            { text: "Struggle to Generate Leads", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Getting property inquiries is easy. Getting *qualified leads* who are ready to buy, rent, or invest is the real challenge.",
          painPoints: [
            "Lots of unqualified inquiries wasting time",
            "No system for capturing and nurturing leads",
            "Low visibility in local property searches",
            "Poor ROI from ads & campaigns",
            "No call tracking or CRM integration"
          ],
          solutionPoints: [
            "Lead funnels tailored for property buyers & sellers",
            "Multi-channel strategies (Google, Meta, LinkedIn)",
            "Smart lead forms, CTAs & call tracking",
            "Automated lead nurturing via email/SMS",
            "CRM integration for seamless sales management"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Start Getting Qualified Property Leads"
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
              question: 'What type of leads can I expect?',
              answer: 'We generate verified buyer, seller, and renter leads specific to your property type and location.',
              icon: React.createElement(IconUserCheck, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Do you filter out junk inquiries?',
              answer: 'Yes. We use intent-based targeting, call validation, and forms to ensure only qualified leads reach you.',
              icon: React.createElement(IconTarget, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Can I integrate leads into my CRM?',
              answer: 'Absolutely. We connect your campaigns directly to CRMs like Zoho, Salesforce, or HubSpot for smooth tracking.',
              icon: React.createElement(IconUsers, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'How quickly can I see results?',
              answer: 'Most real estate campaigns start generating property leads within 7–10 days of launch.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Need More ",
      headlineKeywords: [
        "Property Buyer Leads?",
        "Qualified Seller Inquiries?",
        "High-Intent Real Estate Clients?",
        "Local Property Investors?",
        "Consistent Real Estate Leads?"
      ],
      brandLine: [
        { text: "🎯 Turn Clicks into Property Closures", gradient: false }
      ],
      subheadline: "We help real estate agents, brokers, and developers generate *high-quality, verified property leads* that close faster.",
      ctaButtons: [
        { icon: React.createElement(IconPhoneCall, { size: 28 }), text: "Start Lead Generation Now", link: "/contact" },
        { icon: React.createElement(IconUserCheck, { size: 28 }), text: "Get Free Lead Audit", link: "tel:+918607119872", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconBuildingSkyscraper, { size: 32 }),
          title: "250+ Projects",
          description: "Boosted with lead funnels"
        },
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "15,000+ Leads",
          description: "Generated for real estate"
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "4.5X ROI",
          description: "Average across campaigns"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Digi Aerotech for", gradient: false },
        { text: "Real Estate Lead Generation?", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconTarget, { size: 28 }),
          title: "Hyper-Targeted Campaigns",
          description: "We only target people actively looking to buy, rent, or invest in properties."
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "Qualified & Verified Leads",
          description: "Every lead is intent-driven, reducing time wasted on junk inquiries."
        },
        {
          icon: React.createElement(IconHome, { size: 28 }),
          title: "Property-Specific Funnels",
          description: "Custom lead pages for apartments, plots, villas, or commercial spaces."
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "ROI-First Approach",
          description: "We focus on leads that convert into site visits and closures."
        }
      ],
      cta: {
        text: "Get Qualified Real Estate Leads",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Lead Generation Process for Real Estate',
      subtitle: 'QUALITY LEADS THAT CONVERT',
      className: 'border-t border-border dark:border-gray-700',
      description: 'We combine smart targeting, automation, and nurturing to generate *qualified property leads* that drive real sales.',
      steps: [
        {
          id: 1,
          title: 'Market Research',
          description: 'We study your target city, buyer demographics, and property types to align campaigns with real demand.'
        },
        {
          id: 2,
          title: 'Multi-Channel Ads',
          description: 'We run Google, Meta, and LinkedIn campaigns targeting high-intent property seekers.'
        },
        {
          id: 3,
          title: 'Landing Pages & CTAs',
          description: 'Property-specific pages optimized with inquiry forms, offers, and strong CTAs to capture leads instantly.'
        },
        {
          id: 4,
          title: 'Lead Capture & Validation',
          description: 'Automated systems filter junk data, validate phone/email, and capture only qualified prospects.'
        },
        {
          id: 5,
          title: 'CRM & Follow-Ups',
          description: 'We integrate leads into your CRM or spreadsheets and set up follow-up automation for better conversions.'
        },
        {
          id: 6,
          title: 'Optimization & Scaling',
          description: 'Campaigns are continuously monitored, optimized, and scaled to maximize ROI.'
        }
      ]
    },
    cta: {
      title: 'Need More Property Buyer & Seller Leads?',
      subtitle: 'SMART LEAD GENERATION THAT CLOSES DEALS',
      description: 'Stop chasing junk inquiries. Get verified real estate leads that convert into site visits & closures.',
    }
  }
};
