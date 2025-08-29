import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  IconBrandTwitter,
  IconBrandSnapchat,
  IconBrandYoutube,
  IconBrandTiktok,
  IconBrandLinkedin,
  IconMicroscope,
  IconHeartbeat,
  IconArrowRight,
  IconTarget,
  IconUsers,
} from "@tabler/icons-react";

export const map: ServiceBusinessMap = {
  service: "other-ads",
  business: "pharma-companies",
  variants: {
    hero: "variant2",
    whyChooseUs: "variant3",
    process: "variant1",
    testimonials: "variant2",
  },
  data: {
    slug: "other-ads-pharma-companies",
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
            { text: "Why Pharma Brands", gradient: false },
            { text: "Need Ads Beyond Google & Meta", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "Pharma companies often limit themselves to Google and Meta ads, missing huge opportunities on platforms like Twitter, YouTube, TikTok, Snapchat, and LinkedIn.",
          painPoints: [
            "Overcrowded competition in Google Ads & Meta Ads",
            "Difficulty standing out in traditional pharma advertising",
            "Missed opportunities to connect with younger, digital-native audiences",
            "Lack of targeted B2B networking for distributors & hospitals",
            "Regulatory ad restrictions limiting reach",
          ],
          solutionPoints: [
            "Use LinkedIn Ads for B2B pharma distributor & hospital partnerships",
            "Engage younger audiences via TikTok, YouTube Shorts & Snapchat ads",
            "Leverage Twitter Ads for thought leadership & medical updates",
            "Run awareness campaigns on YouTube for new product launches",
            "Target niche segments with tailored multi-channel strategies",
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Explore Pharma Ad Platforms",
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
              question: "Which ad platforms work best for pharma companies?",
              answer:
                "We recommend LinkedIn for B2B, YouTube & TikTok for awareness, Twitter for authority building, and Snapchat for younger audiences.",
              icon: React.createElement(IconTarget, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "Are pharma ads allowed on these platforms?",
              answer:
                "Yes, but with restrictions. We ensure all ad creatives follow regulatory guidelines while still being impactful and engaging.",
              icon: React.createElement(IconMicroscope, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "How do these ads generate pharma leads?",
              answer:
                "By targeting patients, doctors, hospitals, and distributors across multiple touchpoints, these ads increase visibility, build trust, and convert into qualified leads.",
              icon: React.createElement(IconUsers, { size: 22 }),
            },
            {
              id: "faq-4",
              question: "Can we track ROI on these campaigns?",
              answer:
                "Absolutely. We integrate analytics & reporting to measure engagement, lead generation, and conversion rates for every platform.",
              icon: React.createElement(IconHeartbeat, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Expand",
      headlineKeywords: ["Pharma Ads Beyond Google & Meta", "LinkedIn Ads", "YouTube Campaigns", "TikTok & Snapchat Ads"],
      brandLine: [
        {
          text: "📢 Unlock Multi-Channel Pharma Growth with Ads on Twitter, YouTube, TikTok, Snapchat & LinkedIn",
          gradient: true,
          gradientClass: "from-orange-500 via-pink-500 to-red-600",
        },
      ],
      subheadline:
        "We help pharma brands run compliant, targeted, and ROI-driven campaigns across multiple ad platforms beyond just Google & Meta.",
      ctaButtons: [
        {
          icon: React.createElement(IconArrowRight, { size: 28 }),
          text: "Start Multi-Channel Pharma Ads",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(IconBrandLinkedin, { size: 32 }),
          title: "300% More B2B Leads",
          description: "via LinkedIn Pharma Ads",
        },
        {
          icon: React.createElement(IconBrandYoutube, { size: 32 }),
          title: "2.5X Awareness",
          description: "with YouTube Pharma Ads",
        },
        {
          icon: React.createElement(IconBrandTiktok, { size: 32 }),
          title: "New Gen Audience",
          description: "via TikTok & Snapchat Ads",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Us for", gradient: false },
        { text: "Pharma Multi-Platform Ads?", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(IconBrandLinkedin, { size: 28 }),
          title: "B2B Pharma Focus",
          description: "We use LinkedIn Ads to connect you with hospitals, doctors & distributors.",
        },
        {
          icon: React.createElement(IconBrandTiktok, { size: 28 }),
          title: "Engaging Gen Z & Millennials",
          description: "We create impactful TikTok & Snapchat ads for younger health-conscious audiences.",
        },
        {
          icon: React.createElement(IconBrandYoutube, { size: 28 }),
          title: "Video-First Awareness",
          description: "YouTube Ads bring your pharma brand to life with storytelling & education.",
        },
        {
          icon: React.createElement(IconBrandTwitter, { size: 28 }),
          title: "Authority & Thought Leadership",
          description: "Twitter Ads build trust by positioning your brand as a credible medical voice.",
        },
      ],
      cta: {
        text: "Run Multi-Channel Ads Now",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our Process for Multi-Platform Pharma Ads",
      subtitle: "REACH. ENGAGE. CONVERT.",
      className: "border-t border-border dark:border-gray-700",
      description:
        "We design and execute pharma ad campaigns tailored to platform strengths, audience behavior, and compliance requirements.",
      steps: [
        {
          id: 1,
          title: "Ad Platform Selection",
          description: "We analyze your pharma niche and select the best mix of LinkedIn, YouTube, Twitter, TikTok & Snapchat.",
        },
        {
          id: 2,
          title: "Ad Creative Development",
          description: "We design ad creatives that balance compliance with creativity, ensuring strong engagement.",
        },
        {
          id: 3,
          title: "Audience Targeting",
          description: "We define custom pharma audiences: patients, doctors, hospitals, or distributors based on your goals.",
        },
        {
          id: 4,
          title: "Campaign Execution",
          description: "Ads are launched with platform-specific strategies, optimized for reach & conversions.",
        },
        {
          id: 5,
          title: "Performance Tracking",
          description: "We provide detailed analytics on reach, engagement, leads & conversion rate improvements.",
        },
        {
          id: 6,
          title: "Scaling & Optimization",
          description: "Successful campaigns are scaled with budget optimization and audience retargeting.",
        },
      ],
    },
    testimonials: {
      title: [
        { text: "Pharma Brands", gradient: false },
        { text: "Scaling with Multi-Platform Ads", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      description:
        "Our pharma clients have successfully tapped into new audiences, generated stronger leads, and improved brand authority through ads beyond Google & Meta.",
      testimonials: [
        {
          id: "1",
          message:
            "LinkedIn Ads connected us with hospital chains directly, cutting middlemen and boosting B2B orders significantly.",
          highlight: "300% More B2B Orders",
          stars: 5,
          name: "Ramesh Khanna",
          designation: "Director",
          company: "MediCore Pharma",
        },
        {
          id: "2",
          message:
            "YouTube Ads positioned our new product launch in front of millions of doctors and patients. We saw instant trust building.",
          highlight: "2.5M Views in 30 Days",
          stars: 5,
          name: "Anita Kapoor",
          designation: "Marketing Head",
          company: "BioHealth Labs",
        },
      ],
    },
    cta: {
      title: "Run Multi-Channel Pharma Ads",
      subtitle: "TWITTER • YOUTUBE • LINKEDIN • SNAPCHAT • TIKTOK",
      description:
        "Don’t limit your pharma brand to just Google & Meta. Expand your reach with high-impact ads across platforms trusted by millions of patients, doctors & hospitals.",
    },
  },
};
