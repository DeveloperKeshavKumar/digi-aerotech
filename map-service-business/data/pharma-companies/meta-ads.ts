import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  IconBrandMeta,
  IconHealthRecognition,
  IconVaccine,
  IconHeartbeat,
  IconAdCircle,
  IconUsersGroup,
  IconChartHistogram,
  IconArrowRight,
  IconTarget,
  IconBuildingHospital,
} from "@tabler/icons-react";

export const map: ServiceBusinessMap = {
  service: "meta-ads",
  business: "pharma-companies",
  variants: {
    hero: "variant2",
    whyChooseUs: "variant1",
    process: "variant3",
  },
  data: {
    slug: "meta-ads-pharma-companies",
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
            { text: "Why Pharma Brands", gradient: false },
            { text: "Struggle with Meta Ads", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "Running ads in the pharma industry isn’t as simple as boosting posts. With compliance restrictions, ad disapprovals, and targeting challenges, many pharma businesses waste money on ineffective campaigns.",
          painPoints: [
            "Ad disapprovals due to strict Meta policies",
            "Low engagement from healthcare professionals",
            "Difficulty targeting doctors, hospitals & patients",
            "Wasted budget on irrelevant audiences",
            "Poor ROI from generic ad campaigns",
          ],
          solutionPoints: [
            "Compliance-friendly ad creatives that get approved",
            "Precise targeting of doctors, hospitals & pharmacists",
            "B2B lead generation for distributors & suppliers",
            "Ad funnels optimized for ROI & conversions",
            "Data-driven campaign scaling for maximum reach",
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Launch Pharma Meta Ads",
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
              question: "Can pharma ads run on Facebook & Instagram?",
              answer:
                "Yes, but they must follow Meta’s healthcare advertising guidelines. We create compliance-friendly ads that get approved and deliver results.",
              icon: React.createElement(IconBrandMeta, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "Do you generate B2B leads for pharma?",
              answer:
                "Absolutely. We run hyper-targeted ad campaigns that connect manufacturers, suppliers, and distributors with hospitals, clinics, and retailers.",
              icon: React.createElement(IconBuildingHospital, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "How do Meta Ads help pharma companies grow?",
              answer:
                "Meta Ads help pharma brands build awareness, generate distributor leads, and engage patients with trusted health campaigns.",
              icon: React.createElement(IconHealthRecognition, { size: 22 }),
            },
            {
              id: "faq-4",
              question: "What results can I expect?",
              answer:
                "Pharma clients typically see 2X–4X ROI with more qualified leads, stronger brand recall, and higher conversions within 6–12 weeks.",
              icon: React.createElement(IconChartHistogram, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Boost",
      headlineKeywords: ["Pharma Meta Ads", "Facebook Pharma Marketing", "Pharma Instagram Ads", "Healthcare Ad Campaigns"],
      brandLine: [
        {
          text: "💊 Compliance-Friendly Meta Ads for Pharma Companies That Drive Real Growth",
          gradient: true,
          gradientClass: "from-orange-500 via-pink-500 to-red-600",
        },
      ],
      subheadline:
        "We help pharma manufacturers, distributors, and pharmacies run approved, high-ROI ad campaigns across Facebook, Instagram, WhatsApp & Messenger.",
      ctaButtons: [
        {
          icon: React.createElement(IconArrowRight, { size: 28 }),
          text: "Start Pharma Meta Ads",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(IconTarget, { size: 32 }),
          title: "4X Better Targeting",
          description: "Reach doctors, hospitals & patients",
        },
        {
          icon: React.createElement(IconUsersGroup, { size: 32 }),
          title: "3.2X More Leads",
          description: "Qualified pharma B2B & B2C inquiries",
        },
        {
          icon: React.createElement(IconHeartbeat, { size: 32 }),
          title: "2X Brand Recall",
          description: "Trusted pharma ads that resonate",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Us for", gradient: false },
        { text: "Pharma Meta Ads?", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(IconAdCircle, { size: 28 }),
          title: "Policy-Compliant Ads",
          description: "We design pharma ads that meet Meta’s strict compliance rules and get approved faster.",
        },
        {
          icon: React.createElement(IconTarget, { size: 28 }),
          title: "Hyper-Specific Targeting",
          description: "From doctors to hospitals, we ensure your ads reach the right audience at the right time.",
        },
        {
          icon: React.createElement(IconVaccine, { size: 28 }),
          title: "Health-Focused Creatives",
          description: "We build campaigns that educate, engage, and inspire trust in your pharma products & services.",
        },
        {
          icon: React.createElement(IconChartHistogram, { size: 28 }),
          title: "ROI-Driven Campaigns",
          description: "Our performance marketing ensures every dollar spent translates into measurable results.",
        },
      ],
      cta: {
        text: "Run Pharma Meta Ads Now",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our Meta Ads Process for Pharma",
      subtitle: "FROM STRATEGY TO ROI",
      className: "border-t border-border dark:border-gray-700",
      description:
        "We follow a compliance-first, data-driven process to ensure your pharma Meta Ads deliver consistent approvals, engagement, and conversions.",
      steps: [
        {
          id: 1,
          title: "Ad Policy Audit",
          description: "We review your offerings and ensure campaigns follow Meta’s healthcare advertising guidelines.",
        },
        {
          id: 2,
          title: "Audience Targeting",
          description: "We segment audiences into doctors, hospitals, patients, and distributors for maximum relevance.",
        },
        {
          id: 3,
          title: "Creative Development",
          description: "We design ad creatives with health-focused messaging, visuals, and CTA that get approved & convert.",
        },
        {
          id: 4,
          title: "Campaign Launch",
          description: "We launch campaigns across Facebook, Instagram, Messenger & WhatsApp for full-funnel coverage.",
        },
        {
          id: 5,
          title: "Optimization & Scaling",
          description: "We track performance, optimize bidding & creatives, and scale campaigns to achieve 3X–4X ROI.",
        },
      ],
    },
    cta: {
      title: "Run High-ROI Meta Ads for Pharma",
      subtitle: "GET APPROVED. GET LEADS. GROW CONSISTENTLY.",
      description:
        "We help pharma brands create compliance-friendly Meta Ad campaigns that generate trust, awareness, and sales without the fear of disapprovals.",
    },
  },
};
