import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconUsers,
  IconVaccine,
  IconHeartbeat,
  IconChartLine,
  IconArrowRight,
  IconStethoscope,
} from "@tabler/icons-react";

export const map: ServiceBusinessMap = {
  service: "social-media-marketing",
  business: "pharma-companies",
  variants: {
    hero: "variant2",
    whyChooseUs: "variant3",
    process: "variant1",
  },
  data: {
    slug: "social-media-marketing-pharma-companies",
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
            { text: "Why Pharma Companies", gradient: false },
            { text: "Need Social Media Marketing", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "In the digital age, patients and doctors look for reliable health information online. Social Media Marketing (SMM) helps pharma brands build trust, engage audiences, and increase visibility while staying compliant.",
          painPoints: [
            "Low patient engagement due to complex medical content",
            "Pharma companies struggle with brand trust & awareness",
            "Regulatory compliance limits marketing creativity",
            "Competitors are already leveraging social channels",
            "Difficulty in reaching doctors, healthcare providers & patients simultaneously",
          ],
          solutionPoints: [
            "Compliance-friendly social content strategies for pharma",
            "Educational & awareness campaigns that build trust",
            "Targeted campaigns for doctors, hospitals & patients",
            "Platform-specific content (Facebook, LinkedIn, Instagram)",
            "Community engagement that builds authority & trust",
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Start Pharma SMM Today",
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
              question: "Is social media marketing allowed for pharma companies?",
              answer:
                "Yes, with compliance-focused strategies. We create content that educates, builds trust, and follows all medical advertising regulations.",
              icon: React.createElement(IconStethoscope, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "Which social platforms work best for pharma?",
              answer:
                "LinkedIn for B2B (doctors, hospitals), Instagram & Facebook for patient awareness, and YouTube for educational content.",
              icon: React.createElement(IconBrandLinkedin, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "Can SMM generate leads for pharma?",
              answer:
                "Yes, social media helps pharma brands get patient inquiries, doctor connections, and distributor leads through campaigns and engagement.",
              icon: React.createElement(IconUsers, { size: 22 }),
            },
            {
              id: "faq-4",
              question: "How do you measure pharma SMM success?",
              answer:
                "We track engagement, reach, follower growth, and lead conversions, ensuring measurable ROI for every campaign.",
              icon: React.createElement(IconChartLine, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Engage",
      headlineKeywords: ["Pharma Social Media Marketing", "Healthcare SMM", "Patient Engagement"],
      brandLine: [
        {
          text: "📲 Build Trust & Visibility for Your Pharma Brand with Compliance-Friendly Social Media Marketing",
          gradient: true,
          gradientClass: "from-orange-500 via-pink-500 to-red-600",
        },
      ],
      subheadline:
        "We help pharma companies use social media to educate patients, engage doctors, and grow brand trust while ensuring compliance with healthcare regulations.",
      ctaButtons: [
        {
          icon: React.createElement(IconArrowRight, { size: 28 }),
          text: "Get Pharma SMM Strategy",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(IconBrandFacebook, { size: 32 }),
          title: "Patient Engagement",
          description: "Build loyal communities & trust",
        },
        {
          icon: React.createElement(IconBrandLinkedin, { size: 32 }),
          title: "Doctor Outreach",
          description: "Target doctors & healthcare leaders",
        },
        {
          icon: React.createElement(IconVaccine, { size: 32 }),
          title: "Compliance-Friendly",
          description: "Regulation-safe campaigns",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Us for", gradient: false },
        { text: "Pharma Social Media?", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(IconHeartbeat, { size: 28 }),
          title: "Patient-Centric Approach",
          description: "We humanize your pharma brand with content patients trust.",
        },
        {
          icon: React.createElement(IconBrandInstagram, { size: 28 }),
          title: "Creative Pharma Storytelling",
          description: "Visual campaigns designed to educate & inspire trust.",
        },
        {
          icon: React.createElement(IconChartLine, { size: 28 }),
          title: "Data-Driven Strategies",
          description: "We track engagement, clicks, and leads to ensure ROI.",
        },
      ],
      cta: {
        text: "Boost Pharma Engagement",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our Pharma Social Media Marketing Process",
      subtitle: "EDUCATE • ENGAGE • CONVERT",
      className: "border-t border-border dark:border-gray-700",
      description:
        "We combine compliance-focused content with engagement strategies to help pharma brands connect with patients, doctors, and healthcare providers effectively.",
      steps: [
        {
          id: 1,
          title: "Strategy & Compliance Check",
          description: "We craft a custom SMM plan aligned with pharma regulations to ensure trust & credibility.",
        },
        {
          id: 2,
          title: "Content Creation",
          description: "Educational posts, doctor Q&As, awareness campaigns, and compliance-friendly creatives.",
        },
        {
          id: 3,
          title: "Community Engagement",
          description: "We interact with patients, answer queries, and engage doctors for brand trust.",
        },
        {
          id: 4,
          title: "Paid Campaigns",
          description: "Targeted ad campaigns on Facebook, LinkedIn & Instagram for patients and professionals.",
        },
        {
          id: 5,
          title: "Influencer Collaboration",
          description: "Partnering with medical experts and healthcare influencers for credibility.",
        },
        {
          id: 6,
          title: "Analytics & Scaling",
          description: "Tracking performance, optimizing strategies, and scaling high-ROI campaigns.",
        },
      ],
    },
    cta: {
      title: "Grow Your Pharma Brand on Social Media",
      subtitle: "TRUST • ENGAGEMENT • VISIBILITY",
      description:
        "Let’s build your pharma company’s digital trust with compliance-friendly, high-engagement social media strategies that attract patients and healthcare professionals.",
    },
  },
};
