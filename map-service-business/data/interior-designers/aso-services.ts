import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  IconBrush,
  IconBuilding,
  IconPaint,
  IconColorSwatch,
  IconArrowRight,
  IconDeviceMobile,
  IconTrendingUp,
  IconHome,
} from "@tabler/icons-react";

export const map: ServiceBusinessMap = {
  service: "aso-services",
  business: "interior-designers",
  variants: {
    hero: "variant2",
    whyChooseUs: "variant1",
    process: "variant3",
  },
  data: {
    slug: "aso-services-interior-designers",
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
            { text: "Why Interior Design Apps", gradient: false },
            { text: "Struggle Without ASO", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "Interior designers increasingly rely on mobile apps to showcase portfolios, 3D room models, and design consultations. Without ASO, these apps remain invisible to homeowners searching for design inspiration.",
          painPoints: [
            "App buried under competitors in app stores",
            "Low installs despite strong design portfolio",
            "Generic keywords not attracting right audience",
            "Poor app store visuals reducing conversions",
            "Low star ratings hurting brand credibility",
          ],
          solutionPoints: [
            "Targeted keyword optimization for design niches",
            "High-converting app titles & descriptions",
            "Attractive visuals, screenshots & videos",
            "Review management & reputation building",
            "Consistent installs from local & global users",
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Boost My Design App",
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
              question: "Why do interior design apps need ASO?",
              answer:
                "ASO ensures your app ranks higher for searches like ‘home makeover ideas’ or ‘3D interior design,’ attracting the right clients.",
              icon: React.createElement(IconTrendingUp, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "Can ASO bring more clients to my design business?",
              answer:
                "Yes. By optimizing keywords, visuals, and reviews, ASO improves installs and leads from homeowners seeking interior services.",
              icon: React.createElement(IconHome, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "Do you handle both iOS and Android ASO?",
              answer:
                "Absolutely. We optimize your app for both App Store (iOS) and Play Store (Android) for maximum visibility.",
              icon: React.createElement(IconDeviceMobile, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Optimize",
      headlineKeywords: ["Design Apps", "Creative Portfolios", "Client Visibility"],
      brandLine: [
        {
          text: "🎨 ASO Services for Interior Designers",
          gradient: true,
          gradientClass: "from-orange-500 via-pink-500 to-red-600",
        },
      ],
      subheadline:
        "Turn your interior design app into a lead magnet. With ASO, we boost your app rankings, attract homeowners, and increase installs for real client growth.",
      ctaButtons: [
        {
          icon: React.createElement(IconArrowRight, { size: 28 }),
          text: "Get My App Ranked",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(IconBrush, { size: 32 }),
          title: "4X More Installs",
          description: "For designers showcasing their portfolios via apps.",
        },
        {
          icon: React.createElement(IconBuilding, { size: 32 }),
          title: "Higher Visibility",
          description: "Rank top for searches like ‘home design ideas’.",
        },
        {
          icon: React.createElement(IconPaint, { size: 32 }),
          title: "Boosted Credibility",
          description: "Positive reviews & better star ratings attract more clients.",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Us For", gradient: false },
        { text: "Interior Design App ASO?", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(IconColorSwatch, { size: 28 }),
          title: "Design-Specific Keywords",
          description: "We target homeowners & businesses searching for design solutions.",
        },
        {
          icon: React.createElement(IconBrush, { size: 28 }),
          title: "Portfolio Visibility",
          description: "We ensure your creative portfolio shines in app listings.",
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Client Growth",
          description: "Turn app installs into design consultations & contracts.",
        },
      ],
      cta: {
        text: "Optimize My Design App Now",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our ASO Process for Interior Designers",
      subtitle: "ANALYZE • OPTIMIZE • DESIGN • PUBLISH • GROW",
      className: "border-t border-border dark:border-gray-700",
      description:
        "Our ASO process is tailored for interior designers to showcase creativity, attract homeowners, and generate consistent project leads through app visibility.",
      steps: [
        {
          id: 1,
          title: "Market & Competitor Analysis",
          description: "We study competing design apps and identify opportunities for keyword dominance.",
        },
        {
          id: 2,
          title: "Keyword Optimization",
          description: "We research & integrate high-traffic keywords like ‘room design ideas,’ ‘modern interiors,’ and ‘home decor apps.’",
        },
        {
          id: 3,
          title: "Creative Store Listing",
          description: "We design compelling app icons, screenshots, and demo videos showcasing your designs.",
        },
        {
          id: 4,
          title: "Review & Rating Management",
          description: "We encourage positive client reviews and manage feedback to boost trust & installs.",
        },
        {
          id: 5,
          title: "Ongoing Monitoring & Updates",
          description: "We keep optimizing your app for algorithm updates and seasonal search trends.",
        },
      ],
    },
    cta: {
      title: "Make Your Design App a Client Magnet",
      subtitle: "ASO • VISIBILITY • CLIENTS • GROWTH",
      description:
        "Don’t let your interior design app go unnoticed. With our ASO strategies, you can attract homeowners, boost installs, and win more design contracts.",
    },
  },
};
