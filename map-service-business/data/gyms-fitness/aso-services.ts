import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  IconDeviceMobile,
  IconTrendingUp,
  IconShieldCheck,
  IconUsers,
  IconStar,
  IconArrowRight,
} from "@tabler/icons-react";
import { Dumbbell } from "lucide-react";

export const map: ServiceBusinessMap = {
  service: "aso-services",
  business: "gyms-fitness",
  variants: {
    hero: "variant2",
    whyChooseUs: "variant1",
    process: "variant3",
  },
  data: {
    slug: "aso-services-gyms-fitness",
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
            { text: "Challenges Gyms & Fitness Apps Face in", gradient: false },
            { text: "App Visibility & Downloads", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "Fitness apps and gym platforms often struggle to rank in app stores, gain user trust, and convert downloads into active memberships without professional ASO strategies.",
          painPoints: [
            "Low visibility in Google Play & Apple App Store",
            "Poor keyword optimization affecting downloads",
            "Difficulty competing with popular fitness apps",
            "Low user engagement & retention",
            "Inadequate app store listings and visuals",
          ],
          solutionPoints: [
            "Keyword-optimized app titles, descriptions & metadata",
            "Attractive app icons, screenshots, and videos to boost conversion",
            "App localization for multiple languages and regions",
            "Regular updates & A/B testing to increase retention",
            "Data-driven ASO strategy to rank higher than competitors",
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Boost Your Fitness App Downloads",
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
              question: "Can ASO really increase my gym app downloads?",
              answer:
                "Yes! Optimized titles, keywords, descriptions, and visuals improve app store rankings and drive more targeted downloads.",
              icon: React.createElement(IconTrendingUp, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "Do you handle both Android and iOS stores?",
              answer:
                "Absolutely. Our ASO strategies cover Google Play Store and Apple App Store to maximize reach and downloads.",
              icon: React.createElement(IconDeviceMobile, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "Can ASO improve app retention and engagement?",
              answer:
                "Yes. We optimize in-app messaging, screenshots, and update strategies to keep users engaged and subscribed.",
              icon: React.createElement(IconShieldCheck, { size: 22 }),
            },
            {
              id: "faq-4",
              question: "Will ASO help me compete with big fitness apps?",
              answer:
                "Absolutely. With targeted keywords, appealing visuals, and data-driven strategies, we help your gym or fitness app stand out.",
              icon: React.createElement(Dumbbell, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Want More",
      headlineKeywords: [
        "Gym App Downloads?",
        "Fitness Memberships?",
        "Active Users?",
        "App Store Visibility?",
        "360° ASO for Fitness Apps?",
      ],
      brandLine: [
        {
          text: "💪 Maximize Your Gym & Fitness App Growth with Expert ASO Services",
          gradient: true,
          gradientClass: "from-orange-500 via-pink-500 to-red-600",
        },
      ],
      subheadline:
        "We help gym owners, fitness trainers, and app developers increase app downloads, improve retention, and boost engagement with professional ASO strategies.",
      ctaButtons: [
        {
          icon: React.createElement(Dumbbell, { size: 28 }),
          text: "Get Free ASO Consultation",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "50,000+ App Downloads",
          description: "Driven by optimized app store presence",
        },
        {
          icon: React.createElement(IconStar, { size: 32 }),
          title: "4.8/5 App Rating",
          description: "Increased trust and engagement among users",
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "3X More Active Users",
          description: "Through keyword optimization and visuals",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Gyms & Fitness Brands Choose Us for", gradient: false },
        { text: "ASO Services", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Data-Driven ASO Strategies",
          description: "Keyword research, competitor analysis, and optimization to maximize downloads.",
        },
        {
          icon: React.createElement(IconStar, { size: 28 }),
          title: "Visual Optimization",
          description: "Eye-catching app icons, screenshots, and videos to boost conversion rates.",
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "Retention & Engagement Focus",
          description: "We optimize app updates, in-app messaging, and listings to retain users.",
        },
      ],
      cta: {
        text: "Boost Your App Downloads Now",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our Proven ASO Process for Gyms & Fitness Apps",
      subtitle: "RESEARCH • OPTIMIZE • TEST • GROW",
      description:
        "From keyword analysis to creative optimization and performance tracking, our ASO process ensures your fitness app reaches more users and drives measurable results.",
      steps: [
        {
          id: 1,
          title: "Market & Keyword Research",
          description: "Identify high-intent keywords and analyze competitors in the fitness app market.",
        },
        {
          id: 2,
          title: "App Store Optimization",
          description:
            "Optimize app title, description, keywords, visuals, and metadata to increase visibility and conversions.",
        },
        {
          id: 3,
          title: "Visual & UI Enhancement",
          description:
            "Design attractive app icons, screenshots, and promotional videos that entice users to download.",
        },
        {
          id: 4,
          title: "A/B Testing & Feedback",
          description:
            "Test different versions of app listings, visuals, and descriptions to maximize downloads and engagement.",
        },
        {
          id: 5,
          title: "Performance Monitoring & Updates",
          description:
            "Track ASO performance, implement improvements, and update app content regularly for sustained growth.",
        },
      ],
    },
    cta: {
      title: "Maximize Your Gym & Fitness App Downloads Today",
      subtitle: "OPTIMIZE • ENGAGE • GROW",
      description:
        "Schedule a free ASO consultation with our experts to boost your app visibility, downloads, and active users, transforming your fitness business growth.",
    },
  },
};
