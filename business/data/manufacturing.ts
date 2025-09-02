import React from "react";
import { BusinessData } from "../business.types";
import {
  IconAssembly,
  IconBuildingFactory2,
  IconBulb,
  IconChartHistogram,
  IconClipboardCheck,
  IconDatabase,
  IconDeviceDesktopAnalytics,
  IconDeviceTablet,
  IconEngine,
  IconFileAnalytics,
  IconHierarchy,
  IconNetwork,
  IconPackageExport,
  IconReceipt2,
  IconServerCog,
  IconTools,
  IconTrendingUp3,
  IconUserStar,
} from "@tabler/icons-react";

export const manufacturing: BusinessData = {
  id: "21",
  image: "/business/manufacturing-digital-marketing.webp",
  slug: "manufacturing-digital-marketing",
  name: "Manufacturing Digital Marketing Agency",

  hero: {
    name: "Industrial Growth Partners",
    initial: "Scale Production, Expand Markets With",
    headlineKeywords: [
      "Manufacturing Digital Marketing",
      "B2B Lead Generation",
      "Factory Growth",
    ],
    brandLine:
      "From Small Factories To Global Manufacturers — We Drive Visibility, Build Partnerships, And Generate B2B Contracts That Fuel Growth.",
    subheadline:
      "We help manufacturers, OEMs, industrial suppliers, and factories showcase expertise, win global buyers, and generate high-value leads through tailored digital strategies.",
    ctaButtons: [
      {
        text: "Get Free Manufacturing Growth Plan",
        link: "/free-manufacturing-marketing-audit",
        variant: "primary",
        icon: React.createElement(IconChartHistogram, { size: 20 }),
      },
      {
        text: "See Manufacturing Case Studies",
        link: "/manufacturing-marketing-case-studies",
        variant: "secondary",
        icon: React.createElement(IconClipboardCheck, { size: 20 }),
      },
    ],
    backgroundImage: "/business/manufacturing-hero.webp",
  },

  services: {
    title: "Manufacturing Marketing Services",
    subtitle: "Customised For Factories, OEMs & Industrial Suppliers",
    businessName: "manufacturing",
    description:
      "We offer specialised digital marketing services to help manufacturers grow their B2B client base, win export orders, and dominate industry niches.",
    items: [
      {
        id: "360-digital-marketing",
        title: "360° Manufacturing Digital Marketing",
        description:
          "Comprehensive marketing strategies integrating SEO, PPC, and automation to expand global reach for manufacturers.",
        icon: React.createElement(IconBuildingFactory2, { size: 30 }),
        link: "/360-digital-marketing",
      },
      {
        id: "meta-ads",
        title: "Meta Ads For Manufacturers",
        description:
          "Run hyper-targeted ad campaigns showcasing factory capabilities, certifications, and product innovations.",
        icon: React.createElement(IconBulb, { size: 30 }),
        link: "/meta-ads",
      },
      {
        id: "google-ads",
        title: "Google Ads For Manufacturing Firms",
        description:
          "Capture high-intent buyers searching for OEM partners, industrial suppliers, and production outsourcing.",
        icon: React.createElement(IconFileAnalytics, { size: 30 }),
        link: "/google-ads",
      },
      {
        id: "other-ads",
        title: "YouTube & Video Ads For Factories",
        description:
          "Showcase production processes, technology, and quality assurance through impactful video ads.",
        icon: React.createElement(IconEngine, { size: 30 }),
        link: "/other-ads",
      },
      {
        id: "local-seo",
        title: "Local SEO For Industrial Units",
        description:
          "Optimise maps and directories so nearby businesses, suppliers, and exporters find your factory first.",
        icon: React.createElement(IconPackageExport, { size: 30 }),
        link: "/local-seo",
      },
      {
        id: "web-design-development",
        title: "Industrial Website Development",
        description:
          "Modern websites with product catalogs, certifications, and inquiry forms designed for global buyers.",
        icon: React.createElement(IconDeviceDesktopAnalytics, { size: 30 }),
        link: "/web-design-development",
      },
      {
        id: "social-media-marketing",
        title: "Social Media For Manufacturers",
        description:
          "Build trust on LinkedIn, share factory tours on YouTube, and highlight new product launches on Instagram.",
        icon: React.createElement(IconHierarchy, { size: 30 }),
        link: "/social-media-marketing",
      },
      {
        id: "seo-services",
        title: "SEO Services For Manufacturing Firms",
        description:
          "Rank for keywords like 'OEM manufacturer', 'industrial supplier India', and 'custom fabrication services'.",
        icon: React.createElement(IconDatabase, { size: 30 }),
        link: "/seo-services",
      },
      {
        id: "gmb-services",
        title: "Google My Business For Factories",
        description:
          "Optimise your business profile with service areas, certifications, and client reviews for B2B visibility.",
        icon: React.createElement(IconNetwork, { size: 30 }),
        link: "/gmb-services",
      },
      {
        id: "aso-services",
        title: "Manufacturing App Store Optimization",
        description:
          "Enhance visibility for B2B manufacturing apps, industrial catalog apps, and client portals.",
        icon: React.createElement(IconDeviceTablet, { size: 30 }),
        link: "/aso-services",
      },
      {
        id: "mobile-apps-development",
        title: "Manufacturing App Development",
        description:
          "Custom apps for order management, factory tracking, and client reporting solutions.",
        icon: React.createElement(IconServerCog, { size: 30 }),
        link: "/mobile-apps-development",
      },
      // {
      //   id: "website-maintenance",
      //   title: "Factory Website Maintenance",
      //   description:
      //     "Keep your industrial website secure, fast, and up-to-date with regular monitoring and updates.",
      //   icon: React.createElement(IconTools, { size: 30 }),
      //   link: "/website-maintenance",
      // },
      {
        id: "leads-generation",
        title: "B2B Lead Generation For Manufacturers",
        description:
          "Generate high-value industrial leads with LinkedIn funnels, industry campaigns, and global outreach.",
        icon: React.createElement(IconUserStar, { size: 30 }),
        link: "/leads-generation",
      },
    ],
  },

  stats: {
    title: "Powering Growth For Manufacturers",
    subtitle: "From Factory Floor To Global Marketplace",
    items: [
      {
        icon: React.createElement(IconTrendingUp3, { size: 30 }),
        title: "Export Leads",
        value: "+210%",
        description:
          "Average increase in international inquiries for manufacturing firms through targeted SEO campaigns.",
      },
      {
        icon: React.createElement(IconChartHistogram, { size: 30 }),
        title: "Production Contracts",
        value: "3.2X",
        description:
          "Growth in large-scale contracts after deploying LinkedIn and PPC lead generation campaigns.",
      },
      {
        icon: React.createElement(IconClipboardCheck, { size: 30 }),
        title: "B2B Partnerships",
        value: "+185%",
        description:
          "Expansion in distributor and supplier networks via social media and directory optimisation.",
      },
      {
        icon: React.createElement(IconBulb, { size: 30 }),
        title: "Innovation Visibility",
        value: "4.5X",
        description:
          "Boost in visibility for new product launches and industrial innovation showcases.",
      },
    ],
  },
  cta: {
    title: "Ready To Expand Your Manufacturing Business?",
    subtitle: "Generate More Inquiries, Win More Contracts, Go Global",
    description:
      "Get a customised manufacturing marketing plan covering SEO, paid ads, social media, and automation. Let’s help your factory scale worldwide.",
    backgroundColor: "bg-gradient-to-r from-yellow-800 to-orange-900",
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