import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  IconTarget,
  IconUsers,
  IconArrowRight,
  IconChartBar,
  IconShoppingBag,
  IconAd,
  IconMapPin,
  IconDeviceMobile,
  IconRocket,
} from "@tabler/icons-react";

export const map: ServiceBusinessMap = {
  service: "meta-ads",
  business: "local-business",
  variants: {
    hero: "variant3",
    whyChooseUs: "variant2",
    process: "variant1",
    testimonials: "variant3",
  },
  data: {
    slug: "meta-ads-for-local-business",
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
            { text: "Why Most Local Businesses", gradient: false },
            { text: "Struggle With Ads", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "Many local businesses waste money on Facebook & Instagram ads because they don’t target the right audience or track ROI properly.",
          painPoints: [
            "Boosting posts without strategy or measurable results",
            "Targeting the wrong audience or too broad locations",
            "Low conversions despite high ad spend",
            "No retargeting setup for missed customers",
            "Unclear ROI from advertising campaigns",
          ],
          solutionPoints: [
            "Laser-targeted local ads that reach customers nearby",
            "Ad creatives designed to attract, engage, and convert",
            "Click-to-call & message ads that generate real leads",
            "Retargeting campaigns to re-engage missed opportunities",
            "Transparent reporting to track every rupee spent",
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Launch My Local Ads",
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
              question: "How do Meta Ads help local businesses?",
              answer:
                "Meta Ads allow you to target customers within a specific area, showing them offers, promotions, and services right when they’re searching locally.",
              icon: React.createElement(IconMapPin, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "Can Meta Ads drive foot traffic?",
              answer:
                "Yes! With call-to-action ads like ‘Get Directions’ or ‘Call Now,’ we directly convert online engagement into walk-ins and phone calls.",
              icon: React.createElement(IconShoppingBag, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "How fast will I see results?",
              answer:
                "Most businesses start seeing inquiries and walk-ins within the first 7–14 days of running optimized local campaigns.",
              icon: React.createElement(IconRocket, { size: 22 }),
            },
            {
              id: "faq-4",
              question: "What kind of ROI can I expect?",
              answer:
                "We track every click, call, and conversion. Businesses often achieve 3x–8x ROI with properly targeted Meta Ads.",
              icon: React.createElement(IconChartBar, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Run",
      headlineKeywords: ["Smart Ads", "Local Customers", "Real Growth"],
      brandLine: [
        {
          text: "📲 Meta Ads Services for Local Businesses",
          gradient: true,
          gradientClass: "from-orange-500 via-pink-500 to-red-600",
        },
      ],
      subheadline:
        "We help local businesses run highly-targeted Facebook & Instagram ads that bring more calls, walk-ins, and loyal customers.",
      ctaButtons: [
        {
          icon: React.createElement(IconArrowRight, { size: 28 }),
          text: "Start My Campaign",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "3x More Reach",
          description: "Engage with local customers who matter the most",
        },
        {
          icon: React.createElement(IconTarget, { size: 32 }),
          title: "Hyper-Targeted",
          description: "Ads designed to reach people within your area",
        },
        {
          icon: React.createElement(IconDeviceMobile, { size: 32 }),
          title: "Call-to-Action Ads",
          description: "Directly drive calls, bookings & visits from ads",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Us For", gradient: false },
        { text: "Meta Ads?", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(IconAd, { size: 28 }),
          title: "Ad Creatives That Convert",
          description: "We design scroll-stopping creatives that turn viewers into buyers.",
        },
        {
          icon: React.createElement(IconTarget, { size: 28 }),
          title: "Precise Local Targeting",
          description: "We target only the audience near your business location.",
        },
        {
          icon: React.createElement(IconChartBar, { size: 28 }),
          title: "ROI-Focused Strategy",
          description: "Every campaign is built to maximize leads, not just clicks.",
        },
      ],
      cta: {
        text: "Boost My Local Sales",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our Meta Ads Process",
      subtitle: "TARGET • ENGAGE • CONVERT",
      className: "border-t border-border dark:border-gray-700",
      description:
        "We follow a structured campaign approach to help your business maximize reach, attract local customers, and generate real ROI.",
      steps: [
        {
          id: 1,
          title: "Audience Research",
          description: "We analyze your ideal customer profile and location targeting to create the perfect audience base.",
        },
        {
          id: 2,
          title: "Creative Ad Design",
          description: "We design ad creatives & copy that grab attention and drive action instantly.",
        },
        {
          id: 3,
          title: "Campaign Setup",
          description: "We launch ads with smart objectives—traffic, calls, messages, or conversions.",
        },
        {
          id: 4,
          title: "Optimization",
          description: "We constantly A/B test audiences, placements, and creatives for better results.",
        },
        {
          id: 5,
          title: "Reporting & Scaling",
          description: "We provide transparent reports and scale winning campaigns for maximum ROI.",
        },
      ],
    },
    testimonials: {
      title: [
        { text: "Local Businesses Winning", gradient: false },
        { text: "With Our Meta Ads", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      description:
        "From gyms to restaurants to clinics, our Meta Ads have helped local businesses achieve higher visibility, more bookings, and consistent customer growth.",
      testimonials: [
        {
          id: "1",
          message:
            "We used to waste money boosting posts. After switching to Meta Ads with this team, we get daily calls and walk-ins from Facebook ads.",
          highlight: "Daily Calls from Ads",
          stars: 5,
          name: "Amit Verma",
          designation: "Owner",
          company: "Verma Dental Clinic",
        },
        {
          id: "2",
          message:
            "Our small clothing store started appearing everywhere locally. We saw a 4x ROI within 6 weeks of running targeted Meta Ads.",
          highlight: "4X ROI in 6 Weeks",
          stars: 5,
          name: "Pooja Mehra",
          designation: "Founder",
          company: "TrendWear Boutique",
        },
      ],
    },
    cta: {
      title: "Get More Customers With Meta Ads",
      subtitle: "CALLS • BOOKINGS • SALES",
      description:
        "With laser-focused Meta Ads, we help your local business dominate social media, drive more calls, and convert nearby customers into loyal buyers.",
    },
  },
};
