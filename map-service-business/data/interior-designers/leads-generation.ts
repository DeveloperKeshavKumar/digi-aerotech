import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  IconHome,
  IconRulerMeasure,
  IconUsers,
  IconBuildingSkyscraper,
  IconCalendarEvent,
  IconPhoneCall,
  IconTarget,
  IconArrowRight,
  IconTrendingUp,
  IconStar,
} from "@tabler/icons-react";

export const map: ServiceBusinessMap = {
  service: "leads-generation",
  business: "interior-designers",
  variants: {
    hero: "variant2",
    whyChooseUs: "variant1",
    process: "variant3",
    testimonials: "variant2",
  },
  data: {
    slug: "leads-generation-interior-designers",
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
            { text: "Interior Designers Need", gradient: false },
            { text: "Consistent Leads", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "Relying only on referrals or offline marketing is risky. Without a strong lead generation system, interior designers lose projects to competitors who show up first.",
          painPoints: [
            "No regular client inquiries coming in",
            "Too dependent on referrals & word-of-mouth",
            "Losing luxury projects to competitors",
            "Inconsistent pipeline of leads and projects",
            "Wasting time on low-quality prospects",
          ],
          solutionPoints: [
            "Get daily qualified inquiries from homeowners & businesses",
            "Reach premium clients searching for design projects",
            "Filter out low-value prospects with targeted campaigns",
            "Build a consistent sales pipeline",
            "Boost revenue with high-ticket project leads",
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Get More Client Leads",
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
              question: "How do you generate leads for interior designers?",
              answer:
                "We use a mix of Google Ads, Meta Ads, SEO, and landing pages designed to capture homeowners, offices, and commercial property clients looking for interior services.",
              icon: React.createElement(IconTarget, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "Will the leads be high-quality?",
              answer:
                "Yes. We qualify leads using targeted ads, location filters, and optimized landing pages so you only get serious inquiries.",
              icon: React.createElement(IconUsers, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "Can you bring luxury project leads?",
              answer:
                "Absolutely. Our campaigns are designed to attract premium clients who are actively searching for high-end design services.",
              icon: React.createElement(IconStar, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "High-Value Inquiries",
      headlineKeywords: ["Leads Generation", "Interior Designers", "Premium Projects"],
      brandLine: [
        {
          text: "🎯 Consistent Leads for Interior Designers & Studios",
          gradient: true,
          gradientClass: "from-orange-500 via-pink-500 to-red-600",
        },
      ],
      subheadline:
        "We generate qualified leads for interior designers by targeting homeowners, corporates, and businesses actively looking for design services. Get more inquiries, book consultations, and close premium projects.",
      ctaButtons: [
        {
          icon: React.createElement(IconArrowRight, { size: 28 }),
          text: "Start Getting Leads",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "10X Leads",
          description: "Interior designers see up to 10x more client inquiries.",
        },
        {
          icon: React.createElement(IconBuildingSkyscraper, { size: 32 }),
          title: "Qualified Clients",
          description: "Get leads that convert into real high-ticket projects.",
        },
        {
          icon: React.createElement(IconCalendarEvent, { size: 32 }),
          title: "Consistent Pipeline",
          description: "Never worry about empty calendars again.",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Us for", gradient: false },
        { text: "Lead Generation?", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(IconHome, { size: 28 }),
          title: "Industry-Specific Campaigns",
          description: "We design campaigns exclusively for interior businesses.",
        },
        {
          icon: React.createElement(IconPhoneCall, { size: 28 }),
          title: "Verified Leads",
          description: "Only real inquiries from potential clients, no junk leads.",
        },
        {
          icon: React.createElement(IconRulerMeasure, { size: 28 }),
          title: "High Conversion",
          description: "Landing pages built to convert prospects into clients.",
        },
      ],
      cta: {
        text: "Get My Leads Now",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our Lead Generation Process for Interior Designers",
      subtitle: "ATTRACT • CAPTURE • NURTURE • CONVERT",
      description:
        "We use data-driven strategies and creative campaigns to deliver a steady flow of high-quality leads for interior design studios and freelancers.",
      steps: [
        {
          id: 1,
          title: "Market & Audience Research",
          description: "We identify homeowners, corporates, and businesses searching for design services.",
        },
        {
          id: 2,
          title: "Ad Campaigns Setup",
          description: "We run Google Ads, Meta Ads, and targeted campaigns designed to attract high-value clients.",
        },
        {
          id: 3,
          title: "Landing Page Optimization",
          description: "Custom-built landing pages convert clicks into actual inquiries.",
        },
        {
          id: 4,
          title: "Lead Qualification",
          description: "We filter out low-value inquiries and focus on serious clients ready to invest.",
        },
        {
          id: 5,
          title: "Lead Delivery & Nurturing",
          description: "We deliver leads directly to you and guide nurturing strategies for maximum conversions.",
        },
      ],
    },
    testimonials: {
      title: [
        { text: "What Interior Designers", gradient: false },
        { text: "Say About Our Leads", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      description:
        "From freelancers to full interior firms, our lead generation strategies have helped designers grow their client base consistently.",
      testimonials: [
        {
          id: "1",
          message:
            "Before this, I was only getting 1-2 inquiries a month. Now I get daily leads, many of which convert into big-ticket projects.",
          highlight: "Daily Leads",
          stars: 5,
          name: "Kunal Sharma",
          designation: "Interior Designer",
          company: "DesignCraft Studio",
        },
        {
          id: "2",
          message:
            "Their system delivers serious clients only. I no longer waste time on casual inquiries. My business revenue has doubled in 6 months.",
          highlight: "Serious Clients",
          stars: 5,
          name: "Ankit Malhotra",
          designation: "Founder",
          company: "ModernSpaces",
        },
      ],
    },
    cta: {
      title: "Get Daily Qualified Leads for Your Interior Business",
      subtitle: "MORE INQUIRIES • MORE CLIENTS • MORE REVENUE",
      description:
        "We specialize in generating premium, high-converting leads for interior designers. Stop waiting for clients—let us bring them to you with proven lead generation strategies.",
    },
  },
};
