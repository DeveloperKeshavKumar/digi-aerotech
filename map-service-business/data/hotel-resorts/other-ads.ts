import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  IconBrandYoutube,
  IconBrandTiktok,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandSnapchat,
  IconTrendingUp,
  IconUsers,
  IconHeart,
  IconShieldCheck,
  IconArrowRight
} from "@tabler/icons-react";

export const map: ServiceBusinessMap = {
  service: "other-ads",
  business: "hotel-resort",
  variants: {
    hero: "variant2",
    whyChooseUs: "variant1",
    process: "variant3",
  },
  data: {
    slug: "other-ads-hotel-resort",
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
            { text: "Multi-Platform Advertising", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline:
            "Without leveraging multiple social & video platforms, hotels and resorts miss direct bookings, brand awareness, and repeat customers.",
          painPoints: [
            "Limited reach across social & video platforms",
            "Low engagement on Instagram, TikTok, or YouTube",
            "Difficulty creating targeted campaigns for different audiences",
            "Missing opportunities for direct bookings & promotions"
          ],
          solutionPoints: [
            "Platform-specific campaigns on TikTok, YouTube, Snapchat, Twitter, LinkedIn",
            "Engaging ad creatives, reels, and stories to attract guests",
            "Targeted campaigns for domestic & international travelers",
            "Conversion-focused strategies to maximize bookings"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Boost Your Hotel Ads Across Platforms",
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
              question: "Which platforms should hotels advertise on?",
              answer:
                "We run campaigns on TikTok, YouTube, Snapchat, Twitter, and LinkedIn depending on your target audience for maximum bookings.",
              icon: React.createElement(IconBrandTiktok, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "Can you target international travelers?",
              answer:
                "Yes. We create multi-country ad campaigns with language and culture-specific creatives to attract global guests.",
              icon: React.createElement(IconBrandLinkedin, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "How do these ads increase direct bookings?",
              answer:
                "Through conversion-focused creatives, call-to-action links, and retargeting strategies, ads drive guests directly to your booking portal.",
              icon: React.createElement(IconBrandYoutube, { size: 22 }),
            },
            {
              id: "faq-4",
              question: "Are these campaigns suitable for small resorts?",
              answer:
                "Absolutely. We design scalable campaigns so even boutique hotels and resorts gain maximum visibility and bookings.",
              icon: React.createElement(IconBrandSnapchat, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Reach More Guests with",
      headlineKeywords: [
        "YouTube Hotel Ads",
        "TikTok Resort Campaigns",
        "Snapchat Promotions",
        "LinkedIn Hotel Marketing",
        "Twitter Engagement Ads"
      ],
      brandLine: [
        {
          text: "📢 Multi-Platform Ads to Increase Bookings & Brand Awareness for Hotels & Resorts",
          gradient: true,
          gradientClass: "from-orange-500 via-pink-500 to-red-600",
        },
      ],
      subheadline:
        "We help hotels & resorts advertise on TikTok, YouTube, Snapchat, Twitter, and LinkedIn to reach targeted travelers, increase bookings, and build brand visibility.",
      ctaButtons: [
        {
          icon: React.createElement(IconArrowRight, { size: 28 }),
          text: "Start Multi-Platform Ads Today",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "500,000+ Ad Views",
          description: "Potential guests reached through multi-platform campaigns",
        },
        {
          icon: React.createElement(IconHeart, { size: 32 }),
          title: "High Engagement",
          description: "Increased clicks, interactions, and bookings",
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "Boost Bookings",
          description: "Direct conversions from ad campaigns",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Our Multi-Platform Ads for", gradient: false },
        { text: "Hotels & Resorts", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(IconBrandYoutube, { size: 28 }),
          title: "Platform-Specific Strategies",
          description: "Custom campaigns designed for each social & video platform.",
        },
        {
          icon: React.createElement(IconBrandTiktok, { size: 28 }),
          title: "Engaging Visual Content",
          description: "Ads, reels, and videos that capture the traveler’s attention.",
        },
        {
          icon: React.createElement(IconBrandSnapchat, { size: 28 }),
          title: "Targeted Audience Reach",
          description: "We precisely target domestic & international travelers.",
        },
      ],
      cta: {
        text: "Advertise on Multiple Platforms Today",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our Multi-Platform Advertising Process",
      subtitle: "PLAN • CREATE • LAUNCH • OPTIMIZE",
      description:
        "We plan and launch high-performing ad campaigns across multiple platforms to maximize bookings, engagement, and brand awareness.",
      steps: [
        {
          id: 1,
          title: "Audience & Platform Research",
          description:
            "Identify your ideal guests and the platforms they engage with most.",
        },
        {
          id: 2,
          title: "Creative Concept & Design",
          description:
            "Craft visually stunning ads, videos, and reels tailored for each platform.",
        },
        {
          id: 3,
          title: "Campaign Setup & Launch",
          description:
            "Configure ad campaigns with precise targeting, budgeting, and scheduling for maximum ROI.",
        },
        {
          id: 4,
          title: "Monitoring & Optimization",
          description:
            "Continuously track performance and optimize creatives, targeting, and bidding to improve results.",
        },
      ],
    },
    cta: {
      title: "Launch Multi-Platform Ads for Your Hotel or Resort Today",
      subtitle: "INCREASE BOOKINGS • BOOST ENGAGEMENT • BUILD BRAND VISIBILITY",
      description:
        "Book a free consultation and let our experts design a multi-platform ad strategy that drives direct bookings, engages guests, and grows your hotel brand.",
    },
  },
};
