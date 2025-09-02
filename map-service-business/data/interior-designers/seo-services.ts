import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  IconSearch,
  IconBrush,
  IconBuildingSkyscraper,
  IconHome,
  IconTrendingUp,
  IconUsers,
  IconArrowRight,
  IconChecklist,
  IconDeviceDesktop,
} from "@tabler/icons-react";

export const map: ServiceBusinessMap = {
  service: "seo-services",
  business: "interior-designers",
  variants: {
    hero: "variant2",
    whyChooseUs: "variant3",
    process: "variant1",
  },
  data: {
    slug: "seo-services-interior-designers",
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
            { text: "Why Interior Designers", gradient: false },
            { text: "Need SEO Services", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "Interior design is highly competitive — if you’re not ranking on Google when people search 'interior designers near me' or 'home renovation experts', you’re losing clients to competitors.",
          painPoints: [
            "Low ranking on Google search results",
            "Relying only on word-of-mouth for projects",
            "Struggling to attract high-value clients online",
            "Competitors dominating map & organic results",
            "Website traffic not converting into consultations",
          ],
          solutionPoints: [
            "Local SEO that ranks you for 'interior designers near me'",
            "Keyword targeting for premium home & office design services",
            "On-page optimization for better visibility & credibility",
            "Content marketing that builds authority in design space",
            "Conversion-focused SEO to turn visitors into clients",
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Boost My Google Ranking",
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
              question: "How can SEO help interior designers?",
              answer:
                "SEO increases your visibility on Google, helps you rank for design-related searches, and ensures clients find your services before competitors.",
              icon: React.createElement(IconSearch, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "Do I need local SEO as an interior designer?",
              answer:
                "Yes. Most clients look for designers within their city or region. Local SEO ensures you appear in Google Maps & nearby searches.",
              icon: React.createElement(IconHome, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "How long does it take to see results?",
              answer:
                "SEO results typically take 3–6 months, but the leads generated are organic, consistent, and long-term compared to paid ads.",
              icon: React.createElement(IconTrendingUp, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Rank Higher. Get More Clients.",
      headlineKeywords: ["Interior Design SEO", "Local SEO", "Content Marketing"],
      brandLine: [
        {
          text: "📈 More Visibility. More Leads. More Projects.",
          gradient: true,
          gradientClass: "from-orange-500 via-pink-500 to-red-600",
        },
      ],
      subheadline:
        "Our tailored SEO services help interior designers dominate Google rankings, attract homeowners & businesses, and grow a strong pipeline of design projects.",
      ctaButtons: [
        {
          icon: React.createElement(IconArrowRight, { size: 28 }),
          text: "Boost My SEO",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "Local Visibility",
          description: "Rank on top when clients search 'interior designers near me'.",
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "Organic Traffic",
          description: "Drive consistent inquiries without ad spending.",
        },
        {
          icon: React.createElement(IconChecklist, { size: 32 }),
          title: "Qualified Leads",
          description: "Get clients ready to book design consultations.",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Us for", gradient: false },
        { text: "Interior Design SEO?", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(IconDeviceDesktop, { size: 28 }),
          title: "Design Industry Keywords",
          description: "We optimize for terms that matter — home interiors, luxury design, modern renovation, and more.",
        },
        {
          icon: React.createElement(IconSearch, { size: 28 }),
          title: "Proven SEO Framework",
          description: "On-page + Local SEO + Content strategies designed to rank fast.",
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Long-Term Growth",
          description: "Unlike ads, SEO delivers compounding results with time.",
        },
      ],
      cta: {
        text: "Start My SEO Growth",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our SEO Process for Interior Designers",
      subtitle: "RESEARCH • OPTIMIZE • RANK",
      description:
        "We follow a step-by-step approach to boost visibility, attract clients, and build authority for your design business.",
      steps: [
        {
          id: 1,
          title: "SEO Audit",
          description: "Analyze your website’s current performance, rankings, and competitors.",
        },
        {
          id: 2,
          title: "Keyword Research",
          description: "Find profitable design-related keywords potential clients search for.",
        },
        {
          id: 3,
          title: "On-Page Optimization",
          description: "Optimize site structure, content, and meta-tags to improve rankings.",
        },
        {
          id: 4,
          title: "Local SEO",
          description: "Rank higher on Google Maps & local pack searches for your city.",
        },
        {
          id: 5,
          title: "Content & Backlinks",
          description: "Create blogs, case studies & earn authority backlinks to grow domain trust.",
        },
        {
          id: 6,
          title: "Reporting & Growth",
          description: "Track keyword improvements, organic traffic, and lead conversions monthly.",
        },
      ],
    },
    cta: {
      title: "Rank Higher & Win More Interior Projects",
      subtitle: "OPTIMIZE • RANK • GROW",
      description:
        "Stop losing clients to competitors who rank above you. Let’s optimize your website for SEO and secure your place at the top of Google.",
    },
  },
};
