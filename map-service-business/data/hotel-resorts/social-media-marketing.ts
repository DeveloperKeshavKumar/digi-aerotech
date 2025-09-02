import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  IconCamera,
  IconHeart,
  IconTrendingUp,
  IconUsers,
  IconStar,
  IconArrowRight,
  IconShieldCheck,
  IconWorld,
} from "@tabler/icons-react";

export const map: ServiceBusinessMap = {
  service: "social-media-marketing",
  business: "hotel-resort",
  variants: {
    hero: "variant2",
    whyChooseUs: "variant1",
    process: "variant3",
  },
  data: {
    slug: "social-media-marketing-hotel-resort",
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
            { text: "Social Media Marketing", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "Hotels and resorts often struggle to engage travelers online, showcase property features, and drive bookings through social channels.",
          painPoints: [
            "Low engagement on Instagram, Facebook, and TikTok",
            "Difficulty creating visually appealing content",
            "Missing seasonal promotions & campaigns",
            "Inconsistent brand messaging across platforms",
            "Limited follower growth & reach"
          ],
          solutionPoints: [
            "Creative campaigns tailored to travelers and luxury seekers",
            "Professional photography & video reels showcasing property highlights",
            "Seasonal, festival, and event-based social media content",
            "Engagement-driven strategies for follower growth and bookings",
            "Targeted ads and retargeting campaigns for conversions"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Boost Your Hotel’s Social Reach",
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
              question: "Can social media increase direct bookings?",
              answer:
                "Yes! Engaging campaigns, reels, and ads attract travelers directly to your booking pages, reducing dependency on OTAs.",
              icon: React.createElement(IconTrendingUp, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "Which platforms are best for hotels and resorts?",
              answer:
                "Instagram, Facebook, TikTok, and Pinterest are highly effective for showcasing visuals, offers, and guest experiences.",
              icon: React.createElement(IconCamera, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "Do you create seasonal campaigns?",
              answer:
                "Absolutely. We plan promotions for peak seasons, holidays, festivals, and events to maximize bookings.",
              icon: React.createElement(IconStar, { size: 22 }),
            },
            {
              id: "faq-4",
              question: "How do you grow our social media audience?",
              answer:
                "Through a mix of targeted ads, engaging content, contests, influencer collaborations, and consistent posting.",
              icon: React.createElement(IconUsers, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Engage & Attract Travelers with",
      headlineKeywords: [
        "Hotel Social Media Marketing",
        "Resort Instagram & TikTok",
        "Boost Direct Bookings Online",
        "Luxury Hospitality Campaigns",
        "Visual Storytelling for Hotels",
      ],
      brandLine: [
        {
          text: "📸 Transform Your Hotel & Resort Social Presence into Bookings",
          gradient: true,
          gradientClass: "from-orange-500 via-pink-500 to-red-600",
        },
      ],
      subheadline:
        "We help hotels and resorts leverage Instagram, Facebook, TikTok, and Pinterest to increase engagement, followers, and direct bookings.",
      ctaButtons: [
        {
          icon: React.createElement(IconHeart, { size: 28 }),
          text: "Get Free Social Media Audit",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "50K+ Social Followers",
          description: "Engaged audience across multiple platforms",
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "3X More Direct Bookings",
          description: "Conversion-focused social campaigns",
        },
        {
          icon: React.createElement(IconStar, { size: 32 }),
          title: "4.9/5 Guest Satisfaction",
          description: "Feedback driven and visually engaging content",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Hotels & Resorts Choose Us for", gradient: false },
        { text: "Social Media Marketing", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(IconCamera, { size: 28 }),
          title: "Visual Storytelling Experts",
          description: "Showcase your property with stunning images, reels, and videos.",
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Follower Growth & Engagement",
          description: "We implement strategies to grow followers and encourage engagement.",
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 28 }),
          title: "Conversion-Driven Campaigns",
          description: "Social campaigns designed to increase direct bookings and ROI.",
        },
      ],
      cta: {
        text: "Boost Your Hotel's Social Presence",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our Proven Social Media Process for Hotels & Resorts",
      subtitle: "PLAN • CREATE • ENGAGE • CONVERT",
      description:
        "We implement a comprehensive strategy that increases followers, engages audiences, and converts them into guests and bookings.",
      steps: [
        {
          id: 1,
          title: "Market & Audience Research",
          description: "Identify traveler demographics, preferences, and trends to target content effectively.",
        },
        {
          id: 2,
          title: "Content Planning & Creation",
          description: "Create high-quality photos, videos, reels, and stories that resonate with travelers.",
        },
        {
          id: 3,
          title: "Platform Optimization & Posting",
          description: "Optimize profiles, hashtags, captions, and posting schedules for maximum reach.",
        },
        {
          id: 4,
          title: "Engagement & Community Management",
          description: "Respond to comments, messages, and engage with followers to build trust and loyalty.",
        },
        {
          id: 5,
          title: "Paid Campaigns & Retargeting",
          description: "Run targeted social ads and retargeting campaigns to drive direct bookings.",
        },
        {
          id: 6,
          title: "Analysis & Continuous Improvement",
          description: "Track KPIs, engagement, and conversions to refine the strategy for ongoing success.",
        },
      ],
    },
    cta: {
      title: "Grow Your Hotel & Resort Social Media Presence",
      subtitle: "INCREASE FOLLOWERS • BOOST BOOKINGS • ENGAGE GLOBALLY",
      description:
        "Schedule your free consultation to discover how our social media strategies can make your hotel or resort the top choice for travelers online.",
    },
  },
};
