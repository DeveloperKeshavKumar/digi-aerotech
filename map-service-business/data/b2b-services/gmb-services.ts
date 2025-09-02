import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconBuildingSkyscraper, IconGlobe, IconUsers, IconTarget, IconMapPin, 
  IconTrendingUp, IconRocket, IconChartBar, IconWorld, IconShieldCheck,
  IconMessage2, IconBriefcase
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'gmb-services',
  business: 'b2b-services',
  variants: {
    hero: 'variant1',
    whyChooseUs: 'variant2',
    process: 'variant1',
  },
  data: {
    slug: 'gmb-services-b2b',
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
            { text: "Why B2B Companies ", gradient: false },
            { text: "Struggle Without GMB Optimization", gradient: true, gradientClass: "from-green-500 via-blue-500 to-purple-500" }
          ],
          subheadline: "B2B buyers research vendors, partners, and consultants online before making any deal. Without an optimized Google Business Profile (GMB), your company risks invisibility and lost trust.",
          painPoints: [
            "Not showing up in Google Maps or local business packs",
            "Incorrect or inconsistent business details scaring away enterprise buyers",
            "Weak reviews damaging credibility with decision-makers",
            "Competitors capturing leads in your service areas",
            "Low trust factor without posts, updates, and active presence",
            "No insights into how clients are finding or contacting you"
          ],
          solutionPoints: [
            "Comprehensive Google Business Profile setup & optimization",
            "Keyword-rich descriptions tailored for B2B search intent",
            "Review generation & reputation management for trust building",
            "Regular posts, service updates & industry content",
            "Local SEO strategies to dominate the 'Google 3-Pack'",
            "Tracking calls, inquiries, and engagement from GMB"
          ],
          cta: {
            icon: React.createElement(IconRocket, { size: 20 }),
            text: "Optimize My B2B GMB Now"
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
              question: 'Why is GMB important for B2B companies?',
              answer: 'B2B buyers look for credibility and presence online. An optimized GMB profile helps your business appear in local searches, build trust, and generate enterprise leads.',
              icon: React.createElement(IconBuildingSkyscraper, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Which B2B industries benefit most?',
              answer: 'IT, SaaS, consulting, logistics, finance, manufacturing, and professional services — any B2B company can benefit from strong Google Business visibility.',
              icon: React.createElement(IconBriefcase, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Can GMB generate high-value B2B leads?',
              answer: 'Yes. With proper optimization, reviews, and local SEO, GMB drives quality enterprise leads, not just walk-in traffic.',
              icon: React.createElement(IconTarget, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Do you handle review management?',
              answer: 'Absolutely. We set up systems for generating positive reviews, handling negative ones, and showcasing credibility.',
              icon: React.createElement(IconMessage2, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Can this work for global B2B services?',
              answer: 'Yes. Even global B2B firms use GMB for local trust-building in key markets, and we tailor strategies for multi-location businesses.',
              icon: React.createElement(IconWorld, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Put Your B2B Company on the Map",
      headlineKeywords: [
        "GMB for B2B Services",
        "Google Business Profile Optimization",
        "Local SEO for B2B",
        "Enterprise Lead Visibility",
        "Build Trust Online"
      ],
      brandLine: [
        { text: "🏢 Digi Aerotech helps B2B companies dominate local search & Maps with powerful GMB optimization strategies.", gradient: false }
      ],
      subheadline: "Get discovered by decision-makers searching for B2B services in your region. Build trust, generate inquiries, and stay ahead of competitors with a fully optimized Google Business Profile.",
      ctaButtons: [
        { icon: React.createElement(IconRocket, { size: 28 }), text: "Start My GMB Optimization", link: "/contact" },
        { icon: React.createElement(IconTrendingUp, { size: 28 }), text: "Free GMB Audit", link: "/audit", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconMapPin, { size: 32 }),
          title: "Local 3-Pack Visibility",
          description: "Appear in top local searches for B2B services"
        },
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "Decision-Maker Trust",
          description: "Reviews & case studies that win enterprise buyers"
        },
        {
          icon: React.createElement(IconChartBar, { size: 32 }),
          title: "Lead Tracking",
          description: "Monitor calls, inquiries & profile engagement"
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 32 }),
          title: "Brand Credibility",
          description: "Active updates, posts & verified presence"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why B2B Leaders Trust ", gradient: false },
        { text: "Digi Aerotech for GMB Services", gradient: true, gradientClass: "from-green-500 via-blue-500 to-purple-500" }
      ],
      trustPoints: [
        { icon: React.createElement(IconTarget, { size: 28 }), title: "B2B-Focused Optimization", description: "We tailor your profile to attract enterprise clients, not just foot traffic." },
        { icon: React.createElement(IconBuildingSkyscraper, { size: 28 }), title: "Industry Coverage", description: "From SaaS to logistics to consulting — we’ve optimized profiles across B2B domains." },
        { icon: React.createElement(IconTrendingUp, { size: 28 }), title: "Lead Quality First", description: "Our strategies generate serious inquiries, not vanity clicks." },
        { icon: React.createElement(IconChartBar, { size: 28 }), title: "Transparent ROI", description: "Track every call, inquiry, and conversion from GMB." },
        { icon: React.createElement(IconWorld, { size: 28 }), title: "Local + Global Reach", description: "We optimize profiles for single-location & multi-market enterprises." },
        { icon: React.createElement(IconShieldCheck, { size: 28 }), title: "Reputation Management", description: "We build authority with real reviews & engagement strategies." }
      ],
      cta: {
        text: "Get My B2B GMB Optimized",
        link: "#contact",
        icon: React.createElement(IconRocket, { size: 20 })
      }
    },
    process: {
      title: 'Our B2B GMB Optimization Process',
      subtitle: 'VISIBILITY → TRUST → LEADS',
      description: 'We use a proven framework to ensure your B2B company’s Google Business Profile ranks higher, builds trust, and generates qualified inquiries.',
      steps: [
        { id: 1, title: 'Audit & Setup', description: 'Analyze your current profile and set up missing details.' },
        { id: 2, title: 'Keyword Optimization', description: 'Optimize descriptions, services & attributes for B2B searches.' },
        { id: 3, title: 'Review Generation', description: 'Create systems to build consistent 5-star reviews.' },
        { id: 4, title: 'Content & Updates', description: 'Publish posts, offers, and case studies for credibility.' },
        { id: 5, title: 'Local SEO Boost', description: 'Rank in the Google 3-Pack and dominate Maps.' },
        { id: 6, title: 'Tracking & Reporting', description: 'Monitor calls, inquiries & ROI for complete transparency.' }
      ]
    },
    cta: {
      title: 'Ready to Dominate Local Search?',
      subtitle: 'Get More Qualified B2B Inquiries from Google',
      description: 'Partner with Digi Aerotech to optimize your Google Business Profile and start generating high-value enterprise leads today.',
    }
  }
};
