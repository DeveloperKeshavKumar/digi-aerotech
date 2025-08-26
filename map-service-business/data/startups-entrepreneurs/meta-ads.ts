import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconTarget, IconRocket, IconChartBar, IconArrowRight,
  IconUsers, IconTrendingUp, IconDeviceMobile, IconBrandFacebook,
  IconBrandInstagram, IconAd, IconCurrencyDollar, IconSparkles
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'meta-ads',
  business: 'startups-entrepreneurs',
  variants: {
    hero: 'variant1',
    whyChooseUs: 'variant3',
    process: 'variant2',
    testimonials: 'variant1'
  },
  data: {
    slug: 'meta-ads-startups-entrepreneurs',
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
            { text: "Why Startups Struggle with ", gradient: false },
            { text: "Paid Ads", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Running ads without a strategy wastes budget and fails to generate quality leads for startups.",
          painPoints: [
            "Wasting ad spend on broad targeting",
            "Low click-through rates & poor creatives",
            "Struggling to generate qualified leads",
            "No proper tracking or conversions setup",
            "Difficulty scaling campaigns profitably"
          ],
          solutionPoints: [
            "Laser-focused audience targeting",
            "High-converting ad creatives & copy",
            "Pixel tracking & retargeting campaigns",
            "Affordable startup-friendly ad strategies",
            "Continuous A/B testing & scaling"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Launch My Meta Ads"
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
              question: 'Why are Meta Ads important for startups?',
              answer: 'Meta Ads (Facebook & Instagram Ads) help startups build awareness, generate leads, and drive sales quickly without waiting for long-term SEO results.',
              icon: React.createElement(IconBrandFacebook, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'How do Meta Ads generate leads for entrepreneurs?',
              answer: 'By targeting the right audience with precise interests, demographics, and behaviors, we ensure startups attract high-quality leads ready to convert.',
              icon: React.createElement(IconTarget, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Do you manage ad creatives as well?',
              answer: 'Yes, we design scroll-stopping creatives, engaging videos, and persuasive ad copy tailored for startups and small businesses.',
              icon: React.createElement(IconAd, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'What’s the minimum budget for Meta Ads?',
              answer: 'We craft startup-friendly campaigns, starting with budgets as low as $200–$300, then scale based on ROI.',
              icon: React.createElement(IconCurrencyDollar, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'How soon can I see results?',
              answer: 'Most startups begin to see leads and inquiries within the first 2–3 weeks, depending on targeting and ad spend.',
              icon: React.createElement(IconRocket, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Boost Your Startup with ",
      headlineKeywords: [
        "Meta Ads",
        "Facebook Ads",
        "Instagram Ads",
        "Lead Generation"
      ],
      brandLine: [
        { text: "🚀 Drive Growth with Smart Paid Social Campaigns", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      subheadline: "We help startups and entrepreneurs scale faster with ROI-driven Meta Ads campaigns that generate leads, boost sales, and build brand awareness.",
      ctaButtons: [
        { icon: React.createElement(IconBrandFacebook, { size: 28 }), text: "Run My Facebook Ads", link: "/contact" },
        { icon: React.createElement(IconBrandInstagram, { size: 28 }), text: "Boost My Instagram", link: "/contact", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "5x More Leads",
          description: "with laser-focused targeting"
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "High ROI Campaigns",
          description: "optimized for startups"
        },
        {
          icon: React.createElement(IconDeviceMobile, { size: 32 }),
          title: "Mobile-First Ads",
          description: "engage audiences instantly"
        },
        {
          icon: React.createElement(IconSparkles, { size: 32 }),
          title: "Creative Excellence",
          description: "ads that convert clicks to customers"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Entrepreneurs Choose Us for ", gradient: false },
        { text: "Meta Ads", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconTarget, { size: 28 }),
          title: "Precise Targeting",
          description: "We reach your ideal customers with laser accuracy."
        },
        {
          icon: React.createElement(IconAd, { size: 28 }),
          title: "Scroll-Stopping Creatives",
          description: "High-quality visuals and copy that drive action."
        },
        {
          icon: React.createElement(IconChartBar, { size: 28 }),
          title: "Data-Driven Scaling",
          description: "We optimize ads based on real metrics & ROI."
        },
        {
          icon: React.createElement(IconCurrencyDollar, { size: 28 }),
          title: "Startup-Friendly Budgets",
          description: "Affordable campaigns with maximum impact."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Faster Growth",
          description: "Generate leads & sales within weeks, not months."
        },
        {
          icon: React.createElement(IconSparkles, { size: 28 }),
          title: "Conversion-Focused",
          description: "Every ad is designed to deliver measurable results."
        }
      ],
      cta: {
        text: "Launch My Meta Campaign",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Meta Ads Process for Startups',
      subtitle: 'FROM TESTING TO SCALING',
      className: 'border-t border-border dark:border-gray-700',
      description: 'We help startups turn limited budgets into maximum results with a proven Meta Ads framework that drives leads and revenue.',
      steps: [
        {
          id: 1,
          title: 'Market & Competitor Research',
          description: 'We analyze your target audience, competitors, and industry to craft a winning Meta Ads strategy.'
        },
        {
          id: 2,
          title: 'Audience Targeting',
          description: 'We define and segment audiences by demographics, interests, and behaviors for precise targeting.'
        },
        {
          id: 3,
          title: 'Creative Design & Copywriting',
          description: 'Our team builds eye-catching visuals, videos, and persuasive copy tailored for your startup.'
        },
        {
          id: 4,
          title: 'Campaign Setup & Launch',
          description: 'We structure campaigns with ad sets, pixels, and objectives to maximize lead generation and conversions.'
        },
        {
          id: 5,
          title: 'Optimization & Retargeting',
          description: 'We continuously A/B test, optimize, and run retargeting ads to convert interested prospects into paying customers.'
        },
        {
          id: 6,
          title: 'Scaling & Reporting',
          description: 'Once winning campaigns are identified, we scale budgets strategically while providing transparent performance reports.'
        }
      ]
    },
    testimonials: {
      title: [
        { text: "Startups Growing with ", gradient: false },
        { text: "Meta Ads", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      description: 'See how our Meta Ads campaigns have transformed startups into fast-growing businesses with more leads and sales.',
      testimonials: [
        {
          id: '1',
          message: 'Our lead flow increased 400% within the first month of running Facebook Ads. They know exactly how to target the right audience.',
          highlight: '400% More Leads',
          stars: 5,
          name: 'Ankit Mehra',
          designation: 'Founder',
          company: 'QuickLaunch'
        },
        {
          id: '2',
          message: 'We went from struggling with organic reach to generating consistent sales via Instagram Ads. Perfect for startups like ours!',
          highlight: 'Consistent Sales via Ads',
          stars: 5,
          name: 'Pooja Sharma',
          designation: 'Co-Founder',
          company: 'StyleNest'
        }
      ]
    },
    cta: {
      title: 'Supercharge Your Startup with Meta Ads',
      subtitle: 'FROM CLICKS TO CUSTOMERS',
      description: 'Turn your startup vision into a fast-growing reality with our ROI-driven Meta Ads campaigns.',
    }
  }
};
