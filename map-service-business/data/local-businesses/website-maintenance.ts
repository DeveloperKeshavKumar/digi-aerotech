import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  IconShieldCheck,
  IconRefresh,
  IconDeviceMobile,
  IconWorld,
  IconTrendingUp,
  IconDatabase,
  IconArrowRight,
  IconBug,
} from "@tabler/icons-react";

export const map: ServiceBusinessMap = {
  service: "website-maintenance",
  business: "local-business",
  variants: {
    hero: "variant1",
    whyChooseUs: "variant2",
    process: "variant3",
  },
  data: {
    slug: "website-maintenance-local-business",
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
            { text: "Why Local Business Websites", gradient: false },
            { text: "Fail Without Maintenance", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "Having a website is great—but if it’s outdated, slow, or unsecured, you’re losing customers and trust. Local businesses need reliable website maintenance to stay ahead.",
          painPoints: [
            "Broken links & outdated content drive customers away",
            "Slow-loading websites reduce sales & inquiries",
            "No backups means risk of data loss",
            "Security vulnerabilities expose customer data",
            "Google ranks poorly maintained websites lower",
          ],
          solutionPoints: [
            "Regular updates & content refresh",
            "Speed optimization for smooth performance",
            "Automated backups & data protection",
            "24/7 monitoring & quick issue resolution",
            "SEO maintenance for consistent Google ranking",
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Keep My Website Healthy",
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
              question: "Why do local businesses need website maintenance?",
              answer:
                "Websites need regular updates, security patches, and content refresh to remain fast, safe, and effective in converting visitors.",
              icon: React.createElement(IconRefresh, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "Can website maintenance improve my local SEO?",
              answer:
                "Yes. Fresh content, regular updates, and technical fixes ensure Google sees your website as active, which helps with local ranking.",
              icon: React.createElement(IconTrendingUp, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "What if my website gets hacked or crashes?",
              answer:
                "We set up monitoring, backups, and firewalls so your website can be restored quickly in case of hacks or server issues.",
              icon: React.createElement(IconShieldCheck, { size: 22 }),
            },
            {
              id: "faq-4",
              question: "Do you handle content & product updates?",
              answer:
                "Absolutely. From updating menus to changing offers or posting events, we keep your website relevant & up to date.",
              icon: React.createElement(IconWorld, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Maintain",
      headlineKeywords: ["Secure Websites", "Fast Performance", "Steady Growth"],
      brandLine: [
        {
          text: "🛠️ Website Maintenance for Local Businesses",
          gradient: true,
          gradientClass: "from-orange-500 via-pink-500 to-red-600",
        },
      ],
      subheadline:
        "Your website is the digital storefront of your business. We keep it fast, secure, updated, and optimized so you never lose customers.",
      ctaButtons: [
        {
          icon: React.createElement(IconArrowRight, { size: 28 }),
          text: "Protect My Website",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(IconBug, { size: 32 }),
          title: "70% Customers",
          description: "Leave outdated or buggy websites instantly.",
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 32 }),
          title: "99.9% Uptime",
          description: "With proactive monitoring & quick fixes.",
        },
        {
          icon: React.createElement(IconDatabase, { size: 32 }),
          title: "Automatic Backups",
          description: "Never lose your website or customer data.",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Us For", gradient: false },
        { text: "Website Maintenance?", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(IconRefresh, { size: 28 }),
          title: "Regular Updates",
          description: "We keep your plugins, themes, and content always fresh.",
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 28 }),
          title: "Full Security",
          description: "Firewall, malware scans, and SSL upkeep for safety.",
        },
        {
          icon: React.createElement(IconDeviceMobile, { size: 28 }),
          title: "Mobile & SEO Optimization",
          description: "Speed, responsiveness, and SEO maintained monthly.",
        },
      ],
      cta: {
        text: "Get Reliable Website Maintenance",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our Website Maintenance Process for Local Businesses",
      subtitle: "MONITOR • UPDATE • PROTECT • OPTIMIZE • SUPPORT",
      className: "border-t border-border dark:border-gray-700",
      description:
        "We ensure your local business website is always running at peak performance, secure from threats, and updated to convert more customers.",
      steps: [
        {
          id: 1,
          title: "Website Audit",
          description: "We analyze your website for issues, vulnerabilities, and outdated content before starting.",
        },
        {
          id: 2,
          title: "Security & Backup Setup",
          description: "We install firewalls, SSL, and automatic backup systems for safety.",
        },
        {
          id: 3,
          title: "Content & Design Updates",
          description: "Menus, offers, photos, events, and services are refreshed regularly to keep your site relevant.",
        },
        {
          id: 4,
          title: "Speed Optimization",
          description: "We enhance loading speed and mobile performance to reduce bounce rates.",
        },
        {
          id: 5,
          title: "SEO & Technical Fixes",
          description: "We maintain SEO health, fix errors, and ensure your site ranks locally.",
        },
        {
          id: 6,
          title: "Ongoing Monitoring",
          description: "Your website is monitored 24/7 for uptime, threats, and smooth customer experience.",
        },
      ],
    },
    cta: {
      title: "Keep Your Website Running Like New",
      subtitle: "UPDATE • SECURE • OPTIMIZE • GROW",
      description:
        "Don’t let an outdated or broken website cost you customers. Get professional website maintenance tailored for local businesses.",
    },
  },
};
