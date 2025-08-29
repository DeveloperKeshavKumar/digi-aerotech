import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  IconMapPin,
  IconHome,
  IconSearch,
  IconBuildingSkyscraper,
  IconArrowRight,
  IconTrendingUp,
  IconUsers,
  IconCalendarEvent,
  IconStar,
  IconBrush,
} from "@tabler/icons-react";

export const map: ServiceBusinessMap = {
  service: "local-seo",
  business: "interior-designers",
  variants: {
    hero: "variant3",
    whyChooseUs: "variant2",
    process: "variant1",
    testimonials: "variant3",
  },
  data: {
    slug: "local-seo-interior-designers",
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
            { text: "Interior Designers Struggle", gradient: false },
            { text: "With Local Visibility", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "Many interior designers lose projects because they don’t appear in Google’s top local searches. If your studio isn’t visible on Maps or “near me” searches, clients will simply choose your competitors.",
          painPoints: [
            "Not showing up in Google Maps for design services",
            "Competitors ranking higher for ‘near me’ searches",
            "Low website traffic from local audience",
            "Missing client inquiries due to poor visibility",
            "Outdated or incomplete Google Business Profile",
          ],
          solutionPoints: [
            "Rank at the top of local searches in your area",
            "Optimize your Google Business Profile for conversions",
            "Boost inquiries directly from Google Maps & Search",
            "Attract homeowners & offices searching for designers",
            "Get more reviews, calls, and project bookings",
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Dominate Local Search",
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
              question: "How does Local SEO help interior designers?",
              answer:
                "Local SEO makes your business appear in Google Maps, local packs, and 'near me' searches. This visibility drives direct calls, inquiries, and project leads from nearby clients.",
              icon: React.createElement(IconSearch, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "Can Local SEO bring high-value projects?",
              answer:
                "Yes. By ranking for premium keywords like 'luxury interior designer near me,' you attract clients ready to invest in high-ticket design projects.",
              icon: React.createElement(IconStar, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "How long before I see results?",
              answer:
                "Most designers start seeing results within 3–6 months, depending on competition and consistency of local optimization.",
              icon: React.createElement(IconCalendarEvent, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Be Found Locally",
      headlineKeywords: ["Local SEO", "Interior Designers", "Google Maps"],
      brandLine: [
        {
          text: "📍 Rank #1 Locally & Win More Clients for Your Design Studio",
          gradient: true,
          gradientClass: "from-orange-500 via-pink-500 to-red-600",
        },
      ],
      subheadline:
        "We help interior designers dominate Google’s local searches, Maps, and ‘near me’ queries. Get discovered by homeowners & businesses nearby who are ready to hire a designer today.",
      ctaButtons: [
        {
          icon: React.createElement(IconArrowRight, { size: 28 }),
          text: "Boost My Local Rankings",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "300% More Calls",
          description: "Clients get 3x more phone calls from local SEO visibility.",
        },
        {
          icon: React.createElement(IconMapPin, { size: 32 }),
          title: "Top Map Rankings",
          description: "Appear on Google Maps for every design-related search.",
        },
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "Local Clients",
          description: "Attract homeowners, corporates & businesses near you.",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Us for", gradient: false },
        { text: "Local SEO?", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(IconBrush, { size: 28 }),
          title: "Interior-Specific SEO",
          description: "We craft strategies designed exclusively for design studios.",
        },
        {
          icon: React.createElement(IconBuildingSkyscraper, { size: 28 }),
          title: "Google Maps Domination",
          description: "Rank your interior business higher than competitors nearby.",
        },
        {
          icon: React.createElement(IconHome, { size: 28 }),
          title: "Target Nearby Clients",
          description: "Attract homeowners & commercial clients searching locally.",
        },
      ],
      cta: {
        text: "Rank My Interior Business Locally",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our Local SEO Process for Interior Designers",
      subtitle: "RANK • ATTRACT • CONVERT • GROW",
      description:
        "We use proven optimization methods to ensure your studio shows up every time potential clients search for interior design services in your area.",
      steps: [
        {
          id: 1,
          title: "Local Market Research",
          description: "We identify keywords and search trends specific to your area & competition.",
        },
        {
          id: 2,
          title: "Google Business Profile Optimization",
          description: "We optimize your profile with photos, services, reviews, and CTAs to drive client action.",
        },
        {
          id: 3,
          title: "On-Page & Local SEO",
          description: "Your website is optimized with local keywords, location-based content, and schema markup.",
        },
        {
          id: 4,
          title: "Reviews & Reputation Management",
          description: "We help collect 5-star reviews to build trust and improve rankings.",
        },
        {
          id: 5,
          title: "Tracking & Reporting",
          description: "Monthly reports showing ranking improvements, calls, and client leads generated.",
        },
      ],
    },
    testimonials: {
      title: [
        { text: "Interior Designers Who", gradient: false },
        { text: "Ranked Locally with Us", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      description:
        "From solo interior freelancers to established studios, our Local SEO strategies help design businesses attract more nearby clients & projects.",
      testimonials: [
        {
          id: "1",
          message:
            "I was invisible in Google Maps earlier, but within 4 months I started showing up for every interior design search in my city.",
          highlight: "Top Map Rankings",
          stars: 5,
          name: "Meera Joshi",
          designation: "Interior Designer",
          company: "Urban Nest Interiors",
        },
        {
          id: "2",
          message:
            "Thanks to their local SEO, I now get daily calls from homeowners looking for design services. My projects have doubled in just 6 months.",
          highlight: "More Calls & Clients",
          stars: 5,
          name: "Rohit Kapoor",
          designation: "Founder",
          company: "DreamSpace Interiors",
        },
      ],
    },
    cta: {
      title: "Win More Local Projects with SEO",
      subtitle: "RANK HIGHER • GET CALLS • BOOK MORE CLIENTS",
      description:
        "Don’t let your competitors steal your local clients. With our proven Local SEO services, your interior design business will dominate Google Maps and local search results, bringing you steady projects every month.",
    },
  },
};
