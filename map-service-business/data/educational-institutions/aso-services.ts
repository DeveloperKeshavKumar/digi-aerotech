import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconBook,
  IconUsers,
  IconRocket,
  IconShieldCheck,
  IconSearch,
  IconArrowRight,
  IconCalendarEvent,
  IconPhone,
  IconGlobe,
  IconCertificate,
  IconStar
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'aso-services',
  business: 'educational-institutions',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant1',
    process: 'variant3',
  },
  data: {
    slug: 'aso-services-educational-institutions',
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
            { text: "in App Visibility & Enrollment", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Schools, colleges, coaching centers, and e-learning platforms often struggle to get their apps noticed by students and parents.",
          painPoints: [
            "Low visibility on Google Play and App Store searches",
            "Difficulty reaching target student demographics",
            "Low app downloads and engagement rates",
            "High competition from other educational apps",
            "Limited knowledge of ASO best practices"
          ],
          solutionPoints: [
            "Optimized app titles, descriptions, and keywords for search rankings",
            "Targeted app store campaigns to attract relevant students and parents",
            "Enhanced app visuals (icons, screenshots, videos) to boost conversions",
            "Competitor analysis and keyword tracking for continuous improvement",
            "Regular updates and monitoring to maintain top visibility"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Boost Your App Visibility Today"
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
              question: 'How can ASO increase student enrollments?',
              answer: 'Optimizing your app store presence ensures more students discover your app, leading to higher downloads and enrollments.',
              icon: React.createElement(IconCertificate, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Do you optimize both App Store and Google Play?',
              answer: 'Yes. We perform full ASO for both platforms, covering keywords, visuals, and app performance optimization.',
              icon: React.createElement(IconBook, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Can you help improve app engagement?',
              answer: 'Absolutely. We implement ASO strategies along with app description improvements and visual enhancements to boost engagement.',
              icon: React.createElement(IconUsers, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Do you track ASO performance regularly?',
              answer: 'Yes. We provide monthly performance reports and make continuous optimizations to maintain high rankings.',
              icon: React.createElement(IconRocket, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Will ASO work for new educational apps?',
              answer: 'Definitely. Our ASO strategy is designed to give new apps immediate visibility and downloads from relevant audiences.',
              icon: React.createElement(IconCalendarEvent, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'How quickly can we see results from ASO?',
              answer: 'Most educational apps see improved rankings and downloads within 4–6 weeks, depending on competition and keywords.',
              icon: React.createElement(IconSearch, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Want ",
      headlineKeywords: [
        "More App Downloads?",
        "Higher Student Engagement?",
        "Better App Visibility?",
        "Boost Enrollment through Mobile?",
        "Top-Ranking Educational App?"
      ],
      brandLine: [
        { text: "📱 ASO Services for Schools, Colleges & E-learning Platforms", gradient: false }
      ],
      subheadline: "We help educational institutions optimize their apps to increase visibility, downloads, and student engagement effectively.",
      ctaButtons: [
        { icon: React.createElement(IconPhone, { size: 28 }), text: "Book Free ASO Consultation", link: "/contact" },
        { icon: React.createElement(IconArrowRight, { size: 28 }), text: "Boost My App Now", link: "/contact", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "50,000+ Students",
          description: "Reached through optimized apps"
        },
        {
          icon: React.createElement(IconRocket, { size: 32 }),
          title: "100+ Educational Apps",
          description: "Ranked & optimized successfully"
        },
        {
          icon: React.createElement(IconStar, { size: 32 }),
          title: "4.9/5 Client Satisfaction",
          description: "Loved by educational institutions"
        },
        {
          icon: React.createElement(IconGlobe, { size: 32 }),
          title: "Global Visibility",
          description: "Apps seen by students worldwide"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the ", gradient: false },
        { text: "#1 ASO Partner for Educational Apps", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconSearch, { size: 28 }),
          title: "Keyword Optimization",
          description: "Targeted keywords to rank your app higher."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "App Store Optimization",
          description: "Boost visibility on Google Play & App Store."
        },
        {
          icon: React.createElement(IconBook, { size: 28 }),
          title: "Content & Visual Enhancements",
          description: "Eye-catching icons, screenshots, and descriptions."
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "Audience Targeting",
          description: "Reach relevant students and parents effectively."
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 28 }),
          title: "Competitor Analysis",
          description: "Stay ahead of other educational apps."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Continuous Monitoring",
          description: "Track rankings and optimize regularly."
        }
      ],
      cta: {
        text: "Boost Your Educational App Today",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Proven ASO Process for Educational Apps',
      subtitle: 'STEP-BY-STEP APP VISIBILITY BOOST',
      className: 'border-t border-border dark:border-gray-700',
      description: 'From keyword research to continuous monitoring, our ASO process ensures your educational app reaches more students and parents effectively.',
      steps: [
        {
          id: 1,
          title: 'App & Competitor Analysis',
          description: 'Review your app and competitor apps to identify opportunities and challenges.'
        },
        {
          id: 2,
          title: 'Keyword Research',
          description: 'Find the most effective keywords for your target audience and app category.'
        },
        {
          id: 3,
          title: 'Optimized App Title & Description',
          description: 'Craft compelling titles and descriptions to improve app store rankings.'
        },
        {
          id: 4,
          title: 'Visual Asset Optimization',
          description: 'Enhance app icon, screenshots, and videos to attract downloads.'
        },
        {
          id: 5,
          title: 'App Submission & Tracking',
          description: 'Submit updates to app stores and track performance closely.'
        },
        {
          id: 6,
          title: 'Continuous Optimization',
          description: 'Monitor rankings, reviews, and competition to maintain top visibility.'
        }
      ]
    },
    cta: {
      title: 'Ready to Boost Your Educational App Downloads?',
      subtitle: 'Get Discovered. Get Enrollments.',
      description: 'Book a free consultation with Digi Aerotech and watch your educational app reach more students and parents effectively.'
    }
  }
};
