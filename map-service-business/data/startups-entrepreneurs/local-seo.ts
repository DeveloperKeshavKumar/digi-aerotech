import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconMapPin, IconSearch, IconRocket, IconTrendingUp,
  IconBuildingStore, IconWorld, IconChartBar, IconStars,
  IconPhoneCall, IconArrowRight, IconUsers
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'local-seo',
  business: 'startups-entrepreneurs',
  variants: {
    hero: 'variant3',
    whyChooseUs: 'variant2',
    process: 'variant1',
  },
  data: {
    slug: 'local-seo-startups-entrepreneurs',
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
            { text: "Why Most Startups Struggle with ", gradient: false },
            { text: "Local SEO", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Without local visibility, startups lose out on nearby customers searching for their products or services.",
          painPoints: [
            "Low visibility in Google Maps & local search",
            "Incomplete or outdated business listings",
            "Struggling to compete with established local players",
            "Poor reviews damaging trust",
            "Difficulty driving calls, visits, or inquiries"
          ],
          solutionPoints: [
            "Complete Google My Business setup & optimization",
            "Local keyword targeting for maximum reach",
            "NAP (Name, Address, Phone) consistency across directories",
            "Review generation & reputation management",
            "Hyperlocal content strategy & geo-targeted SEO"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Boost My Local Rankings"
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
              question: 'What is Local SEO for startups?',
              answer: 'Local SEO helps your startup appear in Google Maps, “near me” searches, and local business listings to attract nearby customers.',
              icon: React.createElement(IconMapPin, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'How does Local SEO generate leads for entrepreneurs?',
              answer: 'By ranking higher in local searches, your startup gets more calls, store visits, and website inquiries from nearby customers actively looking for your services.',
              icon: React.createElement(IconPhoneCall, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Do you also optimize Google My Business?',
              answer: 'Yes. We optimize and manage your GMB profile with posts, images, reviews, and accurate business details to maximize visibility.',
              icon: React.createElement(IconBuildingStore, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Can startups compete with established local businesses?',
              answer: 'Absolutely. With the right keywords, reviews, and consistent citations, even new startups can outrank larger competitors locally.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'How soon can I see results from Local SEO?',
              answer: 'You can see visibility improvements in 4–6 weeks, with steady growth in calls, inquiries, and store visits within 2–3 months.',
              icon: React.createElement(IconRocket, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Grow Your Startup with ",
      headlineKeywords: [
        "Local SEO",
        "Google Maps Rankings",
        "Nearby Customers",
        "Trusted Visibility"
      ],
      brandLine: [
        { text: "📍 Attract Local Customers & Build Startup Credibility", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      subheadline: "We help startups and entrepreneurs dominate local search results, attract nearby customers, and build trust through powerful Local SEO strategies.",
      ctaButtons: [
        { icon: React.createElement(IconMapPin, { size: 28 }), text: "Rank My Business Locally", link: "/contact" },
        { icon: React.createElement(IconChartBar, { size: 28 }), text: "Free Local SEO Audit", link: "/local-seo-audit", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "300% More Visibility",
          description: "in local Google searches"
        },
        {
          icon: React.createElement(IconPhoneCall, { size: 32 }),
          title: "Increase Calls",
          description: "directly from Google Maps"
        },
        {
          icon: React.createElement(IconWorld, { size: 32 }),
          title: "Higher Local CTR",
          description: "boosts inquiries & visits"
        },
        {
          icon: React.createElement(IconStars, { size: 32 }),
          title: "Stronger Reputation",
          description: "with more positive reviews"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Entrepreneurs Trust Us for ", gradient: false },
        { text: "Local SEO", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconMapPin, { size: 28 }),
          title: "Google Maps Domination",
          description: "Appear in the top 3 Google Maps listings."
        },
        {
          icon: React.createElement(IconSearch, { size: 28 }),
          title: "Local Keyword Mastery",
          description: "Rank for 'near me' and city-based searches."
        },
        {
          icon: React.createElement(IconBuildingStore, { size: 28 }),
          title: "GMB Optimization",
          description: "Fully optimized Google My Business profile."
        },
        {
          icon: React.createElement(IconStars, { size: 28 }),
          title: "Review Management",
          description: "Generate positive reviews & manage reputation."
        },
        {
          icon: React.createElement(IconChartBar, { size: 28 }),
          title: "Data-Driven SEO",
          description: "Track calls, clicks, and conversions."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Startup-Friendly Pricing",
          description: "Affordable Local SEO plans for new businesses."
        }
      ],
      cta: {
        text: "Dominate My Local Market",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Local SEO Process for Startups',
      subtitle: 'FROM SEARCH TO SALES',
      className: 'border-t border-border dark:border-gray-700',
      description: 'We build your startup’s presence across Google Maps, directories, and local searches so nearby customers can easily find & trust you.',
      steps: [
        {
          id: 1,
          title: 'Local SEO Audit',
          description: 'We evaluate your startup’s current visibility, competition, and GMB presence to identify gaps and quick-win opportunities.'
        },
        {
          id: 2,
          title: 'Google My Business Optimization',
          description: 'We fully optimize your GMB profile with categories, descriptions, images, posts, and Q&A for maximum local visibility.'
        },
        {
          id: 3,
          title: 'Local Keyword Strategy',
          description: 'We target high-intent, location-based keywords like “best startup services near me” or “[city] entrepreneur solutions.”'
        },
        {
          id: 4,
          title: 'Citations & Listings',
          description: 'We ensure your Name, Address, and Phone (NAP) details are consistent across 50+ directories to boost search engine trust.'
        },
        {
          id: 5,
          title: 'Reviews & Reputation',
          description: 'We implement systems to get more positive customer reviews and manage feedback, building credibility for your startup.'
        },
        {
          id: 6,
          title: 'Tracking & Scaling',
          description: 'We monitor calls, directions, and website clicks to measure ROI, then scale strategies for exponential local growth.'
        }
      ]
    },
    cta: {
      title: 'Win Customers with Local SEO',
      subtitle: 'FROM VISIBILITY TO TRUST',
      description: 'Our Local SEO services put your startup on the map — literally. Get discovered by nearby customers ready to buy.',
    }
  }
};
