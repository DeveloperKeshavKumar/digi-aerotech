import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  IconPill,
  IconUserPlus,
  IconUsers,
  IconTarget,
  IconTrendingUp,
  IconChartBar,
  IconCurrencyDollar,
  IconArrowRight,
  IconBuildingSkyscraper,
} from "@tabler/icons-react";

export const map: ServiceBusinessMap = {
  service: "leads-generation",
  business: "pharma-companies",
  variants: {
    hero: "variant2",
    whyChooseUs: "variant1",
    process: "variant3",
    testimonials: "variant1",
  },
  data: {
    slug: "leads-generation-pharma-companies",
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
            { text: "Struggle With Lead Generation", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "In the fast-paced pharmaceutical industry, generating consistent and qualified leads is the key to success. Yet, many pharma businesses fail to connect with the right audience, losing opportunities to competitors.",
          painPoints: [
            "Low-quality or irrelevant pharma leads",
            "Difficulty targeting doctors, hospitals, and distributors",
            "No clear strategy for B2B & B2C lead generation",
            "Dependence on outdated marketing channels",
            "High competition with other pharma brands online",
          ],
          solutionPoints: [
            "Proven lead generation strategies for pharma niche",
            "Target doctors, hospitals, distributors & patients",
            "Advanced digital campaigns across search & social",
            "Data-driven approach for qualified, converting leads",
            "Automation for capturing & nurturing pharma leads",
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Start Generating Pharma Leads",
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
              question: "What kind of leads can pharma companies generate?",
              answer:
                "We help pharma businesses generate B2B distributor leads, B2C patient inquiries, hospital partnerships, and doctor engagement opportunities.",
              icon: React.createElement(IconUsers, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "How do you ensure the leads are high quality?",
              answer:
                "We use intent-driven targeting, keyword optimization, and advanced audience segmentation to deliver pharma leads that convert into business.",
              icon: React.createElement(IconTarget, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "Do you provide leads for international pharma markets?",
              answer:
                "Yes, we generate both local and global pharma leads for manufacturers, exporters, and distributors.",
              icon: React.createElement(IconBuildingSkyscraper, { size: 22 }),
            },
            {
              id: "faq-4",
              question: "How soon can pharma companies see results?",
              answer:
                "Most clients start seeing qualified pharma leads within 3–4 weeks of starting our campaigns.",
              icon: React.createElement(IconTrendingUp, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Drive",
      headlineKeywords: [
        "Qualified Pharma Leads",
        "Doctor & Hospital Inquiries",
        "Distributor Partnerships",
        "Global Pharma Reach",
      ],
      brandLine: [
        {
          text: "💊 Lead Generation for Pharma Companies That Delivers Results",
          gradient: true,
          gradientClass: "from-orange-500 via-pink-500 to-red-600",
        },
      ],
      subheadline:
        "We help pharma manufacturers, exporters, and distributors generate high-quality B2B & B2C leads that fuel growth and increase revenue.",
      ctaButtons: [
        {
          icon: React.createElement(IconArrowRight, { size: 28 }),
          text: "Get Pharma Leads Now",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "5,000+ Leads",
          description: "Generated for pharma companies worldwide",
        },
        {
          icon: React.createElement(IconCurrencyDollar, { size: 32 }),
          title: "2.7X ROI",
          description: "On pharma lead generation campaigns",
        },
        {
          icon: React.createElement(IconChartBar, { size: 32 }),
          title: "Faster Results",
          description: "Leads delivered in under 30 days",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Us for", gradient: false },
        { text: "Pharma Lead Generation?", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(IconUserPlus, { size: 28 }),
          title: "Qualified Pharma Leads",
          description: "We focus on delivering high-intent leads that are more likely to convert into actual customers.",
        },
        {
          icon: React.createElement(IconTarget, { size: 28 }),
          title: "Niche-Specific Targeting",
          description: "Our lead gen strategies are tailored to doctors, hospitals, distributors, and B2B buyers.",
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Data-Driven Campaigns",
          description: "We use advanced analytics and reporting to refine campaigns and maximize ROI.",
        },
        {
          icon: React.createElement(IconChartBar, { size: 28 }),
          title: "End-to-End Service",
          description: "From lead capture to nurturing, we ensure your sales pipeline never runs dry.",
        },
      ],
      cta: {
        text: "Start Generating Pharma Leads",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our Pharma Lead Generation Process",
      subtitle: "FROM TARGETING TO CONVERSIONS",
      className: "border-t border-border dark:border-gray-700",
      description:
        "We design tailored pharma lead generation strategies to connect your business with the right audience at the right time.",
      steps: [
        {
          id: 1,
          title: "Market Research",
          description: "We analyze pharma trends, competitors, and audience segments to define an effective lead generation strategy.",
        },
        {
          id: 2,
          title: "Target Audience Mapping",
          description: "We segment audiences such as doctors, hospitals, distributors, and patients to deliver hyper-relevant leads.",
        },
        {
          id: 3,
          title: "Multi-Channel Campaigns",
          description: "We run campaigns across Google, LinkedIn, pharma forums, and social platforms for maximum visibility.",
        },
        {
          id: 4,
          title: "Lead Capture & Nurturing",
          description: "We build optimized landing pages and automated nurturing workflows to engage and convert leads faster.",
        },
        {
          id: 5,
          title: "Conversion Optimization",
          description: "We track KPIs like CPL (cost per lead), CTR, and conversions to refine and scale campaigns for higher ROI.",
        },
      ],
    },
    testimonials: {
      title: [
        { text: "Pharma Companies", gradient: false },
        { text: "Growing with Our Lead Generation", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      description:
        "Pharma manufacturers, exporters, and distributors trust us to deliver qualified leads that fuel long-term business growth.",
      testimonials: [
        {
          id: "1",
          message:
            "Within 2 months, we started getting consistent inquiries from international distributors. Their pharma lead generation expertise is unmatched.",
          highlight: "3.1X Growth in Distributor Leads",
          stars: 5,
          name: "Rajesh Sharma",
          designation: "Director",
          company: "BioCare Pharma",
        },
        {
          id: "2",
          message:
            "We struggled for years to generate quality B2B pharma leads. Their strategies gave us a pipeline full of doctors and hospitals in just weeks.",
          highlight: "2.5X Increase in Qualified Leads",
          stars: 5,
          name: "Anita Desai",
          designation: "Head of Marketing",
          company: "MediLife Pharma",
        },
      ],
    },
    cta: {
      title: "Generate High-Quality Pharma Leads Consistently",
      subtitle: "MORE DOCTORS • MORE DISTRIBUTORS • MORE GROWTH",
      description:
        "We help pharma companies build a predictable pipeline of patients, doctors, and distributors with targeted lead generation strategies.",
    },
  },
};
