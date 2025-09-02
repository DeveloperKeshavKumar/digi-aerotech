import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  IconMapPin,
  IconPhoneCall,
  IconStar,
  IconUsers,
  IconArrowRight,
  IconBuildingStore,
  IconSearch,
  IconChartBar,
  IconWorld,
} from "@tabler/icons-react";

export const map: ServiceBusinessMap = {
  service: "gmb-services",
  business: "local-business",
  variants: {
    hero: "variant1",
    whyChooseUs: "variant2",
    process: "variant3",
  },
  data: {
    slug: "gmb-services-local-business",
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
            { text: "Why Local Businesses", gradient: false },
            { text: "Need Google Business Profile Optimization", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "When customers search ‘near me’, the top results are Google Business Profiles. If your local business isn’t optimized, you’re losing daily walk-ins, calls, and online trust.",
          painPoints: [
            "Low visibility on Google Maps & local searches",
            "Outdated or incomplete business profile",
            "Negative reviews hurting brand reputation",
            "No strategy for generating customer reviews",
            "Missed opportunities for calls & direct bookings",
          ],
          solutionPoints: [
            "Fully optimized GMB profile with correct details",
            "Regular posting & updates to stay active",
            "Reputation management & review generation",
            "Category & keyword optimization for local reach",
            "Call, direction & booking optimization",
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Optimize My Google Profile",
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
              question: "Why is GMB important for local businesses?",
              answer:
                "Because Google My Business is the first place customers look when searching nearby shops or services. A well-optimized profile increases calls, visits, and trust instantly.",
              icon: React.createElement(IconMapPin, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "Can GMB optimization improve walk-in customers?",
              answer:
                "Yes. Most local searches lead to physical store visits. With GMB optimization, your business ranks higher and attracts more walk-ins.",
              icon: React.createElement(IconBuildingStore, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "Do you help with reviews & ratings?",
              answer:
                "Absolutely. We build strategies to generate authentic positive reviews, respond to feedback, and improve your star rating.",
              icon: React.createElement(IconStar, { size: 22 }),
            },
            {
              id: "faq-4",
              question: "How fast can we see results?",
              answer:
                "You can see improvements in calls, clicks, and profile views within weeks as your GMB optimization takes effect.",
              icon: React.createElement(IconChartBar, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Rank",
      headlineKeywords: ["Higher", "Local Searches", "Google Maps"],
      brandLine: [
        {
          text: "📍 Google My Business Services for Local Businesses",
          gradient: true,
          gradientClass: "from-orange-500 via-pink-500 to-red-600",
        },
      ],
      subheadline:
        "We help local businesses dominate Google Maps and local search results with fully optimized GMB profiles that drive calls, directions, and real foot traffic.",
      ctaButtons: [
        {
          icon: React.createElement(IconArrowRight, { size: 28 }),
          text: "Boost My Local Visibility",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "5X More Calls",
          description: "Optimized profiles attract more customers ready to buy",
        },
        {
          icon: React.createElement(IconPhoneCall, { size: 32 }),
          title: "Increased Walk-ins",
          description: "Local customers find your business first, not competitors",
        },
        {
          icon: React.createElement(IconSearch, { size: 32 }),
          title: "Top Search Rankings",
          description: "Rank higher in 'near me' & local intent searches",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Us for", gradient: false },
        { text: "Google My Business Optimization?", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(IconMapPin, { size: 28 }),
          title: "Complete Profile Setup",
          description: "We ensure all your details are accurate, verified, and engaging.",
        },
        {
          icon: React.createElement(IconStar, { size: 28 }),
          title: "Review & Reputation Management",
          description: "Boost your star rating with consistent reviews & responses.",
        },
        {
          icon: React.createElement(IconWorld, { size: 28 }),
          title: "Local Keyword Targeting",
          description: "We optimize your profile with relevant local keywords for visibility.",
        },
      ],
      cta: {
        text: "Optimize My Local Business Now",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our Google Business Profile Optimization Process",
      subtitle: "LOCAL VISIBILITY • TRUST • CONVERSIONS",
      className: "border-t border-border dark:border-gray-700",
      description:
        "Our GMB process is designed to make your business rank higher, look more professional, and get more calls, visits, and leads from local customers.",
      steps: [
        {
          id: 1,
          title: "Profile Audit",
          description: "We review your existing GMB profile, categories, reviews, and search presence.",
        },
        {
          id: 2,
          title: "Optimization",
          description: "We fix details, add keywords, photos, posts, and ensure your listing is complete.",
        },
        {
          id: 3,
          title: "Reputation Boost",
          description: "We build strategies to generate consistent positive reviews & manage responses.",
        },
        {
          id: 4,
          title: "Local Ranking",
          description: "We optimize for map pack rankings, increasing calls, visits, and search clicks.",
        },
        {
          id: 5,
          title: "Insights & Growth",
          description: "We track profile insights, customer actions, and continuously improve visibility.",
        },
      ],
    },
    cta: {
      title: "Be the #1 Choice in Local Searches",
      subtitle: "GET MORE CALLS • WALK-INS • REVIEWS",
      description:
        "Don’t let your competitors take your customers. With our GMB optimization, your local business will rank higher, look more trusted, and attract more customers every day.",
    },
  },
};
