import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  IconBuildingSkyscraper,
  IconHome,
  IconUsers,
  IconMessageCircle,
  IconVideo,
  IconTrendingUp,
  IconCamera,
  IconArrowRight,
  IconMapPin,
  IconCalendarEvent,
} from "@tabler/icons-react";

export const map: ServiceBusinessMap = {
  service: "social-media-marketing",
  business: "real-estate",
  variants: {
    hero: "variant2",
    whyChooseUs: "variant1",
    process: "variant3",
  },
  data: {
    slug: "social-media-marketing-real-estate",
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
            { text: "Why Real Estate Businesses", gradient: false },
            { text: "Struggle on Social Media", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "Property businesses often fail on social media because they rely only on listings instead of creating engaging, lifestyle-driven content.",
          painPoints: [
            "Posting just property pictures with no engagement strategy",
            "Not leveraging Instagram Reels, YouTube Shorts & TikTok",
            "Low community trust due to lack of interaction",
            "Inconsistent posting leading to poor visibility",
            "Not running targeted campaigns for property seekers",
          ],
          solutionPoints: [
            "High-quality reels & walkthrough videos that inspire buyers",
            "Engagement campaigns to build trust & community",
            "Targeted ad campaigns for buyers, renters & investors",
            "Content calendars aligned with property launches",
            "Data-driven approach to maximize inquiries & site visits",
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Boost Your Real Estate Brand on Social Media",
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
              question: "Which social media platform works best for real estate?",
              answer:
                "Instagram, Facebook, and YouTube are the most effective for property promotions, while LinkedIn works well for attracting investors & B2B buyers.",
              icon: React.createElement(IconUsers, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "Can social media generate real property leads?",
              answer:
                "Yes. Social media campaigns drive site visit bookings, property inquiries, and investor interest with the right targeting & creatives.",
              icon: React.createElement(IconTrendingUp, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "Do reels and videos really help sell properties?",
              answer:
                "Absolutely. Video walkthroughs & lifestyle-focused reels build trust and give buyers a virtual property experience before visiting.",
              icon: React.createElement(IconVideo, { size: 22 }),
            },
            {
              id: "faq-4",
              question: "Is organic posting enough for real estate marketing?",
              answer:
                "Organic posting builds credibility, but combining it with paid social ads accelerates visibility, lead generation & sales.",
              icon: React.createElement(IconCamera, { size: 22 }),
            },
            {
              id: "faq-5",
              question: "How do you track ROI from social media campaigns?",
              answer:
                "We measure metrics like inquiries, leads, engagement, CTR, and actual site visits/bookings to ensure campaigns deliver results.",
              icon: React.createElement(IconMessageCircle, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Want",
      headlineKeywords: [
        "More Property Inquiries?",
        "Investor Engagement?",
        "Qualified Buyer Leads?",
        "Higher Brand Visibility?",
        "Social Media That Converts?",
      ],
      brandLine: [
        {
          text: "📲 Turn Social Media into a Property Selling Machine",
          gradient: false,
        },
      ],
      subheadline:
        "We help real estate businesses dominate Instagram, Facebook, YouTube & LinkedIn with engaging content, community engagement, and high-converting ad campaigns.",
      ctaButtons: [
        {
          icon: React.createElement(IconArrowRight, { size: 28 }),
          text: "Start Social Media Growth",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "50K+ Followers",
          description: "Built across multiple real estate brands",
        },
        {
          icon: React.createElement(IconHome, { size: 32 }),
          title: "1,200+ Inquiries",
          description: "Generated from social media campaigns",
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "5X ROI",
          description: "On paid property ad campaigns",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Us for", gradient: false },
        { text: "Real Estate Social Media Marketing", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(IconCamera, { size: 28 }),
          title: "Creative Property Storytelling",
          description: "We turn property features into lifestyle-driven content that resonates with buyers.",
        },
        {
          icon: React.createElement(IconVideo, { size: 28 }),
          title: "Video-First Strategy",
          description: "Reels, walkthroughs & virtual tours build trust & boost inquiries.",
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "Community Engagement",
          description: "We interact with prospects daily, building a trusted real estate brand voice.",
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Lead Conversion Focus",
          description: "Our strategies drive actual property visits, not just likes & follows.",
        },
      ],
      cta: {
        text: "Get Started with Social Media Marketing",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our Social Media Process for Real Estate",
      subtitle: "FROM CONTENT TO CONVERSIONS",
      className: "border-t border-border dark:border-gray-700",
      description:
        "We transform your property listings into engaging campaigns that build trust, generate inquiries, and close deals faster.",
      steps: [
        {
          id: 1,
          title: "Audit & Market Research",
          description: "We analyze your existing profiles, competitors & property market trends to craft a winning content strategy.",
        },
        {
          id: 2,
          title: "Content Calendar & Planning",
          description: "We build a monthly calendar with property posts, reels & seasonal campaigns aligned with launches.",
        },
        {
          id: 3,
          title: "Creative Production",
          description: "Our team produces walkthrough videos, lifestyle reels & graphics that attract buyers & investors.",
        },
        {
          id: 4,
          title: "Community Engagement",
          description: "We manage DMs, comments & group activity, building credibility & nurturing prospects.",
        },
        {
          id: 5,
          title: "Paid Social Campaigns",
          description: "We run geo-targeted ads for buyers & investors, amplifying reach & inquiries.",
        },
        {
          id: 6,
          title: "Analytics & ROI Tracking",
          description: "We measure inquiries, leads, CTR & conversions to optimize and scale campaigns.",
        },
      ],
    },
    cta: {
      title: "Want to Sell More Properties with Social Media?",
      subtitle: "ENGAGE. INSPIRE. CONVERT.",
      description:
        "We help real estate brands turn likes into leads and followers into buyers with powerful social media strategies.",
    },
  },
};
