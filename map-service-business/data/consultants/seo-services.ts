import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconSearch, IconUsers, IconTrendingUp, IconTarget, IconWorld, IconArrowRight,
  IconSeo, IconReportAnalytics, IconChartArcs, IconRocket, IconDeviceAnalytics
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'seo-services',
  business: 'consultants',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant3',
    process: 'variant1',
    testimonials: 'variant2'
  },
  data: {
    slug: 'seo-services-consultants',
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
            { text: "Why Most Consultants ", gradient: false },
            { text: "Struggle Without SEO", gradient: true, gradientClass: "from-blue-500 via-cyan-500 to-green-500" }
          ],
          subheadline: "Without strong SEO, consultants remain invisible online—losing clients to competitors who dominate Google search.",
          painPoints: [
            "Not ranking when potential clients search for services",
            "Relying only on referrals or paid ads for visibility",
            "Low website traffic despite expertise",
            "Competitors outranking with weaker services",
            "Website not optimized for mobile or speed",
            "No authority-building content to attract clients organically"
          ],
          solutionPoints: [
            "Keyword research targeting high-intent consulting queries",
            "On-page SEO to improve website visibility & structure",
            "Technical SEO to enhance speed, UX & indexing",
            "Content marketing to establish authority & expertise",
            "Local SEO to capture nearby clients",
            "Ongoing monitoring, reporting & optimization"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Rank Higher & Attract Clients"
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
              question: 'Why do consultants need SEO?',
              answer: 'SEO ensures that consultants appear when potential clients search online, driving organic leads without high ad spend.',
              icon: React.createElement(IconSearch, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'How long does SEO take for consultants?',
              answer: 'It usually takes 3–6 months to see significant results, depending on competition and website status.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Do you provide local SEO for consultants?',
              answer: 'Yes. We optimize your Google Business Profile & local listings to attract clients in your region.',
              icon: React.createElement(IconWorld, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Will SEO work if I already run ads?',
              answer: 'Absolutely. SEO and ads together create a balanced strategy, reducing dependency on paid traffic.',
              icon: React.createElement(IconTarget, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Do you offer reporting?',
              answer: 'Yes, we provide transparent monthly reports showing rankings, traffic, and ROI.',
              icon: React.createElement(IconReportAnalytics, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'Is SEO a one-time project?',
              answer: 'SEO is ongoing—algorithms change and competitors update. We ensure consistent growth with continuous optimization.',
              icon: React.createElement(IconDeviceAnalytics, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Rank Higher, Get Found,",
      headlineKeywords: [
        "Attract More Clients",
        "Build Authority",
        "Boost Visibility",
        "Generate Organic Leads",
        "Dominate Google Search"
      ],
      brandLine: [
        { text: "🔍 SEO Services for Consultants", gradient: false }
      ],
      subheadline: "Digi Aerotech helps consultants appear at the top of Google searches, attract organic leads, and build long-term credibility without overspending on ads.",
      ctaButtons: [
        { icon: React.createElement(IconRocket, { size: 28 }), text: "Start My SEO Growth", link: "/contact" },
        { icon: React.createElement(IconChartArcs, { size: 28 }), text: "Free SEO Audit", link: "/audit", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconSearch, { size: 32 }),
          title: "Keyword Rankings",
          description: "Rank for high-intent consulting services keywords"
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "Organic Traffic",
          description: "Sustainable traffic growth month after month"
        },
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "Quality Leads",
          description: "Get inquiries from clients actively searching"
        },
        {
          icon: React.createElement(IconSeo, { size: 32 }),
          title: "Full SEO Suite",
          description: "On-page, technical, content & local SEO included"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Consultants Trust ", gradient: false },
        { text: "Digi Aerotech SEO Services", gradient: true, gradientClass: "from-blue-500 via-cyan-500 to-green-500" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconSearch, { size: 28 }),
          title: "Consulting Industry Focus",
          description: "SEO strategies crafted specifically for consultants."
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "Client-Centric SEO",
          description: "Focus on leads & ROI, not vanity metrics."
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Proven Results",
          description: "Case studies of consultants scaling visibility & leads."
        },
        {
          icon: React.createElement(IconWorld, { size: 28 }),
          title: "Local & Global Reach",
          description: "Rank locally for clients near you & globally for reach."
        },
        {
          icon: React.createElement(IconReportAnalytics, { size: 28 }),
          title: "Transparent Reporting",
          description: "Clear insights on rankings, traffic, and ROI growth."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Scalable Plans",
          description: "SEO packages that grow with your consulting business."
        }
      ],
      cta: {
        text: "Boost My Rankings Now",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our SEO Process for Consultants',
      subtitle: 'LONG-TERM ORGANIC GROWTH',
      description: 'We follow a proven SEO framework tailored to consulting businesses.',
      steps: [
        { id: 1, title: 'SEO Audit & Strategy', description: 'In-depth audit & roadmap to improve visibility.' },
        { id: 2, title: 'Keyword Research', description: 'Identify high-intent keywords clients actually search.' },
        { id: 3, title: 'On-Page SEO', description: 'Optimize pages, titles, meta tags, and content.' },
        { id: 4, title: 'Technical SEO', description: 'Fix site speed, mobile usability, indexing & structure.' },
        { id: 5, title: 'Content Marketing', description: 'Create blogs, guides, and authority-building resources.' },
        { id: 6, title: 'Tracking & Reporting', description: 'Monitor performance & refine strategies monthly.' }
      ]
    },
    testimonials: {
      title: [
        { text: "Consultants Who ", gradient: false },
        { text: "Grew with Our SEO", gradient: true, gradientClass: "from-blue-500 via-cyan-500 to-green-500" }
      ],
      description: 'Real consultants who scaled their visibility & leads with Digi Aerotech SEO services.',
      testimonials: [
        {
          id: '1',
          message: 'Within 4 months, I started ranking for “business consultant in Mumbai” and my inbound leads doubled.',
          highlight: 'Inbound leads doubled',
          stars: 5,
          name: 'Ravi Kapoor',
          designation: 'Business Consultant',
          company: 'RK Advisory'
        },
        {
          id: '2',
          message: 'SEO brought me consistent clients without spending heavily on ads. Digi Aerotech nailed it!',
          highlight: 'Consistent client flow',
          stars: 5,
          name: 'Neha Malhotra',
          designation: 'Career Consultant',
          company: 'Pathway Careers'
        }
      ]
    },
    cta: {
      title: 'Ready to Rank Higher & Win More Clients?',
      subtitle: 'SEO SERVICES FOR CONSULTANTS',
      description: 'Book a free SEO consultation with Digi Aerotech today and see how we can increase your rankings, traffic, and leads organically.',
    }
  }
};
