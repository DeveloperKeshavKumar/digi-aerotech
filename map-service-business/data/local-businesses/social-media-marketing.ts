import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandYoutube,
  IconUsers,
  IconMessageCircle,
  IconTrendingUp,
  IconMapPin,
  IconArrowRight,
} from "@tabler/icons-react";

export const map: ServiceBusinessMap = {
  service: "social-media-marketing",
  business: "local-business",
  variants: {
    hero: "variant3",
    whyChooseUs: "variant2",
    process: "variant1",
  },
  data: {
    slug: "social-media-marketing-local-business",
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
            { text: "Why Local Businesses Struggle", gradient: false },
            { text: "On Social Media", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "Social media is where your customers spend most of their time. Without the right strategy, your local business risks being invisible to them.",
          painPoints: [
            "No consistent posting & poor engagement",
            "Not reaching the right local audience",
            "Competitors running viral campaigns",
            "Low followers but high inactive users",
            "No conversion strategy from social to sales",
          ],
          solutionPoints: [
            "Engage local customers with attractive content",
            "Geo-targeted campaigns for nearby customers",
            "Creative reels, posts & stories that drive traffic",
            "Build a community & repeat customer base",
            "Convert social media followers into paying clients",
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Grow My Local Business on Social Media",
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
              question: "How does social media help local businesses?",
              answer:
                "Social media connects you directly with nearby customers. By running geo-targeted campaigns and engaging content, we convert followers into daily walk-ins and calls.",
              icon: React.createElement(IconUsers, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "Which platforms are best for local businesses?",
              answer:
                "Facebook, Instagram, WhatsApp, and Google Business updates are most effective. For restaurants & gyms, TikTok and YouTube Shorts also work wonders.",
              icon: React.createElement(IconBrandInstagram, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "Can social media marketing increase walk-ins?",
              answer:
                "Yes. By promoting offers, events, and reviews, we create urgency that drives local customers to your store, clinic, or restaurant.",
              icon: React.createElement(IconMapPin, { size: 22 }),
            },
            {
              id: "faq-4",
              question: "Do I need ads or just organic posts?",
              answer:
                "Both. Organic posts build community trust, while ads amplify reach. We balance both to maximize ROI and ensure growth.",
              icon: React.createElement(IconTrendingUp, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Grow",
      headlineKeywords: ["Engage Locals", "Boost Walk-Ins", "Build Community"],
      brandLine: [
        {
          text: "📢 Social Media Marketing for Local Businesses",
          gradient: true,
          gradientClass: "from-orange-500 via-pink-500 to-red-600",
        },
      ],
      subheadline:
        "We help local businesses like shops, gyms, restaurants & clinics attract nearby customers through Facebook, Instagram, WhatsApp & TikTok marketing.",
      ctaButtons: [
        {
          icon: React.createElement(IconArrowRight, { size: 28 }),
          text: "Start My Social Media Growth",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(IconBrandFacebook, { size: 32 }),
          title: "95% Users",
          description: "Local customers are active on Facebook & Instagram daily.",
        },
        {
          icon: React.createElement(IconBrandTiktok, { size: 32 }),
          title: "Viral Reach",
          description: "Short videos create instant buzz for local offers.",
        },
        {
          icon: React.createElement(IconBrandYoutube, { size: 32 }),
          title: "Trust Factor",
          description: "Strong social presence builds credibility & loyalty.",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Us For", gradient: false },
        { text: "Social Media Marketing?", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(IconMessageCircle, { size: 28 }),
          title: "Engaging Content",
          description: "We design posts, reels & stories that grab attention.",
        },
        {
          icon: React.createElement(IconMapPin, { size: 28 }),
          title: "Geo-Targeted Ads",
          description: "Reach customers in your city, street, or locality.",
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Sales-Driven Strategy",
          description: "We focus on converting likes & shares into real sales.",
        },
      ],
      cta: {
        text: "Boost My Local Presence",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our Social Media Marketing Process",
      subtitle: "CREATE • ENGAGE • CONVERT • SCALE",
      className: "border-t border-border dark:border-gray-700",
      description:
        "We follow a proven process to grow your local business through powerful social media strategies.",
      steps: [
        {
          id: 1,
          title: "Profile Optimization",
          description: "We optimize your Facebook, Instagram & WhatsApp profiles for local visibility.",
        },
        {
          id: 2,
          title: "Content Calendar",
          description: "We plan posts, reels, offers & events tailored to your business niche & seasonality.",
        },
        {
          id: 3,
          title: "Creative Production",
          description: "Our designers create scroll-stopping graphics, reels & ads that grab attention instantly.",
        },
        {
          id: 4,
          title: "Community Engagement",
          description: "We manage comments, DMs & reviews to build trust with your local audience.",
        },
        {
          id: 5,
          title: "Targeted Campaigns",
          description: "Running geo-targeted ads to reach customers near your shop, clinic, or restaurant.",
        },
        {
          id: 6,
          title: "Analytics & Scaling",
          description: "We track growth, optimize campaigns, and scale what brings maximum ROI.",
        },
      ],
    },
    cta: {
      title: "Turn Social Media Into Customers",
      subtitle: "ENGAGE LOCALS • DRIVE SALES • BUILD LOYALTY",
      description:
        "Stop just posting for likes—start converting social media followers into real customers. Let’s grow your local business together.",
    },
  },
};
