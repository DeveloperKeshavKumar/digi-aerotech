import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  IconBrandYoutube,
  IconBrandTiktok,
  IconBrandSnapchat,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconVideo,
  IconUsers,
  IconBell,
  IconChartBarPopular,
} from "@tabler/icons-react";
import { Utensils } from "lucide-react";

export const map: ServiceBusinessMap = {
  service: "other-ads",
  business: "restaurants-cafes",
  variants: {
    hero: "variant2",
    whyChooseUs: "variant3",
    process: "variant1",
  },
  data: {
    slug: "other-ads-restaurants-cafes",
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
            { text: "Why Restaurants & Cafés ", gradient: false },
            {
              text: "Need TikTok, YouTube & Snapchat Ads",
              gradient: true,
              gradientClass: "from-orange-500 via-pink-500 to-red-600",
            },
          ],
          subheadline:
            "Food is visual. Ads on TikTok, YouTube, Snapchat, LinkedIn & Twitter can skyrocket restaurant visibility, build brand recall, and turn viewers into diners.",
          painPoints: [
            "Low visibility outside local SEO & Google ads",
            "Customers unaware of menu specials & offers",
            "High dependency on aggregator apps",
            "No viral-worthy brand presence",
            "Struggle to attract young customers",
          ],
          solutionPoints: [
            "TikTok & Reels ads with trending food content",
            "YouTube shorts showcasing signature dishes",
            "Snapchat filters & geo-targeted ads",
            "Twitter buzz & LinkedIn brand credibility",
            "Emotion-driven video storytelling for restaurants",
          ],
          cta: {
            icon: React.createElement(IconVideo, { size: 20 }),
            text: "Boost My Restaurant Ads",
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
              question: "Why should restaurants invest in TikTok & YouTube ads?",
              answer:
                "TikTok & YouTube are highly visual platforms perfect for showcasing food, ambience, and customer experiences. Viral videos can directly translate into more reservations and orders.",
              icon: React.createElement(IconBrandTiktok, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "Are Snapchat ads effective for cafés?",
              answer:
                "Yes, Snapchat geo-targeted ads and filters attract younger customers nearby, driving both walk-ins and online orders for cafés.",
              icon: React.createElement(IconBrandSnapchat, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "Can LinkedIn ads help fine-dining restaurants?",
              answer:
                "Absolutely. LinkedIn ads work well for corporate bookings, events, and brand positioning for premium dining experiences.",
              icon: React.createElement(IconBrandLinkedin, { size: 22 }),
            },
            {
              id: "faq-4",
              question: "Do video ads perform better than image ads?",
              answer:
                "Yes, video ads showcasing dishes, ambience, and chef’s stories drive higher engagement, emotional connection, and conversions.",
              icon: React.createElement(IconVideo, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Go Beyond Google & Meta Ads ",
      headlineKeywords: [
        "TikTok Ads for Restaurants",
        "YouTube Ads for Cafés",
        "Snapchat Restaurant Marketing",
        "Food Branding with Social Ads",
      ],
      brandLine: [
        {
          text: "🍔 Other Ads for Restaurants & Cafés",
          gradient: true,
          gradientClass: "from-orange-500 via-pink-500 to-red-600",
        },
      ],
      subheadline:
        "From TikTok trends to YouTube shorts and Snapchat geo-ads, we create food-centric ad campaigns that bring more footfall, online orders, and loyal customers.",
      ctaButtons: [
        {
          icon: React.createElement(IconBrandYoutube, { size: 28 }),
          text: "Launch My Restaurant Ads",
          link: "/contact",
        },
        {
          icon: React.createElement(IconChartBarPopular, { size: 28 }),
          text: "Free Ads Consultation",
          link: "/contact",
          variant: "secondary",
        },
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "5x Reach",
          description: "with TikTok & YouTube food ads",
        },
        {
          icon: React.createElement(Utensils, { size: 32 }),
          title: "Viral Branding",
          description: "trending food content that converts",
        },
        {
          icon: React.createElement(IconBell, { size: 32 }),
          title: "Local Awareness",
          description: "Snapchat geo-ads for nearby foodies",
        },
        {
          icon: React.createElement(IconChartBarPopular, { size: 32 }),
          title: "Higher ROI",
          description: "cost-effective compared to aggregator ads",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Us for ", gradient: false },
        {
          text: "TikTok, YouTube & Snapchat Ads",
          gradient: true,
          gradientClass: "from-orange-500 via-pink-500 to-red-600",
        },
      ],
      trustPoints: [
        {
          icon: React.createElement(IconBrandTiktok, { size: 28 }),
          title: "TikTok & Reels Mastery",
          description: "We craft trending food reels that go viral.",
        },
        {
          icon: React.createElement(IconBrandYoutube, { size: 28 }),
          title: "YouTube Video Ads",
          description: "Engaging food stories & chef’s specials.",
        },
        {
          icon: React.createElement(IconBrandSnapchat, { size: 28 }),
          title: "Snapchat Geo Ads",
          description: "Target nearby customers in real-time.",
        },
        {
          icon: React.createElement(IconBrandTwitter, { size: 28 }),
          title: "Buzz on Twitter",
          description: "Trending hashtags & campaigns for food brands.",
        },
        {
          icon: React.createElement(IconBrandLinkedin, { size: 28 }),
          title: "LinkedIn for Fine Dining",
          description: "Corporate event & premium dining marketing.",
        },
      ],
      cta: {
        text: "Run My Social Ads",
        link: "#contact",
        icon: React.createElement(IconVideo, { size: 20 }),
      },
    },
    process: {
      title: "Our Other Ads Process for Restaurants & Cafés",
      subtitle: "FROM VIRAL CONTENT TO RESERVATIONS",
      className: "border-t border-border dark:border-gray-700",
      description:
        "We design, create, and optimize TikTok, YouTube, Snapchat & other ads to showcase your food and bring customers straight to your tables.",
      steps: [
        {
          id: 1,
          title: "Research & Strategy",
          description:
            "We identify trending formats, competitor campaigns, and audience behaviors across TikTok, YouTube, Snapchat, and Twitter.",
        },
        {
          id: 2,
          title: "Creative Production",
          description:
            "High-quality food videos, customer stories, chef interviews, and ambience shots designed for maximum engagement.",
        },
        {
          id: 3,
          title: "Campaign Setup",
          description:
            "We configure geo-targeting, demographics, and interests to reach foodies, families, and corporate clients in your city.",
        },
        {
          id: 4,
          title: "Optimization & Scaling",
          description:
            "Continuous A/B testing of creatives, copy, and formats to maximize ROI and minimize ad spend wastage.",
        },
        {
          id: 5,
          title: "Analytics & Reporting",
          description:
            "Transparent reporting on reach, engagement, walk-ins, and online orders driven by ad campaigns.",
        },
      ],
    },
    cta: {
      title: "Run Viral Ads for Your Restaurant",
      subtitle: "TIKTOK, YOUTUBE, SNAPCHAT & MORE",
      description:
        "Go beyond Google & Meta — capture attention where your food looks irresistible.",
    },
  },
};
