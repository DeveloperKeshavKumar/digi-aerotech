import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconUsers, IconBuildingSkyscraper, IconNetwork, IconChartBar, IconRocket, 
  IconTarget, IconBriefcase, IconTrendingUp, IconWorld, IconMessageCircle, IconCheck
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'social-media-marketing',
  business: 'b2b-services',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant1',
    process: 'variant1',
    testimonials: 'variant2'
  },
  data: {
    slug: 'b2b-social-media-marketing',
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
            { text: "Why B2B Brands Struggle on ", gradient: false },
            { text: "Social Media Platforms", gradient: true, gradientClass: "from-blue-500 via-cyan-500 to-green-500" }
          ],
          subheadline: "B2B buyers don’t scroll for memes — they seek authority, trust, and insights. Without a strong social strategy, you get ignored.",
          painPoints: [
            "Low engagement on LinkedIn, Twitter, or niche forums",
            "Content that doesn’t resonate with decision-makers",
            "No measurable ROI from social media activity",
            "Competitors seen as more authoritative thought leaders",
            "Inconsistent posting damaging credibility",
            "Missing opportunities for direct lead generation"
          ],
          solutionPoints: [
            "Targeted LinkedIn campaigns reaching CXOs & managers",
            "Thought-leadership content tailored for B2B buyers",
            "Industry-focused community engagement strategies",
            "ROI tracking with pipeline attribution",
            "Consistent, professional content calendars",
            "Paid + organic mix for high-quality lead generation"
          ],
          cta: {
            icon: React.createElement(IconUsers, { size: 20 }),
            text: "Elevate My B2B Social Media"
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
              question: 'Which social platforms are best for B2B marketing?',
              answer: 'LinkedIn is the top B2B platform, followed by Twitter (X) and niche communities. We also optimize YouTube and Facebook for awareness.',
              icon: React.createElement(IconNetwork, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Can social media generate B2B leads?',
              answer: 'Yes. With targeted content and LinkedIn campaigns, social can generate qualified leads and build authority across the decision-making journey.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'How do you measure ROI for B2B social campaigns?',
              answer: 'We map impressions, engagement, and conversions to pipeline metrics like MQLs and SQLs, not just likes and shares.',
              icon: React.createElement(IconChartBar, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Do B2B buyers really use social media?',
              answer: 'Yes — 75% of B2B buyers use LinkedIn and social platforms to research vendors before reaching out.',
              icon: React.createElement(IconBuildingSkyscraper, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Do you provide both organic and paid social media marketing?',
              answer: 'Yes, we manage content calendars, community engagement, and run LinkedIn Ads & retargeting campaigns for maximum impact.',
              icon: React.createElement(IconCheck, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "B2B Social Media Marketing That Builds Trust & Leads",
      headlineKeywords: [
        "LinkedIn Marketing for B2B",
        "Thought Leadership Campaigns",
        "Social Media Lead Generation",
        "Authority Building Content",
        "B2B Engagement Strategies"
      ],
      brandLine: [
        { text: "📢 Digi Aerotech transforms your B2B social media into a **lead generation engine** and a platform for **authority & trust.**", gradient: false }
      ],
      subheadline: "We go beyond likes & shares — helping you connect with **decision-makers, CXOs, and managers** who influence purchase decisions.",
      ctaButtons: [
        { icon: React.createElement(IconRocket, { size: 28 }), text: "Boost My Social Presence", link: "/contact" },
        { icon: React.createElement(IconTarget, { size: 28 }), text: "Get Free Social Audit", link: "/audit", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "CXO Engagement",
          description: "Reach high-level decision-makers directly"
        },
        {
          icon: React.createElement(IconMessageCircle, { size: 32 }),
          title: "Thought Leadership",
          description: "Position your brand as an industry leader"
        },
        {
          icon: React.createElement(IconChartBar, { size: 32 }),
          title: "Pipeline Growth",
          description: "Content linked to real business opportunities"
        },
        {
          icon: React.createElement(IconBriefcase, { size: 32 }),
          title: "Enterprise Ready",
          description: "Strategies built for complex B2B cycles"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why B2B Companies Choose ", gradient: false },
        { text: "Digi Aerotech for Social Media", gradient: true, gradientClass: "from-blue-500 via-cyan-500 to-green-500" }
      ],
      trustPoints: [
        { icon: React.createElement(IconTarget, { size: 28 }), title: "B2B Audience Expertise", description: "We understand CXO psychology & LinkedIn behavior deeply." },
        { icon: React.createElement(IconTrendingUp, { size: 28 }), title: "ROI Tracking", description: "We tie social media activity directly to sales pipeline." },
        { icon: React.createElement(IconBriefcase, { size: 28 }), title: "Enterprise Experience", description: "Worked across SaaS, IT, Consulting, Manufacturing, and more." },
        { icon: React.createElement(IconWorld, { size: 28 }), title: "Global Reach", description: "Campaigns tailored for international B2B audiences." },
        { icon: React.createElement(IconCheck, { size: 28 }), title: "Authority Building", description: "From thought leadership to community dominance." },
        { icon: React.createElement(IconRocket, { size: 28 }), title: "Proven Growth", description: "Case studies with real B2B lead conversions." }
      ],
      cta: {
        text: "Elevate My B2B Social Strategy",
        link: "#contact",
        icon: React.createElement(IconRocket, { size: 20 })
      }
    },
    process: {
      title: 'Our Proven B2B Social Media Process',
      subtitle: 'BUILD AUTHORITY → ENGAGE → CONVERT → SCALE',
      description: 'We create **social strategies that resonate with B2B decision-makers**, building credibility and generating real business leads.',
      steps: [
        { id: 1, title: 'Audit & Strategy', description: 'Industry analysis & competitor benchmarking' },
        { id: 2, title: 'Content Creation', description: 'Thought leadership blogs, infographics, videos & posts' },
        { id: 3, title: 'Organic Engagement', description: 'Consistent posting & professional audience interaction' },
        { id: 4, title: 'Paid Campaigns', description: 'Targeted LinkedIn Ads & retargeting campaigns' },
        { id: 5, title: 'Lead Nurturing', description: 'Funnels built around decision-maker journeys' },
        { id: 6, title: 'Analytics & Scaling', description: 'Reports tied to MQLs, SQLs, and closed deals' }
      ]
    },
    testimonials: {
      title: [
        { text: "How B2B Leaders Grew with ", gradient: false },
        { text: "Digi Aerotech Social Media", gradient: true, gradientClass: "from-blue-500 via-cyan-500 to-green-500" }
      ],
      description: 'From IT consulting to manufacturing, our clients see real authority and lead generation growth via social platforms.',
      testimonials: [
        {
          id: '1',
          message: 'Our LinkedIn presence grew 5X and started generating inbound SQLs monthly.',
          highlight: '320% Increase in Social Engagement',
          stars: 5,
          name: 'Anil Kapoor',
          designation: 'Marketing Director',
          company: 'NextGen IT Solutions'
        },
        {
          id: '2',
          message: 'Digi Aerotech helped us become thought leaders in our industry on LinkedIn.',
          highlight: 'Authority Recognition in 3 Months',
          stars: 5,
          name: 'Sonal Mehta',
          designation: 'VP Sales',
          company: 'B2B Global Consulting'
        }
      ]
    },
    cta: {
      title: 'Ready to Turn Social Media into Your B2B Growth Engine?',
      subtitle: 'LINKEDIN • THOUGHT LEADERSHIP • LEAD GENERATION',
      description: 'Stop wasting time on social platforms without ROI. Digi Aerotech builds **B2B-focused social media strategies** that generate authority, trust, and real business leads.',
    }
  }
};
