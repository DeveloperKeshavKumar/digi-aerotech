import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  IconPill,
  IconMapPin,
  IconBuildingSkyscraper,
  IconSearch,
  IconUsers,
  IconStar,
  IconTrendingUp,
  IconShieldCheck,
  IconArrowRight,
} from "@tabler/icons-react";

export const map: ServiceBusinessMap = {
  service: "gmb-services",
  business: "pharma-companies",
  variants: {
    hero: "variant2",
    whyChooseUs: "variant1",
    process: "variant3",
  },
  data: {
    slug: "gmb-services-pharma-companies",
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
            { text: "Struggle on Google Maps", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "Doctors, patients, and distributors search for pharma stores & companies on Google daily, but many pharma brands remain invisible due to poor GMB optimization.",
          painPoints: [
            "Pharma store not appearing in Google Maps or Local Pack",
            "Incomplete GMB profile with missing services & categories",
            "Low visibility for 'near me' searches like pharmacy near me",
            "Poor or no customer reviews reducing trust",
            "Competitors ranking higher in local search results",
          ],
          solutionPoints: [
            "Fully optimized GMB profile with accurate info & keywords",
            "Category & service optimization for pharma industry",
            "Review & rating management to build credibility",
            "Local SEO integration for 'pharma near me' searches",
            "Geo-targeted strategy to increase walk-ins & calls",
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Rank Higher on Google Maps",
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
              question: "Why do pharma companies need GMB optimization?",
              answer:
                "Most patients and distributors search for local pharma companies on Google Maps. Without GMB optimization, your business risks losing daily leads, walk-ins, and calls.",
              icon: React.createElement(IconSearch, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "Can GMB services increase patients & distributors?",
              answer:
                "Yes, an optimized GMB profile drives more local calls, visits, and trust by ranking higher in 'near me' pharma searches.",
              icon: React.createElement(IconUsers, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "Do you also handle reviews for pharma businesses?",
              answer:
                "Absolutely. We help collect positive reviews, manage negative feedback, and build trust for your pharma brand.",
              icon: React.createElement(IconStar, { size: 22 }),
            },
            {
              id: "faq-4",
              question: "Will my pharma store rank above competitors?",
              answer:
                "Yes. We use local SEO + GMB optimization to ensure you appear in Google’s Local Pack and Maps ahead of competitors.",
              icon: React.createElement(IconTrendingUp, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Dominate",
      headlineKeywords: [
        "Google Maps Ranking",
        "Local Search Visibility",
        "Pharma Store Calls",
        "Trust with Reviews",
        "Nearby Patient Reach",
      ],
      brandLine: [
        {
          text: "📍 Get Found First by Patients & Distributors",
          gradient: true,
          gradientClass: "from-orange-500 via-pink-500 to-red-600",
        },
      ],
      subheadline:
        "We help pharma companies rank higher on Google Maps & Local Search, driving more calls, visits, and trust-building reviews every day.",
      ctaButtons: [
        {
          icon: React.createElement(IconArrowRight, { size: 28 }),
          text: "Optimize My Pharma GMB",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(IconMapPin, { size: 32 }),
          title: "5X More Calls",
          description: "From nearby patients & doctors",
        },
        {
          icon: React.createElement(IconStar, { size: 32 }),
          title: "4.7+ Ratings",
          description: "Trust-building reviews & feedback",
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "3X Local Visibility",
          description: "Rank in Google Local Pack",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Us for", gradient: false },
        { text: "Pharma GMB Services?", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(IconBuildingSkyscraper, { size: 28 }),
          title: "Pharma Industry Expertise",
          description: "We specialize in optimizing GMB for pharma companies to target patients, doctors & distributors.",
        },
        {
          icon: React.createElement(IconSearch, { size: 28 }),
          title: "Local SEO Integration",
          description: "We blend GMB optimization with local SEO for maximum visibility in pharma-related searches.",
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 28 }),
          title: "Reputation Building",
          description: "Our strategies focus on reviews, ratings & trust signals that attract more patients & suppliers.",
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Competitive Edge",
          description: "We ensure your pharma business ranks above competitors in Google Maps & Local Pack results.",
        },
      ],
      cta: {
        text: "Get My Pharma Business Ranked",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our Pharma GMB Optimization Process",
      subtitle: "FROM SETUP TO RANKING",
      className: "border-t border-border dark:border-gray-700",
      description:
        "Our proven GMB process ensures that your pharma store, company, or distributor profile attracts maximum patients and partners.",
      steps: [
        {
          id: 1,
          title: "GMB Audit & Setup",
          description: "We review your existing GMB profile, fix errors, and ensure pharma-specific details are correctly listed.",
        },
        {
          id: 2,
          title: "Category & Service Optimization",
          description: "We optimize your GMB profile with the right pharma-related categories, services, and keywords.",
        },
        {
          id: 3,
          title: "Photo & Post Optimization",
          description: "We add high-quality visuals, product photos, and regular posts to keep your profile active & engaging.",
        },
        {
          id: 4,
          title: "Review & Rating Boost",
          description: "We encourage positive patient reviews, manage negative feedback, and improve overall star ratings.",
        },
        {
          id: 5,
          title: "Local Pack Ranking",
          description: "We optimize location signals & keywords to get your pharma business ranked in the Google Local 3-Pack.",
        },
        {
          id: 6,
          title: "Performance Tracking",
          description: "We track calls, visits, and rankings to measure results and fine-tune your GMB strategy for growth.",
        },
      ],
    },
    cta: {
      title: "Rank Your Pharma Business on Google Maps",
      subtitle: "MORE VISIBILITY • MORE CALLS • MORE TRUST",
      description:
        "We help pharma companies dominate Google Maps & Local Search, driving patients, doctors, and distributors straight to your business.",
    },
  },
};
