import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  IconPill,
  IconBuildingSkyscraper,
  IconChartLine,
  IconAppWindow,
  IconStar,
  IconDeviceMobile,
  IconSearch,
  IconTrendingUp,
  IconShieldCheck,
  IconArrowRight,
} from "@tabler/icons-react";

export const map: ServiceBusinessMap = {
  service: "aso-services",
  business: "pharma-companies",
  variants: {
    hero: "variant1",
    whyChooseUs: "variant3",
    process: "variant2",
    testimonials: "variant2",
  },
  data: {
    slug: "aso-services-pharma-companies",
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
            { text: "Why Pharma Apps", gradient: false },
            { text: "Struggle to Get Visibility", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "The pharma industry is going digital, yet most pharma apps fail to reach the right audience because they are not optimized for the App Store & Play Store.",
          painPoints: [
            "Low app downloads despite huge investment",
            "Poor keyword rankings in Play Store & App Store",
            "Lack of trust signals & low ratings",
            "Pharma app not visible to doctors, patients & distributors",
            "Competitors dominating the pharma app marketplace",
          ],
          solutionPoints: [
            "Keyword-rich ASO strategies tailored for pharma",
            "Optimized titles, descriptions & metadata",
            "Engaging app visuals, screenshots & videos",
            "Review & rating management for trust-building",
            "Competitor tracking & performance analytics",
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Get More Downloads for Your Pharma App",
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
              question: "Why do pharma companies need ASO services?",
              answer:
                "Pharma apps face tough competition. Without ASO, even the best apps remain invisible. ASO ensures your app ranks higher, gets discovered by patients, doctors, and distributors, and builds trust in the digital healthcare market.",
              icon: React.createElement(IconSearch, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "Can ASO increase downloads for my pharma app?",
              answer:
                "Yes, our tailored ASO strategies improve visibility, drive targeted downloads, and boost your credibility in the healthcare industry.",
              icon: React.createElement(IconDeviceMobile, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "Do you optimize both Google Play & App Store apps?",
              answer:
                "Absolutely. We provide end-to-end ASO for Android and iOS apps, ensuring your pharma app reaches the maximum audience.",
              icon: React.createElement(IconAppWindow, { size: 22 }),
            },
            {
              id: "faq-4",
              question: "Will ASO improve my pharma brand’s digital trust?",
              answer:
                "Yes, we focus on building positive reviews, better app ratings, and optimized app store profiles, increasing user trust & conversions.",
              icon: React.createElement(IconShieldCheck, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Boost",
      headlineKeywords: [
        "Pharma App Downloads",
        "Visibility in App Stores",
        "Trust with Doctors & Patients",
        "App Store Rankings",
        "Digital Pharma Growth",
      ],
      brandLine: [
        {
          text: "📈 Get More Downloads, More Trust, More Growth",
          gradient: true,
          gradientClass: "from-orange-500 via-pink-500 to-red-600",
        },
      ],
      subheadline:
        "We help pharma companies optimize their mobile apps for App Store & Play Store, driving downloads, building trust, and increasing revenue in the digital healthcare space.",
      ctaButtons: [
        {
          icon: React.createElement(IconArrowRight, { size: 28 }),
          text: "Start Optimizing My Pharma App",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(IconPill, { size: 32 }),
          title: "3X More Downloads",
          description: "Through ASO-driven visibility",
        },
        {
          icon: React.createElement(IconStar, { size: 32 }),
          title: "4.5+ Ratings",
          description: "Improved trust & reviews",
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "2X Engagement",
          description: "From healthcare professionals",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Us for", gradient: false },
        { text: "Pharma ASO Services?", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(IconChartLine, { size: 28 }),
          title: "Pharma-Specific Strategies",
          description: "We design ASO strategies tailored exclusively for pharma apps to target doctors, patients & distributors.",
        },
        {
          icon: React.createElement(IconAppWindow, { size: 28 }),
          title: "App Store Optimization",
          description: "From keyword-rich metadata to optimized visuals, we ensure your app is highly discoverable.",
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 28 }),
          title: "Reputation & Trust Building",
          description: "We boost reviews, ratings, and app trust to enhance your pharma brand credibility.",
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Competitive Edge",
          description: "We track pharma competitors & ensure your app stays ahead in the app marketplace.",
        },
      ],
      cta: {
        text: "Boost My Pharma App Now",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our Pharma App ASO Process",
      subtitle: "FROM DISCOVERY TO DOWNLOADS",
      className: "border-t border-border dark:border-gray-700",
      description:
        "Our ASO process is designed to maximize visibility, build trust, and drive high-quality downloads for pharma companies.",
      steps: [
        {
          id: 1,
          title: "App Audit & Competitor Analysis",
          description: "We analyze your pharma app, study competitors, and find ranking opportunities in the healthcare niche.",
        },
        {
          id: 2,
          title: "Keyword Research",
          description: "We identify the most searched keywords for pharma, healthcare, medicines, and distributors to boost app rankings.",
        },
        {
          id: 3,
          title: "Metadata Optimization",
          description: "We optimize your app title, description, and tags with powerful pharma-specific keywords.",
        },
        {
          id: 4,
          title: "Creative Optimization",
          description: "We design compelling visuals, screenshots, and app preview videos to increase app downloads.",
        },
        {
          id: 5,
          title: "Review & Rating Management",
          description: "We build trust by encouraging positive reviews, boosting app ratings, and responding to customer feedback.",
        },
        {
          id: 6,
          title: "Ongoing Monitoring & Scaling",
          description: "We continuously track performance, analyze competitors, and scale strategies to maintain top rankings.",
        },
      ],
    },
    testimonials: {
      title: [
        { text: "Pharma Companies", gradient: false },
        { text: "That Trust Our ASO Services", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      description:
        "Leading pharma brands partner with us to increase app downloads, build digital trust, and maximize visibility.",
      testimonials: [
        {
          id: "1",
          message:
            "We struggled with low downloads for our pharma app. Their ASO team transformed our visibility and brought us a steady stream of doctors and patients.",
          highlight: "3X App Downloads",
          stars: 5,
          name: "Dr. Manish Sharma",
          designation: "Founder",
          company: "MediCure Pharma",
        },
        {
          id: "2",
          message:
            "Our pharma app now ranks at the top for key healthcare terms. We’ve built strong trust with distributors & customers thanks to their ASO expertise.",
          highlight: "Top Ranking in Play Store",
          stars: 5,
          name: "Anjali Gupta",
          designation: "Marketing Head",
          company: "PharmaTrust",
        },
      ],
    },
    cta: {
      title: "Boost Your Pharma App with Expert ASO",
      subtitle: "MORE VISIBILITY • MORE DOWNLOADS • MORE TRUST",
      description:
        "Partner with us to take your pharma app to the top of Play Store & App Store. We ensure maximum visibility, trust & conversions for your brand.",
    },
  },
};
