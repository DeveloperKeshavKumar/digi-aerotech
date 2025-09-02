import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { ServiceIcons } from '@/constants/service-icons';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconHome, IconRulerMeasure, IconPalette, IconUsers, IconRocket,
  IconWorld, IconDeviceMobile, IconChartBar, IconBrush, IconBuildingSkyscraper,
  IconCalendar, IconPhone, IconArrowRight, IconStar, IconDiamond
} from '@tabler/icons-react';

const { IconFreeRights } = ServiceIcons;

export const map: ServiceBusinessMap = {
  service: '360-digital-marketing',
  business: 'interior-designers',
  variants: {
    hero: 'variant1',
    whyChooseUs: 'variant2',
    process: 'variant3'
  },
  data: {
    slug: '360-digital-marketing-interior-designers',
    showSections: {
      hero: true,
      whyChooseUs: true,
      typesOfServices: false,
      process: true,
      techStack: false,
      testimonials: true,
      cta: true
    },
    customSections: [
      {
        component: Struggles,
        props: {
          title: [
            { text: "The Struggles ", gradient: false },
            { text: "Interior Designers ", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" },
            { text: "Face in Growing Digitally", gradient: false }
          ],
          subheadline: "Clients are searching online for designers who inspire trust and creativity — but most firms aren’t found.",
          painPoints: [
            "Low visibility in local & global searches",
            "Difficulty showcasing projects effectively",
            "Relying only on word-of-mouth referrals",
            "High competition from established firms",
            "Leads dropping off due to weak follow-ups"
          ],
          solutionPoints: [
            "SEO & Google ranking for interior design services",
            "Showcase projects with high-converting landing pages",
            "Social media storytelling that builds authority",
            "Paid ads targeting homeowners & businesses",
            "CRM-driven follow-ups to close more deals"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Grow My Design Business"
          }
        },
        position: 'beforeWhyChooseUs'
      },
      {
        component: FaqSection,
        position: 'afterTestimonials',
        props: {
          faqs: [
            {
              id: 'id-1',
              question: 'How can digital marketing help my interior design business?',
              answer: 'We position your brand where clients search — on Google, Instagram, and design platforms — driving more qualified leads.',
              icon: React.createElement(IconHome, { size: 22 })
            },
            {
              id: 'id-2',
              question: 'Do you help showcase my portfolio?',
              answer: 'Yes. We build visually stunning websites & case studies to highlight your work and attract premium clients.',
              icon: React.createElement(IconPalette, { size: 22 })
            },
            {
              id: 'id-3',
              question: 'What type of clients can I expect?',
              answer: 'From homeowners to corporates and luxury real estate developers — we target high-intent audiences relevant to your services.',
              icon: React.createElement(IconBuildingSkyscraper, { size: 22 })
            },
            {
              id: 'id-4',
              question: 'Can you run ads for luxury interior services?',
              answer: 'Absolutely. We create precise campaigns that target affluent clients looking for premium interior solutions.',
              icon: React.createElement(IconDiamond, { size: 22 })
            },
            {
              id: 'id-5',
              question: 'How do you ensure ROI?',
              answer: 'Every campaign is tracked with lead attribution, so you know exactly which channel brings paying clients.',
              icon: React.createElement(IconChartBar, { size: 22 })
            },
            {
              id: 'id-6',
              question: 'Do you handle residential and commercial designers?',
              answer: 'Yes. Our strategies are tailored for solo designers, boutique firms, and large-scale commercial design businesses.',
              icon: React.createElement(IconUsers, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Looking for ",
      headlineKeywords: [
        "360 Digital Marketing for Interior Designers?",
        "More Client Projects?",
        "Premium Brand Image?",
        "Higher Visibility?",
        "Consistent Leads?"
      ],
      brandLine: [
        { text: "🏡 Transform Your Design Brand with 360° Digital Marketing", gradient: false }
      ],
      subheadline: "We help interior designers build strong online authority, attract premium clients, and showcase their work to the right audience.",
      ctaButtons: [
        { icon: React.createElement(IconFreeRights, { size: 30 }), text: "Book Free Strategy Call", link: "/contact" },
        { icon: React.createElement(IconPhone, { size: 30 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 34 }),
          title: "10K+ Leads",
          description: "Generated for interior designers"
        },
        {
          icon: React.createElement(IconPalette, { size: 34 }),
          title: "200+ Portfolios",
          description: "Transformed into digital assets"
        },
        {
          icon: React.createElement(IconRocket, { size: 34 }),
          title: "300% ROI",
          description: "Average campaign return"
        },
        {
          icon: React.createElement(IconWorld, { size: 34 }),
          title: "Global Presence",
          description: "Brands expanded beyond cities"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Interior Designers ", gradient: false },
        { text: "Trust Digi Aerotech", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconRulerMeasure, { size: 32 }),
          title: "Niche-Specific Expertise",
          description: "We understand how clients evaluate and choose interior designers."
        },
        {
          icon: React.createElement(IconPalette, { size: 32 }),
          title: "Visual-First Marketing",
          description: "Stunning visuals, case studies, and project galleries that attract."
        },
        {
          icon: React.createElement(IconChartBar, { size: 32 }),
          title: "ROI-Focused Campaigns",
          description: "From SEO to ads, every rupee spent brings measurable growth."
        },
        {
          icon: React.createElement(IconBrush, { size: 32 }),
          title: "Creative Storytelling",
          description: "We position your projects as stories that inspire and convert."
        },
        {
          icon: React.createElement(IconDeviceMobile, { size: 32 }),
          title: "Mobile-Optimized Presence",
          description: "Your brand looks perfect on every device, every time."
        },
        {
          icon: React.createElement(IconDiamond, { size: 32 }),
          title: "Luxury Positioning",
          description: "Helping designers attract high-value projects & premium clientele."
        }
      ],
      cta: {
        text: "Grow My Interior Design Brand",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Proven Process for Interior Designers',
      subtitle: 'STEP-BY-STEP CLIENT ACQUISITION SYSTEM',
      className: 'border-t border-border dark:border-gray-700',
      description: 'A tested framework that consistently brings designers premium projects.',
      steps: [
        {
          id: 1,
          title: 'Market & Audience Research',
          description: 'Identify client needs, competitors, and profitable niches.'
        },
        {
          id: 2,
          title: 'Portfolio Showcasing',
          description: 'Build engaging digital portfolios & galleries.'
        },
        {
          id: 3,
          title: 'SEO & Local Rankings',
          description: 'Rank on Google for “interior designer near me” and luxury searches.'
        },
        {
          id: 4,
          title: 'Social Media Campaigns',
          description: 'Instagram, Pinterest, and YouTube strategies for maximum visibility.'
        },
        {
          id: 5,
          title: 'Lead Nurturing',
          description: 'Automated emails, WhatsApp flows, and CRM for conversions.'
        },
        {
          id: 6,
          title: 'Scaling Projects',
          description: 'Expand from residential to corporate & luxury projects.'
        }
      ]
    },
    cta: {
      title: 'Ready to Attract Premium Clients for Your Interior Design Business?',
      subtitle: 'Build visibility. Win projects. Scale with confidence.',
      description: 'With Digi Aerotech’s 360° Digital Marketing for Interior Designers, you’ll never worry about where your next project comes from.'
    }
  }
};
