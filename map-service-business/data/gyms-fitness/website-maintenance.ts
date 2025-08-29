import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  Monitor,
  Code,
  Settings,
  RefreshCcw,
  BarChart,
  Users,
  ArrowRight,
  Layout,
  Activity,
} from "lucide-react";

export const map: ServiceBusinessMap = {
  service: "web-design-development",
  business: "gyms-fitness",
  variants: {
    hero: "variant2",
    whyChooseUs: "variant3",
    process: "variant1",
    testimonials: "variant2",
  },
  data: {
    slug: "web-design-development-gyms-fitness",
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
            { text: "Is Your Gym Website Failing to Convert?", gradient: false },
            { text: "Attract Members with Modern, Responsive Design", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "Many gyms lose potential members due to outdated websites, slow loading, or poor user experience. A modern site is critical to converting visitors into members.",
          painPoints: [
            "Outdated or unresponsive website",
            "Low lead capture and booking conversion",
            "Poor UX causing visitors to leave",
            "No mobile-optimized experience",
            "Difficulty integrating class schedules or memberships",
          ],
          solutionPoints: [
            "Responsive, mobile-first website design for all devices",
            "Conversion-focused layouts with lead forms and booking buttons",
            "Optimized speed and performance for quick load times",
            "Custom gym features like class schedules, memberships & virtual tours",
            "Ongoing maintenance to keep your site secure and up-to-date",
          ],
          cta: {
            icon: React.createElement(ArrowRight, { size: 20 }),
            text: "Upgrade Your Gym Website Today",
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
              question: "Will my gym website work on mobile devices?",
              answer: "Yes. All our websites are fully responsive and optimized for mobile, tablet, and desktop users.",
              icon: React.createElement(Monitor, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "Do you offer website maintenance services?",
              answer: "Absolutely. We provide regular updates, security checks, content management, and performance optimizations.",
              icon: React.createElement(Settings, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "Can you integrate booking systems and class schedules?",
              answer: "Yes. We implement seamless integrations for memberships, class schedules, online payments, and appointment bookings.",
              icon: React.createElement(Code, { size: 22 }),
            },
            {
              id: "faq-4",
              question: "How fast will my website load?",
              answer: "Our websites are optimized for speed, using caching, optimized images, and modern code to ensure lightning-fast load times.",
              icon: React.createElement(RefreshCcw, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Need a High-Converting Gym Website?",
      headlineKeywords: [
        "Responsive Design",
        "Custom Gym Features",
        "Fast Loading & Secure",
        "Conversion-Optimized Layouts",
      ],
      brandLine: [
        { text: "💪 Elevate Your Gym’s Online Presence with Expert Web Design & Maintenance", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      subheadline:
        "We build and maintain websites for gyms & fitness studios that attract visitors, convert leads, and enhance brand authority online.",
      ctaButtons: [
        {
          icon: React.createElement(Layout, { size: 28 }),
          text: "Book Free Website Consultation",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(Users, { size: 32 }),
          title: "3X Leads",
          description: "Increased inquiries via optimized website design",
        },
        {
          icon: React.createElement(BarChart, { size: 32 }),
          title: "5X Engagement",
          description: "More visitors interact with your classes, membership, and services",
        },
        {
          icon: React.createElement(Activity, { size: 32 }),
          title: "100% Mobile-Friendly",
          description: "Seamless experience across devices, boosting conversion",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Our Web Design & Maintenance for Gyms?", gradient: false },
        { text: "Modern, Fast, & Conversion-Optimized", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(Monitor, { size: 28 }),
          title: "Responsive Design",
          description: "Websites that look great on any device, providing the best UX.",
        },
        {
          icon: React.createElement(Code, { size: 28 }),
          title: "Custom Gym Features",
          description: "Integrations for class schedules, memberships, bookings, and online payments.",
        },
        {
          icon: React.createElement(Settings, { size: 28 }),
          title: "Continuous Maintenance",
          description: "Regular updates, security monitoring, backups, and performance optimization.",
        },
      ],
      cta: {
        text: "Upgrade Your Gym Website Now",
        link: "#contact",
        icon: React.createElement(ArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our Web Design, Development & Maintenance Process",
      subtitle: "PLAN • DESIGN • DEVELOP • OPTIMIZE • MAINTAIN",
      description:
        "From initial strategy to ongoing website care, our process ensures your gym website consistently converts visitors into members.",
      steps: [
        {
          id: 1,
          title: "Discovery & Strategy",
          description: "Understand your gym goals, target audience, and competitors to plan a website that converts.",
        },
        {
          id: 2,
          title: "Design & UX",
          description: "Create visually appealing, intuitive designs that highlight your classes, trainers, and membership offers.",
        },
        {
          id: 3,
          title: "Development & Integrations",
          description: "Build fast, responsive websites with booking systems, payments, and interactive features.",
        },
        {
          id: 4,
          title: "SEO & Performance Optimization",
          description: "Ensure your website ranks on Google, loads quickly, and delivers a seamless experience.",
        },
        {
          id: 5,
          title: "Ongoing Maintenance & Updates",
          description: "Regularly update content, plugins, security patches, and performance enhancements for consistent results.",
        },
      ],
    },
    testimonials: {
      title: [
        { text: "Gyms Who ", gradient: false },
        { text: "Transformed Their Online Presence", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      description:
        "See how our web design and maintenance strategies helped gyms attract more members, streamline bookings, and enhance their brand online.",
      testimonials: [
        {
          id: "1",
          message: "Our new website is visually stunning and converts more visitors into members than ever before!",
          highlight: "converts more visitors",
          stars: 5,
          name: "Rahul Mehta",
          designation: "Owner",
          company: "PowerGym Fitness",
        },
        {
          id: "2",
          message: "The ongoing maintenance ensures our site is always fast, secure, and up-to-date.",
          highlight: "fast, secure, and up-to-date",
          stars: 5,
          name: "Sneha Kapoor",
          designation: "Founder",
          company: "FitZone Studio",
        },
      ],
    },
    cta: {
      title: "Ready to Upgrade Your Gym Website & Maintenance?",
      subtitle: "ATTRACT • ENGAGE • CONVERT • RETAIN",
      description:
        "Book a free consultation today and let our experts build and maintain a gym website that drives memberships and strengthens your brand online.",
    },
  },
};
