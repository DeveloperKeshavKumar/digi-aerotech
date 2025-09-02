import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconHome, IconBuildingSkyscraper, IconKey, IconTrendingUp,
  IconPhone, IconRocket, IconUsers, IconMapPin, IconArrowRight,
  IconChartBar, IconCertificate, IconWorld, IconShieldCheck
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: '360-digital-marketing',
  business: 'real-estate',
  variants: {
    hero: 'variant1',
    whyChooseUs: 'variant3',
    process: 'variant2',
  },
  data: {
    slug: '360-digital-marketing-real-estate',
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
            { text: "The Real Estate ", gradient: false },
            { text: "Challenges ", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" },
            { text: "Builders Face Online", gradient: false }
          ],
          subheadline: "High-value sales like real estate require precision marketing, trust-building, and consistent quality leads.",
          painPoints: [
            "High competition in local & metro markets",
            "Difficulty generating qualified property leads",
            "Low trust & credibility online",
            "Wasted ad spend with poor targeting",
            "Long decision-making cycles"
          ],
          solutionPoints: [
            "Geo-targeted ads & hyper-local SEO",
            "Landing pages optimized for conversions",
            "Virtual tours & lifestyle storytelling",
            "Data-driven lead nurturing & CRM integration",
            "Brand authority through PR & social media"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Get Qualified Real Estate Leads"
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
              question: 'How does digital marketing help real estate companies?',
              answer: 'We generate quality property leads through targeted ads, SEO, and conversion-optimized campaigns that bring ready-to-buy clients.',
              icon: React.createElement(IconKey, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Do you offer geo-targeted campaigns for specific locations?',
              answer: 'Yes. We run hyper-local SEO & ad campaigns focused on cities, neighborhoods, or even specific pin codes.',
              icon: React.createElement(IconMapPin, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Can you help sell luxury or high-ticket properties?',
              answer: 'Absolutely. We design premium campaigns with virtual tours, video marketing, and lifestyle storytelling to attract serious buyers.',
              icon: React.createElement(IconHome, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'How soon can I start seeing leads?',
              answer: 'Paid campaigns start generating leads within weeks, while SEO builds organic visibility in 3–6 months.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Do you help real estate firms with brand reputation?',
              answer: 'Yes. We manage PR, reviews, and social proof so buyers trust your brand before making big investments.',
              icon: React.createElement(IconShieldCheck, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'Can digital marketing reduce my cost per lead?',
              answer: 'Yes. With data-driven campaigns & retargeting, we reduce ad waste and ensure high ROI.',
              icon: React.createElement(IconChartBar, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Want ",
      headlineKeywords: [
        "More Property Buyers?",
        "Luxury Project Sales?",
        "Qualified Real Estate Leads?",
        "Faster Closures?",
        "360° Digital Marketing for Real Estate?"
      ],
      brandLine: [
        { text: "🏠 Turning Real Estate Clicks into Bookings & Closures", gradient: false }
      ],
      subheadline: "We help real estate developers, brokers, and builders generate high-quality leads, close deals faster, and build trust with buyers.",
      ctaButtons: [
        { icon: React.createElement(IconRocket, { size: 28 }), text: "Book Free Strategy Call", link: "/contact" },
        { icon: React.createElement(IconPhone, { size: 28 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconHome, { size: 32 }),
          title: "50k+ Leads",
          description: "Generated for builders"
        },
        {
          icon: React.createElement(IconBuildingSkyscraper, { size: 32 }),
          title: "120+ Projects Marketed",
          description: "Across metros & tier-2 cities"
        },
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "4X Faster Closures",
          description: "Through funnel optimization"
        },
        {
          icon: React.createElement(IconWorld, { size: 32 }),
          title: "Global NRI Reach",
          description: "Campaigns across 15+ countries"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the ", gradient: false },
        { text: "#1 Choice for Real Estate Companies", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconMapPin, { size: 28 }),
          title: "Geo-Targeted Campaigns",
          description: "Laser-focused targeting by city, location & neighborhood."
        },
        {
          icon: React.createElement(IconKey, { size: 28 }),
          title: "High-Intent Lead Generation",
          description: "We bring only ready-to-buy clients to your projects."
        },
        {
          icon: React.createElement(IconHome, { size: 28 }),
          title: "Luxury Property Expertise",
          description: "Specialized campaigns for high-ticket luxury projects."
        },
        {
          icon: React.createElement(IconCertificate, { size: 28 }),
          title: "Trust & Credibility Building",
          description: "Strong PR, reviews, and online reputation management."
        },
        {
          icon: React.createElement(IconChartBar, { size: 28 }),
          title: "ROI-Optimized Marketing",
          description: "Data-driven strategies that reduce cost per lead."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Faster Deal Closures",
          description: "Optimized funnels & nurturing to shorten sales cycles."
        }
      ],
      cta: {
        text: "Start Selling Properties Faster",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Proven Process for Real Estate Growth',
      subtitle: 'STEP-BY-STEP DIGITAL BLUEPRINT',
      className: 'border-t border-border dark:border-gray-700',
      description: 'A structured marketing system designed to bring consistent, high-quality real estate leads.',
      steps: [
        {
          id: 1,
          title: 'Market Research & Positioning',
          description: 'Understand your project, buyer persona, and market competition.'
        },
        {
          id: 2,
          title: 'Project Branding',
          description: 'Create compelling visuals, videos & storytelling for your properties.'
        },
        {
          id: 3,
          title: 'Lead Generation Campaigns',
          description: 'Run targeted ads & SEO campaigns for qualified leads.'
        },
        {
          id: 4,
          title: 'Conversion-Focused Landing Pages',
          description: 'Design funnels optimized for maximum lead capture.'
        },
        {
          id: 5,
          title: 'Retargeting & CRM Nurturing',
          description: 'Stay in touch with warm leads until they close.'
        },
        {
          id: 6,
          title: 'Performance Tracking & Scaling',
          description: 'Measure ROI, optimize campaigns & scale lead volume.'
        }
      ]
    },
    cta: {
      title: 'Ready to Sell Properties Faster?',
      subtitle: 'TURN REAL ESTATE MARKETING INTO SALES',
      description: 'Book a free strategy session with Digi Aerotech and discover how our 360° real estate marketing system can fill your pipeline with serious buyers.'
    }
  }
};
