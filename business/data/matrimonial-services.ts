import React from "react";
import { BusinessData } from "../business.types";
import {
  IconHeart,
  IconUsers,
  IconMessageHeart,
  IconCalendarHeart,
  IconSearch,
  IconGlobe,
  IconDeviceMobileHeart,
  IconForms,
  IconBrowser,
  IconDatabaseHeart,
  IconMapPinHeart,
  IconAd,
  IconSeo,
  IconAutomation,
  IconShieldHeart,
  IconTrendingUp,
  IconStar,
} from "@tabler/icons-react";

export const matrimonial: BusinessData = {
  id: "22",
  image: "/business/matrimonial-digital-marketing.webp",
  slug: "matrimonial-digital-marketing",
  name: "Matrimonial Digital Marketing Agency",

  hero: {
    name: "Matchmaking Growth Partners",
    initial: "Build Trust, Attract Matches With",
    headlineKeywords: [
      "Matrimonial Digital Marketing",
      "Matchmaking Growth",
      "Wedding Platforms",
    ],
    brandLine:
      "Helping matrimonial services, bureaus, and wedding platforms grow trust, visibility, and inquiries with highly targeted digital campaigns.",
    subheadline:
      "We design campaigns that build credibility, increase registrations, and connect thousands of people to the right life partner every single day.",
    ctaButtons: [
      {
        text: "Get Free Matrimonial Growth Plan",
        link: "/free-matrimonial-marketing-audit",
        variant: "primary",
        icon: React.createElement(IconHeart, { size: 20 }),
      },
      {
        text: "See Matrimonial Case Studies",
        link: "/matrimonial-marketing-case-studies",
        variant: "secondary",
        icon: React.createElement(IconUsers, { size: 20 }),
      },
    ],
    backgroundImage: "/business/matrimonial-hero.webp",
  },

  services: {
    title: "Matrimonial Marketing Services",
    subtitle: "Tailored For Matrimonial Apps, Bureaus & Wedding Platforms",
    businessName: "matrimonial",
    description:
      "We offer digital marketing services designed to help matrimonial businesses attract signups, boost matches, and build strong brand trust online.",
    items: [
      {
        id: "360-digital-marketing",
        title: "360° Matrimonial Digital Marketing",
        description:
          "Complete marketing solutions combining SEO, PPC, and automation to attract new users and build credibility.",
        icon: React.createElement(IconGlobe, { size: 30 }),
        link: "/360-digital-marketing",
      },
      {
        id: "meta-ads",
        title: "Meta Ads For Matrimonial Platforms",
        description:
          "Run Facebook & Instagram ads that highlight trust, family values, and verified profiles.",
        icon: React.createElement(IconMessageHeart, { size: 30 }),
        link: "/meta-ads",
      },
      {
        id: "google-ads",
        title: "Google Ads For Matrimonial Services",
        description:
          "Appear at the top when people search for 'best matrimonial site' or 'trusted marriage bureau'.",
        icon: React.createElement(IconAd, { size: 30 }),
        link: "/google-ads",
      },
      {
        id: "other-ads",
        title: "YouTube & Video Ads For Matchmaking",
        description:
          "Emotional storytelling ads to show success stories and happy matches.",
        icon: React.createElement(IconCalendarHeart, { size: 30 }),
        link: "/other-ads",
      },
      {
        id: "local-seo",
        title: "Local SEO For Marriage Bureaus",
        description:
          "Optimise local search results so nearby families easily find and connect with your services.",
        icon: React.createElement(IconMapPinHeart, { size: 30 }),
        link: "/local-seo",
      },
      {
        id: "ecommerce-marketing",
        title: "Premium Plans Promotion",
        description:
          "Market paid membership and premium matchmaking packages through targeted campaigns.",
        icon: React.createElement(IconForms, { size: 30 }),
        link: "/ecommerce-marketing",
      },
      {
        id: "web-design-development",
        title: "Matrimonial Website Development",
        description:
          "Create secure, elegant, and user-friendly matrimonial websites with verification features.",
        icon: React.createElement(IconBrowser, { size: 30 }),
        link: "/web-design-development",
      },
      {
        id: "social-media-marketing",
        title: "Social Media For Matrimonial Brands",
        description:
          "Build trust on Facebook, Instagram, and LinkedIn through testimonials, events, and family engagement.",
        icon: React.createElement(IconUsers, { size: 30 }),
        link: "/social-media-marketing",
      },
      {
        id: "seo-services",
        title: "SEO For Matrimonial Websites",
        description:
          "Rank higher for keywords like 'best matrimonial site', 'find life partner online', and 'matchmaking services'.",
        icon: React.createElement(IconSeo, { size: 30 }),
        link: "/seo-services",
      },
      {
        id: "gmb-services",
        title: "Google My Business For Marriage Bureaus",
        description:
          "Highlight office location, reviews, and client stories to boost local family trust.",
        icon: React.createElement(IconDatabaseHeart, { size: 30 }),
        link: "/gmb-services",
      },
      {
        id: "aso-services",
        title: "App Store Optimization For Matrimonial Apps",
        description:
          "Increase downloads and visibility for matrimonial apps on Google Play and App Store.",
        icon: React.createElement(IconDeviceMobileHeart, { size: 30 }),
        link: "/aso-services",
      },
      {
        id: "mobile-apps-development",
        title: "Matrimonial App Development",
        description:
          "Develop modern matchmaking apps with profile verification, chat, and premium features.",
        icon: React.createElement(IconDeviceMobileHeart, { size: 30 }),
        link: "/mobile-apps-development",
      },
      {
        id: "website-maintenance",
        title: "Matrimonial Website Maintenance",
        description:
          "Ensure smooth, secure, and updated functioning of your matrimonial platforms.",
        icon: React.createElement(IconShieldHeart, { size: 30 }),
        link: "/website-maintenance",
      },
      {
        id: "leads-generation",
        title: "Leads Generation For Matrimonial Businesses",
        description:
          "Attract new users with inquiry funnels, landing pages, and targeted ad campaigns.",
        icon: React.createElement(IconSearch, { size: 30 }),
        link: "/leads-generation",
      },
      {
        id: "marketing-automation",
        title: "Matrimonial Marketing Automation",
        description:
          "Automate follow-ups, match suggestions, and personalized communication for users.",
        icon: React.createElement(IconAutomation, { size: 30 }),
        link: "/marketing-automation",
      },
    ],
  },

  stats: {
    title: "Growing Trust & Connections",
    subtitle: "Where Every Marketing Effort Builds A New Beginning",
    items: [
      {
        icon: React.createElement(IconTrendingUp, { size: 30 }),
        title: "New Signups",
        value: "+275%",
        description:
          "Average increase in matrimonial registrations through paid ads & SEO campaigns.",
      },
      {
        icon: React.createElement(IconStar, { size: 30 }),
        title: "Premium Conversions",
        value: "3.8X",
        description:
          "Boost in paid memberships through advanced funnels and retargeting ads.",
      },
      {
        icon: React.createElement(IconHeart, { size: 30 }),
        title: "Successful Matches",
        value: "+210%",
        description:
          "Increase in successful pairings through high-quality lead generation.",
      },
      {
        icon: React.createElement(IconUsers, { size: 30 }),
        title: "Community Reach",
        value: "5X",
        description:
          "Expansion in family & community engagement via social media storytelling.",
      },
    ],
  },
  cta: {
    title: "Ready To Grow Your Matrimonial Business?",
    subtitle: "Increase Signups, Boost Matches & Build Trust",
    description:
      "Get a custom growth plan for your matrimonial platform — covering SEO, ads, social media, and automation. Let’s connect families with trust.",
    backgroundColor: "bg-gradient-to-r from-pink-800 to-red-900",
  },

  showSections: {
    hero: true,
    companies: true,
    services: true,
    stats: true,
    testimonials: true,
    cta: true,
  },
};
