import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconTarget, IconChartBar, IconBook, IconUsers, IconTrendingUp,
  IconArrowRight, IconSearch, IconMoneybag, IconStar, IconBrain,
  IconSchool, IconPhone, IconGlobe
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'google-ads',
  business: 'consultants',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant1',
    process: 'variant3',
    testimonials: 'variant1'
  },
  data: {
    slug: 'google-ads-consultants-teachers',
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
            { text: "Challenges Consultants & Teachers ", gradient: false },
            { text: "Face in Client & Student Acquisition", gradient: true, gradientClass: "from-yellow-500 via-orange-500 to-red-500" }
          ],
          subheadline: "Many consultants and teachers struggle to get consistent leads and enrollments despite having great expertise.",
          painPoints: [
            "Low visibility on Google search results",
            "Dependence only on referrals and word-of-mouth",
            "Unclear targeting leading to wasted ad spend",
            "Getting irrelevant inquiries that don’t convert",
            "Competition dominating ad placements",
            "No system to track ROI on ad campaigns"
          ],
          solutionPoints: [
            "Targeted Google Ads campaigns for consultants & teachers",
            "Precision keyword bidding to appear for high-intent searches",
            "Smart audience targeting based on demographics & location",
            "Conversion tracking for calls, forms, and bookings",
            "Competitor analysis to win better ad positions",
            "ROI-driven campaigns that maximize every rupee spent"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Launch My Google Ads Today"
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
              question: 'Why should consultants & teachers use Google Ads?',
              answer: 'Because it puts you in front of people actively searching for your services, generating high-quality leads instantly.',
              icon: React.createElement(IconSearch, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Will I waste money on irrelevant clicks?',
              answer: 'No. We use negative keywords, audience filters, and precise targeting to ensure only relevant students and clients see your ads.',
              icon: React.createElement(IconBrain, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Can you track results from ads?',
              answer: 'Yes. We set up conversion tracking for calls, form fills, and direct inquiries so you see exactly where your money goes.',
              icon: React.createElement(IconChartBar, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'How soon will I see results?',
              answer: 'Unlike SEO, Google Ads start generating clicks and inquiries almost immediately after launch.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Do I need a big budget for Google Ads?',
              answer: 'Not at all. We design campaigns that fit your budget and scale as you start getting consistent returns.',
              icon: React.createElement(IconMoneybag, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'Can Google Ads help me compete with bigger institutions?',
              answer: 'Yes. With smart targeting and ad strategies, independent consultants and teachers can outrank bigger competitors locally.',
              icon: React.createElement(IconSchool, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Need ",
      headlineKeywords: [
        "More Student Enrollments?",
        "More Client Leads?",
        "Instant Visibility?",
        "Higher ROI?",
        "Google Ads for Consultants & Teachers?"
      ],
      brandLine: [
        { text: "🎯 Get Found Instantly. Convert Clicks into Students & Clients.", gradient: false }
      ],
      subheadline: "At Digi Aerotech, we run high-converting Google Ads campaigns tailored for consultants and teachers, bringing you more leads, calls, and students — faster than ever.",
      ctaButtons: [
        { icon: React.createElement(IconPhone, { size: 28 }), text: "Get Free Ads Audit", link: "/contact" },
        { icon: React.createElement(IconGlobe, { size: 28 }), text: "Talk to Ads Expert", link: "/contact", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "3000+ Leads",
          description: "Generated for consultants & teachers"
        },
        {
          icon: React.createElement(IconChartBar, { size: 32 }),
          title: "150% ROI",
          description: "Average campaign returns"
        },
        {
          icon: React.createElement(IconStar, { size: 32 }),
          title: "500+ Campaigns",
          description: "Successfully managed"
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "Instant Growth",
          description: "Results from Day 1"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the ", gradient: false },
        { text: "#1 Google Ads Partner for Consultants & Teachers", gradient: true, gradientClass: "from-yellow-500 via-orange-500 to-red-500" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconTarget, { size: 28 }),
          title: "Hyper-Targeted Ads",
          description: "We run ads that reach only high-intent students & clients looking for your services."
        },
        {
          icon: React.createElement(IconChartBar, { size: 28 }),
          title: "ROI-First Strategy",
          description: "Every ad campaign is designed to maximize conversions, not just clicks."
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "Lead Quality Focus",
          description: "We optimize campaigns to bring in genuine inquiries that convert, not junk leads."
        },
        {
          icon: React.createElement(IconBook, { size: 28 }),
          title: "Specialized in Education & Consulting",
          description: "Unlike generic agencies, we understand the unique lead cycle of teachers & consultants."
        },
        {
          icon: React.createElement(IconBrain, { size: 28 }),
          title: "Smart Bidding & AI Optimization",
          description: "We use Google’s smart algorithms combined with manual strategy for best results."
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Proven Case Studies",
          description: "We have successfully scaled campaigns for independent professionals and institutions."
        }
      ],
      cta: {
        text: "Start My Google Ads Now",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Google Ads Growth Process',
      subtitle: 'STEP-BY-STEP CONVERSION SYSTEM',
      className: 'border-t border-border dark:border-gray-700',
      description: 'We follow a proven system to ensure every rupee spent on ads generates measurable results.',
      steps: [
        {
          id: 1,
          title: 'Discovery & Goal Setting',
          description: 'Understand your services, students, clients, and lead generation goals.'
        },
        {
          id: 2,
          title: 'Keyword & Audience Research',
          description: 'Identify high-intent keywords & audiences for maximum lead quality.'
        },
        {
          id: 3,
          title: 'Ad Copy & Creative Development',
          description: 'Write compelling ad copy & design creatives that attract attention and clicks.'
        },
        {
          id: 4,
          title: 'Campaign Setup & Launch',
          description: 'Launch search, display, and remarketing campaigns for consultants & teachers.'
        },
        {
          id: 5,
          title: 'Conversion Tracking',
          description: 'Set up call tracking, form tracking, and lead attribution to measure ROI.'
        },
        {
          id: 6,
          title: 'Optimization & Scaling',
          description: 'Refine keywords, targeting, and bidding to scale campaigns profitably.'
        }
      ]
    },
    testimonials: {
      title: [
        { text: "Consultants & Teachers Who ", gradient: false },
        { text: "Grew Fast with Our Ads", gradient: true, gradientClass: "from-yellow-500 via-orange-500 to-red-500" }
      ],
      description: 'Here’s what professionals say about Digi Aerotech’s Google Ads campaigns.',
      testimonials: [
        {
          id: '1',
          message: 'Within 2 weeks of running Google Ads with Digi Aerotech, I started getting student enrollments daily.',
          highlight: 'student enrollments daily',
          stars: 5,
          name: 'Meera Joshi',
          designation: 'Spoken English Trainer',
          company: 'FluentMe Academy'
        },
        {
          id: '2',
          message: 'As a business coach, most of my new clients now come directly from Google Ads campaigns managed by them.',
          highlight: 'most of my new clients',
          stars: 5,
          name: 'Vivek Sharma',
          designation: 'Business Consultant',
          company: 'GrowthX Consulting'
        }
      ]
    },
    cta: {
      title: 'Ready to Attract More Students & Clients?',
      subtitle: 'GOOGLE ADS FOR CONSULTANTS & TEACHERS',
      description: 'Book a free Google Ads audit with Digi Aerotech and start generating high-quality leads instantly.',
    }
  }
};
