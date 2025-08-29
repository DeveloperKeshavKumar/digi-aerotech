import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  IconHome,
  IconRulerMeasure,
  IconTrendingUp,
  IconPalette,
  IconUsers,
  IconStar,
  IconArrowRight,
  IconBuildingSkyscraper,
  IconTarget,
} from "@tabler/icons-react";

export const map: ServiceBusinessMap = {
  service: "google-ads",
  business: "interior-designers",
  variants: {
    hero: "variant1",
    whyChooseUs: "variant2",
    process: "variant3",
    testimonials: "variant1",
  },
  data: {
    slug: "google-ads-interior-designers",
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
            { text: "Struggling to Get", gradient: false },
            { text: "High-Value Clients?", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "Many interior designers rely only on word-of-mouth or offline networks, but in today’s digital world, Google Ads is the fastest way to get premium projects.",
          painPoints: [
            "Projects going to competitors appearing first on Google",
            "Wasting money on ads without results",
            "No visibility when clients search ‘interior designers near me’",
            "Irregular client inquiries and unpredictable revenue",
            "Struggling to attract luxury or corporate clients",
          ],
          solutionPoints: [
            "Appear instantly on top of Google search results",
            "Target homeowners, offices, and businesses with high intent",
            "Pay only for real clicks from potential clients",
            "Get regular inquiries & consultation calls",
            "Win high-ticket projects with optimized campaigns",
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Boost My Leads Now",
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
              question: "Do Google Ads actually work for interior designers?",
              answer:
                "Yes. Google Ads places your business at the top of search results when clients are actively looking for designers in your area.",
              icon: React.createElement(IconTarget, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "How do I avoid wasting money on ads?",
              answer:
                "We run highly targeted ads with optimized keywords, geo-location targeting, and continuous monitoring to ensure maximum ROI.",
              icon: React.createElement(IconRulerMeasure, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "Can I target luxury and corporate clients?",
              answer:
                "Absolutely. We design campaigns that highlight premium services, ensuring you attract high-value projects and clients.",
              icon: React.createElement(IconPalette, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Instant Visibility",
      headlineKeywords: ["Google Ads", "Interior Designers", "Premium Leads"],
      brandLine: [
        {
          text: "🚀 Google Ads for Interior Designers & Firms",
          gradient: true,
          gradientClass: "from-orange-500 via-pink-500 to-red-600",
        },
      ],
      subheadline:
        "Get premium clients looking for interior design services right now. With Google Ads, your business appears at the top instantly, driving consultation calls, inquiries, and high-value projects.",
      ctaButtons: [
        {
          icon: React.createElement(IconArrowRight, { size: 28 }),
          text: "Start My Ads Campaign",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "300% ROI",
          description: "Proven strategies that bring high returns on ad spend.",
        },
        {
          icon: React.createElement(IconBuildingSkyscraper, { size: 32 }),
          title: "Targeted Reach",
          description: "Attract clients in your city actively searching for designers.",
        },
        {
          icon: React.createElement(IconStar, { size: 32 }),
          title: "Premium Leads",
          description: "Get inquiries from homeowners & corporate clients.",
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
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "Interior Industry Experts",
          description: "We understand what clients look for in design projects.",
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "High ROI Campaigns",
          description: "Our optimized strategies ensure every click matters.",
        },
        {
          icon: React.createElement(IconPalette, { size: 28 }),
          title: "Tailored Ad Copies",
          description: "We create persuasive ad copies that attract serious clients.",
        },
      ],
      cta: {
        text: "Launch My Ads",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "How We Run Google Ads for Interior Designers",
      subtitle: "PLAN • EXECUTE • OPTIMIZE • SCALE",
      description:
        "Our structured process ensures your ads deliver premium leads, consistent inquiries, and better ROI than traditional marketing.",
      steps: [
        {
          id: 1,
          title: "Audience & Keyword Research",
          description: "We analyze high-intent searches like ‘interior designer near me’ and set the foundation.",
        },
        {
          id: 2,
          title: "Ad Copy & Campaign Setup",
          description: "We write compelling ad copies and set up campaigns for maximum click-through rates.",
        },
        {
          id: 3,
          title: "Geo-Targeted Ads",
          description: "Target only specific cities, neighborhoods, or luxury markets.",
        },
        {
          id: 4,
          title: "Continuous Optimization",
          description: "We adjust bids, keywords, and ad creatives for better performance.",
        },
        {
          id: 5,
          title: "Scaling Campaigns",
          description: "Once ROI is proven, we scale campaigns to capture more premium leads.",
        },
      ],
    },
    testimonials: {
      title: [
        { text: "What Interior Designers", gradient: false },
        { text: "Say About Our Ads", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      description:
        "From independent designers to full-fledged studios, our Google Ads services have transformed how interior businesses get clients.",
      testimonials: [
        {
          id: "1",
          message:
            "I was struggling to get clients. Within weeks of launching ads, I started receiving daily inquiries. It changed my business completely.",
          highlight: "Daily Inquiries",
          stars: 5,
          name: "Rohit Verma",
          designation: "Founder",
          company: "SpaceCraft Interiors",
        },
        {
          id: "2",
          message:
            "Thanks to Google Ads, I now get luxury project leads regularly. My ROI has more than doubled compared to traditional marketing.",
          highlight: "Luxury Leads",
          stars: 5,
          name: "Amit Khanna",
          designation: "Principal Designer",
          company: "EliteSpaces",
        },
      ],
    },
    cta: {
      title: "Get High-Value Interior Projects with Google Ads",
      subtitle: "VISIBILITY • LEADS • CLIENTS",
      description:
        "Stop losing clients to competitors. With our Google Ads services, your business will appear first when clients search for interior designers—bringing you premium leads and high-ticket projects.",
    },
  },
};
