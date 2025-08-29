import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  Users,
  Smartphone,
  Target,
  TrendingUp,
  Activity,
  Star,
  Calendar,
  ArrowRight,
  BellRing,
  Heart,
} from "lucide-react";

export const map: ServiceBusinessMap = {
  service: "meta-ads",
  business: "gyms-fitness",
  variants: {
    hero: "variant1",
    whyChooseUs: "variant2",
    process: "variant3",
    testimonials: "variant1",
  },
  data: {
    slug: "meta-ads-gyms-fitness",
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
            { text: "Struggling to Get Gym Members Online?", gradient: false },
            { text: "Meta Ads Can Skyrocket Your Leads", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "Many gyms, fitness studios, and personal trainers fail to reach their ideal audience on social media. Meta Ads allow you to target people ready to take action and become members.",
          painPoints: [
            "Low engagement on Facebook & Instagram pages",
            "Difficulty reaching fitness enthusiasts nearby",
            "High ad spend with poor ROI",
            "Struggling to promote new classes, events, or memberships",
            "Missing out on retargeting warm leads effectively",
          ],
          solutionPoints: [
            "Targeted Facebook & Instagram campaigns for your ideal local audience",
            "Custom ad creatives for engagement, sign-ups & membership drives",
            "Retargeting campaigns to convert website visitors and social media engagers",
            "Trackable campaigns optimized for high ROI",
            "Seasonal & promotional campaigns to boost attendance",
          ],
          cta: {
            icon: React.createElement(ArrowRight, { size: 20 }),
            text: "Start Running High-Converting Meta Ads Today",
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
              question: "How can Meta Ads increase my gym memberships?",
              answer:
                "Meta Ads target the right audience on Facebook & Instagram, engaging fitness enthusiasts with offers, events, and membership campaigns.",
              icon: React.createElement(Target, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "Do you manage ad creatives and campaigns?",
              answer:
                "Yes, we handle ad copy, visuals, videos, targeting, and campaign optimization to ensure maximum engagement and conversions.",
              icon: React.createElement(Activity, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "Can small fitness studios benefit from Meta Ads?",
              answer:
                "Absolutely. Even smaller gyms can reach the right local audience efficiently, generating consistent leads at an affordable ad spend.",
              icon: React.createElement(Users, { size: 22 }),
            },
            {
              id: "faq-4",
              question: "How soon will I see results from Meta Ads?",
              answer:
                "You can expect inquiries, sign-ups, and website clicks within days of launching campaigns, with performance improving over time through optimization.",
              icon: React.createElement(TrendingUp, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Want to Fill Your Gym Classes Fast?",
      headlineKeywords: [
        "With Facebook & Instagram Ads?",
        "Reach Local Fitness Enthusiasts?",
        "Boost Memberships Rapidly?",
        "360° Meta Ads for Gyms?",
      ],
      brandLine: [
        { text: "🚀 Run High-Converting Meta Ads for Your Gym & Fitness Studio", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      subheadline:
        "We create engaging, results-driven Meta Ads campaigns to attract, convert, and retain local gym members and fitness enthusiasts.",
      ctaButtons: [
        {
          icon: React.createElement(Smartphone, { size: 28 }),
          text: "Book Free Meta Ads Consultation",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(Users, { size: 32 }),
          title: "200+ Campaigns Run",
          description: "For gyms, studios & fitness professionals",
        },
        {
          icon: React.createElement(Heart, { size: 32 }),
          title: "3X Membership Growth",
          description: "Increased client sign-ups within months",
        },
        {
          icon: React.createElement(Star, { size: 32 }),
          title: "4.9/5 Client Rating",
          description: "High satisfaction & ROI-focused campaigns",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Gyms & Studios Choose Us for", gradient: false },
        { text: "Meta Ads", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(Target, { size: 28 }),
          title: "Precise Audience Targeting",
          description: "Reach people most likely to join your gym or studio.",
        },
        {
          icon: React.createElement(Activity, { size: 28 }),
          title: "Engaging Creatives & Offers",
          description: "Ads designed to grab attention and drive clicks & sign-ups.",
        },
        {
          icon: React.createElement(TrendingUp, { size: 28 }),
          title: "ROI-Driven Campaigns",
          description: "We optimize ads to maximize leads and memberships efficiently.",
        },
      ],
      cta: {
        text: "Launch Your Meta Ads Now",
        link: "#contact",
        icon: React.createElement(ArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our Meta Ads Process for Gyms & Fitness",
      subtitle: "TARGET • ENGAGE • CONVERT",
      description:
        "We run Meta Ads campaigns with a step-by-step approach, ensuring maximum visibility, engagement, and membership conversions for gyms and fitness studios.",
      steps: [
        {
          id: 1,
          title: "Audience Research & Targeting",
          description:
            "Identify local fitness enthusiasts and people interested in health, wellness, and gym memberships for highly-targeted campaigns.",
        },
        {
          id: 2,
          title: "Creative Development",
          description:
            "Design eye-catching visuals, videos, and ad copy tailored to your gym's services, classes, and promotions.",
        },
        {
          id: 3,
          title: "Campaign Setup & Launch",
          description:
            "Set up optimized campaigns on Facebook & Instagram with proper bidding, placements, and objectives for conversions.",
        },
        {
          id: 4,
          title: "Retargeting Warm Leads",
          description:
            "Re-engage website visitors, past members, and social media engagers to increase membership sign-ups.",
        },
        {
          id: 5,
          title: "Performance Tracking & Optimization",
          description:
            "Monitor campaign KPIs, adjust creatives & targeting, and maximize ROI continuously.",
        },
        {
          id: 6,
          title: "Reporting & Insights",
          description:
            "Provide detailed reports on leads generated, cost per lead, click-through rates, and membership growth.",
        },
      ],
    },
    testimonials: {
      title: [
        { text: "Gyms & Fitness Studios Who ", gradient: false },
        { text: "Scaled with Meta Ads", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      description:
        "See how gyms and fitness studios attracted local clients and boosted memberships with our Meta Ads campaigns.",
      testimonials: [
        {
          id: "1",
          message:
            "Our membership inquiries tripled after launching Meta Ads. The campaigns targeted the right local audience perfectly.",
          highlight: "membership inquiries tripled",
          stars: 5,
          name: "Sandeep Rao",
          designation: "Owner",
          company: "IronFlex Gym",
        },
        {
          id: "2",
          message:
            "The Meta Ads campaign helped us fill classes faster and grow our community of fitness enthusiasts.",
          highlight: "fill classes faster",
          stars: 5,
          name: "Anita Singh",
          designation: "Founder",
          company: "FitZone Studio",
        },
      ],
    },
    cta: {
      title: "Ready to Grow Your Gym Memberships with Meta Ads?",
      subtitle: "TARGET LOCAL FITNESS ENTHUSIASTS & BOOST SIGN-UPS",
      description:
        "Book a free Meta Ads consultation today and watch your gym or fitness studio attract highly-engaged members consistently.",
    },
  },
};
