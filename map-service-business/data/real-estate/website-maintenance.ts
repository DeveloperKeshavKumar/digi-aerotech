import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  IconHome,
  IconBuildingSkyscraper,
  IconRefresh,
  IconShieldCheck,
  IconTrendingUp,
  IconDeviceDesktop,
  IconDatabase,
  IconBug,
  IconArrowRight,
} from "@tabler/icons-react";
import { Wrench } from "lucide-react";

export const map: ServiceBusinessMap = {
  service: "website-maintenance",
  business: "real-estate",
  variants: {
    hero: "variant3",
    whyChooseUs: "variant2",
    process: "variant1",
    testimonials: "variant1",
  },
  data: {
    slug: "website-maintenance-real-estate",
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
            { text: "Why Real Estate Websites", gradient: false },
            { text: "Need Ongoing Maintenance", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "Property buyers expect updated listings, fast loading, and secure websites. Outdated or broken sites can make you lose valuable leads.",
          painPoints: [
            "Property listings not updated regularly",
            "Slow-loading websites leading to high bounce rates",
            "Broken links, forms, and lead capture tools",
            "Security vulnerabilities & outdated plugins",
            "Loss of SEO rankings due to poor maintenance",
          ],
          solutionPoints: [
            "Regular listing & content updates",
            "Performance optimization for faster load times",
            "Bug fixes, error monitoring & form repairs",
            "Strong website security & backup solutions",
            "Continuous SEO monitoring & improvement",
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Keep Your Property Website Healthy",
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
              question: "Why is website maintenance important for real estate?",
              answer:
                "Real estate websites need constant updates—property listings change, market trends shift, and security threats evolve. Regular maintenance ensures your site remains trusted and visible.",
              icon: React.createElement(Wrench, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "Do you provide property listing updates?",
              answer:
                "Yes, we update property listings, galleries, and content to keep your site accurate and appealing to buyers.",
              icon: React.createElement(IconHome, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "Will website maintenance improve my SEO?",
              answer:
                "Absolutely. Regular fixes, updates, and optimizations improve site speed, security, and SEO rankings for real estate businesses.",
              icon: React.createElement(IconTrendingUp, { size: 22 }),
            },
            {
              id: "faq-4",
              question: "Do you provide 24/7 support for real estate websites?",
              answer:
                "Yes, our team monitors your site round-the-clock to ensure uptime, fix bugs, and secure your real estate website.",
              icon: React.createElement(IconShieldCheck, { size: 22 }),
            },
            {
              id: "faq-5",
              question: "Can you maintain multi-location real estate portals?",
              answer:
                "Yes, we maintain small realtor websites to large real estate listing portals with thousands of properties.",
              icon: React.createElement(IconDatabase, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Maintain",
      headlineKeywords: [
        "Property Websites",
        "Without Downtime",
        "With SEO Stability",
        "That Build Buyer Trust",
        "Updated & Secure",
      ],
      brandLine: [
        {
          text: "🔧 Keep Your Real Estate Website Running Smoothly",
          gradient: false,
        },
      ],
      subheadline:
        "We provide ongoing website maintenance for real estate businesses to ensure fast performance, updated listings, and maximum lead conversions.",
      ctaButtons: [
        {
          icon: React.createElement(IconArrowRight, { size: 28 }),
          text: "Secure My Real Estate Website",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(IconHome, { size: 32 }),
          title: "1,000+ Properties",
          description: "Updated monthly for clients",
        },
        {
          icon: React.createElement(IconBug, { size: 32 }),
          title: "Zero Downtime",
          description: "With proactive monitoring & fixes",
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "40% More Leads",
          description: "With fast & well-maintained websites",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Us for", gradient: false },
        { text: "Real Estate Website Maintenance", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(IconRefresh, { size: 28 }),
          title: "Regular Updates",
          description: "We keep property listings, images, and content updated in real-time.",
        },
        {
          icon: React.createElement(IconDeviceDesktop, { size: 28 }),
          title: "Faster Performance",
          description: "We optimize site speed for smooth browsing & higher conversions.",
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 28 }),
          title: "Website Security",
          description: "We ensure your real estate website is secure with backups & protection.",
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "SEO Stability",
          description: "Regular fixes & monitoring help maintain Google rankings & visibility.",
        },
      ],
      cta: {
        text: "Get 24/7 Real Estate Website Support",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our Real Estate Website Maintenance Process",
      subtitle: "KEEP YOUR WEBSITE SECURE, UPDATED & SEO-READY",
      className: "border-t border-border dark:border-gray-700",
      description:
        "We don’t just maintain your real estate website — we optimize it for leads, performance & SEO stability.",
      steps: [
        {
          id: 1,
          title: "Website Audit",
          description: "We analyze your website performance, bugs, broken links, and outdated listings.",
        },
        {
          id: 2,
          title: "Property Listing Updates",
          description: "Regularly updating new properties, removing sold listings, and keeping details accurate.",
        },
        {
          id: 3,
          title: "Bug Fixing & Error Resolution",
          description: "Fixing broken links, contact forms, and ensuring all lead capture works flawlessly.",
        },
        {
          id: 4,
          title: "Speed Optimization",
          description: "Improving website loading time for better user experience & higher SEO rankings.",
        },
        {
          id: 5,
          title: "Security & Backups",
          description: "Ensuring strong security protocols, malware protection & regular backups.",
        },
        {
          id: 6,
          title: "Ongoing Monitoring",
          description: "Continuous support & monitoring to keep your website running smoothly 24/7.",
        },
      ],
    },
    testimonials: {
      title: [
        { text: "Real Estate Agencies", gradient: false },
        { text: "That Trust Our Website Maintenance", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      description:
        "From independent brokers to large developers, we keep real estate websites secure, updated & optimized.",
      testimonials: [
        {
          id: "1",
          message:
            "Their maintenance team keeps our property website updated and secure. We no longer worry about downtime.",
          highlight: "No downtime",
          stars: 5,
          name: "Rohit Mehta",
          designation: "Broker",
          company: "Elite Realty",
        },
        {
          id: "2",
          message:
            "Thanks to their continuous updates, our listings stay fresh and our SEO rankings improved significantly.",
          highlight: "SEO rankings improved",
          stars: 5,
          name: "Priya Kapoor",
          designation: "Marketing Head",
          company: "Skyline Properties",
        },
      ],
    },
    cta: {
      title: "Keep Your Real Estate Website Healthy & Updated",
      subtitle: "24/7 MAINTENANCE & PERFORMANCE OPTIMIZATION",
      description:
        "We ensure your property website stays fast, secure & updated to attract buyers and maximize leads.",
    },
  },
};
