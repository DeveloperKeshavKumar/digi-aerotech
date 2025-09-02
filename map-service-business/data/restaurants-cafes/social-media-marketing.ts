import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconBrandInstagram, IconBrandTiktok, IconBrandFacebook,
  IconUsersGroup, IconSparkles, IconChartArrows, IconChefHat, IconVideo, IconStars,
  IconGraph
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'social-media-marketing',
  business: 'restaurants-cafes',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant1',
    process: 'variant3',
  },
  data: {
    slug: 'social-media-marketing-restaurants-cafes',
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
            { text: "Why Restaurants & Cafés Struggle on ", gradient: false },
            { text: "Social Media", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Food businesses thrive visually, but most restaurants and cafés fail to convert likes into loyal customers and real orders.",
          painPoints: [
            "Low engagement despite posting daily",
            "No consistent brand voice across platforms",
            "Difficulty keeping up with trends (Reels, TikTok, Shorts)",
            "Not leveraging influencers and UGC",
            "No strategy for customer reviews and feedback"
          ],
          solutionPoints: [
            "Create scroll-stopping Instagram & TikTok reels",
            "Develop a strong food brand identity",
            "Collaborate with local food influencers",
            "Run geo-targeted ad campaigns",
            "Engage with followers through reviews, stories & contests"
          ],
          cta: {
            icon: React.createElement(IconSparkles, { size: 20 }),
            text: "Boost My Social Media"
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
              question: 'Which social platforms work best for restaurants?',
              answer: 'Instagram, TikTok, and Facebook drive B2C traffic with reels and stories, while LinkedIn can help cafés expand catering partnerships.',
              icon: React.createElement(IconBrandInstagram, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'How can social media increase footfall?',
              answer: 'We use viral reels, geotagged posts, and ad campaigns to attract local diners directly to your restaurant or café.',
              icon: React.createElement(IconUsersGroup, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Do you work with food influencers?',
              answer: 'Yes, we connect you with micro and macro food influencers to create authentic content that drives visibility and trust.',
              icon: React.createElement(IconStars, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'How do you measure ROI from social media?',
              answer: 'We track KPIs like engagement, follower growth, reservations, and online orders tied directly to campaigns.',
              icon: React.createElement(IconGraph, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'What kind of content works best for cafés?',
              answer: 'Reels showcasing coffee art, behind-the-scenes kitchen videos, and customer testimonials work amazingly well.',
              icon: React.createElement(IconChefHat, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Social Media Marketing for Restaurants & Cafés",
      headlineKeywords: [
        "Instagram Marketing for Restaurants",
        "TikTok Reels for Cafés",
        "Food Influencer Campaigns",
        "Engagement-Driven Ads"
      ],
      brandLine: [
        { text: "🍽️ Transforming Food Brands into Social Media Icons", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      subheadline: "We help restaurants & cafés grow their digital presence with high-converting Instagram, TikTok, and Facebook campaigns designed to drive bookings, orders, and loyal customers.",
      ctaButtons: [
        { icon: React.createElement(IconBrandInstagram, { size: 28 }), text: "Start Social Media Growth", link: "/contact" },
        { icon: React.createElement(IconSparkles, { size: 28 }), text: "Free Social Audit", link: "/contact", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconBrandTiktok, { size: 32 }),
          title: "Viral Reels",
          description: "food videos that trend"
        },
        {
          icon: React.createElement(IconBrandFacebook, { size: 32 }),
          title: "Community Growth",
          description: "loyal diners & repeat visits"
        },
        {
          icon: React.createElement(IconUsersGroup, { size: 32 }),
          title: "Influencer Collabs",
          description: "boost trust & visibility"
        },
        {
          icon: React.createElement(IconGraph, { size: 32 }),
          title: "Measurable ROI",
          description: "orders, bookings, and growth"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Restaurants Choose Our ", gradient: false },
        { text: "Social Media Marketing", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconVideo, { size: 28 }),
          title: "Content That Sells",
          description: "From reels to food stories, we create viral-worthy content."
        },
        {
          icon: React.createElement(IconUsersGroup, { size: 28 }),
          title: "Community Engagement",
          description: "We build trust through consistent interaction & review management."
        },
        {
          icon: React.createElement(IconChefHat, { size: 28 }),
          title: "Food-Centric Branding",
          description: "Highlight your unique flavors & café vibes across social channels."
        },
        {
          icon: React.createElement(IconStars, { size: 28 }),
          title: "Influencer Partnerships",
          description: "Collaborations with foodies & travel influencers to amplify reach."
        },
        {
          icon: React.createElement(IconChartArrows, { size: 28 }),
          title: "Data-Driven Growth",
          description: "We optimize campaigns for maximum ROI and engagement."
        }
      ],
      cta: {
        text: "Grow My Restaurant Social Media",
        link: "#contact",
        icon: React.createElement(IconSparkles, { size: 20 })
      }
    },
    process: {
      title: 'Our Social Media Marketing Process for Restaurants & Cafés',
      subtitle: 'FROM POSTS TO RESERVATIONS',
      className: 'border-t border-border dark:border-gray-700',
      description: 'We follow a structured process to grow your restaurant’s online presence and convert social media engagement into real customers.',
      steps: [
        {
          id: 1,
          title: 'Profile Optimization',
          description: 'We set up your social media profiles with SEO-friendly bios, menu links, and consistent branding to attract and convert visitors.'
        },
        {
          id: 2,
          title: 'Content Calendar',
          description: 'We design a strategic posting calendar with reels, stories, promotions, and behind-the-scenes content tailored for your audience.'
        },
        {
          id: 3,
          title: 'Creative Production',
          description: 'Our team produces mouth-watering food photography, chef highlights, and short-form videos that engage and inspire.'
        },
        {
          id: 4,
          title: 'Community Building',
          description: 'We engage with your audience through reviews, polls, contests, and UGC campaigns, building loyalty and word-of-mouth buzz.'
        },
        {
          id: 5,
          title: 'Influencer & Paid Boost',
          description: 'We partner with local influencers and run geo-targeted ads to expand reach and drive direct footfall to your restaurant.'
        },
        {
          id: 6,
          title: 'Analytics & Scaling',
          description: 'We track follower growth, engagement, and ROI — scaling what works best for continuous growth and bookings.'
        }
      ]
    },
    cta: {
      title: 'Turn Social Media into Bookings & Orders',
      subtitle: 'FROM VIRAL CONTENT TO LOYAL CUSTOMERS',
      description: 'We help restaurants and cafés dominate Instagram, TikTok, and Facebook with strategies that drive both visibility and conversions.',
    }
  }
};
