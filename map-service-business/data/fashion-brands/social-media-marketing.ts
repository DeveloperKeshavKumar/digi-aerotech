import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconTrendingUp,
  IconUsers,
  IconStar,
  IconShieldCheck,
  IconRocket,
  IconShoppingBag,
  IconCamera,
  IconVideo,
  IconGlobe,
  IconArrowRight,
  IconPhone,
  IconChartArcs3
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'social-media-marketing',
  business: 'fashion-brands',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant1',
    process: 'variant3',
  },
  data: {
    slug: 'social-media-marketing-fashion-brands',
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
            { text: "Challenges Fashion Brands Face on ", gradient: false },
            { text: "Social Media in 2025", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Fashion brands often struggle to get visibility, engagement, and conversions from social media campaigns.",
          painPoints: [
            "Low engagement on Instagram, TikTok, and Pinterest",
            "Difficulty building brand authority on social platforms",
            "Inconsistent posting and campaign strategy",
            "Poor ad targeting and low ROI from paid campaigns",
            "Limited influencer collaborations and UGC content"
          ],
          solutionPoints: [
            "Data-driven content calendars and posting strategy",
            "Engaging visuals, reels, and carousel content",
            "Targeted ad campaigns across social platforms",
            "Influencer marketing & collaborations to expand reach",
            "Community building and user-generated content campaigns"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Boost Your Social Media Presence"
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
              question: 'Can social media increase fashion brand sales?',
              answer: 'Yes. Engaging campaigns drive traffic to your store, increasing conversions and sales.',
              icon: React.createElement(IconShoppingBag, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Which platforms are best for fashion brands?',
              answer: 'Instagram, TikTok, Pinterest, and Facebook are highly effective for fashion visibility and engagement.',
              icon: React.createElement(IconCamera, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Do you handle influencer marketing?',
              answer: 'Absolutely. We connect brands with relevant influencers for collaborations and content creation.',
              icon: React.createElement(IconUsers, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'How do you improve engagement rates?',
              answer: 'Through targeted posts, interactive content, reels, stories, and contests that resonate with your audience.',
              icon: React.createElement(IconVideo, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Can social media ads provide a positive ROI?',
              answer: 'Yes. Our data-driven campaigns optimize targeting, creatives, and budgets for maximum ROI.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'Do you provide analytics and reports?',
              answer: 'Yes. You’ll get detailed performance reports and actionable insights to improve campaigns.',
              icon: React.createElement(IconChartArcs3, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Want ",
      headlineKeywords: [
        "Massive Social Media Reach?",
        "High Engagement Rates?",
        "Influencer Collaborations?",
        "Boost Online Sales?",
        "Top Social Presence for Fashion Brands?"
      ],
      brandLine: [
        { text: "📱 Social Media Marketing for Fashion Brands That Convert", gradient: false }
      ],
      subheadline: "We help fashion brands get noticed, increase engagement, and convert followers into loyal customers through strategic social media campaigns.",
      ctaButtons: [
        { icon: React.createElement(IconPhone, { size: 28 }), text: "Book Free Social Media Audit", link: "/contact" },
        { icon: React.createElement(IconArrowRight, { size: 28 }), text: "Start Social Growth Today", link: "/contact", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "500,000+ Followers Reached",
          description: "Across campaigns and platforms"
        },
        {
          icon: React.createElement(IconRocket, { size: 32 }),
          title: "200+ Fashion Brands",
          description: "Scaled through social media"
        },
        {
          icon: React.createElement(IconStar, { size: 32 }),
          title: "4.9/5 Client Satisfaction",
          description: "Brands love our campaigns"
        },
        {
          icon: React.createElement(IconGlobe, { size: 32 }),
          title: "Global Audience Reach",
          description: "Campaigns targeting international fashion enthusiasts"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the ", gradient: false },
        { text: "#1 Social Media Partner for Fashion Brands", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconCamera, { size: 28 }),
          title: "Creative Visual Storytelling",
          description: "Content that captures attention and drives engagement."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Performance-Focused Campaigns",
          description: "Every campaign optimized for clicks, conversions, and ROI."
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Data-Driven Strategy",
          description: "Analytics guide every step of your social campaigns."
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "Influencer & UGC Integration",
          description: "Boost credibility and reach through collaborations and user-generated content."
        },
        {
          icon: React.createElement(IconStar, { size: 28 }),
          title: "Community Engagement",
          description: "We create loyal communities that advocate for your brand."
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 28 }),
          title: "Transparent Reporting",
          description: "Track all metrics and ROI with clear, actionable reports."
        }
      ],
      cta: {
        text: "Grow Your Fashion Brand Socially",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Social Media Marketing Process for Fashion Brands',
      subtitle: 'STEP-BY-STEP SOCIAL GROWTH',
      className: 'border-t border-border dark:border-gray-700',
      description: 'From strategy to execution, our social media process ensures engagement, brand growth, and measurable ROI.',
      steps: [
        {
          id: 1,
          title: 'Social Media Audit',
          description: 'Evaluate current performance, brand presence, and competitor strategies.'
        },
        {
          id: 2,
          title: 'Content Strategy Planning',
          description: 'Design engaging, platform-specific content calendars for consistent posting.'
        },
        {
          id: 3,
          title: 'Visual Content Creation',
          description: 'Design photos, videos, reels, and graphics that align with brand identity.'
        },
        {
          id: 4,
          title: 'Paid Social Campaigns',
          description: 'Run targeted ads on Instagram, TikTok, Facebook, and Pinterest for maximum reach.'
        },
        {
          id: 5,
          title: 'Community Engagement',
          description: 'Interact with followers, respond to messages, and build a loyal audience.'
        },
        {
          id: 6,
          title: 'Analytics & Optimization',
          description: 'Track performance, A/B test campaigns, and refine strategy for continual improvement.'
        }
      ]
    },
    cta: {
      title: 'Ready to Amplify Your Fashion Brand on Social Media?',
      subtitle: 'Engage, Convert, and Grow',
      description: 'Book a free social media consultation and let Digi Aerotech turn your fashion brand into a social sensation.'
    }
  }
};
