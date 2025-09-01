import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconTarget, IconUsers, IconSchool, IconPresentation, IconArrowRight,
  IconTrendingUp, IconStar, IconAd, IconWorld, IconChartBar, IconPhone
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'meta-ads',
  business: 'teachers-consultants',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant2',
    process: 'variant3',
    testimonials: 'variant2'
  },
  data: {
    slug: 'meta-ads-teachers-consultants',
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
            { text: "Challenges Teachers & Consultants Face ", gradient: false },
            { text: "Without Meta Ads", gradient: true, gradientClass: "from-pink-500 via-purple-500 to-indigo-500" }
          ],
          subheadline: "Organic reach is shrinking—without targeted ads, consultants and teachers miss out on clients & students actively seeking them.",
          painPoints: [
            "Low visibility on Facebook & Instagram despite good content",
            "Wasting ad spend on irrelevant clicks",
            "Difficulty targeting students, parents, or corporate clients",
            "Unclear ROI from current campaigns",
            "Competitors gaining attention with paid ads",
            "Struggling to scale audience reach effectively"
          ],
          solutionPoints: [
            "Precise targeting of students, parents, and decision-makers",
            "Optimized Meta Ad creatives that convert",
            "Custom campaigns for lead generation & enrollments",
            "Retargeting strategies to re-engage interested users",
            "Analytics-driven ad spend for maximum ROI",
            "Proven campaigns tailored to education & consulting niches"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Launch My Meta Ads Today"
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
              question: 'Why should consultants and teachers run Meta Ads?',
              answer: 'Because Meta Ads help you reach specific target groups (students, parents, businesses) with precision, driving direct leads and enrollments.',
              icon: React.createElement(IconTarget, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'What budget is required for Meta Ads?',
              answer: 'Budgets can start small. We optimize campaigns to get maximum results even with limited spends.',
              icon: React.createElement(IconChartBar, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Do Meta Ads really generate leads for consultants?',
              answer: 'Yes. From business coaching to career consulting, Meta Ads bring highly targeted leads cost-effectively.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'What kind of ads work best for teachers?',
              answer: 'Video ads, carousel formats, and testimonials perform best to attract students and parents.',
              icon: React.createElement(IconSchool, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Can I track results from campaigns?',
              answer: 'Yes. We provide transparent reports on leads, reach, and ROI from your ads.',
              icon: React.createElement(IconWorld, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'How fast can I see results?',
              answer: 'Campaigns often start generating leads within the first week of launch.',
              icon: React.createElement(IconStar, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Need ",
      headlineKeywords: [
        "More Students?",
        "Quality Leads?",
        "Better Visibility?",
        "ROI on Ads?",
        "Growth with Meta Ads?"
      ],
      brandLine: [
        { text: "🎯 Reach The Right Audience with Meta Ads for Consultants & Teachers", gradient: false }
      ],
      subheadline: "Digi Aerotech helps teachers & consultants generate high-quality leads, attract more students, and grow client base through data-driven Meta (Facebook & Instagram) Ads.",
      ctaButtons: [
        { icon: React.createElement(IconPhone, { size: 28 }), text: "Book Free Ad Strategy Call", link: "/contact" },
        { icon: React.createElement(IconAd, { size: 28 }), text: "See Case Studies", link: "/case-studies", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "20,000+ Leads",
          description: "Generated via Meta Ads for education & consulting"
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "4X ROI",
          description: "Average return on ad spend for consultants"
        },
        {
          icon: React.createElement(IconSchool, { size: 32 }),
          title: "10,000+ Students",
          description: "Enrolled via targeted ad campaigns"
        },
        {
          icon: React.createElement(IconPresentation, { size: 32 }),
          title: "Proven Campaigns",
          description: "For teachers, coaches & consultants"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the ", gradient: false },
        { text: "#1 Choice for Meta Ads", gradient: true, gradientClass: "from-pink-500 via-purple-500 to-indigo-500" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconTarget, { size: 28 }),
          title: "Precise Targeting",
          description: "We reach exactly the audience that matters—students, parents, or corporate clients."
        },
        {
          icon: React.createElement(IconAd, { size: 28 }),
          title: "Creative Ad Strategy",
          description: "High-converting creatives tailored to consulting & education niches."
        },
        {
          icon: React.createElement(IconChartBar, { size: 28 }),
          title: "ROI-Driven Execution",
          description: "Every rupee is optimized to generate maximum leads."
        },
        {
          icon: React.createElement(IconStar, { size: 28 }),
          title: "Proven Success",
          description: "Delivered consistent results for consultants & teachers nationwide."
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "Audience Growth",
          description: "Expand beyond organic reach and scale your visibility."
        },
        {
          icon: React.createElement(IconWorld, { size: 28 }),
          title: "Transparent Reporting",
          description: "Track ad performance, lead flow, and growth metrics easily."
        }
      ],
      cta: {
        text: "Run My Ads Today",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Meta Ads Process for Teachers & Consultants',
      subtitle: 'RESULTS-ORIENTED ADVERTISING',
      description: 'We run structured campaigns that maximize your ROI and lead flow.',
      steps: [
        { id: 1, title: 'Audience Research', description: 'Identify ideal students, parents, and clients to target.' },
        { id: 2, title: 'Ad Strategy Design', description: 'Create campaigns tailored for conversions and enrollments.' },
        { id: 3, title: 'Creative Development', description: 'Engaging ad creatives & copies that convert clicks into leads.' },
        { id: 4, title: 'Campaign Launch', description: 'Run optimized ads on Facebook & Instagram.' },
        { id: 5, title: 'Retargeting Setup', description: 'Re-engage visitors who showed interest but didn’t convert.' },
        { id: 6, title: 'Tracking & Scaling', description: 'Measure results, optimize spend, and scale successful campaigns.' }
      ]
    },
    testimonials: {
      title: [
        { text: "Teachers & Consultants Who ", gradient: false },
        { text: "Grew with Meta Ads", gradient: true, gradientClass: "from-pink-500 via-purple-500 to-indigo-500" }
      ],
      description: 'Real stories from professionals who trusted Digi Aerotech for Meta Ads.',
      testimonials: [
        {
          id: '1',
          message: 'As a career coach, I struggled to get consistent leads. Digi Aerotech’s Meta Ads brought me daily inquiries within the first 10 days.',
          highlight: 'Daily leads in 10 days',
          stars: 5,
          name: 'Aman Verma',
          designation: 'Career Consultant',
          company: 'SkillPath Advisory'
        },
        {
          id: '2',
          message: 'My online classes were not filling up. With their ad strategy, I now get 3X enrollments every month!',
          highlight: '3X student enrollments',
          stars: 5,
          name: 'Pooja Mehra',
          designation: 'Online Teacher',
          company: 'EduCraft Academy'
        }
      ]
    },
    cta: {
      title: 'Ready to Grow with Meta Ads?',
      subtitle: 'FACEBOOK & INSTAGRAM ADS FOR TEACHERS & CONSULTANTS',
      description: 'Book a free Meta Ads consultation with Digi Aerotech and start generating leads that matter.',
    }
  }
};
