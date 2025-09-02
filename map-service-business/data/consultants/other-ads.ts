import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
   IconSocial, IconUsers, IconTarget, IconArrowRight,
  IconVideo, IconBrandLinkedin, IconBrandTwitter, IconBrandYoutube,
  IconWorld, IconTrendingUp,
  IconAd
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'other-ads',
  business: 'teachers-consultants',
  variants: {
    hero: 'variant1',
    whyChooseUs: 'variant2',
    process: 'variant3',
  },
  data: {
    slug: 'other-ads-teachers-consultants',
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
            { text: "Why Google & Meta Ads Alone ", gradient: false },
            { text: "Aren’t Enough", gradient: true, gradientClass: "from-blue-500 via-cyan-500 to-green-500" }
          ],
          subheadline: "Consultants and teachers often miss opportunities by only relying on Google or Meta Ads.",
          painPoints: [
            "Limited reach to niche audiences on just Google & Facebook",
            "Difficulty targeting professionals and high-value clients",
            "High ad competition with increasing CPCs",
            "No visibility on platforms like YouTube or LinkedIn",
            "Missed chance to build authority with native ads",
            "Lack of omnichannel presence where students/clients spend time"
          ],
          solutionPoints: [
            "LinkedIn Ads to target decision-makers & professionals",
            "YouTube Ads for visual storytelling & learning promotion",
            "Twitter/X Ads for thought leadership in real-time",
            "Quora Ads to capture high-intent learners & clients",
            "Native & Display Ads to build authority & trust",
            "Multi-channel strategy to increase visibility & ROI"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Expand My Ads Beyond Google & Meta"
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
              question: 'Which ad platforms work best for consultants?',
              answer: 'LinkedIn Ads are highly effective for B2B consultants, while YouTube and Quora ads work for both consultants and teachers.',
              icon: React.createElement(IconBrandLinkedin, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Why should teachers run ads beyond Facebook & Google?',
              answer: 'Platforms like YouTube and Quora let teachers reach students where they actively search for learning resources.',
              icon: React.createElement(IconBrandYoutube, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Are “other ads” more expensive?',
              answer: 'Not necessarily. With proper targeting, LinkedIn or YouTube ads can deliver higher-quality leads at better ROI.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Can we combine these ads with Google & Meta?',
              answer: 'Yes. We create omnichannel campaigns where Google, Meta, and other ads complement each other for maximum impact.',
              icon: React.createElement(IconWorld, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Do you provide full ad management?',
              answer: 'Yes. From strategy, copy, creatives, targeting, to optimization—we handle everything end-to-end.',
              icon: React.createElement(IconAd, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'Will this help in authority building?',
              answer: 'Absolutely. Platforms like Quora, LinkedIn, and native ads are designed to establish thought leadership & trust.',
              icon: React.createElement(IconSocial, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Reach Beyond Google & Meta Ads,",
      headlineKeywords: [
        "Expand Visibility",
        "Reach Professionals",
        "Target Niche Audiences",
        "Maximize ROI",
        "Be Omnipresent"
      ],
      brandLine: [
        { text: "🎯 Other Ads for Teachers & Consultants", gradient: false }
      ],
      subheadline: "At Digi Aerotech, we help teachers & consultants scale with LinkedIn Ads, YouTube Ads, Quora Ads, Display & Native Ads—so you never miss the right audience.",
      ctaButtons: [
        { icon: React.createElement(IconTarget, { size: 28 }), text: "Start Multi-Channel Ads", link: "/contact" },
        { icon: React.createElement(IconUsers, { size: 28 }), text: "See Ad Platforms", link: "/platforms", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconBrandLinkedin, { size: 32 }),
          title: "LinkedIn Ads",
          description: "Target professionals, businesses, & decision-makers"
        },
        {
          icon: React.createElement(IconBrandYoutube, { size: 32 }),
          title: "YouTube Ads",
          description: "Showcase expertise with engaging video campaigns"
        },
        {
          icon: React.createElement(IconBrandTwitter, { size: 32 }),
          title: "Twitter/X Ads",
          description: "Drive real-time engagement & thought leadership"
        },
        {
          icon: React.createElement(IconWorld, { size: 32 }),
          title: "Quora & Native Ads",
          description: "Capture high-intent learners & build authority"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the ", gradient: false },
        { text: "Best Partner for Multi-Channel Ads", gradient: true, gradientClass: "from-blue-500 via-cyan-500 to-green-500" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconTarget, { size: 28 }),
          title: "Multi-Platform Expertise",
          description: "Specialized in LinkedIn, YouTube, Quora, Native, and Display Ads."
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "Niche Targeting",
          description: "We reach professionals, students, and high-value clients precisely."
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "ROI-Focused Approach",
          description: "Every campaign is designed to generate measurable results."
        },
        {
          icon: React.createElement(IconVideo, { size: 28 }),
          title: "Creative Storytelling",
          description: "Engaging visuals, video, and ad copy tailored to your niche."
        },
        {
          icon: React.createElement(IconSocial, { size: 28 }),
          title: "Authority Building",
          description: "Establish yourself as a thought leader in your domain."
        },
        {
          icon: React.createElement(IconWorld, { size: 28 }),
          title: "Omnichannel Presence",
          description: "Stay visible across every platform your audience uses."
        }
      ],
      cta: {
        text: "Launch My Multi-Channel Ads",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Multi-Channel Ad Process',
      subtitle: 'BEYOND GOOGLE & META',
      description: 'We follow a streamlined approach to maximize your ROI with other ads.',
      steps: [
        { id: 1, title: 'Discovery & Audit', description: 'Understand your audience & identify the best platforms.' },
        { id: 2, title: 'Platform Strategy', description: 'Choose LinkedIn, YouTube, Quora, or native ads based on goals.' },
        { id: 3, title: 'Creative Development', description: 'Craft high-converting ad creatives & copy.' },
        { id: 4, title: 'Targeting & Setup', description: 'Implement precise audience targeting across platforms.' },
        { id: 5, title: 'Campaign Optimization', description: 'Continuously optimize to reduce CPC & boost conversions.' },
        { id: 6, title: 'Reporting & Scaling', description: 'Transparent insights & scaling of winning campaigns.' }
      ]
    },
    cta: {
      title: 'Ready to Expand Beyond Google & Meta?',
      subtitle: 'MULTI-CHANNEL ADS FOR TEACHERS & CONSULTANTS',
      description: 'Book a free consultation and discover how LinkedIn, YouTube, Quora, and other ads can bring high-quality leads & visibility.',
    }
  }
};
