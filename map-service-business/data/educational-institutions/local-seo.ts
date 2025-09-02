import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconSchool,
  IconMapPin,
  IconUsers,
  IconTrendingUp,
  IconShieldCheck,
  IconRocket,
  IconCalendarEvent,
  IconArrowRight,
  IconPhone,
  IconGlobe,
  IconStar,
  IconCircleCheck,
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'local-seo',
  business: 'educational-institutions',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant1',
    process: 'variant3',
  },
  data: {
    slug: 'local-seo-educational-institutions',
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
            { text: "In Local SEO & Visibility", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Schools, colleges, coaching centers, and e-learning platforms often struggle to appear in local search results, losing potential students to nearby competitors.",
          painPoints: [
            "Low visibility in local search results and maps",
            "Difficulty appearing in Google Business listings",
            "Few organic inquiries from local parents and students",
            "Poor online reviews affecting credibility",
            "Inefficient local SEO strategies impacting enrollment"
          ],
          solutionPoints: [
            "Optimized Google Business listings for maximum visibility",
            "Local keyword targeting for your programs and courses",
            "Enhanced online presence through reviews and citations",
            "Map and mobile optimization to attract local students",
            "Strategic content & backlinks for local search dominance"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Boost Local Enrollment Visibility"
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
              question: 'Why is local SEO important for schools and colleges?',
              answer: 'Local SEO helps your institution appear in nearby searches, attracting parents and students who are actively looking for programs.',
              icon: React.createElement(IconMapPin, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'How do Google Business listings help?',
              answer: 'A well-optimized GMB listing increases visibility in Google Maps and local search results, driving more inquiries.',
              icon: React.createElement(IconGlobe, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Can we manage reviews and ratings?',
              answer: 'Yes, we help manage, respond, and generate positive reviews to boost your local credibility.',
              icon: React.createElement(IconStar, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Do you optimize for mobile search?',
              answer: 'Absolutely. Mobile optimization ensures local students and parents find your institution easily on smartphones.',
              icon: React.createElement(IconPhone, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'How soon will we see improvements in local search?',
              answer: 'Significant improvements in local rankings and inquiries typically appear within weeks to months depending on competition.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'Do you handle multiple locations for schools or coaching centers?',
              answer: 'Yes, we optimize listings and local SEO for each branch or campus individually to maximize inquiries.',
              icon: React.createElement(IconCircleCheck, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Want ",
      headlineKeywords: [
        "Higher Local Visibility?",
        "More Local Student Inquiries?",
        "Top Rankings in Your Area?",
        "Attract Nearby Parents & Students?",
        "Local SEO for Educational Institutions?"
      ],
      brandLine: [
        { text: "📍 Local SEO Services for Schools, Colleges & Coaching Centers", gradient: false }
      ],
      subheadline: "We help educational institutions dominate local search results, attract nearby students, and boost enrollment rates.",
      ctaButtons: [
        { icon: React.createElement(IconPhone, { size: 28 }), text: "Book Free Local SEO Call", link: "/contact" },
        { icon: React.createElement(IconArrowRight, { size: 28 }), text: "Start Local SEO Now", link: "/contact", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "15,000+ Local Leads",
          description: "Generated for educational institutions"
        },
        {
          icon: React.createElement(IconMapPin, { size: 32 }),
          title: "100+ Institutions Optimized",
          description: "Schools, colleges & coaching centers"
        },
        {
          icon: React.createElement(IconStar, { size: 32 }),
          title: "4.9/5 Client Satisfaction",
          description: "Trusted by institutions for local SEO"
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 32 }),
          title: "Local Search Dominance",
          description: "Optimized listings & visibility across regions"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the ", gradient: false },
        { text: "#1 Local SEO Partner for Educational Institutions", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Improved Local Rankings",
          description: "Get to the top of Google Maps and search results in your area."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Targeted Local Leads",
          description: "Attract parents and students near your campus."
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "Multi-Location Support",
          description: "Optimize SEO for multiple branches or campuses."
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 28 }),
          title: "Review & Reputation Management",
          description: "Build trust through ratings, reviews, and citations."
        },
        {
          icon: React.createElement(IconCalendarEvent, { size: 28 }),
          title: "Continuous Monitoring",
          description: "Track and optimize your local presence regularly."
        },
        {
          icon: React.createElement(IconGlobe, { size: 28 }),
          title: "Comprehensive Reporting",
          description: "Transparent insights into rankings, leads, and ROI."
        }
      ],
      cta: {
        text: "Boost Local Enrollment Now",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Local SEO Process for Educational Institutions',
      subtitle: 'STEP-BY-STEP LOCAL VISIBILITY',
      className: 'border-t border-border dark:border-gray-700',
      description: 'We ensure schools, colleges, and coaching centers appear in top local search results to attract nearby students and parents effectively.',
      steps: [
        {
          id: 1,
          title: 'Local Audit & Competitor Analysis',
          description: 'Evaluate your current local visibility and identify competitors in the area.'
        },
        {
          id: 2,
          title: 'Google Business Optimization',
          description: 'Set up and optimize GMB listings with accurate info, photos, and categories.'
        },
        {
          id: 3,
          title: 'Local Keyword Research',
          description: 'Identify geo-targeted keywords parents and students are searching for.'
        },
        {
          id: 4,
          title: 'On-Page & Off-Page Optimization',
          description: 'Optimize website, content, and local citations to boost search rankings.'
        },
        {
          id: 5,
          title: 'Review & Reputation Management',
          description: 'Encourage positive reviews, respond to feedback, and maintain strong credibility.'
        },
        {
          id: 6,
          title: 'Monitoring & Reporting',
          description: 'Track rankings, leads, and engagement; continuously refine for better results.'
        }
      ]
    },
    cta: {
      title: 'Ready to Boost Your Local Student Enrollment?',
      subtitle: 'Dominate Local Searches and Attract Nearby Students',
      description: 'Book a free local SEO consultation with Digi Aerotech and enhance your institution’s visibility today.'
    }
  }
};
