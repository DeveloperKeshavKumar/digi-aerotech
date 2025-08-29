import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  IconLayout,
  IconBrush,
  IconTools,
  IconHome,
  IconPalette,
  IconWorld,
  IconUsers,
  IconTrendingUp,
  IconArrowRight,
  IconDeviceDesktop,
  IconShieldCheck,
} from "@tabler/icons-react";

export const map: ServiceBusinessMap = {
  service: "web-design-development-maintenance",
  business: "interior-designers",
  variants: {
    hero: "variant2",
    whyChooseUs: "variant3",
    process: "variant1",
    testimonials: "variant2",
  },
  data: {
    slug: "web-design-development-maintenance-interior-designers",
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
            { text: "Need Web Design & Maintenance", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "In today’s competitive design industry, a stunning and functional website is not optional – it’s essential. Interior designers must showcase their work in a way that attracts, inspires, and converts visitors into clients.",
          painPoints: [
            "Outdated websites failing to showcase design expertise",
            "Slow-loading pages driving potential clients away",
            "No proper portfolio presentation",
            "Security issues or broken links damaging credibility",
            "Lack of regular updates and technical support",
          ],
          solutionPoints: [
            "Modern, mobile-friendly websites that impress at first glance",
            "Beautifully designed portfolio sections to showcase your projects",
            "SEO-optimized layouts for more visibility on Google",
            "Ongoing website maintenance to keep everything smooth & secure",
            "Custom features like booking forms, 3D design galleries, and blogs",
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Get My Website Upgraded",
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
              question: "Why do interior designers need a professional website?",
              answer:
                "Your website is your digital showroom. A professional, visually appealing, and functional website helps build trust and showcase your design expertise to potential clients.",
              icon: React.createElement(IconLayout, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "What’s included in your website maintenance service?",
              answer:
                "We handle security updates, backups, speed optimization, bug fixes, and ongoing support to ensure your website runs smoothly all the time.",
              icon: React.createElement(IconShieldCheck, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "Can you redesign my existing website?",
              answer:
                "Absolutely. We specialize in revamping old websites into modern, visually stunning platforms that truly reflect your brand.",
              icon: React.createElement(IconBrush, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Showcase Your Designs Online",
      headlineKeywords: ["Web Design", "Development", "Maintenance"],
      brandLine: [
        {
          text: "✨ A Website That Matches Your Interior Design Aesthetics",
          gradient: true,
          gradientClass: "from-orange-500 via-pink-500 to-red-600",
        },
      ],
      subheadline:
        "We build and maintain visually stunning, fast, and SEO-optimized websites for interior designers to showcase portfolios, attract clients, and keep their digital presence strong.",
      ctaButtons: [
        {
          icon: React.createElement(IconArrowRight, { size: 28 }),
          text: "Build My Interior Design Website",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(IconDeviceDesktop, { size: 32 }),
          title: "Custom Design",
          description: "Websites tailored to reflect your unique design style.",
        },
        {
          icon: React.createElement(IconWorld, { size: 32 }),
          title: "SEO Optimized",
          description: "Rank higher on Google and attract local clients easily.",
        },
        {
          icon: React.createElement(IconTools, { size: 32 }),
          title: "Maintenance & Support",
          description: "Regular updates & fixes to keep your site running flawlessly.",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Us for", gradient: false },
        { text: "Interior Design Websites", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(IconBrush, { size: 28 }),
          title: "Design That Inspires",
          description: "We create visually stunning websites that showcase your creativity and portfolio.",
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "Client-Focused Features",
          description: "From booking forms to blogs, we add features that help you get more clients.",
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 28 }),
          title: "Secure & Reliable",
          description: "With regular maintenance, we ensure your site stays safe, fast, and up-to-date.",
        },
      ],
      cta: {
        text: "Upgrade My Website Today",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our Web Design & Maintenance Process",
      subtitle: "BUILD • SHOWCASE • MAINTAIN",
      description:
        "We design, develop, and maintain websites for interior designers with a focus on aesthetics, performance, and client conversion.",
      steps: [
        {
          id: 1,
          title: "Consultation & Strategy",
          description: "We understand your brand, style, and business goals to plan a website strategy.",
        },
        {
          id: 2,
          title: "Custom Design & Development",
          description: "We design and develop a stunning, mobile-friendly website that showcases your portfolio beautifully.",
        },
        {
          id: 3,
          title: "SEO Optimization",
          description: "We structure your website for Google ranking to attract homeowners & businesses searching for interior design services.",
        },
        {
          id: 4,
          title: "Launch & Training",
          description: "Your new website goes live, and we train you to manage content easily if needed.",
        },
        {
          id: 5,
          title: "Ongoing Maintenance",
          description: "We handle updates, security, backups, and bug fixes to keep your website running smoothly.",
        },
        {
          id: 6,
          title: "Performance Monitoring",
          description: "We provide regular reports on traffic, performance, and improvements for long-term growth.",
        },
      ],
    },
    testimonials: {
      title: [
        { text: "Interior Designers Who", gradient: false },
        { text: "Upgraded Their Websites", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      description:
        "From stunning portfolio websites to ongoing maintenance, we’ve helped interior designers build their online presence and attract more clients.",
      testimonials: [
        {
          id: "1",
          message:
            "Our website redesign transformed our online presence. Clients love browsing our portfolio, and inquiries have doubled!",
          highlight: "Website Redesign",
          stars: 5,
          name: "Ritu Sharma",
          designation: "Founder",
          company: "Elegant Spaces Studio",
        },
        {
          id: "2",
          message:
            "They don’t just build websites, they maintain them too. I can focus on design projects while my website runs perfectly.",
          highlight: "Maintenance & Support",
          stars: 5,
          name: "Arjun Mehta",
          designation: "Creative Head",
          company: "Urban Nest Interiors",
        },
      ],
    },
    cta: {
      title: "Your Website is Your Digital Showroom",
      subtitle: "DESIGN • DEVELOP • MAINTAIN",
      description:
        "Don’t let an outdated or broken website hold your interior design business back. Let us build and maintain a stunning platform that attracts clients and grows your brand.",
    },
  },
};
