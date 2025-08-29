import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  IconBrandInstagram,
  IconBrandPinterest,
  IconBrandLinkedin,
  IconUsers,
  IconTrendingUp,
  IconPalette,
  IconArrowRight,
  IconCamera,
  IconBuildingSkyscraper,
  IconHome,
} from "@tabler/icons-react";

export const map: ServiceBusinessMap = {
  service: "social-media-marketing",
  business: "interior-designers",
  variants: {
    hero: "variant1",
    whyChooseUs: "variant2",
    process: "variant3",
    testimonials: "variant1",
  },
  data: {
    slug: "social-media-marketing-interior-designers",
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
            { text: "Need Social Media Marketing", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "In the design world, visuals are everything. Social media is where homeowners, brands, and businesses go to find inspiration and hire designers.",
          painPoints: [
            "Not showcasing your portfolio effectively online",
            "Low engagement despite posting regularly",
            "Competitors attracting more clients via Instagram & Pinterest",
            "Struggling to convert followers into paying customers",
            "Lack of time to manage professional social media strategies",
          ],
          solutionPoints: [
            "Create visually stunning social media profiles that attract clients",
            "Run Instagram & Pinterest campaigns tailored to interior design",
            "Build authority with consistent branding & storytelling",
            "Engage target audiences with Reels, Carousels & Video tours",
            "Convert social followers into project consultations",
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Grow My Social Presence",
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
              question: "Which social media platforms work best for interior designers?",
              answer:
                "Instagram and Pinterest are the top platforms for interior designers because of their visual focus. LinkedIn and Facebook also help with professional networking & client outreach.",
              icon: React.createElement(IconBrandInstagram, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "Can social media bring actual design clients?",
              answer:
                "Yes. With targeted campaigns, we help convert followers into leads by showcasing your portfolio and driving them to book consultations.",
              icon: React.createElement(IconUsers, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "Do I need paid ads along with organic social media?",
              answer:
                "Paid ads amplify reach and attract clients faster, but organic strategies also build long-term brand presence. We use both together for maximum ROI.",
              icon: React.createElement(IconTrendingUp, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Showcase. Engage. Convert.",
      headlineKeywords: ["Social Media Marketing", "Interior Design Branding", "Client Engagement"],
      brandLine: [
        {
          text: "🎨 Turn Your Designs Into A Powerful Social Media Brand",
          gradient: true,
          gradientClass: "from-orange-500 via-pink-500 to-red-600",
        },
      ],
      subheadline:
        "We help interior designers dominate Instagram, Pinterest, LinkedIn & Facebook with visually stunning campaigns that attract clients and grow brand presence.",
      ctaButtons: [
        {
          icon: React.createElement(IconArrowRight, { size: 28 }),
          text: "Boost My Social Media",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(IconBrandInstagram, { size: 32 }),
          title: "Instagram Growth",
          description: "Grow followers & engagement with portfolio-driven campaigns.",
        },
        {
          icon: React.createElement(IconBrandPinterest, { size: 32 }),
          title: "Pinterest Authority",
          description: "Rank your design boards & attract homeowners & businesses.",
        },
        {
          icon: React.createElement(IconCamera, { size: 32 }),
          title: "Visual Storytelling",
          description: "Use Reels, Carousels & Videos to connect with design enthusiasts.",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Us for", gradient: false },
        { text: "Interior Design Social Media?", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(IconPalette, { size: 28 }),
          title: "Design-Specific Campaigns",
          description: "We craft campaigns tailored for interior designers — not generic templates.",
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "Client-Focused Storytelling",
          description: "Highlight your portfolio, success stories, and transformations to win trust.",
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Leads from Social Media",
          description: "We don’t just grow followers, we turn them into real consultations & projects.",
        },
      ],
      cta: {
        text: "Start My Social Campaigns",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our Social Media Marketing Process",
      subtitle: "SHOWCASE • ENGAGE • CONVERT",
      description:
        "We create stunning visuals, run data-driven campaigns, and turn social media into a lead-generation machine for interior designers.",
      steps: [
        {
          id: 1,
          title: "Social Audit",
          description: "We analyze your existing presence & competitors to find opportunities.",
        },
        {
          id: 2,
          title: "Content Creation",
          description: "We design high-quality posts, Reels, and Carousels that highlight your portfolio.",
        },
        {
          id: 3,
          title: "Engagement Strategy",
          description: "We boost engagement with interactive stories, polls, and audience Q&As.",
        },
        {
          id: 4,
          title: "Targeted Ads",
          description: "Run Instagram, Pinterest & Facebook ads targeting homeowners & businesses.",
        },
        {
          id: 5,
          title: "Lead Conversion",
          description: "We optimize CTAs, landing pages & social funnels to convert followers into clients.",
        },
        {
          id: 6,
          title: "Analytics & Growth",
          description: "Monthly reports on engagement, followers, and client conversions.",
        },
      ],
    },
    testimonials: {
      title: [
        { text: "Interior Designers Who", gradient: false },
        { text: "Grew With Social Media", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      description:
        "From growing Instagram followers to generating real client consultations, our social media strategies deliver results for interior designers.",
      testimonials: [
        {
          id: "1",
          message:
            "Our Instagram is now our biggest source of new projects. We’ve doubled consultations thanks to their SMM strategy!",
          highlight: "Instagram Growth",
          stars: 5,
          name: "Ananya Kapoor",
          designation: "Founder",
          company: "Kapoor Interiors",
        },
        {
          id: "2",
          message:
            "Pinterest campaigns brought us high-end clients we never reached before. Totally worth the investment.",
          highlight: "Pinterest Leads",
          stars: 5,
          name: "Rajesh Malhotra",
          designation: "Creative Director",
          company: "UrbanNest Designs",
        },
      ],
    },
    cta: {
      title: "Turn Your Interior Designs Into Social Media Success",
      subtitle: "ENGAGE • ATTRACT • CONVERT",
      description:
        "Stop posting random content that doesn’t work. Let’s craft a powerful social media presence that grows your brand and gets you real clients.",
    },
  },
};
