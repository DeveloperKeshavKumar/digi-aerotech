import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  IconShoppingCart,
  IconMapPin,
  IconUsers,
  IconArrowRight,
  IconDeviceMobile,
  IconTrendingUp,
  IconSearch,
  IconStar,
  IconBuildingStore,
  IconPhoneCall,
} from "@tabler/icons-react";

export const map: ServiceBusinessMap = {
  service: "aso-services",
  business: "local-business",
  variants: {
    hero: "variant3",
    whyChooseUs: "variant1",
    process: "variant2",
  },
  data: {
    slug: "aso-services-local-business",
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
            { text: "Need ASO Services", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "From restaurants to salons, gyms to retail shops—local businesses are launching apps to connect with nearby customers. But without proper ASO, your app will stay hidden in crowded app stores.",
          painPoints: [
            "Low app visibility on Play Store & App Store",
            "Struggling to get new downloads from local customers",
            "Poor keyword optimization for ‘near me’ searches",
            "Negative or few reviews affecting trust",
            "Competitors outranking your business app",
          ],
          solutionPoints: [
            "Boost app rankings for location-based searches",
            "Attract new local customers through optimized keywords",
            "Increase downloads with compelling visuals & descriptions",
            "Improve ratings & reputation with review strategies",
            "Stay ahead of local competitors with smart ASO tactics",
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Optimize My Local Business App",
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
              question: "Why do local businesses need ASO?",
              answer:
                "Because ASO improves app visibility in Play Store & App Store, helping local businesses attract more nearby customers.",
              icon: React.createElement(IconSearch, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "Can ASO increase app downloads for small businesses?",
              answer:
                "Yes, by optimizing titles, descriptions, keywords, and visuals, we drive more organic downloads from local searches.",
              icon: React.createElement(IconTrendingUp, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "Do you optimize for ‘near me’ searches?",
              answer:
                "Absolutely. We focus on local intent keywords like ‘salon near me’ or ‘best café app’ to maximize reach.",
              icon: React.createElement(IconMapPin, { size: 22 }),
            },
            {
              id: "faq-4",
              question: "Can you improve app reviews & ratings?",
              answer:
                "Yes, we help build trust by generating more positive reviews, managing feedback, and boosting app credibility.",
              icon: React.createElement(IconStar, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Boost",
      headlineKeywords: ["App Visibility", "Downloads", "Local Growth"],
      brandLine: [
        {
          text: "📱 Powerful ASO Services for Local Businesses",
          gradient: true,
          gradientClass: "from-orange-500 via-pink-500 to-red-600",
        },
      ],
      subheadline:
        "We help local businesses optimize their apps for Play Store & App Store to increase visibility, downloads, and customer engagement.",
      ctaButtons: [
        {
          icon: React.createElement(IconArrowRight, { size: 28 }),
          text: "Start My ASO Campaign",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(IconShoppingCart, { size: 32 }),
          title: "50% More Installs",
          description: "Boost app downloads for local stores & services",
        },
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "Local Reach",
          description: "Target nearby customers searching for your business",
        },
        {
          icon: React.createElement(IconDeviceMobile, { size: 32 }),
          title: "Better Visibility",
          description: "Rank higher for app store & location-based keywords",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Us for", gradient: false },
        { text: "Local Business ASO?", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(IconBuildingStore, { size: 28 }),
          title: "Local Business Experts",
          description: "We specialize in helping small & medium local businesses grow through ASO.",
        },
        {
          icon: React.createElement(IconPhoneCall, { size: 28 }),
          title: "Customer Engagement",
          description: "Our strategies improve app engagement & retention for local users.",
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Growth-Oriented",
          description: "We focus on long-term growth by optimizing downloads, ratings & conversions.",
        },
      ],
      cta: {
        text: "Get My App Optimized",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our ASO Process for Local Businesses",
      subtitle: "OPTIMIZED • DISCOVERED • DOWNLOADED",
      className: "border-t border-border dark:border-gray-700",
      description:
        "We follow a structured ASO strategy designed for local businesses to increase app discoverability, installs, and customer loyalty.",
      steps: [
        {
          id: 1,
          title: "App Store Audit",
          description: "We review your app title, description, keywords, and ratings to find improvement opportunities.",
        },
        {
          id: 2,
          title: "Keyword Research",
          description: "We identify high-intent local keywords like ‘near me’ searches to optimize your app listing.",
        },
        {
          id: 3,
          title: "Creative Optimization",
          description: "We optimize app icons, screenshots, and videos to make your listing stand out and attract clicks.",
        },
        {
          id: 4,
          title: "Review & Reputation Boost",
          description: "We implement strategies to generate positive reviews and build customer trust.",
        },
        {
          id: 5,
          title: "Monitoring & Reporting",
          description: "We track rankings, downloads, and reviews to continuously improve ASO performance.",
        },
      ],
    },
    cta: {
      title: "Make Your Local Business App Stand Out",
      subtitle: "OPTIMIZED • DISCOVERED • DOWNLOADED",
      description:
        "Don’t let your app stay hidden in crowded app stores. Partner with us for ASO services that bring your local business app in front of the right audience.",
    },
  },
};
