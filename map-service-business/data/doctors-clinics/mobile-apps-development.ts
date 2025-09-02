import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconStethoscope, IconHeartbeat, IconDeviceMobile, IconUsers, IconArrowRight,
  IconRocket, IconCalendarEvent, IconChartBar, IconBrandAndroid, IconBrandApple,
  IconShieldCheck, IconCloud, IconLayoutDashboard, IconMessageCircle
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'mobile-app-development',
  business: 'doctors-clinics',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant2',
    process: 'variant3',
  },
  data: {
    slug: 'mobile-app-development-doctors-clinics',
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
            { text: "Why Doctors & Clinics Need a ", gradient: false },
            { text: "Custom Mobile App", gradient: true, gradientClass: "from-blue-500 via-cyan-500 to-indigo-500" }
          ],
          subheadline: "Patients expect healthcare to be digital, fast, and accessible. Without a mobile app, clinics risk losing patients to tech-enabled competitors.",
          painPoints: [
            "Difficulty in managing patient appointments",
            "Patients dropping off due to long wait times",
            "No streamlined system for medical records",
            "Lack of teleconsultation or chat support",
            "Dependence on manual follow-ups & calls",
            "Losing patients to modern, app-enabled hospitals"
          ],
          solutionPoints: [
            "One-click online appointment booking system",
            "Push notifications & reminders to reduce no-shows",
            "Secure medical record storage & easy access",
            "Built-in telemedicine & video consultation feature",
            "24/7 patient communication with in-app chat",
            "Custom clinic branding with iOS & Android apps"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Build My Clinic App Today"
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
              question: 'Why do doctors and clinics need a mobile app?',
              answer: 'A mobile app improves patient engagement, simplifies appointment booking, provides teleconsultation, and strengthens your clinic’s digital presence.',
              icon: React.createElement(IconStethoscope, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Can the app be customized for my clinic?',
              answer: 'Yes, we build fully customized apps with your clinic’s branding, features, and workflows.',
              icon: React.createElement(IconLayoutDashboard, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Will it support both Android and iOS?',
              answer: 'Yes, we build apps for both Android (Google Play Store) and iOS (App Store).',
              icon: React.createElement(IconBrandAndroid, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Is patient data secure in the app?',
              answer: 'Absolutely. We use HIPAA-compliant frameworks and encrypted databases to secure sensitive medical records.',
              icon: React.createElement(IconShieldCheck, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Can patients chat or consult via video calls?',
              answer: 'Yes, we integrate in-app chat, teleconsultation, and video conferencing features.',
              icon: React.createElement(IconMessageCircle, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'Do you provide maintenance & updates?',
              answer: 'Yes, we provide continuous app maintenance, updates, and feature enhancements.',
              icon: React.createElement(IconCloud, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Transform ",
      headlineKeywords: [
        "Your Clinic with a Mobile App",
        "Doctor-Patient Engagement",
        "Healthcare Experience",
        "Digital Appointments & Consultations",
        "Your Practice into Digital Care"
      ],
      brandLine: [
        { text: "📱 Patient-Centric Mobile Apps for Doctors & Clinics", gradient: false }
      ],
      subheadline: "We help doctors & clinics build secure, user-friendly, and ROI-driven healthcare mobile apps for better patient engagement and clinic growth.",
      ctaButtons: [
        { icon: React.createElement(IconDeviceMobile, { size: 28 }), text: "Get Free App Demo", link: "/contact" },
        { icon: React.createElement(IconRocket, { size: 28 }), text: "Build My Clinic App", link: "/contact", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "5000+ Patients",
          description: "Average engagement per clinic app"
        },
        {
          icon: React.createElement(IconChartBar, { size: 32 }),
          title: "40% Fewer No-Shows",
          description: "Automated reminders & follow-ups"
        },
        {
          icon: React.createElement(IconCalendarEvent, { size: 32 }),
          title: "Faster Appointments",
          description: "Digital booking saves staff time"
        },
        {
          icon: React.createElement(IconHeartbeat, { size: 32 }),
          title: "Improved Care",
          description: "Better patient-doctor communication"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Doctors Trust ", gradient: false },
        { text: "Digi Aerotech for Healthcare Apps", gradient: true, gradientClass: "from-blue-500 via-cyan-500 to-indigo-500" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconStethoscope, { size: 28 }),
          title: "Healthcare Expertise",
          description: "We specialize in apps for doctors, clinics, and healthcare providers."
        },
        {
          icon: React.createElement(IconBrandApple, { size: 28 }),
          title: "Cross-Platform Apps",
          description: "iOS & Android apps with seamless performance."
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 28 }),
          title: "Data Security",
          description: "HIPAA-compliant & encrypted patient data protection."
        },
        {
          icon: React.createElement(IconLayoutDashboard, { size: 28 }),
          title: "Custom Features",
          description: "Teleconsultation, EHR, prescriptions, reminders & more."
        },
        {
          icon: React.createElement(IconCloud, { size: 28 }),
          title: "Maintenance & Updates",
          description: "Continuous improvements & feature rollouts."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Scalable Technology",
          description: "Apps that grow with your practice & patient base."
        }
      ],
      cta: {
        text: "Start My Healthcare App Today",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our 6-Step App Development Process',
      subtitle: 'SECURE • CUSTOM • PATIENT-FIRST',
      className: 'border-t border-border dark:border-gray-700',
      description: 'We follow a proven roadmap to deliver secure, patient-friendly, and growth-driven apps for healthcare providers.',
      steps: [
        {
          id: 1,
          title: 'Requirement Analysis',
          description: 'Understand your clinic workflow, features & patient needs.'
        },
        {
          id: 2,
          title: 'Wireframing & UI/UX Design',
          description: 'Design user-friendly interfaces with intuitive navigation.'
        },
        {
          id: 3,
          title: 'App Development',
          description: 'Custom features built using latest iOS & Android frameworks.'
        },
        {
          id: 4,
          title: 'Integration',
          description: 'EHR, payment gateways, teleconsultation & chat integration.'
        },
        {
          id: 5,
          title: 'Testing & Security',
          description: 'Multi-level QA & HIPAA-compliant data encryption.'
        },
        {
          id: 6,
          title: 'Launch & Maintenance',
          description: 'App store deployment, updates & ongoing support.'
        }
      ]
    },
    cta: {
      title: 'Ready to Build Your Clinic’s App?',
      subtitle: 'DIGITALIZE YOUR PRACTICE • ENGAGE PATIENTS • SCALE FASTER',
      description: 'Book a free consultation with Digi Aerotech and get a patient-first, secure, and custom mobile app for your clinic or healthcare practice.'
    }
  }
};
