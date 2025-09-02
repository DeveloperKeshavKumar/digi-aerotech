import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  Dumbbell,
  Users,
  ThumbsUp,
  Video,
  Share2,
  TrendingUp,
  ArrowRight,
  Target,
  Sparkles,
  PlayCircle,
  Activity,
} from "lucide-react";

export const map: ServiceBusinessMap = {
  service: "other-ads",
  business: "gyms-fitness",
  variants: {
    hero: "variant1",
    whyChooseUs: "variant3",
    process: "variant2",
  },
  data: {
    slug: "other-ads-gyms-fitness",
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
            { text: "Struggling to Attract Fitness Enthusiasts?", gradient: false },
            { text: "Your Gym Needs More Than Just Meta & Google Ads", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "Platforms like YouTube, TikTok, Snapchat, Twitter, and LinkedIn help fitness businesses go viral, connect with younger audiences, and generate massive brand awareness.",
          painPoints: [
            "Low brand visibility outside of Facebook and Google ads",
            "Difficulty engaging younger audiences on TikTok and Snapchat",
            "Struggling to showcase gym culture and member results visually",
            "Limited lead generation from traditional ads",
            "Losing out to competitors with strong video/social presence",
          ],
          solutionPoints: [
            "Run targeted YouTube Ads to showcase transformations and classes",
            "Use TikTok & Snapchat ads to connect with younger, trend-driven audiences",
            "Promote gym success stories & fitness tips via Twitter and LinkedIn ads",
            "Boost signups with compelling short-form and video content",
            "Leverage advanced targeting for maximum ROI across all platforms",
          ],
          cta: {
            icon: React.createElement(ArrowRight, { size: 20 }),
            text: "Start Multi-Platform Fitness Ads Today",
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
              question: "Which platform is best for gym advertising besides Google & Meta?",
              answer:
                "TikTok and Snapchat work well for younger audiences, while YouTube is ideal for transformations, tutorials, and promotions. LinkedIn works for B2B fitness collaborations.",
              icon: React.createElement(Video, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "Can these platforms bring new gym memberships?",
              answer:
                "Yes, highly visual ads on YouTube and TikTok convert well, especially when showcasing real results, classes, and gym culture.",
              icon: React.createElement(Target, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "Is video content necessary for success?",
              answer:
                "Yes, gyms that use video campaigns see up to 65% higher conversions compared to static ads on emerging platforms.",
              icon: React.createElement(PlayCircle, { size: 22 }),
            },
            {
              id: "faq-4",
              question: "Do you provide ad creatives too?",
              answer:
                "We create engaging short videos, reels, and branded visuals designed to convert viewers into gym members.",
              icon: React.createElement(Sparkles, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Want to Reach More Fitness Enthusiasts Beyond Meta & Google?",
      headlineKeywords: [
        "Grow Your Gym with YouTube & TikTok Ads?",
        "Snapchat Ads to Engage Gen Z?",
        "Boost Memberships with Multi-Platform Ads?",
        "360° Fitness Ads Beyond Meta?",
      ],
      brandLine: [
        { text: "🚀 Expand Your Gym Reach with Multi-Platform Fitness Ads", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      subheadline:
        "We run high-performing YouTube, TikTok, Snapchat, Twitter, and LinkedIn ads for gyms & fitness studios to boost visibility, attract members, and grow revenue.",
      ctaButtons: [
        {
          icon: React.createElement(Share2, { size: 28 }),
          text: "Launch Multi-Platform Ads Today",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(Dumbbell, { size: 32 }),
          title: "65% Higher Engagement",
          description: "Gyms with video ads see higher conversions",
        },
        {
          icon: React.createElement(TrendingUp, { size: 32 }),
          title: "10X Reach Boost",
          description: "Target untapped platforms like TikTok & Snapchat",
        },
        {
          icon: React.createElement(Users, { size: 32 }),
          title: "4.8/5 Client Rating",
          description: "Trusted by gyms & fitness studios",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Us for", gradient: false },
        { text: "Other Fitness Ads?", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(Video, { size: 28 }),
          title: "Engaging Video Campaigns",
          description: "We create high-converting video ads for YouTube, TikTok, and Snapchat.",
        },
        {
          icon: React.createElement(ThumbsUp, { size: 28 }),
          title: "Platform-Specific Strategies",
          description: "Each ad is optimized based on platform behavior and audience targeting.",
        },
        {
          icon: React.createElement(Activity, { size: 28 }),
          title: "Performance Tracking",
          description: "We track conversions and ROI to ensure maximum returns on ad spend.",
        },
      ],
      cta: {
        text: "Boost Gym Memberships with Multi-Platform Ads",
        link: "#contact",
        icon: React.createElement(ArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our Multi-Platform Fitness Ads Process",
      subtitle: "CREATE • TARGET • ENGAGE • CONVERT",
      description:
        "We strategize and execute gym ad campaigns across YouTube, TikTok, Snapchat, Twitter, and LinkedIn to maximize reach and membership growth.",
      steps: [
        {
          id: 1,
          title: "Market Research",
          description: "Analyze gym target audience preferences across different ad platforms.",
        },
        {
          id: 2,
          title: "Ad Creative Production",
          description: "Develop engaging video ads, reels, and visuals that highlight your gym culture and success stories.",
        },
        {
          id: 3,
          title: "Platform Targeting",
          description: "Deploy campaigns with precise targeting on YouTube, TikTok, Snapchat, Twitter, and LinkedIn.",
        },
        {
          id: 4,
          title: "Optimization & A/B Testing",
          description: "Test multiple creatives, placements, and targeting to find the best performing ads.",
        },
        {
          id: 5,
          title: "Conversion Tracking",
          description: "Monitor leads, class bookings, and memberships generated from campaigns.",
        },
        {
          id: 6,
          title: "Scaling Campaigns",
          description: "Increase ad spend strategically to boost ROI and maximize membership signups.",
        },
      ],
    },
    cta: {
      title: "Ready to Expand Beyond Meta & Google?",
      subtitle: "BOOST VISIBILITY • ENGAGE AUDIENCE • INCREASE MEMBERSHIPS",
      description:
        "Let’s launch your gym ads on YouTube, TikTok, Snapchat, Twitter, and LinkedIn to attract new members and scale your fitness business.",
    },
  },
};
