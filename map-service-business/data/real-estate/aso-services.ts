import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconBuildingSkyscraper, IconHome2, IconTrendingUp, IconUsers, 
  IconKey, IconSearch, IconShieldCheck, IconDownload, IconArrowRight
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'aso-services',
  business: 'real-estate',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant3',
    process: 'variant1',
    testimonials: 'variant2'
  },
  data: {
    slug: 'aso-services-real-estate',
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
            { text: "Challenges Real Estate Apps", gradient: false },
            { text: "Face in Getting Installs", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Property apps for buying, renting, and selling often struggle to stand out in a highly competitive market dominated by big listing platforms.",
          painPoints: [
            "Low visibility in Google Play & App Store search",
            "High competition from property giants like 99acres, MagicBricks, Zillow",
            "Low app engagement & uninstall rate",
            "Weak keyword optimization for property searches",
            "Lack of trust & fewer authentic reviews"
          ],
          solutionPoints: [
            "App Store keyword research for real estate search terms",
            "Optimized titles, descriptions & visuals for higher ranking",
            "Engaging screenshots & video previews that convert",
            "Review generation strategies for better credibility",
            "Ongoing ASO updates to match property market trends"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Boost Your Real Estate App Installs"
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
              question: 'How can ASO help my property app?',
              answer: 'ASO improves your app visibility in Google Play & App Store, ensuring property seekers find and install your app easily.',
              icon: React.createElement(IconSearch, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Can ASO increase property inquiries?',
              answer: 'Yes. With better visibility and conversion-optimized creatives, more installs turn into leads for buying, selling, or renting properties.',
              icon: React.createElement(IconKey, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Do you help with app reviews & ratings?',
              answer: 'Absolutely. We implement strategies to collect authentic reviews and improve app ratings, building trust with property seekers.',
              icon: React.createElement(IconShieldCheck, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'How soon can I see results from ASO?',
              answer: 'You’ll start noticing visibility improvements within 4–6 weeks. Leads & installs grow consistently as optimization continues.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Want ",
      headlineKeywords: [
        "More App Installs?",
        "High-Quality Property Leads?",
        "Top Ranking in Play Store?",
        "Better Reviews & Trust?",
        "ASO Growth for Real Estate?"
      ],
      brandLine: [
        { text: "🏡 Boost Your Real Estate App Downloads with Proven ASO Strategies", gradient: false }
      ],
      subheadline: "We optimize real estate apps to rank higher, attract more downloads, and convert installs into property inquiries & sales.",
      ctaButtons: [
        { icon: React.createElement(IconDownload, { size: 28 }), text: "Get Free ASO Audit", link: "/contact" },
        { icon: React.createElement(IconUsers, { size: 28 }), text: "Talk to ASO Experts", link: "tel:+918607119872", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconBuildingSkyscraper, { size: 32 }),
          title: "200+ Real Estate Apps",
          description: "Optimized for higher ranking & downloads"
        },
        {
          icon: React.createElement(IconHome2, { size: 32 }),
          title: "50K+ Property Leads",
          description: "Generated through ASO growth strategies"
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "3X App Visibility",
          description: "Boosted installs & inquiries in 3 months"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Digi Aerotech for ", gradient: false },
        { text: "Real Estate App ASO?", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconSearch, { size: 28 }),
          title: "Property Keyword Expertise",
          description: "We research and rank your app for competitive real estate keywords."
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "Boost Installs & Engagement",
          description: "Optimized visuals & creatives that make users download and stay."
        },
        {
          icon: React.createElement(IconKey, { size: 28 }),
          title: "Lead-Driven Strategy",
          description: "Focus on generating property buyer, seller & tenant leads."
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 28 }),
          title: "Trust & Review Growth",
          description: "We help collect reviews that improve rankings & user trust."
        }
      ],
      cta: {
        text: "Get More Installs Now",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our ASO Process for Real Estate Apps',
      subtitle: 'STEP-BY-STEP OPTIMIZATION',
      className: 'border-t border-border dark:border-gray-700',
      description: 'From keyword research to visuals and review management, our ASO process ensures your real estate app dominates search rankings and drives more installs.',
      steps: [
        {
          id: 1,
          title: 'App Store Audit',
          description: 'We analyze your app’s current performance, competition, and discoverability issues in property-related search queries.'
        },
        {
          id: 2,
          title: 'Keyword Research',
          description: 'We identify high-volume, low-competition keywords like "buy house app", "rent property app", "real estate listings" to optimize your app store presence.'
        },
        {
          id: 3,
          title: 'Creative Optimization',
          description: 'From icons to screenshots and preview videos, we design visuals that increase clicks and downloads.'
        },
        {
          id: 4,
          title: 'Conversion Optimization',
          description: 'We write compelling app titles, descriptions & CTAs to boost installs and property inquiries.'
        },
        {
          id: 5,
          title: 'Review & Rating Management',
          description: 'We implement feedback loops to collect positive reviews, improving credibility and rankings.'
        },
        {
          id: 6,
          title: 'Ongoing ASO & Updates',
          description: 'Continuous tracking, updates, and trend-based keyword tweaks keep your app on top.'
        }
      ]
    },
    testimonials: {
      title: [
        { text: "Real Estate Apps That", gradient: false },
        { text: "Scaled with Our ASO", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      description: 'See how Digi Aerotech helped property apps boost installs, rankings, and generate consistent property inquiries.',
      testimonials: [
        {
          id: '1',
          message: 'Our property rental app saw a 250% increase in downloads within 3 months thanks to Digi Aerotech’s ASO strategies.',
          highlight: '250% increase in downloads',
          stars: 5,
          name: 'Rohit Malhotra',
          designation: 'Founder',
          company: 'RentEasy'
        },
        {
          id: '2',
          message: 'They helped us rank in the top 5 for "buy house app" keyword — property inquiries doubled in 2 months!',
          highlight: 'rank in the top 5',
          stars: 5,
          name: 'Anita Kapoor',
          designation: 'CEO',
          company: 'DreamHomes'
        }
      ]
    },
    cta: {
      title: 'Ready to Skyrocket Your Real Estate App Installs?',
      subtitle: 'TURN DOWNLOADS INTO PROPERTY LEADS',
      description: 'Book a free ASO audit with Digi Aerotech and discover how we can scale your real estate app to the top of app stores.'
    }
  }
};
