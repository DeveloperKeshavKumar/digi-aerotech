import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  IconUsers,
  IconCalendarEvent,
  IconTarget,
  IconBuildingSkyscraper,
  IconWorld,
  IconArrowRight,
  IconPhoneCall,
  IconMessageCircle,
  IconHotelService,
  IconTrendingUp,
  IconDeviceMobile
} from "@tabler/icons-react";

export const map: ServiceBusinessMap = {
  service: "leads-generation",
  business: "hotel-resort",
  variants: {
    hero: "variant2",
    whyChooseUs: "variant1",
    process: "variant3",
  },
  data: {
    slug: "leads-generation-hotel-resort",
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
            { text: "Hotels & Resorts Face Challenges", gradient: false },
            { text: "Generating Direct Leads Online", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "Direct leads are the lifeblood of any hotel or resort. Without a strong online strategy, properties lose potential guests to OTAs or competitors.",
          painPoints: [
            "Low website conversion for room bookings",
            "High reliance on OTAs with commission fees",
            "Inconsistent inquiries from potential guests",
            "Poor lead tracking and follow-ups",
            "Inefficient targeting of high-value travelers",
          ],
          solutionPoints: [
            "Lead capture forms optimized for mobile & desktop",
            "Targeted campaigns to attract high-intent travelers",
            "Retargeting campaigns for abandoned booking visitors",
            "Multi-channel strategy including social, search & email",
            "Data-driven tracking to maximize ROI per lead",
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Start Generating Direct Leads",
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
              question: "How can lead generation improve my hotel bookings?",
              answer:
                "We capture potential guests through optimized forms, targeted ads, and follow-up automation, turning browsers into booked rooms.",
              icon: React.createElement(IconUsers, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "Do you handle follow-ups for hotel leads?",
              answer:
                "Yes. We implement automated email, WhatsApp, and call reminders to nurture leads until they confirm bookings.",
              icon: React.createElement(IconPhoneCall, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "Can small boutique hotels benefit from lead generation?",
              answer:
                "Absolutely. Even small hotels and resorts can generate a steady stream of high-value leads with the right campaigns.",
              icon: React.createElement(IconHotelService, { size: 22 }),
            },
            {
              id: "faq-4",
              question: "How quickly will I see results?",
              answer:
                "Most properties start receiving qualified inquiries within 2–4 weeks of optimized campaigns.",
              icon: React.createElement(IconTrendingUp, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Turn Travelers Into Direct Guests",
      headlineKeywords: ["Leads Generation", "Hotels & Resorts", "Direct Bookings"],
      brandLine: [
        {
          text: "💼 Capture More Guest Inquiries & Boost Your Occupancy",
          gradient: true,
          gradientClass: "from-orange-500 via-pink-500 to-red-600",
        },
      ],
      subheadline:
        "Our leads generation strategies help hotels and resorts attract high-intent travelers, collect inquiries, and convert them into confirmed bookings.",
      ctaButtons: [
        {
          icon: React.createElement(IconArrowRight, { size: 28 }),
          text: "Generate More Leads",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "50% Increase in Direct Inquiries",
          description: "Hotels see a significant boost in direct bookings using our strategies.",
        },
        {
          icon: React.createElement(IconWorld, { size: 32 }),
          title: "Targeted Campaigns",
          description: "Reach travelers searching for hotels & resorts in your location.",
        },
        {
          icon: React.createElement(IconCalendarEvent, { size: 32 }),
          title: "Retargeting Success",
          description: "We convert abandoned bookings into confirmed guests.",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Our Leads Generation", gradient: false },
        { text: "Works for Hotels & Resorts", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(IconTarget, { size: 28 }),
          title: "High-Intent Traveler Targeting",
          description: "We attract users who are actively looking to book stays.",
        },
        {
          icon: React.createElement(IconBuildingSkyscraper, { size: 28 }),
          title: "Direct Booking Focused",
          description: "Maximize occupancy while reducing OTA dependency.",
        },
        {
          icon: React.createElement(IconDeviceMobile, { size: 28 }),
          title: "Multi-Channel Lead Capture",
          description: "Website forms, chatbots, WhatsApp, and social ads all integrated.",
        },
      ],
      cta: {
        text: "Start Capturing Leads Today",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our Leads Generation Process for Hotels & Resorts",
      subtitle: "ATTRACT • CAPTURE • CONVERT",
      description:
        "We create a seamless funnel to capture high-value leads and turn them into confirmed bookings efficiently.",
      steps: [
        {
          id: 1,
          title: "Market & Guest Research",
          description:
            "We analyze traveler profiles, search intent, and competitor strategies to identify the most profitable audiences.",
        },
        {
          id: 2,
          title: "Optimized Lead Capture",
          description:
            "We design intuitive forms, landing pages, and booking widgets to convert visitors into leads effortlessly.",
        },
        {
          id: 3,
          title: "Targeted Campaigns",
          description:
            "Run paid ads on Google, social media, and display networks targeting high-intent travelers for maximum ROI.",
        },
        {
          id: 4,
          title: "Automated Follow-Ups",
          description:
            "Lead nurturing via email, SMS, WhatsApp, and call reminders to ensure no booking opportunity is lost.",
        },
        {
          id: 5,
          title: "Performance Tracking & Optimization",
          description:
            "Continuously analyze data to improve conversion rates, reduce cost-per-lead, and increase confirmed bookings.",
        },
      ],
    },
    cta: {
      title: "Start Capturing High-Value Leads for Your Hotel",
      subtitle: "INCREASE BOOKINGS • REDUCE OTA FEES • GROW REVENUE",
      description:
        "Book a free consultation today and see how our leads generation strategies can transform your hotel or resort’s revenue.",
    },
  },
};
