import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconSearch, IconTrendingUp, IconRocket, IconUsers, IconWorld, IconLink,
  IconChartBar, IconTarget, IconReportAnalytics, IconDeviceMobile, IconBuildingStore
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'seo-services',
  business: 'b2c-services',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant2',
    process: 'variant1',
  },
  data: {
    slug: 'seo-services-b2c',
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
            { text: "Why B2C Businesses Struggle ", gradient: false },
            { text: "Without SEO Services", gradient: true, gradientClass: "from-green-500 via-blue-500 to-purple-500" }
          ],
          subheadline: "If your business doesn’t appear on the first page of Google, you’re losing sales daily to competitors who do.",
          painPoints: [
            "Website not ranking for local searches",
            "Low traffic and fewer inquiries",
            "Competitors always appearing above you",
            "High ad spend without organic visibility",
            "Outdated SEO hurting credibility",
            "Not optimized for mobile & voice searches"
          ],
          solutionPoints: [
            "Local SEO optimization to rank in maps & local packs",
            "On-page SEO with keyword-rich content",
            "Technical SEO for speed, security & mobile",
            "High-quality backlinks for authority",
            "Content strategy to attract & convert",
            "Ongoing monitoring & SEO audits"
          ],
          cta: {
            icon: React.createElement(IconSearch, { size: 20 }),
            text: "Rank My Business on Google"
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
              question: 'Why do B2C businesses need SEO?',
              answer: 'SEO helps local and e-commerce B2C businesses rank higher on Google, drive organic traffic, reduce ad spend, and attract quality customers searching for their services.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'How long does SEO take to show results?',
              answer: 'Most B2C businesses see results within 3-6 months depending on competition, keywords, and consistency of SEO efforts.',
              icon: React.createElement(IconRocket, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Do you provide local SEO for B2C services?',
              answer: 'Yes — we optimize your Google Business Profile, citations, reviews, and local keywords to ensure you appear in “near me” searches.',
              icon: React.createElement(IconBuildingStore, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Is SEO better than paid ads for B2C businesses?',
              answer: 'Paid ads give instant results, but SEO ensures long-term visibility, reduced costs, and higher trust. The best strategy is combining both.',
              icon: React.createElement(IconChartBar, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Do you track SEO performance?',
              answer: 'Yes — with transparent reports showing rankings, traffic, leads, and ROI so you know exactly how SEO is growing your business.',
              icon: React.createElement(IconReportAnalytics, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Turn Google Searches Into Customers",
      headlineKeywords: [
        "SEO Services for B2C Businesses",
        "Local SEO for Restaurants & Salons",
        "E-commerce SEO for Fashion & Retail",
        "SEO for Gyms, Healthcare & Clinics",
        "Organic Growth Strategies for B2C"
      ],
      brandLine: [
        { text: "📈 Get found by your customers when they search for services like yours.", gradient: false }
      ],
      subheadline: "Digi Aerotech’s SEO services help B2C businesses rank higher on Google, attract organic traffic, and turn searchers into paying customers. From local SEO to technical optimization, we ensure long-term growth and visibility.",
      ctaButtons: [
        { icon: React.createElement(IconRocket, { size: 28 }), text: "Start My SEO Growth", link: "/contact" },
        { icon: React.createElement(IconUsers, { size: 28 }), text: "Free SEO Audit", link: "/audit", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconWorld, { size: 32 }),
          title: "Increased Visibility",
          description: "Appear in Google’s top results & maps"
        },
        {
          icon: React.createElement(IconDeviceMobile, { size: 32 }),
          title: "Mobile SEO",
          description: "Optimize for mobile & voice searches"
        },
        {
          icon: React.createElement(IconLink, { size: 32 }),
          title: "Authority Backlinks",
          description: "Boost rankings with quality link building"
        },
        {
          icon: React.createElement(IconTarget, { size: 32 }),
          title: "Targeted Keywords",
          description: "Rank for the exact services customers search"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why B2C Brands Choose ", gradient: false },
        { text: "Digi Aerotech for SEO Services", gradient: true, gradientClass: "from-green-500 via-blue-500 to-purple-500" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconSearch, { size: 28 }),
          title: "Local SEO Experts",
          description: "Rank in local searches and maps to capture nearby customers."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Proven Track Record",
          description: "We’ve ranked multiple B2C businesses on Page 1 of Google."
        },
        {
          icon: React.createElement(IconChartBar, { size: 28 }),
          title: "Data-Driven SEO",
          description: "Keyword research, competitor analysis & transparent reports."
        },
        {
          icon: React.createElement(IconWorld, { size: 28 }),
          title: "Holistic SEO",
          description: "On-page, off-page, content & technical optimization."
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "B2C Industry Focus",
          description: "Specialized strategies for salons, gyms, retail & restaurants."
        },
        {
          icon: React.createElement(IconTarget, { size: 28 }),
          title: "ROI-Centered Approach",
          description: "We focus on leads & conversions, not just rankings."
        }
      ],
      cta: {
        text: "Boost My Rankings",
        link: "#contact",
        icon: React.createElement(IconSearch, { size: 20 })
      }
    },
    process: {
      title: 'Our SEO Process for B2C Businesses',
      subtitle: 'VISIBILITY → TRAFFIC → LEADS → SALES',
      description: 'We follow a structured SEO framework that drives both search rankings and customer conversions.',
      steps: [
        { id: 1, title: 'Audit & Research', description: 'Analyze competitors, keywords & current performance.' },
        { id: 2, title: 'On-Page SEO', description: 'Optimize titles, descriptions, headings & content.' },
        { id: 3, title: 'Technical SEO', description: 'Fix speed, indexing, security & mobile optimization.' },
        { id: 4, title: 'Content Strategy', description: 'Create engaging blogs, guides & landing pages.' },
        { id: 5, title: 'Link Building', description: 'Acquire high-quality backlinks for authority.' },
        { id: 6, title: 'Reporting & Scaling', description: 'Monthly reports & continuous optimization.' }
      ]
    },
    cta: {
      title: 'Ready to Rank Your B2C Business on Page 1?',
      subtitle: 'LOCAL SEO → ORGANIC TRAFFIC → LEADS → SALES',
      description: 'Digi Aerotech’s SEO services help salons, restaurants, gyms, fashion brands, and retailers dominate Google searches and attract paying customers.',
    }
  }
};
