import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  IconMapSearch,
  IconMapPin,
  IconWorld,
  IconTrendingUp,
  IconArrowRight,
  IconBuildingSkyscraper,
  IconUsers,
  IconCalendarEvent,
  IconPhoneCall,
  IconTarget
} from "@tabler/icons-react";

export const map: ServiceBusinessMap = {
  service: "local-seo",
  business: "hotel-resort",
  variants: {
    hero: "variant1",
    whyChooseUs: "variant3",
    process: "variant2",
    testimonials: "variant1",
  },
  data: {
    slug: "local-seo-hotel-resort",
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
            { text: "Hotels & Resorts Struggle with", gradient: false },
            { text: "Local Visibility Online", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "Without strong local SEO, travelers searching for nearby hotels or resorts never find your property — resulting in lost bookings and revenue.",
          painPoints: [
            "Low visibility in Google Maps & search results",
            "Inconsistent NAP (Name, Address, Phone) listings",
            "Poor local reputation and review management",
            "Difficulty attracting nearby guests or corporate bookings",
            "Inaccurate or incomplete online property information",
          ],
          solutionPoints: [
            "Optimize Google Business Profile with high-quality photos & accurate info",
            "Target local keywords & phrases for searches like 'hotel near me'",
            "Manage reviews & respond to customer feedback promptly",
            "Build local citations & ensure consistency across directories",
            "Leverage local content marketing & location-based campaigns",
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Boost Local Bookings Now",
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
              question: "How does local SEO help my hotel or resort?",
              answer:
                "Local SEO ensures your property appears in nearby traveler searches, Google Maps, and top search results, increasing direct bookings.",
              icon: React.createElement(IconMapSearch, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "Can you manage my Google Business Profile?",
              answer:
                "Yes. We optimize your profile, add photos, manage reviews, and post regular updates to attract more local travelers.",
              icon: React.createElement(IconMapPin, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "Will local SEO improve occupancy rates?",
              answer:
                "Absolutely. Higher visibility for nearby searches drives more inquiries and confirmed bookings, even during off-peak seasons.",
              icon: React.createElement(IconTrendingUp, { size: 22 }),
            },
            {
              id: "faq-4",
              question: "How long before I see results?",
              answer:
                "Most hotels see noticeable traffic and inquiries within 4–8 weeks of our optimized local SEO campaigns.",
              icon: React.createElement(IconUsers, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Get Found by Travelers Near You",
      headlineKeywords: ["Local SEO for Hotels", "Resorts Near Me", "Increase Bookings"],
      brandLine: [
        {
          text: "📍 Boost Your Hotel or Resort’s Local Visibility & Occupancy",
          gradient: true,
          gradientClass: "from-orange-500 via-pink-500 to-red-600",
        },
      ],
      subheadline:
        "Our Local SEO strategies help hotels and resorts dominate nearby searches, attract travelers searching for accommodation, and generate direct bookings.",
      ctaButtons: [
        {
          icon: React.createElement(IconArrowRight, { size: 28 }),
          text: "Boost Local Visibility",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(IconMapPin, { size: 32 }),
          title: "100% Accurate Listings",
          description: "Ensure travelers see the right property info every time.",
        },
        {
          icon: React.createElement(IconCalendarEvent, { size: 32 }),
          title: "Higher Local Bookings",
          description: "Drive bookings from nearby travelers and corporate clients.",
        },
        {
          icon: React.createElement(IconWorld, { size: 32 }),
          title: "Rank on Google Maps",
          description: "Appear in map searches and local top results to maximize visibility.",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Our Local SEO", gradient: false },
        { text: "Delivers Results for Hotels & Resorts", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(IconTarget, { size: 28 }),
          title: "Local Keyword Targeting",
          description: "We optimize your content for searches travelers make in your area.",
        },
        {
          icon: React.createElement(IconBuildingSkyscraper, { size: 28 }),
          title: "Google Maps Domination",
          description: "Appear at the top of map and local pack results to attract guests.",
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "Review & Reputation Management",
          description: "Build trust with positive reviews and timely responses.",
        },
      ],
      cta: {
        text: "Rank Locally Today",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our Local SEO Process for Hotels & Resorts",
      subtitle: "OPTIMIZE • RANK • ATTRACT",
      description:
        "We ensure your hotel or resort gets noticed by nearby travelers looking for stays, creating a continuous stream of direct bookings.",
      steps: [
        {
          id: 1,
          title: "Property Audit & Analysis",
          description:
            "We check your website, Google Business Profile, citations, and reviews to identify opportunities for optimization.",
        },
        {
          id: 2,
          title: "On-Page SEO & Local Keywords",
          description:
            "Optimize title tags, meta descriptions, headers, and content with local search terms like 'hotel near me' or 'resort in [city]'.",
        },
        {
          id: 3,
          title: "Google Business Optimization",
          description:
            "Add high-quality images, update property info, manage posts, and respond to reviews to attract more guests.",
        },
        {
          id: 4,
          title: "Citations & Listings",
          description:
            "Submit property info to authoritative directories ensuring NAP consistency across the web.",
        },
        {
          id: 5,
          title: "Performance Tracking & Optimization",
          description:
            "Monitor rankings, clicks, calls, and bookings; refine strategies to continuously improve results.",
        },
      ],
    },
    testimonials: {
      title: [
        { text: "Hotels & Resorts That", gradient: false },
        { text: "Ranked Locally & Boosted Bookings", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      description:
        "From boutique stays to luxury resorts, our local SEO campaigns drive inquiries, footfalls, and direct bookings consistently.",
      testimonials: [
        {
          id: "1",
          message:
            "Our resort started appearing on top in Google Maps and nearby searches, leading to a 50% increase in direct bookings.",
          highlight: "Top in Google Maps",
          stars: 5,
          name: "Anil Kumar",
          designation: "Owner",
          company: "Sea Breeze Resort",
        },
        {
          id: "2",
          message:
            "Local SEO helped us get more walk-ins and corporate clients. We’re now the most booked hotel in our city.",
          highlight: "Most booked hotel locally",
          stars: 5,
          name: "Ritu Sharma",
          designation: "GM",
          company: "Mountain View Retreat",
        },
      ],
    },
    cta: {
      title: "Boost Your Hotel or Resort’s Local Visibility Today",
      subtitle: "ATTRACT NEARBY TRAVELERS • INCREASE DIRECT BOOKINGS • GROW REVENUE",
      description:
        "Book a free consultation now and watch your hotel or resort appear in top local searches to attract more guests.",
    },
  },
};
