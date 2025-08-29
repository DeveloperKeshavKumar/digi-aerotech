import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  IconPill,
  IconSearch,
  IconTrendingUp,
  IconUsers,
  IconTarget,
  IconCurrencyDollar,
  IconClick,
  IconChartBar,
  IconArrowRight,
} from "@tabler/icons-react";

export const map: ServiceBusinessMap = {
  service: "google-ads",
  business: "pharma-companies",
  variants: {
    hero: "variant1",
    whyChooseUs: "variant3",
    process: "variant2",
    testimonials: "variant1",
  },
  data: {
    slug: "google-ads-pharma-companies",
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
            { text: "Lose Business Without Google Ads", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "In a competitive pharma industry, patients, doctors, and distributors search online before purchasing medicines. Without Google Ads, your competitors capture those leads first.",
          painPoints: [
            "Low visibility in pharma product searches online",
            "Distributors & B2B buyers not finding your company",
            "Competitors running Google Ads & winning patients",
            "No strategy to capture intent-based pharma leads",
            "Wasted budget on unoptimized ad campaigns",
          ],
          solutionPoints: [
            "Targeted ads for pharma products & B2B distributors",
            "Local & global campaigns to boost reach",
            "Landing pages designed for conversions",
            "Optimized keyword research for pharma niche",
            "Performance tracking & ROI-driven campaigns",
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Launch Pharma Google Ads",
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
              question: "Can pharma companies advertise on Google Ads?",
              answer:
                "Yes. Pharma companies can run compliant Google Ads for medicines, distributors, healthcare products, and services. We ensure all campaigns meet Google’s pharma ad policies.",
              icon: React.createElement(IconSearch, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "Will Google Ads help my pharma company get more leads?",
              answer:
                "Absolutely. Google Ads allow us to target patients, doctors, and distributors searching with intent, driving qualified pharma leads daily.",
              icon: React.createElement(IconUsers, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "Do you manage the entire pharma ad campaign?",
              answer:
                "Yes, from keyword research to ad copywriting, landing pages, budget optimization, and tracking—we manage everything end-to-end.",
              icon: React.createElement(IconTarget, { size: 22 }),
            },
            {
              id: "faq-4",
              question: "How soon can I see results with Google Ads?",
              answer:
                "Pharma companies usually start seeing qualified leads and inquiries within the first 2–4 weeks of running optimized Google Ads campaigns.",
              icon: React.createElement(IconTrendingUp, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Boost",
      headlineKeywords: [
        "Pharma Leads",
        "Distributor Inquiries",
        "Online Medicine Sales",
        "Doctor Engagement",
        "High-ROI Campaigns",
      ],
      brandLine: [
        {
          text: "💊 Run Google Ads That Convert for Pharma Companies",
          gradient: true,
          gradientClass: "from-orange-500 via-pink-500 to-red-600",
        },
      ],
      subheadline:
        "We help pharma companies dominate search results with targeted Google Ads that generate high-quality patient, doctor, and distributor leads.",
      ctaButtons: [
        {
          icon: React.createElement(IconArrowRight, { size: 28 }),
          text: "Start My Pharma Ads",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(IconClick, { size: 32 }),
          title: "3X Clicks",
          description: "Optimized campaigns with high CTR",
        },
        {
          icon: React.createElement(IconCurrencyDollar, { size: 32 }),
          title: "2.5X ROI",
          description: "Lower cost per qualified lead",
        },
        {
          icon: React.createElement(IconChartBar, { size: 32 }),
          title: "Faster Results",
          description: "Leads in as little as 2 weeks",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Us for", gradient: false },
        { text: "Pharma Google Ads?", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(IconTarget, { size: 28 }),
          title: "Pharma-Focused Targeting",
          description: "We design ad campaigns that specifically target patients, doctors, and pharma distributors.",
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "High-Quality Leads",
          description: "We focus on intent-driven searches to bring in qualified B2B and B2C pharma leads.",
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "ROI-Driven Campaigns",
          description: "Every campaign is optimized for conversions, not just clicks, ensuring maximum return on ad spend.",
        },
        {
          icon: React.createElement(IconSearch, { size: 28 }),
          title: "Policy-Compliant Ads",
          description: "We ensure all campaigns comply with Google’s pharma advertising guidelines.",
        },
      ],
      cta: {
        text: "Run High-Converting Pharma Ads",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our Pharma Google Ads Process",
      subtitle: "FROM STRATEGY TO RESULTS",
      className: "border-t border-border dark:border-gray-700",
      description:
        "We run ROI-focused Google Ads campaigns for pharma companies, targeting patients, doctors, and distributors who are actively searching.",
      steps: [
        {
          id: 1,
          title: "Campaign Strategy",
          description: "We research your pharma niche, define target audience segments, and craft ad strategies for B2C and B2B goals.",
        },
        {
          id: 2,
          title: "Keyword Research",
          description: "We identify high-intent pharma keywords like 'buy medicine online', 'pharma distributor', and 'bulk medicine supplier'.",
        },
        {
          id: 3,
          title: "Ad Copy & Design",
          description: "We create compelling ad copy with strong CTAs that drive patients and distributors to take immediate action.",
        },
        {
          id: 4,
          title: "Landing Page Optimization",
          description: "We design pharma-specific landing pages optimized for conversions, inquiries, and product orders.",
        },
        {
          id: 5,
          title: "Campaign Launch",
          description: "We set up and launch campaigns across Google Search, Display, and Shopping Ads for maximum reach.",
        },
        {
          id: 6,
          title: "Monitoring & Scaling",
          description: "We track clicks, leads, and conversions, optimizing ad spend to maximize ROI and scale winning campaigns.",
        },
      ],
    },
    testimonials: {
      title: [
        { text: "Pharma Companies", gradient: false },
        { text: "Winning with Google Ads", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      description:
        "From local pharmacies to global pharma manufacturers, our Google Ads campaigns deliver quality leads and measurable growth.",
      testimonials: [
        {
          id: "1",
          message:
            "We started getting daily inquiries from distributors and bulk buyers within 3 weeks of running ads. Their pharma-focused strategy works.",
          highlight: "2.8X More Pharma Leads",
          stars: 5,
          name: "Dr. Sandeep Patel",
          designation: "Director",
          company: "WellCare Pharma",
        },
        {
          id: "2",
          message:
            "Our medicine sales increased drastically after launching Google Ads with them. The campaigns are cost-effective and results-driven.",
          highlight: "3.2X Increase in Sales",
          stars: 5,
          name: "Meera Kapoor",
          designation: "Marketing Head",
          company: "LifePlus Pharma",
        },
      ],
    },
    cta: {
      title: "Run Pharma Google Ads That Deliver Leads & Sales",
      subtitle: "MORE VISIBILITY • MORE PATIENTS • MORE DISTRIBUTORS",
      description:
        "We help pharma companies leverage Google Ads to generate high-quality leads, boost medicine sales, and attract B2B distributors.",
    },
  },
};
