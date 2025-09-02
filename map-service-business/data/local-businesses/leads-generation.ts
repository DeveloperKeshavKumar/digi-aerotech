import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  IconUsers,
  IconPhoneCall,
  IconArrowRight,
  IconTarget,
  IconTrendingUp,
  IconBuildingStore,
  IconMapPin,
  IconMessage,
} from "@tabler/icons-react";

export const map: ServiceBusinessMap = {
  service: "leads-generation",
  business: "local-business",
  variants: {
    hero: "variant3",
    whyChooseUs: "variant2",
    process: "variant1",
  },
  data: {
    slug: "leads-generation-local-business",
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
            { text: "Struggle With Leads", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "Without a consistent lead generation system, local businesses lose daily opportunities to competitors who dominate digital marketing.",
          painPoints: [
            "Relying only on word of mouth for new customers",
            "Irregular inquiries and inconsistent monthly revenue",
            "Competitors capturing leads through ads & SEO",
            "Difficulty converting online traffic into calls & visits",
            "Lack of proper lead tracking and follow-ups",
          ],
          solutionPoints: [
            "Multi-channel lead generation across Google, Facebook, and local platforms",
            "High-intent leads from customers actively searching near you",
            "Automated systems for tracking calls, inquiries, and visits",
            "Conversion-focused campaigns for real ROI",
            "Consistent flow of new customers every month",
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Start Generating Leads Today",
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
              question: "How do you generate leads for local businesses?",
              answer:
                "We use a mix of Google Ads, Local SEO, Meta Ads, and social media campaigns to generate high-quality leads ready to buy from you.",
              icon: React.createElement(IconTarget, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "Can you bring more walk-ins to my shop?",
              answer:
                "Yes, our campaigns target customers searching ‘near me’ and encourage direct store visits with call-to-action ads.",
              icon: React.createElement(IconBuildingStore, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "Do you track and measure leads?",
              answer:
                "We integrate advanced tracking to record every inquiry, call, and store visit so you can see ROI clearly.",
              icon: React.createElement(IconPhoneCall, { size: 22 }),
            },
            {
              id: "faq-4",
              question: "What type of businesses can benefit?",
              answer:
                "Any local business—from restaurants and gyms to salons and service providers—can generate more sales with our lead generation system.",
              icon: React.createElement(IconUsers, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Get",
      headlineKeywords: ["More Calls", "Inquiries", "Walk-ins"],
      brandLine: [
        {
          text: "📞 Lead Generation Services for Local Businesses",
          gradient: true,
          gradientClass: "from-orange-500 via-pink-500 to-red-600",
        },
      ],
      subheadline:
        "We help local businesses build a steady flow of leads and sales using digital campaigns that turn online searches into real customers.",
      ctaButtons: [
        {
          icon: React.createElement(IconArrowRight, { size: 28 }),
          text: "Generate My Leads Now",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "3X More Leads",
          description: "Local businesses see rapid growth in weekly inquiries",
        },
        {
          icon: React.createElement(IconPhoneCall, { size: 32 }),
          title: "20+ Daily Calls",
          description: "Turn online searches into phone calls & customer visits",
        },
        {
          icon: React.createElement(IconMapPin, { size: 32 }),
          title: "Hyperlocal Reach",
          description: "Capture high-intent customers searching ‘near me’",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Us For", gradient: false },
        { text: "Lead Generation?", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(IconTarget, { size: 28 }),
          title: "Multi-Channel Approach",
          description: "We combine SEO, PPC, and ads to maximize lead flow.",
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "Quality Over Quantity",
          description: "We focus on real customers, not just random clicks.",
        },
        {
          icon: React.createElement(IconMessage, { size: 28 }),
          title: "Faster Conversions",
          description: "Our strategies drive instant calls, messages, and visits.",
        },
      ],
      cta: {
        text: "Start My Lead Campaign",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our Proven Lead Generation Process",
      subtitle: "ATTRACT • ENGAGE • CONVERT • SCALE",
      className: "border-t border-border dark:border-gray-700",
      description:
        "We design a customer acquisition funnel that captures interest, engages with local customers, and converts them into paying clients.",
      steps: [
        {
          id: 1,
          title: "Audience Research",
          description: "We identify your local target audience, their needs, and the platforms they use most.",
        },
        {
          id: 2,
          title: "Lead Capture Setup",
          description: "We create landing pages, forms, and call buttons that make it easy for customers to reach you instantly.",
        },
        {
          id: 3,
          title: "Campaign Launch",
          description: "We run ads and SEO campaigns designed to capture high-intent leads searching for your services.",
        },
        {
          id: 4,
          title: "Lead Nurturing",
          description: "We set up remarketing and automated responses to convert interested prospects into paying customers.",
        },
        {
          id: 5,
          title: "Tracking & Scaling",
          description: "We monitor conversions, optimize campaigns, and scale the best-performing strategies for maximum ROI.",
        },
      ],
    },
    cta: {
      title: "Turn Local Searches Into Paying Customers",
      subtitle: "CALLS • INQUIRIES • SALES",
      description:
        "Stop losing leads to competitors. With our proven strategies, your business will enjoy a steady stream of high-quality leads every day.",
    },
  },
};
