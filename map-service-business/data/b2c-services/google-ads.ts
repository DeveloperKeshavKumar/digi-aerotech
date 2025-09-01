import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconTarget, IconChartBar, IconUsers, IconShoppingCart, IconRocket, IconPhone,
  IconCash, IconCursorText, IconTrendingUp, IconWorld, IconArrowRight
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'google-ads',
  business: 'b2c-services',
  variants: {
    hero: 'variant1',
    whyChooseUs: 'variant2',
    process: 'variant3',
    testimonials: 'variant2'
  },
  data: {
    slug: 'google-ads-b2c',
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
            { text: "Why Most B2C Brands Lose Money ", gradient: false },
            { text: "on Google Ads", gradient: true, gradientClass: "from-yellow-500 via-orange-500 to-red-500" }
          ],
          subheadline: "Running ads without strategy = burning budget. Most B2C businesses spend on Google Ads but fail to generate quality leads and customers.",
          painPoints: [
            "Wasting money on irrelevant clicks",
            "Low conversions & poor ROI",
            "No proper targeting for local customers",
            "Ad copies that fail to attract",
            "No tracking of calls, leads & purchases",
            "Competitors capturing more customers"
          ],
          solutionPoints: [
            "Laser-focused audience & keyword targeting",
            "Conversion-optimized ad creatives & landing pages",
            "Smart bidding strategies for better ROI",
            "Local targeting for nearby customers",
            "Lead tracking & transparent reporting",
            "Continuous A/B testing for improvement"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Launch My Google Ads Today"
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
              question: 'Do Google Ads work for B2C businesses?',
              answer: 'Yes! Google Ads are perfect for salons, gyms, restaurants, and retail — delivering instant leads and customers.',
              icon: React.createElement(IconShoppingCart, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'How fast can I see results?',
              answer: 'You can start seeing inquiries, calls, and visits within the first few days of running optimized campaigns.',
              icon: React.createElement(IconRocket, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Can you run ads only in my local area?',
              answer: 'Absolutely. We target customers searching near your business using hyper-local targeting.',
              icon: React.createElement(IconWorld, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'How do I know my ads are working?',
              answer: 'We provide transparent reports showing clicks, calls, leads, and sales — so you see real ROI.',
              icon: React.createElement(IconChartBar, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Do I need a big budget?',
              answer: 'Not at all. We scale campaigns based on your budget, starting small and growing with performance.',
              icon: React.createElement(IconCash, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'What industries do you specialize in?',
              answer: 'We help B2C businesses across salons, gyms, spas, restaurants, retail, clinics, and more.',
              icon: React.createElement(IconUsers, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Instant Customers. Real ROI.",
      headlineKeywords: [
        "Google Ads for B2C Businesses",
        "Get More Bookings & Sales",
        "Target Local Customers",
        "Pay Per Click, Not Per Hope",
        "Boost ROI with Digi Aerotech"
      ],
      brandLine: [
        { text: "🎯 Google Ads Campaigns That Actually Convert", gradient: false }
      ],
      subheadline: "At Digi Aerotech, we craft and manage Google Ads campaigns that bring real customers, not just clicks. From salons and gyms to restaurants and retail, we help B2C businesses get instant visibility and more sales.",
      ctaButtons: [
        { icon: React.createElement(IconRocket, { size: 28 }), text: "Start My Campaign", link: "/contact" },
        { icon: React.createElement(IconPhone, { size: 28 }), text: "Get Free Audit", link: "/audit", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconTarget, { size: 32 }),
          title: "97% Reach",
          description: "97% of buyers search online before buying"
        },
        {
          icon: React.createElement(IconCursorText, { size: 32 }),
          title: "Top Position",
          description: "Appear instantly above competitors"
        },
        {
          icon: React.createElement(IconChartBar, { size: 32 }),
          title: "Measurable ROI",
          description: "Every click, lead & call is tracked"
        },
        {
          icon: React.createElement(IconShoppingCart, { size: 32 }),
          title: "More Sales",
          description: "Turn clicks into real customers"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why B2C Brands Choose ", gradient: false },
        { text: "Digi Aerotech for Google Ads", gradient: true, gradientClass: "from-yellow-500 via-orange-500 to-red-500" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconTarget, { size: 28 }),
          title: "Laser Targeting",
          description: "We ensure your ads reach customers who are actively searching for your services."
        },
        {
          icon: React.createElement(IconChartBar, { size: 28 }),
          title: "Data-Driven Strategy",
          description: "Every campaign is optimized with data-backed insights for maximum ROI."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Instant Results",
          description: "Unlike SEO, Google Ads bring immediate leads and customers within days."
        },
        {
          icon: React.createElement(IconCash, { size: 28 }),
          title: "Budget Friendly",
          description: "Flexible plans designed to get results without overspending."
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "B2C Expertise",
          description: "We specialize in industries like salons, gyms, restaurants, and retail stores."
        },
        {
          icon: React.createElement(IconPhone, { size: 28 }),
          title: "Lead Tracking",
          description: "We track calls, inquiries, and conversions directly from your ads."
        }
      ],
      cta: {
        text: "Run My Ads Now",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Proven Google Ads Process',
      subtitle: 'FROM CLICKS TO CUSTOMERS',
      description: 'We don’t just run ads — we build campaigns designed to attract paying customers and maximize ROI.',
      steps: [
        { id: 1, title: 'Audit & Strategy', description: 'We analyze your industry and competition to create a winning ad plan.' },
        { id: 2, title: 'Keyword Research', description: 'We find the best keywords your customers are searching for.' },
        { id: 3, title: 'Ad Creation', description: 'We craft compelling ad copies with strong CTAs that drive clicks.' },
        { id: 4, title: 'Landing Page Optimization', description: 'We ensure your landing page is built to convert visitors into leads.' },
        { id: 5, title: 'Campaign Launch', description: 'Your ads go live with targeted bidding strategies.' },
        { id: 6, title: 'Monitoring & Reporting', description: 'We optimize performance continuously and send transparent ROI reports.' }
      ]
    },
    testimonials: {
      title: [
        { text: "B2C Businesses Winning ", gradient: false },
        { text: "with Google Ads", gradient: true, gradientClass: "from-yellow-500 via-orange-500 to-red-500" }
      ],
      description: 'From local retail shops to gyms and restaurants, Digi Aerotech has helped B2C businesses generate consistent leads and customers with Google Ads.',
      testimonials: [
        {
          id: '1',
          message: 'Our gym saw a 4x increase in new member sign-ups within 2 months of starting Google Ads with Digi Aerotech.',
          highlight: '4x increase in sign-ups',
          stars: 5,
          name: 'Vikram Singh',
          designation: 'Owner',
          company: 'ProFit Gym'
        },
        {
          id: '2',
          message: 'Earlier, we wasted ad budget with no results. Now 70% of our new restaurant bookings come via Google Ads!',
          highlight: '70% bookings via Ads',
          stars: 5,
          name: 'Ananya Gupta',
          designation: 'Manager',
          company: 'Spice & Soul Restaurant'
        }
      ]
    },
    cta: {
      title: 'Ready to Drive Instant Sales with Google Ads?',
      subtitle: 'CLICKS → CALLS → CUSTOMERS',
      description: 'Stop wasting money on ads that don’t convert. Let Digi Aerotech run high-performance Google Ads campaigns for your B2C brand.',
    }
  }
};
