import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconTarget, IconBuildingSkyscraper, IconTrendingUp, IconBriefcase, IconRocket, 
  IconChartBar, IconWorld, IconUsers, IconMessage2, IconCoins
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'lead-generation',
  business: 'b2b-services',
  variants: {
    hero: 'variant1',
    whyChooseUs: 'variant2',
    process: 'variant1',
  },
  data: {
    slug: 'lead-generation-b2b',
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
            { text: "Why Most B2B Companies ", gradient: false },
            { text: "Struggle with Leads", gradient: true, gradientClass: "from-red-500 via-orange-500 to-yellow-500" }
          ],
          subheadline: "Generating high-quality B2B leads requires precision targeting and deep industry knowledge. Most companies either get irrelevant leads or none at all.",
          painPoints: [
            "Wasting time on unqualified leads",
            "Difficulty reaching decision-makers (CXOs, procurement heads, managers)",
            "Long sales cycles with no nurturing process",
            "Cold outreach with low conversion rates",
            "No tracking or visibility on lead sources",
            "Competitors dominating B2B lead channels"
          ],
          solutionPoints: [
            "Targeted lead generation campaigns focused on decision-makers",
            "Multi-channel outreach (Google Ads, LinkedIn, Email, SEO)",
            "Lead nurturing funnels designed for long sales cycles",
            "Qualification frameworks to filter out low-value leads",
            "CRM integration & pipeline tracking",
            "Industry-specific lead generation strategies"
          ],
          cta: {
            icon: React.createElement(IconRocket, { size: 20 }),
            text: "Start My B2B Leads Campaign"
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
              question: 'Do you provide leads or generate them?',
              answer: 'We don’t sell generic lists. We create customized campaigns that generate fresh, qualified B2B leads directly for your business.',
              icon: React.createElement(IconBriefcase, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Which industries do you serve?',
              answer: 'We specialize in SaaS, IT, consulting, finance, logistics, healthcare, and other B2B verticals.',
              icon: React.createElement(IconBuildingSkyscraper, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'What makes B2B lead generation different from B2C?',
              answer: 'B2B requires targeting decision-makers, nurturing over longer sales cycles, and focusing on quality over volume.',
              icon: React.createElement(IconUsers, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'How do you track and report leads?',
              answer: 'We integrate with CRMs, track calls, form submissions, and provide detailed ROI-based reporting.',
              icon: React.createElement(IconChartBar, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Do you run LinkedIn lead generation too?',
              answer: 'Yes. LinkedIn Ads + InMail outreach is one of our strongest channels for high-value B2B leads.',
              icon: React.createElement(IconMessage2, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "B2B Leads That Convert Into Revenue",
      headlineKeywords: [
        "B2B Lead Generation Services",
        "Enterprise Lead Campaigns",
        "Decision-Maker Targeting",
        "Qualified B2B Leads",
        "Pipeline Growth"
      ],
      brandLine: [
        { text: "🚀 Digi Aerotech helps B2B firms fill their pipeline with qualified enterprise leads through precision-targeted campaigns.", gradient: false }
      ],
      subheadline: "No more random cold calls or low-quality lists. We build predictable lead generation systems that deliver decision-makers, not tire-kickers.",
      ctaButtons: [
        { icon: React.createElement(IconRocket, { size: 28 }), text: "Generate Leads Now", link: "/contact" },
        { icon: React.createElement(IconTrendingUp, { size: 28 }), text: "Free Lead Audit", link: "/audit", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconTarget, { size: 32 }),
          title: "Decision-Maker Targeting",
          description: "Reach CXOs, procurement heads & enterprise buyers"
        },
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "Qualified Leads",
          description: "No bulk lists, only fresh high-value leads"
        },
        {
          icon: React.createElement(IconChartBar, { size: 32 }),
          title: "ROI Tracking",
          description: "End-to-end tracking of every lead source"
        },
        {
          icon: React.createElement(IconWorld, { size: 32 }),
          title: "Industry Customization",
          description: "Tailored strategies for SaaS, IT, consulting & more"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why B2B Firms Trust ", gradient: false },
        { text: "Digi Aerotech for Lead Generation", gradient: true, gradientClass: "from-blue-500 via-green-500 to-purple-500" }
      ],
      trustPoints: [
        { icon: React.createElement(IconTarget, { size: 28 }), title: "B2B Lead Expertise", description: "We design campaigns around long sales cycles & enterprise buyers." },
        { icon: React.createElement(IconBuildingSkyscraper, { size: 28 }), title: "Decision-Maker Access", description: "Direct targeting of CXOs, managers & procurement heads." },
        { icon: React.createElement(IconTrendingUp, { size: 28 }), title: "Multi-Channel Outreach", description: "Google Ads, LinkedIn, SEO & email nurturing combined." },
        { icon: React.createElement(IconChartBar, { size: 28 }), title: "ROI Visibility", description: "Every lead is tracked, reported & tied to revenue." },
        { icon: React.createElement(IconBriefcase, { size: 28 }), title: "Industry Focused", description: "We adapt strategies for SaaS, IT, finance, logistics & more." },
        { icon: React.createElement(IconRocket, { size: 28 }), title: "Scalable Systems", description: "Build predictable, repeatable lead generation funnels." }
      ],
      cta: {
        text: "Start Generating Enterprise Leads",
        link: "#contact",
        icon: React.createElement(IconRocket, { size: 20 })
      }
    },
    process: {
      title: 'Our B2B Lead Generation Process',
      subtitle: 'PRECISION → QUALIFICATION → PIPELINE',
      description: 'We don’t sell leads. We build custom systems that generate & nurture them until they’re ready for your sales team.',
      steps: [
        { id: 1, title: 'Audit & Research', description: 'Identify target industries, decision-makers, and buyer personas' },
        { id: 2, title: 'Channel Strategy', description: 'Select best-fit platforms: Google Ads, LinkedIn, SEO, Email' },
        { id: 3, title: 'Campaign Setup', description: 'Run high-intent, decision-maker-focused campaigns' },
        { id: 4, title: 'Lead Nurturing', description: 'Build trust with content, follow-ups & automation' },
        { id: 5, title: 'Qualification & Filtering', description: 'Score and filter leads to pass only high-value ones' },
        { id: 6, title: 'Tracking & Reporting', description: 'Measure ROI with full funnel visibility' }
      ]
    },
    cta: {
      title: 'Ready to Fill Your Sales Pipeline?',
      subtitle: 'CONSISTENT, QUALIFIED B2B LEADS',
      description: 'Partner with Digi Aerotech to build a lead generation system that connects you with enterprise decision-makers and grows revenue predictably.'
    }
  }
};
