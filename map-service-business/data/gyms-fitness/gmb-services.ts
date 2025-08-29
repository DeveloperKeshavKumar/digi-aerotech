import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  Users,
  MapPin,
  Star,
  TrendingUp,
  ShieldCheck,
  Calendar,
  ArrowRight,
  Activity,
} from "lucide-react";

export const map: ServiceBusinessMap = {
  service: "gmb-services",
  business: "gyms-fitness",
  variants: {
    hero: "variant1",
    whyChooseUs: "variant3",
    process: "variant2",
    testimonials: "variant1",
  },
  data: {
    slug: "gmb-services-gyms-fitness",
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
            { text: "Challenges Gyms & Fitness Centers Face in", gradient: false },
            { text: "Google My Business Visibility", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "Gyms, fitness studios, and personal trainers struggle to rank in local searches, attract new members, and manage their online reputation without expert GMB optimization.",
          painPoints: [
            "Low local visibility on Google Maps & Search",
            "Incomplete or inaccurate business profiles",
            "Difficulty attracting walk-ins & memberships",
            "Poor review management and reputation",
            "Missed opportunities from local search queries",
          ],
          solutionPoints: [
            "Optimize GMB listings with accurate info & visuals",
            "Collect and respond to reviews to build credibility",
            "Enhance local SEO with targeted keywords",
            "Update offers, events, and posts regularly",
            "Track insights to refine marketing and boost footfall",
          ],
          cta: {
            icon: React.createElement(ArrowRight, { size: 20 }),
            text: "Boost Your Gym's Local Presence",
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
              question: "How does GMB help my gym get more members?",
              answer:
                "A fully optimized GMB listing ensures your gym shows up in local searches and Google Maps, attracting more walk-ins and memberships.",
              icon: React.createElement(MapPin, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "Can you manage reviews for my fitness center?",
              answer:
                "Yes! We monitor, respond, and strategically encourage positive reviews to enhance your online reputation.",
              icon: React.createElement(Star, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "Do you optimize GMB for local SEO?",
              answer:
                "Absolutely. We use targeted keywords, location optimization, and posts to ensure your gym ranks higher in local searches.",
              icon: React.createElement(Activity, { size: 22 }),
            },
            {
              id: "faq-4",
              question: "How fast can I see results?",
              answer:
                "Local search visibility improvements often show in a few weeks, with increased calls, directions, and foot traffic.",
              icon: React.createElement(TrendingUp, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Want More",
      headlineKeywords: [
        "Local Members?",
        "Gym Foot Traffic?",
        "Active Fitness Clients?",
        "High-Impact GMB Visibility?",
      ],
      brandLine: [
        {
          text: "📍 Maximize Your Gym & Fitness Studio Visibility with Google My Business",
          gradient: true,
          gradientClass: "from-orange-500 via-pink-500 to-red-600",
        },
      ],
      subheadline:
        "We help gyms, fitness studios, and personal trainers dominate local search, attract new members, and build an excellent online reputation.",
      ctaButtons: [
        {
          icon: React.createElement(Activity, { size: 28 }),
          text: "Get Free GMB Audit",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(Users, { size: 32 }),
          title: "1,000+ Local Members Acquired",
          description: "Through optimized GMB listings",
        },
        {
          icon: React.createElement(Star, { size: 32 }),
          title: "4.9/5 Average Reviews",
          description: "Boosting trust and credibility",
        },
        {
          icon: React.createElement(MapPin, { size: 32 }),
          title: "500+ Local Searches",
          description: "Gym shows in top local results",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Gyms & Fitness Centers Choose Us for", gradient: false },
        { text: "GMB Services", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(MapPin, { size: 28 }),
          title: "Local SEO Expertise",
          description: "Optimized GMB listings to rank in local searches and Google Maps.",
        },
        {
          icon: React.createElement(Star, { size: 28 }),
          title: "Reputation Management",
          description: "Collect and respond to reviews to enhance trust and credibility.",
        },
        {
          icon: React.createElement(TrendingUp, { size: 28 }),
          title: "Data-Driven Insights",
          description: "Analyze views, clicks, and calls to continuously improve results.",
        },
      ],
      cta: {
        text: "Boost Your Gym's Local Presence Today",
        link: "#contact",
        icon: React.createElement(ArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our GMB Optimization Process for Gyms & Fitness Centers",
      subtitle: "CLAIM • OPTIMIZE • ENGAGE • GROW",
      description:
        "We help your gym or fitness studio dominate local search with a complete process from claiming your GMB to driving consistent member growth.",
      steps: [
        {
          id: 1,
          title: "Claim & Verify GMB",
          description:
            "Ensure your fitness business is claimed and verified for accurate representation in local search.",
        },
        {
          id: 2,
          title: "Profile Optimization",
          description:
            "Complete all business details, add high-quality photos, videos, services, and keywords to enhance local SEO.",
        },
        {
          id: 3,
          title: "Review Management",
          description:
            "Encourage, monitor, and respond to reviews to build credibility and improve online reputation.",
        },
        {
          id: 4,
          title: "Regular Updates & Posts",
          description:
            "Share promotions, events, and fitness tips to keep your audience engaged and improve GMB ranking.",
        },
        {
          id: 5,
          title: "Insights & Reporting",
          description:
            "Analyze clicks, calls, and direction requests to continuously refine strategies and drive more members.",
        },
      ],
    },
    testimonials: {
      title: [
        { text: "Gyms & Fitness Centers Who ", gradient: false },
        { text: "Boosted Local Presence with Us", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      description:
        "See how we helped fitness studios and gyms increase visibility, attract new members, and dominate local searches.",
      testimonials: [
        {
          id: "1",
          message:
            "Our gym now ranks at the top of local searches, and we’ve seen a 3X increase in foot traffic. Amazing GMB optimization!",
          highlight: "3X increase in foot traffic",
          stars: 5,
          name: "Rahul Mehta",
          designation: "Owner",
          company: "FitZone Gym",
        },
        {
          id: "2",
          message:
            "The team handled our GMB listing and review management. Local members started finding us easily and memberships skyrocketed.",
          highlight: "memberships skyrocketed",
          stars: 5,
          name: "Anjali Sharma",
          designation: "Founder",
          company: "Flex Fitness Studio",
        },
      ],
    },
    cta: {
      title: "Maximize Your Gym & Fitness Studio Local Visibility",
      subtitle: "CLAIM • OPTIMIZE • GROW",
      description:
        "Book a free GMB audit today and start attracting more local members with our proven optimization strategies.",
    },
  },
};
