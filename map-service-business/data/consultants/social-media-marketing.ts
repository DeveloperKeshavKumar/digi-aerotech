import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconBrandLinkedin, IconBrandInstagram, IconBrandFacebook, IconUsers, IconTrendingUp,
  IconTarget, IconWorld, IconArrowRight, IconRocket, IconDeviceAnalytics, IconChartArcs, IconSpeakerphone
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'social-media-marketing',
  business: 'consultants-teachers',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant2',
    process: 'variant1',
  },
  data: {
    slug: 'social-media-marketing-consultants-teachers',
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
            { text: "Why Consultants & Teachers ", gradient: false },
            { text: "Struggle Without Social Media", gradient: true, gradientClass: "from-purple-500 via-pink-500 to-orange-500" }
          ],
          subheadline: "In today’s world, visibility = credibility. Without strong social media presence, consultants & teachers lose authority and miss out on clients/students.",
          painPoints: [
            "No personal brand recognition on LinkedIn, Instagram, or Facebook",
            "Low engagement and weak audience trust",
            "Difficulty generating leads from content",
            "No consistency in posting or strategy",
            "Competitors gaining attention with regular updates",
            "No clear ROI from social presence"
          ],
          solutionPoints: [
            "Personal brand building through optimized social profiles",
            "Targeted content strategy that resonates with clients & students",
            "Consistent posting with engaging visuals & storytelling",
            "Lead generation campaigns using ads + organic",
            "Analytics-driven growth & engagement tracking",
            "Community building through interactions, Q&As, and authority posts"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
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
              question: 'Why do consultants & teachers need social media?',
              answer: 'Because decision-makers & students spend time online. Social media builds authority, trust, and visibility where your audience is active.',
              icon: React.createElement(IconWorld, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Which platforms are best?',
              answer: 'For consultants: LinkedIn, Twitter, and YouTube. For teachers: Instagram, Facebook, and YouTube. We tailor based on your audience.',
              icon: React.createElement(IconBrandLinkedin, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Do you also run paid campaigns?',
              answer: 'Yes. We run Meta Ads, LinkedIn Ads, and Instagram promotions to generate quality leads and student enrollments.',
              icon: React.createElement(IconTarget, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Can you help with personal branding?',
              answer: 'Absolutely. We craft a professional social identity that positions you as an expert in your field.',
              icon: React.createElement(IconUsers, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'How do you measure results?',
              answer: 'We track followers, engagement, lead flow, and ROI — providing monthly transparent reports.',
              icon: React.createElement(IconDeviceAnalytics, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'Do you provide content creation too?',
              answer: 'Yes. Our team creates creatives, reels, posts, and articles tailored for consultants & teachers.',
              icon: React.createElement(IconSpeakerphone, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Be Seen. Be Heard.",
      headlineKeywords: [
        "Build Authority Online",
        "Generate Leads via Social Media",
        "Grow Your Personal Brand",
        "Attract Students & Clients",
        "Stay Ahead of Competitors"
      ],
      brandLine: [
        { text: "📱 Social Media Marketing for Consultants & Teachers", gradient: false }
      ],
      subheadline: "Digi Aerotech helps consultants & teachers grow visibility, authority, and leads with strategic social media marketing across LinkedIn, Instagram, Facebook & YouTube.",
      ctaButtons: [
        { icon: React.createElement(IconRocket, { size: 28 }), text: "Start My Social Media Growth", link: "/contact" },
        { icon: React.createElement(IconChartArcs, { size: 28 }), text: "Free Profile Audit", link: "/audit", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconBrandLinkedin, { size: 32 }),
          title: "LinkedIn Growth",
          description: "Build authority & generate B2B leads"
        },
        {
          icon: React.createElement(IconBrandInstagram, { size: 32 }),
          title: "Instagram Presence",
          description: "Reach & engage younger student audiences"
        },
        {
          icon: React.createElement(IconBrandFacebook, { size: 32 }),
          title: "Facebook Visibility",
          description: "Target communities & local student groups"
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "Lead Conversion",
          description: "Turn social engagement into real clients"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Consultants & Teachers Trust ", gradient: false },
        { text: "Digi Aerotech for Social Media Marketing", gradient: true, gradientClass: "from-purple-500 via-pink-500 to-orange-500" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "Niche Expertise",
          description: "Tailored strategies for consultants & teachers."
        },
        {
          icon: React.createElement(IconTarget, { size: 28 }),
          title: "Lead Focused",
          description: "We don’t chase likes — we bring real clients & students."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Growth-Driven Campaigns",
          description: "Data-driven strategies to boost visibility & enrollments."
        },
        {
          icon: React.createElement(IconWorld, { size: 28 }),
          title: "Platform-Specific Approach",
          description: "LinkedIn, Instagram, Facebook & YouTube optimization."
        },
        {
          icon: React.createElement(IconDeviceAnalytics, { size: 28 }),
          title: "Transparent Reporting",
          description: "Track engagement, reach, leads, and ROI clearly."
        },
        {
          icon: React.createElement(IconSpeakerphone, { size: 28 }),
          title: "Content + Ads Combo",
          description: "Organic reach + paid ads for maximum results."
        }
      ],
      cta: {
        text: "Let’s Grow My Brand",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Social Media Marketing Process',
      subtitle: 'STEP-BY-STEP TO AUTHORITY & LEADS',
      description: 'We follow a structured approach for consultants & teachers to maximize social ROI.',
      steps: [
        { id: 1, title: 'Profile Optimization', description: 'Setup & optimize your LinkedIn/Instagram/Facebook presence.' },
        { id: 2, title: 'Content Strategy', description: 'Plan engaging posts, reels, and authority-building content.' },
        { id: 3, title: 'Creative Design', description: 'High-quality graphics, reels & branded content.' },
        { id: 4, title: 'Posting & Engagement', description: 'Consistent publishing & interaction with followers.' },
        { id: 5, title: 'Ads & Campaigns', description: 'Run targeted paid ads for leads & visibility.' },
        { id: 6, title: 'Analytics & Reporting', description: 'Monthly tracking of engagement, reach & ROI.' }
      ]
    },
    cta: {
      title: 'Ready to Build Your Personal Brand & Attract Leads?',
      subtitle: 'SOCIAL MEDIA MARKETING FOR CONSULTANTS & TEACHERS',
      description: 'Book a free consultation with Digi Aerotech today. Let’s turn your social media into a powerful lead-generation machine.',
    }
  }
};
