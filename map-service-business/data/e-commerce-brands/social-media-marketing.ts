import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconTrendingUp, IconRocket, IconShieldCheck, IconUsers, IconStar,
  IconStack, IconArrowRight, IconShoppingCart, IconVideo, IconMessageCircle,
  IconHeart, IconShare2
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'social-media-marketing',
  business: 'ecommerce-brands',
  variants: {
    hero: 'variant1',
    whyChooseUs: 'variant2',
    process: 'variant3',
  },
  data: {
    slug: 'social-media-marketing-ecommerce-brands',
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
            { text: "E-commerce Brands Face ", gradient: false },
            { text: "Social Media Challenges", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Managing social media for an e-commerce store can be overwhelming. Without the right strategy, posts often fail to engage or convert audiences.",
          painPoints: [
            "Low engagement on posts and campaigns",
            "Inconsistent branding across platforms",
            "Difficulty targeting high-intent buyers",
            "Limited knowledge of platform algorithms",
            "Struggling to turn followers into customers"
          ],
          solutionPoints: [
            "Targeted campaigns to reach the right audience",
            "Consistent branding and creative visuals",
            "Conversion-focused content strategy",
            "Platform-optimized posts and ads",
            "Social proof and influencer partnerships"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Boost Your Social Media Sales"
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
              question: 'How can social media marketing increase my e-commerce sales?',
              answer: 'We create campaigns tailored to your products, target high-intent buyers, and convert followers into paying customers.',
              icon: React.createElement(IconShoppingCart, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Which social media platforms should my store focus on?',
              answer: 'We analyze your target audience and recommend platforms like Instagram, Facebook, TikTok, or Pinterest to maximize reach and engagement.',
              icon: React.createElement(IconVideo, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Can you manage ad campaigns as well as organic posts?',
              answer: 'Yes. We handle both paid and organic strategies to increase brand visibility, engagement, and sales simultaneously.',
              icon: React.createElement(IconMessageCircle, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'How do you increase engagement and follower growth?',
              answer: 'By creating platform-optimized content, interactive posts, contests, and collaborations with influencers that resonate with your audience.',
              icon: React.createElement(IconHeart, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Do you track ROI from social media campaigns?',
              answer: 'Absolutely. We use analytics tools to monitor engagement, clicks, conversions, and sales, optimizing campaigns for maximum ROI.',
              icon: React.createElement(IconShare2, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'Is your service scalable for small and large stores?',
              answer: 'Yes. Our social media strategies are designed to grow with your business, whether you’re a niche store or a large e-commerce brand.',
              icon: React.createElement(IconUsers, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Want ",
      headlineKeywords: [
        "More Followers?",
        "Higher Engagement?",
        "Increased Sales?",
        "Viral Product Campaigns?",
        "Social Media Marketing for E-commerce Brands?"
      ],
      brandLine: [
        { text: "🚀 Grow Your E-commerce Brand with Social Media Marketing", gradient: false }
      ],
      subheadline: "We help e-commerce stores attract, engage, and convert their audience through platform-optimized social media campaigns.",
      ctaButtons: [
        { icon: React.createElement(IconVideo, { size: 28 }), text: "Book Free Strategy Call", link: "/contact" },
        { icon: React.createElement(IconUsers, { size: 28 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "500,000+ Impressions",
          description: "Generated via paid & organic campaigns"
        },
        {
          icon: React.createElement(IconRocket, { size: 32 }),
          title: "10,000+ Conversions",
          description: "Customers acquired through social campaigns"
        },
        {
          icon: React.createElement(IconHeart, { size: 32 }),
          title: "4.9/5 Brand Satisfaction",
          description: "Trusted by top e-commerce brands"
        },
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "Global Audience Reach",
          description: "Campaigns targeted across multiple countries"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the ", gradient: false },
        { text: "#1 Social Media Growth Partner for E-commerce", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        { icon: React.createElement(IconTrendingUp, { size: 28 }), title: "Engagement-Driven Campaigns", description: "We design campaigns that drive likes, shares, comments, and clicks, turning engagement into measurable sales growth." },
        { icon: React.createElement(IconRocket, { size: 28 }), title: "Platform Expertise", description: "Expertise across Instagram, Facebook, TikTok, and Pinterest ensures your brand performs optimally on every channel." },
        { icon: React.createElement(IconShieldCheck, { size: 28 }), title: "Data-Backed Strategies", description: "Analytics and insights guide every campaign to maximize ROI and identify new growth opportunities." },
        { icon: React.createElement(IconUsers, { size: 28 }), title: "Audience Targeting Mastery", description: "Precise targeting ensures the right audience sees your products, increasing conversions and reducing wasted ad spend." },
        { icon: React.createElement(IconStar, { size: 28 }), title: "Content Creation Excellence", description: "We produce stunning visuals, reels, and copy that resonate with your audience and reinforce your brand identity." },
        { icon: React.createElement(IconStack, { size: 28 }), title: "Scalable Solutions", description: "Our strategies scale with your store’s growth, supporting long-term engagement, follower growth, and recurring sales." }
      ],
      cta: {
        text: "Boost Your Social Media ROI Today",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Social Media Growth Process for E-commerce Brands',
      subtitle: 'STEP-BY-STEP ENGAGEMENT & CONVERSION SYSTEM',
      className: 'border-t border-border dark:border-gray-700',
      description: 'From content strategy to paid ads — our process ensures maximum engagement, follower growth, and consistent conversions for your e-commerce store.',
      steps: [
        { id: 1, title: 'Platform & Audience Research', description: 'Analyze your target audience, their behaviors, and the best platforms to engage them effectively.' },
        { id: 2, title: 'Content Strategy & Creation', description: 'Design high-quality posts, reels, and visuals that resonate with your audience and drive engagement.' },
        { id: 3, title: 'Organic Campaign Management', description: 'Schedule posts, manage interactions, and maintain consistent engagement across all platforms.' },
        { id: 4, title: 'Paid Advertising & Retargeting', description: 'Run targeted ad campaigns to reach high-intent customers and retarget potential buyers for increased conversions.' },
        { id: 5, title: 'Analytics & Performance Tracking', description: 'Monitor engagement, reach, clicks, and conversions to continuously optimize campaigns for better results.' },
        { id: 6, title: 'Scaling & Growth Optimization', description: 'Refine strategies, increase ad spend wisely, and expand reach while maintaining ROI and brand consistency.' }
      ]
    },
    cta: {
      title: 'Ready to Maximize Your Social Media Growth?',
      subtitle: 'TURN FOLLOWERS INTO CUSTOMERS',
      description: 'Book a free consultation with Digi Aerotech and discover how our social media marketing can grow your e-commerce store and boost revenue.'
    }
  }
};
