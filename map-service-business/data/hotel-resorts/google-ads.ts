import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  IconHotelService,
  IconWorld,
  IconUsers,
  IconCalendarEvent,
  IconTarget,
  IconTrendingUp,
  IconCreditCard,
  IconSearch,
  IconArrowRight,
  IconDeviceMobile,
  IconBuildingSkyscraper,
} from "@tabler/icons-react";

export const map: ServiceBusinessMap = {
  service: "google-ads",
  business: "hotel-resort",
  variants: {
    hero: "variant1",
    whyChooseUs: "variant2",
    process: "variant3",
  },
  data: {
    slug: "google-ads-hotel-resort",
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
            { text: "Why Hotels & Resorts", gradient: false },
            { text: "Need Google Ads", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "Travelers don’t just browse — they search with intent. Google Ads helps your hotel or resort appear at the exact moment travelers are ready to book.",
          painPoints: [
            "Relying heavily on OTAs with high commission fees",
            "Not appearing in Google search results during peak booking times",
            "Low direct bookings despite high demand",
            "Competitors outranking you with paid ads",
            "Wasted ad spend on untargeted campaigns",
          ],
          solutionPoints: [
            "Target travelers searching for hotels & resorts in your area",
            "Promote seasonal offers, weekend getaways, and last-minute deals",
            "Run retargeting ads for abandoned visitors",
            "Optimize ad budget for maximum ROI",
            "Drive direct bookings without OTA commission",
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Run Google Ads For My Hotel",
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
              question: "Why use Google Ads for hotels & resorts?",
              answer:
                "Because travelers actively search for hotels on Google. Ads help your property appear first, driving immediate bookings.",
              icon: React.createElement(IconSearch, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "Can Google Ads reduce OTA dependency?",
              answer:
                "Yes. By targeting direct bookings, you keep more revenue in-house instead of paying high OTA commissions.",
              icon: React.createElement(IconCreditCard, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "How quickly can results be seen?",
              answer:
                "Hotels & resorts usually see increased traffic and bookings within the first 2–3 weeks of optimized campaigns.",
              icon: React.createElement(IconTrendingUp, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Turn Searches Into Bookings",
      headlineKeywords: ["Google Ads", "Hotels", "Resorts"],
      brandLine: [
        {
          text: "📈 Drive Direct Guests, Reduce OTA Costs, Maximize ROI",
          gradient: true,
          gradientClass: "from-orange-500 via-pink-500 to-red-600",
        },
      ],
      subheadline:
        "With our Google Ads services, your hotel or resort appears at the top of Google when travelers are ready to book — delivering more direct reservations and higher profits.",
      ctaButtons: [
        {
          icon: React.createElement(IconArrowRight, { size: 28 }),
          text: "Boost My Hotel Bookings",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "2x More Direct Guests",
          description: "Hotels running optimized ads double their direct bookings.",
        },
        {
          icon: React.createElement(IconWorld, { size: 32 }),
          title: "Geo-Targeting",
          description: "Attract travelers searching for stays near your property.",
        },
        {
          icon: React.createElement(IconCalendarEvent, { size: 32 }),
          title: "Seasonal Promotions",
          description: "Fill rooms during peak and off-peak seasons with smart ads.",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Our", gradient: false },
        { text: "Google Ads for Hotels", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(IconHotelService, { size: 28 }),
          title: "Hospitality Specialists",
          description: "We know hotel booking cycles and optimize ads for peak performance.",
        },
        {
          icon: React.createElement(IconTarget, { size: 28 }),
          title: "High Intent Targeting",
          description: "We only target travelers actively searching for stays.",
        },
        {
          icon: React.createElement(IconBuildingSkyscraper, { size: 28 }),
          title: "Proven ROI",
          description: "Our campaigns consistently lower cost-per-booking while increasing occupancy.",
        },
      ],
      cta: {
        text: "Launch My Hotel Ads",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our Google Ads Process for Hotels & Resorts",
      subtitle: "SEARCH • TARGET • BOOK",
      description:
        "We design laser-focused ad campaigns that bring in direct hotel bookings and maximize your ad spend.",
      steps: [
        {
          id: 1,
          title: "Market Research",
          description: "We analyze traveler trends, competitor ads, and target keywords in your region.",
        },
        {
          id: 2,
          title: "Campaign Setup",
          description: "We design ad creatives, headlines, and offers tailored to your hotel or resort.",
        },
        {
          id: 3,
          title: "Smart Targeting",
          description: "We run geo-targeted, seasonal, and retargeting ads for maximum conversion.",
        },
        {
          id: 4,
          title: "Conversion Optimization",
          description: "We track bookings, calls, and form submissions to lower cost-per-booking.",
        },
        {
          id: 5,
          title: "Ongoing Optimization",
          description: "We continuously refine campaigns to keep you ahead of competitors.",
        },
      ],
    },
    cta: {
      title: "Turn Google Searches Into Direct Hotel Bookings",
      subtitle: "RANK • REACH • CONVERT",
      description:
        "With our expert Google Ads management, your hotel or resort dominates search, attracts travelers at the right time, and fills rooms faster.",
    },
  },
};
