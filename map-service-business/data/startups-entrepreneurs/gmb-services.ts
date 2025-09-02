import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconMapPin, IconBuildingStore, IconRocket, IconUsers, IconStars,
  IconChartBar, IconTarget, IconWorld, IconBriefcase,
  IconTrendingUp, IconBulb, IconArrowRight
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'gmb-services',
  business: 'startups-entrepreneurs',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant3',
    process: 'variant1',
  },
  data: {
    slug: 'gmb-services-startups-entrepreneurs',
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
            { text: "GMB Challenges ", gradient: false },
            { text: "Every Startup Faces", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Launching a startup is hard, but getting discovered on Google Maps and local search can be even harder without a proper GMB strategy.",
          painPoints: [
            "Low visibility in Google Maps search",
            "Incomplete or outdated business profiles",
            "Few or no reviews reducing credibility",
            "Competitors outranking in local searches",
            "Difficulty attracting nearby customers"
          ],
          solutionPoints: [
            "Fully optimized Google My Business setup",
            "Local keyword targeting for higher rankings",
            "Review management & reputation building",
            "Consistent updates with posts, offers & photos",
            "Performance tracking to scale local presence"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Boost My Startup on Google Maps"
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
              question: 'Why is GMB important for startups?',
              answer: 'GMB builds credibility, improves local search rankings, and helps startups attract customers searching for services nearby.',
              icon: React.createElement(IconMapPin, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Can GMB really bring more clients?',
              answer: 'Yes, optimized GMB profiles show up in local packs and maps, driving high-intent traffic directly to your startup.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Do you also manage GMB reviews?',
              answer: 'Absolutely. We implement review generation and response strategies to build trust and credibility for your brand.',
              icon: React.createElement(IconStars, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Will my startup rank higher with GMB optimization?',
              answer: 'Yes. With proper keyword targeting, consistent updates, and strong reviews, startups can outrank competitors in local searches.',
              icon: React.createElement(IconChartBar, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Is GMB useful for online-first startups?',
              answer: 'Even digital startups benefit from GMB—adding credibility, building trust, and attracting investors, partners, and early adopters.',
              icon: React.createElement(IconWorld, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Put Your ",
      headlineKeywords: [
        "Startup on the Map",
        "Entrepreneurial Venture on Google",
        "Business in Local Search",
        "Brand in Front of Customers"
      ],
      brandLine: [
        { text: "📍 GMB Services That Drive Growth", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      subheadline: "We help startups and entrepreneurs dominate Google My Business with optimized listings, reviews, and local SEO strategies.",
      ctaButtons: [
        { icon: React.createElement(IconRocket, { size: 28 }), text: "Optimize My GMB", link: "/contact" },
        { icon: React.createElement(IconBulb, { size: 28 }), text: "Free GMB Audit", link: "/gmb-audit", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconBuildingStore, { size: 32 }),
          title: "300% Visibility",
          description: "increase for startups"
        },
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "5X Leads",
          description: "from local search"
        },
        {
          icon: React.createElement(IconStars, { size: 32 }),
          title: "Reputation Growth",
          description: "through reviews"
        },
        {
          icon: React.createElement(IconTarget, { size: 32 }),
          title: "High-Intent Traffic",
          description: "direct from Google Maps"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Entrepreneurs Choose Us for ", gradient: false },
        { text: "GMB Services", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconMapPin, { size: 28 }),
          title: "Local SEO Focus",
          description: "Tailored GMB strategies for startups."
        },
        {
          icon: React.createElement(IconBriefcase, { size: 28 }),
          title: "Startup-Friendly Pricing",
          description: "Affordable packages designed for growth."
        },
        {
          icon: React.createElement(IconStars, { size: 28 }),
          title: "Reputation Management",
          description: "Building credibility with strong reviews."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Faster Visibility",
          description: "Quickly appear in Maps & local packs."
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "Lead Generation",
          description: "Convert searches into real customers."
        },
        {
          icon: React.createElement(IconBulb, { size: 28 }),
          title: "Growth Guidance",
          description: "Beyond GMB—strategic support for startups."
        }
      ],
      cta: {
        text: "Rank My Startup Higher",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our GMB Process for Startups',
      subtitle: 'FROM SETUP TO SCALE',
      className: 'border-t border-border dark:border-gray-700',
      description: 'We take a step-by-step approach to help startups dominate Google My Business and attract high-intent leads.',
      steps: [
        {
          id: 1,
          title: 'GMB Setup & Audit',
          description: 'We claim, verify, and audit your GMB profile, ensuring every detail aligns with Google’s best practices for startups.'
        },
        {
          id: 2,
          title: 'Profile Optimization',
          description: 'Business details, categories, and local keywords are optimized for maximum visibility in Maps and search results.'
        },
        {
          id: 3,
          title: 'Content & Posts',
          description: 'We publish regular GMB posts, offers, photos, and updates to keep your profile active and engaging for potential clients.'
        },
        {
          id: 4,
          title: 'Review & Reputation Building',
          description: 'We implement strategies to encourage positive reviews, manage responses, and strengthen your startup’s credibility.'
        },
        {
          id: 5,
          title: 'Insights & Reporting',
          description: 'Performance is tracked through GMB insights, showing calls, visits, and direction requests to measure growth.'
        },
        {
          id: 6,
          title: 'Scaling & Local SEO',
          description: 'We integrate GMB optimization with broader local SEO tactics to continuously boost rankings and customer acquisition.'
        }
      ]
    },
    cta: {
      title: 'Put Your Startup on Google Maps',
      subtitle: 'FROM VISIBILITY TO CUSTOMERS',
      description: 'Get more local visibility, credibility, and clients with our startup-focused GMB optimization services.'
    }
  }
};
