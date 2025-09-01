import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconStethoscope, IconUsers, IconRocket, IconTrendingUp, IconShieldCheck,
  IconArrowRight, IconCalendarEvent, IconPhone, IconMapPin, IconHeart, IconStar
} from '@tabler/icons-react';
import { IndianRupee } from 'lucide-react';

export const map: ServiceBusinessMap = {
  service: 'google-ads',
  business: 'doctors-clinics',
  variants: {
    hero: 'variant1',
    whyChooseUs: 'variant2',
    process: 'variant3',
    testimonials: 'variant1'
  },
  data: {
    slug: 'google-ads-doctors-clinics',
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
            { text: "with Online Advertising", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
          ],
          subheadline: "Many clinics spend on Google Ads but see low ROI due to poor targeting, weak creatives, or high competition.",
          painPoints: [
            "High CPC due to broad targeting",
            "Low quality leads and appointment bookings",
            "Difficulty measuring ROI on ad spend",
            "Limited reach for local patients",
            "Ad creatives not tailored to healthcare audience",
            "Poorly optimized landing pages reducing conversions"
          ],
          solutionPoints: [
            "Precise keyword & geo-targeting for local patient acquisition",
            "Conversion-focused ad copy & creatives",
            "Continuous tracking & optimization for ROI",
            "Ad campaigns tailored for both search & display networks",
            "Retargeting strategies to bring back interested patients",
            "Landing page recommendations for higher appointment conversions"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Get More Patients with Google Ads"
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
              question: 'How can Google Ads help my clinic?',
              answer: 'Google Ads targets patients actively searching for your services, increasing appointment bookings and clinic visibility.',
              icon: React.createElement(IconStethoscope, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Can you target local patients specifically?',
              answer: 'Yes. We geo-target campaigns to reach patients in your city or nearby areas actively looking for healthcare services.',
              icon: React.createElement(IconMapPin, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Do you manage ad spend efficiently?',
              answer: 'Absolutely. We optimize bids, keywords, and campaigns to maximize ROI while reducing unnecessary costs.',
              icon: React.createElement(IndianRupee, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Can you run both search & display campaigns?',
              answer: 'Yes. We create search ads for high-intent patients and display campaigns for brand awareness and retargeting.',
              icon: React.createElement(IconRocket, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Do you help improve appointment conversions?',
              answer: 'Yes. We analyze landing pages and ad funnels to ensure more patients complete appointments after clicking ads.',
              icon: React.createElement(IconHeart, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'Is Google Ads suitable for small clinics?',
              answer: 'Yes. With precise targeting and optimized campaigns, even small clinics can attract a steady stream of local patients.',
              icon: React.createElement(IconUsers, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Want ",
      headlineKeywords: [
        "More Local Patients?",
        "Higher Appointment Bookings?",
        "Better ROI on Ads?",
        "Targeted Google Ads Campaigns?",
        "360° Paid Ads for Clinics?"
      ],
      brandLine: [
        { text: "🏥 Get Patients Fast with Expert Google Ads for Clinics", gradient: false }
      ],
      subheadline: "We help doctors and clinics attract local patients, increase appointments, and maximize ROI through data-driven Google Ads campaigns.",
      ctaButtons: [
        { icon: React.createElement(IconRocket, { size: 28 }), text: "Book Free Ads Strategy Call", link: "/contact" },
        { icon: React.createElement(IconPhone, { size: 28 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "500+ New Patients",
          description: "Generated via Google Ads campaigns"
        },
        {
          icon: React.createElement(IconStar, { size: 32 }),
          title: "4.9/5 Client Satisfaction",
          description: "Clinics trust us to deliver results"
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "25% Average CTR",
          description: "Higher engagement from search ads"
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 32 }),
          title: "ROI-Focused Campaigns",
          description: "Maximizing leads per rupee spent"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the ", gradient: false },
        { text: "#1 Google Ads Partner for Clinics", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconStethoscope, { size: 28 }),
          title: "Healthcare Advertising Expertise",
          description: "We understand patient search behavior and craft campaigns for maximum relevance."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Data-Driven Campaigns",
          description: "Continuous analysis and optimization to improve ROI and reduce wasted ad spend."
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Targeted Local Reach",
          description: "We focus on attracting patients from your city or nearby areas actively searching for services."
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 28 }),
          title: "High Conversion Ad Creatives",
          description: "Crafting ad copy, visuals, and offers that drive clicks and appointments."
        },
        {
          icon: React.createElement(IconCalendarEvent, { size: 28 }),
          title: "Appointment-Focused Strategies",
          description: "Every campaign is designed to convert clicks into booked appointments."
        },
        {
          icon: React.createElement(IconHeart, { size: 28 }),
          title: "Transparent Reporting",
          description: "We provide detailed reports showing ROI, leads, and patient engagement metrics."
        }
      ],
      cta: {
        text: "Start My Google Ads Campaign",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our 6-Step Google Ads Process for Clinics',
      subtitle: 'STEP-BY-STEP PATIENT ACQUISITION SYSTEM',
      className: 'border-t border-border dark:border-gray-700',
      description: 'From research to reporting, our 6-step Google Ads process ensures clinics attract more patients while maximizing ROI.',
      steps: [
        {
          id: 1,
          title: 'Clinic & Competitor Analysis',
          description: 'We audit your current ads and analyze competitors to identify opportunities for growth and cost-effective targeting.'
        },
        {
          id: 2,
          title: 'Keyword & Geo Targeting',
          description: 'We select high-intent keywords and geo-targeted areas to attract local patients actively searching for your services.'
        },
        {
          id: 3,
          title: 'Ad Copy & Creative Design',
          description: 'We craft compelling ad copy, headlines, and creatives that encourage clicks and appointments.'
        },
        {
          id: 4,
          title: 'Campaign Setup & Optimization',
          description: 'Configure search, display, and retargeting campaigns to ensure maximum ROI and minimum wasted spend.'
        },
        {
          id: 5,
          title: 'Conversion Tracking & Landing Page Alignment',
          description: 'We track appointments and leads, optimizing landing pages for better conversion rates.'
        },
        {
          id: 6,
          title: 'Monitoring & Reporting',
          description: 'We continuously monitor campaigns, adjust bids, and provide detailed performance reports for transparency.'
        }
      ]
    },
    testimonials: {
      title: [
        { text: "Clinics Who ", gradient: false },
        { text: "Increased Appointments via Google Ads", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
      ],
      description: 'See how Digi Aerotech helped clinics improve visibility, attract more patients, and maximize ROI using Google Ads.',
      testimonials: [
        {
          id: '1',
          message: 'Our clinic appointments doubled within 2 months thanks to Digi Aerotech’s Google Ads strategy.',
          highlight: 'appointments doubled',
          stars: 5,
          name: 'Dr. Anika Sharma',
          designation: 'Founder',
          company: 'Sharma Care Clinic'
        },
        {
          id: '2',
          message: 'The targeted ads brought high-quality leads and patients from our city, improving our revenue significantly.',
          highlight: 'high-quality leads and patients',
          stars: 5,
          name: 'Dr. Rohan Verma',
          designation: 'CEO',
          company: 'Verma Health'
        }
      ]
    },
    cta: {
      title: 'Ready to Attract More Patients Fast?',
      subtitle: 'TARGETED GOOGLE ADS FOR HIGH-INTENT PATIENTS',
      description: 'Book a free consultation with Digi Aerotech and start driving more patients to your clinic using Google Ads.'
    }
  }
};
