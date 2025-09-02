import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconUsers,
  IconBook,
  IconCamera,
  IconTrendingUp,
  IconShieldCheck,
  IconArrowRight,
  IconRocket,
  IconCalendarEvent,
  IconVideo,
  IconMessageCircle,
  IconCircleCheck,
  IconStar,
  IconTarget
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'social-media-marketing',
  business: 'educational-institutions',
  variants: {
    hero: 'variant1',
    whyChooseUs: 'variant2',
    process: 'variant3',
  },
  data: {
    slug: 'social-media-marketing-educational-institutions',
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
            { text: "With Social Media Marketing", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Schools, colleges, coaching centers, and e-learning platforms struggle to engage and attract students effectively on social media.",
          painPoints: [
            "Low engagement and interaction on posts",
            "Difficulty attracting prospective students via social channels",
            "Weak brand presence and recognition online",
            "Limited reach for course announcements and events",
            "Poor conversion from social media traffic to enrollments"
          ],
          solutionPoints: [
            "Targeted campaigns across Facebook, Instagram, LinkedIn, and YouTube",
            "High-quality visuals, videos, and reels that engage students",
            "Content calendars for consistent posting and engagement",
            "Paid ad campaigns to attract high-intent student leads",
            "Influencer and alumni collaborations to boost credibility"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Boost Your Social Engagement"
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
              question: 'How can social media marketing increase student enrollment?',
              answer: 'Through targeted campaigns, engaging content, and paid ads, we attract high-intent student leads and convert them into enrollments.',
              icon: React.createElement(IconUsers, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Which platforms are best for educational institutions?',
              answer: 'Facebook, Instagram, LinkedIn, and YouTube are highly effective for engaging students, parents, and alumni.',
              icon: React.createElement(IconVideo, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Do you provide content creation?',
              answer: 'Yes, we create posts, reels, videos, carousels, and banners optimized for engagement and conversions.',
              icon: React.createElement(IconCamera, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Can you manage our social media accounts end-to-end?',
              answer: 'Absolutely. We handle content strategy, posting, community management, and analytics to maximize ROI.',
              icon: React.createElement(IconMessageCircle, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Do you run paid ad campaigns?',
              answer: 'Yes, we run highly targeted paid campaigns to reach prospective students and drive enrollment.',
              icon: React.createElement(IconTarget, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'How soon will we see engagement improvements?',
              answer: 'Initial engagement improvements can be seen within weeks, with lead generation and conversions increasing over 1–3 months.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Want ",
      headlineKeywords: [
        "Higher Engagement?",
        "More Student Leads?",
        "Stronger Online Presence?",
        "Social Media That Converts?",
        "360° Social Media Marketing for Education?"
      ],
      brandLine: [
        { text: "📚 Engage More Students & Boost Enrollments with Social Media Marketing", gradient: false }
      ],
      subheadline: "We help educational institutions build authority, reach prospective students, and drive enrollment through strategic social media campaigns.",
      ctaButtons: [
        { icon: React.createElement(IconRocket, { size: 28 }), text: "Book Free Strategy Call", link: "/contact" },
        { icon: React.createElement(IconShieldCheck, { size: 28 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "80+ Institutions",
          description: "Engaged successfully on social media"
        },
        {
          icon: React.createElement(IconVideo, { size: 32 }),
          title: "10,000+ Reels & Posts",
          description: "Created for high engagement"
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "50,000+ Leads Generated",
          description: "Through social campaigns"
        },
        {
          icon: React.createElement(IconStar, { size: 32 }),
          title: "High Engagement & Conversions",
          description: "Content that attracts and converts students"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the ", gradient: false },
        { text: "#1 Social Media Partner for Educational Institutions", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconCamera, { size: 28 }),
          title: "Visual Content Expertise",
          description: "We create reels, posts, and videos that captivate students."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Lead-Focused Campaigns",
          description: "Every post and ad drives engagement and potential student leads."
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "Community Building",
          description: "We grow your social following and active student community."
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 28 }),
          title: "Trusted Strategies",
          description: "Proven methods to convert social interactions into enrollments."
        },
        {
          icon: React.createElement(IconCircleCheck, { size: 28 }),
          title: "Cross-Platform Management",
          description: "We manage Facebook, Instagram, LinkedIn, and YouTube accounts seamlessly."
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Data-Driven Optimization",
          description: "We analyze performance and continuously optimize campaigns for maximum results."
        }
      ],
      cta: {
        text: "Boost Your Social Presence & Enrollments",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Social Media Marketing Process for Educational Institutions',
      subtitle: 'STEP-BY-STEP ENGAGEMENT & LEAD GENERATION',
      className: 'border-t border-border dark:border-gray-700',
      description: 'We follow a structured social media process to increase engagement, attract prospective students, and drive enrollments consistently.',
      steps: [
        {
          id: 1,
          title: 'Social Media Audit',
          description: 'Analyze existing social presence, engagement metrics, and content performance.'
        },
        {
          id: 2,
          title: 'Content Strategy & Calendar',
          description: 'Plan posts, reels, videos, and stories targeting prospective students.'
        },
        {
          id: 3,
          title: 'Creative Content Production',
          description: 'Design high-quality visuals, banners, reels, and videos tailored for each platform.'
        },
        {
          id: 4,
          title: 'Targeted Paid Campaigns',
          description: 'Run ads for student acquisition, course announcements, and events.'
        },
        {
          id: 5,
          title: 'Community Engagement & Monitoring',
          description: 'Engage with followers, respond to queries, and manage online reputation.'
        },
        {
          id: 6,
          title: 'Performance Analysis & Optimization',
          description: 'Track KPIs, adjust strategies, and improve campaigns for maximum ROI.'
        }
      ]
    },
    cta: {
      title: 'Ready to Engage Students & Boost Enrollments?',
      subtitle: 'Build Authority, Reach Students, Drive Conversions',
      description: 'Book a free social media strategy session with Digi Aerotech and grow your educational institution’s online presence effectively.'
    }
  }
};
