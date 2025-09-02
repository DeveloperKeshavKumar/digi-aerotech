import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconStethoscope, IconSearch, IconUsers, IconArrowRight,
  IconTarget, IconTrendingUp, IconRocket, IconGlobe,
  IconReportAnalytics, IconMapPin, IconBuildingHospital, IconStar
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'seo-services',
  business: 'doctors-clinics',
  variants: {
    hero: 'variant1',
    whyChooseUs: 'variant2',
    process: 'variant1',
  },
  data: {
    slug: 'seo-services-doctors-clinics',
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
            { text: "SEO for Doctors & Clinics – ", gradient: false },
            { text: "Rank Higher, Book More Patients", gradient: true, gradientClass: "from-blue-500 via-indigo-500 to-purple-500" }
          ],
          subheadline: "Patients search on Google before choosing a doctor. If you’re not ranking high, you’re losing patients to competitors.",
          painPoints: [
            "Clinic website stuck on page 3 or lower of Google",
            "Patients only finding competitor clinics online",
            "Low website traffic & few appointment bookings",
            "No visibility for local searches like 'dentist near me'",
            "Not ranking for treatment-specific keywords",
            "Poor content & slow-loading websites hurting SEO"
          ],
          solutionPoints: [
            "Local SEO to rank for 'near me' & city-specific searches",
            "On-page SEO to optimize site speed, structure & content",
            "Content marketing that builds patient trust & authority",
            "Google My Business SEO for maps visibility",
            "High-quality backlinks for domain authority",
            "Monthly reporting to track keyword growth & patients"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Boost My Clinic SEO"
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
              question: 'Why is SEO important for doctors?',
              answer: 'Because 77% of patients search online before booking. Ranking higher means more patients discovering your clinic.',
              icon: React.createElement(IconSearch, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'How long does SEO take for clinics?',
              answer: 'Typically 3–6 months to see strong results, depending on competition and keywords.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Will SEO bring me more patients?',
              answer: 'Yes. SEO ensures patients searching for your treatments find your clinic first, leading to more bookings.',
              icon: React.createElement(IconUsers, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Do you do local SEO?',
              answer: 'Yes. We specialize in local SEO so your clinic shows up for “near me” searches and on Google Maps.',
              icon: React.createElement(IconMapPin, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Do I need SEO if I run ads?',
              answer: 'Yes. Ads stop when budget ends, but SEO builds long-term organic visibility that keeps bringing patients.',
              icon: React.createElement(IconTarget, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'Will you provide reports?',
              answer: 'Yes. We provide detailed monthly reports on rankings, traffic, leads & ROI.',
              icon: React.createElement(IconReportAnalytics, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "SEO Services for ",
      headlineKeywords: [
        "Doctors",
        "Clinics",
        "Dentists",
        "Specialists",
        "Medical Centers"
      ],
      brandLine: [
        { text: "📈 Rank Higher on Google & Get More Patients", gradient: false }
      ],
      subheadline: "We help doctors & clinics rank #1 on Google and dominate local searches with proven healthcare SEO strategies.",
      ctaButtons: [
        { icon: React.createElement(IconRocket, { size: 28 }), text: "Book SEO Audit", link: "/contact" },
        { icon: React.createElement(IconTrendingUp, { size: 28 }), text: "Rank My Clinic", link: "/contact", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconSearch, { size: 32 }),
          title: "90% Patients",
          description: "Trust Google when searching for doctors"
        },
        {
          icon: React.createElement(IconMapPin, { size: 32 }),
          title: "Local Dominance",
          description: "Appear for 'near me' & city keywords"
        },
        {
          icon: React.createElement(IconBuildingHospital, { size: 32 }),
          title: "Clinic Visibility",
          description: "Get found on Google Maps & directories"
        },
        {
          icon: React.createElement(IconStar, { size: 32 }),
          title: "Authority Boost",
          description: "Build credibility with SEO content"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Digi Aerotech for ", gradient: false },
        { text: "Healthcare SEO?", gradient: true, gradientClass: "from-blue-500 via-indigo-500 to-purple-500" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconMapPin, { size: 28 }),
          title: "Local SEO Experts",
          description: "We make your clinic rank for 'near me' searches."
        },
        {
          icon: React.createElement(IconGlobe, { size: 28 }),
          title: "Healthcare Niche SEO",
          description: "Custom strategies built for doctors & clinics."
        },
        {
          icon: React.createElement(IconSearch, { size: 28 }),
          title: "Keyword Dominance",
          description: "Rank for treatments, symptoms & specialties."
        },
        {
          icon: React.createElement(IconReportAnalytics, { size: 28 }),
          title: "Transparent Reporting",
          description: "Know exactly how your SEO investment performs."
        },
        {
          icon: React.createElement(IconTarget, { size: 28 }),
          title: "ROI Driven",
          description: "SEO campaigns focused on appointments, not clicks."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Long-Term Growth",
          description: "Sustainable SEO that keeps patients coming."
        }
      ],
      cta: {
        text: "Rank My Clinic Higher",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our SEO Process for Clinics',
      subtitle: 'RANK • ATTRACT • BOOK',
      description: 'We use a structured SEO framework designed exclusively for doctors and clinics.',
      steps: [
        {
          id: 1,
          title: 'SEO Audit',
          description: 'Analyze current rankings, site performance & competitors.'
        },
        {
          id: 2,
          title: 'Keyword Research',
          description: 'Identify treatment & local keywords patients search.'
        },
        {
          id: 3,
          title: 'On-Page SEO',
          description: 'Optimize content, site speed & structure for Google.'
        },
        {
          id: 4,
          title: 'Local SEO & GMB',
          description: 'Optimize Google Business Profile & Maps ranking.'
        },
        {
          id: 5,
          title: 'Content Marketing',
          description: 'Blogs, articles & FAQs that build trust & authority.'
        },
        {
          id: 6,
          title: 'Backlinks & Reporting',
          description: 'High-quality backlinks + transparent monthly reports.'
        }
      ]
    },
    cta: {
      title: 'Ready to Rank Your Clinic #1 on Google?',
      subtitle: 'LOCAL SEO • ORGANIC TRAFFIC • MORE PATIENTS',
      description: 'Book a free SEO audit with Digi Aerotech and discover how we can boost your clinic’s visibility and patient bookings.',
    }
  }
};
