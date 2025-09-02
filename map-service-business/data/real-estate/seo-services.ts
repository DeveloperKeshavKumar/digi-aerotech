import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  IconHome,
  IconSearch,
  IconBuildingSkyscraper,
  IconMapPin,
  IconTrendingUp,
  IconUsers,
  IconFileAnalytics,
  IconArrowRight,
  IconGlobe,
} from "@tabler/icons-react";

export const map: ServiceBusinessMap = {
  service: "seo-services",
  business: "real-estate",
  variants: {
    hero: "variant1",
    whyChooseUs: "variant3",
    process: "variant2",
  },
  data: {
    slug: "seo-services-real-estate",
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
            { text: "Why Real Estate Brands", gradient: false },
            { text: "Struggle with SEO", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "Without proper SEO, your real estate website becomes invisible to buyers & renters searching online.",
          painPoints: [
            "Low rankings on Google for competitive property keywords",
            "Poor local visibility in Google Maps & Search",
            "Outdated property pages with no SEO optimization",
            "Not leveraging long-tail searches like '2BHK apartments in [city]'",
            "High bounce rates due to poor site performance",
          ],
          solutionPoints: [
            "Targeted keyword strategy for competitive property searches",
            "Local SEO optimization for real estate listings",
            "High-quality content creation with SEO-rich property descriptions",
            "Technical SEO & mobile optimization for faster performance",
            "Backlink building to increase authority & trust",
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Rank Higher & Generate More Property Leads",
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
              question: "Why is SEO important for real estate?",
              answer:
                "SEO ensures your properties appear on top when buyers search for homes, apartments, or commercial spaces in your area.",
              icon: React.createElement(IconSearch, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "How long does real estate SEO take?",
              answer:
                "It usually takes 3–6 months to see strong results, but local SEO optimizations can generate quicker leads within weeks.",
              icon: React.createElement(IconFileAnalytics, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "Do you optimize property listing pages?",
              answer:
                "Yes, we optimize every property listing with SEO-rich descriptions, meta tags, and schema to improve visibility.",
              icon: React.createElement(IconBuildingSkyscraper, { size: 22 }),
            },
            {
              id: "faq-4",
              question: "Can SEO generate actual property buyers?",
              answer:
                "Yes, SEO targets high-intent searches like 'buy flat in [city]' and 'luxury villa for sale', leading to qualified buyer inquiries.",
              icon: React.createElement(IconUsers, { size: 22 }),
            },
            {
              id: "faq-5",
              question: "Do you handle local SEO for multiple projects?",
              answer:
                "We optimize for multiple properties, projects, and localities so that each project ranks in its respective city/area.",
              icon: React.createElement(IconMapPin, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Rank",
      headlineKeywords: [
        "Higher on Google",
        "For Property Searches",
        "In Your Local Market",
        "For Apartments & Villas",
        "For Real Buyers",
      ],
      brandLine: [
        {
          text: "📈 Turn Google Searches into Property Leads",
          gradient: false,
        },
      ],
      subheadline:
        "We help real estate businesses rank higher on Google & Maps for competitive keywords, ensuring you capture buyers at the moment they search.",
      ctaButtons: [
        {
          icon: React.createElement(IconArrowRight, { size: 28 }),
          text: "Boost Your Real Estate SEO",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(IconSearch, { size: 32 }),
          title: "500+ Keywords",
          description: "Ranked for real estate clients",
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "300% More Traffic",
          description: "Driven to real estate websites",
        },
        {
          icon: React.createElement(IconHome, { size: 32 }),
          title: "1,000+ Buyer Leads",
          description: "Generated through SEO campaigns",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Us for", gradient: false },
        { text: "Real Estate SEO", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(IconMapPin, { size: 28 }),
          title: "Local SEO Experts",
          description: "We optimize for location-based searches like 'apartments near me' to capture hyper-local leads.",
        },
        {
          icon: React.createElement(IconGlobe, { size: 28 }),
          title: "National & Global Reach",
          description: "For luxury and NRI properties, we target international searches to attract overseas buyers.",
        },
        {
          icon: React.createElement(IconFileAnalytics, { size: 28 }),
          title: "Data-Driven SEO",
          description: "Every strategy is backed by keyword research, competitor analysis & analytics tracking.",
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "ROI-Focused Results",
          description: "We don’t just rank you higher, we drive inquiries, site visits, and property sales.",
        },
      ],
      cta: {
        text: "Get Your Properties Ranked on Google",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our SEO Process for Real Estate",
      subtitle: "FROM VISIBILITY TO LEAD GENERATION",
      className: "border-t border-border dark:border-gray-700",
      description:
        "Our SEO process is designed to make your real estate projects discoverable, engaging, and conversion-focused.",
      steps: [
        {
          id: 1,
          title: "Keyword Research",
          description: "We identify high-intent real estate keywords like 'buy flat in [city]' & 'commercial space for rent'.",
        },
        {
          id: 2,
          title: "On-Page SEO",
          description: "Optimizing property pages with meta tags, SEO-friendly URLs, images & schema markup.",
        },
        {
          id: 3,
          title: "Local SEO Optimization",
          description: "Improving Google Maps ranking & local project visibility through NAP consistency & GMB enhancements.",
        },
        {
          id: 4,
          title: "Content Marketing",
          description: "Publishing blogs, guides & property insights that rank for long-tail queries and build authority.",
        },
        {
          id: 5,
          title: "Technical SEO",
          description: "Ensuring fast-loading, mobile-optimized websites with proper indexing & crawlability.",
        },
        {
          id: 6,
          title: "Reporting & Scaling",
          description: "We track rankings, leads, and conversions, scaling campaigns for maximum ROI.",
        },
      ],
    },
    cta: {
      title: "Want More Buyer Leads from Google?",
      subtitle: "RANK HIGHER. ATTRACT BUYERS. SELL FASTER.",
      description:
        "We help real estate brands dominate Google rankings, bringing you closer to property buyers when they search.",
    },
  },
};
