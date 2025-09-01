import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconBrandFacebook, IconBrandInstagram, IconBrandTwitter, IconBrandTiktok,
  IconUsers, IconTrendingUp, IconChartBar, IconWorld, IconRocket, IconDeviceMobile,
  IconMessageChatbot, IconTarget
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'social-media-marketing',
  business: 'b2c-services',
  variants: {
    hero: 'variant1',
    whyChooseUs: 'variant1',
    process: 'variant2',
    testimonials: 'variant1'
  },
  data: {
    slug: 'smm-services-b2c',
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
            { text: "Why B2C Brands Struggle ", gradient: false },
            { text: "Without Social Media Marketing", gradient: true, gradientClass: "from-pink-500 via-red-500 to-yellow-500" }
          ],
          subheadline: "Your customers live on social media — if your brand isn’t active and engaging, you’re invisible to them.",
          painPoints: [
            "No strong presence on Facebook, Instagram or TikTok",
            "Low engagement and poor brand visibility",
            "Competitors building loyal communities while you lag behind",
            "Struggling to create viral & shareable content",
            "No strategy for ads, stories, reels or influencer marketing",
            "Hard to measure ROI from social media campaigns"
          ],
          solutionPoints: [
            "Consistent content creation & scheduling across platforms",
            "Targeted ad campaigns on Facebook, Instagram, TikTok & more",
            "Community building with engaging posts, stories & reels",
            "Influencer collaborations & brand partnerships",
            "Creative campaigns designed to go viral",
            "Transparent reporting with growth & engagement analytics"
          ],
          cta: {
            icon: React.createElement(IconBrandInstagram, { size: 20 }),
            text: "Boost My Social Media Presence"
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
              question: 'Why is social media marketing important for B2C businesses?',
              answer: 'Social media builds brand visibility, drives engagement, and creates direct relationships with customers, turning them into loyal buyers.',
              icon: React.createElement(IconBrandFacebook, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Which platforms do you manage?',
              answer: 'We handle Facebook, Instagram, TikTok, Twitter, LinkedIn, and emerging platforms depending on your target audience.',
              icon: React.createElement(IconWorld, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Do you also run paid social media ads?',
              answer: 'Yes, we create and manage high-ROI ad campaigns on Facebook, Instagram, and TikTok for conversions and brand awareness.',
              icon: React.createElement(IconChartBar, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'How do you measure social media success?',
              answer: 'We track KPIs like followers, engagement rate, reach, clicks, leads, and conversions — giving full ROI transparency.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Can you create content for my brand?',
              answer: 'Absolutely — from graphics and reels to captions and campaigns, we provide complete content creation for your brand identity.',
              icon: React.createElement(IconMessageChatbot, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Turn Followers Into Paying Customers",
      headlineKeywords: [
        "Social Media Marketing for B2C Brands",
        "Instagram & TikTok Growth Campaigns",
        "Facebook Ads & Community Building",
        "Influencer Marketing for B2C Services",
        "Content Strategy & Viral Engagement"
      ],
      brandLine: [
        { text: "📲 Be where your customers are — dominate social platforms with Digi Aerotech.", gradient: false }
      ],
      subheadline: "We help B2C businesses create viral content, run targeted ads, and build engaged communities across Facebook, Instagram, TikTok, and more. More engagement → More visibility → More sales.",
      ctaButtons: [
        { icon: React.createElement(IconRocket, { size: 28 }), text: "Grow My Brand on Social", link: "/contact" },
        { icon: React.createElement(IconUsers, { size: 28 }), text: "Free Social Media Audit", link: "/audit", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconBrandInstagram, { size: 32 }),
          title: "Engagement Growth",
          description: "Boost likes, shares & interactions"
        },
        {
          icon: React.createElement(IconBrandFacebook, { size: 32 }),
          title: "Targeted Ads",
          description: "Run paid campaigns for conversions"
        },
        {
          icon: React.createElement(IconBrandTiktok, { size: 32 }),
          title: "Viral Content",
          description: "Creative reels & videos for awareness"
        },
        {
          icon: React.createElement(IconTarget, { size: 32 }),
          title: "Brand Positioning",
          description: "Build trust & recognition on social"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why B2C Businesses Trust ", gradient: false },
        { text: "Digi Aerotech for Social Media Marketing", gradient: true, gradientClass: "from-pink-500 via-red-500 to-yellow-500" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Creative First Approach",
          description: "We craft eye-catching visuals, reels & campaigns that stand out."
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "Community Building",
          description: "Turn followers into loyal customers with consistent engagement."
        },
        {
          icon: React.createElement(IconChartBar, { size: 28 }),
          title: "Data-Driven Ads",
          description: "Laser-focused targeting for maximum ROI on social platforms."
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Growth-Focused Strategy",
          description: "Content, ads, and influencer marketing to fuel steady growth."
        },
        {
          icon: React.createElement(IconWorld, { size: 28 }),
          title: "Cross-Platform Management",
          description: "One team managing all your social platforms seamlessly."
        },
        {
          icon: React.createElement(IconDeviceMobile, { size: 28 }),
          title: "Mobile-First Execution",
          description: "Optimized for mobile users who make up 90% of social audiences."
        }
      ],
      cta: {
        text: "Boost My Social Media",
        link: "#contact",
        icon: React.createElement(IconBrandInstagram, { size: 20 })
      }
    },
    process: {
      title: 'Our Social Media Marketing Process',
      subtitle: 'CONTENT → ENGAGEMENT → ADS → SALES',
      description: 'We build a customized strategy that maximizes brand presence, engagement, and conversions.',
      steps: [
        { id: 1, title: 'Audit & Strategy', description: 'Assess current presence & define growth roadmap.' },
        { id: 2, title: 'Content Creation', description: 'Develop posts, reels, videos & ad creatives.' },
        { id: 3, title: 'Community Building', description: 'Engage followers with comments, stories & interactions.' },
        { id: 4, title: 'Paid Campaigns', description: 'Run ROI-focused ad campaigns on Facebook, Instagram & TikTok.' },
        { id: 5, title: 'Influencer Marketing', description: 'Partner with micro & macro influencers for reach.' },
        { id: 6, title: 'Reporting & Optimization', description: 'Track analytics & optimize campaigns for growth.' }
      ]
    },
    testimonials: {
      title: [
        { text: "B2C Brands Growing ", gradient: false },
        { text: "with Digi Aerotech Social Media Marketing", gradient: true, gradientClass: "from-pink-500 via-red-500 to-yellow-500" }
      ],
      description: 'From fashion brands to restaurants, Digi Aerotech has helped B2C businesses grow massive audiences and boost sales with social media marketing.',
      testimonials: [
        {
          id: '1',
          message: 'Our Instagram grew from 2,000 to 15,000 followers in 6 months, and walk-ins increased by 45%.',
          highlight: '15,000+ followers',
          stars: 5,
          name: 'Sneha Kapoor',
          designation: 'Owner',
          company: 'Glow Beauty Studio'
        },
        {
          id: '2',
          message: 'Digi Aerotech’s social media ads doubled our online sales in just 3 months!',
          highlight: '2X online sales',
          stars: 5,
          name: 'Arjun Mehta',
          designation: 'Founder',
          company: 'FitFuel Nutrition'
        }
      ]
    },
    cta: {
      title: 'Ready to Dominate Social Media?',
      subtitle: 'ENGAGE → BUILD TRUST → SELL MORE',
      description: 'With Digi Aerotech’s Social Media Marketing, B2C businesses attract followers, boost engagement, and convert them into paying customers.',
    }
  }
};
