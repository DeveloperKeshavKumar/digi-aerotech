import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconBrandTwitter,
  IconBrandSnapchat,
  IconBrandYoutube,
  IconBrandTiktok,
  IconBrandLinkedin,
  IconUsers,
  IconDeviceMobile,
  IconShieldCheck,
  IconTrendingUp,
  IconRocket,
  IconCalendarEvent,
  IconArrowRight,
  IconPhone,
  IconCircleCheck,
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'other-ads',
  business: 'educational-institutions',
  variants: {
    hero: 'variant1',
    whyChooseUs: 'variant3',
    process: 'variant2',
  },
  data: {
    slug: 'other-ads-educational-institutions',
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
            { text: "Challenges Educational Institutions Face", gradient: false },
            { text: "With Advertising on Social Platforms", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Schools, colleges, and coaching centers struggle to generate enrollments and engagement on platforms like Twitter, Snapchat, TikTok, YouTube & LinkedIn.",
          painPoints: [
            "Low brand visibility on emerging social platforms",
            "Difficulty targeting prospective students effectively",
            "High ad costs without measurable ROI",
            "Limited engagement with videos & stories",
            "Difficulty tracking leads and conversions"
          ],
          solutionPoints: [
            "Custom ad campaigns on Twitter, Snapchat, TikTok, YouTube & LinkedIn",
            "Audience targeting based on demographics & interests",
            "Video and story creatives to increase engagement",
            "Performance tracking to maximize ROI",
            "Lead nurturing campaigns to convert ad viewers into students"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Boost Your Enrollments Now"
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
              question: 'Which platforms are most effective for education ads?',
              answer: 'We specialize in Twitter, Snapchat, TikTok, YouTube & LinkedIn to reach students and parents effectively.',
              icon: React.createElement(IconBrandTwitter, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Can you track ad conversions?',
              answer: 'Yes, all campaigns are tracked with analytics dashboards to measure leads, clicks, and ROI.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Do you create video ads for campaigns?',
              answer: 'Absolutely. We produce engaging stories, reels, and video content optimized for each platform.',
              icon: React.createElement(IconBrandYoutube, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Can small institutions afford these campaigns?',
              answer: 'Yes. We design scalable campaigns to fit any budget, maximizing results without overspending.',
              icon: React.createElement(IconRocket, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'How do we reach parents specifically?',
              answer: 'We target parents through demographics, interest-based targeting, and LinkedIn professional ads for adult learners.',
              icon: React.createElement(IconUsers, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'How soon can we see enrollments increase?',
              answer: 'With optimized ad campaigns, measurable leads are visible within weeks, and conversions grow steadily.',
              icon: React.createElement(IconCircleCheck, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Want ",
      headlineKeywords: [
        "Higher Enrollments?",
        "More Student Engagement?",
        "Effective Social Media Ads?",
        "Targeted Ads on Emerging Platforms?",
        "360° Social Advertising for Institutions?"
      ],
      brandLine: [
        { text: "🚀 Advertise Your Educational Institution on Twitter, Snapchat, TikTok, YouTube & LinkedIn", gradient: false }
      ],
      subheadline: "We help schools, colleges, and coaching centers generate leads, boost enrollment, and increase engagement through high-converting ads on multiple platforms.",
      ctaButtons: [
        { icon: React.createElement(IconDeviceMobile, { size: 28 }), text: "Schedule Free Consultation", link: "/contact" },
        { icon: React.createElement(IconPhone, { size: 28 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "50,000+ Leads Generated",
          description: "For institutions across India"
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "30% Average Enrollment Growth",
          description: "Through targeted ads"
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 32 }),
          title: "4.9/5 Client Satisfaction",
          description: "Trusted for measurable results"
        },
        {
          icon: React.createElement(IconCalendarEvent, { size: 32 }),
          title: "Quick Campaign Launch",
          description: "Ads live within days with ongoing optimization"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the ", gradient: false },
        { text: "#1 Choice for Social Platform Ads in Education", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconBrandLinkedin, { size: 28 }),
          title: "Expert Platform Targeting",
          description: "Reach students and parents with precise targeting."
        },
        {
          icon: React.createElement(IconBrandTiktok, { size: 28 }),
          title: "Engaging Video & Story Ads",
          description: "Create high-converting creatives optimized for each platform."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "ROI-Focused Campaigns",
          description: "Maximize enrollments and minimize ad spend wastage."
        },
        {
          icon: React.createElement(IconDeviceMobile, { size: 28 }),
          title: "Cross-Platform Campaigns",
          description: "Simultaneously run ads on multiple social media channels."
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "Lead Nurturing & Follow-Up",
          description: "Convert clicks into real student enrollments effectively."
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 28 }),
          title: "Transparent Reporting",
          description: "Track campaign performance with detailed analytics."
        }
      ],
      cta: {
        text: "Launch Your Social Ads Now",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Other Ads Process for Educational Institutions',
      subtitle: 'STEP-BY-STEP STUDENT LEAD GENERATION',
      className: 'border-t border-border dark:border-gray-700',
      description: 'From targeting to conversion, we run ads on emerging social platforms to increase engagement, leads, and enrollments.',
      steps: [
        {
          id: 1,
          title: 'Target Audience Research',
          description: 'Identify demographics, interests, and student personas for precise targeting.'
        },
        {
          id: 2,
          title: 'Platform Strategy',
          description: 'Choose the most effective platforms: Twitter, TikTok, Snapchat, YouTube, LinkedIn.'
        },
        {
          id: 3,
          title: 'Ad Creative Development',
          description: 'Design videos, stories, and banners that engage students and parents.'
        },
        {
          id: 4,
          title: 'Campaign Launch',
          description: 'Run multi-platform campaigns with real-time monitoring and adjustments.'
        },
        {
          id: 5,
          title: 'Lead Tracking & Optimization',
          description: 'Track clicks, form submissions, and conversions to maximize ROI.'
        },
        {
          id: 6,
          title: 'Reporting & Continuous Improvement',
          description: 'Analyze results, tweak targeting, and improve ad performance continuously.'
        }
      ]
    },
    cta: {
      title: 'Ready to Boost Enrollments with Social Ads?',
      subtitle: 'Target Students & Parents Across Multiple Platforms',
      description: 'Book a free consultation with Digi Aerotech and start converting ad viewers into students today.'
    }
  }
};
