import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  IconBrandMeta,
  IconCamera,
  IconTrendingUp,
  IconArrowRight,
  IconUsers,
  IconHeart,
  IconPhoneCall,
  IconCalendarEvent,
  IconWorld
} from "@tabler/icons-react";

export const map: ServiceBusinessMap = {
  service: "meta-ads",
  business: "hotel-resort",
  variants: {
    hero: "variant2",
    whyChooseUs: "variant1",
    process: "variant3",
  },
  data: {
    slug: "meta-ads-hotel-resort",
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
            { text: "Hotels & Resorts Face Challenges with", gradient: false },
            { text: "Meta Ads Campaigns", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "Without optimized Meta campaigns, your property loses visibility on Facebook and Instagram, missing out on travelers ready to book.",
          painPoints: [
            "Low engagement on social media ads",
            "Targeting the wrong audience segments",
            "High ad costs without conversions",
            "Poor ad creatives and copy",
            "Limited direct booking leads"
          ],
          solutionPoints: [
            "Strategic audience targeting including local & international travelers",
            "High-converting ad creatives optimized for Instagram & Facebook",
            "Seasonal campaigns highlighting special offers & packages",
            "Lead generation funnels integrated with booking systems",
            "Continuous A/B testing and optimization for ROI"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Launch High-Converting Meta Ads",
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
              question: "How can Meta Ads increase hotel bookings?",
              answer:
                "By targeting the right travelers with attractive offers and visuals, we drive inquiries and direct bookings from Facebook and Instagram.",
              icon: React.createElement(IconBrandMeta, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "Do you create ad creatives for hotels and resorts?",
              answer:
                "Yes, we craft high-quality visuals, reels, and videos highlighting your property’s best features to maximize engagement.",
              icon: React.createElement(IconCamera, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "Can I target international travelers?",
              answer:
                "Absolutely. We run location-based and interest-based campaigns to attract travelers from your target markets.",
              icon: React.createElement(IconWorld, { size: 22 }),
            },
            {
              id: "faq-4",
              question: "How do you ensure ROI on Meta Ads?",
              answer:
                "We continuously analyze campaign performance, optimize targeting, creatives, and bidding to ensure bookings and inquiries increase.",
              icon: React.createElement(IconTrendingUp, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Attract More Travelers",
      headlineKeywords: ["Hotel Meta Ads", "Resort Instagram Ads", "Facebook Booking Campaigns"],
      brandLine: [
        {
          text: "🚀 Boost Your Hotel & Resort Bookings with Meta Ads",
          gradient: true,
          gradientClass: "from-orange-500 via-pink-500 to-red-600",
        },
      ],
      subheadline:
        "Our Meta Ads strategies help hotels and resorts attract travelers, increase direct bookings, and maximize ROI from Facebook & Instagram campaigns.",
      ctaButtons: [
        {
          icon: React.createElement(IconArrowRight, { size: 28 }),
          text: "Start Your Meta Campaign",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "50,000+ Targeted Travelers",
          description: "Reached with precise Meta Ads campaigns.",
        },
        {
          icon: React.createElement(IconHeart, { size: 32 }),
          title: "High Engagement Ads",
          description: "Eye-catching visuals and compelling copy drive results.",
        },
        {
          icon: React.createElement(IconCalendarEvent, { size: 32 }),
          title: "Seasonal Campaign Success",
          description: "Increase bookings during peak periods with timely campaigns.",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Our Meta Ads Work for", gradient: false },
        { text: "Hotels & Resorts", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(IconCamera, { size: 28 }),
          title: "Creative & Engaging Ads",
          description: "We design visuals that make travelers stop scrolling and book instantly.",
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "Precision Audience Targeting",
          description: "Reach travelers based on location, interests, behaviors, and booking intent.",
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Optimized for Conversions",
          description: "Every ad is tested, analyzed, and improved to maximize bookings and ROI.",
        },
      ],
      cta: {
        text: "Launch Meta Ads Today",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our Meta Ads Process for Hotels & Resorts",
      subtitle: "TARGET • ENGAGE • CONVERT",
      description:
        "We create data-driven campaigns that target the right audience, engage travelers with high-quality visuals, and convert them into direct bookings.",
      steps: [
        {
          id: 1,
          title: "Audience Research & Segmentation",
          description:
            "Identify ideal travelers using demographics, interests, behaviors, and location targeting.",
        },
        {
          id: 2,
          title: "Ad Creative Development",
          description:
            "Produce stunning visuals, videos, and reels highlighting rooms, amenities, packages, and experiences.",
        },
        {
          id: 3,
          title: "Campaign Setup & Launch",
          description:
            "Configure campaigns, ad sets, and creative placements for maximum reach and engagement.",
        },
        {
          id: 4,
          title: "A/B Testing & Optimization",
          description:
            "Continuously monitor ad performance, test variations, and refine to increase CTR and bookings.",
        },
        {
          id: 5,
          title: "Conversion Tracking & Reporting",
          description:
            "Track clicks, leads, bookings, and ROI to ensure every ad dollar drives measurable results.",
        },
      ],
    },
    cta: {
      title: "Start Your Hotel & Resort Meta Ads Today",
      subtitle: "ATTRACT TRAVELERS • DRIVE BOOKINGS • MAXIMIZE ROI",
      description:
        "Book a free consultation now and let our experts design high-performing Meta Ads campaigns for your hotel or resort.",
    },
  },
};
