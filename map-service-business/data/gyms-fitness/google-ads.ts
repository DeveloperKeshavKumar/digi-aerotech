import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  Activity,
  Users,
  BarChart2,
  Target,
  Calendar,
  Star,
  ArrowRight,
  Megaphone,
  TrendingUp,
} from "lucide-react";

export const map: ServiceBusinessMap = {
  service: "google-ads",
  business: "gyms-fitness",
  variants: {
    hero: "variant2",
    whyChooseUs: "variant1",
    process: "variant3",
  },
  data: {
    slug: "google-ads-gyms-fitness",
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
            { text: "Struggling to Attract Local Members with", gradient: false },
            { text: "Google Ads?", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "Gyms, fitness studios, and personal trainers often fail to reach potential members with generic Google Ads campaigns. Targeted campaigns are essential for growth.",
          painPoints: [
            "Ads not reaching local fitness enthusiasts",
            "High cost per click without conversions",
            "Poorly written ad copies & CTAs",
            "Difficulty tracking membership leads",
            "Limited ROI on ad spend",
          ],
          solutionPoints: [
            "Target hyper-local audiences based on location, age, and interests",
            "Craft persuasive ad copy & high-quality visuals",
            "Optimize bidding to maximize ROI",
            "Track leads from ad clicks to membership signups",
            "Refine campaigns regularly for better performance",
          ],
          cta: {
            icon: React.createElement(ArrowRight, { size: 20 }),
            text: "Boost Gym Memberships with Google Ads",
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
              question: "Can Google Ads increase gym memberships quickly?",
              answer:
                "Yes! With highly targeted campaigns, gyms see more inquiries, trial sign-ups, and memberships within weeks.",
              icon: React.createElement(Activity, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "Do you handle ad creatives and copywriting?",
              answer:
                "Absolutely. We design compelling visuals, ad copies, and CTAs that convert clicks into members.",
              icon: React.createElement(Star, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "How do you target the right audience?",
              answer:
                "We use location targeting, interest-based targeting, and demographic filters to reach potential gym members effectively.",
              icon: React.createElement(Target, { size: 22 }),
            },
            {
              id: "faq-4",
              question: "Can you track ROI from ads?",
              answer:
                "Yes. We integrate tracking to measure clicks, leads, calls, and conversions to ensure maximum ROI.",
              icon: React.createElement(BarChart2, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Want More",
      headlineKeywords: [
        "Gym Members?",
        "Fitness Sign-ups?",
        "High ROI Ads?",
        "Local Fitness Traffic?",
      ],
      brandLine: [
        {
          text: "💪 Drive More Members & Maximize ROI with Google Ads for Gyms",
          gradient: true,
          gradientClass: "from-orange-500 via-pink-500 to-red-600",
        },
      ],
      subheadline:
        "We run targeted Google Ads campaigns for gyms and fitness studios to attract local members, boost trial sign-ups, and grow your fitness business rapidly.",
      ctaButtons: [
        {
          icon: React.createElement(Megaphone, { size: 28 }),
          text: "Get Free Google Ads Strategy Call",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(Users, { size: 32 }),
          title: "2,000+ New Members",
          description: "Acquired via optimized Google Ads",
        },
        {
          icon: React.createElement(TrendingUp, { size: 32 }),
          title: "5X ROI",
          description: "From strategic ad campaigns",
        },
        {
          icon: React.createElement(Calendar, { size: 32 }),
          title: "50+ Gym Campaigns",
          description: "Successfully managed across local cities",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Gyms & Fitness Studios Choose Us for", gradient: false },
        { text: "Google Ads Management", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(Target, { size: 28 }),
          title: "Hyper-Local Targeting",
          description: "Reach people near your gym actively searching for fitness solutions.",
        },
        {
          icon: React.createElement(Activity, { size: 28 }),
          title: "Optimized Ad Copies",
          description: "Persuasive headlines and CTAs to maximize conversions.",
        },
        {
          icon: React.createElement(BarChart2, { size: 28 }),
          title: "ROI-Focused Campaigns",
          description: "Track and refine campaigns to ensure maximum returns.",
        },
      ],
      cta: {
        text: "Grow Your Gym Memberships Today",
        link: "#contact",
        icon: React.createElement(ArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our Google Ads Process for Gyms & Fitness Studios",
      subtitle: "TARGET • ENGAGE • CONVERT • SCALE",
      description:
        "We create high-performing campaigns tailored for local gyms and fitness studios, driving members and maximizing ad spend efficiency.",
      steps: [
        {
          id: 1,
          title: "Audience Research",
          description:
            "Identify the right demographic, location, and interests to target fitness enthusiasts effectively.",
        },
        {
          id: 2,
          title: "Ad Creative & Copy",
          description:
            "Design visually compelling ads and persuasive copies to grab attention and convert clicks into memberships.",
        },
        {
          id: 3,
          title: "Campaign Setup & Bidding",
          description:
            "Strategically set up campaigns with optimized bids for maximum ROI and cost-efficiency.",
        },
        {
          id: 4,
          title: "Performance Tracking",
          description:
            "Monitor clicks, leads, calls, and conversions to measure campaign success and make data-driven adjustments.",
        },
        {
          id: 5,
          title: "Continuous Optimization",
          description:
            "Refine targeting, copy, visuals, and bids to increase conversions and reduce wasted ad spend.",
        },
      ],
    },
    cta: {
      title: "Ready to Boost Gym Memberships with Google Ads?",
      subtitle: "TARGET LOCAL FITNESS ENTHUSIASTS",
      description:
        "Book a free consultation today and start running high-converting Google Ads campaigns for your gym or fitness studio.",
    },
  },
};
