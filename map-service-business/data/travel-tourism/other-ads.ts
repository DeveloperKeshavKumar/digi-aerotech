import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconBrandTwitter, IconBrandSnapchat, IconBrandYoutube, IconBrandTiktok, IconBrandLinkedin,
  IconChartBar, IconVideo, IconUserStar, IconTarget, IconHeart, IconTrendingUp,
  IconRocket, IconShieldCheck, IconMap, IconUsers, IconArrowRight, IconPhoneCall
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'other-ads',
  business: 'travel-tourism',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant3',
    process: 'variant1',
  },
  data: {
    slug: 'other-ads-travel-tourism',
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
            { text: "Ad Challenges Travel Brands Face on ", gradient: false },
            { text: "Twitter, TikTok, YouTube & More", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Without creative and platform-specific ads, travel brands miss millions of potential travelers scrolling through social media daily.",
          painPoints: [
            "Low engagement on ads due to generic creatives",
            "Struggling to keep up with short-form video trends",
            "Difficulty building trust with younger audiences",
            "Poor targeting on niche platforms like Snapchat or TikTok",
            "Limited professional branding on LinkedIn"
          ],
          solutionPoints: [
            "Tailored ad creatives for each platform",
            "Short-form TikTok & Snapchat videos with viral hooks",
            "Influencer collabs for authentic audience trust",
            "Precise targeting for travel niches across all platforms",
            "Professional LinkedIn ad strategies for B2B travel"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Supercharge Your Ads Today"
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
              question: 'Do you run ads on TikTok and Snapchat for travel?',
              answer: 'Yes. We create engaging short-form travel videos that inspire instant wanderlust and drive bookings.',
              icon: React.createElement(IconBrandTiktok, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Can you run YouTube video ads for tour promotions?',
              answer: 'Absolutely. We craft cinematic YouTube ads showcasing destinations, packages, and brand stories.',
              icon: React.createElement(IconBrandYoutube, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'How effective are Twitter ads for travel agencies?',
              answer: 'Twitter ads work well for trending campaigns, real-time offers, and engaging travel communities.',
              icon: React.createElement(IconBrandTwitter, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Do you also handle LinkedIn travel ads?',
              answer: 'Yes. LinkedIn is excellent for B2B travel businesses, corporate bookings, and partnerships.',
              icon: React.createElement(IconBrandLinkedin, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'What’s the advantage of Snapchat ads for tourism?',
              answer: 'Snapchat ads reach younger audiences with interactive filters, AR experiences, and stories.',
              icon: React.createElement(IconBrandSnapchat, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'How soon can we see results from these ads?',
              answer: 'Platforms like TikTok & Snapchat bring instant traffic, while YouTube & LinkedIn build long-term brand authority.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Looking for ",
      headlineKeywords: [
        "TikTok Travel Ads?",
        "YouTube Destination Campaigns?",
        "Viral Snapchat Stories?",
        "LinkedIn Branding?",
        "Multi-Platform Travel Ads?"
      ],
      brandLine: [
        { text: "🎥 Unlock the Power of TikTok, YouTube, Twitter & More for Travel Growth", gradient: false }
      ],
      subheadline: "We run high-converting ad campaigns across TikTok, Snapchat, YouTube, Twitter & LinkedIn to bring your travel brand closer to global audiences.",
      ctaButtons: [
        { icon: React.createElement(IconRocket, { size: 28 }), text: "Launch Multi-Platform Ads", link: "/contact" },
        { icon: React.createElement(IconPhoneCall, { size: 28 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
      ],
      stats: [
        { icon: React.createElement(IconUsers, { size: 32 }), title: "5M+ Travelers Reached", description: "Across TikTok, YouTube & more" },
        { icon: React.createElement(IconVideo, { size: 32 }), title: "2,000+ Ad Videos", description: "Created for travel brands" },
        { icon: React.createElement(IconHeart, { size: 32 }), title: "4.9/5 Ad Engagement", description: "Loved by global audiences" },
        { icon: React.createElement(IconChartBar, { size: 32 }), title: "7X ROI", description: "On multi-platform campaigns" }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the ", gradient: false },
        { text: "#1 Ad Partner for Travel Brands on Social Platforms", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        { icon: React.createElement(IconBrandTiktok, { size: 28 }), title: "Viral TikTok Ads", description: "Engaging content designed to trend & convert." },
        { icon: React.createElement(IconBrandYoutube, { size: 28 }), title: "YouTube Travel Films", description: "Cinematic ads that inspire travel decisions." },
        { icon: React.createElement(IconBrandSnapchat, { size: 28 }), title: "Snapchat AR & Filters", description: "Interactive ads targeting younger travelers." },
        { icon: React.createElement(IconBrandTwitter, { size: 28 }), title: "Twitter Trend Campaigns", description: "Real-time promotions & trending offers." },
        { icon: React.createElement(IconBrandLinkedin, { size: 28 }), title: "Professional LinkedIn Ads", description: "Corporate & B2B travel marketing expertise." },
        { icon: React.createElement(IconUserStar, { size: 28 }), title: "Influencer Partnerships", description: "Collabs with travel creators for authentic reach." }
      ],
      cta: {
        text: "Run Multi-Platform Ads Now",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Process for Multi-Platform Travel Ads',
      subtitle: 'STEP-BY-STEP SOCIAL SUCCESS',
      className: 'border-t border-border dark:border-gray-700',
      description: 'From short-form TikTok ads to professional LinkedIn campaigns, our process ensures your travel brand shines across every platform.',
      steps: [
        { id: 1, title: 'Audience Research', description: 'Identify ideal travelers for each ad platform.' },
        { id: 2, title: 'Creative Strategy', description: 'Craft platform-specific ad concepts & scripts.' },
        { id: 3, title: 'Ad Production', description: 'Shoot, edit & design creatives for multiple channels.' },
        { id: 4, title: 'Campaign Launch', description: 'Run tailored ads across TikTok, YouTube, Twitter & more.' },
        { id: 5, title: 'Engagement & Optimization', description: 'Boost conversions with A/B testing & retargeting.' },
        { id: 6, title: 'Scaling Success', description: 'Scale winning campaigns across regions & platforms.' }
      ]
    },
    cta: {
      title: 'Ready to Go Viral with Multi-Platform Ads?',
      subtitle: 'TURN SCROLLS INTO BOOKINGS',
      description: 'Book a free consultation with Digi Aerotech and discover how TikTok, YouTube, Twitter, Snapchat & LinkedIn ads can transform your travel business.'
    }
  }
};
