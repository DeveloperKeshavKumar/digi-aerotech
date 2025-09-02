import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  IconMapPin,
  IconSearch,
  IconArrowRight,
  IconTrendingUp,
  IconUsers,
  IconBuildingStore,
  IconChartBar,
  IconPhoneCall,
} from "@tabler/icons-react";

export const map: ServiceBusinessMap = {
  service: "local-seo",
  business: "local-business",
  variants: {
    hero: "variant2",
    whyChooseUs: "variant3",
    process: "variant1",
  },
  data: {
    slug: "local-seo-for-local-business",
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
            { text: "Why Local Businesses", gradient: false },
            { text: "Fail To Rank Locally", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "If your business doesn’t show up on Google Maps or local search results, customers will find your competitors instead.",
          painPoints: [
            "Not appearing in Google’s Local Pack or ‘near me’ searches",
            "Low visibility on Google Maps despite having a store",
            "Outdated business listings and incorrect contact info",
            "Poor reviews or no reputation management",
            "Competitors outranking you in the same area",
          ],
          solutionPoints: [
            "Optimize your Google Business Profile for maximum visibility",
            "Rank higher in ‘near me’ and city-specific keyword searches",
            "Get more calls, direction requests, and walk-ins",
            "Boost reputation with review generation strategies",
            "Dominate your local area with consistent visibility",
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Rank My Business Locally",
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
              question: "What is Local SEO?",
              answer:
                "Local SEO is the process of optimizing your business to appear in local search results like Google Maps, Google Business Profile, and ‘near me’ searches.",
              icon: React.createElement(IconSearch, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "How will Local SEO help my business?",
              answer:
                "It increases visibility, drives walk-ins, calls, and inquiries from customers searching in your area.",
              icon: React.createElement(IconUsers, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "How fast can I see results?",
              answer:
                "Most local businesses start seeing improvement in calls, visits, and Google Maps rankings within 2–3 months.",
              icon: React.createElement(IconTrendingUp, { size: 22 }),
            },
            {
              id: "faq-4",
              question: "Do reviews matter in Local SEO?",
              answer:
                "Yes! Positive reviews build trust and improve your ranking in Google’s Local Pack and Maps results.",
              icon: React.createElement(IconPhoneCall, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Boost",
      headlineKeywords: ["Local Visibility", "Foot Traffic", "Customer Calls"],
      brandLine: [
        {
          text: "📍 Local SEO Services for Local Businesses",
          gradient: true,
          gradientClass: "from-orange-500 via-pink-500 to-red-600",
        },
      ],
      subheadline:
        "We help your business dominate local searches, get found on Google Maps, and attract high-intent customers ready to buy.",
      ctaButtons: [
        {
          icon: React.createElement(IconArrowRight, { size: 28 }),
          text: "Rank Me Locally",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(IconMapPin, { size: 32 }),
          title: "85% Click Local Results",
          description: "Most customers choose from Google’s top 3 local listings",
        },
        {
          icon: React.createElement(IconBuildingStore, { size: 32 }),
          title: "Increase Walk-ins",
          description: "Turn Google searches into store visits every day",
        },
        {
          icon: React.createElement(IconChartBar, { size: 32 }),
          title: "Track ROI",
          description: "See how local SEO drives calls, visits, and sales",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Us For", gradient: false },
        { text: "Local SEO?", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(IconSearch, { size: 28 }),
          title: "Google Map Optimization",
          description: "We optimize your Google Business Profile for maximum reach.",
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "More Calls & Walk-ins",
          description: "We help convert local searches into paying customers.",
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Proven Local Ranking Strategies",
          description: "From citations to reviews, we use strategies that deliver.",
        },
      ],
      cta: {
        text: "Get Found Locally",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our Local SEO Process",
      subtitle: "VISIBILITY • TRAFFIC • SALES",
      className: "border-t border-border dark:border-gray-700",
      description:
        "We follow a step-by-step process to help your business dominate local searches, rank higher on Google Maps, and attract more walk-in customers.",
      steps: [
        {
          id: 1,
          title: "Local SEO Audit",
          description: "We analyze your online presence, competition, and visibility in your target location.",
        },
        {
          id: 2,
          title: "Google Profile Optimization",
          description: "We optimize your Google Business Profile with accurate info, categories, and keywords.",
        },
        {
          id: 3,
          title: "Citations & Listings",
          description: "We ensure your business appears consistently across online directories and platforms.",
        },
        {
          id: 4,
          title: "Reviews & Reputation",
          description: "We set up strategies to generate more positive reviews and manage online reputation.",
        },
        {
          id: 5,
          title: "Tracking & Reporting",
          description: "We monitor rankings, traffic, and calls to measure ROI and refine strategies.",
        },
      ],
    },
    cta: {
      title: "Get Found in Local Searches & Maps",
      subtitle: "CALLS • VISITS • SALES",
      description:
        "With our proven Local SEO services, your business won’t just exist—it will dominate your local market and attract high-intent customers daily.",
    },
  },
};
