import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconShoppingCart, IconBuilding, IconTrendingUp, IconRocket,
  IconUsers, IconTarget, IconChartBar, IconWorld,
  IconCreditCard, IconDeviceMobile, IconShieldCheck
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'ecommerce-marketing',
  business: 'b2b-services',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant1',
    process: 'variant1',
    testimonials: 'variant2'
  },
  data: {
    slug: 'ecommerce-marketing-b2b',
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
            { text: "Why B2B E-Commerce Companies ", gradient: false },
            { text: "Struggle Without Marketing", gradient: true, gradientClass: "from-blue-500 via-indigo-500 to-purple-500" }
          ],
          subheadline: "B2B buyers have moved online, but many service providers & suppliers struggle to attract enterprise clients to their platforms without a strategic e-commerce marketing plan.",
          painPoints: [
            "Low visibility in search results for B2B solutions",
            "Lack of trust-building elements for corporate buyers",
            "Complicated buyer journeys leading to drop-offs",
            "Poor targeting in ads, wasting budgets on irrelevant clicks",
            "Weak product/service positioning in crowded markets",
            "No data-driven strategies to convert visitors into clients"
          ],
          solutionPoints: [
            "Full-funnel B2B e-commerce marketing strategies",
            "SEO & content marketing to attract enterprise buyers",
            "Conversion optimization for smoother buyer journeys",
            "Targeted ad campaigns (Google, Meta, LinkedIn)",
            "Brand credibility via case studies & testimonials",
            "Data-driven lead nurturing & remarketing systems"
          ],
          cta: {
            icon: React.createElement(IconRocket, { size: 20 }),
            text: "Boost My B2B E-Commerce"
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
              question: 'Why do B2B companies need e-commerce marketing?',
              answer: 'Today’s B2B buyers research and purchase online. E-commerce marketing ensures your brand is visible, credible, and trusted in the digital buying cycle.',
              icon: React.createElement(IconShoppingCart, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Which B2B industries benefit most?',
              answer: 'Manufacturing, wholesale, SaaS, IT, logistics, healthcare, professional consulting — any B2B business selling products or services online benefits.',
              icon: React.createElement(IconBuilding, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Do you handle global campaigns?',
              answer: 'Yes. We create e-commerce marketing strategies that target both local and international B2B buyers.',
              icon: React.createElement(IconWorld, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Can you integrate with B2B platforms?',
              answer: 'Absolutely. We optimize and market on platforms like Shopify B2B, Magento, BigCommerce, and custom ERP-linked systems.',
              icon: React.createElement(IconDeviceMobile, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'How do you measure ROI?',
              answer: 'We track lead generation, buyer engagement, order values, and repeat customer lifetime value, not just clicks.',
              icon: React.createElement(IconChartBar, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Scale Your B2B E-Commerce to Global Heights",
      headlineKeywords: [
        "B2B E-Commerce Marketing",
        "Enterprise Online Growth",
        "Digital Buyer Acquisition",
        "E-Commerce for B2B Services",
        "Lead-Focused E-Commerce Strategies"
      ],
      brandLine: [
        { text: "📈 Digi Aerotech helps B2B companies transform their e-commerce platforms into powerful lead generation & sales engines.", gradient: false }
      ],
      subheadline: "From SEO to paid ads to conversion optimization, we build strategies that bring enterprise buyers directly to your online store or platform.",
      ctaButtons: [
        { icon: React.createElement(IconRocket, { size: 28 }), text: "Start My Campaign", link: "/contact" },
        { icon: React.createElement(IconTrendingUp, { size: 28 }), text: "Free Audit", link: "/audit", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "Enterprise Buyers",
          description: "Target managers, CXOs & procurement heads"
        },
        {
          icon: React.createElement(IconTarget, { size: 32 }),
          title: "Conversion Strategies",
          description: "Optimize buyer journey for higher deal closures"
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 32 }),
          title: "Brand Trust",
          description: "Case studies, testimonials & reviews that convert"
        },
        {
          icon: React.createElement(IconCreditCard, { size: 32 }),
          title: "Revenue Growth",
          description: "Drive qualified leads into profitable orders"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why B2B Brands Choose ", gradient: false },
        { text: "Digi Aerotech for E-Commerce Marketing", gradient: true, gradientClass: "from-blue-500 via-indigo-500 to-purple-500" }
      ],
      trustPoints: [
        { icon: React.createElement(IconTrendingUp, { size: 28 }), title: "Lead-Focused", description: "We focus on enterprise lead generation, not vanity traffic." },
        { icon: React.createElement(IconShoppingCart, { size: 28 }), title: "E-Commerce Specialists", description: "Deep expertise in B2B marketplaces & e-commerce funnels." },
        { icon: React.createElement(IconBuilding, { size: 28 }), title: "Industry Coverage", description: "From SaaS to wholesale to IT services, we deliver results." },
        { icon: React.createElement(IconTarget, { size: 28 }), title: "Precision Targeting", description: "Reach exactly the decision-makers who matter." },
        { icon: React.createElement(IconChartBar, { size: 28 }), title: "ROI Transparency", description: "Full reporting on leads, orders, and ROI metrics." },
        { icon: React.createElement(IconShieldCheck, { size: 28 }), title: "Scalable Solutions", description: "Campaigns that grow with your e-commerce business." }
      ],
      cta: {
        text: "Boost My B2B E-Commerce Now",
        link: "#contact",
        icon: React.createElement(IconRocket, { size: 20 })
      }
    },
    process: {
      title: 'Our B2B E-Commerce Marketing Process',
      subtitle: 'ATTRACT → CONVERT → SCALE',
      description: 'We create a structured process that ensures your B2B e-commerce platform isn’t just a catalog — it’s a lead generation & sales powerhouse.',
      steps: [
        { id: 1, title: 'Market Research', description: 'Analyze target industries & procurement trends.' },
        { id: 2, title: 'Platform Optimization', description: 'Improve user experience & conversion flows.' },
        { id: 3, title: 'SEO & Content', description: 'Attract decision-makers through organic visibility.' },
        { id: 4, title: 'Paid Campaigns', description: 'Run high-targeted ads on Google, LinkedIn & Meta.' },
        { id: 5, title: 'Lead Nurturing', description: 'Email, remarketing & automation to convert prospects.' },
        { id: 6, title: 'Analytics & Scaling', description: 'Monitor performance & scale successful strategies.' }
      ]
    },
    testimonials: {
      title: [
        { text: "B2B Brands Growing Online ", gradient: false },
        { text: "with Digi Aerotech", gradient: true, gradientClass: "from-blue-500 via-indigo-500 to-purple-500" }
      ],
      description: 'From manufacturing suppliers to SaaS firms, our e-commerce marketing has helped B2B brands attract more enterprise clients and close bigger deals.',
      testimonials: [
        {
          id: '1',
          message: 'Our wholesale portal went from silent to generating steady enterprise leads after Digi Aerotech’s B2B e-commerce marketing strategy.',
          highlight: '200% Lead Growth',
          stars: 5,
          name: 'Ravi Sharma',
          designation: 'Director',
          company: 'Global Parts Wholesale'
        },
        {
          id: '2',
          message: 'Their campaigns brought us real CXOs & procurement managers instead of random traffic. That’s exactly what we needed.',
          highlight: 'High-Quality Leads',
          stars: 5,
          name: 'Ananya Verma',
          designation: 'CEO',
          company: 'B2B SaaS Hub'
        }
      ]
    },
    cta: {
      title: 'Ready to Scale Your B2B E-Commerce?',
      subtitle: 'Get Enterprise Buyers, Not Just Traffic',
      description: 'Partner with Digi Aerotech to turn your e-commerce platform into a B2B growth engine with SEO, ads, and conversion strategies.',
    }
  }
};
