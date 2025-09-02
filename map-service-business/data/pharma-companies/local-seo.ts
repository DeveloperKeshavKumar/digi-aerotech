import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  IconMapPin,
  IconSearch,
  IconPill,
  IconBuildingSkyscraper,
  IconTrendingUp,
  IconUsers,
  IconChartBar,
  IconArrowRight,
} from "@tabler/icons-react";

export const map: ServiceBusinessMap = {
  service: "local-seo",
  business: "pharma-companies",
  variants: {
    hero: "variant1",
    whyChooseUs: "variant3",
    process: "variant2",
  },
  data: {
    slug: "local-seo-pharma-companies",
    showSections: {
      hero: true,
      whyChooseUs: true,
      process: true,
      testimonials: true,
      cta: true,
    },
    customSections: [
      {
        component: Struggles,
        position: "beforeWhyChooseUs",
        props: {
          title: [
            { text: "Why Pharma Companies", gradient: false },
            { text: "Need Local SEO", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "With healthcare and medicine purchases often being location-based, ranking locally is critical for pharma growth. Yet, many pharma companies struggle to appear in local searches, losing out to competitors.",
          painPoints: [
            "Pharma distributors not ranking for local searches",
            "Retail pharmacies invisible on Google Maps",
            "Missed opportunities for ‘near me’ searches",
            "Low visibility for wholesale medicine suppliers",
            "Competitors dominating local directories",
          ],
          solutionPoints: [
            "Dominate local Google search results",
            "Appear in top 3 positions of Google Maps Pack",
            "Boost visibility for distributors & retailers",
            "Optimize for ‘near me’ and city-based keywords",
            "Build trust with local patients & healthcare providers",
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Boost Pharma Visibility Locally",
          },
        },
      },
      {
        component: FaqSection,
        position: "afterTestimonials",
        props: {
          faqs: [
            {
              id: "faq-1",
              question: "How does Local SEO help pharma companies?",
              answer:
                "Local SEO helps your pharmacy, distributor, or wholesale business appear in Google’s local searches and Maps, driving footfall and B2B inquiries.",
              icon: React.createElement(IconMapPin, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "Can pharma manufacturers also benefit?",
              answer:
                "Yes, manufacturers targeting hospitals, clinics, and distributors in specific regions see higher leads and stronger visibility.",
              icon: React.createElement(IconBuildingSkyscraper, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "Do you optimize Google Business Profile?",
              answer:
                "Absolutely. We optimize and manage your pharma company’s Google Business Profile for maximum local visibility.",
              icon: React.createElement(IconSearch, { size: 22 }),
            },
            {
              id: "faq-4",
              question: "How fast can I see results with Local SEO?",
              answer:
                "Most pharma businesses notice improvements in 4–8 weeks, with stronger rankings and more local inquiries over time.",
              icon: React.createElement(IconTrendingUp, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Rank",
      headlineKeywords: [
        "Pharma Distributors Near Me",
        "Local Pharma Companies",
        "Retail Pharmacy SEO",
        "Medicine Suppliers",
      ],
      brandLine: [
        {
          text: "📍 Local SEO for Pharma Companies That Drives Real Patients & Distributors",
          gradient: true,
          gradientClass: "from-orange-500 via-pink-500 to-red-600",
        },
      ],
      subheadline:
        "We help pharma companies, distributors, and pharmacies dominate local searches, Google Maps, and ‘near me’ results to generate high-quality local leads.",
      ctaButtons: [
        {
          icon: React.createElement(IconArrowRight, { size: 28 }),
          text: "Start Local SEO for Pharma",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "3X Footfall",
          description: "Increase in local pharmacy visits",
        },
        {
          icon: React.createElement(IconChartBar, { size: 32 }),
          title: "70% More Leads",
          description: "From ‘near me’ Google searches",
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "Top 3 Rankings",
          description: "In Google Maps for pharma queries",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Us for", gradient: false },
        { text: "Pharma Local SEO?", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(IconMapPin, { size: 28 }),
          title: "Maps Pack Domination",
          description: "We place your pharmacy or distributor in the top 3 of Google Maps, driving instant trust & visibility.",
        },
        {
          icon: React.createElement(IconSearch, { size: 28 }),
          title: "‘Near Me’ Optimization",
          description: "We optimize keywords like ‘pharmacy near me’ or ‘medicine distributor in [city]’ for better local reach.",
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Proven Pharma SEO",
          description: "Our strategies are tailored to the unique compliance and visibility needs of the pharma industry.",
        },
        {
          icon: React.createElement(IconPill, { size: 28 }),
          title: "Trust & Authority",
          description: "By improving reviews, citations, and listings, we help pharma companies build local credibility.",
        },
      ],
      cta: {
        text: "Boost Pharma SEO Locally",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our Pharma Local SEO Process",
      subtitle: "FROM MAPS TO LEADS",
      className: "border-t border-border dark:border-gray-700",
      description:
        "We follow a structured approach to improve local rankings for pharma companies, ensuring better visibility and stronger local lead generation.",
      steps: [
        {
          id: 1,
          title: "Local Market Research",
          description: "We analyze local demand, competitor pharmacies, and keyword trends to map opportunities for your pharma business.",
        },
        {
          id: 2,
          title: "Google Business Optimization",
          description: "We fully optimize your Google Business Profile with NAP consistency, keywords, images, and service updates.",
        },
        {
          id: 3,
          title: "Local Content & Citations",
          description: "We create localized content and build strong citations across directories, healthcare portals, and pharma listings.",
        },
        {
          id: 4,
          title: "Review & Reputation Management",
          description: "We encourage authentic patient reviews and manage responses to build trust and attract more local customers.",
        },
        {
          id: 5,
          title: "Performance Tracking",
          description: "We monitor local rankings, CTRs, and leads while continuously optimizing for maximum ROI.",
        },
      ],
    },
    cta: {
      title: "Dominate Local Searches for Pharma Today",
      subtitle: "BE THE FIRST CHOICE FOR PATIENTS & DISTRIBUTORS",
      description:
        "From pharmacies to large distributors, we help every pharma business rank locally, drive qualified leads, and grow faster.",
    },
  },
};
