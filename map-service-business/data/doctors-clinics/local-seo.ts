import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconMapPin, IconSearch, IconStethoscope, IconUsers, IconArrowRight, IconRocket,
  IconTrendingUp, IconShieldCheck, IconCalendarEvent, IconHeart, IconStar,
  IconPhone
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'local-seo',
  business: 'doctors-clinics',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant1',
    process: 'variant2',
  },
  data: {
    slug: 'local-seo-doctors-clinics',
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
            { text: "Why Clinics Struggle with ", gradient: false },
            { text: "Local SEO Visibility", gradient: true, gradientClass: "from-green-500 via-emerald-500 to-teal-500" }
          ],
          subheadline: "Many doctors fail to appear in the top results when patients search for medical services nearby.",
          painPoints: [
            "Clinic not showing up in Google local searches",
            "Weak or unoptimized Google Business Profile",
            "Low visibility in Google Maps results",
            "Negative or few patient reviews hurting reputation",
            "Unoptimized local keywords & service pages",
            "Competitors dominating local rankings"
          ],
          solutionPoints: [
            "Full optimization of Google Business Profile (GMB)",
            "Keyword-rich local SEO strategies for your specialties",
            "Geo-targeted content and local citations",
            "Reputation management & patient review strategies",
            "Local backlink building for authority",
            "Consistent tracking & optimization to maintain ranking"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Boost Local SEO Visibility"
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
              question: 'What is local SEO for doctors and clinics?',
              answer: 'Local SEO helps your clinic appear at the top of Google searches and Maps when patients in your area search for your medical services.',
              icon: React.createElement(IconSearch, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'How does Local SEO help attract patients?',
              answer: 'By ranking high on local searches and Maps, your clinic gets discovered by patients actively looking for immediate medical help nearby.',
              icon: React.createElement(IconUsers, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'How long does it take to see results?',
              answer: 'Typically, clinics see improved visibility and patient inquiries within 2-3 months of consistent Local SEO optimization.',
              icon: React.createElement(IconCalendarEvent, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Do you also optimize Google Business Profile?',
              answer: 'Yes, we optimize every element of your GMB including services, reviews, images, and local content.',
              icon: React.createElement(IconMapPin, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Can Local SEO help multi-location clinics?',
              answer: 'Absolutely. We build geo-targeted strategies that give visibility to each clinic location.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'Will you help with patient reviews?',
              answer: 'Yes, we implement patient review acquisition & reputation management to build trust and boost rankings.',
              icon: React.createElement(IconHeart, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Want ",
      headlineKeywords: [
        "Your Clinic on Top of Google?",
        "More Local Patient Inquiries?",
        "Google Maps Rankings Boost?",
        "Optimized GMB for Doctors?",
        "Dominate Local Search Results?"
      ],
      brandLine: [
        { text: "📍 Get Found by Patients Nearby with Local SEO for Clinics", gradient: false }
      ],
      subheadline: "We help doctors and clinics dominate local Google searches and Maps to attract high-intent patients from your area.",
      ctaButtons: [
        { icon: React.createElement(IconRocket, { size: 28 }), text: "Get Free Local SEO Audit", link: "/contact" },
        { icon: React.createElement(IconPhone, { size: 28 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconMapPin, { size: 32 }),
          title: "Top 3 Google Rankings",
          description: "Clinics ranked on Maps & local search"
        },
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "2x More Patient Calls",
          description: "High-intent local patients reaching clinics"
        },
        {
          icon: React.createElement(IconStar, { size: 32 }),
          title: "Improved Reputation",
          description: "More positive reviews & patient trust"
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "Sustainable Growth",
          description: "Long-term patient acquisition via local SEO"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the ", gradient: false },
        { text: "#1 Local SEO Partner for Clinics", gradient: true, gradientClass: "from-green-500 via-emerald-500 to-teal-500" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconMapPin, { size: 28 }),
          title: "Google Maps Optimization",
          description: "Rank higher in Maps and get more nearby patient calls."
        },
        {
          icon: React.createElement(IconSearch, { size: 28 }),
          title: "Local Keyword Domination",
          description: "Rank for medical services patients are actively searching in your city."
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "Geo-Targeted Content",
          description: "We create and optimize content targeting your service area."
        },
        {
          icon: React.createElement(IconHeart, { size: 28 }),
          title: "Reputation Management",
          description: "Boost credibility with more positive patient reviews."
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Local Backlink Building",
          description: "Strengthen local SEO authority with niche citations."
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 28 }),
          title: "Data-Driven Reporting",
          description: "Transparent insights on rankings, calls, and patient leads."
        }
      ],
      cta: {
        text: "Boost Local Visibility",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our 6-Step Local SEO Process for Clinics',
      subtitle: 'STEP-BY-STEP PATIENT VISIBILITY SYSTEM',
      className: 'border-t border-border dark:border-gray-700',
      description: 'We optimize your clinic to dominate Google search & Maps locally, ensuring more patients discover and contact you.',
      steps: [
        {
          id: 1,
          title: 'Local SEO Audit',
          description: 'Analyze current visibility, competitor presence, and GMB performance.'
        },
        {
          id: 2,
          title: 'Google Business Profile Optimization',
          description: 'Optimize your clinic’s profile with keywords, services, images, and local posts.'
        },
        {
          id: 3,
          title: 'Local Keyword Targeting',
          description: 'Identify and optimize for patient search terms specific to your city and services.'
        },
        {
          id: 4,
          title: 'Content & Citation Building',
          description: 'Publish geo-targeted content and acquire local citations to boost authority.'
        },
        {
          id: 5,
          title: 'Review & Reputation Growth',
          description: 'Implement strategies to acquire more patient reviews and improve ratings.'
        },
        {
          id: 6,
          title: 'Tracking & Optimization',
          description: 'Monitor rankings, calls, and inquiries, then refine strategies for growth.'
        }
      ]
    },
    cta: {
      title: 'Want More Patients from Local Google Searches?',
      subtitle: 'BOOST LOCAL RANKINGS, MAP VISIBILITY & PATIENT CALLS',
      description: 'Book a free Local SEO audit with Digi Aerotech and start dominating Google Maps & local search results today.'
    }
  }
};
