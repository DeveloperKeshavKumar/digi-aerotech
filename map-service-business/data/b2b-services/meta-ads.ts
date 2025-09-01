import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconRocket, IconTarget, IconUsers, IconBriefcase, IconTrendingUp,
  IconWorld, IconChartBar, IconDeviceAnalytics, IconCheck, IconBuildingSkyscraper
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'meta-ads',
  business: 'b2b-services',
  variants: {
    hero: 'variant1',
    whyChooseUs: 'variant2',
    process: 'variant2',
    testimonials: 'variant1'
  },
  data: {
    slug: 'meta-ads-b2b',
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
            { text: "Why B2B Firms Struggle With ", gradient: false },
            { text: "Meta Ads", gradient: true, gradientClass: "from-blue-500 via-indigo-500 to-purple-500" }
          ],
          subheadline: "B2B buying cycles are complex—generic ad campaigns waste budget and miss decision-makers.",
          painPoints: [
            "Generic targeting reaching consumers, not B2B buyers",
            "High ad spend with low-quality leads",
            "Difficulty in reaching decision-makers & influencers",
            "Weak ad creatives not aligned with B2B pain points",
            "No nurturing funnel for long B2B sales cycles",
            "Unclear ROI and wasted marketing budget"
          ],
          solutionPoints: [
            "Laser-focused targeting on decision-makers, industries & job titles",
            "Account-based marketing funnels using Meta Ads",
            "Lead form integrations for instant B2B inquiries",
            "Custom creatives that speak to business challenges",
            "Retargeting campaigns to nurture warm leads",
            "Data-driven optimization & transparent ROI tracking"
          ],
          cta: {
            icon: React.createElement(IconRocket, { size: 20 }),
            text: "Boost My B2B Leads with Meta Ads"
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
              question: 'Are Meta Ads effective for B2B lead generation?',
              answer: 'Yes. With precise targeting (job titles, industries, behaviors), Meta Ads help B2B firms capture high-quality leads at scale.',
              icon: React.createElement(IconTarget, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'How are B2B Meta Ads different from B2C?',
              answer: 'B2B campaigns focus on decision-makers and longer buying cycles, while B2C focuses on impulse-driven consumer actions.',
              icon: React.createElement(IconUsers, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Do you provide retargeting campaigns?',
              answer: 'Absolutely. Retargeting keeps your brand in front of warm leads and accelerates deal closures.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Can Meta Ads generate enterprise-level leads?',
              answer: 'Yes. With account-based targeting and lead form integrations, we capture enterprise inquiries directly from Meta.',
              icon: React.createElement(IconBuildingSkyscraper, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'How do you measure ROI?',
              answer: 'We track leads, pipeline impact, and conversions using analytics dashboards and CRM integrations.',
              icon: React.createElement(IconChartBar, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Meta Ads That Drive Real B2B Clients",
      headlineKeywords: [
        "B2B Meta Ads Services",
        "Facebook & Instagram Ads for B2B",
        "B2B Lead Generation with Meta Ads",
        "Account-Based Targeting",
        "Enterprise Social Media Ads"
      ],
      brandLine: [
        { text: "🚀 Digi Aerotech runs hyper-targeted Meta Ads that put your B2B firm in front of the right decision-makers at the right time.", gradient: false }
      ],
      subheadline: "Stop wasting money on broad ads. Start generating enterprise-quality B2B leads through precision-targeted Meta campaigns.",
      ctaButtons: [
        { icon: React.createElement(IconRocket, { size: 28 }), text: "Launch My B2B Ads Now", link: "/contact" },
        { icon: React.createElement(IconDeviceAnalytics, { size: 28 }), text: "Get Free Ad Audit", link: "/audit", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconTarget, { size: 32 }),
          title: "Decision-Maker Targeting",
          description: "Laser-focus on job titles, industries & geographies"
        },
        {
          icon: React.createElement(IconBriefcase, { size: 32 }),
          title: "Enterprise-Grade Campaigns",
          description: "Perfect for SaaS, IT, consulting & logistics"
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "ROI-Focused Ads",
          description: "Drive qualified B2B leads, not vanity metrics"
        },
        {
          icon: React.createElement(IconChartBar, { size: 32 }),
          title: "Transparent Reporting",
          description: "Measure success with clear ROI dashboards"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why B2B Firms Trust ", gradient: false },
        { text: "Digi Aerotech for Meta Ads", gradient: true, gradientClass: "from-blue-500 via-indigo-500 to-purple-500" }
      ],
      trustPoints: [
        { icon: React.createElement(IconUsers, { size: 28 }), title: "B2B Audience Expertise", description: "We know how to target executives, managers & industry professionals." },
        { icon: React.createElement(IconRocket, { size: 28 }), title: "Lead-Driven Ads", description: "Every ad is designed to capture inquiries & generate pipelines." },
        { icon: React.createElement(IconDeviceAnalytics, { size: 28 }), title: "Data + Creativity", description: "Compelling creatives powered by real B2B insights." },
        { icon: React.createElement(IconWorld, { size: 28 }), title: "Global & Local Reach", description: "Perfect for both regional B2B services and international enterprises." },
        { icon: React.createElement(IconBriefcase, { size: 28 }), title: "Full Funnel Strategy", description: "From awareness to nurturing & conversions." },
        { icon: React.createElement(IconChartBar, { size: 28 }), title: "ROI-First Reporting", description: "No fluff—just revenue impact & measurable ROI." }
      ],
      cta: {
        text: "Scale B2B Growth with Meta Ads",
        link: "#contact",
        icon: React.createElement(IconRocket, { size: 20 })
      }
    },
    process: {
      title: 'Our Meta Ads Process for B2B',
      subtitle: 'TARGET → ENGAGE → NURTURE → CONVERT',
      description: 'We design Meta Ads tailored for long B2B cycles and high-value decision-makers.',
      steps: [
        { id: 1, title: 'Discovery & Research', description: 'Define ICP, industries, and decision-maker profiles' },
        { id: 2, title: 'Ad Creative Strategy', description: 'Craft tailored ad creatives that resonate with business pain points' },
        { id: 3, title: 'Precision Targeting', description: 'Target job titles, company size, geography & industries' },
        { id: 4, title: 'Lead Capture Setup', description: 'Meta Lead Ads + CRM integration for direct inquiries' },
        { id: 5, title: 'Retargeting Campaigns', description: 'Nurture warm leads through remarketing strategies' },
        { id: 6, title: 'ROI Optimization', description: 'Monitor, optimize & scale campaigns based on pipeline impact' }
      ]
    },
    testimonials: {
      title: [
        { text: "B2B Firms Scaling with ", gradient: false },
        { text: "Digi Aerotech’s Meta Ads", gradient: true, gradientClass: "from-blue-500 via-indigo-500 to-purple-500" }
      ],
      description: 'From SaaS companies to IT consultants, our Meta Ads strategies deliver consistent pipelines and enterprise inquiries.',
      testimonials: [
        {
          id: '1',
          message: 'Our SaaS startup went from 10 to 60 enterprise demo requests per month after Digi Aerotech’s Meta Ads campaigns.',
          highlight: '500% Increase in Demo Requests',
          stars: 5,
          name: 'Vikram Rao',
          designation: 'Founder',
          company: 'CloudSync Software'
        },
        {
          id: '2',
          message: 'We struggled with irrelevant leads before. Digi Aerotech now brings us targeted logistics inquiries every week.',
          highlight: 'High-Quality Enterprise Leads',
          stars: 5,
          name: 'Anjali Mehta',
          designation: 'CMO',
          company: 'GlobeLink Logistics'
        }
      ]
    },
    cta: {
      title: 'Ready to Attract Enterprise Decision-Makers?',
      subtitle: 'LASER-FOCUSED META ADS FOR B2B',
      description: 'Partner with Digi Aerotech to run data-driven, ROI-focused Meta Ads that bring enterprise clients directly to you.',
    }
  }
};
