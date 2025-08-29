import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  IconMedicineSyrup,
  IconHeartbeat,
  IconVaccine,
  IconBrowserCheck,
  IconServerBolt,
  IconUsers,
  IconArrowRight,
  IconShieldCheck,
  IconStethoscope,
  IconBuildingHospital,
  IconDeviceDesktop,
} from "@tabler/icons-react";

export const map: ServiceBusinessMap = {
  service: "web-design-development",
  business: "pharma-companies",
  variants: {
    hero: "variant1",
    whyChooseUs: "variant2",
    process: "variant3",
    testimonials: "variant1",
  },
  data: {
    slug: "web-design-development-pharma-companies",
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
            { text: "Why Pharma Companies", gradient: false },
            { text: "Need Professional Websites", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "A pharma website is not just about online presence – it’s about trust, compliance, patient education, and lead generation. A professionally designed website helps your pharma business stand out in a regulated industry.",
          painPoints: [
            "Outdated websites that fail to build trust",
            "Lack of HIPAA/GDPR compliance risking penalties",
            "No dedicated sections for doctors & patients",
            "Difficult navigation across complex medical data",
            "Low visibility on search engines & digital platforms",
          ],
          solutionPoints: [
            "Modern, mobile-responsive pharma websites",
            "Secure, compliant platforms for patient data",
            "Doctor & patient-focused portals for easy access",
            "SEO-friendly structure with pharma keywords",
            "Engaging UI/UX to increase trust & conversions",
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Get Your Pharma Website",
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
              question: "Why do pharma companies need specialized websites?",
              answer:
                "Because pharma requires compliance, patient trust, and professional design to meet industry standards while building authority online.",
              icon: React.createElement(IconStethoscope, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "Do you ensure compliance in pharma websites?",
              answer:
                "Yes, we follow HIPAA, GDPR, and pharma marketing regulations to create safe, secure, and compliant websites.",
              icon: React.createElement(IconShieldCheck, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "Can you design websites for pharma startups and large enterprises?",
              answer:
                "Absolutely. From pharma startups to multinational corporations, we build scalable, custom web solutions.",
              icon: React.createElement(IconBuildingHospital, { size: 22 }),
            },
            {
              id: "faq-4",
              question: "Will my pharma website be SEO-friendly?",
              answer:
                "Yes, every website is built with SEO best practices and optimized for pharma-related keywords to rank higher.",
              icon: React.createElement(IconBrowserCheck, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Build",
      headlineKeywords: ["Pharma Websites", "Medical Web Development", "Healthcare Portals"],
      brandLine: [
        {
          text: "💻 Professional, Secure & SEO-Optimized Websites for Pharma Companies",
          gradient: true,
          gradientClass: "from-orange-500 via-pink-500 to-red-600",
        },
      ],
      subheadline:
        "We design & develop pharma websites that comply with regulations, build patient trust, and generate quality leads for your business.",
      ctaButtons: [
        {
          icon: React.createElement(IconArrowRight, { size: 28 }),
          text: "Get Pharma Web Design",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(IconMedicineSyrup, { size: 32 }),
          title: "Compliance-Ready",
          description: "HIPAA & GDPR secure websites",
        },
        {
          icon: React.createElement(IconDeviceDesktop, { size: 32 }),
          title: "Modern UI/UX",
          description: "User-friendly medical web design",
        },
        {
          icon: React.createElement(IconVaccine, { size: 32 }),
          title: "SEO-Optimized",
          description: "Rank for pharma keywords",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Us for", gradient: false },
        { text: "Pharma Website Development?", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(IconServerBolt, { size: 28 }),
          title: "Secure Platforms",
          description: "We develop HIPAA & GDPR compliant pharma websites.",
        },
        {
          icon: React.createElement(IconHeartbeat, { size: 28 }),
          title: "Healthcare-Focused Design",
          description: "We create portals for patients, doctors, and distributors.",
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "Conversion-Oriented",
          description: "We design for trust, engagement, and lead generation.",
        },
      ],
      cta: {
        text: "Get a Pharma Website Today",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our Pharma Web Design & Development Process",
      subtitle: "SECURE • COMPLIANT • TRUST-BUILDING",
      className: "border-t border-border dark:border-gray-700",
      description:
        "From compliance to conversions, we design pharma websites that engage patients, attract doctors, and meet strict regulations.",
      steps: [
        {
          id: 1,
          title: "Requirement Analysis",
          description: "We study your pharma business model, compliance needs, and audience to build a strategic blueprint.",
        },
        {
          id: 2,
          title: "Wireframe & Design",
          description: "User-friendly layouts with modern, trust-focused designs tailored for pharma companies.",
        },
        {
          id: 3,
          title: "Development & Compliance",
          description: "We code secure websites with HIPAA, GDPR, and medical advertising compliance built-in.",
        },
        {
          id: 4,
          title: "Content & SEO Setup",
          description: "We add pharma-focused content, optimize keywords, and structure pages for better ranking.",
        },
        {
          id: 5,
          title: "Testing & Launch",
          description: "Rigorous QA testing for performance, security, and compliance before go-live.",
        },
        {
          id: 6,
          title: "Ongoing Support",
          description: "We provide maintenance, security, and SEO support to keep your pharma site thriving.",
        },
      ],
    },
    testimonials: {
      title: [
        { text: "Pharma Companies", gradient: false },
        { text: "Who Trust Our Websites", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      description:
        "Our pharma websites have helped companies boost trust, stay compliant, and achieve higher lead generation with SEO-friendly design.",
      testimonials: [
        {
          id: "1",
          message:
            "Our pharma site redesign boosted inquiries by 150% while ensuring HIPAA compliance. Excellent work!",
          highlight: "150% More Leads",
          stars: 5,
          name: "Anil Sharma",
          designation: "CEO",
          company: "MedCare Labs",
        },
        {
          id: "2",
          message:
            "They built a secure and professional website that positioned us as a trusted pharma brand online.",
          highlight: "Trusted Branding",
          stars: 5,
          name: "Dr. Priya Nair",
          designation: "Director",
          company: "BioTrust Pharma",
        },
      ],
    },
    cta: {
      title: "Let’s Build Your Pharma Website",
      subtitle: "SECURE • COMPLIANT • LEAD-GENERATING",
      description:
        "Get a professional, SEO-optimized, and compliance-friendly website that positions your pharma brand as a trusted leader.",
    },
  },
};
