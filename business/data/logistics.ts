import React from "react";
import { BusinessData } from "../business.types";
import {
  IconBrandGoogle,
  IconBrandGooglePlay,
  IconBrandInstagram,
  IconBrandMeta,
  IconBrandYoutube,
  IconChartArea,
  IconCode,
  IconDeviceMobile,
  IconMapPin,
  IconMapSearch,
  IconPlanet,
  IconRobot,
  IconSeo,
  IconSettings,
  IconShield,
  IconShoppingCart,
  IconStar,
  IconTarget,
  IconTrendingUp,
  IconTrophy,
  IconUsers,
} from "@tabler/icons-react";

export const logistics: BusinessData = {
  id: "20",
  image: "/business/logistics-digital-marketing.webp",
  slug: "logistics-digital-marketing",
  name: "Logistics Digital Marketing Agency",

  hero: {
    name: "Logistics Growth Partners",
    initial: "Move Faster, Scale Smarter With",
    headlineKeywords: [
      "Logistics Digital Marketing",
      "Freight Forwarding Leads",
      "Supply Chain Growth",
    ],
    brandLine:
      "From Local Courier Firms To Global Freight Networks — We Help You Build Trust, Generate Leads, And Win Long-Term Contracts.",
    subheadline:
      "We partner with logistics companies, warehousing providers, courier services, and supply chain firms to increase visibility, generate qualified B2B & B2C leads, and strengthen client retention with digital-first strategies.",
    ctaButtons: [
      {
        text: "Get Free Logistics Growth Plan",
        link: "/free-logistics-marketing-audit",
        variant: "primary",
        icon: React.createElement(IconChartArea, { size: 20 }),
      },
      {
        text: "See Logistics Case Studies",
        link: "/logistics-marketing-case-studies",
        variant: "secondary",
        icon: React.createElement(IconTrophy, { size: 20 }),
      },
    ],
    backgroundImage: "/business/logistics-hero.webp",
  },

  services: {
    title: "Logistics Marketing Services We Offer",
    subtitle: "Tailored To Freight, Courier, And Supply Chain Businesses",
    businessName: "logistics",
    description:
      "We provide specialised marketing services for logistics, courier, and freight businesses to attract B2B clients, secure partnerships, and drive high-value contracts.",
    items: [
      {
        id: "360-digital-marketing",
        title: "360° Logistics Digital Marketing",
        description:
          "End-to-end marketing across SEO, paid ads, and automation to help logistics businesses scale regionally and globally.",
        icon: React.createElement(IconPlanet, { size: 30 }),
        link: "/360-digital-marketing",
      },
      {
        id: "meta-ads",
        title: "Meta Ads For Logistics",
        description:
          "Target decision-makers on Facebook & Instagram with lead-driven campaigns for warehousing, courier, and shipping services.",
        icon: React.createElement(IconBrandMeta, { size: 30 }),
        link: "/meta-ads",
      },
      {
        id: "google-ads",
        title: "Google Ads For Freight & Logistics",
        description:
          "Run high-intent PPC campaigns for searches like 'best courier partner', 'B2B shipping services', and 'international freight'.",
        icon: React.createElement(IconBrandGoogle, { size: 30 }),
        link: "/google-ads",
      },
      {
        id: "other-ads",
        title: "Video & YouTube Ads For Logistics",
        description:
          "Tell your logistics story with YouTube ads, highlighting efficiency, safety, and global coverage to attract new clients.",
        icon: React.createElement(IconBrandYoutube, { size: 30 }),
        link: "/other-ads",
      },
      {
        id: "local-seo",
        title: "Local SEO For Courier Companies",
        description:
          "Appear in 'near me' searches and maps so businesses and individuals nearby choose your courier or transport services first.",
        icon: React.createElement(IconMapSearch, { size: 30 }),
        link: "/local-seo",
      },
      {
        id: "ecommerce-marketing",
        title: "E-Commerce Logistics Marketing",
        description:
          "Win e-commerce brands as long-term clients by showcasing fast delivery, last-mile tracking, and competitive partnerships.",
        icon: React.createElement(IconShoppingCart, { size: 30 }),
        link: "/ecommerce-marketing",
      },
      {
        id: "web-design-development",
        title: "Logistics Website Development",
        description:
          "Professional, trust-building websites with shipment calculators, tracking systems, and integrated lead capture.",
        icon: React.createElement(IconCode, { size: 30 }),
        link: "/web-design-development",
      },
      {
        id: "social-media-marketing",
        title: "Social Media Marketing For Logistics",
        description:
          "Build authority on LinkedIn, showcase success stories on Instagram, and run recruitment & B2B campaigns on social channels.",
        icon: React.createElement(IconBrandInstagram, { size: 30 }),
        link: "/social-media-marketing",
      },
      {
        id: "seo-services",
        title: "SEO Services For Logistics",
        description:
          "Rank for B2B keywords like '3PL services', 'international freight shipping', and 'warehouse outsourcing'.",
        icon: React.createElement(IconSeo, { size: 30 }),
        link: "/seo-services",
      },
      {
        id: "gmb-services",
        title: "Google My Business For Logistics",
        description:
          "Optimise your GMB to capture local shipping & courier leads with updated services, reviews, and service areas.",
        icon: React.createElement(IconMapPin, { size: 30 }),
        link: "/gmb-services",
      },
      {
        id: "aso-services",
        title: "Logistics App Store Optimization",
        description:
          "Boost downloads for courier & tracking apps by optimising listings, visuals, and user reviews.",
        icon: React.createElement(IconBrandGooglePlay, { size: 30 }),
        link: "/aso-services",
      },
      {
        id: "mobile-apps-development",
        title: "Custom Logistics App Development",
        description:
          "Build feature-rich apps with live tracking, notifications, order management, and client dashboards.",
        icon: React.createElement(IconDeviceMobile, { size: 30 }),
        link: "/mobile-apps-development",
      },
      {
        id: "website-maintenance",
        title: "Logistics Website Maintenance",
        description:
          "Ensure your logistics website stays secure, updated, and fast with 24/7 technical support and performance monitoring.",
        icon: React.createElement(IconSettings, { size: 30 }),
        link: "/website-maintenance",
      },
      {
        id: "leads-generation",
        title: "Lead Generation For Logistics Firms",
        description:
          "Capture high-value B2B leads with industry-focused landing pages, LinkedIn funnels, and targeted campaigns.",
        icon: React.createElement(IconUsers, { size: 30 }),
        link: "/leads-generation",
      },
      {
        id: "marketing-automation",
        title: "Logistics Marketing Automation",
        description:
          "Nurture prospects with automated workflows, shipment alerts, and drip campaigns to close deals faster.",
        icon: React.createElement(IconRobot, { size: 30 }),
        link: "/marketing-automation",
      },
    ],
  },

  stats: {
    title: "Delivering Growth For Logistics Firms",
    subtitle: "Stronger Visibility, Higher Leads, Better Retention",
    items: [
      {
        icon: React.createElement(IconTrendingUp, { size: 30 }),
        title: "Lead Growth",
        value: "280%",
        description:
          "Average increase in B2B leads after implementing targeted logistics marketing funnels.",
      },
      {
        icon: React.createElement(IconTarget, { size: 30 }),
        title: "Contract Wins",
        value: "2.4X",
        description:
          "More high-value contracts secured through SEO-driven inbound traffic and LinkedIn outreach.",
      },
      {
        icon: React.createElement(IconShield, { size: 30 }),
        title: "Brand Trust",
        value: "+190%",
        description:
          "Improved credibility via reviews, case studies, and trust-building campaigns.",
      },
      {
        icon: React.createElement(IconStar, { size: 30 }),
        title: "Client Retention",
        value: "93%",
        description:
          "Sustained retention through personalised communication, automation, and proactive service campaigns.",
      },
    ],
  },

  testimonials: {
    title: [
      { text: "Logistics Client " },
      {
        text: "Success Stories",
        gradient: true,
        gradientClass: "from-blue-500 via-cyan-500 to-green-500",
      },
    ],
    subtitle: "From Local Courier Firms To Global Supply Chains",
    description:
      "Our logistics clients unlock compounding growth with data-driven campaigns that capture demand, generate trust, and close high-value contracts.",
    items: [
      {
        id: "1",
        message:
          "Within 4 months, we started receiving daily B2B freight inquiries. Their LinkedIn campaigns positioned us as an authority in logistics.",
        highlight: "3X more B2B inquiries",
        stars: 5,
        name: "Suresh R",
        designation: "Managing Director",
        company: "Global Freight Movers",
      },
      {
        id: "2",
        message:
          "They redesigned our website with shipment calculators and lead capture forms. Our conversion rates jumped significantly.",
        highlight: "172% website conversion boost",
        stars: 5,
        name: "Fatima Khan",
        designation: "Head of Sales",
        company: "Swift Logistics India",
      },
      {
        id: "3",
        message:
          "Automation helped us retain long-term e-commerce clients. Every festive season, our volumes now break new records.",
        highlight: "2.8X repeat business",
        stars: 5,
        name: "David Chen",
        designation: "Operations Head",
        company: "NextGen Courier",
      },
    ],
  },

  cta: {
    title: "Ready To Accelerate Your Logistics Growth?",
    subtitle: "Generate More Leads, Secure Bigger Contracts, Build Trust",
    description:
      "Get a personalised logistics marketing plan covering SEO, ads, social media, and automation. See how we’ll scale your logistics business faster and smarter.",
    backgroundColor: "bg-gradient-to-r from-sky-900 to-blue-900",
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