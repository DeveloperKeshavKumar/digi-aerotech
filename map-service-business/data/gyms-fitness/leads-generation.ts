import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  Users,
  Target,
  Calendar,
  Activity,
  ArrowRight,
  BarChart2,
  Star,
  TrendingUp,
  Megaphone,
} from "lucide-react";

export const map: ServiceBusinessMap = {
  service: "leads-generation",
  business: "gyms-fitness",
  variants: {
    hero: "variant1",
    whyChooseUs: "variant3",
    process: "variant2",
  },
  data: {
    slug: "leads-generation-gyms-fitness",
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
            { text: "Struggling to Convert Gym Visitors into", gradient: false },
            { text: "High-Quality Leads?", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "Gym owners and fitness studios often lose potential members due to ineffective lead generation strategies. Without proper targeting and follow-ups, conversions remain low.",
          painPoints: [
            "Low inquiry-to-membership conversion rates",
            "Difficulty capturing trial sign-ups online",
            "Poor tracking of lead sources",
            "Lack of automated follow-up systems",
            "Time wasted on uninterested prospects",
          ],
          solutionPoints: [
            "Capture leads from Google, Meta, and social campaigns",
            "Implement automated nurture emails & SMS follow-ups",
            "Segment leads for personalized engagement",
            "Track ROI of every campaign & channel",
            "Convert trial sign-ups into loyal members efficiently",
          ],
          cta: {
            icon: React.createElement(ArrowRight, { size: 20 }),
            text: "Start Generating High-Quality Gym Leads Today",
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
              question: "How can I generate more gym leads online?",
              answer:
                "We use targeted campaigns, optimized landing pages, and lead capture forms to attract potential members actively searching for fitness services.",
              icon: React.createElement(Activity, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "Do you help with follow-up and lead nurturing?",
              answer:
                "Yes! Automated emails, SMS, and call tracking ensure leads are engaged until they convert into members.",
              icon: React.createElement(Star, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "Can small gyms see real results?",
              answer:
                "Absolutely. Our campaigns are scalable and optimized to deliver leads even for small fitness studios with limited budgets.",
              icon: React.createElement(Target, { size: 22 }),
            },
            {
              id: "faq-4",
              question: "How quickly can I expect leads?",
              answer:
                "You’ll see quality inquiries within weeks from targeted campaigns on Google, Meta, and other platforms.",
              icon: React.createElement(BarChart2, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Want Consistent",
      headlineKeywords: [
        "Gym Leads?",
        "Trial Sign-ups?",
        "Membership Conversions?",
        "Local Fitness Clients?",
      ],
      brandLine: [
        {
          text: "💪 Maximize Your Gym Memberships with Expert Lead Generation",
          gradient: true,
          gradientClass: "from-orange-500 via-pink-500 to-red-600",
        },
      ],
      subheadline:
        "We help gyms and fitness studios generate high-quality, local leads, nurture them automatically, and convert them into loyal members efficiently.",
      ctaButtons: [
        {
          icon: React.createElement(Megaphone, { size: 28 }),
          text: "Get Free Leads Generation Consultation",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(Users, { size: 32 }),
          title: "1,500+ Leads Generated",
          description: "For gyms and fitness studios in multiple cities",
        },
        {
          icon: React.createElement(TrendingUp, { size: 32 }),
          title: "3X Membership Conversion",
          description: "Through optimized follow-up strategies",
        },
        {
          icon: React.createElement(Calendar, { size: 32 }),
          title: "50+ Campaigns Managed",
          description: "Successfully generating leads consistently",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Gyms Trust Us for", gradient: false },
        { text: "Leads Generation", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(Target, { size: 28 }),
          title: "Hyper-Targeted Campaigns",
          description: "Reach fitness enthusiasts near your gym actively searching for memberships.",
        },
        {
          icon: React.createElement(Activity, { size: 28 }),
          title: "Automated Lead Nurturing",
          description: "Emails, SMS, and follow-ups ensure no lead is left unconverted.",
        },
        {
          icon: React.createElement(BarChart2, { size: 28 }),
          title: "Conversion-Driven Strategy",
          description: "We optimize campaigns to maximize trial sign-ups and membership sales.",
        },
      ],
      cta: {
        text: "Start Generating Gym Leads Now",
        link: "#contact",
        icon: React.createElement(ArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our Leads Generation Process for Gyms & Fitness",
      subtitle: "CAPTURE • ENGAGE • CONVERT",
      description:
        "We create high-performing, local lead generation campaigns that consistently convert prospects into paying gym members.",
      steps: [
        {
          id: 1,
          title: "Target Audience Research",
          description:
            "Identify local fitness enthusiasts and demographics most likely to join your gym or studio.",
        },
        {
          id: 2,
          title: "Lead Capture Setup",
          description:
            "Design optimized landing pages, forms, and CTAs to capture inquiries efficiently.",
        },
        {
          id: 3,
          title: "Campaign Launch",
          description:
            "Deploy targeted campaigns across Google, Meta, and other platforms for maximum reach.",
        },
        {
          id: 4,
          title: "Automated Nurturing",
          description:
            "Follow up with leads via emails, SMS, and calls to increase conversion rates.",
        },
        {
          id: 5,
          title: "Tracking & Optimization",
          description:
            "Monitor all campaigns and refine strategies based on lead quality and conversion performance.",
        },
      ],
    },
    cta: {
      title: "Ready to Generate High-Quality Gym Leads?",
      subtitle: "CAPTURE MORE LOCAL FITNESS MEMBERS",
      description:
        "Book a free consultation today and start acquiring targeted leads for your gym or fitness studio that convert into loyal members.",
    },
  },
};
