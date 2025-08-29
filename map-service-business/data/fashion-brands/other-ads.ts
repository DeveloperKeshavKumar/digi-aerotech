import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconBrandTwitter,
  IconBrandTiktok,
  IconBrandYoutube,
  IconBrandLinkedin,
  IconTrendingUp,
  IconUsers,
  IconShoppingBag,
  IconShieldCheck,
  IconRocket,
  IconStar,
  IconArrowRight,
  IconPhone,
  IconGlobe,
  IconChartPie
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'other-ads',
  business: 'fashion-brands',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant1',
    process: 'variant3',
    testimonials: 'variant2'
  },
  data: {
    slug: 'other-ads-fashion-brands',
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
            { text: "Challenges Running Social Ads on ", gradient: false },
            { text: "Twitter, TikTok, YouTube & LinkedIn", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Fashion brands struggle to create impactful campaigns across multiple social platforms that convert.",
          painPoints: [
            "Difficulty creating visually engaging short-form videos",
            "Low click-through rates on paid ads",
            "Targeting the right fashion-savvy audience",
            "Budget management and ROI tracking",
            "Keeping up with trending challenges and formats"
          ],
          solutionPoints: [
            "Campaigns optimized for each platform (Twitter, TikTok, YouTube, LinkedIn)",
            "Creative, scroll-stopping ad creatives & video content",
            "Advanced targeting for fashion audiences & influencers",
            "Performance tracking & ROI-driven ad management",
            "Trend-responsive campaigns to maximize engagement"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Boost Your Fashion Ads Now"
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
              question: 'Which platforms should my fashion brand advertise on?',
              answer: 'We recommend using Twitter, TikTok, YouTube, and LinkedIn depending on your target audience and campaign goals.',
              icon: React.createElement(IconBrandTwitter, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Can you create short-form video content?',
              answer: 'Yes, we produce engaging, trend-responsive short videos for TikTok and YouTube Shorts.',
              icon: React.createElement(IconBrandTiktok, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Do you handle ad targeting and audience segmentation?',
              answer: 'Absolutely. We target fashion enthusiasts using advanced audience insights and platform-specific tools.',
              icon: React.createElement(IconChartPie, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Can you optimize ads for conversions?',
              answer: 'Yes. Every campaign is designed for maximum clicks, leads, and purchases.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Do you track performance and ROI?',
              answer: 'We provide detailed analytics dashboards and reports for every campaign.',
              icon: React.createElement(IconRocket, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'What if I have a small budget?',
              answer: 'We design highly efficient campaigns to maximize results even on limited budgets.',
              icon: React.createElement(IconShieldCheck, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Want ",
      headlineKeywords: [
        "High-Converting Fashion Ads?",
        "Engage Customers on TikTok & YouTube?",
        "Boost Clicks & Sales Quickly?",
        "Reach Trendy Audiences Effectively?",
        "Run Ads That Truly Convert?"
      ],
      brandLine: [
        { text: "🎯 Multi-Platform Ads for Fashion Brands that Deliver Results", gradient: false }
      ],
      subheadline: "We design and manage high-impact ad campaigns across Twitter, TikTok, YouTube, and LinkedIn to grow your fashion brand.",
      ctaButtons: [
        { icon: React.createElement(IconPhone, { size: 28 }), text: "Book Free Ad Strategy Call", link: "/contact" },
        { icon: React.createElement(IconArrowRight, { size: 28 }), text: "Start Your Ads Today", link: "/contact", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "100,000+ Engaged Users",
          description: "Reached with multi-platform campaigns"
        },
        {
          icon: React.createElement(IconShoppingBag, { size: 32 }),
          title: "150+ Fashion Brands",
          description: "Scaled with creative ads"
        },
        {
          icon: React.createElement(IconStar, { size: 32 }),
          title: "4.9/5 Client Satisfaction",
          description: "Brands love our ad campaigns"
        },
        {
          icon: React.createElement(IconGlobe, { size: 32 }),
          title: "Global Reach",
          description: "Campaigns across multiple countries"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the ", gradient: false },
        { text: "#1 Multi-Platform Ads Partner for Fashion Brands", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconBrandTwitter, { size: 28 }),
          title: "Twitter Ads Expertise",
          description: "Target fashion-savvy audiences effectively."
        },
        {
          icon: React.createElement(IconBrandTiktok, { size: 28 }),
          title: "TikTok Trends Mastery",
          description: "Create engaging short-form videos that go viral."
        },
        {
          icon: React.createElement(IconBrandYoutube, { size: 28 }),
          title: "YouTube Ad Excellence",
          description: "Drive awareness and conversions with video ads."
        },
        {
          icon: React.createElement(IconBrandLinkedin, { size: 28 }),
          title: "LinkedIn Fashion Targeting",
          description: "Reach B2B buyers, wholesalers, and partners."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "ROI-Driven Campaigns",
          description: "Optimize ad spend for maximum conversions."
        },
        {
          icon: React.createElement(IconStar, { size: 28 }),
          title: "Trusted by Fashion Brands",
          description: "Delivered hundreds of successful campaigns."
        }
      ],
      cta: {
        text: "Launch Your Fashion Ads Now",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Multi-Platform Ad Process for Fashion Brands',
      subtitle: 'STEP-BY-STEP AD CAMPAIGN EXECUTION',
      className: 'border-t border-border dark:border-gray-700',
      description: 'From strategy to execution, we design ads across multiple platforms that boost engagement, clicks, and sales.',
      steps: [
        {
          id: 1,
          title: 'Audience Research',
          description: 'Identify fashion-savvy users, demographics, and interests on each platform.'
        },
        {
          id: 2,
          title: 'Creative Concept',
          description: 'Design scroll-stopping ad creatives and video content.'
        },
        {
          id: 3,
          title: 'Platform-Specific Campaigns',
          description: 'Customize ads for Twitter, TikTok, YouTube, and LinkedIn audiences.'
        },
        {
          id: 4,
          title: 'Targeting & Optimization',
          description: 'Advanced targeting and bid strategies to maximize ROI.'
        },
        {
          id: 5,
          title: 'Performance Monitoring',
          description: 'Track metrics and optimize campaigns for best results.'
        },
        {
          id: 6,
          title: 'Reporting & Insights',
          description: 'Provide detailed analytics and recommendations for future campaigns.'
        }
      ]
    },
    testimonials: {
      title: [
        { text: "Fashion Brands Who ", gradient: false },
        { text: "Scaled with Multi-Platform Ads", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      description: 'See how our campaigns on Twitter, TikTok, YouTube, and LinkedIn helped fashion brands increase visibility, engagement, and sales.',
      testimonials: [
        {
          id: '1',
          message: 'Our sales skyrocketed after running TikTok and YouTube campaigns. Truly ROI-driven!',
          highlight: 'sales skyrocketed',
          stars: 5,
          name: 'Riya Kapoor',
          designation: 'Founder',
          company: 'Chic Trends'
        },
        {
          id: '2',
          message: 'Twitter and LinkedIn ads brought us high-quality leads and boosted brand awareness.',
          highlight: 'high-quality leads',
          stars: 5,
          name: 'Karan Mehta',
          designation: 'CEO',
          company: 'Urban Vogue'
        }
      ]
    },
    cta: {
      title: 'Ready to Launch Your Multi-Platform Fashion Ads?',
      subtitle: 'Engage Customers, Increase Clicks, and Boost Sales',
      description: 'Book a free consultation and let Digi Aerotech design high-converting ads for your fashion brand.'
    }
  }
};
