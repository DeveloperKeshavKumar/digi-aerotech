import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  IconHeartbeat,
  IconShieldCheck,
  IconRefresh,
  IconDatabaseCog,
  IconArrowRight,
  IconServerBolt,
  IconBug,
  IconBrowserCheck,
  IconBuildingHospital,
  IconActivityHeartbeat,
} from "@tabler/icons-react";

export const map: ServiceBusinessMap = {
  service: "website-maintenance",
  business: "pharma-companies",
  variants: {
    hero: "variant2",
    whyChooseUs: "variant3",
    process: "variant1",
  },
  data: {
    slug: "website-maintenance-pharma-companies",
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
            { text: "Need Website Maintenance", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "A pharma website isn’t just an online presence—it’s a trust-building platform for patients, doctors, and distributors. Regular maintenance ensures compliance, security, and smooth functionality.",
          painPoints: [
            "Website downtime affecting reputation & trust",
            "Outdated drug, research, or medical content",
            "Non-compliance with HIPAA/GDPR regulations",
            "Broken links, bugs, or poor user experience",
            "Security vulnerabilities risking sensitive data",
          ],
          solutionPoints: [
            "24/7 monitoring & uptime support",
            "Regular content, product, and medical updates",
            "Strict HIPAA/GDPR compliance maintenance",
            "Bug fixing & feature upgrades",
            "Advanced security patches & backups",
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Secure My Pharma Website",
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
              question: "Why is website maintenance critical for pharma companies?",
              answer:
                "Because downtime, outdated content, or non-compliance can damage patient trust and result in regulatory penalties.",
              icon: React.createElement(IconActivityHeartbeat, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "Do you provide 24/7 monitoring?",
              answer:
                "Yes, we ensure your pharma website is monitored, secure, and operational round the clock.",
              icon: React.createElement(IconServerBolt, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "Can you update medical products & research regularly?",
              answer:
                "Absolutely. We handle real-time updates for drug information, research papers, and regulatory news.",
              icon: React.createElement(IconDatabaseCog, { size: 22 }),
            },
            {
              id: "faq-4",
              question: "Will my pharma website remain compliant?",
              answer:
                "Yes. We apply continuous HIPAA/GDPR checks and updates to ensure full compliance with regulations.",
              icon: React.createElement(IconShieldCheck, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Maintain",
      headlineKeywords: ["Pharma Websites", "Secure Platforms", "Compliance-Ready"],
      brandLine: [
        {
          text: "🛡️ Reliable Website Maintenance for Pharma Companies",
          gradient: true,
          gradientClass: "from-orange-500 via-pink-500 to-red-600",
        },
      ],
      subheadline:
        "We provide 24/7 website monitoring, security updates, and compliance checks to keep your pharma website reliable and trustworthy.",
      ctaButtons: [
        {
          icon: React.createElement(IconArrowRight, { size: 28 }),
          text: "Get Pharma Website Maintenance",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(IconHeartbeat, { size: 32 }),
          title: "99.9% Uptime",
          description: "Reliable site availability for patients & doctors",
        },
        {
          icon: React.createElement(IconBug, { size: 32 }),
          title: "Bug-Free Performance",
          description: "Regular updates & error fixing",
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 32 }),
          title: "Secure & Compliant",
          description: "HIPAA & GDPR checks in every update",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Us for", gradient: false },
        { text: "Pharma Website Maintenance?", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(IconRefresh, { size: 28 }),
          title: "Regular Updates",
          description: "We keep your pharma content & data fresh and accurate.",
        },
        {
          icon: React.createElement(IconBrowserCheck, { size: 28 }),
          title: "Compliance Guaranteed",
          description: "Your site stays aligned with HIPAA & GDPR standards.",
        },
        {
          icon: React.createElement(IconServerBolt, { size: 28 }),
          title: "24/7 Monitoring",
          description: "We ensure constant uptime, security, and backups.",
        },
      ],
      cta: {
        text: "Keep My Pharma Website Secure",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our Pharma Website Maintenance Process",
      subtitle: "SECURE • COMPLIANT • ALWAYS ONLINE",
      className: "border-t border-border dark:border-gray-700",
      description:
        "We follow a proactive, structured maintenance approach to keep your pharma website secure, fast, and compliant.",
      steps: [
        {
          id: 1,
          title: "Site Audit & Monitoring Setup",
          description: "We set up 24/7 monitoring tools, identify vulnerabilities, and track uptime performance.",
        },
        {
          id: 2,
          title: "Security Patches & Compliance Checks",
          description: "HIPAA, GDPR, and pharma marketing compliance applied in every update.",
        },
        {
          id: 3,
          title: "Content & Product Updates",
          description: "We update drugs, research, and announcements to keep information fresh & accurate.",
        },
        {
          id: 4,
          title: "Performance Optimization",
          description: "We speed up your site, fix bugs, and ensure smooth user experience across all devices.",
        },
        {
          id: 5,
          title: "Backup & Recovery",
          description: "Automated daily backups with quick disaster recovery solutions.",
        },
        {
          id: 6,
          title: "Reporting & Support",
          description: "We provide monthly reports on uptime, security, SEO performance, and maintenance activities.",
        },
      ],
    },
    cta: {
      title: "Keep Your Pharma Website Running 24/7",
      subtitle: "SECURE • COMPLIANT • MAINTAINED",
      description:
        "Partner with us for professional pharma website maintenance that ensures compliance, builds trust, and prevents costly downtime.",
    },
  },
};
