import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  IconDeviceMobile,
  IconUsers,
  IconHeart,
  IconTrendingUp,
  IconCalendarEvent,
  IconShieldCheck,
  IconArrowRight,
  IconStar,
  IconCamera
} from "@tabler/icons-react";

export const map: ServiceBusinessMap = {
  service: "mobile-apps-development",
  business: "hotel-resort",
  variants: {
    hero: "variant1",
    whyChooseUs: "variant3",
    process: "variant2",
  },
  data: {
    slug: "mobile-apps-development-hotel-resort",
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
            { text: "Mobile App Engagement", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "Without a custom mobile app, hotels and resorts miss out on loyal guests, direct bookings, and personalized guest experiences.",
          painPoints: [
            "Dependence on third-party booking platforms",
            "Limited guest engagement & loyalty",
            "No direct push notifications for offers",
            "Difficulty showcasing amenities and packages",
            "Low repeat bookings & retention"
          ],
          solutionPoints: [
            "Custom mobile app development for iOS & Android",
            "In-app booking, check-in, and room management",
            "Push notifications for special offers & events",
            "Showcase amenities, packages, and virtual tours",
            "Loyalty programs and guest engagement features"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Build Your Hotel App Today",
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
              question: "Why does my hotel need a mobile app?",
              answer:
                "A dedicated mobile app increases direct bookings, improves guest loyalty, and enhances the overall guest experience.",
              icon: React.createElement(IconDeviceMobile, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "Can the app integrate with existing booking systems?",
              answer:
                "Yes, we integrate your app with your PMS, booking engines, and payment gateways for seamless operation.",
              icon: React.createElement(IconShieldCheck, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "Do you include push notifications and offers?",
              answer:
                "Absolutely. Push notifications help you announce promotions, events, and loyalty rewards directly to guests.",
              icon: React.createElement(IconStar, { size: 22 }),
            },
            {
              id: "faq-4",
              question: "Can the app showcase hotel amenities?",
              answer:
                "Yes, we design interactive galleries, virtual tours, and package displays to engage guests and increase bookings.",
              icon: React.createElement(IconCamera, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Transform Your Guest Experience with",
      headlineKeywords: ["Hotel Mobile Apps", "Resort Booking Apps", "Guest Engagement Apps"],
      brandLine: [
        {
          text: "📱 Custom Mobile Apps for Hotels & Resorts to Boost Bookings and Loyalty",
          gradient: true,
          gradientClass: "from-orange-500 via-pink-500 to-red-600",
        },
      ],
      subheadline:
        "We develop high-performing mobile apps that enable seamless bookings, guest engagement, loyalty rewards, and personalized experiences for hotels and resorts.",
      ctaButtons: [
        {
          icon: React.createElement(IconArrowRight, { size: 28 }),
          text: "Get Your Hotel App",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "100,000+ App Users",
          description: "Guests engaged via our custom apps",
        },
        {
          icon: React.createElement(IconHeart, { size: 32 }),
          title: "4.9/5 Guest Ratings",
          description: "High satisfaction from seamless app experience",
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "Boost Direct Bookings",
          description: "Reduce dependency on third-party booking platforms",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Our Mobile Apps for", gradient: false },
        { text: "Hotels & Resorts", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(IconDeviceMobile, { size: 28 }),
          title: "Seamless Booking Experience",
          description: "Guests can book rooms, packages, and services directly from the app.",
        },
        {
          icon: React.createElement(IconCalendarEvent, { size: 28 }),
          title: "Personalized Guest Engagement",
          description: "Send targeted offers, notifications, and rewards to increase loyalty.",
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Boost Direct Bookings",
          description: "Reduce commission fees from OTAs by encouraging direct reservations.",
        },
      ],
      cta: {
        text: "Develop Your Hotel App Today",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our Mobile App Development Process",
      subtitle: "PLAN • DESIGN • LAUNCH • OPTIMIZE",
      description:
        "We build mobile apps for hotels and resorts that not only look great but drive bookings, improve engagement, and delight guests.",
      steps: [
        {
          id: 1,
          title: "Requirement Gathering",
          description:
            "Understand your hotel brand, guest profiles, booking workflow, and desired app features.",
        },
        {
          id: 2,
          title: "UI/UX Design",
          description:
            "Design intuitive interfaces and engaging experiences that make booking simple and enjoyable.",
        },
        {
          id: 3,
          title: "App Development",
          description:
            "Develop high-performance iOS and Android apps with secure, scalable architecture.",
        },
        {
          id: 4,
          title: "Integration & Testing",
          description:
            "Integrate with PMS, payment gateways, booking engines and test thoroughly for seamless operation.",
        },
        {
          id: 5,
          title: "Launch & Optimization",
          description:
            "Launch the app and continuously monitor analytics to improve engagement, conversion, and retention.",
        },
      ],
    },
    cta: {
      title: "Build Your Hotel or Resort Mobile App Today",
      subtitle: "DRIVE BOOKINGS • ENGAGE GUESTS • INCREASE LOYALTY",
      description:
        "Schedule a free consultation and let our experts design a custom mobile app tailored to your hotel or resort to increase direct bookings and guest satisfaction.",
    },
  },
};
