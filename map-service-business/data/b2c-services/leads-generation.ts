import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconUsers, IconChartBar, IconPhone, IconTarget, IconRocket, IconShoppingCart,
  IconTrendingUp, IconCash, IconCursorText, IconWorld, IconArrowRight
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'lead-generation',
  business: 'b2c-services',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant1',
    process: 'variant3',
  },
  data: {
    slug: 'lead-generation-b2c',
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
            { text: "Why Most B2C Businesses Struggle ", gradient: false },
            { text: "with Leads", gradient: true, gradientClass: "from-green-500 via-blue-500 to-purple-500" }
          ],
          subheadline: "Most B2C businesses rely only on referrals or walk-ins. Without a steady lead pipeline, sales slow down and growth gets stuck.",
          painPoints: [
            "No consistent flow of inquiries or customers",
            "Relying on seasonal demand & word of mouth",
            "Competitors capturing online leads",
            "Weak digital presence affecting trust",
            "Low-quality leads that don’t convert",
            "No tracking or nurturing of potential customers"
          ],
          solutionPoints: [
            "Data-driven lead generation strategies",
            "Targeted campaigns on Google & Meta",
            "Landing pages designed to capture leads",
            "Automated lead tracking & reporting",
            "Lead qualification & nurturing workflows",
            "Proven systems to convert leads into paying customers"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Get Quality Leads Now"
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
              question: 'What is lead generation for B2C businesses?',
              answer: 'It’s the process of getting inquiries, bookings, and calls from potential customers who are genuinely interested in your services.',
              icon: React.createElement(IconUsers, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Which industries can benefit the most?',
              answer: 'Salons, gyms, spas, restaurants, clinics, retail stores, and any business serving end customers.',
              icon: React.createElement(IconShoppingCart, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'How fast can I expect results?',
              answer: 'With paid ads, leads can start flowing within days. SEO & content-driven lead gen works steadily for long-term growth.',
              icon: React.createElement(IconRocket, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Do you provide lead tracking?',
              answer: 'Yes! We integrate call tracking, form submissions, and CRM systems to ensure no lead is lost.',
              icon: React.createElement(IconPhone, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Can small businesses also use lead generation services?',
              answer: 'Absolutely! We customize strategies based on your budget, location, and industry type.',
              icon: React.createElement(IconCash, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Consistent Leads. Consistent Growth.",
      headlineKeywords: [
        "Lead Generation for B2C Businesses",
        "More Inquiries & Customers",
        "Stop Relying on Walk-ins",
        "Target Customers Actively Searching",
        "Turn Clicks into Clients"
      ],
      brandLine: [
        { text: "📈 Lead Generation Systems That Deliver Real Customers", gradient: false }
      ],
      subheadline: "At Digi Aerotech, we build high-performance lead generation systems for B2C businesses. Whether you’re a salon, gym, spa, or restaurant, we help you capture inquiries, convert more customers, and scale your revenue.",
      ctaButtons: [
        { icon: React.createElement(IconRocket, { size: 28 }), text: "Start Getting Leads", link: "/contact" },
        { icon: React.createElement(IconPhone, { size: 28 }), text: "Free Lead Audit", link: "/audit", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconTarget, { size: 32 }),
          title: "Qualified Leads",
          description: "We target customers actively looking for your services"
        },
        {
          icon: React.createElement(IconChartBar, { size: 32 }),
          title: "Conversion Focus",
          description: "Leads designed to turn into real sales"
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "Scalable Growth",
          description: "Campaigns that grow as your business grows"
        },
        {
          icon: React.createElement(IconWorld, { size: 32 }),
          title: "Local Reach",
          description: "Generate leads from your target city or neighborhood"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why B2C Businesses Trust ", gradient: false },
        { text: "Digi Aerotech for Lead Generation", gradient: true, gradientClass: "from-green-500 via-blue-500 to-purple-500" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconTarget, { size: 28 }),
          title: "Precision Targeting",
          description: "We reach the right audience at the right time using data-driven campaigns."
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "B2C Expertise",
          description: "We specialize in lead generation for salons, gyms, restaurants, clinics, and retail stores."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Fast Results",
          description: "Paid campaigns deliver leads within days of launch."
        },
        {
          icon: React.createElement(IconCursorText, { size: 28 }),
          title: "Content + Ads Combo",
          description: "We combine organic content marketing with ads for long-term and short-term leads."
        },
        {
          icon: React.createElement(IconChartBar, { size: 28 }),
          title: "Transparent ROI",
          description: "You see exactly how many leads are generated and what they cost."
        },
        {
          icon: React.createElement(IconPhone, { size: 28 }),
          title: "Lead Nurturing",
          description: "We help you build systems to convert leads into paying customers."
        }
      ],
      cta: {
        text: "Get My Leads Now",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Proven Lead Generation Process',
      subtitle: 'FROM CLICKS TO CUSTOMERS',
      description: 'We don’t just generate random inquiries. We create a predictable lead generation machine designed to grow your B2C business.',
      steps: [
        { id: 1, title: 'Discovery & Strategy', description: 'Understand your target audience, competitors, and goals.' },
        { id: 2, title: 'Campaign Setup', description: 'Build campaigns across Google, Meta, and other platforms.' },
        { id: 3, title: 'Landing Page Creation', description: 'Design high-converting landing pages to capture leads.' },
        { id: 4, title: 'Lead Capture & Tracking', description: 'Implement forms, call tracking, and lead management tools.' },
        { id: 5, title: 'Optimization & Scaling', description: 'Test, refine, and scale campaigns for maximum ROI.' },
        { id: 6, title: 'Reporting & Insights', description: 'Provide transparent reports on leads, costs, and ROI.' }
      ]
    },
    cta: {
      title: 'Ready to Fill Your Pipeline with Quality Leads?',
      subtitle: 'CONSISTENT LEADS → CONSISTENT SALES',
      description: 'Stop waiting for walk-ins. With Digi Aerotech’s B2C lead generation services, you get a predictable flow of quality leads that convert.',
    }
  }
};
