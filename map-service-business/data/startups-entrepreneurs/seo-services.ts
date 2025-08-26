import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconTrendingUp, IconWorld, IconChartLine, IconSearch, IconRocket,
  IconTarget, IconChartBar, IconShieldCheck, IconClock, IconUsers
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'seo-services',
  business: 'startups-entrepreneurs',
  variants: {
    hero: 'variant1',
    whyChooseUs: 'variant3',
    process: 'variant2',
    testimonials: 'variant1'
  },
  data: {
    slug: 'seo-services-startups-entrepreneurs',
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
            { text: "Why Most Startups ", gradient: false },
            { text: "Fail Without SEO", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Launching a startup is exciting, but without SEO, your dream project remains invisible to your customers, investors, and even search engines.",
          painPoints: [
            "Zero visibility on Google search",
            "High customer acquisition costs from paid ads",
            "Competitors outranking on every keyword",
            "No consistent organic lead flow",
            "Poor credibility with investors & users"
          ],
          solutionPoints: [
            "Top Google rankings for high-intent keywords",
            "Organic traffic that lowers CAC (Customer Acquisition Cost)",
            "SEO strategies designed for startups & entrepreneurs",
            "Consistent flow of organic leads & signups",
            "Improved authority and investor trust"
          ],
          cta: {
            icon: React.createElement(IconSearch, { size: 20 }),
            text: "Boost My Startup SEO"
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
              question: 'Why is SEO important for startups?',
              answer: 'SEO ensures long-term growth by driving organic traffic, reducing dependency on ads, and building credibility with investors and customers.',
              icon: React.createElement(IconChartLine, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'How fast can we see results?',
              answer: 'Startups usually start seeing visible improvements within 3-4 months of consistent SEO strategy implementation.',
              icon: React.createElement(IconClock, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Can SEO reduce our marketing costs?',
              answer: 'Yes! By ranking organically, you lower paid ad spending while still attracting qualified leads at scale.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Do you provide SEO for early-stage startups?',
              answer: 'Absolutely. We create tailored SEO strategies depending on your funding stage, audience, and goals.',
              icon: React.createElement(IconRocket, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Will SEO help us attract investors?',
              answer: 'Yes. A strong SEO presence signals market demand and traction, making your startup more attractive to VCs and angels.',
              icon: React.createElement(IconUsers, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "SEO That Makes Your Startup ",
      headlineKeywords: [
        "Visible",
        "Scalable",
        "Investor-Ready",
        "Profitable"
      ],
      brandLine: [
        { text: "🚀 SEO Services for Startups & Entrepreneurs", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      subheadline: "We help startups dominate search rankings, generate organic leads, and build investor trust with powerful SEO strategies.",
      ctaButtons: [
        { icon: React.createElement(IconSearch, { size: 28 }), text: "Get SEO Strategy", link: "/contact" },
        { icon: React.createElement(IconRocket, { size: 28 }), text: "Free SEO Audit", link: "/contact", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconWorld, { size: 32 }),
          title: "100+ Startups",
          description: "scaled with SEO strategies"
        },
        {
          icon: React.createElement(IconChartBar, { size: 32 }),
          title: "300% Growth",
          description: "average organic traffic increase"
        },
        {
          icon: React.createElement(IconTarget, { size: 32 }),
          title: "50+ Keywords",
          description: "ranked on Page 1 for startups"
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 32 }),
          title: "Lower CAC",
          description: "through sustainable organic traffic"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Us for ", gradient: false },
        { text: "Startup SEO Services", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconChartLine, { size: 28 }),
          title: "Startup-Specific SEO",
          description: "We tailor strategies for early-stage and growth-stage startups."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Fast & Scalable",
          description: "Our SEO approach scales with your funding stage and business model."
        },
        {
          icon: React.createElement(IconSearch, { size: 28 }),
          title: "Keyword Domination",
          description: "We identify & rank you on high-intent startup keywords."
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Lower Acquisition Costs",
          description: "Reduce reliance on expensive ads with organic lead flow."
        },
        {
          icon: React.createElement(IconWorld, { size: 28 }),
          title: "Global Reach",
          description: "Expand visibility in local and international markets."
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "Investor Trust",
          description: "SEO signals traction and demand, attracting funding."
        }
      ],
      cta: {
        text: "Start My SEO Growth",
        link: "#contact",
        icon: React.createElement(IconChartLine, { size: 20 })
      }
    },
    process: {
      title: 'Our SEO Process for Startups',
      subtitle: 'FROM LAUNCH TO GROWTH',
      className: 'border-t border-border dark:border-gray-700',
      description: 'We design a startup-focused SEO roadmap to make your brand visible, scalable, and investor-ready.',
      steps: [
        {
          id: 1,
          title: 'SEO Audit & Market Research',
          description: 'We analyze your industry, competitors, and keywords to build a roadmap tailored for your startup growth stage.'
        },
        {
          id: 2,
          title: 'Technical SEO Setup',
          description: 'Fixing site speed, mobile optimization, indexing issues, and Core Web Vitals to build a strong foundation.'
        },
        {
          id: 3,
          title: 'Content Strategy',
          description: 'We create SEO-driven content that attracts users, answers investor questions, and ranks on Google.'
        },
        {
          id: 4,
          title: 'On-Page & Off-Page SEO',
          description: 'From metadata optimization to link-building, we ensure your site ranks higher and gains authority.'
        },
        {
          id: 5,
          title: 'Growth & Analytics',
          description: 'Tracking keyword rankings, conversions, and investor interest to refine and scale SEO campaigns.'
        }
      ]
    },
    testimonials: {
      title: [
        { text: "Startups Growing with ", gradient: false },
        { text: "Our SEO Services", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      description: 'See how startups like yours scaled visibility, traffic, and funding with our SEO expertise.',
      testimonials: [
        {
          id: '1',
          message: 'Our organic traffic grew 4X in 6 months, reducing ad spend drastically and boosting investor confidence.',
          highlight: '4X Organic Traffic',
          stars: 5,
          name: 'Rohan Sharma',
          designation: 'Founder',
          company: 'FinTechUp'
        },
        {
          id: '2',
          message: 'We went from zero visibility to ranking for 50+ keywords in less than a year. The ROI was game-changing.',
          highlight: '50+ Keywords Ranked',
          stars: 5,
          name: 'Ananya Verma',
          designation: 'Co-Founder',
          company: 'EduStart'
        }
      ]
    },
    cta: {
      title: 'Dominate Google & Build Investor Trust with SEO',
      subtitle: 'SMART SEO FOR STARTUP SUCCESS',
      description: 'From launch to scaling, our SEO services help startups grow visibility, attract leads, and impress investors.',
    }
  }
};
