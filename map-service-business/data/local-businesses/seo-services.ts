import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  IconSearch,
  IconMapPin,
  IconTrendingUp,
  IconUsers,
  IconTarget,
  IconChartBar,
  IconArrowRight,
} from "@tabler/icons-react";

export const map: ServiceBusinessMap = {
  service: "seo-services",
  business: "local-business",
  variants: {
    hero: "variant1",
    whyChooseUs: "variant2",
    process: "variant3",
    testimonials: "variant2",
  },
  data: {
    slug: "seo-services-local-business",
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
            { text: "Why Local Businesses Fail", gradient: false },
            { text: "Without SEO", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "80% of local customers search online before visiting a business. Without SEO, your shop, clinic, or service risks being invisible to those ready-to-buy customers.",
          painPoints: [
            "Business not showing up in Google search or maps",
            "Competitors ranking higher for local services",
            "Few or no calls & walk-ins from online search",
            "Low website traffic & poor visibility",
            "Struggling to convert nearby customers",
          ],
          solutionPoints: [
            "Rank higher on Google Maps & local searches",
            "Dominate ‘near me’ searches for your services",
            "Boost daily foot traffic & phone calls",
            "Build trust with local customers searching online",
            "Generate more leads without heavy ad spend",
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Get My Business Ranked",
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
              question: "How does SEO help my local business?",
              answer:
                "SEO ensures your business shows up when customers search for services near them—leading to more calls, visits, and conversions.",
              icon: React.createElement(IconMapPin, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "How fast can I see SEO results?",
              answer:
                "Local SEO usually shows results within 3-4 months, and once rankings improve, the growth compounds over time.",
              icon: React.createElement(IconTrendingUp, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "Can SEO work without a website?",
              answer:
                "Yes, we optimize your Google Business Profile and listings, but having a website increases long-term ranking and conversions.",
              icon: React.createElement(IconUsers, { size: 22 }),
            },
            {
              id: "faq-4",
              question: "Is SEO affordable for small businesses?",
              answer:
                "Absolutely! Local SEO is budget-friendly and gives long-term results, unlike ads where visibility stops when you stop spending.",
              icon: React.createElement(IconChartBar, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Grow",
      headlineKeywords: ["Rank Locally", "Get Found", "Drive Customers"],
      brandLine: [
        {
          text: "📍 SEO Services for Local Businesses",
          gradient: true,
          gradientClass: "from-orange-500 via-pink-500 to-red-600",
        },
      ],
      subheadline:
        "We help shops, gyms, restaurants, clinics & service providers dominate local search results, drive walk-ins, and increase calls every day.",
      ctaButtons: [
        {
          icon: React.createElement(IconArrowRight, { size: 28 }),
          text: "Boost My Local Ranking",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(IconSearch, { size: 32 }),
          title: "80% Local Searches",
          description: "Most customers search online before buying locally.",
        },
        {
          icon: React.createElement(IconMapPin, { size: 32 }),
          title: "Top 3 Rankings",
          description: "We help you appear in the top 3 Google local results.",
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "Consistent Leads",
          description: "Daily calls, visits & conversions for your business.",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Us For", gradient: false },
        { text: "Local SEO?", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(IconMapPin, { size: 28 }),
          title: "Google Maps Ranking",
          description: "We make your business visible in local map searches.",
        },
        {
          icon: React.createElement(IconTarget, { size: 28 }),
          title: "Targeted Keywords",
          description: "We optimize for ‘near me’ searches customers actually use.",
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "Customer-Centric SEO",
          description: "Our strategies bring customers ready to buy, not just traffic.",
        },
      ],
      cta: {
        text: "Rank My Business Locally",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our Local SEO Process",
      subtitle: "RESEARCH • OPTIMIZE • RANK • GROW",
      className: "border-t border-border dark:border-gray-700",
      description:
        "We follow a proven SEO process to help local businesses dominate search results and generate consistent customers.",
      steps: [
        {
          id: 1,
          title: "Local Market Research",
          description: "We analyze your competitors, customers & search trends.",
        },
        {
          id: 2,
          title: "On-Page SEO",
          description: "Optimizing your website, listings & business profile for local keywords.",
        },
        {
          id: 3,
          title: "Google Maps Optimization",
          description: "We optimize your Google Business Profile for maximum visibility.",
        },
        {
          id: 4,
          title: "Content & Backlinks",
          description: "Creating local-focused content & citations for authority.",
        },
        {
          id: 5,
          title: "Tracking & Reporting",
          description: "Transparent SEO reports with ranking, calls & visits tracked.",
        },
      ],
    },
    testimonials: {
      title: [
        { text: "Local Businesses Growing", gradient: false },
        { text: "With Our SEO Services", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      description:
        "From salons to gyms to clinics, our SEO strategies help local businesses dominate search and bring more customers daily.",
      testimonials: [
        {
          id: "1",
          message:
            "Our salon now shows up in the top 3 Google results! We get 20+ new customers every week thanks to their local SEO service.",
          highlight: "20+ Weekly Customers",
          stars: 5,
          name: "Ritu Malhotra",
          designation: "Owner",
          company: "Glow Beauty Salon",
        },
        {
          id: "2",
          message:
            "Our gym membership inquiries tripled after our business started ranking for ‘gym near me’. Amazing SEO results!",
          highlight: "3x More Leads",
          stars: 5,
          name: "Amit Sharma",
          designation: "Founder",
          company: "FitZone Gym",
        },
      ],
    },
    cta: {
      title: "Dominate Local Search With SEO",
      subtitle: "GET FOUND • GET CUSTOMERS • GROW DAILY",
      description:
        "Don’t let competitors take your customers. Rank higher, attract more walk-ins, calls, and conversions with our local SEO services.",
    },
  },
};
