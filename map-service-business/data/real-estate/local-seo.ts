import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  IconMapPin, IconBuildingSkyscraper, IconSearch,
  IconUsers, IconStar, IconPhoneCall, IconTrendingUp,
  IconHome, IconArrowRight
} from "@tabler/icons-react";

export const map: ServiceBusinessMap = {
  service: "local-seo",
  business: "real-estate",
  variants: {
    hero: "variant2",
    whyChooseUs: "variant1",
    process: "variant3",
    testimonials: "variant2",
  },
  data: {
    slug: "local-seo-real-estate",
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
            { text: "Why Real Estate Businesses", gradient: false },
            { text: "Struggle with Local Visibility", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline: "Property buyers and renters search locally first. If your agency isn’t ranking in local results, you’re losing high-intent clients daily.",
          painPoints: [
            "Not ranking on Google Maps for 'flats near me'",
            "Inconsistent NAP (Name, Address, Phone) across listings",
            "Weak local citations & directory presence",
            "Low star ratings & poor online reviews",
            "Competitors capturing all local searches",
          ],
          solutionPoints: [
            "Optimize GMB & Maps for top local rankings",
            "Build high-quality local citations & backlinks",
            "NAP cleanup across directories",
            "Reputation & reviews management",
            "Geo-targeted SEO campaigns for real estate",
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Boost Local Real Estate Visibility",
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
              question: "Why is Local SEO important for real estate?",
              answer: "Most buyers and renters use Google Maps & local searches. Local SEO ensures your listings appear where clients are searching.",
              icon: React.createElement(IconSearch, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "Can Local SEO help me get property site visits?",
              answer: "Yes, by ranking high for geo-specific terms like '3BHK in Andheri' or 'plots in Gurgaon', you attract real local buyers.",
              icon: React.createElement(IconHome, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "How do reviews affect local rankings?",
              answer: "Positive reviews boost trust and significantly improve your Maps visibility, bringing more qualified inquiries.",
              icon: React.createElement(IconStar, { size: 22 }),
            },
            {
              id: "faq-4",
              question: "How soon can I see Local SEO results?",
              answer: "Typically within 6–8 weeks you’ll notice improved rankings, more calls, and higher walk-in site visits.",
              icon: React.createElement(IconTrendingUp, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Dominate Local",
      headlineKeywords: [
        "Property Searches",
        "Google Maps Rankings",
        "City-Wide Visibility",
        "Neighborhood SEO",
        "Local Buyer Inquiries",
      ],
      brandLine: [
        { text: "📍 Turn Local Searches into Site Visits", gradient: false },
      ],
      subheadline: "We help real estate agents, developers, and property consultants rank at the top of *Google Maps, local searches, and neighborhood-specific keywords* to capture high-intent leads.",
      ctaButtons: [
        { icon: React.createElement(IconPhoneCall, { size: 28 }), text: "Boost Local SEO Now", link: "/contact" },
        { icon: React.createElement(IconMapPin, { size: 28 }), text: "Get Free Local Audit", link: "tel:+918607119872", variant: "secondary" },
      ],
      stats: [
        {
          icon: React.createElement(IconBuildingSkyscraper, { size: 32 }),
          title: "500+ Properties",
          description: "Ranked in Google Maps",
        },
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "3X More Calls",
          description: "From local property buyers",
        },
        {
          icon: React.createElement(IconStar, { size: 32 }),
          title: "4.8★ Avg Rating",
          description: "Boosted through reviews",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Digi Aerotech for", gradient: false },
        { text: "Local SEO in Real Estate?", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(IconMapPin, { size: 28 }),
          title: "Google Maps Optimization",
          description: "Rank higher for 'property near me' searches and attract walk-in clients.",
        },
        {
          icon: React.createElement(IconSearch, { size: 28 }),
          title: "Geo-Targeted Keywords",
          description: "We target hyper-local keywords that bring in location-specific leads.",
        },
        {
          icon: React.createElement(IconStar, { size: 28 }),
          title: "Review & Reputation Boost",
          description: "Systematic strategies to increase positive reviews & brand trust.",
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Local Backlink Authority",
          description: "Strong citations & local backlinks that push you ahead of competitors.",
        },
      ],
      cta: {
        text: "Rank Your Real Estate Agency Locally",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our Local SEO Process for Real Estate",
      subtitle: "RANK HIGHER IN PROPERTY SEARCHES",
      className: "border-t border-border dark:border-gray-700",
      description: "We use proven *Local SEO frameworks* to help your real estate brand dominate Maps, directories, and neighborhood searches.",
      steps: [
        {
          id: 1,
          title: "Local SEO Audit",
          description: "We analyze your GMB profile, NAP consistency, and competitor rankings in your target location.",
        },
        {
          id: 2,
          title: "Google My Business Optimization",
          description: "Your GMB listing is optimized with categories, photos, service areas, and property-specific updates.",
        },
        {
          id: 3,
          title: "Geo-Keyword Targeting",
          description: "We research & implement high-intent, location-specific keywords like 'luxury flats in Bandra' or 'plots in Noida'.",
        },
        {
          id: 4,
          title: "Local Citations & Directories",
          description: "We build high-quality citations and clean up duplicates to boost trust and rankings.",
        },
        {
          id: 5,
          title: "Review Management",
          description: "We implement systems to collect, manage, and showcase positive reviews that increase trust & conversions.",
        },
        {
          id: 6,
          title: "Tracking & Reporting",
          description: "Transparent reporting with call tracking, Maps visibility, and leads growth from local searches.",
        },
      ],
    },
    testimonials: {
      title: [
        { text: "Real Estate Agencies That", gradient: false },
        { text: "Ranked #1 Locally", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      description: "See how local SEO boosted visibility and lead flow for property consultants.",
      testimonials: [
        {
          id: "1",
          message: "We went from not showing up in Maps to ranking #1 for '2BHK apartments in Pune'. Inquiries doubled within 2 months.",
          highlight: "Doubled Local Inquiries",
          stars: 5,
          name: "Ravi Kapoor",
          designation: "Realtor",
          company: "Skyline Properties",
        },
        {
          id: "2",
          message: "Digi Aerotech’s Local SEO strategies helped us dominate Google Maps across multiple neighborhoods.",
          highlight: "Top 3 in Google Maps",
          stars: 5,
          name: "Nidhi Sharma",
          designation: "Developer",
          company: "GreenLand Builders",
        },
      ],
    },
    cta: {
      title: "Want to Rank #1 in Local Property Searches?",
      subtitle: "LOCAL SEO THAT BRINGS WALK-IN CLIENTS",
      description: "Get found instantly when buyers search for flats, plots, or commercial properties in your city.",
    },
  },
};
