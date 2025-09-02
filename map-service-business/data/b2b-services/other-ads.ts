import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconRocket, IconUsers, IconBriefcase, IconWorld, IconTrendingUp,
  IconBuildingSkyscraper, IconTarget, IconChartBar, IconCheck, IconAd, IconNetwork
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'other-ads',
  business: 'b2b-services',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant1',
    process: 'variant1',
  },
  data: {
    slug: 'b2b-other-ads',
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
            { text: "Why B2B Companies Miss Out Without ", gradient: false },
            { text: "Multi-Channel Ads", gradient: true, gradientClass: "from-blue-500 via-indigo-500 to-purple-600" }
          ],
          subheadline: "Relying only on Google or Meta ads isn’t enough for B2B. Buyers spend time on LinkedIn, industry platforms, and niche portals — and if you’re not visible there, competitors are.",
          painPoints: [
            "Limited reach when depending only on search ads",
            "Failure to capture decision-makers on LinkedIn & niche portals",
            "Low trust due to missing presence on industry platforms",
            "Lost opportunities in retargeting & multi-channel touchpoints",
            "Difficulty engaging stakeholders across longer B2B cycles",
            "Poor ROI from generic, non-targeted campaigns"
          ],
          solutionPoints: [
            "Targeted LinkedIn Ads for decision-makers & professionals",
            "Programmatic display ads across B2B-focused sites",
            "Industry portal advertising to establish credibility",
            "Smart retargeting campaigns to stay top-of-mind",
            "Account-based marketing (ABM) strategies for key clients",
            "Multi-channel ad funnels to shorten B2B sales cycles"
          ],
          cta: {
            icon: React.createElement(IconRocket, { size: 20 }),
            text: "Launch My B2B Ads"
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
              question: 'Which ad platforms work best for B2B companies?',
              answer: 'LinkedIn Ads, programmatic display, industry-specific portals, and account-based advertising deliver the best ROI for B2B.',
              icon: React.createElement(IconAd, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Do LinkedIn Ads actually generate B2B leads?',
              answer: 'Yes. LinkedIn allows laser-focused targeting of decision-makers by job title, industry, and company size, making it ideal for lead generation.',
              icon: React.createElement(IconNetwork, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Are multi-channel ads expensive for B2B?',
              answer: 'They are highly cost-effective when executed strategically, since B2B deals are high-value and require multiple touchpoints.',
              icon: React.createElement(IconChartBar, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'What’s the difference between B2C and B2B ad strategy?',
              answer: 'B2C ads focus on emotions and fast conversions, while B2B ads target rational, research-driven buyers through multi-step journeys.',
              icon: React.createElement(IconBriefcase, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Do you provide reporting & ROI tracking?',
              answer: 'Yes, Digi Aerotech provides full-funnel analytics, from impressions to SQLs (sales qualified leads) and pipeline growth.',
              icon: React.createElement(IconCheck, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Multi-Channel B2B Advertising Beyond Google & Meta",
      headlineKeywords: [
        "LinkedIn Ads for B2B Companies",
        "Programmatic Ads for Enterprises",
        "Industry Portal Advertising",
        "Account-Based Marketing Campaigns",
        "B2B Retargeting Strategies"
      ],
      brandLine: [
        { text: "🎯 Digi Aerotech helps B2B firms reach decision-makers where they actually spend time — LinkedIn, industry portals, and niche platforms.", gradient: false }
      ],
      subheadline: "Stop limiting your growth to Google & Meta. Our B2B ad strategies maximize visibility, trust, and qualified leads across multiple channels.",
      ctaButtons: [
        { icon: React.createElement(IconRocket, { size: 28 }), text: "Start My B2B Campaign", link: "/contact" },
        { icon: React.createElement(IconTarget, { size: 28 }), text: "Get Free Ad Strategy", link: "/audit", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "Decision-Maker Reach",
          description: "Target CXOs, managers, & industry leaders directly"
        },
        {
          icon: React.createElement(IconWorld, { size: 32 }),
          title: "Global Impact",
          description: "Expand across markets with scalable ad funnels"
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "ROI Driven",
          description: "High-value leads, not vanity clicks"
        },
        {
          icon: React.createElement(IconBuildingSkyscraper, { size: 32 }),
          title: "Enterprise-Ready",
          description: "Built for complex B2B sales cycles"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why B2B Leaders Trust ", gradient: false },
        { text: "Digi Aerotech for Multi-Channel Ads", gradient: true, gradientClass: "from-blue-500 via-indigo-500 to-purple-600" }
      ],
      trustPoints: [
        { icon: React.createElement(IconAd, { size: 28 }), title: "LinkedIn Ad Experts", description: "Specialists in targeting decision-makers with precision." },
        { icon: React.createElement(IconNetwork, { size: 28 }), title: "Programmatic Mastery", description: "Smart display ads across niche B2B sites & portals." },
        { icon: React.createElement(IconTarget, { size: 28 }), title: "Account-Based Marketing", description: "Hyper-targeted ads for your top 100 dream clients." },
        { icon: React.createElement(IconChartBar, { size: 28 }), title: "Data-Driven ROI", description: "Measure performance beyond clicks with SQLs & revenue." },
        { icon: React.createElement(IconBriefcase, { size: 28 }), title: "Industry-Specific Reach", description: "Ads placed on portals your buyers already trust." },
        { icon: React.createElement(IconCheck, { size: 28 }), title: "Transparent Reporting", description: "Full-funnel tracking & conversion attribution." }
      ],
      cta: {
        text: "Launch My B2B Multi-Channel Ads",
        link: "#contact",
        icon: React.createElement(IconRocket, { size: 20 })
      }
    },
    process: {
      title: 'Our B2B Multi-Channel Advertising Process',
      subtitle: 'PLAN → TARGET → EXECUTE → OPTIMIZE',
      description: 'We align your ads with the B2B buyer journey, ensuring consistent visibility & trust at every touchpoint.',
      steps: [
        { id: 1, title: 'Market & Buyer Research', description: 'Identify decision-makers, industries & high-value accounts' },
        { id: 2, title: 'Channel Selection', description: 'Choose LinkedIn, programmatic, or niche portals based on goals' },
        { id: 3, title: 'Ad Creative & Messaging', description: 'Develop industry-specific, trust-building ad campaigns' },
        { id: 4, title: 'Campaign Launch', description: 'Multi-channel rollout with precise targeting & tracking' },
        { id: 5, title: 'Retargeting & ABM', description: 'Stay visible to key accounts & shorten sales cycles' },
        { id: 6, title: 'Optimization & Scaling', description: 'Continuous A/B testing & ROI-based scaling' }
      ]
    },
    cta: {
      title: 'Ready to Dominate B2B Ad Channels Beyond Google & Meta?',
      subtitle: 'LINKEDIN • PROGRAMMATIC • INDUSTRY PORTALS • ABM',
      description: 'Digi Aerotech helps B2B firms expand reach, build trust, and close high-value deals with multi-channel advertising strategies.',
    }
  }
};
