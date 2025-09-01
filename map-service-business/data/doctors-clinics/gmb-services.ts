import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconMapPin, IconStethoscope, IconUsers, IconShieldCheck, IconTrendingUp, IconArrowRight,
  IconCalendarEvent, IconStar, IconPhone, IconHeart, IconGlobe, IconRocket,
  IconCamera
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'gmb-services',
  business: 'doctors-clinics',
  variants: {
    hero: 'variant1',
    whyChooseUs: 'variant2',
    process: 'variant3',
    testimonials: 'variant1'
  },
  data: {
    slug: 'gmb-services-doctors-clinics',
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
            { text: "on Google My Business", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
          ],
          subheadline: "A poorly optimized Google My Business listing can result in lost local patients, low visibility, and fewer appointments.",
          painPoints: [
            "Low visibility in local searches and maps",
            "Incomplete or inconsistent clinic information",
            "Few or negative patient reviews affecting trust",
            "Difficulty attracting nearby patients",
            "Unclaimed or poorly maintained listings",
            "Lack of updates and posts to engage patients"
          ],
          solutionPoints: [
            "Complete and optimized GMB profile with accurate info",
            "Regular posting and updates to keep patients engaged",
            "Review management to boost credibility and trust",
            "Geo-targeted strategies to attract local patients",
            "Photos, services, and features optimized for conversion",
            "Continuous monitoring & performance reporting"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Optimize My GMB Now"
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
              question: 'Why do clinics need Google My Business optimization?',
              answer: 'GMB helps your clinic appear in local searches and maps, attracting more nearby patients who are actively looking for your services.',
              icon: React.createElement(IconMapPin, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Can you manage patient reviews for us?',
              answer: 'Yes. We respond to patient reviews professionally, encourage positive feedback, and maintain high trust and ratings.',
              icon: React.createElement(IconStar, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Do you optimize GMB for multiple clinic locations?',
              answer: 'Absolutely. Each location is optimized individually to ensure local visibility and engagement for nearby patients.',
              icon: React.createElement(IconGlobe, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'How soon can we see new patients from GMB?',
              answer: 'With proper optimization, clinics often see increased calls and appointment bookings within weeks.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Do you handle photos, services, and posts on GMB?',
              answer: 'Yes. We regularly update photos, services, offers, and posts to keep your GMB profile active and engaging.',
              icon: React.createElement(IconCamera, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'Is this suitable for small clinics too?',
              answer: 'Yes. Even a single-location clinic can attract more local patients with a well-optimized GMB profile.',
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
        "Higher Map Visibility?",
        "Better Online Reputation?",
        "Optimized Google Listings?",
        "360° GMB Services for Clinics?"
      ],
      brandLine: [
        { text: "🏥 Attract More Patients with Expert Google My Business Optimization", gradient: false }
      ],
      subheadline: "We help doctors and clinics get discovered by local patients, improve online credibility, and increase appointment bookings through GMB optimization.",
      ctaButtons: [
        { icon: React.createElement(IconRocket, { size: 28 }), text: "Book Free GMB Audit", link: "/contact" },
        { icon: React.createElement(IconPhone, { size: 28 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "500+ Local Patients",
          description: "Attracted via optimized GMB"
        },
        {
          icon: React.createElement(IconMapPin, { size: 32 }),
          title: "200+ Clinic Listings",
          description: "Fully optimized for visibility"
        },
        {
          icon: React.createElement(IconStar, { size: 32 }),
          title: "4.9/5 Ratings",
          description: "Improved clinic trust & credibility"
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 32 }),
          title: "Local SEO Boost",
          description: "Improved search rankings and map visibility"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the ", gradient: false },
        { text: "#1 GMB Partner for Doctors & Clinics", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconMapPin, { size: 28 }),
          title: "Local Search Expertise",
          description: "We ensure your clinic appears at the top for relevant local searches."
        },
        {
          icon: React.createElement(IconStethoscope, { size: 28 }),
          title: "Healthcare-Focused GMB Optimization",
          description: "We understand the medical industry and optimize listings for patient trust and engagement."
        },
        {
          icon: React.createElement(IconStar, { size: 28 }),
          title: "Ratings & Review Management",
          description: "Boost your credibility with professional review handling and patient engagement."
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Improved Patient Acquisition",
          description: "Our strategies increase calls, bookings, and walk-ins from local searches."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Optimized for Multiple Locations",
          description: "Each clinic branch is individually optimized to attract local patients effectively."
        },
        {
          icon: React.createElement(IconHeart, { size: 28 }),
          title: "Continuous Monitoring & Updates",
          description: "We maintain your GMB profile with regular posts, updates, and analytics reporting."
        }
      ],
      cta: {
        text: "Optimize My GMB Now",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our 6-Step GMB Optimization Process for Clinics',
      subtitle: 'STEP-BY-STEP LOCAL PATIENT ACQUISITION SYSTEM',
      className: 'border-t border-border dark:border-gray-700',
      description: 'From profile setup to ongoing monitoring, our 6-step GMB process ensures your clinic attracts more patients and builds online credibility.',
      steps: [
        {
          id: 1,
          title: 'Audit & Competitor Analysis',
          description: 'Analyze your current GMB profile and competitors to identify gaps and opportunities.'
        },
        {
          id: 2,
          title: 'Profile Completion & Optimization',
          description: 'Ensure accurate clinic info, services, hours, photos, and descriptions optimized for local search.'
        },
        {
          id: 3,
          title: 'Keyword & Category Targeting',
          description: 'Use relevant local and medical keywords to improve visibility in Google search and maps.'
        },
        {
          id: 4,
          title: 'Review & Reputation Management',
          description: 'Encourage positive reviews, respond to feedback, and maintain a strong online reputation.'
        },
        {
          id: 5,
          title: 'Posts & Engagement Updates',
          description: 'Publish regular posts, offers, and updates to engage patients and show activity to Google.'
        },
        {
          id: 6,
          title: 'Monitoring & Reporting',
          description: 'Track profile performance, map rankings, and patient interactions to optimize continuously.'
        }
      ]
    },
    testimonials: {
      title: [
        { text: "Clinics Who ", gradient: false },
        { text: "Attracted More Patients with GMB", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
      ],
      description: 'See how Digi Aerotech helped clinics improve visibility, reputation, and patient acquisition via Google My Business optimization.',
      testimonials: [
        {
          id: '1',
          message: 'Our clinic now appears on top in local searches, and patient appointments increased dramatically after GMB optimization.',
          highlight: 'patient appointments increased dramatically',
          stars: 5,
          name: 'Dr. Neha Verma',
          designation: 'Founder',
          company: 'Verma Care Clinic'
        },
        {
          id: '2',
          message: 'Digi Aerotech’s GMB services helped us manage reviews, posts, and listings effectively, gaining patient trust and credibility.',
          highlight: 'gaining patient trust and credibility',
          stars: 5,
          name: 'Dr. Amit Saxena',
          designation: 'CEO',
          company: 'Saxena Health'
        }
      ]
    },
    cta: {
      title: 'Ready to Boost Your Clinic’s Local Visibility?',
      subtitle: 'OPTIMIZE YOUR GOOGLE LISTING & ATTRACT MORE PATIENTS',
      description: 'Book a free GMB consultation with Digi Aerotech and get your clinic discovered by more patients in your area.'
    }
  }
};
