import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconMapPin, IconUsers, IconSearch, IconStar, IconPhone, IconChartArcs,
  IconWorld, IconArrowRight, IconBuildingStore, IconTrendingUp, IconRocket
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'gmb-services',
  business: 'b2c-services',
  variants: {
    hero: 'variant3',
    whyChooseUs: 'variant1',
    process: 'variant2',
    testimonials: 'variant3'
  },
  data: {
    slug: 'gmb-services-b2c',
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
            { text: "Why Local B2C Brands Struggle ", gradient: false },
            { text: "Without GMB Optimization", gradient: true, gradientClass: "from-green-500 via-teal-500 to-blue-500" }
          ],
          subheadline: "Being invisible on Google Maps and Search means losing customers every single day. Most B2C businesses ignore their Google Business Profile, letting competitors take the spotlight.",
          painPoints: [
            "Not showing up in Google Maps or local searches",
            "Incomplete or outdated business profiles",
            "Low visibility in the Google 3-Pack",
            "Few or negative customer reviews",
            "Competitors ranking higher locally",
            "Missed leads from calls, directions, and website visits"
          ],
          solutionPoints: [
            "Complete GMB setup & optimization with keywords",
            "Consistent business info across platforms",
            "Boost rankings in Google 3-Pack & Maps",
            "Review generation & reputation management",
            "Engaging posts, photos & offers for higher engagement",
            "Track calls, visits & leads from your GMB profile"
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
              question: 'Why is Google My Business important for B2C businesses?',
              answer: 'GMB ensures your business appears when people search for services near them, driving more walk-ins, calls, and leads.',
              icon: React.createElement(IconMapPin, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Can GMB optimization increase foot traffic?',
              answer: 'Yes. An optimized profile helps more customers discover your store, call you directly, or get directions.',
              icon: React.createElement(IconBuildingStore, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Do you manage reviews and ratings?',
              answer: 'Absolutely. We help you get more positive reviews, respond to feedback, and build a trusted reputation.',
              icon: React.createElement(IconStar, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Will I rank higher than competitors?',
              answer: 'We use advanced local SEO strategies to improve your chances of appearing above competitors in local results.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Can you track leads from GMB?',
              answer: 'Yes. We provide reports on calls, clicks, and directions from your GMB profile so you see real ROI.',
              icon: React.createElement(IconChartArcs, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'Do you work with all B2C industries?',
              answer: 'Yes. From salons, gyms, and spas to restaurants, retail, and healthcare, we help all B2C businesses grow locally.',
              icon: React.createElement(IconWorld, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Get Found. Get Customers.",
      headlineKeywords: [
        "GMB Services for B2C Businesses",
        "Local SEO via Google Maps",
        "Boost Walk-ins & Calls",
        "Rank in Google 3-Pack",
        "Attract Local Customers"
      ],
      brandLine: [
        { text: "📍 Google My Business Optimization Experts", gradient: false }
      ],
      subheadline: "At Digi Aerotech, we help B2C businesses dominate local searches with optimized Google Business Profiles that attract more walk-ins, calls, and paying customers.",
      ctaButtons: [
        { icon: React.createElement(IconRocket, { size: 28 }), text: "Boost My GMB", link: "/contact" },
        { icon: React.createElement(IconPhone, { size: 28 }), text: "Get Free GMB Audit", link: "/audit", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconSearch, { size: 32 }),
          title: "92% Local Searches",
          description: "92% of local searches end in a visit or call"
        },
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "More Walk-ins",
          description: "GMB drives direct foot traffic to your business"
        },
        {
          icon: React.createElement(IconStar, { size: 32 }),
          title: "Trusted Reputation",
          description: "Positive reviews build instant customer trust"
        },
        {
          icon: React.createElement(IconPhone, { size: 32 }),
          title: "Direct Calls",
          description: "Turn searches into calls & confirmed bookings"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Top B2C Businesses Trust ", gradient: false },
        { text: "Digi Aerotech for GMB Services", gradient: true, gradientClass: "from-green-500 via-teal-500 to-blue-500" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconMapPin, { size: 28 }),
          title: "Local SEO Experts",
          description: "We specialize in helping B2C businesses rank higher on Google Maps & Search."
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "Customer-Centric",
          description: "Our strategies are built to drive real customers — not vanity numbers."
        },
        {
          icon: React.createElement(IconStar, { size: 28 }),
          title: "Reputation Building",
          description: "We generate authentic reviews to boost trust & credibility."
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Proven ROI",
          description: "Transparent reports show calls, visits, and real business impact."
        },
        {
          icon: React.createElement(IconPhone, { size: 28 }),
          title: "Lead Tracking",
          description: "Track every call and inquiry directly from your GMB profile."
        },
        {
          icon: React.createElement(IconBuildingStore, { size: 28 }),
          title: "Industry-Wide Success",
          description: "From gyms to restaurants, we’ve boosted visibility for multiple B2C industries."
        }
      ],
      cta: {
        text: "Dominate Local Searches",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Proven GMB Optimization Process',
      subtitle: 'FROM INVISIBLE TO UNMISSABLE',
      description: 'We transform your Google Business Profile into a lead-generating machine for your B2C business.',
      steps: [
        { id: 1, title: 'Audit & Setup', description: 'We review your profile or create one from scratch with complete info.' },
        { id: 2, title: 'Keyword Optimization', description: 'We optimize your profile with local keywords & categories.' },
        { id: 3, title: 'Photos & Posts', description: 'We upload engaging photos, offers, and posts to attract customers.' },
        { id: 4, title: 'Review Management', description: 'We help generate positive reviews & manage customer feedback.' },
        { id: 5, title: 'Rank Boost', description: 'We apply advanced local SEO techniques to push you into the Google 3-Pack.' },
        { id: 6, title: 'Reports & Tracking', description: 'Get transparent reports on calls, directions, and profile engagement.' }
      ]
    },
    testimonials: {
      title: [
        { text: "B2C Brands That ", gradient: false },
        { text: "Won with GMB", gradient: true, gradientClass: "from-green-500 via-teal-500 to-blue-500" }
      ],
      description: 'From local gyms and cafes to salons and clinics, Digi Aerotech has helped B2C businesses dominate local search and attract more customers.',
      testimonials: [
        {
          id: '1',
          message: 'Our salon now gets 3x more walk-ins just from Google Maps. Digi Aerotech made us visible when it mattered most.',
          highlight: '3x more walk-ins',
          stars: 5,
          name: 'Pooja Verma',
          designation: 'Owner',
          company: 'Glow Beauty Salon'
        },
        {
          id: '2',
          message: 'We used to struggle with low online presence. Now 40% of our new customers find us through GMB!',
          highlight: '40% new customers via GMB',
          stars: 5,
          name: 'Rahul Malhotra',
          designation: 'Manager',
          company: 'FitZone Gym'
        }
      ]
    },
    cta: {
      title: 'Ready to Dominate Local Google Searches?',
      subtitle: 'WALK-INS. CALLS. CUSTOMERS.',
      description: 'Let Digi Aerotech optimize your Google My Business profile so your B2C brand becomes the first choice when customers search nearby.',
    }
  }
};
