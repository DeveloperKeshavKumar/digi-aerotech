import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconBrandFacebook, IconBrandInstagram, IconVideo, IconWorld, IconUsers,
  IconTarget, IconPhoto, IconPhoneCall, IconChartHistogram, IconHeart,
  IconTrendingUp, IconArrowRight, IconStar, IconCalendarEvent, IconRocket
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'meta-ads',
  business: 'travel-tourism',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant1',
    process: 'variant3',
    testimonials: 'variant1'
  },
  data: {
    slug: 'meta-ads-travel-tourism',
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
            { text: "Meta Ads Challenges for ", gradient: false },
            { text: "Travel & Tourism Businesses", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Tour operators, travel agencies, and destination brands struggle to maximize ROI from Facebook & Instagram ads without expert strategies.",
          painPoints: [
            "Wasted ad spend on untargeted campaigns",
            "Low engagement on travel ads & reels",
            "Struggling to retarget past inquiries",
            "Seasonal campaigns failing to convert",
            "Difficulty scaling ads globally"
          ],
          solutionPoints: [
            "Hyper-targeted campaigns for travelers & tourists",
            "Visually stunning ads, reels & carousels",
            "Retargeting campaigns for abandoned leads",
            "Seasonal & festival-based ad funnels",
            "Scalable campaigns for local & international reach"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Boost Your Travel Bookings"
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
              question: 'How do Meta Ads help travel agencies?',
              answer: 'Meta Ads attract travelers through highly targeted Facebook & Instagram campaigns with visuals, reels, and booking-focused creatives.',
              icon: React.createElement(IconBrandFacebook, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Can you run international campaigns?',
              answer: 'Yes. We run global Meta Ads campaigns targeting tourists from specific countries, interests, and demographics.',
              icon: React.createElement(IconWorld, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Do reels and videos work better than static ads?',
              answer: 'Absolutely. Reels, videos, and carousels capture attention faster and drive more engagement compared to static ads.',
              icon: React.createElement(IconVideo, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'How do you improve ad conversions?',
              answer: 'We build retargeting funnels, optimize creatives, and design ad journeys that take travelers from interest to booking.',
              icon: React.createElement(IconTarget, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'What’s the ROI timeline for Meta Ads?',
              answer: 'Agencies usually start seeing inquiries within 1–2 weeks, with long-term growth scaling month by month.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'Do you handle seasonal campaigns?',
              answer: 'Yes. We create custom seasonal ad campaigns for holidays, festivals, and vacation peaks to maximize bookings.',
              icon: React.createElement(IconCalendarEvent, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Want ",
      headlineKeywords: [
        "More Travel Bookings?",
        "Tourists from Meta Ads?",
        "Higher ROI Campaigns?",
        "Seasonal Ad Conversions?",
        "360° Meta Ads for Travel Brands?"
      ],
      brandLine: [
        { text: "📲 Scale Your Travel Business with High-Impact Facebook & Instagram Ads", gradient: false }
      ],
      subheadline: "We help travel agencies, tour operators, and tourism brands drive bookings through data-driven Meta Ads campaigns designed to engage and convert.",
      ctaButtons: [
        { icon: React.createElement(IconRocket, { size: 28 }), text: "Launch Meta Ads Campaign", link: "/contact" },
        { icon: React.createElement(IconPhoneCall, { size: 28 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "70,000+ Travelers Reached",
          description: "Through Facebook & Instagram Ads"
        },
        {
          icon: React.createElement(IconHeart, { size: 32 }),
          title: "2,500+ Travel Leads",
          description: "Generated via retargeting funnels"
        },
        {
          icon: React.createElement(IconPhoto, { size: 32 }),
          title: "500+ Campaign Creatives",
          description: "Engaging ads, reels & videos"
        },
        {
          icon: React.createElement(IconStar, { size: 32 }),
          title: "4.9/5 ROI Rating",
          description: "Proven ad campaign performance"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the ", gradient: false },
        { text: "#1 Meta Ads Partner for Travel Brands", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconBrandInstagram, { size: 28 }),
          title: "Instagram Reels & Story Ads",
          description: "We create viral reels & story ads that spark traveler curiosity."
        },
        {
          icon: React.createElement(IconBrandFacebook, { size: 28 }),
          title: "Facebook Ad Funnels",
          description: "Conversion-focused funnels that turn travelers into bookings."
        },
        {
          icon: React.createElement(IconVideo, { size: 28 }),
          title: "High-Impact Video Ads",
          description: "Stunning video ads that showcase destinations & packages."
        },
        {
          icon: React.createElement(IconTarget, { size: 28 }),
          title: "Precision Targeting",
          description: "Reach exact traveler segments with data-driven targeting."
        },
        {
          icon: React.createElement(IconChartHistogram, { size: 28 }),
          title: "ROI-Driven Campaigns",
          description: "We optimize every campaign to deliver maximum ROI."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Scalable Ad Strategies",
          description: "From small agencies to global brands — we scale campaigns seamlessly."
        }
      ],
      cta: {
        text: "Start Getting More Bookings Today",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Meta Ads Process for Travel & Tourism',
      subtitle: 'STEP-BY-STEP AD GROWTH SYSTEM',
      className: 'border-t border-border dark:border-gray-700',
      description: 'From creative storytelling to retargeting funnels, our process ensures travelers engage, trust, and book through Meta Ads.',
      steps: [
        { id: 1, title: 'Audience Research', description: 'Identify ideal traveler demographics & behaviors.' },
        { id: 2, title: 'Ad Creative Development', description: 'Design engaging reels, videos & carousel ads.' },
        { id: 3, title: 'Campaign Setup & Targeting', description: 'Precise targeting for local & global audiences.' },
        { id: 4, title: 'Retargeting Funnels', description: 'Recover abandoned inquiries & convert warm leads.' },
        { id: 5, title: 'Seasonal Campaigns', description: 'Custom ad strategies for holidays, festivals & events.' },
        { id: 6, title: 'Scaling & Optimization', description: 'Monitor results & scale winning campaigns for maximum ROI.' }
      ]
    },
    testimonials: {
      title: [
        { text: "Travel Brands Who ", gradient: false },
        { text: "Scaled with Meta Ads", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      description: 'See how Digi Aerotech helped travel agencies & tourism brands generate bookings and global reach through Meta Ads.',
      testimonials: [
        {
          id: '1',
          message: 'Digi Aerotech’s Instagram reels & retargeting ads doubled our inquiries in just 3 weeks.',
          highlight: 'doubled our inquiries',
          stars: 5,
          name: 'Pooja Nair',
          designation: 'Founder',
          company: 'OceanVista Holidays'
        },
        {
          id: '2',
          message: 'Our Facebook ads went from random clicks to a 5X ROI, thanks to their precise targeting and seasonal campaigns.',
          highlight: '5X ROI',
          stars: 5,
          name: 'Rahul Verma',
          designation: 'CEO',
          company: 'AdventureQuest Tours'
        }
      ]
    },
    cta: {
      title: 'Ready to Maximize Bookings with Meta Ads?',
      subtitle: 'TURN VIEWS INTO BOOKINGS',
      description: 'Book a free Meta Ads strategy session with Digi Aerotech and learn how to turn Facebook & Instagram into your biggest travel booking engines.'
    }
  }
};
