import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconRocket, IconTarget, IconUsers, IconBriefcase, IconTrendingUp,
  IconWorld, IconChartBar, IconDeviceMobile, IconCheck, IconBuildingSkyscraper, IconCode
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'mobile-app-development',
  business: 'b2b-services',
  variants: {
    hero: 'variant1',
    whyChooseUs: 'variant2',
    process: 'variant2',
  },
  data: {
    slug: 'mobile-apps-b2b',
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
            { text: "Why B2B Companies Need ", gradient: false },
            { text: "Mobile Apps to Scale", gradient: true, gradientClass: "from-green-500 via-blue-500 to-purple-500" }
          ],
          subheadline: "B2B firms often face fragmented workflows, poor client engagement, and limited digital visibility without robust mobile apps.",
          painPoints: [
            "Complex workflows that slow down client communication",
            "No dedicated platform for partners, distributors, or enterprise clients",
            "Lack of data-driven insights from customer interactions",
            "Missed opportunities for automation & real-time engagement",
            "Dependence on third-party platforms limiting brand control",
            "Difficulties in scaling client servicing & onboarding"
          ],
          solutionPoints: [
            "Custom B2B mobile apps built to streamline workflows",
            "Secure platforms for client portals, distributors & partners",
            "Integrated analytics for data-driven decisions",
            "Mobile-first automation & push notifications",
            "100% ownership & brand control over digital assets",
            "Scalable solutions that grow with your enterprise needs"
          ],
          cta: {
            icon: React.createElement(IconRocket, { size: 20 }),
            text: "Build My B2B Mobile App"
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
              question: 'Do B2B companies really need mobile apps?',
              answer: 'Yes. Mobile apps simplify client servicing, streamline workflows, and create direct engagement channels for B2B firms.',
              icon: React.createElement(IconDeviceMobile, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'What features do you include in B2B mobile apps?',
              answer: 'We build apps with client dashboards, partner portals, CRM integrations, secure payments, analytics, and push notifications.',
              icon: React.createElement(IconCode, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Can apps integrate with our existing CRM/ERP?',
              answer: 'Absolutely. We specialize in CRM, ERP, and API integrations for seamless business workflows.',
              icon: React.createElement(IconChartBar, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Are your apps scalable for enterprise growth?',
              answer: 'Yes. We design modular, scalable apps that grow with your business and adapt to changing enterprise needs.',
              icon: React.createElement(IconBuildingSkyscraper, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Do you offer post-launch support?',
              answer: 'Yes. We provide full maintenance, updates, and continuous improvements to keep your app competitive.',
              icon: React.createElement(IconCheck, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Enterprise-Grade B2B Mobile App Development",
      headlineKeywords: [
        "B2B Mobile App Development Services",
        "Custom Mobile Apps for Enterprises",
        "Business Workflow Automation Apps",
        "Partner & Distributor Mobile Apps",
        "Enterprise Mobility Solutions"
      ],
      brandLine: [
        { text: "📱 Digi Aerotech builds powerful, scalable, and secure B2B mobile apps to transform how enterprises engage, operate, and grow.", gradient: false }
      ],
      subheadline: "From client portals to workflow automation apps—our mobile solutions give B2B firms a competitive edge in the digital-first economy.",
      ctaButtons: [
        { icon: React.createElement(IconRocket, { size: 28 }), text: "Get My B2B App Built", link: "/contact" },
        { icon: React.createElement(IconDeviceMobile, { size: 28 }), text: "Free App Strategy Session", link: "/audit", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconBriefcase, { size: 32 }),
          title: "B2B Focused Apps",
          description: "Tailored for enterprises, distributors & clients"
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "Boost Productivity",
          description: "Automate workflows & reduce manual processes"
        },
        {
          icon: React.createElement(IconWorld, { size: 32 }),
          title: "Global Scalability",
          description: "Apps that grow with your business across markets"
        },
        {
          icon: React.createElement(IconCheck, { size: 32 }),
          title: "Secure & Reliable",
          description: "Enterprise-grade security & data protection"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Leading B2B Enterprises Choose ", gradient: false },
        { text: "Digi Aerotech for Mobile Apps", gradient: true, gradientClass: "from-green-500 via-blue-500 to-purple-500" }
      ],
      trustPoints: [
        { icon: React.createElement(IconDeviceMobile, { size: 28 }), title: "Custom-Built Apps", description: "No one-size-fits-all. Every app is crafted to your business needs." },
        { icon: React.createElement(IconBriefcase, { size: 28 }), title: "B2B Expertise", description: "Deep knowledge of enterprise workflows & client needs." },
        { icon: React.createElement(IconCode, { size: 28 }), title: "Seamless Integrations", description: "ERP, CRM, and APIs integrated for frictionless operations." },
        { icon: React.createElement(IconWorld, { size: 28 }), title: "Future-Ready Solutions", description: "Apps built for scalability, cloud, and mobility trends." },
        { icon: React.createElement(IconTrendingUp, { size: 28 }), title: "ROI-Focused", description: "Our apps improve efficiency & reduce costs." },
        { icon: React.createElement(IconCheck, { size: 28 }), title: "Maintenance & Support", description: "Continuous updates & post-launch support." }
      ],
      cta: {
        text: "Transform My B2B with Mobile Apps",
        link: "#contact",
        icon: React.createElement(IconRocket, { size: 20 })
      }
    },
    process: {
      title: 'Our B2B Mobile App Development Process',
      subtitle: 'DESIGN → DEVELOP → INTEGRATE → SCALE',
      description: 'We deliver end-to-end app development, from strategy to deployment and maintenance.',
      steps: [
        { id: 1, title: 'Discovery & Strategy', description: 'Understand workflows, clients & enterprise goals' },
        { id: 2, title: 'UI/UX & Prototyping', description: 'Design sleek, intuitive, and business-focused interfaces' },
        { id: 3, title: 'Development', description: 'Build apps with secure, scalable, enterprise-ready code' },
        { id: 4, title: 'Integration', description: 'CRM, ERP & third-party systems connected seamlessly' },
        { id: 5, title: 'Testing & Deployment', description: 'Rigorous QA to ensure flawless performance' },
        { id: 6, title: 'Maintenance & Scaling', description: 'Continuous improvements and enterprise scaling support' }
      ]
    },
    cta: {
      title: 'Ready to Build Your Enterprise Mobile App?',
      subtitle: 'CUSTOM, SCALABLE & ROI-FOCUSED MOBILE SOLUTIONS',
      description: 'Digi Aerotech empowers B2B companies with mobile apps that streamline workflows, improve client servicing, and accelerate growth.',
    }
  }
};
