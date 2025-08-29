import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconSchool,
  IconMapPin,
  IconUsers,
  IconShieldCheck,
  IconCalendarEvent,
  IconRocket,
  IconArrowRight,
  IconPhone,
  IconGlobe,
  IconStar
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'gmb-services',
  business: 'educational-institutions',
  variants: {
    hero: 'variant1',
    whyChooseUs: 'variant3',
    process: 'variant2',
    testimonials: 'variant1'
  },
  data: {
    slug: 'gmb-services-educational-institutions',
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
            { text: "with Google Business Profile", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Schools, colleges, coaching centers, and e-learning platforms often struggle to attract local students and parents through online presence.",
          painPoints: [
            "Low visibility on Google Maps and Search results",
            "Inaccurate or incomplete business listings",
            "Difficulty collecting and showcasing positive reviews",
            "Competition from other local educational institutions",
            "Poor engagement from local students and parents"
          ],
          solutionPoints: [
            "Optimized Google Business Profiles for better local search visibility",
            "Accurate listings with up-to-date information",
            "Review management strategies to boost trust and credibility",
            "Local SEO integration to outrank competitors",
            "Ongoing profile monitoring and optimization to maintain top rankings"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Enhance Your Local Visibility Now"
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
              question: 'How can GMB increase student inquiries?',
              answer: 'A fully optimized Google Business Profile ensures parents and students find you easily, leading to more inquiries and registrations.',
              icon: React.createElement(IconMapPin, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Can you manage reviews for our institution?',
              answer: 'Yes, we help you collect, respond, and showcase reviews to build trust and credibility.',
              icon: React.createElement(IconStar, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Do you optimize for local search?',
              answer: 'Absolutely. We implement local SEO strategies to ensure your institution ranks higher in your city or area.',
              icon: React.createElement(IconGlobe, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Will GMB help if we are a new institution?',
              answer: 'Yes. New institutions can gain instant visibility through accurate listings, optimized keywords, and review management.',
              icon: React.createElement(IconSchool, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Do you track profile performance?',
              answer: 'We provide monthly insights on profile views, clicks, calls, and directions to measure growth.',
              icon: React.createElement(IconRocket, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'How long to see results from GMB optimization?',
              answer: 'Most educational institutions see improved local visibility within 3–6 weeks, depending on competition.',
              icon: React.createElement(IconCalendarEvent, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Want ",
      headlineKeywords: [
        "More Local Students?",
        "Higher Parent Engagement?",
        "Top-Ranking on Google Maps?",
        "Better Visibility in Your Area?",
        "GMB Optimization for Schools & Colleges?"
      ],
      brandLine: [
        { text: "🏫 Google Business Profile Services for Educational Institutions", gradient: false }
      ],
      subheadline: "We help schools, colleges, coaching centers, and e-learning platforms attract more local students and parents through optimized Google Business Profiles.",
      ctaButtons: [
        { icon: React.createElement(IconPhone, { size: 28 }), text: "Book Free GMB Consultation", link: "/contact" },
        { icon: React.createElement(IconArrowRight, { size: 28 }), text: "Boost My Local Visibility", link: "/contact", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "30,000+ Local Students",
          description: "Reached through optimized GMB listings"
        },
        {
          icon: React.createElement(IconRocket, { size: 32 }),
          title: "200+ Institutions",
          description: "Profile optimized successfully"
        },
        {
          icon: React.createElement(IconStar, { size: 32 }),
          title: "4.9/5 Satisfaction",
          description: "Loved by educational institutions"
        },
        {
          icon: React.createElement(IconGlobe, { size: 32 }),
          title: "Enhanced Local Visibility",
          description: "Ranked top in city & area searches"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the ", gradient: false },
        { text: "#1 GMB Partner for Educational Institutions", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconMapPin, { size: 28 }),
          title: "Local Search Expertise",
          description: "Ensure your institution appears in top local searches."
        },
        {
          icon: React.createElement(IconStar, { size: 28 }),
          title: "Review Management",
          description: "Collect and showcase positive reviews to build trust."
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "Parent & Student Engagement",
          description: "Improve engagement through calls, messages, and directions."
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 28 }),
          title: "Accurate Listings",
          description: "Keep all details updated for credibility and ranking."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Continuous Monitoring",
          description: "Track performance and adjust strategies for best results."
        },
        {
          icon: React.createElement(IconGlobe, { size: 28 }),
          title: "Competitive Advantage",
          description: "Outrank nearby institutions and attract more students."
        }
      ],
      cta: {
        text: "Get Discovered Locally Today",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Proven GMB Optimization Process for Educational Institutions',
      subtitle: 'STEP-BY-STEP LOCAL VISIBILITY BOOST',
      className: 'border-t border-border dark:border-gray-700',
      description: 'From accurate listings to review management, our process ensures your institution stands out locally and attracts more students and parents.',
      steps: [
        {
          id: 1,
          title: 'Profile Audit & Competitor Analysis',
          description: 'Analyze your current profile and compare with local competitors.'
        },
        {
          id: 2,
          title: 'Accurate Business Listing',
          description: 'Update all essential information including address, phone, and website.'
        },
        {
          id: 3,
          title: 'Review Collection & Management',
          description: 'Encourage positive reviews and respond to feedback promptly.'
        },
        {
          id: 4,
          title: 'Local SEO Integration',
          description: 'Optimize profile for location-specific keywords and searches.'
        },
        {
          id: 5,
          title: 'Performance Tracking',
          description: 'Monitor clicks, calls, and direction requests to measure engagement.'
        },
        {
          id: 6,
          title: 'Continuous Optimization',
          description: 'Regular updates and improvements to maintain top local visibility.'
        }
      ]
    },
    testimonials: {
      title: [
        { text: "Institutions Who ", gradient: false },
        { text: "Boosted Local Visibility with GMB", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      description: 'See how Digi Aerotech helped schools, colleges, and coaching centers attract more local students through optimized Google Business Profiles.',
      testimonials: [
        {
          id: '1',
          message: 'Our college inquiries increased by 40% after GMB optimization by Digi Aerotech.',
          highlight: 'inquiries increased by 40%',
          stars: 5,
          name: 'Dr. Anjali Mehra',
          designation: 'Principal',
          company: 'Sunrise College'
        },
        {
          id: '2',
          message: 'Parents find our school easily now, thanks to professional GMB management.',
          highlight: 'parents find our school easily',
          stars: 5,
          name: 'Rohit Verma',
          designation: 'Director',
          company: 'Bright Minds Academy'
        }
      ]
    },
    cta: {
      title: 'Ready to Attract More Local Students?',
      subtitle: 'Optimize Your GMB and Boost Visibility',
      description: 'Book a free consultation with Digi Aerotech and see how your institution can dominate local searches.'
    }
  }
};
