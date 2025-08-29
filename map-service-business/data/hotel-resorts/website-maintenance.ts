import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  IconDeviceLaptop,
  IconSettings,
  IconCode,
  IconUsers,
  IconTrendingUp,
  IconShieldCheck,
  IconStar,
  IconArrowRight,
} from "@tabler/icons-react";

export const map: ServiceBusinessMap = {
  service: "web-design-development",
  business: "hotel-resort",
  variants: {
    hero: "variant1",
    whyChooseUs: "variant2",
    process: "variant3",
    testimonials: "variant1",
  },
  data: {
    slug: "web-design-development-maintenance-hotel-resort",
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
            { text: "Challenges Hotels & Resorts Face with", gradient: false },
            { text: "Web Presence & Maintenance", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "Many hotels and resorts struggle with outdated websites, poor user experience, slow loading speeds, and lack of ongoing maintenance, resulting in lost bookings and lower brand trust.",
          painPoints: [
            "Outdated design that doesn’t convert visitors",
            "Slow website speed affecting bookings",
            "Lack of mobile responsiveness",
            "Inefficient CMS and content management",
            "Security vulnerabilities and downtime",
          ],
          solutionPoints: [
            "Modern, conversion-focused web design tailored to hospitality",
            "Mobile-friendly, responsive websites for all devices",
            "Optimized booking systems and UX for higher reservations",
            "Regular website maintenance and updates for smooth operation",
            "Security monitoring and fast-loading pages to protect guests’ data",
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Enhance Your Hotel’s Web Experience",
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
              question: "Can a new website increase bookings?",
              answer:
                "Yes! A modern, fast, and mobile-friendly website improves user experience, builds trust, and significantly boosts online reservations.",
              icon: React.createElement(IconTrendingUp, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "Do you handle ongoing website maintenance?",
              answer:
                "Absolutely. We provide regular updates, backups, security checks, and performance optimization to ensure your website runs flawlessly.",
              icon: React.createElement(IconSettings, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "Will the website be optimized for mobile devices?",
              answer:
                "Yes. All our websites are fully responsive, ensuring smooth user experience on smartphones, tablets, and desktops.",
              icon: React.createElement(IconDeviceLaptop, { size: 22 }),
            },
            {
              id: "faq-4",
              question: "Do you provide SEO-friendly websites?",
              answer:
                "Every website is designed with SEO best practices, fast loading speed, and structured data to rank higher in search engines.",
              icon: React.createElement(IconShieldCheck, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Stunning Websites & Seamless Maintenance for",
      headlineKeywords: [
        "Hotels & Resorts",
        "Luxury Hospitality Websites",
        "Booking-Optimized Web Design",
        "Mobile-Responsive Resort Sites",
        "Secure & Fast Hotel Websites",
      ],
      brandLine: [
        {
          text: "💻 Elevate Your Hotel & Resort’s Online Presence with Expert Web Design & Maintenance",
          gradient: true,
          gradientClass: "from-orange-500 via-pink-500 to-red-600",
        },
      ],
      subheadline:
        "We craft visually appealing, fast, and secure websites for hotels and resorts, while providing continuous maintenance to maximize bookings and guest trust.",
      ctaButtons: [
        {
          icon: React.createElement(IconCode, { size: 28 }),
          text: "Get Free Website Audit",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "500+ Hotels Served",
          description: "Web solutions optimized for hospitality",
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "3X More Online Bookings",
          description: "Conversion-focused design & UX",
        },
        {
          icon: React.createElement(IconStar, { size: 32 }),
          title: "4.9/5 Guest Satisfaction",
          description: "Smooth booking experiences for visitors",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Hotels & Resorts Choose Us for", gradient: false },
        { text: "Web Design & Maintenance", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(IconDeviceLaptop, { size: 28 }),
          title: "Modern & Conversion-Optimized Design",
          description: "Websites built to increase engagement and online bookings.",
        },
        {
          icon: React.createElement(IconSettings, { size: 28 }),
          title: "Reliable Maintenance & Security",
          description: "Regular updates, backups, and security monitoring for uninterrupted operations.",
        },
        {
          icon: React.createElement(IconCode, { size: 28 }),
          title: "SEO-Friendly & Mobile Responsive",
          description: "Optimized websites for Google rankings and seamless mobile browsing.",
        },
      ],
      cta: {
        text: "Upgrade Your Hotel Website Today",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our Web Design & Maintenance Process for Hotels & Resorts",
      subtitle: "PLAN • DESIGN • DEVELOP • MAINTAIN",
      description:
        "From initial research to long-term maintenance, we ensure your hotel or resort website drives bookings, engages visitors, and reflects your brand perfectly.",
      steps: [
        {
          id: 1,
          title: "Research & Strategy",
          description: "Understand your target audience, competitors, and brand positioning for a tailored web solution.",
        },
        {
          id: 2,
          title: "Design & UX Planning",
          description: "Craft visually stunning layouts and intuitive navigation to maximize user engagement and conversion.",
        },
        {
          id: 3,
          title: "Development & Integration",
          description: "Build fast, responsive, and secure websites integrated with booking engines, CMS, and analytics tools.",
        },
        {
          id: 4,
          title: "SEO & Performance Optimization",
          description: "Ensure fast loading speeds, mobile optimization, structured data, and on-page SEO for higher search visibility.",
        },
        {
          id: 5,
          title: "Launch & Testing",
          description: "Thorough testing across devices, browsers, and user scenarios to guarantee smooth launch.",
        },
        {
          id: 6,
          title: "Ongoing Maintenance & Support",
          description: "Regular updates, backups, security patches, and performance monitoring to ensure uninterrupted website operation.",
        },
      ],
    },
    testimonials: {
      title: [
        { text: "Hotels & Resorts Who ", gradient: false },
        { text: "Loved Our Web Services", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      description:
        "Hear from hotel and resort owners who transformed their online presence and boosted bookings with our web design and maintenance services.",
      testimonials: [
        {
          id: "1",
          message:
            "Our resort’s website now loads instantly, looks stunning on mobile, and our bookings have doubled! The maintenance support is top-notch.",
          highlight: "bookings have doubled",
          stars: 5,
          name: "Anjali Mehta",
          designation: "Manager",
          company: "SeaView Resort",
        },
        {
          id: "2",
          message:
            "They redesigned our hotel website with a modern look, integrated our booking system flawlessly, and handle all updates seamlessly.",
          highlight: "modern look & seamless updates",
          stars: 5,
          name: "Rohit Kapoor",
          designation: "Owner",
          company: "MountainTop Hotel",
        },
      ],
    },
    cta: {
      title: "Get a High-Converting Hotel & Resort Website Today",
      subtitle: "MODERN DESIGN • MOBILE OPTIMIZED • SECURE & MAINTAINED",
      description:
        "Schedule a free consultation with our web experts to enhance your online presence, boost bookings, and ensure your website always performs flawlessly.",
    },
  },
};
