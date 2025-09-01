import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconTarget, IconBuildingSkyscraper, IconTrendingUp, IconBriefcase, IconRocket, 
  IconChartBar, IconWorld, IconUsers, IconMessage2, IconCoins
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'google-ads',
  business: 'b2b-services',
  variants: {
    hero: 'variant1',
    whyChooseUs: 'variant2',
    process: 'variant1',
    testimonials: 'variant1'
  },
  data: {
    slug: 'google-ads-b2b',
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
            { text: "Waste Money on Ads", gradient: true, gradientClass: "from-red-500 via-orange-500 to-yellow-500" }
          ],
          subheadline: "Running Google Ads for B2B is not the same as B2C. Most agencies treat them the same, burning budgets with no ROI.",
          painPoints: [
            "Generic campaigns attracting unqualified traffic",
            "High CPCs with no conversions from decision-makers",
            "No focus on long sales cycles of B2B",
            "Poor landing pages that fail to convert enterprise buyers",
            "No proper tracking of leads & inquiries",
            "Competitors outranking you in high-value keywords"
          ],
          solutionPoints: [
            "B2B-focused keyword research targeting decision-makers",
            "Ad copy and creatives crafted for enterprise intent",
            "Smart bidding strategies for high-ticket conversions",
            "Landing pages optimized for B2B lead capture",
            "Conversion tracking & ROI measurement systems",
            "Industry-specific campaigns for maximum relevance"
          ],
          cta: {
            icon: React.createElement(IconRocket, { size: 20 }),
            text: "Fix My B2B Ads Now"
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
              question: 'Do Google Ads work for B2B companies?',
              answer: 'Yes, when structured for long sales cycles and decision-maker intent. Our campaigns bring enterprise leads, not just traffic.',
              icon: React.createElement(IconBriefcase, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Which industries benefit most from B2B Ads?',
              answer: 'SaaS, IT services, logistics, consulting, finance, and manufacturing — any B2B vertical that needs enterprise lead generation.',
              icon: React.createElement(IconBuildingSkyscraper, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'What budget do B2B Ads require?',
              answer: 'Budgets vary, but unlike B2C, quality leads matter more than volume. We optimize so every dollar goes toward decision-makers.',
              icon: React.createElement(IconCoins, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'How do you track ROI?',
              answer: 'We set up conversion tracking for calls, forms, and CRM integrations to show clear ROI from ad spend.',
              icon: React.createElement(IconChartBar, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Do you create landing pages too?',
              answer: 'Yes, we design high-converting B2B landing pages with trust-building elements for enterprise buyers.',
              icon: React.createElement(IconMessage2, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Turn Clicks into Enterprise Clients",
      headlineKeywords: [
        "Google Ads for B2B Services",
        "Lead Generation Ads",
        "Enterprise PPC Campaigns",
        "B2B Google Advertising",
        "Decision-Maker Targeting"
      ],
      brandLine: [
        { text: "🚀 Digi Aerotech helps B2B firms generate high-value enterprise leads using precision-targeted Google Ads campaigns.", gradient: false }
      ],
      subheadline: "Stop wasting money on irrelevant clicks. With Digi Aerotech’s B2B Ads strategy, every dollar drives decision-maker engagement, qualified leads, and measurable ROI.",
      ctaButtons: [
        { icon: React.createElement(IconRocket, { size: 28 }), text: "Start My Campaign", link: "/contact" },
        { icon: React.createElement(IconTrendingUp, { size: 28 }), text: "Free B2B Ads Audit", link: "/audit", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconTarget, { size: 32 }),
          title: "Decision-Maker Targeting",
          description: "Reach CEOs, CTOs, and procurement heads directly"
        },
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "Qualified Leads",
          description: "Focus on quality, not vanity metrics"
        },
        {
          icon: React.createElement(IconChartBar, { size: 32 }),
          title: "ROI Reporting",
          description: "Clear visibility on lead cost & conversions"
        },
        {
          icon: React.createElement(IconWorld, { size: 32 }),
          title: "Industry Customization",
          description: "Tailored ads for SaaS, IT, logistics & more"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why B2B Firms Trust ", gradient: false },
        { text: "Digi Aerotech’s Google Ads", gradient: true, gradientClass: "from-blue-500 via-green-500 to-purple-500" }
      ],
      trustPoints: [
        { icon: React.createElement(IconTarget, { size: 28 }), title: "B2B Ad Expertise", description: "We understand B2B funnels and decision-making journeys." },
        { icon: React.createElement(IconBuildingSkyscraper, { size: 28 }), title: "Enterprise Keywords", description: "We research keywords that buyers actually use." },
        { icon: React.createElement(IconTrendingUp, { size: 28 }), title: "ROI-Driven Campaigns", description: "No vanity clicks — only revenue-generating ads." },
        { icon: React.createElement(IconChartBar, { size: 28 }), title: "Advanced Tracking", description: "From impressions to CRM integration, we track it all." },
        { icon: React.createElement(IconBriefcase, { size: 28 }), title: "Industry Coverage", description: "We’ve scaled ads across IT, SaaS, logistics, and consulting." },
        { icon: React.createElement(IconRocket, { size: 28 }), title: "Full Funnel Approach", description: "We build ads for awareness, consideration, and conversion." }
      ],
      cta: {
        text: "Launch My B2B Ads Today",
        link: "#contact",
        icon: React.createElement(IconRocket, { size: 20 })
      }
    },
    process: {
      title: 'Our B2B Google Ads Process',
      subtitle: 'PRECISION → QUALIFIED LEADS → ROI',
      description: 'We design campaigns around B2B buying psychology, ensuring you attract decision-makers, not casual browsers.',
      steps: [
        { id: 1, title: 'Audit & Research', description: 'Analyze industry, competitors & decision-maker intent' },
        { id: 2, title: 'Keyword Mapping', description: 'Choose enterprise-relevant, high-value keywords' },
        { id: 3, title: 'Ad Creation', description: 'Craft compelling ad copy & creatives for B2B buyers' },
        { id: 4, title: 'Landing Page Setup', description: 'Optimize pages for conversions & lead capture' },
        { id: 5, title: 'Smart Bidding & Optimization', description: 'Use AI-driven bidding for best ROI' },
        { id: 6, title: 'Tracking & Reporting', description: 'Full visibility on cost per lead & ROI' }
      ]
    },
    testimonials: {
      title: [
        { text: "B2B Success Stories with ", gradient: false },
        { text: "Digi Aerotech’s Google Ads", gradient: true, gradientClass: "from-blue-500 via-green-500 to-purple-500" }
      ],
      description: 'From SaaS startups to established IT consultancies, Digi Aerotech’s B2B ad campaigns deliver consistent enterprise leads.',
      testimonials: [
        {
          id: '1',
          message: 'We were burning ad spend with no results before. Digi Aerotech restructured everything and now we generate qualified enterprise leads consistently.',
          highlight: 'High-Quality Enterprise Leads',
          stars: 5,
          name: 'Nitin Verma',
          designation: 'Founder',
          company: 'CloudEdge Solutions'
        },
        {
          id: '2',
          message: 'Their landing page + ad strategy helped us close two Fortune 500 contracts. Best ROI we’ve seen from ads.',
          highlight: 'Fortune 500 Conversions',
          stars: 5,
          name: 'Sonal Mehra',
          designation: 'CMO',
          company: 'FinCore Consulting'
        }
      ]
    },
    cta: {
      title: 'Ready to Scale Your B2B Leads?',
      subtitle: 'Google Ads That Bring Decision-Makers to You',
      description: 'Work with Digi Aerotech to build precision-targeted Google Ads campaigns that generate enterprise-level ROI.',
    }
  }
};
