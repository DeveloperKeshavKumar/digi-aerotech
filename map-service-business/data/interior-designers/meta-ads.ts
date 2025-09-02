import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrush,
  IconLayoutGrid,
  IconArrowRight,
  IconTrendingUp,
  IconPalette,
  IconBuilding,
  IconHome,
  IconUsers,
  IconCalendarEvent,
} from "@tabler/icons-react";

export const map: ServiceBusinessMap = {
  service: "meta-ads",
  business: "interior-designers",
  variants: {
    hero: "variant1",
    whyChooseUs: "variant3",
    process: "variant2",
  },
  data: {
    slug: "meta-ads-interior-designers",
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
            { text: "Why Interior Designers", gradient: false },
            { text: "Struggle with Clients Online", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "Interior design is a visual business. But if you’re not showcasing your designs to the right audience on Facebook & Instagram, you’re missing out on high-paying clients.",
          painPoints: [
            "Relying only on word-of-mouth referrals",
            "Posting randomly without strategy or reach",
            "Low visibility among luxury homeowners",
            "No clear targeting for dream clients",
            "Ads that don’t generate qualified leads",
          ],
          solutionPoints: [
            "Target homeowners, offices & luxury property buyers",
            "Run high-converting visual campaigns",
            "Leverage Instagram & Facebook Ads for brand awareness",
            "Retarget website visitors & interested leads",
            "Get steady design project inquiries every month",
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Launch My Interior Ads",
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
              question: "Do Meta Ads work for interior designers?",
              answer:
                "Yes. Facebook & Instagram Ads allow you to visually showcase your portfolio, target homeowners, and drive qualified leads straight to your inbox.",
              icon: React.createElement(IconBrandInstagram, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "Can I target high-budget clients?",
              answer:
                "Absolutely. With precise targeting, you can reach audiences in premium localities, luxury homeowners, architects, and businesses needing interior services.",
              icon: React.createElement(IconBuilding, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "How soon can I see results?",
              answer:
                "Most interior designers start seeing inquiries within weeks of running optimized Meta Ads campaigns.",
              icon: React.createElement(IconCalendarEvent, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Attract Premium Clients",
      headlineKeywords: ["Meta Ads", "Interior Designers", "Facebook & Instagram"],
      brandLine: [
        {
          text: "🎨 Show Your Designs. Attract Clients. Grow Your Interior Business.",
          gradient: true,
          gradientClass: "from-orange-500 via-pink-500 to-red-600",
        },
      ],
      subheadline:
        "We create highly targeted Meta Ads campaigns that showcase your interior designs to homeowners & businesses, helping you secure high-value projects with consistent leads.",
      ctaButtons: [
        {
          icon: React.createElement(IconArrowRight, { size: 28 }),
          text: "Run My Ads Now",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "4X ROI",
          description: "Clients see 4x return on ad spend from Meta Ads.",
        },
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "Premium Leads",
          description: "Reach luxury homeowners, architects & business clients.",
        },
        {
          icon: React.createElement(IconBrush, { size: 32 }),
          title: "Visual Storytelling",
          description: "Ads designed to showcase your interiors beautifully.",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Us for", gradient: false },
        { text: "Meta Ads?", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(IconPalette, { size: 28 }),
          title: "Design-Focused Creatives",
          description: "We design ad creatives that highlight your interiors perfectly.",
        },
        {
          icon: React.createElement(IconBrandFacebook, { size: 28 }),
          title: "Precision Targeting",
          description: "Ads are targeted to clients most likely to hire interior designers.",
        },
        {
          icon: React.createElement(IconLayoutGrid, { size: 28 }),
          title: "High-Conversion Funnels",
          description: "We create conversion-focused landing pages for maximum results.",
        },
      ],
      cta: {
        text: "Start My Ads Campaign",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our Meta Ads Process for Interior Designers",
      subtitle: "CREATE • TARGET • ENGAGE • CONVERT",
      description:
        "We don’t just run ads; we build campaigns designed to attract premium clients who value design excellence.",
      steps: [
        {
          id: 1,
          title: "Audience Targeting",
          description: "Identify & target luxury homeowners, offices, and businesses in your city.",
        },
        {
          id: 2,
          title: "Creative Design",
          description: "Craft engaging, visually stunning ad creatives showcasing your interiors.",
        },
        {
          id: 3,
          title: "Ad Campaign Setup",
          description: "Set up optimized campaigns with A/B tested ad copies, visuals, and CTAs.",
        },
        {
          id: 4,
          title: "Retargeting",
          description: "Re-engage visitors & past leads who showed interest in your services.",
        },
        {
          id: 5,
          title: "Reporting & Optimization",
          description: "Monitor performance & scale the best ads for maximum ROI.",
        },
      ],
    },
    cta: {
      title: "Attract Premium Interior Projects with Meta Ads",
      subtitle: "VISUALIZE • ENGAGE • CONVERT",
      description:
        "Don’t let your designs go unseen. With our Meta Ads expertise, your interior business will reach the right audience and convert them into paying clients.",
    },
  },
};
