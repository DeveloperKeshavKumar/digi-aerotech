import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  IconSearch,
  IconTrendingUp,
  IconUsers,
  IconShieldCheck,
  IconArrowRight,
  IconMapPin,
} from "@tabler/icons-react";

export const map: ServiceBusinessMap = {
  service: "seo-services",
  business: "hotel-resort",
  variants: {
    hero: "variant1",
    whyChooseUs: "variant3",
    process: "variant2",
  },
  data: {
    slug: "seo-services-hotel-resort",
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
            { text: "Challenges Hotels & Resorts Face with", gradient: false },
            { text: "SEO & Online Visibility", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "Without strong SEO, hotels and resorts miss potential guests, online bookings, and local search visibility.",
          painPoints: [
            "Low Google rankings for searches like 'luxury resort near me'",
            "Minimal organic traffic to the website",
            "Difficulty outranking OTA (Online Travel Agencies)",
            "Missing local and seasonal search opportunities"
          ],
          solutionPoints: [
            "Keyword-optimized content targeting travelers and tourists",
            "On-page SEO for all property pages and blog posts",
            "Local SEO strategies to dominate 'near me' searches",
            "Technical SEO improvements for faster, user-friendly websites",
            "Reputation management & structured data for better SERP visibility"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Boost Your Hotel SEO Now",
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
              question: "How can SEO increase hotel bookings?",
              answer:
                "Optimized SEO increases visibility for high-intent searches, bringing direct traffic and increasing bookings without heavy ad spend.",
              icon: React.createElement(IconSearch, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "Do you handle local SEO for resorts?",
              answer:
                "Yes. We optimize Google My Business, local citations, and maps listings to attract nearby travelers.",
              icon: React.createElement(IconMapPin, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "Will SEO help us outrank OTAs?",
              answer:
                "Absolutely. With targeted content and local SEO, your hotel website will capture direct bookings and reduce OTA dependency.",
              icon: React.createElement(IconTrendingUp, { size: 22 }),
            },
            {
              id: "faq-4",
              question: "Is SEO suitable for boutique hotels or small resorts?",
              answer:
                "Yes, our scalable SEO strategies ensure even small hotels get maximum visibility in search results and attract more guests.",
              icon: React.createElement(IconShieldCheck, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Dominate Search Results with",
      headlineKeywords: [
        "Hotel SEO Services",
        "Resort SEO Experts",
        "Local SEO for Hotels",
        "Increase Direct Bookings",
        "Travel & Hospitality SEO"
      ],
      brandLine: [
        {
          text: "🏨 Skyrocket Your Hotel & Resort Bookings with Proven SEO Strategies",
          gradient: true,
          gradientClass: "from-orange-500 via-pink-500 to-red-600",
        },
      ],
      subheadline:
        "We help hotels, resorts, and boutique properties improve their online visibility, rank higher on Google, and attract direct bookings with ethical SEO practices.",
      ctaButtons: [
        {
          icon: React.createElement(IconArrowRight, { size: 28 }),
          text: "Get Free SEO Audit",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "200% Increase in Organic Traffic",
          description: "Hotels and resorts see rapid growth in website visitors.",
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "3X More Direct Bookings",
          description: "Direct guest conversions from high-intent search traffic.",
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 32 }),
          title: "Stronger Online Reputation",
          description: "High rankings and guest trust improve brand credibility.",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Our SEO Services are Perfect for", gradient: false },
        { text: "Hotels & Resorts", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(IconSearch, { size: 28 }),
          title: "Data-Driven Strategies",
          description: "We research top-performing keywords and optimize content to drive real traffic.",
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Local & Global SEO",
          description: "Rank in both local search results and broader travel-related queries.",
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 28 }),
          title: "Proven Results",
          description: "Hotels we optimize see higher rankings, traffic, and bookings consistently.",
        },
      ],
      cta: {
        text: "Boost Your Hotel Rankings Today",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our Proven SEO Process for Hotels & Resorts",
      subtitle: "ANALYZE • OPTIMIZE • RANK • CONVERT",
      description:
        "From keyword research to on-page optimization, local SEO, and performance tracking, we implement strategies that bring consistent guest traffic and bookings.",
      steps: [
        {
          id: 1,
          title: "Comprehensive SEO Audit",
          description: "Identify current rankings, website issues, and opportunities for growth.",
        },
        {
          id: 2,
          title: "Keyword Research & Content Planning",
          description:
            "Target high-intent searches travelers use to book hotels and resorts online.",
        },
        {
          id: 3,
          title: "On-Page & Technical Optimization",
          description:
            "Optimize meta tags, headings, site speed, mobile responsiveness, and structured data.",
        },
        {
          id: 4,
          title: "Local SEO & Google Maps Optimization",
          description:
            "Rank your hotel or resort on local searches and map listings for maximum bookings.",
        },
        {
          id: 5,
          title: "Content & Link Building",
          description:
            "Publish optimized blogs, landing pages, and earn quality backlinks for authority.",
        },
        {
          id: 6,
          title: "Monitoring & Continuous Optimization",
          description:
            "Track rankings, traffic, and conversions, continually adjusting strategies for peak performance.",
        },
      ],
    },
    cta: {
      title: "Boost Your Hotel & Resort Online Rankings Today",
      subtitle: "INCREASE TRAFFIC • DRIVE BOOKINGS • GAIN TRUST",
      description:
        "Schedule your free SEO consultation and discover how our proven strategies can skyrocket your hotel or resort's online visibility and guest bookings.",
    },
  },
};
