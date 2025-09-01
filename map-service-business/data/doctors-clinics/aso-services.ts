import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconStethoscope, IconUsers, IconRocket, IconShieldCheck, IconTrendingUp, IconArrowRight,
  IconMedicalCross, IconDeviceMobile, IconStar, IconHeart, IconCalendarEvent, IconPhone,
  IconMapPin
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'aso-services',
  business: 'doctors-clinics',
  variants: {
    hero: 'variant1',
    whyChooseUs: 'variant2',
    process: 'variant3',
    testimonials: 'variant1'
  },
  data: {
    slug: 'aso-services-doctors-clinics',
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
            { text: "in Mobile App Visibility", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
          ],
          subheadline: "Medical apps struggle to attract patients without proper ASO. Low app downloads can limit patient engagement and clinic growth.",
          painPoints: [
            "Low visibility in App Store & Google Play",
            "Poor keyword targeting for healthcare searches",
            "Low app ratings & minimal patient reviews",
            "Difficulty reaching local patients effectively",
            "High competition from generic health apps",
            "Limited retention and repeated engagement from users"
          ],
          solutionPoints: [
            "App store keyword optimization for local and medical searches",
            "Compelling app descriptions & visuals to increase downloads",
            "Review & rating management to boost trust and credibility",
            "Geo-targeted ASO strategies to attract local patients",
            "Competitor analysis to outrank similar medical apps",
            "Retention strategies via push notifications and updates"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Boost Your App Downloads Now"
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
              question: 'What is ASO and why do doctors need it?',
              answer: 'ASO (App Store Optimization) helps your clinic’s app rank higher in app stores, increasing visibility and patient downloads.',
              icon: React.createElement(IconStethoscope, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Can you improve app ratings for my clinic app?',
              answer: 'Yes. We guide patients to leave positive reviews, respond to feedback, and optimize app content to increase ratings.',
              icon: React.createElement(IconStar, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Do you target local patients specifically?',
              answer: 'Absolutely. We use geo-targeted keywords and localized app content to attract patients in your city or region.',
              icon: React.createElement(IconMapPin, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'How soon can I see more downloads?',
              answer: 'With optimized keywords, visuals, and reviews, many clinics see a noticeable increase in downloads within weeks.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Do you also help with app retention?',
              answer: 'Yes. We implement strategies like push notifications, app updates, and engaging content to keep patients returning.',
              icon: React.createElement(IconHeart, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'Is ASO suitable for both Android & iOS apps?',
              answer: 'Yes. We optimize your clinic’s app for both Google Play and Apple App Store to maximize reach and downloads.',
              icon: React.createElement(IconDeviceMobile, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Want ",
      headlineKeywords: [
        "More Patient App Downloads?",
        "Higher App Visibility?",
        "Better App Ratings?",
        "Local Patient Engagement?",
        "360° ASO for Clinics?"
      ],
      brandLine: [
        { text: "🏥 Boost Your Clinic’s Mobile App Reach with Expert ASO Services", gradient: false }
      ],
      subheadline: "We help doctors, clinics, and healthcare providers improve app visibility, downloads, ratings, and patient engagement through proven ASO strategies.",
      ctaButtons: [
        { icon: React.createElement(IconRocket, { size: 28 }), text: "Book Free ASO Audit", link: "/contact" },
        { icon: React.createElement(IconPhone, { size: 28 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "100+ Clinic Apps",
          description: "Optimized for downloads and engagement"
        },
        {
          icon: React.createElement(IconMedicalCross, { size: 32 }),
          title: "50k+ Downloads",
          description: "Driven via ASO strategies"
        },
        {
          icon: React.createElement(IconStar, { size: 32 }),
          title: "4.9/5 Ratings",
          description: "Improved app credibility & trust"
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 32 }),
          title: "Local Patient Reach",
          description: "Geo-targeted strategies for clinics"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the ", gradient: false },
        { text: "#1 ASO Partner for Doctors & Clinics", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconStethoscope, { size: 28 }),
          title: "Healthcare App Expertise",
          description: "We understand patient behavior and healthcare app trends for optimal results."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "High-Impact Keyword Optimization",
          description: "Targeted keywords to rank for medical searches and attract quality patients."
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Improved Downloads & Engagement",
          description: "Our ASO strategies increase app downloads and encourage active usage."
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 28 }),
          title: "Boosted Ratings & Reviews",
          description: "We manage and optimize reviews to enhance trust and credibility of your app."
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "Local Patient Targeting",
          description: "Geo-specific ASO ensures your app reaches patients in your city and region effectively."
        },
        {
          icon: React.createElement(IconHeart, { size: 28 }),
          title: "Retention & Engagement Focused",
          description: "Push notifications, updates, and content strategies keep patients returning to your app."
        }
      ],
      cta: {
        text: "Boost My App Now",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our 6-Step ASO Process for Doctors & Clinics',
      subtitle: 'STEP-BY-STEP APP GROWTH SYSTEM',
      className: 'border-t border-border dark:border-gray-700',
      description: 'From keyword research to patient retention, our 6-step ASO process ensures your clinic app is highly visible, trusted, and downloaded by the right patients.',
      steps: [
        {
          id: 1,
          title: 'App Store & Competitor Analysis',
          description: 'We audit your app, analyze competitors, and identify opportunities to improve visibility and discoverability in app stores.'
        },
        {
          id: 2,
          title: 'Keyword Research & Optimization',
          description: 'Target high-intent healthcare keywords and phrases to improve your app’s ranking and attract the right patients.'
        },
        {
          id: 3,
          title: 'Visuals & Description Enhancement',
          description: 'Optimize app icons, screenshots, videos, and descriptions to increase clicks, downloads, and user trust.'
        },
        {
          id: 4,
          title: 'Ratings & Review Management',
          description: 'Encourage satisfied patients to leave reviews, respond to feedback, and improve app ratings for higher credibility.'
        },
        {
          id: 5,
          title: 'Localized & Geo-Targeted ASO',
          description: 'Optimize your app for local search queries and patient locations to attract nearby patients actively looking for medical services.'
        },
        {
          id: 6,
          title: 'Monitoring, Reporting & Retention',
          description: 'Track app performance, rankings, and user engagement; implement push notifications and updates to keep patients returning.'
        }
      ]
    },
    testimonials: {
      title: [
        { text: "Clinics & Doctors Who ", gradient: false },
        { text: "Boosted App Engagement with Us", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
      ],
      description: 'See how Digi Aerotech has helped medical apps improve downloads, ratings, and patient retention across clinics.',
      testimonials: [
        {
          id: '1',
          message: 'Our clinic app downloads doubled after Digi Aerotech optimized our App Store listing and visuals.',
          highlight: 'downloads doubled',
          stars: 5,
          name: 'Dr. Ananya Roy',
          designation: 'Founder',
          company: 'CareWell Clinics'
        },
        {
          id: '2',
          message: 'The ASO strategies increased our app engagement and patient bookings significantly in just a few months.',
          highlight: 'increased app engagement',
          stars: 5,
          name: 'Dr. Rajiv Menon',
          designation: 'CEO',
          company: 'Healthy Life Clinic'
        }
      ]
    },
    cta: {
      title: 'Ready to Boost Your Clinic App Visibility?',
      subtitle: 'INCREASE DOWNLOADS, RATINGS, AND PATIENT ENGAGEMENT',
      description: 'Book a free ASO audit with Digi Aerotech and see how we can make your medical app rank higher, attract more patients, and retain them efficiently.'
    }
  }
};
