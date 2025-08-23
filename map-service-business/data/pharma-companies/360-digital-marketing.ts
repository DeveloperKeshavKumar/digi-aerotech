import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { ServiceIcons } from '@/constants/service-icons';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconPill, IconHeartbeat, IconTrendingUp, IconMicroscope,
  IconPhone, IconRocket, IconBuildingSkyscraper, IconShieldCheck,
  IconWorld, IconChartBar, IconUsers, IconCertificate, IconArrowRight
} from '@tabler/icons-react';

const { IconFreeRights } = ServiceIcons;

export const map: ServiceBusinessMap = {
  service: '360-digital-marketing',
  business: 'pharma-companies',
  variants: {
    hero: 'variant3',
    whyChooseUs: 'variant2',
    process: 'variant1',
    testimonials: 'variant2'
  },
  data: {
    slug: '360-digital-marketing-pharma-companies',
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
            { text: "The Challenges ", gradient: false },
            { text: "Pharma Companies ", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" },
            { text: "Face in Digital Era", gradient: false }
          ],
          subheadline: "Pharma companies operate in a competitive & regulated industry, making digital visibility, compliance, and trust crucial.",
          painPoints: [
            "Strict regulations limit direct promotion",
            "Low trust in generic pharma advertising",
            "Difficulty connecting with healthcare professionals",
            "Competition from global brands",
            "Limited patient education & awareness online"
          ],
          solutionPoints: [
            "Compliant digital strategies tailored for pharma",
            "Content marketing & PR to build trust & credibility",
            "LinkedIn & B2B campaigns for HCPs & institutions",
            "SEO & paid campaigns for high-intent traffic",
            "Awareness-driven campaigns for patient education"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Boost Pharma Visibility"
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
              question: 'Is digital marketing for pharma companies compliant?',
              answer: 'Yes. We design strategies aligned with pharma regulations (MCI, FDA, ASCI) ensuring ethical & compliant campaigns.',
              icon: React.createElement(IconShieldCheck, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'How do you help pharma companies attract B2B clients?',
              answer: 'Through LinkedIn campaigns, email nurturing, and industry authority content that connects with hospitals & distributors.',
              icon: React.createElement(IconBuildingSkyscraper, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Can you improve awareness of new drugs or products?',
              answer: 'Yes. We create educational campaigns for doctors & patients, while ensuring all content remains compliance-friendly.',
              icon: React.createElement(IconPill, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Do you provide global outreach for pharma brands?',
              answer: 'Absolutely. Our international SEO & multilingual campaigns position your pharma company in global markets.',
              icon: React.createElement(IconWorld, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'How soon can pharma companies see results?',
              answer: 'SEO builds trust & visibility in 3-6 months, while paid campaigns & LinkedIn outreach can bring leads in weeks.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'Can digital marketing improve brand trust for pharma?',
              answer: 'Yes. With PR, thought leadership, compliance-driven campaigns, and online reputation management, we build long-term trust.',
              icon: React.createElement(IconCertificate, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Need ",
      headlineKeywords: [
        "More Pharma Visibility?",
        "B2B Pharma Leads?",
        "Doctor & Hospital Outreach?",
        "Patient Awareness Campaigns?",
        "360° Digital Marketing for Pharma?"
      ],
      brandLine: [
        { text: "💊 Empowering Pharma Companies with Digital Growth", gradient: false }
      ],
      subheadline: "We help pharma companies build credibility, attract hospitals & distributors, and educate patients with compliant digital strategies.",
      ctaButtons: [
        { icon: React.createElement(IconFreeRights, { size: 28 }), text: "Book Free Pharma Strategy Call", link: "/contact" },
        { icon: React.createElement(IconPhone, { size: 28 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconMicroscope, { size: 32 }),
          title: "20+ Pharma Brands",
          description: "Scaled with our strategies"
        },
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "Global B2B Outreach",
          description: "Connecting with hospitals & distributors"
        },
        {
          icon: React.createElement(IconHeartbeat, { size: 32 }),
          title: "Patient Awareness Growth",
          description: "Educational campaigns executed"
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "4X ROI",
          description: "Measured on pharma campaigns"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the ", gradient: false },
        { text: "#1 Choice for Pharma Companies", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconShieldCheck, { size: 28 }),
          title: "Compliance-First Strategies",
          description: "Every campaign is designed with pharma regulations in mind."
        },
        {
          icon: React.createElement(IconBuildingSkyscraper, { size: 28 }),
          title: "Strong B2B Focus",
          description: "Helping pharma companies connect with hospitals, clinics & distributors."
        },
        {
          icon: React.createElement(IconPill, { size: 28 }),
          title: "Product & Drug Awareness",
          description: "Educational campaigns for patients & doctors to boost trust."
        },
        {
          icon: React.createElement(IconChartBar, { size: 28 }),
          title: "ROI-Driven Marketing",
          description: "Performance reporting & measurable outcomes guaranteed."
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "Trusted by Pharma Leaders",
          description: "Worked with leading pharma brands across markets."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Scalable Global Outreach",
          description: "From local to global pharma markets, we help you expand."
        }
      ],
      cta: {
        text: "Start Growing Your Pharma Brand",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Proven Process for Pharma Growth',
      subtitle: 'COMPLIANT & HIGH-IMPACT DIGITAL STRATEGY',
      className: 'border-t border-border dark:border-gray-700',
      description: 'A framework to ensure pharma companies grow visibility, credibility & revenue online.',
      steps: [
        {
          id: 1,
          title: 'Industry & Compliance Research',
          description: 'Understand your pharma niche, competitors, and regulations.'
        },
        {
          id: 2,
          title: 'Authority Building',
          description: 'Content marketing & PR to establish thought leadership.'
        },
        {
          id: 3,
          title: 'B2B Lead Generation',
          description: 'Targeted campaigns for hospitals, doctors, and distributors.'
        },
        {
          id: 4,
          title: 'Patient Education Campaigns',
          description: 'Informative campaigns for better awareness & trust.'
        },
        {
          id: 5,
          title: 'Reputation & Trust Management',
          description: 'Managing reviews, PR, and trust across platforms.'
        },
        {
          id: 6,
          title: 'Scaling & Global Expansion',
          description: 'Grow from local markets to global reach with tailored campaigns.'
        }
      ]
    },
    testimonials: {
      title: [
        { text: "Pharma Companies Who ", gradient: false },
        { text: "Scaled with Us", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
      ],
      description: 'See how Digi Aerotech transformed pharma companies with compliant, high-ROI strategies.',
      testimonials: [
        {
          id: '1',
          message: 'We struggled with digital visibility due to compliance issues, but Digi Aerotech built a compliant marketing framework that doubled our hospital partnerships.',
          highlight: 'doubled our hospital partnerships',
          stars: 5,
          name: 'Dr. Manish Kapoor',
          designation: 'Director',
          company: 'MediLife Pharma'
        },
        {
          id: '2',
          message: 'Their team helped us launch global SEO & LinkedIn outreach, generating consistent leads from distributors in multiple countries.',
          highlight: 'consistent leads from distributors',
          stars: 5,
          name: 'Anita Reddy',
          designation: 'Head of Marketing',
          company: 'PharmaGrowth Ltd.'
        }
      ]
    },
    cta: {
      title: 'Ready to Grow Your Pharma Brand?',
      subtitle: 'Your pharma growth starts with compliance-driven digital marketing.',
      description: 'Book a free consultation with Digi Aerotech and discover how our 360° digital marketing can scale your pharma business globally.'
    }
  }
};
  