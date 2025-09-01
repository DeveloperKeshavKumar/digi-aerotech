import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconUsers, IconTarget, IconChartBar, IconSparkles, IconArrowRight,
  IconShoppingCart, IconRocket, IconBrandFacebook, IconBrandInstagram, IconMessageCircle
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'meta-ads',
  business: 'b2c-services',
  variants: {
    hero: 'variant1',
    whyChooseUs: 'variant2',
    process: 'variant3',
    testimonials: 'variant1'
  },
  data: {
    slug: 'meta-ads-b2c',
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
            { text: "Why Most B2C Businesses Fail ", gradient: false },
            { text: "with Facebook & Instagram Ads", gradient: true, gradientClass: "from-pink-500 via-purple-500 to-indigo-500" }
          ],
          subheadline: "Running ads isn’t enough. Without the right targeting & creatives, you burn cash instead of getting customers.",
          painPoints: [
            "High ad spend but very few conversions",
            "Irrelevant audience targeting",
            "Generic creatives that don’t engage",
            "No retargeting strategy for lost leads",
            "Poor tracking & unclear ROI",
            "Competitors winning with better ads"
          ],
          solutionPoints: [
            "Laser-focused audience targeting",
            "High-converting creative design",
            "Retargeting campaigns to bring back lost leads",
            "A/B testing for best-performing ads",
            "Conversion tracking & ROI dashboards",
            "End-to-end ad management by experts"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Run My Ads Profitably"
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
              question: 'Why should B2C businesses use Meta Ads?',
              answer: 'Facebook & Instagram ads help salons, gyms, restaurants, and retailers reach local customers, increase walk-ins, and drive online sales quickly.',
              icon: React.createElement(IconBrandFacebook, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'How do you target the right audience?',
              answer: 'We use advanced targeting filters — interests, demographics, behavior, location — to reach only potential buyers and avoid wasted spend.',
              icon: React.createElement(IconTarget, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Can you guarantee results?',
              answer: 'We guarantee optimized campaigns with data-driven decisions. While no agency can guarantee exact sales, our proven framework consistently delivers higher ROI.',
              icon: React.createElement(IconChartBar, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'How much should I spend on Meta Ads?',
              answer: 'It depends on your goals. Most B2C businesses see great results with ₹15k–₹50k monthly budgets. We maximize ROI no matter the spend.',
              icon: React.createElement(IconShoppingCart, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Do you manage creatives too?',
              answer: 'Yes, we design ad copies, visuals, and videos that resonate with your audience and convert them into paying customers.',
              icon: React.createElement(IconSparkles, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Turn Likes into Sales. Turn Views into Walk-Ins.",
      headlineKeywords: [
        "Meta Ads for B2C Businesses",
        "Facebook Ads That Convert",
        "Instagram Ads That Attract Customers",
        "Boost Local Footfall & Online Sales",
        "High-ROI Ad Campaigns"
      ],
      brandLine: [
        { text: "🎯 Hyper-Targeted Ads for Salons, Gyms, Cafés, and More", gradient: false }
      ],
      subheadline: "At Digi Aerotech, we design, run, and optimize Facebook & Instagram ads for B2C businesses. Whether you want walk-ins, bookings, or online sales, our Meta Ads strategies deliver real, measurable growth.",
      ctaButtons: [
        { icon: React.createElement(IconRocket, { size: 28 }), text: "Run My Ads Now", link: "/contact" },
        { icon: React.createElement(IconUsers, { size: 28 }), text: "Free Ad Strategy Call", link: "/audit", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconTarget, { size: 32 }),
          title: "Precise Targeting",
          description: "Reach only buyers, not random scrollers"
        },
        {
          icon: React.createElement(IconChartBar, { size: 32 }),
          title: "Proven ROI",
          description: "Data-driven campaigns with measurable growth"
        },
        {
          icon: React.createElement(IconMessageCircle, { size: 32 }),
          title: "Engaging Ads",
          description: "Creatives that convert views into actions"
        },
        {
          icon: React.createElement(IconShoppingCart, { size: 32 }),
          title: "More Sales",
          description: "Turn ads into walk-ins, bookings & purchases"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why B2C Businesses Trust ", gradient: false },
        { text: "Digi Aerotech for Meta Ads", gradient: true, gradientClass: "from-pink-500 via-purple-500 to-indigo-500" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconBrandFacebook, { size: 28 }),
          title: "Facebook Ads Experts",
          description: "We craft ad strategies designed to maximize ROI for B2C niches."
        },
        {
          icon: React.createElement(IconBrandInstagram, { size: 28 }),
          title: "Instagram Growth",
          description: "Visual-first creatives that drive engagement and conversions."
        },
        {
          icon: React.createElement(IconTarget, { size: 28 }),
          title: "Advanced Audience Targeting",
          description: "We identify your ideal customers and serve ads directly to them."
        },
        {
          icon: React.createElement(IconSparkles, { size: 28 }),
          title: "Creative Ad Design",
          description: "Eye-catching graphics, videos, and copies that sell."
        },
        {
          icon: React.createElement(IconChartBar, { size: 28 }),
          title: "Conversion Tracking",
          description: "We set up pixels & tracking to measure ROI accurately."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Proven B2C Success",
          description: "Gyms, salons, cafés & retailers have scaled fast with us."
        }
      ],
      cta: {
        text: "Boost My Ads Performance",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Meta Ads Process',
      subtitle: 'FROM IMPRESSIONS TO CUSTOMERS',
      description: 'We follow a proven framework that ensures every rupee spent on Meta Ads brings real results for your B2C business.',
      steps: [
        { id: 1, title: 'Business & Audience Research', description: 'Understand your business goals and define the right target audience.' },
        { id: 2, title: 'Ad Strategy & Funnel Setup', description: 'Design full-funnel ad strategy (awareness → engagement → conversion).' },
        { id: 3, title: 'Creative Development', description: 'Design high-impact visuals, videos & ad copies tailored to your audience.' },
        { id: 4, title: 'Campaign Launch & Testing', description: 'Launch ads with A/B testing to identify best-performing creatives & audiences.' },
        { id: 5, title: 'Retargeting & Optimization', description: 'Retarget warm leads & optimize ads for maximum ROI.' },
        { id: 6, title: 'Reporting & Scaling', description: 'Track ROI, scale winning campaigns, and lower cost-per-lead.' }
      ]
    },
    testimonials: {
      title: [
        { text: "B2C Brands Growing ", gradient: false },
        { text: "with Digi Aerotech Meta Ads", gradient: true, gradientClass: "from-pink-500 via-purple-500 to-indigo-500" }
      ],
      description: 'From salons to restaurants, Digi Aerotech has helped B2C businesses drive walk-ins, leads, and sales with high-ROI Meta Ads.',
      testimonials: [
        {
          id: '1',
          message: 'Our gym membership signups doubled in 45 days after Digi Aerotech’s Instagram ads campaign. Their targeting is spot-on!',
          highlight: '2x more signups',
          stars: 5,
          name: 'Ritika Sharma',
          designation: 'Manager',
          company: 'FitLife Gym'
        },
        {
          id: '2',
          message: 'We were struggling with low walk-ins. After their Facebook ads strategy, our salon gets 60% of new clients from ads alone.',
          highlight: '60% new clients from ads',
          stars: 5,
          name: 'Arjun Mehta',
          designation: 'Owner',
          company: 'Glow & Shine Salon'
        }
      ]
    },
    cta: {
      title: 'Ready to Scale with Meta Ads?',
      subtitle: 'B2C GROWTH → MORE CUSTOMERS → MORE SALES',
      description: 'Digi Aerotech helps B2C businesses turn Facebook & Instagram ads into a consistent growth engine. Let’s create your next winning campaign.',
    }
  }
};
