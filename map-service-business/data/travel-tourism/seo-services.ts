import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconSearch, IconGlobe, IconPlane, IconStar, IconHeart,
  IconTrendingUp, IconWorldSearch, IconMapPin, IconRocket,
  IconDeviceAnalytics, IconArrowRight, IconLink, IconChartArrows
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'seo-services',
  business: 'travel-tourism',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant3',
    process: 'variant1',
    testimonials: 'variant1'
  },
  data: {
    slug: 'seo-services-travel-tourism',
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
            { text: "SEO Challenges Travel ", gradient: false },
            { text: "Websites Face Online", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Ranking a travel website is tougher than ever. High competition, seasonal demand, and Google algorithm updates make visibility difficult without expert SEO.",
          painPoints: [
            "Not ranking for top travel keywords",
            "Seasonal drops in organic traffic",
            "High competition from OTAs & big brands",
            "Low visibility on Google Maps & local SEO",
            "Weak backlinks & poor domain authority"
          ],
          solutionPoints: [
            "Advanced keyword research for travel intent",
            "On-page & technical SEO optimization",
            "Content strategy aligned with travel seasons",
            "Google Maps & local SEO dominance",
            "High-quality link building & authority growth"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Boost My Travel SEO"
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
              question: 'Why is SEO important for travel businesses?',
              answer: 'SEO ensures your travel agency, tours, or packages appear on Google when travelers search. It drives consistent bookings without heavy ad spend.',
              icon: React.createElement(IconSearch, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Do you optimize for seasonal travel keywords?',
              answer: 'Yes. We align SEO with travel trends, seasonal destinations, and peak booking months to maximize organic visibility year-round.',
              icon: React.createElement(IconPlane, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Can you help rank on Google Maps?',
              answer: 'Absolutely. We optimize your Google Business Profile and implement local SEO strategies to attract travelers searching nearby.',
              icon: React.createElement(IconMapPin, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Do you provide link-building services?',
              answer: 'Yes, we acquire quality backlinks from travel blogs, guides, and directories to boost domain authority and rankings.',
              icon: React.createElement(IconLink, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'How do you track SEO performance?',
              answer: 'We provide detailed reports on keyword rankings, traffic, leads, and ROI so you can measure growth clearly.',
              icon: React.createElement(IconDeviceAnalytics, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'How long until results show?',
              answer: 'SEO is long-term, but most travel clients see measurable improvements in 3–6 months depending on competition and niche.',
              icon: React.createElement(IconChartArrows, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Struggling to Rank Your ",
      headlineKeywords: [
        "Travel Agency?",
        "Tour Packages?",
        "Holiday Deals?",
        "Adventure Trips?",
        "Luxury Stays?"
      ],
      brandLine: [
        { text: "🌍 Travel SEO That Drives Bookings", gradient: false }
      ],
      subheadline: "We optimize your travel website for Google, Maps, and beyond — bringing more traffic, leads, and confirmed bookings.",
      ctaButtons: [
        { icon: React.createElement(IconRocket, { size: 28 }), text: "Get SEO Strategy", link: "/contact" },
        { icon: React.createElement(IconHeart, { size: 28 }), text: "Free SEO Audit", link: "/seo-audit", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconWorldSearch, { size: 32 }),
          title: "1M+ Searches",
          description: "optimized for travel keywords"
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "Top Rankings",
          description: "achieved for travel agencies"
        },
        {
          icon: React.createElement(IconStar, { size: 32 }),
          title: "85% Organic Leads",
          description: "generated for clients"
        },
        {
          icon: React.createElement(IconGlobe, { size: 32 }),
          title: "Global Reach",
          description: "SEO for international travelers"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Digi Aerotech for ", gradient: false },
        { text: "Travel SEO Services", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconSearch, { size: 28 }),
          title: "Travel-Specific Keywords",
          description: "Targeting seasonal & high-intent travel terms."
        },
        {
          icon: React.createElement(IconMapPin, { size: 28 }),
          title: "Local SEO Mastery",
          description: "Rank higher on Google Maps & location searches."
        },
        {
          icon: React.createElement(IconWorldSearch, { size: 28 }),
          title: "On-Page SEO",
          description: "Meta tags, schema & content for higher rankings."
        },
        {
          icon: React.createElement(IconLink, { size: 28 }),
          title: "Authority Backlinks",
          description: "Building strong links from travel portals & blogs."
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Analytics & Reporting",
          description: "Transparent SEO reports with measurable results."
        },
        {
          icon: React.createElement(IconGlobe, { size: 28 }),
          title: "Global + Local Reach",
          description: "Optimizing for international and domestic travelers."
        }
      ],
      cta: {
        text: "Rank My Travel Website",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Travel SEO Process',
      subtitle: 'TURN SEARCHES INTO BOOKINGS',
      className: 'border-t border-border dark:border-gray-700',
      description: 'Our SEO strategies are built to capture travel intent, dominate search engines, and maximize conversions.',
      steps: [
        {
          id: 1,
          title: 'Keyword Research',
          description: 'We analyze global, local, and seasonal travel searches to target the right keywords that drive booking intent.'
        },
        {
          id: 2,
          title: 'On-Page Optimization',
          description: 'Optimizing meta tags, content, headings, and schema markup for higher relevance and rankings.'
        },
        {
          id: 3,
          title: 'Content Strategy',
          description: 'We create blogs, destination guides, and itineraries optimized for SEO while engaging travelers.'
        },
        {
          id: 4,
          title: 'Technical SEO',
          description: 'Fixing speed, crawlability, mobile usability, and site structure to improve visibility.'
        },
        {
          id: 5,
          title: 'Local SEO',
          description: 'Google Business Profile optimization, reviews, and citations for more local bookings.'
        },
        {
          id: 6,
          title: 'Link Building',
          description: 'Acquiring high-authority backlinks from travel blogs, directories, and news sites.'
        },
        {
          id: 7,
          title: 'Tracking & Reporting',
          description: 'Detailed reports with keyword rankings, traffic growth, and conversion insights.'
        }
      ]
    },
    testimonials: {
      title: [
        { text: "SEO Success Stories from ", gradient: false },
        { text: "Travel Businesses", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      description: 'Our SEO campaigns helped travel agencies, tour operators, and booking platforms dominate search results and drive organic bookings.',
      testimonials: [
        {
          id: '1',
          message: 'Within 6 months, our website ranked for top travel keywords. We now get 60% more organic bookings.',
          highlight: '60% more organic bookings',
          stars: 5,
          name: 'Priya Nair',
          designation: 'CEO',
          company: 'Dreamscape Travels'
        },
        {
          id: '2',
          message: 'They helped us rank locally on Google Maps and attract international travelers searching our destination.',
          highlight: 'rank locally on Google Maps',
          stars: 5,
          name: 'Amit Kapoor',
          designation: 'Founder',
          company: 'Global Horizon Tours'
        }
      ]
    },
    cta: {
      title: 'Boost Your Travel Website Rankings & Bookings',
      subtitle: 'SEO THAT DRIVES RESULTS',
      description: 'Get a tailored travel SEO plan from Digi Aerotech and start ranking higher on Google, Maps, and beyond.'
    }
  }
};
