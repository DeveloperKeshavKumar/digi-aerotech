import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconSearch, IconTrendingUp, IconBuildingSkyscraper, IconUsers, IconRocket,
  IconTarget, IconWorld, IconChartBar, IconCheck, IconBriefcase, IconHierarchy
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'seo-services',
  business: 'b2b-services',
  variants: {
    hero: 'variant1',
    whyChooseUs: 'variant2',
    process: 'variant1',
  },
  data: {
    slug: 'b2b-seo-services',
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
            { text: "Why B2B Firms Lose Clients Without ", gradient: false },
            { text: "Strong SEO Visibility", gradient: true, gradientClass: "from-green-500 via-teal-500 to-blue-600" }
          ],
          subheadline: "In B2B, buyers don’t make impulse purchases. They research, compare, and evaluate — and if you don’t show up on Google, you don’t even get considered.",
          painPoints: [
            "Low search visibility for industry-specific terms",
            "Competitors ranking higher for high-value keywords",
            "Lack of trust-building content & thought leadership",
            "Long sales cycles with poor organic lead nurturing",
            "Missed global opportunities due to weak SEO strategy",
            "Relying too much on paid ads with no organic backup"
          ],
          solutionPoints: [
            "Keyword research focused on high-value B2B buyer intent",
            "Content marketing & authority-building blogs/whitepapers",
            "On-page & technical SEO for enterprise websites",
            "Global SEO strategies for international B2B reach",
            "SEO-driven lead nurturing with funnel content",
            "Analytics & reporting tied directly to pipeline growth"
          ],
          cta: {
            icon: React.createElement(IconSearch, { size: 20 }),
            text: "Boost My B2B SEO"
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
              question: 'Why is SEO important for B2B companies?',
              answer: 'B2B buyers research extensively before choosing vendors. SEO ensures your brand appears during these critical research phases, generating qualified leads.',
              icon: React.createElement(IconSearch, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'How long does it take to see results from B2B SEO?',
              answer: 'Typically 3–6 months for strong improvements, depending on competition and industry. B2B SEO focuses on building authority for long-term growth.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Can SEO bring global B2B leads?',
              answer: 'Yes. With multilingual SEO, international keyword targeting, and content strategies, we help expand your global reach and attract overseas buyers.',
              icon: React.createElement(IconWorld, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'What makes B2B SEO different from B2C?',
              answer: 'B2B SEO focuses on niche keywords, longer sales cycles, thought leadership, and high-value decision-makers, unlike B2C which focuses on volume and speed.',
              icon: React.createElement(IconBriefcase, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Do you track ROI from SEO?',
              answer: 'Yes. We map SEO performance to pipeline metrics like MQLs, SQLs, and closed deals — not just rankings or traffic.',
              icon: React.createElement(IconCheck, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "B2B SEO Services That Drive Decision-Makers to You",
      headlineKeywords: [
        "Enterprise SEO for B2B Companies",
        "Lead-Generating SEO for Industries",
        "Global SEO Strategies",
        "Authority & Content SEO",
        "Technical SEO for Enterprises"
      ],
      brandLine: [
        { text: "📈 Digi Aerotech helps B2B firms dominate Google rankings, attract high-quality leads, and build trust with decision-makers worldwide.", gradient: false }
      ],
      subheadline: "We don’t just drive traffic — we drive **qualified B2B leads** that turn into real business opportunities.",
      ctaButtons: [
        { icon: React.createElement(IconRocket, { size: 28 }), text: "Start My SEO Growth", link: "/contact" },
        { icon: React.createElement(IconTarget, { size: 28 }), text: "Free SEO Audit", link: "/audit", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "Decision-Maker Traffic",
          description: "Reach CXOs, managers & buyers researching vendors"
        },
        {
          icon: React.createElement(IconHierarchy, { size: 32 }),
          title: "Complex Sales SEO",
          description: "SEO strategies built for long B2B cycles"
        },
        {
          icon: React.createElement(IconChartBar, { size: 32 }),
          title: "Pipeline-Driven",
          description: "Rankings tied directly to MQLs & SQLs"
        },
        {
          icon: React.createElement(IconBuildingSkyscraper, { size: 32 }),
          title: "Enterprise Ready",
          description: "Scalable SEO strategies for global B2B firms"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why B2B Leaders Trust ", gradient: false },
        { text: "Digi Aerotech for SEO", gradient: true, gradientClass: "from-green-500 via-teal-500 to-blue-600" }
      ],
      trustPoints: [
        { icon: React.createElement(IconTarget, { size: 28 }), title: "B2B Buyer Psychology", description: "Deep understanding of how B2B buyers search & evaluate." },
        { icon: React.createElement(IconTrendingUp, { size: 28 }), title: "ROI-Linked SEO", description: "We tie rankings to leads & revenue, not vanity metrics." },
        { icon: React.createElement(IconBriefcase, { size: 28 }), title: "Enterprise Expertise", description: "Experience across SaaS, IT, Manufacturing, Consulting & more." },
        { icon: React.createElement(IconWorld, { size: 28 }), title: "Global SEO Reach", description: "Expand into international markets with multilingual SEO." },
        { icon: React.createElement(IconCheck, { size: 28 }), title: "Transparent Reporting", description: "Real-time dashboards with pipeline-linked SEO KPIs." },
        { icon: React.createElement(IconChartBar, { size: 28 }), title: "Proven Results", description: "Case studies in multiple B2B sectors with strong ROI." }
      ],
      cta: {
        text: "Boost My B2B SEO",
        link: "#contact",
        icon: React.createElement(IconRocket, { size: 20 })
      }
    },
    process: {
      title: 'Our Proven B2B SEO Process',
      subtitle: 'DISCOVER → OPTIMIZE → RANK → CONVERT',
      description: 'B2B SEO is more than keywords — it’s about **owning buyer intent** across long sales cycles and complex decision-making.',
      steps: [
        { id: 1, title: 'SEO Audit & Research', description: 'Industry-specific keyword research & competitor benchmarking' },
        { id: 2, title: 'On-Page & Technical SEO', description: 'Enterprise-ready site structure, meta optimization, schema & speed' },
        { id: 3, title: 'Content Strategy', description: 'Blogs, whitepapers & case studies that build thought leadership' },
        { id: 4, title: 'Link Building & Authority', description: 'High-quality backlinks from trusted industry sites' },
        { id: 5, title: 'Conversion SEO', description: 'Landing pages optimized to turn visitors into MQLs/SQLs' },
        { id: 6, title: 'Analytics & Scaling', description: 'Monthly reports tied to pipeline growth & ROI' }
      ]
    },
    cta: {
      title: 'Ready to Make Your B2B Brand Visible on Google?',
      subtitle: 'ENTERPRISE SEO • CONTENT • LEAD GENERATION • GLOBAL REACH',
      description: 'Stop losing deals to competitors ranking above you. Digi Aerotech builds SEO strategies that put you in front of decision-makers when it matters most.',
    }
  }
};
