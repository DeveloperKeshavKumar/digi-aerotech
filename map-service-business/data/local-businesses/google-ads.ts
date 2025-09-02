import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  IconTarget,
  IconPhoneCall,
  IconUsers,
  IconArrowRight,
  IconSearch,
  IconBuildingStore,
  IconChartLine,
  IconMapPin,
  IconTrendingUp,
} from "@tabler/icons-react";

export const map: ServiceBusinessMap = {
  service: "google-ads",
  business: "local-business",
  variants: {
    hero: "variant2",
    whyChooseUs: "variant3",
    process: "variant1",
  },
  data: {
    slug: "google-ads-local-business",
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
            { text: "Need Google Ads Campaigns", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "Local customers are searching for products and services near them every minute. Without Google Ads, your competitors capture all the calls, clicks, and walk-ins.",
          painPoints: [
            "Competitors showing up before your business in Google search",
            "Low walk-ins and phone inquiries from online searches",
            "No visibility for location-specific or 'near me' searches",
            "Wasting money on poorly targeted ad campaigns",
            "Difficulty tracking ROI from ads",
          ],
          solutionPoints: [
            "Highly targeted Google Ads campaigns for local intent",
            "Location & keyword optimization to drive more walk-ins",
            "Call-only & map ads to increase direct customer actions",
            "Conversion tracking & ROI-based ad spending",
            "Continuous optimization to lower CPC & maximize results",
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Launch My Google Ads Today",
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
              question: "How do Google Ads help local businesses?",
              answer:
                "Google Ads put your business at the top of search results when customers are actively looking for your services nearby, driving instant calls and visits.",
              icon: React.createElement(IconSearch, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "Do you run call-only and location-based ads?",
              answer:
                "Yes, we set up call-only ads, Google Maps ads, and local keyword targeting to maximize foot traffic and phone inquiries.",
              icon: React.createElement(IconPhoneCall, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "Can Google Ads increase walk-ins for my shop?",
              answer:
                "Absolutely. With the right targeting, we drive local customers straight to your store with ads designed for walk-in conversions.",
              icon: React.createElement(IconBuildingStore, { size: 22 }),
            },
            {
              id: "faq-4",
              question: "What kind of ROI can I expect?",
              answer:
                "Our campaigns focus on measurable ROI—lowering cost per click while generating more leads, calls, and in-store sales.",
              icon: React.createElement(IconChartLine, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Get",
      headlineKeywords: ["More Leads", "Calls", "Walk-ins"],
      brandLine: [
        {
          text: "📈 Google Ads Services for Local Businesses",
          gradient: true,
          gradientClass: "from-orange-500 via-pink-500 to-red-600",
        },
      ],
      subheadline:
        "We help local businesses dominate Google search and maps with targeted ad campaigns that deliver instant calls, leads, and store visits.",
      ctaButtons: [
        {
          icon: React.createElement(IconArrowRight, { size: 28 }),
          text: "Start My Campaign",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "4X More Leads",
          description: "Local businesses generate more inquiries within weeks",
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "Instant Visibility",
          description: "Be at the top of Google search results from day one",
        },
        {
          icon: React.createElement(IconMapPin, { size: 32 }),
          title: "More Walk-ins",
          description: "Targeted campaigns drive real foot traffic to your store",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Our", gradient: false },
        { text: "Google Ads Services?", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(IconTarget, { size: 28 }),
          title: "Hyperlocal Targeting",
          description: "We ensure your ads reach only the most relevant local customers.",
        },
        {
          icon: React.createElement(IconChartLine, { size: 28 }),
          title: "ROI-Driven Campaigns",
          description: "We focus on conversions, not just clicks, to maximize profitability.",
        },
        {
          icon: React.createElement(IconPhoneCall, { size: 28 }),
          title: "More Calls & Walk-ins",
          description: "Our campaigns bring customers directly to your store or phone line.",
        },
      ],
      cta: {
        text: "Run My Ads Now",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our Local Business Google Ads Process",
      subtitle: "RESEARCH • LAUNCH • OPTIMIZE • SCALE",
      className: "border-t border-border dark:border-gray-700",
      description:
        "We design Google Ads campaigns tailored to local businesses, ensuring maximum visibility, calls, and conversions with minimal ad spend.",
      steps: [
        {
          id: 1,
          title: "Local Market Research",
          description: "We analyze competitors, local demand, and customer search patterns to find winning keywords.",
        },
        {
          id: 2,
          title: "Campaign Setup",
          description: "We create highly targeted ad campaigns with precise keywords, locations, and call extensions.",
        },
        {
          id: 3,
          title: "Ad Copy & Extensions",
          description: "We craft engaging ad copies with call-to-actions and add call-only & map extensions.",
        },
        {
          id: 4,
          title: "Conversion Tracking",
          description: "We integrate tracking tools to measure leads, calls, clicks, and walk-ins accurately.",
        },
        {
          id: 5,
          title: "Optimization & Scaling",
          description: "We continuously refine campaigns, lower CPC, and scale profitable ads for long-term growth.",
        },
      ],
    },
    cta: {
      title: "Be the #1 Choice in Local Searches",
      subtitle: "CALLS • LEADS • WALK-INS",
      description:
        "With our Google Ads expertise, your local business won’t just appear—it will dominate. Let’s create campaigns that deliver real customers today.",
    },
  },
};
