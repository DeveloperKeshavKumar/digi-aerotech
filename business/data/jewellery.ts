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

export const jewellery: BusinessData = {
  id: "19",
  image: "/business/jewellery-digital-marketing.webp",
  slug: "jewellery-digital-marketing",
  name: "Jewellery Digital Marketing Agency",

  hero: {
    name: "Jewellery Growth Partners",
    initial: "Shine Online And Sell More With",
    headlineKeywords: [
      "Jewellery Digital Marketing",
      "Bridal & Fine Jewelry Ads",
      "Luxury Jewellery Branding",
    ],
    brandLine:
      "Turn Browsers Into Buyers With Irresistible Storytelling, Trust Signals, And High-Intent Traffic",
    subheadline:
      "We help jewellers, luxury boutiques, diamond retailers, and D2C brands scale revenue with SEO, paid ads, social storytelling, and conversion-focused experiences built for high average order value.",
    ctaButtons: [
      {
        text: "Get Free Jewellery Growth Plan",
        link: "/free-jewellery-marketing-audit",
        variant: "primary",
        icon: React.createElement(IconChartArea, { size: 20 }),
      },
      {
        text: "See Jewellery Case Studies",
        link: "/jewellery-marketing-case-studies",
        variant: "secondary",
        icon: React.createElement(IconTrophy, { size: 20 }),
      },
    ],
    backgroundImage: "/business/luxury-jewellery-hero.webp",
  },

  services: {
    title: "Jewellery Marketing Services We Offer",
    subtitle: "Tailored Solutions To Grow Traffic, Trust & High-Value Sales",
    businessName: "jewellery",
    description:
      "We provide specialised jewellery marketing services to help brands, boutiques, and online retailers attract affluent customers, increase conversions, and build long-term brand authority.",
    items: [
      {
        id: "360-digital-marketing",
        title: "360° Jewellery Digital Marketing",
        description:
          "An integrated marketing approach combining SEO, content, ads, and automation to consistently attract and convert luxury jewellery buyers.",
        icon: React.createElement(IconPlanet, { size: 30 }),
        link: "/360-digital-marketing",
      },
      {
        id: "meta-ads",
        title: "Facebook & Instagram Jewellery Ads",
        description:
          "Highly visual campaigns on Instagram and Facebook that showcase your collections, boost engagement, and drive both online and in-store sales.",
        icon: React.createElement(IconBrandMeta, { size: 30 }),
        link: "/meta-ads",
      },
      {
        id: "google-ads",
        title: "Google Ads For Jewellery Stores",
        description:
          "PPC campaigns targeting high-intent searches such as 'engagement rings', 'gold bangles near me', and 'lab-grown diamonds online'.",
        icon: React.createElement(IconBrandGoogle, { size: 30 }),
        link: "/google-ads",
      },
      {
        id: "other-ads",
        title: "YouTube & Video Jewellery Advertising",
        description:
          "Engaging brand films and collection videos on YouTube that capture attention, build desire, and inspire purchases.",
        icon: React.createElement(IconBrandYoutube, { size: 30 }),
        link: "/other-ads",
      },
      {
        id: "local-seo",
        title: "Local SEO For Jewellers",
        description:
          "Dominate 'near me' searches and maps, helping nearby customers find and trust your jewellery store instantly.",
        icon: React.createElement(IconMapSearch, { size: 30 }),
        link: "/local-seo",
      },
      {
        id: "ecommerce-marketing",
        title: "Jewellery E-Commerce Optimization",
        description:
          "Conversion-focused strategies including trust badges, product storytelling, reviews, and seamless checkout to maximise sales online.",
        icon: React.createElement(IconShoppingCart, { size: 30 }),
        link: "/ecommerce-marketing",
      },
      {
        id: "web-design-development",
        title: "Jewellery Website Development",
        description:
          "Luxury, mobile-first websites featuring AR try-on, appointment booking, and product storytelling that elevate your brand.",
        icon: React.createElement(IconCode, { size: 30 }),
        link: "/web-design-development",
      },
      {
        id: "social-media-marketing",
        title: "Jewellery Social Media Marketing",
        description:
          "Strategic storytelling across Instagram, Facebook, and Pinterest using Reels, visuals, and influencer collaborations.",
        icon: React.createElement(IconBrandInstagram, { size: 30 }),
        link: "/social-media-marketing",
      },
      {
        id: "seo-services",
        title: "Jewellery SEO Services",
        description:
          "Comprehensive SEO to rank for key jewellery terms like diamond rings, gold sets, and bridal jewellery collections.",
        icon: React.createElement(IconSeo, { size: 30 }),
        link: "/seo-services",
      },
      {
        id: "gmb-services",
        title: "Google My Business Optimization",
        description:
          "Optimise your GMB profile with product highlights, offers, and reviews to increase credibility and drive local sales.",
        icon: React.createElement(IconMapPin, { size: 30 }),
        link: "/gmb-services",
      },
      {
        id: "aso-services",
        title: "App Store Optimization For Jewellery Apps",
        description:
          "Boost jewellery app downloads and visibility with keyword-rich listings, high-quality visuals, and optimized descriptions.",
        icon: React.createElement(IconBrandGooglePlay, { size: 30 }),
        link: "/aso-services",
      },
      {
        id: "mobile-apps-development",
        title: "Custom Jewellery Mobile App Development",
        description:
          "Personalised mobile shopping apps with AR try-on, wishlists, and concierge chat to delight high-value customers.",
        icon: React.createElement(IconDeviceMobile, { size: 30 }),
        link: "/mobile-apps-development",
      },
      {
        id: "website-maintenance",
        title: "Jewellery Website Maintenance",
        description:
          "Keep your website updated with the latest collections, secure transactions, and a smooth, premium customer experience.",
        icon: React.createElement(IconSettings, { size: 30 }),
        link: "/website-maintenance",
      },
      {
        id: "leads-generation",
        title: "Jewellery Lead Generation",
        description:
          "Capture and nurture high-value leads through targeted campaigns, appointment booking funnels, and special offer promotions.",
        icon: React.createElement(IconUsers, { size: 30 }),
        link: "/leads-generation",
      },
      {
        id: "marketing-automation",
        title: "Jewellery Marketing Automation",
        description:
          "Automated workflows for cart recovery, festival launches, and anniversary gifting campaigns to maximise repeat sales.",
        icon: React.createElement(IconRobot, { size: 30 }),
        link: "/marketing-automation",
      },
    ],
  },

  stats: {
    title: "Proven Jewellery Growth At Scale",
    subtitle: "Compounding Wins Across Traffic, Trust, And Transactions",
    items: [
      {
        icon: React.createElement(IconTrendingUp, { size: 30 }),
        title: "Revenue Lift",
        value: "310%",
        description:
          "Average online revenue growth within 6–8 months for jewellers implementing our full-funnel system.",
      },
      {
        icon: React.createElement(IconTarget, { size: 30 }),
        title: "High-Intent Leads",
        value: "2.7X",
        description:
          "Increase in qualified bridal and high-ticket inquiries via search, social, and local campaigns.",
      },
      {
        icon: React.createElement(IconShield, { size: 30 }),
        title: "Trust Signals",
        value: "+220%",
        description:
          "Growth in reviews, user-generated content, and certification engagement that shortens time-to-purchase.",
      },
      {
        icon: React.createElement(IconStar, { size: 30 }),
        title: "Customer Delight",
        value: "4.9/5",
        description:
          "Sustained satisfaction from personalised experiences, secure shopping, and luxury unboxing.",
      },
    ],
  },

  testimonials: {
    title: [
      { text: "Jewellery Brand " },
      {
        text: "Success Stories",
        gradient: true,
        gradientClass: "from-amber-400 via-yellow-500 to-rose-500",
      },
    ],
    subtitle: "How We Turn Browsers Into Buyers For Fine Jewellery",
    description:
      "From boutique ateliers to multi-city retailers, our clients unlock consistent growth with creative that sparks desire and experiences that build trust.",
    items: [
      {
        id: "1",
        message:
          "Our bridal pipeline exploded after the new website and Instagram funnels. Appointments doubled and average ticket size climbed.",
        highlight: "2X appointments, higher AOV",
        stars: 5,
        name: "Ananya Kapoor",
        designation: "Founder",
        company: "Aarika Fine Jewels",
      },
      {
        id: "2",
        message:
          "Their Shopping Ads and SEO helped us scale online orders without discounts. Review volumes soared and repeat buyers increased.",
        highlight: "178% YoY online orders",
        stars: 5,
        name: "Rohan Mehta",
        designation: "E-Commerce Head",
        company: "Solitaire Lane",
      },
      {
        id: "3",
        message:
          "Their automation and WhatsApp campaigns turned casual browsers into loyal buyers. Every festive season now breaks records.",
        highlight: "3.1X repeat sales",
        stars: 5,
        name: "Mira Patel",
        designation: "Marketing Lead",
        company: "Noor Gold & Diamonds",
      },
    ],
  },

  cta: {
    title: "Ready To Make Your Jewellery Irresistible?",
    subtitle: "Book More Appointments, Increase Online Orders, Grow LTV",
    description:
      "Get a free, personalised growth plan covering search, social, CRO, and automation. See exactly how we’ll scale your brand with creative that sparkles and funnels that convert.",
    backgroundColor: "bg-gradient-to-r from-stone-900 to-black",
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