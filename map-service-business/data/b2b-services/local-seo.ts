import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconMap2, IconTarget, IconBuildingSkyscraper, IconSearch, IconTrendingUp,
  IconRocket, IconChartBar, IconWorld, IconUsers, IconCheck
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'local-seo',
  business: 'b2b-services',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant1',
    process: 'variant2',
    testimonials: 'variant1'
  },
  data: {
    slug: 'local-seo-b2b',
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
            { text: "Why B2B Firms ", gradient: false },
            { text: "Miss Local Leads", gradient: true, gradientClass: "from-blue-500 via-indigo-500 to-purple-500" }
          ],
          subheadline: "Even global B2B companies depend on strong local visibility to capture nearby decision-makers and corporate buyers.",
          painPoints: [
            "Not appearing in Google Maps or local 3-pack results",
            "Inconsistent business information across directories",
            "Competitors dominating local search visibility",
            "No presence in industry-specific local listings",
            "Low trust due to lack of reviews or ratings",
            "Missed opportunities for regional B2B partnerships"
          ],
          solutionPoints: [
            "Google Business Profile optimization for B2B visibility",
            "NAP consistency across all directories",
            "Local keyword optimization for industry & region",
            "Review & reputation management for credibility",
            "Schema markup & technical local SEO setup",
            "Custom strategies for service areas & multi-location businesses"
          ],
          cta: {
            icon: React.createElement(IconRocket, { size: 20 }),
            text: "Boost My Local B2B SEO"
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
              question: 'Is Local SEO relevant for B2B companies?',
              answer: 'Yes. Even if you serve global clients, local SEO ensures visibility for nearby enterprise buyers, vendors, and decision-makers.',
              icon: React.createElement(IconBuildingSkyscraper, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Do you optimize Google Business Profiles for B2B?',
              answer: 'Absolutely. We structure GBP with B2B-focused keywords, categories, and service descriptions that attract corporate buyers.',
              icon: React.createElement(IconMap2, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'How do reviews impact B2B Local SEO?',
              answer: 'Positive reviews build credibility and influence decision-makers searching for reliable partners.',
              icon: React.createElement(IconCheck, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Do you handle multi-location B2B firms?',
              answer: 'Yes. We optimize each branch or office for maximum local visibility while keeping brand consistency.',
              icon: React.createElement(IconWorld, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'How long until results show?',
              answer: 'B2B local SEO typically shows strong improvements within 2–3 months, with lasting impact over time.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "B2B Local SEO That Drives Enterprise Clients",
      headlineKeywords: [
        "Local SEO for B2B Companies",
        "Google Maps Optimization",
        "Enterprise Local Visibility",
        "B2B Search Rankings",
        "Corporate Client Targeting"
      ],
      brandLine: [
        { text: "📍 Digi Aerotech helps B2B firms dominate local search, attract decision-makers, and build stronger regional partnerships.", gradient: false }
      ],
      subheadline: "Your next enterprise deal could be searching locally. Don’t let competitors take your spot in Google search & Maps.",
      ctaButtons: [
        { icon: React.createElement(IconRocket, { size: 28 }), text: "Start Local SEO Now", link: "/contact" },
        { icon: React.createElement(IconSearch, { size: 28 }), text: "Free Local SEO Audit", link: "/audit", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconMap2, { size: 32 }),
          title: "Google Maps Visibility",
          description: "Rank in top 3-pack for high-intent B2B searches"
        },
        {
          icon: React.createElement(IconTarget, { size: 32 }),
          title: "Hyper-Targeted Leads",
          description: "Capture enterprise clients in your service area"
        },
        {
          icon: React.createElement(IconChartBar, { size: 32 }),
          title: "Data-Driven SEO",
          description: "Track calls, visits & inquiries from local searches"
        },
        {
          icon: React.createElement(IconBuildingSkyscraper, { size: 32 }),
          title: "B2B-Centric Strategy",
          description: "Tailored SEO for SaaS, IT, consulting & logistics"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why B2B Companies Choose ", gradient: false },
        { text: "Digi Aerotech for Local SEO", gradient: true, gradientClass: "from-blue-500 via-indigo-500 to-purple-500" }
      ],
      trustPoints: [
        { icon: React.createElement(IconTarget, { size: 28 }), title: "B2B-Specific Local SEO", description: "We craft SEO campaigns designed for corporate buyers, not just local consumers." },
        { icon: React.createElement(IconMap2, { size: 28 }), title: "Google Business Profile Mastery", description: "Complete optimization for maximum enterprise visibility." },
        { icon: React.createElement(IconTrendingUp, { size: 28 }), title: "ROI-Driven Approach", description: "Every tactic is tied to real leads and business growth." },
        { icon: React.createElement(IconUsers, { size: 28 }), title: "Reputation Building", description: "Review strategies that build long-term credibility with decision-makers." },
        { icon: React.createElement(IconWorld, { size: 28 }), title: "Multi-Location Expertise", description: "Perfect for consulting firms, IT providers, and logistics companies." },
        { icon: React.createElement(IconChartBar, { size: 28 }), title: "Transparent Reporting", description: "Track ROI with clear, actionable data every month." }
      ],
      cta: {
        text: "Dominate Local B2B Search",
        link: "#contact",
        icon: React.createElement(IconRocket, { size: 20 })
      }
    },
    process: {
      title: 'Our Local SEO Process for B2B',
      subtitle: 'VISIBILITY → TRUST → LEADS',
      description: 'We focus on building credibility and visibility where it matters most: local Google search and Maps.',
      steps: [
        { id: 1, title: 'Audit & Research', description: 'Analyze local visibility and competitor benchmarks' },
        { id: 2, title: 'GBP Optimization', description: 'Optimize Google Business Profile for B2B categories & keywords' },
        { id: 3, title: 'On-Page SEO', description: 'Optimize website with local landing pages & schema' },
        { id: 4, title: 'Citations & Listings', description: 'Ensure NAP consistency across directories & B2B platforms' },
        { id: 5, title: 'Reviews & Reputation', description: 'Build and manage reviews to boost trust' },
        { id: 6, title: 'Tracking & Reporting', description: 'Monthly reporting of rankings, calls & inquiries' }
      ]
    },
    testimonials: {
      title: [
        { text: "B2B Companies Growing with ", gradient: false },
        { text: "Digi Aerotech’s Local SEO", gradient: true, gradientClass: "from-blue-500 via-indigo-500 to-purple-500" }
      ],
      description: 'From IT service providers to enterprise consultants, we help B2B firms dominate their local markets.',
      testimonials: [
        {
          id: '1',
          message: 'Our IT consulting firm now appears in the top 3 for “Enterprise IT Solutions near me.” Leads have increased 60% in 3 months.',
          highlight: '60% More Leads',
          stars: 5,
          name: 'Ramesh Khanna',
          designation: 'Director',
          company: 'TechCore Solutions'
        },
        {
          id: '2',
          message: 'Digi Aerotech put our logistics business on the map—literally. We now receive steady inquiries from corporate buyers in our region.',
          highlight: 'Consistent Corporate Inquiries',
          stars: 5,
          name: 'Neha Kapoor',
          designation: 'CMO',
          company: 'TransGlobe Logistics'
        }
      ]
    },
    cta: {
      title: 'Ready to Attract Enterprise Clients Locally?',
      subtitle: 'DOMINATE LOCAL SEARCH & GOOGLE MAPS',
      description: 'Partner with Digi Aerotech to ensure your B2B firm gets found by the right decision-makers at the right time.',
    }
  }
};
