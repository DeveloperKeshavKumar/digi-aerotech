import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconUserCheck, IconMap, IconSchool, IconTrendingUp,
  IconShieldCheck, IconUsers, IconStar, IconPhone, IconArrowRight,
  IconSearch, IconBuilding, IconGlobe
} from '@tabler/icons-react';
import { BookOpen } from 'lucide-react';

export const map: ServiceBusinessMap = {
  service: 'gmb-services',
  business: 'consultants',
  variants: {
    hero: 'variant1',
    whyChooseUs: 'variant3',
    process: 'variant2',
  },
  data: {
    slug: 'gmb-services-consultants-teachers',
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
            { text: "Challenges Consultants & Teachers ", gradient: false },
            { text: "Face in Google Visibility", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
          ],
          subheadline: "Many consultants and teachers struggle to stand out in local searches, losing leads to less-qualified but more visible competitors.",
          painPoints: [
            "Not ranking in Google local searches & Maps",
            "Incomplete or outdated Google Business Profile",
            "Lack of reviews damaging credibility",
            "Low engagement from profile visitors",
            "Competitors outranking in local SEO",
            "Missed opportunities from calls & inquiries"
          ],
          solutionPoints: [
            "Complete GMB optimization with accurate info & keywords",
            "Local SEO strategies to appear in Google 3-Pack",
            "Review & reputation management for higher trust",
            "Consistent updates with posts, photos, and offers",
            "Geo-targeted optimization for local visibility",
            "Lead tracking & insights to measure growth"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Optimize My GMB Today"
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
              question: 'Why do consultants and teachers need GMB optimization?',
              answer: 'Because most students and clients search on Google first. GMB ensures you appear in local results and build instant trust.',
              icon: React.createElement(IconSearch, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Can you help me get more positive reviews?',
              answer: 'Yes, we use automated review generation strategies and guide happy students/clients to leave strong testimonials.',
              icon: React.createElement(IconStar, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Will GMB help me get more leads?',
              answer: 'Absolutely. Optimized GMB increases profile visits, calls, inquiries, and directions from Google Maps.',
              icon: React.createElement(IconUsers, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'How do you keep my profile active?',
              answer: 'We regularly update posts, offers, photos, and Q&A to ensure your GMB profile stays engaging and ranked.',
              icon: React.createElement(BookOpen, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Can I compete with big institutions?',
              answer: 'Yes. With local SEO and review strategies, independent consultants & teachers can outrank bigger institutions locally.',
              icon: React.createElement(IconBuilding, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'How soon will I see results?',
              answer: 'Calls and inquiries can increase within weeks through optimization, while reviews and rankings grow consistently over time.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Want ",
      headlineKeywords: [
        "More Students?",
        "More Clients?",
        "Higher Trust?",
        "Better Local Visibility?",
        "GMB Growth for Consultants & Teachers?"
      ],
      brandLine: [
        { text: "📍 Get Found on Google. Grow Your Consulting & Teaching Services.", gradient: false }
      ],
      subheadline: "We help consultants and teachers rank higher on Google Maps & local search, build credibility, and convert profile visitors into paying clients and students.",
      ctaButtons: [
        { icon: React.createElement(IconPhone, { size: 28 }), text: "Get Free GMB Audit", link: "/contact" },
        { icon: React.createElement(IconGlobe, { size: 28 }), text: "Talk to Our Experts", link: "/contact", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "2000+ Leads",
          description: "Generated via GMB optimization"
        },
        {
          icon: React.createElement(IconStar, { size: 32 }),
          title: "500+ Reviews",
          description: "Managed for consultants & teachers"
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 32 }),
          title: "4.9/5 Avg Rating",
          description: "Trust built for professionals"
        },
        {
          icon: React.createElement(IconMap, { size: 32 }),
          title: "Top 3 Ranking",
          description: "Clients appear in Google 3-Pack"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the ", gradient: false },
        { text: "#1 GMB Growth Partner for Consultants & Teachers", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconUserCheck, { size: 28 }),
          title: "Tailored for Consultants & Educators",
          description: "We specialize in helping independent consultants and teachers rank higher locally."
        },
        {
          icon: React.createElement(IconMap, { size: 28 }),
          title: "Dominating Local Searches",
          description: "Our strategies ensure you appear in Google Maps & 3-Pack results for high-intent searches."
        },
        {
          icon: React.createElement(IconSchool, { size: 28 }),
          title: "Student & Client-Centric Approach",
          description: "We optimize content and profile engagement to attract both students and professional clients."
        },
        {
          icon: React.createElement(IconStar, { size: 28 }),
          title: "Reputation Management",
          description: "From generating 5-star reviews to managing negative feedback — we build strong trust."
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "ROI-Focused Optimization",
          description: "Every update and strategy is focused on increasing calls, inquiries, and conversions."
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 28 }),
          title: "Proven Success",
          description: "Hundreds of consultants & teachers have grown their local presence with our GMB services."
        }
      ],
      cta: {
        text: "Start Ranking Higher Today",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Proven GMB Optimization Process',
      subtitle: 'STEP-BY-STEP LOCAL VISIBILITY SYSTEM',
      className: 'border-t border-border dark:border-gray-700',
      description: 'We follow a structured, transparent process to ensure consultants & teachers maximize local visibility and lead generation.',
      steps: [
        {
          id: 1,
          title: 'Profile Setup & Audit',
          description: 'We create or audit your Google Business Profile, ensuring accuracy, categories, and compliance with best practices.'
        },
        {
          id: 2,
          title: 'Keyword & Local SEO Research',
          description: 'Target local queries like “consultant near me” or “teacher near me” to improve ranking for relevant searches.'
        },
        {
          id: 3,
          title: 'Review & Reputation Building',
          description: 'Generate authentic reviews from students and clients while managing negative feedback professionally.'
        },
        {
          id: 4,
          title: 'Content & Updates',
          description: 'Add posts, offers, photos, and Q&A content to keep your profile engaging and active.'
        },
        {
          id: 5,
          title: 'Tracking & Insights',
          description: 'Monitor calls, clicks, and direction requests directly from GMB to measure performance.'
        },
        {
          id: 6,
          title: 'Scaling & Continuous Growth',
          description: 'Optimize further with geo-tagging, service area targeting, and advanced local SEO strategies.'
        }
      ]
    },
    cta: {
      title: 'Ready to Rank Higher & Get More Leads?',
      subtitle: 'GMB OPTIMIZATION FOR CONSULTANTS & TEACHERS',
      description: 'Book a free consultation with Digi Aerotech and discover how our Google Business Profile optimization can grow your visibility, trust, and inquiries.',
    }
  }
};
