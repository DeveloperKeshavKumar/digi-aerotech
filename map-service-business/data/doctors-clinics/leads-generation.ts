import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconUsers, IconStethoscope, IconArrowRight, IconPhone, IconRocket, IconTrendingUp,
  IconShieldCheck, IconHeart, IconCalendarEvent, IconMapPin, IconStar
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'leads-generation',
  business: 'doctors-clinics',
  variants: {
    hero: 'variant1',
    whyChooseUs: 'variant2',
    process: 'variant3',
    testimonials: 'variant1'
  },
  data: {
    slug: 'lead-generation-doctors-clinics',
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
            { text: "Challenges Doctors & Clinics Face ", gradient: false },
            { text: "in Generating Quality Leads", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
          ],
          subheadline: "Many clinics struggle to get consistent patient inquiries online due to weak targeting, poor landing pages, or unoptimized campaigns.",
          painPoints: [
            "Low number of patient inquiries despite marketing spend",
            "Difficulty identifying high-intent local patients",
            "High cost per lead on digital channels",
            "Unoptimized landing pages leading to lost conversions",
            "Poor follow-up and lead management process",
            "Limited insights into campaign performance"
          ],
          solutionPoints: [
            "Targeted campaigns to reach high-intent local patients",
            "Optimized landing pages for maximum appointment conversion",
            "Multi-channel lead generation using GMB, Ads, and social media",
            "Effective follow-up and nurturing strategies",
            "Detailed tracking & reporting of leads generated",
            "Continuous testing & optimization to reduce cost per lead"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Generate Quality Leads Now"
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
              question: 'What is lead generation for clinics?',
              answer: 'Lead generation is the process of attracting and converting potential patients into actionable inquiries or appointment bookings.',
              icon: React.createElement(IconStethoscope, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Which channels do you use for generating leads?',
              answer: 'We leverage Google Ads, social media campaigns, GMB optimization, and landing pages to capture high-quality patient leads.',
              icon: React.createElement(IconRocket, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Can small clinics generate leads with your strategy?',
              answer: 'Yes. Our targeted approach ensures even single-location clinics get consistent local patient inquiries.',
              icon: React.createElement(IconMapPin, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'How do you ensure lead quality?',
              answer: 'We focus on high-intent patients through precise targeting, optimized ads, and landing pages designed for appointment conversions.',
              icon: React.createElement(IconShieldCheck, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Do you provide tracking and reporting?',
              answer: 'Absolutely. We track all leads, measure conversion rates, and provide detailed reports to show ROI.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'How quickly can I see results?',
              answer: 'With optimized campaigns and landing pages, you can start receiving qualified patient inquiries within weeks.',
              icon: React.createElement(IconCalendarEvent, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Want ",
      headlineKeywords: [
        "Consistent Patient Leads?",
        "More Appointments Fast?",
        "High-Intent Local Patients?",
        "Optimized Lead Generation Campaigns?",
        "360° Patient Acquisition for Clinics?"
      ],
      brandLine: [
        { text: "🏥 Generate High-Quality Leads for Your Clinic with Expert Strategies", gradient: false }
      ],
      subheadline: "We help doctors and clinics attract local patients, increase appointment bookings, and boost revenue with targeted lead generation campaigns.",
      ctaButtons: [
        { icon: React.createElement(IconRocket, { size: 28 }), text: "Book Free Lead Audit", link: "/contact" },
        { icon: React.createElement(IconPhone, { size: 28 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "500+ Leads Generated",
          description: "Across clinics in multiple specialties"
        },
        {
          icon: React.createElement(IconHeart, { size: 32 }),
          title: "4.9/5 Client Satisfaction",
          description: "Clinics trust us for lead acquisition"
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "30% Higher Conversion",
          description: "Optimized campaigns & landing pages"
        },
        {
          icon: React.createElement(IconStar, { size: 32 }),
          title: "ROI-Focused",
          description: "Every lead maximizes your clinic’s revenue"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the ", gradient: false },
        { text: "#1 Lead Generation Partner for Clinics", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "High-Intent Patient Targeting",
          description: "We focus on patients actively seeking your services for higher quality leads."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Multi-Channel Lead Capture",
          description: "Leads generated through Google Ads, social media, landing pages, and GMB optimization."
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Optimized Landing Pages",
          description: "We design pages that convert visitors into booked appointments effectively."
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 28 }),
          title: "Continuous Monitoring & Optimization",
          description: "Campaigns are regularly reviewed and optimized to reduce cost per lead."
        },
        {
          icon: React.createElement(IconHeart, { size: 28 }),
          title: "Transparent Reporting",
          description: "Detailed reports show lead count, conversion rates, and ROI clearly."
        },
        {
          icon: React.createElement(IconCalendarEvent, { size: 28 }),
          title: "Scalable for Any Clinic Size",
          description: "Whether small or multi-location, we scale campaigns for consistent lead flow."
        }
      ],
      cta: {
        text: "Generate Leads Now",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our 6-Step Lead Generation Process for Clinics',
      subtitle: 'STEP-BY-STEP PATIENT ACQUISITION SYSTEM',
      className: 'border-t border-border dark:border-gray-700',
      description: 'From campaign setup to patient follow-up, our 6-step process ensures your clinic consistently receives high-quality leads.',
      steps: [
        {
          id: 1,
          title: 'Clinic & Market Analysis',
          description: 'Understand your clinic’s services, competitors, and local patient search behavior to identify lead opportunities.'
        },
        {
          id: 2,
          title: 'Target Audience & Channel Selection',
          description: 'Identify high-intent patient segments and select the best channels – Google Ads, social, GMB, and landing pages.'
        },
        {
          id: 3,
          title: 'Landing Page & Funnel Optimization',
          description: 'Create or optimize landing pages to maximize conversions from clicks into appointment bookings.'
        },
        {
          id: 4,
          title: 'Campaign Launch & Tracking',
          description: 'Set up campaigns with precise targeting, tracking, and conversion pixels to measure every lead.'
        },
        {
          id: 5,
          title: 'Follow-Up & Lead Nurturing',
          description: 'Implement automated and personal follow-up strategies to convert leads into confirmed appointments.'
        },
        {
          id: 6,
          title: 'Performance Reporting & Optimization',
          description: 'Analyze campaign results and continuously optimize to reduce cost per lead and increase patient acquisition.'
        }
      ]
    },
    testimonials: {
      title: [
        { text: "Clinics Who ", gradient: false },
        { text: "Gained Consistent Leads with Us", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
      ],
      description: 'See how Digi Aerotech helped clinics attract qualified patients, increase appointments, and improve ROI through lead generation.',
      testimonials: [
        {
          id: '1',
          message: 'We started getting 50+ high-quality patient leads per month after Digi Aerotech optimized our campaigns and landing pages.',
          highlight: '50+ high-quality patient leads',
          stars: 5,
          name: 'Dr. Meera Iyer',
          designation: 'Founder',
          company: 'Iyer Care Clinic'
        },
        {
          id: '2',
          message: 'The lead generation campaigns helped us fill our appointment slots consistently, increasing revenue by 40%.',
          highlight: 'increasing revenue by 40%',
          stars: 5,
          name: 'Dr. Rajat Kapoor',
          designation: 'CEO',
          company: 'Kapoor Health Center'
        }
      ]
    },
    cta: {
      title: 'Ready to Get More Patients Fast?',
      subtitle: 'CONSISTENT LEADS, MORE APPOINTMENTS, HIGHER ROI',
      description: 'Book a free consultation with Digi Aerotech to start generating high-quality patient leads for your clinic today.'
    }
  }
};
