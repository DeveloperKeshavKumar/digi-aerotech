import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconSchool,
  IconUsers,
  IconTrendingUp,
  IconShieldCheck,
  IconRocket,
  IconCalendarEvent,
  IconArrowRight,
  IconPhone,
  IconTarget,
  IconStar,
  IconGlobe,
  IconCircleCheck
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'leads-generation',
  business: 'educational-institutions',
  variants: {
    hero: 'variant1',
    whyChooseUs: 'variant3',
    process: 'variant2',
  },
  data: {
    slug: 'leads-generation-educational-institutions',
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
            { text: "Challenges Educational Institutions Face", gradient: false },
            { text: "In Generating Quality Leads", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Schools, colleges, coaching centers, and e-learning platforms struggle to consistently attract and convert high-quality leads for enrollment.",
          painPoints: [
            "Attracting inquiries from genuinely interested students",
            "Difficulty converting inquiries into enrollments",
            "Wasted ad spend on irrelevant leads",
            "Limited tools to track lead quality and ROI",
            "Low engagement with campaigns across channels"
          ],
          solutionPoints: [
            "Targeted lead generation campaigns tailored to each program",
            "Optimized landing pages and forms for higher conversions",
            "Multi-channel strategies including social & email campaigns",
            "Advanced tracking and reporting for lead quality",
            "Personalized follow-up strategies to nurture leads"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Start Generating Quality Leads"
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
              question: 'How can we get more student inquiries?',
              answer: 'By designing highly-targeted campaigns and landing pages that attract parents and students actively seeking courses.',
              icon: React.createElement(IconTarget, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Do you track lead quality?',
              answer: 'Yes, we provide detailed analytics on lead source, engagement, and conversion potential to ensure high ROI.',
              icon: React.createElement(IconCircleCheck, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Can you generate leads for multiple programs simultaneously?',
              answer: 'Absolutely. Each program or grade level can have its own dedicated lead generation campaign.',
              icon: React.createElement(IconSchool, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'How soon will we see new leads?',
              answer: 'High-quality inquiries usually start flowing within days to weeks, depending on campaign scale and targeting.',
              icon: React.createElement(IconRocket, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Do you handle follow-ups for leads?',
              answer: 'Yes, we can integrate automated or manual follow-up strategies to increase lead-to-enrollment conversion.',
              icon: React.createElement(IconUsers, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'Which channels do you use for lead generation?',
              answer: 'We leverage Google Ads, social media, email campaigns, and SEO-driven content to attract qualified leads.',
              icon: React.createElement(IconGlobe, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Want ",
      headlineKeywords: [
        "More Student Inquiries?",
        "Higher Enrollment Rates?",
        "Qualified Leads for Your Programs?",
        "Targeted Lead Generation for Schools?",
        "Boost Admissions with Expert Strategies?"
      ],
      brandLine: [
        { text: "🎯 Leads Generation Services for Educational Institutions", gradient: false }
      ],
      subheadline: "We help educational institutions attract qualified student inquiries, increasing enrollments and maximizing ROI.",
      ctaButtons: [
        { icon: React.createElement(IconPhone, { size: 28 }), text: "Book Free Lead Strategy Call", link: "/contact" },
        { icon: React.createElement(IconArrowRight, { size: 28 }), text: "Start Generating Leads", link: "/contact", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "20,000+ Student Leads",
          description: "Generated across institutions"
        },
        {
          icon: React.createElement(IconRocket, { size: 32 }),
          title: "250+ Programs Promoted",
          description: "Schools, colleges, and coaching centers"
        },
        {
          icon: React.createElement(IconStar, { size: 32 }),
          title: "4.9/5 Client Satisfaction",
          description: "Trusted by educational institutions"
        },
        {
          icon: React.createElement(IconGlobe, { size: 32 }),
          title: "Local & Nationwide Reach",
          description: "Targeted lead generation campaigns"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the ", gradient: false },
        { text: "#1 Lead Generation Partner for Educational Institutions", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "High-Quality Leads",
          description: "We focus on leads with genuine enrollment intent."
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 28 }),
          title: "Conversion-Focused Strategies",
          description: "Every campaign is optimized to maximize student registrations."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Rapid Lead Flow",
          description: "Start receiving qualified inquiries quickly."
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "Precise Audience Targeting",
          description: "Reach parents and students actively searching for educational programs."
        },
        {
          icon: React.createElement(IconCalendarEvent, { size: 28 }),
          title: "Continuous Optimization",
          description: "Campaigns are monitored and refined for best results."
        },
        {
          icon: React.createElement(IconGlobe, { size: 28 }),
          title: "Comprehensive Reporting",
          description: "Transparent insights on leads, conversions, and ROI."
        }
      ],
      cta: {
        text: "Start Generating Leads Now",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Lead Generation Process for Educational Institutions',
      subtitle: 'STEP-BY-STEP INQUIRY BOOST',
      className: 'border-t border-border dark:border-gray-700',
      description: 'From targeting the right audience to optimizing conversion paths, our lead generation ensures consistent student inquiries and enrollments.',
      steps: [
        {
          id: 1,
          title: 'Audience & Program Research',
          description: 'Identify target students, parents, and the programs they are most interested in.'
        },
        {
          id: 2,
          title: 'Campaign Strategy & Planning',
          description: 'Design multi-channel campaigns optimized for high-quality lead acquisition.'
        },
        {
          id: 3,
          title: 'Ad Creative & Messaging',
          description: 'Develop compelling creatives and copy that attract clicks and interest.'
        },
        {
          id: 4,
          title: 'Landing Page & Form Optimization',
          description: 'Ensure all leads are captured efficiently with user-friendly forms.'
        },
        {
          id: 5,
          title: 'Lead Tracking & Nurturing',
          description: 'Monitor lead behavior and implement follow-ups for higher conversions.'
        },
        {
          id: 6,
          title: 'Continuous Improvement & Reporting',
          description: 'Refine campaigns based on data and provide detailed reports on lead quality and ROI.'
        }
      ]
    },
    cta: {
      title: 'Ready to Generate High-Quality Student Leads?',
      subtitle: 'Turn Inquiries into Enrollments Today',
      description: 'Book a free consultation with Digi Aerotech and start attracting high-converting leads for your educational programs.'
    }
  }
};
