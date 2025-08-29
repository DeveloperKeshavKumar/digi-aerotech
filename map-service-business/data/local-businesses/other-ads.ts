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
  IconArrowRight,
  IconUsers,
  IconTrendingUp,
  IconChartBar,
  IconTarget,
} from "@tabler/icons-react";

export const map: ServiceBusinessMap = {
  service: "other-ads",
  business: "local-business",
  variants: {
    hero: "variant2",
    whyChooseUs: "variant3",
    process: "variant1",
    testimonials: "variant2",
  },
  data: {
    slug: "other-ads-local-business",
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
            { text: "Without Multi-Channel Ads", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "Depending only on Google or Meta ads limits your reach. Local customers, especially younger audiences, spend time on Snapchat, TikTok, YouTube & LinkedIn too.",
          painPoints: [
            "Ads only reach the same group of people",
            "Missing out on younger, video-first audiences",
            "Competitors using TikTok & YouTube ads get more visibility",
            "No brand authority among professionals on LinkedIn",
            "Lack of diversified ad strategies for consistent growth",
          ],
          solutionPoints: [
            "Targeted TikTok & Snapchat ads to attract Gen Z & Millennials",
            "YouTube video ads to showcase local products & services",
            "LinkedIn ads to reach professionals & decision-makers",
            "Twitter ads for trending local promotions",
            "Multi-channel campaigns for maximum ROI",
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Launch My Ads Now",
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
              question: "Which platforms work best for local business ads?",
              answer:
                "TikTok & Snapchat work best for youth engagement, YouTube for video storytelling, LinkedIn for professional credibility, and Twitter for local trending offers.",
              icon: React.createElement(IconTarget, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "Are these ads affordable for small businesses?",
              answer:
                "Yes! These platforms allow flexible budgets and hyper-local targeting so even small businesses can get high returns on ad spend.",
              icon: React.createElement(IconChartBar, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "Can I run multiple ad platforms together?",
              answer:
                "Absolutely. We create integrated ad campaigns across TikTok, YouTube, Snapchat, LinkedIn, and Twitter for maximum reach & ROI.",
              icon: React.createElement(IconUsers, { size: 22 }),
            },
            {
              id: "faq-4",
              question: "Will these ads bring actual customers to my shop?",
              answer:
                "Yes. With precise local targeting, these ads generate brand awareness, foot traffic, and online bookings for your business.",
              icon: React.createElement(IconTrendingUp, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Expand",
      headlineKeywords: ["Beyond Google", "Beyond Meta", "Reach Everywhere"],
      brandLine: [
        {
          text: "📢 Other Ads (TikTok, YouTube, LinkedIn, Snapchat, Twitter)",
          gradient: true,
          gradientClass: "from-orange-500 via-pink-500 to-red-600",
        },
      ],
      subheadline:
        "We help local businesses go beyond Google & Meta with TikTok, YouTube, LinkedIn, Twitter & Snapchat ads—so you capture every audience and grow faster.",
      ctaButtons: [
        {
          icon: React.createElement(IconArrowRight, { size: 28 }),
          text: "Run Multi-Channel Ads",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(IconBrandTiktok, { size: 32 }),
          title: "Viral Reach",
          description: "TikTok & Snapchat ads capture young, local audiences",
        },
        {
          icon: React.createElement(IconBrandYoutube, { size: 32 }),
          title: "Video Power",
          description: "YouTube ads showcase your story with strong visuals",
        },
        {
          icon: React.createElement(IconBrandLinkedin, { size: 32 }),
          title: "Professional Audience",
          description: "LinkedIn ads target decision-makers in your community",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Us For", gradient: false },
        { text: "Other Ads?", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(IconBrandTiktok, { size: 28 }),
          title: "Expert in TikTok Ads",
          description: "We create viral campaigns tailored for local businesses.",
        },
        {
          icon: React.createElement(IconBrandSnapchat, { size: 28 }),
          title: "Snapchat Ads",
          description: "Engage with local youth through geo-targeted Snapchat ads.",
        },
        {
          icon: React.createElement(IconBrandYoutube, { size: 28 }),
          title: "YouTube Video Ads",
          description: "Showcase your products & services through impactful storytelling.",
        },
      ],
      cta: {
        text: "Boost My Visibility",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our Multi-Platform Ads Process",
      subtitle: "RESEARCH • CREATE • RUN • SCALE",
      className: "border-t border-border dark:border-gray-700",
      description:
        "We design and run customized ad campaigns for local businesses across TikTok, YouTube, LinkedIn, Snapchat & Twitter for maximum reach and ROI.",
      steps: [
        {
          id: 1,
          title: "Platform Research",
          description: "We identify which platforms suit your local business audience best.",
        },
        {
          id: 2,
          title: "Ad Creative Development",
          description: "We design engaging videos, visuals & content that drive clicks.",
        },
        {
          id: 3,
          title: "Targeted Campaign Setup",
          description: "We set up hyper-local targeting to reach customers near you.",
        },
        {
          id: 4,
          title: "Performance Optimization",
          description: "We continuously optimize campaigns for maximum ROI.",
        },
        {
          id: 5,
          title: "Reporting & Scaling",
          description: "We provide transparent reports and scale winning campaigns.",
        },
      ],
    },
    testimonials: {
      title: [
        { text: "Local Businesses Winning", gradient: false },
        { text: "With Multi-Channel Ads", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      description:
        "From cafés to gyms to boutiques, local businesses are seeing massive growth with TikTok, YouTube, and Snapchat ads.",
      testimonials: [
        {
          id: "1",
          message:
            "Our TikTok ads brought in so many young customers! Footfall increased by 40% in just two weeks.",
          highlight: "40% More Customers",
          stars: 5,
          name: "Priya Sharma",
          designation: "Owner",
          company: "Glow Salon",
        },
        {
          id: "2",
          message:
            "YouTube ads helped us showcase our story in a way Google ads couldn’t. Our bookings doubled!",
          highlight: "2x More Bookings",
          stars: 5,
          name: "Rakesh Verma",
          designation: "Founder",
          company: "FitZone Gym",
        },
      ],
    },
    cta: {
      title: "Boost Your Business With Multi-Platform Ads",
      subtitle: "TIKTOK • YOUTUBE • LINKEDIN • SNAPCHAT • TWITTER",
      description:
        "Don’t limit your business to just Google & Meta ads. Reach new audiences across trending platforms and grow your local customer base today.",
    },
  },
};
