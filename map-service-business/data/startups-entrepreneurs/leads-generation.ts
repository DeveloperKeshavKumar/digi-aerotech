import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconUsers, IconTarget, IconRocket, IconChartBar, IconCoin,
  IconTrendingUp, IconBriefcase, IconMouse, IconMail,
  IconWorld, IconStars, IconArrowRight
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'leads-generation',
  business: 'startups-entrepreneurs',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant1',
    process: 'variant3',
  },
  data: {
    slug: 'leads-generation-startups-entrepreneurs',
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
            { text: "Why Most Startups Fail at ", gradient: false },
            { text: "Lead Generation", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Without a predictable lead pipeline, startups burn cash and struggle to grow sustainably.",
          painPoints: [
            "Unqualified leads wasting sales time",
            "Overdependence on referrals or word-of-mouth",
            "Ad spend with no measurable conversions",
            "Poor follow-up and nurturing process",
            "Difficulty scaling beyond initial traction"
          ],
          solutionPoints: [
            "Laser-focused targeting on ideal customers",
            "Omnichannel lead generation (Search, Social, Email, LinkedIn)",
            "Conversion-optimized landing pages & funnels",
            "CRM & automation to nurture leads until sales-ready",
            "Data-driven scaling for predictable revenue growth"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Build My Lead Machine"
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
              question: 'How do you generate leads for startups?',
              answer: 'We use a multi-channel approach: Google Ads, Meta Ads, LinkedIn outreach, email campaigns, and SEO-driven funnels for consistent, qualified leads.',
              icon: React.createElement(IconUsers, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'What type of leads do you deliver?',
              answer: 'We deliver only qualified, sales-ready leads by targeting decision-makers and high-intent prospects specific to your industry.',
              icon: React.createElement(IconTarget, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'How soon can startups see results?',
              answer: 'With paid campaigns, results can start in days. Organic channels like SEO build a long-term pipeline in 2–3 months.',
              icon: React.createElement(IconRocket, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Do you provide lead nurturing?',
              answer: 'Yes. We set up email drip campaigns, retargeting, and CRM automations to nurture prospects until they are ready to convert.',
              icon: React.createElement(IconMail, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Can you scale lead generation as we grow?',
              answer: 'Absolutely. We scale campaigns and funnels as your startup grows, ensuring a consistent flow of leads to fuel revenue growth.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Fuel Startup Growth with ",
      headlineKeywords: [
        "Qualified Leads",
        "Sales Opportunities",
        "B2B Prospects",
        "Customer Pipelines"
      ],
      brandLine: [
        { text: "🚀 Predictable Lead Generation for Entrepreneurs", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      subheadline: "We build lead generation systems that drive predictable, high-quality customers for startups and entrepreneurs ready to scale.",
      ctaButtons: [
        { icon: React.createElement(IconTarget, { size: 28 }), text: "Start Getting Leads", link: "/contact" },
        { icon: React.createElement(IconChartBar, { size: 28 }), text: "Request Free Audit", link: "/lead-gen-audit", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconCoin, { size: 32 }),
          title: "3X ROI",
          description: "on lead generation campaigns"
        },
        {
          icon: React.createElement(IconMouse, { size: 32 }),
          title: "High Intent Leads",
          description: "that convert faster"
        },
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "Consistent Pipeline",
          description: "new leads every week"
        },
        {
          icon: React.createElement(IconRocket, { size: 32 }),
          title: "Scalable Growth",
          description: "for startups & entrepreneurs"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Entrepreneurs Choose Us for ", gradient: false },
        { text: "Lead Generation", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconTarget, { size: 28 }),
          title: "Laser-Focused Targeting",
          description: "We reach only decision-makers and buyers."
        },
        {
          icon: React.createElement(IconBriefcase, { size: 28 }),
          title: "Startup-Friendly Pricing",
          description: "Flexible plans designed for lean budgets."
        },
        {
          icon: React.createElement(IconChartBar, { size: 28 }),
          title: "Data-Driven Campaigns",
          description: "Every lead is tracked and measured."
        },
        {
          icon: React.createElement(IconMail, { size: 28 }),
          title: "Lead Nurturing",
          description: "We set up automated follow-ups that convert."
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Scalable Systems",
          description: "Grow from early traction to massive scale."
        },
        {
          icon: React.createElement(IconStars, { size: 28 }),
          title: "Proven Results",
          description: "We’ve delivered 50,000+ leads for startups."
        }
      ],
      cta: {
        text: "Build My Lead Generation Engine",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Lead Generation Process for Startups',
      subtitle: 'FROM TRAFFIC TO CUSTOMERS',
      className: 'border-t border-border dark:border-gray-700',
      description: 'We combine advertising, SEO, funnels, and nurturing to generate high-quality leads that turn into paying customers.',
      steps: [
        {
          id: 1,
          title: 'Market & Audience Research',
          description: 'We identify your ideal customer persona, buying triggers, and channels where they spend time. This ensures we target the right people from day one.'
        },
        {
          id: 2,
          title: 'Multi-Channel Strategy',
          description: 'We leverage Google Ads, Meta Ads, LinkedIn, SEO, and email to create a robust pipeline. Each channel is designed to maximize lead quality and volume.'
        },
        {
          id: 3,
          title: 'Landing Pages & Funnels',
          description: 'Custom-designed landing pages and sales funnels optimized for conversions capture leads efficiently while boosting trust and credibility.'
        },
        {
          id: 4,
          title: 'Lead Capture & Tracking',
          description: 'We set up forms, CTAs, and tracking to ensure every lead is recorded, qualified, and attributed to the right campaign for ROI analysis.'
        },
        {
          id: 5,
          title: 'Nurturing & Automation',
          description: 'Through email drip campaigns, retargeting, and CRM workflows, we nurture leads until they are sales-ready, ensuring maximum conversions.'
        },
        {
          id: 6,
          title: 'Scaling & Optimization',
          description: 'Once profitable, we scale ad spend, expand outreach, and optimize funnels for exponential startup growth and consistent revenue.'
        }
      ]
    },
    cta: {
      title: 'Build a Predictable Lead Generation System',
      subtitle: 'FROM STARTUP TO SCALEUP',
      description: 'Don’t rely on random inquiries. Our proven lead generation services ensure consistent, qualified customers for your startup.',
    }
  }
};
