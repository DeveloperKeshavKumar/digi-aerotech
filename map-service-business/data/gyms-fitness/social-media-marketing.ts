import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  Users,
  Activity,
  Heart,
  Target,
  TrendingUp,
  MessageCircle,
  Calendar,
  ArrowRight,
  BarChart,
  Video,
} from "lucide-react";

export const map: ServiceBusinessMap = {
  service: "social-media-marketing",
  business: "gyms-fitness",
  variants: {
    hero: "variant3",
    whyChooseUs: "variant1",
    process: "variant2",
    testimonials: "variant1",
  },
  data: {
    slug: "social-media-marketing-gyms-fitness",
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
            { text: "Struggling to Engage Fitness Enthusiasts Online?", gradient: false },
            { text: "Grow Your Gym Memberships with Social Media", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "Most gyms fail to convert social media followers into members. Without an optimized strategy, potential clients scroll past your posts.",
          painPoints: [
            "Low engagement on Instagram, Facebook, TikTok",
            "Difficulty building brand authority online",
            "Few leads generated from social campaigns",
            "Content not converting followers into members",
            "Lack of consistent posting & community building",
          ],
          solutionPoints: [
            "High-quality visual content for Instagram, TikTok, and Facebook",
            "Targeted paid campaigns to attract local fitness enthusiasts",
            "Content calendar and scheduling for consistency",
            "Lead funnels integrated with social media campaigns",
            "Community building via engagement, contests, and testimonials",
          ],
          cta: {
            icon: React.createElement(ArrowRight, { size: 20 }),
            text: "Boost Your Gym Social Media Today",
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
              question: "Which social media platforms work best for gyms?",
              answer: "Instagram, Facebook, TikTok, and YouTube are ideal for showcasing workouts, client transformations, and fitness tips.",
              icon: React.createElement(Users, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "Can social media campaigns drive membership signups?",
              answer: "Yes, our strategies target local fitness enthusiasts, running lead-generating campaigns and promotions to convert followers into members.",
              icon: React.createElement(Target, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "Do you provide content creation services?",
              answer: "Absolutely. We create engaging images, videos, reels, and stories tailored to your gym brand to maximize engagement and reach.",
              icon: React.createElement(Video, { size: 22 }),
            },
            {
              id: "faq-4",
              question: "How do you measure social media ROI?",
              answer: "We track engagement, leads, clicks, and conversions, optimizing campaigns continuously to ensure maximum return on investment.",
              icon: React.createElement(BarChart, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Want More Members from Social Media?",
      headlineKeywords: [
        "Grow Your Gym Following",
        "Boost Memberships",
        "Engage Fitness Enthusiasts",
        "Social Media Marketing That Converts",
      ],
      brandLine: [
        { text: "💪 Turn Followers into Paying Gym Members with Expert Social Media Marketing", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      subheadline:
        "We help gyms & fitness studios increase followers, drive engagement, and generate leads through data-driven social media strategies.",
      ctaButtons: [
        {
          icon: React.createElement(Calendar, { size: 28 }),
          text: "Book Free Social Media Consultation",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(Heart, { size: 32 }),
          title: "5X Engagement",
          description: "Average increase in social media interactions for gyms after our campaigns",
        },
        {
          icon: React.createElement(Users, { size: 32 }),
          title: "3X Leads",
          description: "Leads generated from optimized social campaigns",
        },
        {
          icon: React.createElement(TrendingUp, { size: 32 }),
          title: "Brand Authority Boost",
          description: "Gyms gain credibility and recognition in their local area",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Our", gradient: false },
        { text: "Social Media Marketing for Gyms?", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(Activity, { size: 28 }),
          title: "Fitness Industry Experts",
          description: "We understand the gym & fitness market, creating campaigns that resonate with members.",
        },
        {
          icon: React.createElement(Users, { size: 28 }),
          title: "Engaging Content Creation",
          description: "Professional visuals, reels, and stories that capture attention and drive interaction.",
        },
        {
          icon: React.createElement(Target, { size: 28 }),
          title: "Lead-Focused Strategies",
          description: "We design campaigns to convert followers into paying members efficiently.",
        },
      ],
      cta: {
        text: "Boost Your Gym Social Media Now",
        link: "#contact",
        icon: React.createElement(ArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our Social Media Marketing Process for Gyms",
      subtitle: "PLAN • ENGAGE • CONVERT • SCALE",
      description:
        "We implement end-to-end social media strategies that attract, engage, and convert fitness enthusiasts into loyal members.",
      steps: [
        {
          id: 1,
          title: "Social Media Audit",
          description: "Analyze your current presence, competitors, and audience behavior to identify opportunities.",
        },
        {
          id: 2,
          title: "Content Strategy & Calendar",
          description: "Plan posts, reels, and campaigns to ensure consistent engagement and brand voice.",
        },
        {
          id: 3,
          title: "Engagement & Community Building",
          description: "Respond to messages, comments, and build a loyal fitness community around your brand.",
        },
        {
          id: 4,
          title: "Paid Campaigns & Lead Funnels",
          description: "Target local fitness enthusiasts with ad campaigns designed to convert followers into memberships.",
        },
        {
          id: 5,
          title: "Analytics & Optimization",
          description: "Track metrics, test creatives, and refine campaigns for maximum ROI and lead generation.",
        },
      ],
    },
    testimonials: {
      title: [
        { text: "Gyms Who ", gradient: false },
        { text: "Grew Their Social Media & Memberships", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      description:
        "Discover how our social media marketing strategies helped gyms increase followers, engagement, and memberships consistently.",
      testimonials: [
        {
          id: "1",
          message:
            "Our Instagram and TikTok engagement skyrocketed, bringing 200+ new members within 3 months!",
          highlight: "200+ new members",
          stars: 5,
          name: "Amit Verma",
          designation: "Owner",
          company: "FitLife Gym",
        },
        {
          id: "2",
          message:
            "The social media campaigns increased class bookings and brand visibility tremendously.",
          highlight: "increased class bookings",
          stars: 5,
          name: "Priya Sharma",
          designation: "Founder",
          company: "Strong Body Studio",
        },
      ],
    },
    cta: {
      title: "Ready to Transform Your Gym’s Social Media?",
      subtitle: "ENGAGE • ATTRACT • CONVERT • SCALE",
      description:
        "Book a free consultation and see how our expert social media strategies can grow your gym memberships and online presence.",
    },
  },
};
