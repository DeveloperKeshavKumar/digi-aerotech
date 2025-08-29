import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconBuildingCommunity, IconMapPin, IconPhoneCall, IconTrendingUp,
  IconHome2, IconUsers, IconShieldCheck, IconArrowRight
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'gmb-services',
  business: 'real-estate',
  variants: {
    hero: 'variant1',
    whyChooseUs: 'variant2',
    process: 'variant3',
    testimonials: 'variant1'
  },
  data: {
    slug: 'gmb-services-real-estate',
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
            { text: "Why Real Estate Businesses", gradient: false },
            { text: "Struggle on Google Maps", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Even with great listings, many real estate agencies miss out on clients because their Google Business Profile isn’t optimized.",
          painPoints: [
            "Not ranking in 'near me' property searches",
            "Incomplete or outdated Google listings",
            "Poor review ratings hurting credibility",
            "Low call & inquiry conversions",
            "High competition from local agencies"
          ],
          solutionPoints: [
            "GMB profile optimization with complete details",
            "Local SEO strategies to boost map rankings",
            "Review & rating management for trust",
            "Geo-tagged posts, photos & property updates",
            "Call tracking & inquiry optimization"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Dominate Local Property Searches"
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
              question: 'How does GMB help in real estate?',
              answer: 'When people search for “real estate agents near me” or “houses for sale in [city]”, an optimized GMB profile ensures your business shows up first.',
              icon: React.createElement(IconMapPin, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Can GMB generate real estate leads?',
              answer: 'Yes. An optimized profile brings direct calls, website visits, and in-person inquiries — the highest quality leads for property sales and rentals.',
              icon: React.createElement(IconPhoneCall, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Do reviews impact ranking?',
              answer: 'Absolutely. Positive reviews not only boost rankings but also increase trust, making property seekers more likely to contact you.',
              icon: React.createElement(IconShieldCheck, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'How fast can I see results?',
              answer: 'Most real estate businesses see improved visibility within 30-45 days, with lead growth continuing as optimization builds up.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Want ",
      headlineKeywords: [
        "More Property Leads?",
        "Calls Directly from Google?",
        "Top Ranking on Maps?",
        "Higher Trust & Reviews?",
        "Local Real Estate Visibility?"
      ],
      brandLine: [
        { text: "📍 Get Found on Google Maps & Drive Property Leads", gradient: false }
      ],
      subheadline: "We optimize Google Business Profiles for real estate agencies, brokers, and consultants to generate high-intent property leads directly from Google Search & Maps.",
      ctaButtons: [
        { icon: React.createElement(IconPhoneCall, { size: 28 }), text: "Get Free GMB Audit", link: "/contact" },
        { icon: React.createElement(IconUsers, { size: 28 }), text: "Talk to GMB Experts", link: "tel:+918607119872", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconBuildingCommunity, { size: 32 }),
          title: "500+ Agencies Optimized",
          description: "Improved map rankings & leads"
        },
        {
          icon: React.createElement(IconHome2, { size: 32 }),
          title: "5,000+ Property Inquiries",
          description: "Generated via Google Maps optimization"
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "4.7★ Avg Ratings",
          description: "Boosted trust & visibility"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Digi Aerotech for ", gradient: false },
        { text: "Real Estate GMB Optimization?", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconMapPin, { size: 28 }),
          title: "Local SEO Expertise",
          description: "Rank your real estate office in top map results."
        },
        {
          icon: React.createElement(IconPhoneCall, { size: 28 }),
          title: "Direct Call Leads",
          description: "Convert Google searches into property inquiries."
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 28 }),
          title: "Review Growth Strategy",
          description: "Generate positive reviews to build buyer trust."
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "Custom Optimization",
          description: "Tailored strategies for agencies, brokers & consultants."
        }
      ],
      cta: {
        text: "Boost Local Real Estate Leads",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our GMB Optimization Process for Real Estate',
      subtitle: 'STEP-BY-STEP LOCAL GROWTH',
      className: 'border-t border-border dark:border-gray-700',
      description: 'We implement proven GMB strategies to get your real estate agency discovered faster by buyers, sellers, and tenants.',
      steps: [
        {
          id: 1,
          title: 'Profile Audit & Setup',
          description: 'We audit your GMB profile, complete missing info, and set up NAP (Name, Address, Phone) consistency for local SEO trust.'
        },
        {
          id: 2,
          title: 'Category & Keyword Optimization',
          description: 'Optimizing categories like “Real Estate Agency” and targeting keywords like “property brokers near me” for map rankings.'
        },
        {
          id: 3,
          title: 'Photos & Geo-Tagging',
          description: 'Uploading property photos, office images & geo-tagged visuals to boost map visibility.'
        },
        {
          id: 4,
          title: 'Review Management',
          description: 'We help you gain and respond to positive reviews to improve ranking & trust.'
        },
        {
          id: 5,
          title: 'Posts & Property Updates',
          description: 'Regular updates with property listings, offers, and posts to keep your GMB active and engaging.'
        },
        {
          id: 6,
          title: 'Tracking & Growth',
          description: 'We monitor calls, clicks, and inquiries to measure ROI and scale results.'
        }
      ]
    },
    testimonials: {
      title: [
        { text: "Real Estate Agencies That", gradient: false },
        { text: "Won with Our GMB Services", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      description: 'See how our GMB optimization helped brokers and agencies generate more walk-ins and property inquiries.',
      testimonials: [
        {
          id: '1',
          message: 'We started getting daily calls for property inquiries just from Google Maps after optimization!',
          highlight: 'daily property calls',
          stars: 5,
          name: 'Vikas Sharma',
          designation: 'Broker',
          company: 'Sharma Realty'
        },
        {
          id: '2',
          message: 'Our agency jumped to the top 3 listings on Google Maps and leads grew by 3X in 2 months.',
          highlight: '3X more leads',
          stars: 5,
          name: 'Neha Gupta',
          designation: 'Director',
          company: 'DreamHome Realtors'
        }
      ]
    },
    cta: {
      title: 'Ready to Generate Daily Real Estate Leads?',
      subtitle: 'GET DISCOVERED ON GOOGLE MAPS',
      description: 'Partner with Digi Aerotech for GMB optimization and start converting local property searches into real inquiries.',
    }
  }
};
