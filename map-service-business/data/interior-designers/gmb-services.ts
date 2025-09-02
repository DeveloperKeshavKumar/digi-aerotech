import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  IconHome,
  IconMapPin,
  IconPaint,
  IconUsers,
  IconTrendingUp,
  IconArrowRight,
  IconBrush,
  IconStar,
  IconBuildingSkyscraper,
} from "@tabler/icons-react";

export const map: ServiceBusinessMap = {
  service: "gmb-services",
  business: "interior-designers",
  variants: {
    hero: "variant1",
    whyChooseUs: "variant3",
    process: "variant2",
  },
  data: {
    slug: "gmb-services-interior-designers",
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
            { text: "Struggle Without GMB", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "Homeowners and businesses search Google Maps for interior designers daily. Without an optimized GMB profile, your design studio loses calls, inquiries, and valuable projects to competitors.",
          painPoints: [
            "Not appearing on Google Maps for local design searches",
            "Low visibility in ‘interior designer near me’ searches",
            "Incomplete or outdated GMB profile reducing trust",
            "Poor ratings lowering client confidence",
            "Missed local leads due to weak profile optimization",
          ],
          solutionPoints: [
            "Top ranking in Google Maps & local packs",
            "Optimized GMB profile with photos, services, and keywords",
            "Review generation for better trust & reputation",
            "Geo-targeted visibility for homeowners & offices",
            "Direct increase in client calls and project inquiries",
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Optimize My GMB",
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
              question: "Why do interior designers need GMB optimization?",
              answer:
                "GMB helps your business show up in local searches like ‘interior designer near me,’ bringing clients directly to your studio.",
              icon: React.createElement(IconMapPin, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "Can GMB increase my design project inquiries?",
              answer:
                "Yes. A fully optimized GMB profile generates more calls, website visits, and direct inquiries from local homeowners and offices.",
              icon: React.createElement(IconUsers, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "Do you handle review management too?",
              answer:
                "Absolutely. We help you gain 5-star reviews, manage feedback, and build a strong reputation that wins client trust.",
              icon: React.createElement(IconStar, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Rank Higher",
      headlineKeywords: ["Google Maps", "Interior Designers", "Local Clients"],
      brandLine: [
        {
          text: "📍 GMB Services for Interior Designers",
          gradient: true,
          gradientClass: "from-orange-500 via-pink-500 to-red-600",
        },
      ],
      subheadline:
        "Get discovered instantly by homeowners & businesses searching for interior design services near them. Our GMB optimization ensures you rank higher, gain trust, and attract premium clients.",
      ctaButtons: [
        {
          icon: React.createElement(IconArrowRight, { size: 28 }),
          text: "Boost My Google Maps Ranking",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(IconMapPin, { size: 32 }),
          title: "3X More Calls",
          description: "From local homeowners looking for designers nearby.",
        },
        {
          icon: React.createElement(IconBrush, { size: 32 }),
          title: "Better Visibility",
          description: "Appear in Google’s local 3-pack for design searches.",
        },
        {
          icon: React.createElement(IconBuildingSkyscraper, { size: 32 }),
          title: "High-Value Projects",
          description: "Win office, home, and luxury design projects via Maps.",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Us For", gradient: false },
        { text: "Interior Design GMB Services?", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(IconPaint, { size: 28 }),
          title: "Design-Centric Optimization",
          description: "We highlight your design services & portfolios in GMB listings.",
        },
        {
          icon: React.createElement(IconStar, { size: 28 }),
          title: "Reputation Building",
          description: "We help you earn more 5-star reviews to build trust fast.",
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Local Lead Growth",
          description: "Turn Google Maps searches into real design project leads.",
        },
      ],
      cta: {
        text: "Get My GMB Optimized",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our GMB Optimization Process for Interior Designers",
      subtitle: "ANALYZE • OPTIMIZE • ENHANCE • MANAGE • GROW",
      className: "border-t border-border dark:border-gray-700",
      description:
        "We focus on complete GMB optimization for interior designers—ensuring your business shines on Google Maps, wins trust with reviews, and generates consistent project inquiries.",
      steps: [
        {
          id: 1,
          title: "Audit & Analysis",
          description: "We analyze your current GMB profile, competition, and gaps in local rankings.",
        },
        {
          id: 2,
          title: "Profile Optimization",
          description: "We optimize name, services, categories, photos, and keywords for maximum visibility.",
        },
        {
          id: 3,
          title: "Geo-Targeted Optimization",
          description: "We focus on ranking in your city & local service areas where clients are searching.",
        },
        {
          id: 4,
          title: "Review Management",
          description: "We generate and manage 5-star reviews to build credibility and trust.",
        },
        {
          id: 5,
          title: "Tracking & Growth",
          description: "We monitor insights, calls, and conversions to ensure consistent results.",
        },
      ],
    },
    cta: {
      title: "Make Your Interior Design Studio Visible on Google Maps",
      subtitle: "GMB • VISIBILITY • TRUST • PROJECTS",
      description:
        "Don’t let potential clients miss your design services. With our GMB optimization, your studio can dominate Google Maps and win premium interior design projects consistently.",
    },
  },
};
