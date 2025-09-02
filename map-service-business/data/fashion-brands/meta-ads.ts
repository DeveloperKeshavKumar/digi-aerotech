import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconShoppingCart,
  IconUsers,
  IconStar,
  IconTrendingUp,
  IconShieldCheck,
  IconRocket,
  IconAd,
  IconGlobe,
  IconTag,
  IconArrowRight,
  IconPhone
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'meta-ads',
  business: 'fashion-brands',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant1',
    process: 'variant3',
  },
  data: {
    slug: 'meta-ads-fashion-brands',
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
            { text: "Fashion Brands", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Maximize ROI and attract the right audience for your fashion brand on Facebook & Instagram.",
          painPoints: [
            "Low engagement on ads leading to wasted budget",
            "Difficulty targeting the right audience segments",
            "High CPC and low conversions",
            "Struggling to create visually appealing ad creatives",
            "Limited knowledge on ad optimization & scaling"
          ],
          solutionPoints: [
            "Highly targeted audience campaigns for fashion shoppers",
            "Creative ad designs & storytelling tailored to brand style",
            "Continuous A/B testing to reduce CPC & increase ROAS",
            "Scaling campaigns efficiently across Facebook & Instagram",
            "Detailed analytics and insights for data-driven decisions"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Boost Your Fashion Sales Today"
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
              question: 'Why should fashion brands invest in Meta Ads?',
              answer: 'Meta Ads allow precise targeting and high engagement, helping you reach fashion-conscious customers effectively.',
              icon: React.createElement(IconAd, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Can you target specific fashion buyer personas?',
              answer: 'Yes. We segment audiences by interests, behavior, location, and demographics to reach your ideal buyers.',
              icon: React.createElement(IconUsers, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Do you create ad creatives for campaigns?',
              answer: 'Absolutely. We design visually compelling images, videos, and carousel ads that convert.',
              icon: React.createElement(IconShoppingCart, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'How do you improve ad ROI?',
              answer: 'Through continuous testing, optimization, and scaling, we ensure each campaign maximizes returns.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Will my ads appear on Instagram & Facebook?',
              answer: 'Yes. We leverage both platforms for full audience coverage, including Stories, Reels, and feed placements.',
              icon: React.createElement(IconGlobe, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'Do you provide performance reports?',
              answer: 'Yes. Detailed analytics and insights are shared regularly, showing reach, engagement, conversions, and ROAS.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Want ",
      headlineKeywords: [
        "More Sales via Meta Ads?",
        "Boost Instagram & Facebook Conversions?",
        "Target Fashion Buyers Effectively?",
        "Increase ROAS with Ads?",
        "Drive Fashion Brand Growth Online?"
      ],
      brandLine: [
        { text: "📈 Grow Your Fashion Brand with Expert Meta Ads Campaigns", gradient: false }
      ],
      subheadline: "We help fashion brands reach their ideal audience on Meta platforms, increase engagement, and maximize conversions.",
      ctaButtons: [
        { icon: React.createElement(IconPhone, { size: 28 }), text: "Book Free Meta Ads Strategy Call", link: "/contact" },
        { icon: React.createElement(IconArrowRight, { size: 28 }), text: "Start Growing Today", link: "/contact", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "50,000+ Targeted Shoppers",
          description: "Reached via Meta Ads campaigns"
        },
        {
          icon: React.createElement(IconShoppingCart, { size: 32 }),
          title: "200+ Fashion Brands Scaled",
          description: "With optimized ad strategies"
        },
        {
          icon: React.createElement(IconStar, { size: 32 }),
          title: "4.9/5 Client Satisfaction",
          description: "Fashion brands trust our ads"
        },
        {
          icon: React.createElement(IconRocket, { size: 32 }),
          title: "30%+ Increase in Conversions",
          description: "Brands achieving higher sales"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the ", gradient: false },
        { text: "#1 Meta Ads Partner for Fashion Brands", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconAd, { size: 28 }),
          title: "Creative Campaigns that Convert",
          description: "We design ads that engage fashion audiences."
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 28 }),
          title: "Precision Audience Targeting",
          description: "Reach only your ideal buyers and reduce wasted spend."
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Continuous Optimization",
          description: "A/B testing and performance tweaks ensure ROI growth."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Scaling & Expansion",
          description: "Expand campaigns to new markets efficiently."
        },
        {
          icon: React.createElement(IconStar, { size: 28 }),
          title: "Analytics & Reporting",
          description: "Transparent performance insights for every campaign."
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "Trusted by Fashion Brands",
          description: "We have successfully scaled over 200+ fashion businesses."
        }
      ],
      cta: {
        text: "Launch Your Meta Ads Campaign Today",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Proven Meta Ads Process for Fashion Brands',
      subtitle: 'STEP-BY-STEP ADS OPTIMIZATION',
      className: 'border-t border-border dark:border-gray-700',
      description: 'From audience research to creative design and optimization, our Meta Ads process drives measurable results for fashion brands.',
      steps: [
        {
          id: 1,
          title: 'Audience Research & Segmentation',
          description: 'Identify fashion buyer personas and segment for targeting.'
        },
        {
          id: 2,
          title: 'Creative Concept & Design',
          description: 'Design images, videos, and carousels that appeal to your audience.'
        },
        {
          id: 3,
          title: 'Ad Campaign Setup',
          description: 'Launch campaigns across Facebook, Instagram, and Meta Audience Network.'
        },
        {
          id: 4,
          title: 'A/B Testing & Optimization',
          description: 'Continuously test creatives, copy, and audiences for maximum ROI.'
        },
        {
          id: 5,
          title: 'Scaling Winning Campaigns',
          description: 'Increase budget and reach for high-performing campaigns to maximize conversions.'
        },
        {
          id: 6,
          title: 'Reporting & Insights',
          description: 'Track metrics like CTR, CPC, conversions, and ROAS for data-driven decisions.'
        }
      ]
    },
    cta: {
      title: 'Ready to Boost Your Fashion Brand with Meta Ads?',
      subtitle: 'Reach the Right Audience, Increase Engagement, and Maximize Conversions',
      description: 'Book a free strategy session and let Digi Aerotech create high-performing Meta Ads campaigns for your fashion brand.'
    }
  }
};
