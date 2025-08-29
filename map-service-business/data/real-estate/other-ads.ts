import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  IconBuildingSkyscraper,
  IconVideo,
  IconUsers,
  IconTrendingUp,
  IconPhoneCall,
  IconArrowRight,
  IconDeviceTv,
  IconNetwork,
  IconShare2,
  IconMessage,
} from "@tabler/icons-react";

export const map: ServiceBusinessMap = {
  service: "other-ads",
  business: "real-estate",
  variants: {
    hero: "variant1",
    whyChooseUs: "variant3",
    process: "variant2",
    testimonials: "variant1",
  },
  data: {
    slug: "other-ads-real-estate",
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
            { text: "Challenges Real Estate Brands", gradient: false },
            { text: "Face on Emerging Ad Platforms", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "Realtors, property developers, and brokers often miss huge opportunities by ignoring platforms like TikTok, YouTube, Snapchat, Twitter, and LinkedIn.",
          painPoints: [
            "Difficulty standing out with traditional ads",
            "Younger buyers shifting to TikTok & Instagram Reels",
            "Investors and B2B leads active on LinkedIn but underutilized",
            "Expensive campaigns with poor targeting on old channels",
            "Low trust without video-based storytelling",
          ],
          solutionPoints: [
            "YouTube property walkthroughs that convert viewers into buyers",
            "TikTok & Snapchat short-form property reels for millennials & Gen Z",
            "LinkedIn ads that attract serious investors & B2B partners",
            "Twitter/X ads for instant property updates & engagement",
            "Cross-platform remarketing to nurture warm leads",
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Launch High-Impact Ads",
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
              question: "Why should real estate invest in TikTok & Snapchat ads?",
              answer:
                "Because millennials & Gen Z are increasingly buying or renting homes. Short-form video ads are proven to influence their property decisions.",
              icon: React.createElement(IconVideo, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "Can YouTube ads really help sell properties?",
              answer:
                "Yes! Video walkthroughs and targeted property ads on YouTube drive high-intent leads and boost trust with virtual home tours.",
              icon: React.createElement(IconDeviceTv, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "Is LinkedIn advertising relevant for real estate?",
              answer:
                "Absolutely. LinkedIn ads attract high-net-worth individuals, investors, and corporate clients looking for commercial or premium properties.",
              icon: React.createElement(IconNetwork, { size: 22 }),
            },
            {
              id: "faq-4",
              question: "How does Twitter/X help in real estate marketing?",
              answer:
                "Twitter/X ads are perfect for real-time property updates, flash offers, and instant engagement with potential buyers.",
              icon: React.createElement(IconShare2, { size: 22 }),
            },
            {
              id: "faq-5",
              question: "Can multiple ad platforms be used together?",
              answer:
                "Yes. Our cross-platform campaigns use retargeting across YouTube, TikTok, and LinkedIn to maximize conversions and ROI.",
              icon: React.createElement(IconTrendingUp, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Want",
      headlineKeywords: [
        "Property Walkthrough Ads?",
        "More Investor Leads?",
        "Gen Z Buyers on TikTok?",
        "Engagement on YouTube & LinkedIn?",
        "360° Multi-Platform Real Estate Ads?",
      ],
      brandLine: [
        {
          text: "📢 Reach Homebuyers, Renters & Investors with Multi-Channel Ads",
          gradient: false,
        },
      ],
      subheadline:
        "We help real estate agents, developers, and property businesses scale with ads on TikTok, YouTube, Snapchat, LinkedIn, and Twitter/X.",
      ctaButtons: [
        {
          icon: React.createElement(IconPhoneCall, { size: 28 }),
          text: "Book Free Ad Strategy Call",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "10,000+ Leads",
          description: "Generated from TikTok, YouTube & LinkedIn Ads",
        },
        {
          icon: React.createElement(IconVideo, { size: 32 }),
          title: "500+ Property Videos",
          description: "Created & promoted across platforms",
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "3X ROI",
          description: "On cross-platform advertising",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the", gradient: false },
        {
          text: "Best Multi-Channel Ads Partner for Real Estate",
          gradient: true,
          gradientClass: "from-orange-500 via-pink-500 to-red-600",
        },
      ],
      trustPoints: [
        {
          icon: React.createElement(IconVideo, { size: 28 }),
          title: "Expert in Video Marketing",
          description:
            "We create stunning property walkthroughs that inspire trust & sales.",
        },
        {
          icon: React.createElement(IconNetwork, { size: 28 }),
          title: "Cross-Platform Expertise",
          description:
            "From TikTok to LinkedIn, we optimize ads for every audience segment.",
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "Targeted Audience Reach",
          description:
            "Connect with buyers, renters, and investors where they are most active.",
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Data-Driven Campaigns",
          description:
            "Every ad is tracked, optimized, and scaled for maximum ROI.",
        },
      ],
      cta: {
        text: "Start Multi-Platform Ads Today",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our Real Estate Multi-Channel Ads Process",
      subtitle: "FROM CREATIVE TO CONVERSIONS",
      className: "border-t border-border dark:border-gray-700",
      description:
        "We run property ad campaigns across TikTok, YouTube, LinkedIn, Twitter, and Snapchat to maximize visibility, leads, and conversions.",
      steps: [
        {
          id: 1,
          title: "Market & Audience Research",
          description:
            "We identify property buyers, renters, and investors across platforms.",
        },
        {
          id: 2,
          title: "Content Creation & Video Production",
          description:
            "We create compelling property videos, ads, and creatives tailored for each platform.",
        },
        {
          id: 3,
          title: "Platform-Specific Ad Setup",
          description:
            "Ads are customized for TikTok, LinkedIn, YouTube, Twitter, and Snapchat to maximize impact.",
        },
        {
          id: 4,
          title: "Targeting & Optimization",
          description:
            "We refine targeting by demographics, interests, behavior, and retargeting data.",
        },
        {
          id: 5,
          title: "Scaling & ROI Growth",
          description:
            "Campaigns that perform well are scaled aggressively to maximize ROI.",
        },
      ],
    },
    testimonials: {
      title: [
        { text: "Real Estate Brands Who", gradient: false },
        {
          text: "Grew with Multi-Platform Ads",
          gradient: true,
          gradientClass: "from-orange-500 via-pink-500 to-red-600",
        },
      ],
      description:
        "See how we helped real estate businesses generate more leads, buyers, and investors through emerging ad platforms.",
      testimonials: [
        {
          id: "1",
          message:
            "Digi Aerotech ran TikTok & YouTube ads for our new property launch and we closed 40% of bookings in just 3 weeks.",
          highlight: "closed 40% bookings",
          stars: 5,
          name: "Rohit Verma",
          designation: "Director",
          company: "Skyline Builders",
        },
        {
          id: "2",
          message:
            "Our LinkedIn ad campaigns generated serious investor leads for our commercial property project. Excellent ROI!",
          highlight: "serious investor leads",
          stars: 5,
          name: "Priya Malhotra",
          designation: "CEO",
          company: "UrbanSpaces Realty",
        },
      ],
    },
    cta: {
      title: "Want to Sell More Properties with Multi-Channel Ads?",
      subtitle: "REACH BUYERS & INVESTORS ANYWHERE",
      description:
        "From TikTok to LinkedIn, we run powerful real estate ad campaigns that deliver high-quality leads & conversions.",
    },
  },
};
