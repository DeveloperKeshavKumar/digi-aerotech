import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  IconSearch,
  IconMicroscope,
  IconHeartbeat,
  IconArrowRight,
  IconChartLine,
  IconCheckupList,
  IconBuildingHospital,
  IconUsers,
} from "@tabler/icons-react";

export const map: ServiceBusinessMap = {
  service: "seo-services",
  business: "pharma-companies",
  variants: {
    hero: "variant1",
    whyChooseUs: "variant2",
    process: "variant3",
  },
  data: {
    slug: "seo-services-pharma-companies",
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
            { text: "Why Pharma Brands", gradient: false },
            { text: "Need SEO Services", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "In an industry where trust, compliance, and visibility matter most, SEO is the key to ensuring your pharma company is discovered by patients, doctors, hospitals, and distributors.",
          painPoints: [
            "Paid ads deliver short-term results, but organic traffic builds long-term trust",
            "Pharma websites often struggle with complex regulations in content marketing",
            "Competition from large pharma giants makes ranking difficult",
            "Lack of local visibility for pharmacies & distributors",
            "Patients searching online often find competitors first",
          ],
          solutionPoints: [
            "Comprehensive keyword research for medical, pharma & healthcare queries",
            "On-page SEO optimization for compliance-friendly pharma websites",
            "Content marketing (blogs, FAQs, medical resources) that rank & build authority",
            "Local SEO for pharmacies & regional distributors",
            "High-quality backlinks from medical, pharma, and healthcare directories",
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Boost Pharma SEO Now",
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
              question: "Why is SEO important for pharma companies?",
              answer:
                "SEO builds trust, boosts visibility, and helps patients, doctors, and hospitals discover your brand organically instead of relying only on paid ads.",
              icon: React.createElement(IconSearch, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "How do we ensure pharma SEO compliance?",
              answer:
                "We craft content aligned with pharma advertising regulations while optimizing technical SEO and on-page strategies.",
              icon: React.createElement(IconMicroscope, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "Can SEO generate pharma leads?",
              answer:
                "Yes. With targeted keywords, content marketing, and local optimization, SEO drives qualified patient inquiries, doctor connections, and B2B distributor leads.",
              icon: React.createElement(IconUsers, { size: 22 }),
            },
            {
              id: "faq-4",
              question: "How long does pharma SEO take?",
              answer:
                "SEO is long-term, but clients see significant ranking and traffic improvements within 3-6 months, with compounding ROI over time.",
              icon: React.createElement(IconChartLine, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Rank",
      headlineKeywords: ["Pharma SEO Services", "Medical SEO", "Healthcare Visibility"],
      brandLine: [
        {
          text: "🚀 Boost Your Pharma Brand’s Online Authority with SEO that Drives Patients, Doctors & Distributors to You",
          gradient: true,
          gradientClass: "from-orange-500 via-pink-500 to-red-600",
        },
      ],
      subheadline:
        "We specialize in pharma SEO strategies that build trust, boost rankings, and generate consistent patient, doctor, and B2B distributor leads.",
      ctaButtons: [
        {
          icon: React.createElement(IconArrowRight, { size: 28 }),
          text: "Start Pharma SEO Today",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(IconCheckupList, { size: 32 }),
          title: "Compliance-First SEO",
          description: "Regulation-friendly content strategies",
        },
        {
          icon: React.createElement(IconBuildingHospital, { size: 32 }),
          title: "Local Visibility",
          description: "SEO for pharmacies & distributors",
        },
        {
          icon: React.createElement(IconChartLine, { size: 32 }),
          title: "Long-Term ROI",
          description: "Sustainable organic growth",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Us for", gradient: false },
        { text: "Pharma SEO?", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(IconMicroscope, { size: 28 }),
          title: "Pharma-Specific Expertise",
          description: "We understand pharma regulations & optimize content for compliance and trust.",
        },
        {
          icon: React.createElement(IconHeartbeat, { size: 28 }),
          title: "Patient-Centric Approach",
          description: "We target patient, doctor, and healthcare queries for higher visibility.",
        },
        {
          icon: React.createElement(IconChartLine, { size: 28 }),
          title: "Proven SEO Growth",
          description: "Our pharma clients rank higher on Google and generate more organic leads.",
        },
      ],
      cta: {
        text: "Rank Higher with SEO",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our SEO Process for Pharma Companies",
      subtitle: "TRUST. VISIBILITY. LEADS.",
      className: "border-t border-border dark:border-gray-700",
      description:
        "We build a strong SEO foundation for pharma companies by combining compliance-friendly content, technical SEO, and authority building.",
      steps: [
        {
          id: 1,
          title: "Keyword Research",
          description: "We identify high-intent medical, healthcare, and pharma-specific keywords with lead potential.",
        },
        {
          id: 2,
          title: "On-Page Optimization",
          description: "Meta tags, schema, content optimization, and site architecture improvements for SEO success.",
        },
        {
          id: 3,
          title: "Content Marketing",
          description: "Educational blogs, FAQs, and pharma resources that rank & build trust with patients and professionals.",
        },
        {
          id: 4,
          title: "Local SEO",
          description: "Optimizing pharma distributors, pharmacy locations, and hospital listings for better local reach.",
        },
        {
          id: 5,
          title: "Backlink Building",
          description: "Building authority through backlinks from healthcare journals, directories, and trusted sites.",
        },
        {
          id: 6,
          title: "Analytics & Reporting",
          description: "We track rankings, traffic, and lead conversions to measure SEO ROI for pharma businesses.",
        },
      ],
    },
    cta: {
      title: "Boost Your Pharma SEO",
      subtitle: "TRUST • VISIBILITY • LEADS",
      description:
        "Let us help your pharma company rank higher on Google, attract more patients, doctors, and distributors, and build long-term trust with SEO.",
    },
  },
};
