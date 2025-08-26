import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconBrandTiktok, IconBrandYoutube, IconBrandTwitter, IconBrandLinkedin,
  IconBrandSnapchat, IconRocket, IconArrowRight, IconUsers, IconSparkles,
  IconTarget, IconChartLine, IconTrendingUp, IconBulb
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'other-ads',
  business: 'startups-entrepreneurs',
  variants: {
    hero: 'variant3',
    whyChooseUs: 'variant2',
    process: 'variant1',
    testimonials: 'variant3'
  },
  data: {
    slug: 'other-ads-startups-entrepreneurs',
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
            { text: "Why Startups Miss Out on ", gradient: false },
            { text: "Multi-Platform Ads", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Most startups stick to Google or Meta ads, ignoring platforms where their audience spends hours daily.",
          painPoints: [
            "Low brand visibility across multiple platforms",
            "Over-dependence on Google or Meta ads",
            "Missing out on viral growth via TikTok & YouTube",
            "Difficulty targeting professionals on LinkedIn",
            "Unoptimized ad budgets across channels"
          ],
          solutionPoints: [
            "Diversified ad strategy across TikTok, YouTube, LinkedIn, Twitter & Snapchat",
            "Viral short-video ads for fast growth",
            "Professional branding with LinkedIn campaigns",
            "Youth-focused campaigns via Snapchat & TikTok",
            "Optimized spend for maximum ROI"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Expand My Ad Reach"
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
              question: 'Which ad platforms do you manage for startups?',
              answer: 'We run ads on TikTok, YouTube, Snapchat, LinkedIn, and Twitter to maximize startup visibility.',
              icon: React.createElement(IconTarget, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Why should startups run ads beyond Google & Meta?',
              answer: 'Because your audience spends more time on TikTok, YouTube Shorts, and LinkedIn, where brand trust and viral reach are higher.',
              icon: React.createElement(IconSparkles, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Do multi-channel ads cost more?',
              answer: 'Not necessarily. We optimize budgets and focus on the platforms where your target audience converts best.',
              icon: React.createElement(IconChartLine, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Can startups go viral with TikTok & YouTube ads?',
              answer: 'Yes. Short-form video ads are highly engaging and give startups exponential reach at lower costs.',
              icon: React.createElement(IconBrandTiktok, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Are LinkedIn Ads effective for entrepreneurs?',
              answer: 'Absolutely. LinkedIn is the best for B2B startups, investor outreach, and building professional credibility.',
              icon: React.createElement(IconBrandLinkedin, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Go Beyond Google & Meta — ",
      headlineKeywords: [
        "TikTok Ads",
        "YouTube Shorts",
        "LinkedIn Growth",
        "Snapchat & Twitter Ads"
      ],
      brandLine: [
        { text: "📈 Multi-Platform Ads That Scale Startups Fast", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      subheadline: "We help startups and entrepreneurs grow with ads on TikTok, YouTube, Snapchat, LinkedIn & Twitter — unlocking audiences most ignore.",
      ctaButtons: [
        { icon: React.createElement(IconRocket, { size: 28 }), text: "Run My Multi-Platform Ads", link: "/contact" },
        { icon: React.createElement(IconTrendingUp, { size: 28 }), text: "Boost My Startup Growth", link: "/contact", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconBrandTiktok, { size: 32 }),
          title: "2M+ Viral Views",
          description: "via TikTok & YouTube ads"
        },
        {
          icon: React.createElement(IconBrandLinkedin, { size: 32 }),
          title: "Investor Outreach",
          description: "through LinkedIn campaigns"
        },
        {
          icon: React.createElement(IconBrandSnapchat, { size: 32 }),
          title: "Youth Engagement",
          description: "captured via Snapchat Ads"
        },
        {
          icon: React.createElement(IconBrandTwitter, { size: 32 }),
          title: "Real-Time Branding",
          description: "with Twitter ad pushes"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Us for ", gradient: false },
        { text: "Multi-Platform Startup Ads", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconBrandTiktok, { size: 28 }),
          title: "TikTok Ads",
          description: "Go viral with trending, youth-focused campaigns."
        },
        {
          icon: React.createElement(IconBrandYoutube, { size: 28 }),
          title: "YouTube Ads",
          description: "Engage audiences with long & short-form video ads."
        },
        {
          icon: React.createElement(IconBrandLinkedin, { size: 28 }),
          title: "LinkedIn Ads",
          description: "Build B2B credibility and attract investors."
        },
        {
          icon: React.createElement(IconBrandTwitter, { size: 28 }),
          title: "Twitter Ads",
          description: "Leverage real-time trends for startup awareness."
        },
        {
          icon: React.createElement(IconBrandSnapchat, { size: 28 }),
          title: "Snapchat Ads",
          description: "Target Gen-Z with fun, engaging ad formats."
        },
        {
          icon: React.createElement(IconBulb, { size: 28 }),
          title: "Budget Optimization",
          description: "Max ROI with data-driven ad spend allocation."
        }
      ],
      cta: {
        text: "Run My Startup Ads",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Multi-Platform Ad Strategy for Startups',
      subtitle: 'FROM VIRAL REACH TO INVESTOR TRUST',
      className: 'border-t border-border dark:border-gray-700',
      description: 'We craft startup-focused ad campaigns across TikTok, YouTube, LinkedIn, Snapchat, and Twitter to maximize visibility and conversions.',
      steps: [
        {
          id: 1,
          title: 'Audience Research',
          description: 'We identify your ideal audience across platforms — Gen-Z, professionals, or niche B2B buyers.'
        },
        {
          id: 2,
          title: 'Creative Concepting',
          description: 'Our team designs viral ad creatives tailored for TikTok, YouTube Shorts, and Snapchat.'
        },
        {
          id: 3,
          title: 'Platform Strategy',
          description: 'We assign the right platform for your goals — LinkedIn for B2B, TikTok for virality, YouTube for education.'
        },
        {
          id: 4,
          title: 'Campaign Setup',
          description: 'From ad copy to targeting, we launch optimized campaigns on every platform.'
        },
        {
          id: 5,
          title: 'Optimization',
          description: 'We A/B test creatives, track performance, and shift budget toward high-ROI campaigns.'
        },
        {
          id: 6,
          title: 'Scaling & Reporting',
          description: 'We scale winning campaigns and provide transparent reports showing startup growth.'
        }
      ]
    },
    testimonials: {
      title: [
        { text: "Startups Scaling with ", gradient: false },
        { text: "Multi-Platform Ads", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      description: 'See how entrepreneurs used TikTok, YouTube, LinkedIn, Snapchat & Twitter ads to grow fast.',
      testimonials: [
        {
          id: '1',
          message: 'Our TikTok and YouTube ads went viral in just weeks, bringing 50K+ app installs with a small budget.',
          highlight: '50K+ Installs in Weeks',
          stars: 5,
          name: 'Karan Mehta',
          designation: 'Co-Founder',
          company: 'FitTrack'
        },
        {
          id: '2',
          message: 'Their LinkedIn ads helped us get investor leads and B2B clients within the first 2 months.',
          highlight: 'Investor & B2B Clients',
          stars: 5,
          name: 'Ananya Sharma',
          designation: 'Founder',
          company: 'BizHive'
        }
      ]
    },
    cta: {
      title: 'Expand Your Startup Reach Beyond Google & Meta',
      subtitle: 'GO VIRAL + BUILD TRUST',
      description: 'We help startups run ads across TikTok, YouTube, LinkedIn, Snapchat, and Twitter to reach the right audience, faster.'
    }
  }
};
