import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconStethoscope, IconDevices, IconTools, IconShieldCheck,
  IconHeart, IconCode, IconSpeedboat,
  IconRocket, IconCheck, IconArrowRight, IconUsers,
  IconBuildingHospital, IconTrendingUp, IconReportAnalytics
} from '@tabler/icons-react';
import { LifeBuoy, Wrench } from 'lucide-react';

export const map: ServiceBusinessMap = {
  service: 'web-design-development-maintenance',
  business: 'doctors-clinics',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant2',
    process: 'variant2',
    testimonials: 'variant1'
  },
  data: {
    slug: 'web-design-development-maintenance-doctors-clinics',
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
            { text: "Web Design, Development & Maintenance for ", gradient: false },
            { text: "Doctors & Clinics", gradient: true, gradientClass: "from-blue-500 via-green-500 to-cyan-500" }
          ],
          subheadline: "Your website is your digital clinic. If it looks outdated, loads slowly, or isn’t secure, patients won’t trust you.",
          painPoints: [
            "Outdated or poorly designed clinic websites",
            "Slow-loading websites leading to patient drop-offs",
            "Broken pages, errors, and unsecure patient data",
            "No mobile-friendly design for patients on-the-go",
            "Difficult appointment booking experience",
            "No ongoing maintenance or updates"
          ],
          solutionPoints: [
            "Modern, patient-friendly web design",
            "Fast, mobile-optimized development",
            "Secure hosting & data protection",
            "Seamless appointment booking integration",
            "Custom features like telemedicine, blogs, and reviews",
            "24/7 maintenance & support for uninterrupted service"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Upgrade My Clinic Website"
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
              question: 'Why do doctors need a professional website?',
              answer: 'Patients judge credibility based on your website. A modern, secure, and user-friendly website builds trust and increases bookings.',
              icon: React.createElement(IconStethoscope, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Do you offer mobile-friendly websites?',
              answer: 'Yes. All our websites are fully responsive and optimized for mobile, tablets, and desktops.',
              icon: React.createElement(IconDevices, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'What if my website crashes?',
              answer: 'We offer ongoing maintenance & monitoring to ensure your clinic website is always live, fast, and secure.',
              icon: React.createElement(Wrench, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Can you integrate online appointment booking?',
              answer: 'Yes. We set up appointment booking, telemedicine integrations, and payment gateways for seamless patient experience.',
              icon: React.createElement(IconCheck, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Is my clinic website secure?',
              answer: 'Absolutely. We implement SSL, data encryption, and regular backups to protect patient information.',
              icon: React.createElement(IconShieldCheck, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'Do you also redesign old websites?',
              answer: 'Yes. We modernize outdated websites to match today’s patient expectations and improve conversions.',
              icon: React.createElement(IconTools, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Professional Websites for ",
      headlineKeywords: [
        "Doctors",
        "Clinics",
        "Hospitals",
        "Medical Specialists",
        "Healthcare Brands"
      ],
      brandLine: [
        { text: "💻 Build Trust, Book More Patients, Stay Secure", gradient: false }
      ],
      subheadline: "We design, develop, and maintain high-performing websites that attract patients and grow your practice.",
      ctaButtons: [
        { icon: React.createElement(IconRocket, { size: 28 }), text: "Book Free Consultation", link: "/contact" },
        { icon: React.createElement(IconTrendingUp, { size: 28 }), text: "Upgrade My Website", link: "/contact", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "70% Patients",
          description: "Check a doctor’s website before booking"
        },
        {
          icon: React.createElement(IconDevices, { size: 32 }),
          title: "100% Responsive",
          description: "Optimized for mobile-first patients"
        },
        {
          icon: React.createElement(IconSpeedboat, { size: 32 }),
          title: "Lightning Fast",
          description: "Websites built for speed & SEO"
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 32 }),
          title: "Secure",
          description: "HIPAA-compliant & data protected"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Digi Aerotech for ", gradient: false },
        { text: "Clinic Websites?", gradient: true, gradientClass: "from-blue-500 via-green-500 to-cyan-500" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconCode, { size: 28 }),
          title: "Healthcare Niche Experts",
          description: "We specialize in medical websites that attract patients."
        },
        {
          icon: React.createElement(IconDevices, { size: 28 }),
          title: "Mobile-First Designs",
          description: "Optimized for patients who browse on phones."
        },
        {
          icon: React.createElement(LifeBuoy, { size: 28 }),
          title: "24/7 Maintenance",
          description: "Your website stays live, secure, and updated."
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 28 }),
          title: "Secure & Compliant",
          description: "HIPAA-ready security for patient data."
        },
        {
          icon: React.createElement(IconHeart, { size: 28 }),
          title: "Patient-Centric UX",
          description: "Easy booking, fast loading, simple navigation."
        },
        {
          icon: React.createElement(IconReportAnalytics, { size: 28 }),
          title: "SEO-Ready Websites",
          description: "Rank higher & get found by patients searching online."
        }
      ],
      cta: {
        text: "Get My Clinic Website",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Web Design, Development & Maintenance Process',
      subtitle: 'BUILD • LAUNCH • MAINTAIN',
      description: 'We ensure your clinic website is modern, fast, secure, and patient-focused.',
      steps: [
        {
          id: 1,
          title: 'Discovery & Planning',
          description: 'Understand your clinic’s goals, services & patient journey.'
        },
        {
          id: 2,
          title: 'Design & Branding',
          description: 'Craft modern, patient-friendly UI/UX designs.'
        },
        {
          id: 3,
          title: 'Development',
          description: 'Build fast, secure, mobile-optimized websites.'
        },
        {
          id: 4,
          title: 'Integration',
          description: 'Add booking systems, telemedicine, and payments.'
        },
        {
          id: 5,
          title: 'Launch',
          description: 'Deploy with SEO setup and speed optimization.'
        },
        {
          id: 6,
          title: 'Maintenance & Support',
          description: '24/7 monitoring, backups, security & updates.'
        }
      ]
    },
    testimonials: {
      title: [
        { text: "Doctors Growing with ", gradient: false },
        { text: "Professional Websites", gradient: true, gradientClass: "from-blue-500 via-green-500 to-cyan-500" }
      ],
      description: 'See how Digi Aerotech websites transformed clinics.',
      testimonials: [
        {
          id: '1',
          message: 'Our new website looks modern and patients love the easy booking system.',
          highlight: 'Seamless Patient Bookings',
          stars: 5,
          name: 'Dr. Neha Sharma',
          designation: 'Dentist',
          company: 'SmileCare Dental'
        },
        {
          id: '2',
          message: 'Digi Aerotech redesigned our old website. Now it loads faster and gets more traffic.',
          highlight: 'Fast & SEO-Optimized',
          stars: 5,
          name: 'Dr. Arvind Kapoor',
          designation: 'Cardiologist',
          company: 'HeartWell Clinic'
        }
      ]
    },
    cta: {
      title: 'Need a Modern Website for Your Clinic?',
      subtitle: 'DESIGN • DEVELOPMENT • MAINTENANCE',
      description: 'Book a free consultation with Digi Aerotech and get a secure, patient-focused, high-performing website for your practice.',
    }
  }
};
