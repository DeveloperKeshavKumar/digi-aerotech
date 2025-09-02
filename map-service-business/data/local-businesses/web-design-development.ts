import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  IconGlobe,
  IconDeviceMobile,
  IconShoppingCart,
  IconUsers,
  IconLayoutDashboard,
  IconTrendingUp,
  IconMapPin,
  IconArrowRight,
} from "@tabler/icons-react";

export const map: ServiceBusinessMap = {
  service: "web-design-development",
  business: "local-business",
  variants: {
    hero: "variant2",
    whyChooseUs: "variant3",
    process: "variant1",
  },
  data: {
    slug: "web-design-development-local-business",
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
            { text: "Without a Website", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "In today’s digital-first world, customers search online before walking into a shop. Without a strong website, you’re losing potential business every day.",
          painPoints: [
            "No online presence to showcase services",
            "Dependence only on word-of-mouth & walk-ins",
            "Competitors ranking higher on Google",
            "Outdated design that doesn’t convert",
            "No mobile optimization for on-the-go customers",
          ],
          solutionPoints: [
            "Modern websites that attract & convert customers",
            "Mobile-friendly design for every device",
            "Google-optimized structure for local ranking",
            "Online booking, ordering & inquiry systems",
            "Trust-building designs with reviews & testimonials",
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Build My Local Business Website",
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
              question: "Why do local businesses need a website?",
              answer:
                "A website acts as your 24/7 sales representative. It showcases your services, builds trust, and helps customers find and contact you instantly.",
              icon: React.createElement(IconGlobe, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "Can a website increase walk-ins and sales?",
              answer:
                "Yes. With clear CTAs, maps, contact forms, and offers, we drive online visitors to your shop, clinic, or restaurant directly.",
              icon: React.createElement(IconMapPin, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "Do you make websites mobile-friendly?",
              answer:
                "Absolutely. More than 80% of customers search from their phones. We design responsive websites that look perfect on any device.",
              icon: React.createElement(IconDeviceMobile, { size: 22 }),
            },
            {
              id: "faq-4",
              question: "Can I sell online with my website?",
              answer:
                "Yes. We integrate eCommerce, booking, or ordering systems so your local business can take payments & orders online.",
              icon: React.createElement(IconShoppingCart, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Build",
      headlineKeywords: ["Trust Online", "Convert Visitors", "Boost Sales"],
      brandLine: [
        {
          text: "🌐 Web Design & Development for Local Businesses",
          gradient: true,
          gradientClass: "from-orange-500 via-pink-500 to-red-600",
        },
      ],
      subheadline:
        "We create high-performing, mobile-friendly, and SEO-optimized websites for local businesses like shops, restaurants, gyms, clinics & service providers.",
      ctaButtons: [
        {
          icon: React.createElement(IconArrowRight, { size: 28 }),
          text: "Get My Website Today",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "92% Customers",
          description: "Check websites before visiting a local business.",
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "3X Growth",
          description: "Businesses with modern websites see triple inquiries.",
        },
        {
          icon: React.createElement(IconLayoutDashboard, { size: 32 }),
          title: "Conversion-Focused",
          description: "Designed to turn visitors into loyal customers.",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Us For", gradient: false },
        { text: "Web Design & Development?", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(IconDeviceMobile, { size: 28 }),
          title: "Mobile-First Design",
          description: "Optimized for smartphones, where most searches happen.",
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "SEO-Friendly",
          description: "Websites built to rank higher on Google & attract locals.",
        },
        {
          icon: React.createElement(IconShoppingCart, { size: 28 }),
          title: "Sales-Ready Features",
          description: "Booking, ordering, payment integration & lead forms.",
        },
      ],
      cta: {
        text: "Get a High-Converting Website",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our Web Development Process for Local Businesses",
      subtitle: "PLAN • DESIGN • DEVELOP • LAUNCH • GROW",
      className: "border-t border-border dark:border-gray-700",
      description:
        "We follow a structured approach to create websites that not only look stunning but also deliver measurable growth for your local business.",
      steps: [
        {
          id: 1,
          title: "Discovery & Planning",
          description: "We understand your business goals, target audience, and competitors to craft a winning website strategy.",
        },
        {
          id: 2,
          title: "Custom Design",
          description: "Our designers create visually appealing, brand-focused layouts that reflect your local identity.",
        },
        {
          id: 3,
          title: "Development",
          description: "We build fast, secure, and SEO-optimized websites with smooth navigation & responsive design.",
        },
        {
          id: 4,
          title: "Integrations",
          description: "From booking systems to eCommerce to contact forms, we integrate everything your business needs.",
        },
        {
          id: 5,
          title: "Testing & Launch",
          description: "We ensure flawless performance across devices and browsers before going live.",
        },
        {
          id: 6,
          title: "Growth & Support",
          description: "Post-launch, we monitor, optimize & support your website for continuous growth.",
        },
      ],
    },
    cta: {
      title: "Build a Website That Converts",
      subtitle: "ATTRACT LOCALS • GAIN TRUST • BOOST SALES",
      description:
        "Don’t let your business lose customers to competitors with better websites. Let us build a professional, SEO-friendly site that grows your brand.",
    },
  },
};
