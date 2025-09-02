import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import { 
  IconSearch, IconTrendingUp, IconUsers, IconShieldCheck, IconRocket, IconStar, IconArrowRight, IconStack, IconFileText
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'seo-services',
  business: 'ecomm-brands',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant1',
    process: 'variant3',
  },
  data: {
    slug: 'seo-services-ecomm-brands',
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
            { text: "Challenges E-commerce Brands Face with ", gradient: false },
            { text: "SEO & Organic Growth", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "E-commerce brands struggle with ranking, organic traffic, and conversions without proper SEO strategies, leaving sales potential untapped.",
          painPoints: [
            "Low search engine visibility for products",
            "High competition in e-commerce niche",
            "Poorly optimized product listings & content",
            "Difficulty in technical SEO & site structure",
            "Low organic traffic and conversions"
          ],
          solutionPoints: [
            "Keyword research & content optimization for products & categories",
            "On-page, off-page, and technical SEO improvements",
            "Structured data & rich snippets to enhance SERP presence",
            "Content marketing & link building to boost authority",
            "Analytics-driven optimization to maximize ROI"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Boost Organic Traffic & Sales"
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
              question: 'How does SEO help my e-commerce store?',
              answer: 'SEO improves your organic visibility, driving qualified traffic that converts into sales, reducing reliance on paid ads.',
              icon: React.createElement(IconSearch, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Do you optimize product pages too?',
              answer: 'Yes. We optimize titles, descriptions, images, schema, and content to rank each product effectively in search engines.',
              icon: React.createElement(IconFileText, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Can SEO increase my ROI?',
              answer: 'Absolutely. By driving organic traffic, reducing ad dependency, and improving conversions, SEO maximizes your long-term ROI.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'How long before I see results?',
              answer: 'SEO is a medium-to-long term strategy. Typically, you’ll start seeing noticeable results in 3–6 months.',
              icon: React.createElement(IconRocket, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Do you handle technical SEO issues?',
              answer: 'Yes. We optimize site speed, mobile usability, crawlability, indexing, and structured data for maximum search performance.',
              icon: React.createElement(IconShieldCheck, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'Will SEO work for new e-commerce brands?',
              answer: 'Yes. We create a robust foundation and growth strategy that helps even new stores rank and gain organic traction.',
              icon: React.createElement(IconUsers, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Want ",
      headlineKeywords: [
        "Top Rankings for Your Products?",
        "Organic Traffic That Converts?",
        "Better Visibility on Google?",
        "E-commerce SEO That Works?",
        "Grow Your Online Store Organically?"
      ],
      brandLine: [
        { text: "📈 Boost Your E-commerce Sales with Proven SEO Strategies", gradient: false }
      ],
      subheadline: "We help e-commerce stores rank higher on search engines, attract targeted traffic, and convert visitors into paying customers.",
      ctaButtons: [
        { icon: React.createElement(IconTrendingUp, { size: 28 }), text: "Book Free SEO Audit", link: "/contact" },
        { icon: React.createElement(IconUsers, { size: 28 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
      ],
      stats: [
        { icon: React.createElement(IconSearch, { size: 32 }), title: "500+ Keywords Ranked", description: "Across multiple niches" },
        { icon: React.createElement(IconRocket, { size: 32 }), title: "10X Organic Traffic", description: "Driven by strategic SEO" },
        { icon: React.createElement(IconStar, { size: 32 }), title: "100+ E-commerce Stores", description: "Optimized successfully" },
        { icon: React.createElement(IconUsers, { size: 32 }), title: "50,000+ Visitors", description: "Monthly organic reach" }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the ", gradient: false },
        { text: "SEO Partner E-commerce Brands Trust", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        { icon: React.createElement(IconTrendingUp, { size: 28 }), title: "Proven SEO Expertise", description: "Years of experience optimizing e-commerce stores across niches to achieve top search rankings and higher visibility." },
        { icon: React.createElement(IconRocket, { size: 28 }), title: "On-page & Off-page Mastery", description: "We handle everything from content optimization, technical SEO, link building, and authority development to maximize results." },
        { icon: React.createElement(IconShieldCheck, { size: 28 }), title: "Technical SEO Excellence", description: "Our team ensures fast, mobile-friendly, and crawlable websites that meet Google’s best practices." },
        { icon: React.createElement(IconUsers, { size: 28 }), title: "Data-Driven Strategy", description: "All SEO efforts are guided by analytics and KPIs, ensuring campaigns focus on ROI and measurable growth." },
        { icon: React.createElement(IconStar, { size: 28 }), title: "Content Optimization", description: "We craft high-quality product, category, and blog content that attracts and converts your ideal audience." },
        { icon: React.createElement(IconStack, { size: 28 }), title: "Scalable SEO Solutions", description: "Strategies are designed to grow with your e-commerce store, ensuring consistent long-term traffic and revenue." }
      ],
      cta: {
        text: "Start Your SEO Growth Today",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Proven SEO Process for E-commerce Stores',
      subtitle: 'STEP-BY-STEP ORGANIC GROWTH',
      className: 'border-t border-border dark:border-gray-700',
      description: 'We follow a comprehensive process to ensure e-commerce stores achieve higher rankings, more traffic, and improved conversions.',
      steps: [
        { id: 1, title: 'Keyword & Competitor Research', description: 'Identify high-value keywords and analyze competitors to craft a strategy that targets opportunities and outperforms rivals.' },
        { id: 2, title: 'On-Page SEO Optimization', description: 'Optimize product pages, meta tags, headings, images, and internal linking to ensure search engines understand your content.' },
        { id: 3, title: 'Technical SEO Audit', description: 'Address site speed, mobile usability, indexing issues, schema, and crawlability to ensure your store is fully search-engine-ready.' },
        { id: 4, title: 'Content Strategy & Marketing', description: 'Create blog posts, category guides, and product content that attracts, educates, and converts your target audience.' },
        { id: 5, title: 'Link Building & Authority', description: 'Acquire high-quality backlinks from authoritative sources to strengthen your domain authority and SERP rankings.' },
        { id: 6, title: 'Monitoring & Optimization', description: 'Track performance, refine keywords, adjust content and strategies to maximize organic traffic and sales over time.' }
      ]
    },
    cta: {
      title: 'Ready to Boost Organic Traffic and Sales?',
      subtitle: 'Grow Your E-commerce Store with Proven SEO Strategies',
      description: 'Book a free consultation with Digi Aerotech and get a complete SEO roadmap to dominate your niche.'
    }
  }
};
