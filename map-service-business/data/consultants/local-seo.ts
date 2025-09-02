import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconSearch, IconTarget, IconMapPin, IconTrendingUp, IconBuilding, 
  IconWorld, IconUsers, IconChartBar, IconPhone, IconArrowRight, IconStar
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'local-seo',
  business: 'consultants',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant3',
    process: 'variant2',
  },
  data: {
    slug: 'local-seo-consultants',
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
            { text: "Why Consultants ", gradient: false },
            { text: "Struggle with Local Visibility", gradient: true, gradientClass: "from-blue-500 via-green-500 to-teal-500" }
          ],
          subheadline: "Consultants often have expertise but remain invisible to potential clients searching locally.",
          painPoints: [
            "Not showing up on Google for local searches",
            "Competitors appearing in the top 3-pack results",
            "Weak or inconsistent online presence",
            "Low credibility due to lack of reviews",
            "Losing walk-in and local client leads",
            "No strategy for Google Maps and geo-based visibility"
          ],
          solutionPoints: [
            "Optimize your Google Business Profile for maximum exposure",
            "Rank higher in the Google Local 3-Pack",
            "Strong keyword-rich consultant website SEO",
            "Reputation management with positive review strategies",
            "Geo-targeted campaigns that bring nearby clients",
            "Consistent visibility across Maps, directories, and local searches"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Boost My Local SEO Now"
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
              question: 'Why is local SEO important for consultants?',
              answer: 'Because most clients search for consultants near them. Local SEO ensures you appear in those searches, driving more inquiries.',
              icon: React.createElement(IconMapPin, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Can local SEO work for niche consultants?',
              answer: 'Yes. Whether you are a financial advisor, business consultant, or career coach, local SEO brings in targeted clients from your city or region.',
              icon: React.createElement(IconTarget, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'How soon can I expect results?',
              answer: 'Local SEO starts showing traction in 3-6 weeks with consistent optimization and improvements.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Do reviews impact my local SEO ranking?',
              answer: 'Yes. Positive reviews on Google significantly increase visibility and trust for consultants.',
              icon: React.createElement(IconStar, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'What’s the difference between SEO and Local SEO?',
              answer: 'SEO focuses on global/national ranking, while Local SEO ensures you dominate searches in your city or region where your clients are.',
              icon: React.createElement(IconWorld, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'Do you provide reporting?',
              answer: 'Yes. We give transparent reports on search rankings, map visibility, and lead growth.',
              icon: React.createElement(IconChartBar, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Want ",
      headlineKeywords: [
        "More Local Clients?",
        "Top Google Rankings?",
        "Local SEO Growth?",
        "Visibility Near You?",
        "Consultant SEO Services?"
      ],
      brandLine: [
        { text: "📍 Appear Where Your Clients Search – Dominate Local SEO for Consultants", gradient: false }
      ],
      subheadline: "Digi Aerotech helps consultants rank in Google’s Local 3-Pack, Maps, and search results – bringing more clients from your area directly to your business.",
      ctaButtons: [
        { icon: React.createElement(IconPhone, { size: 28 }), text: "Get Free SEO Audit", link: "/contact" },
        { icon: React.createElement(IconWorld, { size: 28 }), text: "Talk to SEO Expert", link: "/contact", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "5000+ Local Leads",
          description: "Generated for consultants across niches"
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "3X Visibility",
          description: "Average increase in local search rankings"
        },
        {
          icon: React.createElement(IconBuilding, { size: 32 }),
          title: "30+ Cities",
          description: "Consultants ranked locally across regions"
        },
        {
          icon: React.createElement(IconStar, { size: 32 }),
          title: "Proven Success",
          description: "With consultant SEO & local marketing"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the ", gradient: false },
        { text: "#1 Choice for Consultant Local SEO", gradient: true, gradientClass: "from-blue-500 via-green-500 to-teal-500" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconSearch, { size: 28 }),
          title: "Consultant-Specific SEO",
          description: "We know exactly how consultants attract local clients online."
        },
        {
          icon: React.createElement(IconMapPin, { size: 28 }),
          title: "Google Maps Domination",
          description: "Appear in the local 3-pack and map searches consistently."
        },
        {
          icon: React.createElement(IconTarget, { size: 28 }),
          title: "Geo-Targeted Campaigns",
          description: "We target searches in your area for maximum relevance."
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Faster Local Growth",
          description: "Our local SEO tactics drive visibility in weeks, not months."
        },
        {
          icon: React.createElement(IconBuilding, { size: 28 }),
          title: "Proven Consultant Case Studies",
          description: "We’ve scaled consultants from invisible to authority in their regions."
        },
        {
          icon: React.createElement(IconStar, { size: 28 }),
          title: "Transparent Reporting",
          description: "Track your rankings, leads, and ROI with clarity."
        }
      ],
      cta: {
        text: "Rank Me Higher Locally",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Local SEO Process for Consultants',
      subtitle: 'STEP-BY-STEP VISIBILITY GROWTH',
      description: 'We design local SEO strategies that make your consulting practice visible and trusted.',
      steps: [
        {
          id: 1,
          title: 'Local Audit',
          description: 'Identify current rankings, issues, and competitor landscape.'
        },
        {
          id: 2,
          title: 'GMB Optimization',
          description: 'Optimize your Google Business Profile for maximum impact.'
        },
        {
          id: 3,
          title: 'On-Page SEO',
          description: 'Optimize your website with local keywords and content.'
        },
        {
          id: 4,
          title: 'Review & Reputation',
          description: 'Generate and manage reviews to build authority.'
        },
        {
          id: 5,
          title: 'Local Citations',
          description: 'List and optimize profiles on directories and maps.'
        },
        {
          id: 6,
          title: 'Tracking & Scaling',
          description: 'Monitor growth and expand to new nearby markets.'
        }
      ]
    },
    cta: {
      title: 'Want More Local Clients for Your Consulting Practice?',
      subtitle: 'LOCAL SEO SERVICES FOR CONSULTANTS',
      description: 'Book a free local SEO audit with Digi Aerotech and start dominating Google searches in your city.',
    }
  }
};
