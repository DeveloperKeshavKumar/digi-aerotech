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
  IconGlobe,
  IconPhone,
  IconStar,
  IconMapPin,
  IconTarget,
  IconCircleCheck
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'meta-ads',
  business: 'educational-institutions',
  variants: {
    hero: 'variant1',
    whyChooseUs: 'variant3',
    process: 'variant2',
  },
  data: {
    slug: 'meta-ads-educational-institutions',
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
            { text: "With Meta Ads & Paid Campaigns", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Schools, colleges, and coaching centers struggle to convert Meta Ads into actual student inquiries, wasting budget and missing opportunities.",
          painPoints: [
            "Low click-through rates on ad campaigns",
            "High ad costs with minimal student inquiries",
            "Poor ad targeting for local audiences",
            "Difficulty creating engaging ad creatives",
            "Limited tracking and ROI insights"
          ],
          solutionPoints: [
            "Precise audience targeting by location, age, interests",
            "Compelling ad creatives tailored to students & parents",
            "Optimized campaigns for clicks, leads, and conversions",
            "Retargeting strategies to capture interested students",
            "Transparent tracking and reporting to maximize ROI"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Launch Effective Meta Ads Today"
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
              question: 'Why should schools run Meta Ads?',
              answer: 'Meta Ads reach parents and students on Facebook & Instagram, driving targeted inquiries and registrations.',
              icon: React.createElement(IconGlobe, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Can you target students in specific locations?',
              answer: 'Yes. We use geo-targeting to reach potential students in your city, neighborhood, or district.',
              icon: React.createElement(IconMapPin, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'How do you measure ad performance?',
              answer: 'Through CTR, leads, conversions, and ROI reports for each campaign.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Do you create ad visuals and copy?',
              answer: 'Absolutely. We design engaging creatives, videos, and persuasive ad copy tailored to your institution.',
              icon: React.createElement(IconStar, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Can you run campaigns for multiple courses?',
              answer: 'Yes. Each course or program can have a dedicated campaign optimized for leads.',
              icon: React.createElement(IconTarget, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'How quickly will we see results?',
              answer: 'You can see initial leads within days, with continuous optimization improving conversion rates over time.',
              icon: React.createElement(IconCircleCheck, { size: 22 })
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
        "Effective Facebook & Instagram Ads?",
        "Targeted Parent Engagement?",
        "Meta Ads for Educational Institutions?"
      ],
      brandLine: [
        { text: "📣 Drive Enrollments with Meta Ads for Schools & Colleges", gradient: false }
      ],
      subheadline: "We design, run, and optimize Meta Ads campaigns that attract local students and increase registrations efficiently.",
      ctaButtons: [
        { icon: React.createElement(IconPhone, { size: 28 }), text: "Book Free Meta Ads Call", link: "/contact" },
        { icon: React.createElement(IconArrowRight, { size: 28 }), text: "Start Campaign Now", link: "/contact", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "20,000+ Leads Generated",
          description: "For educational institutions via Meta Ads"
        },
        {
          icon: React.createElement(IconRocket, { size: 32 }),
          title: "150+ Campaigns Managed",
          description: "Schools, colleges & coaching centers"
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 32 }),
          title: "4.9/5 Client Satisfaction",
          description: "Trusted for Meta Ads strategies"
        },
        {
          icon: React.createElement(IconCalendarEvent, { size: 32 }),
          title: "Quick Results",
          description: "Initial leads within days of campaign launch"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the ", gradient: false },
        { text: "#1 Meta Ads Partner for Educational Institutions", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Precise Audience Targeting",
          description: "Reach parents and students in your area and age group."
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "High Conversion Ads",
          description: "Optimized for clicks, leads, and enrollments."
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "Customized Ad Creatives",
          description: "Engaging images, videos, and copy that resonate."
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 28 }),
          title: "Continuous Optimization",
          description: "We refine campaigns regularly for maximum ROI."
        },
        {
          icon: React.createElement(IconCalendarEvent, { size: 28 }),
          title: "Transparent Reporting",
          description: "Clear insights into leads, clicks, and results."
        },
        {
          icon: React.createElement(IconPhone, { size: 28 }),
          title: "Dedicated Support",
          description: "Campaign assistance and guidance whenever needed."
        }
      ],
      cta: {
        text: "Run High-Performing Meta Ads Now",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Meta Ads Process for Educational Institutions',
      subtitle: 'STEP-BY-STEP STUDENT LEAD GENERATION',
      className: 'border-t border-border dark:border-gray-700',
      description: 'From strategy to lead capture, our Meta Ads process ensures your institution gets consistent, high-quality student inquiries.',
      steps: [
        {
          id: 1,
          title: 'Audience Research & Segmentation',
          description: 'Identify parents and students most likely to enroll in your programs.'
        },
        {
          id: 2,
          title: 'Ad Strategy & Planning',
          description: 'Create tailored campaign goals, budgets, and timelines.'
        },
        {
          id: 3,
          title: 'Creative Development',
          description: 'Design compelling visuals and ad copy to attract attention.'
        },
        {
          id: 4,
          title: 'Campaign Setup & Launch',
          description: 'Configure campaigns on Meta platforms with precise targeting.'
        },
        {
          id: 5,
          title: 'Monitoring & Optimization',
          description: 'Continuously test, optimize, and refine for maximum ROI.'
        },
        {
          id: 6,
          title: 'Reporting & Insights',
          description: 'Provide detailed reports on clicks, leads, conversions, and improvements.'
        }
      ]
    },
    cta: {
      title: 'Ready to Generate Student Leads with Meta Ads?',
      subtitle: 'Attract Students & Boost Enrollment Quickly',
      description: 'Book a free consultation with Digi Aerotech and launch high-converting Meta Ads campaigns for your institution.'
    }
  }
};
