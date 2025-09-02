import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  IconPhoneCall,
  IconShoppingCart,
  IconUsers,
  IconGift,
  IconTrendingUp,
  IconDeviceMobile,
  IconMapPin,
  IconArrowRight,
  IconCalendarEvent,
  IconWallet,
} from "@tabler/icons-react";

export const map: ServiceBusinessMap = {
  service: "mobile-apps-development",
  business: "local-business",
  variants: {
    hero: "variant1",
    whyChooseUs: "variant3",
    process: "variant2",
  },
  data: {
    slug: "mobile-apps-development-local-business",
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
            { text: "Why Local Businesses", gradient: false },
            { text: "Need Mobile Apps", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "Local customers want convenience, loyalty rewards, and instant communication. Without a mobile app, you risk losing them to competitors who offer a digital-first experience.",
          painPoints: [
            "Customers forget about your business after one visit",
            "No direct channel to send offers & promotions",
            "Dependence on third-party apps & aggregators",
            "Struggle to build repeat customers and loyalty",
            "Difficulties in managing online bookings or payments",
          ],
          solutionPoints: [
            "Custom mobile apps with your own branding",
            "Push notifications for offers, updates, and deals",
            "Integrated booking, ordering & payments",
            "Customer loyalty & reward programs",
            "Real-time engagement with your local audience",
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Build My Local App",
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
              question: "How can mobile apps help my local business?",
              answer:
                "Mobile apps give you a direct channel to your customers. You can send offers, manage bookings, accept payments, and build loyalty without depending on third parties.",
              icon: React.createElement(IconDeviceMobile, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "Can I offer loyalty rewards with the app?",
              answer:
                "Yes! We design apps with built-in loyalty programs, reward points, and special discounts to increase repeat customers.",
              icon: React.createElement(IconGift, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "Will my app support online payments?",
              answer:
                "Absolutely. We integrate secure payment gateways so your customers can pay directly through the app, hassle-free.",
              icon: React.createElement(IconWallet, { size: 22 }),
            },
            {
              id: "faq-4",
              question: "How soon can I launch my app?",
              answer:
                "Depending on features, most local business apps go live within 4–6 weeks with full testing and optimization.",
              icon: React.createElement(IconCalendarEvent, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Launch",
      headlineKeywords: ["Your Own App", "Local Customers", "More Loyalty"],
      brandLine: [
        {
          text: "📱 Mobile Apps Development for Local Businesses",
          gradient: true,
          gradientClass: "from-orange-500 via-pink-500 to-red-600",
        },
      ],
      subheadline:
        "We build powerful, user-friendly mobile apps that help local businesses connect with customers, boost repeat sales, and create long-term loyalty.",
      ctaButtons: [
        {
          icon: React.createElement(IconArrowRight, { size: 28 }),
          text: "Get My App",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "3x Repeat Customers",
          description: "Loyalty programs and offers increase repeat visits",
        },
        {
          icon: React.createElement(IconShoppingCart, { size: 32 }),
          title: "Direct Sales",
          description: "Sell without relying on aggregators or commissions",
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "Higher Growth",
          description: "Stay ahead of competitors with digital presence",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Us For", gradient: false },
        { text: "Mobile Apps Development?", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(IconDeviceMobile, { size: 28 }),
          title: "Custom-Built Apps",
          description: "We design apps tailored to your business and customers.",
        },
        {
          icon: React.createElement(IconMapPin, { size: 28 }),
          title: "Location-Based Features",
          description: "Enable local offers, delivery tracking, and directions.",
        },
        {
          icon: React.createElement(IconPhoneCall, { size: 28 }),
          title: "Seamless Communication",
          description: "Stay connected with customers through chat & push notifications.",
        },
      ],
      cta: {
        text: "Start My Mobile App Journey",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our Mobile App Development Process",
      subtitle: "DESIGN • BUILD • LAUNCH • GROW",
      className: "border-t border-border dark:border-gray-700",
      description:
        "We follow a structured process to build high-performance apps that help local businesses grow faster and engage customers directly.",
      steps: [
        {
          id: 1,
          title: "Business Analysis",
          description: "We study your business model, customer base, and objectives to design the right app features.",
        },
        {
          id: 2,
          title: "UI/UX Design",
          description: "Our design team creates intuitive, user-friendly layouts that make customers love using your app.",
        },
        {
          id: 3,
          title: "App Development",
          description: "We build robust Android & iOS apps with seamless performance and scalable architecture.",
        },
        {
          id: 4,
          title: "Integration",
          description: "We integrate payments, booking systems, CRM, and push notifications tailored to your business.",
        },
        {
          id: 5,
          title: "Launch & Support",
          description: "Your app is deployed to app stores with ongoing support, updates, and improvements.",
        },
      ],
    },
    cta: {
      title: "Build Your Own Mobile App Today",
      subtitle: "LOYALTY • SALES • GROWTH",
      description:
        "Stop depending only on walk-ins or third-party apps. With your own branded mobile app, you’ll have direct access to customers, boost repeat sales, and grow your business.",
    },
  },
};
