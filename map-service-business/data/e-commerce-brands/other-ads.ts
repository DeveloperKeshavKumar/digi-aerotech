import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import { 
  IconBrandYoutube, IconBrandTiktok, IconBrandSnapchat, IconBrandLinkedin, IconUsers, IconShoppingCart, IconRocket, IconStar, IconArrowRight, IconDeviceMobile
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'other-ads',
  business: 'ecomm-brands',
  variants: {
    hero: 'variant1',
    whyChooseUs: 'variant3',
    process: 'variant2',
  },
  data: {
    slug: 'other-ads-ecomm-brands',
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
            { text: "Challenges E-commerce Brands Face with ", gradient: false },
            { text: "Other Ad Platforms", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Platforms like YouTube, TikTok, Snapchat, and LinkedIn are powerful but complex. Without proper targeting, creatives, and strategy, brands struggle to get ROI.",
          painPoints: [
            "Wasted ad spend due to poor targeting",
            "Low engagement on social media platforms",
            "Difficulty creating platform-specific content",
            "Tracking conversions and ROAS is challenging",
            "Scaling campaigns without losing ROI"
          ],
          solutionPoints: [
            "Tailored ad strategies for each platform (YT, TikTok, Snapchat, LinkedIn)",
            "Creative, high-performing visuals & video ads",
            "Precision audience targeting to maximize engagement",
            "Real-time analytics & performance tracking",
            "Optimized scaling techniques for sustained ROI"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Maximize ROI Across Multiple Platforms"
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
              question: 'Which platforms should I advertise on for my e-commerce store?',
              answer: 'We evaluate your audience and recommend the best platforms, such as YouTube, TikTok, Snapchat, or LinkedIn, for maximum impact.',
              icon: React.createElement(IconBrandYoutube, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Can you handle creative content for each platform?',
              answer: 'Yes. We design videos, reels, and visuals tailored to each platform’s audience and ad format.',
              icon: React.createElement(IconBrandTiktok, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'How do you track conversions on multiple ad platforms?',
              answer: 'We integrate advanced tracking tools to measure ROAS, clicks, engagement, and conversions across all platforms.',
              icon: React.createElement(IconBrandSnapchat, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Can you help scale campaigns without losing ROI?',
              answer: 'Absolutely. We implement optimized scaling strategies, adjust targeting, creatives, and bids to maintain profitability.',
              icon: React.createElement(IconBrandLinkedin, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Do you provide reports and insights regularly?',
              answer: 'Yes. We provide detailed dashboards and performance reports, so you can see exactly how your ads are performing.',
              icon: React.createElement(IconUsers, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'Can these ads drive app installs for my e-commerce store?',
              answer: 'Yes, we create campaigns specifically optimized for mobile app installs and engagement.',
              icon: React.createElement(IconDeviceMobile, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Want ",
      headlineKeywords: [
        "High ROI from TikTok & Snapchat?",
        "Engaging Ads on YouTube & LinkedIn?",
        "Drive Sales & App Installs?",
        "Maximize Multi-Platform Ads?",
        "360° Advertising Beyond Google & Meta?"
      ],
      brandLine: [
        { text: "🚀 Boost Your E-commerce Sales with Expert Multi-Platform Ads", gradient: false }
      ],
      subheadline: "We help e-commerce brands run high-converting campaigns across YouTube, TikTok, Snapchat, LinkedIn, and other ad networks.",
      ctaButtons: [
        { icon: React.createElement(IconRocket, { size: 28 }), text: "Book Free Ad Strategy Call", link: "/contact" },
        { icon: React.createElement(IconShoppingCart, { size: 28 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
      ],
      stats: [
        { icon: React.createElement(IconUsers, { size: 32 }), title: "100,000+ Ad Impressions", description: "Generated across platforms" },
        { icon: React.createElement(IconRocket, { size: 32 }), title: "10X ROI", description: "Optimized multi-platform campaigns" },
        { icon: React.createElement(IconStar, { size: 32 }), title: "500+ Conversions", description: "Driven through strategic ads" },
        { icon: React.createElement(IconDeviceMobile, { size: 32 }), title: "App Installs Boosted", description: "Across Android & iOS devices" }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the ", gradient: false },
        { text: "Top Choice for Multi-Platform Ads", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        { icon: React.createElement(IconBrandYoutube, { size: 28 }), title: "Platform Expertise", description: "We understand unique nuances of YouTube, TikTok, Snapchat & LinkedIn to craft ads that convert." },
        { icon: React.createElement(IconBrandTiktok, { size: 28 }), title: "Creative Excellence", description: "Our team produces high-quality, engaging video and visual content to grab attention instantly." },
        { icon: React.createElement(IconBrandSnapchat, { size: 28 }), title: "Audience Precision", description: "Target the right audience with advanced demographic, interest, and behavioral targeting for maximum ROI." },
        { icon: React.createElement(IconBrandLinkedin, { size: 28 }), title: "Performance Tracking", description: "Detailed analytics and reports help you make data-driven decisions and optimize campaigns continually." },
        { icon: React.createElement(IconRocket, { size: 28 }), title: "ROI-Focused Strategy", description: "Every ad, creative, and campaign is optimized to deliver measurable ROI and conversions." },
        { icon: React.createElement(IconStar, { size: 28 }), title: "Scalable Campaigns", description: "We design strategies that can grow with your business and expand across multiple platforms efficiently." }
      ],
      cta: {
        text: "Start Multi-Platform Ads Today",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Multi-Platform Ads Process for E-commerce',
      subtitle: 'STEP-BY-STEP AD STRATEGY',
      className: 'border-t border-border dark:border-gray-700',
      description: 'From research to scaling, our process ensures ads perform efficiently across all platforms while maximizing ROI and engagement.',
      steps: [
        { id: 1, title: 'Market & Platform Research', description: 'Analyze your target audience, competitors, and which platforms provide the highest ROI for your e-commerce niche.' },
        { id: 2, title: 'Ad Strategy Planning', description: 'Define campaign objectives, ad formats, budgets, and KPIs tailored for each platform.' },
        { id: 3, title: 'Creative Design & Production', description: 'Develop engaging visuals, short videos, and reels optimized for TikTok, Snapchat, YouTube, and LinkedIn.' },
        { id: 4, title: 'Audience Targeting & Campaign Setup', description: 'Implement precise targeting with demographic, interest, lookalike, and retargeting strategies to reach the ideal customers.' },
        { id: 5, title: 'Monitoring & Optimization', description: 'Track performance in real-time, A/B test creatives, adjust bids, and optimize campaigns for the best ROI.' },
        { id: 6, title: 'Scaling & Reporting', description: 'Scale successful campaigns, expand to new audiences, and provide detailed performance reports to keep stakeholders informed.' }
      ]
    },
    cta: {
      title: 'Ready to Run Multi-Platform Ads That Convert?',
      subtitle: 'Drive Sales, Engagement, and App Installs Across Platforms',
      description: 'Book a free consultation with Digi Aerotech and get a strategic roadmap for YouTube, TikTok, Snapchat, LinkedIn, and more.'
    }
  }
};
