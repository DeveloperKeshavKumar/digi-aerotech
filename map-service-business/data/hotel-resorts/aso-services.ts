import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  IconBuildingSkyscraper,
  IconBrandBooking,
  IconMapPin,
  IconBed,
  IconStars,
  IconWorld,
  IconTrendingUp,
  IconUsers,
  IconArrowRight,
  IconDeviceMobile,
} from "@tabler/icons-react";

export const map: ServiceBusinessMap = {
  service: "aso-services",
  business: "hotel-resort",
  variants: {
    hero: "variant1",
    whyChooseUs: "variant2",
    process: "variant3",
    testimonials: "variant1",
  },
  data: {
    slug: "aso-services-hotel-resort",
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
            { text: "Why Hotels & Resorts", gradient: false },
            { text: "Need ASO Services", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "The hospitality industry is now mobile-first. Guests search, compare, and book hotels & resorts through apps. Without ASO, your hotel app risks staying invisible in crowded app stores.",
          painPoints: [
            "Low visibility on Play Store and App Store",
            "Fewer bookings through hotel apps",
            "Generic app titles and descriptions hurting discoverability",
            "Poor reviews lowering app credibility",
            "High competition from OTAs like Booking.com & Airbnb",
          ],
          solutionPoints: [
            "Optimized app titles, descriptions & keywords for maximum visibility",
            "Showcase amenities & unique experiences in metadata",
            "Boost installs, reviews, and user engagement organically",
            "Higher rankings in travel & hospitality app categories",
            "Increased direct bookings, reducing dependency on OTAs",
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Boost My Hotel App Visibility",
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
              question: "How does ASO help hotels & resorts?",
              answer:
                "ASO helps your hotel or resort app rank higher in app stores, making it easier for travelers to discover your property and book directly.",
              icon: React.createElement(IconBuildingSkyscraper, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "Can ASO reduce my dependency on OTAs?",
              answer:
                "Yes, by driving more direct bookings through your app, ASO reduces reliance on third-party OTAs and saves commission fees.",
              icon: React.createElement(IconBrandBooking, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "How long does it take to see results from ASO?",
              answer:
                "Most hotels & resorts see a noticeable boost in app ranking and downloads within 4–8 weeks of consistent ASO efforts.",
              icon: React.createElement(IconTrendingUp, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Get More Direct Bookings",
      headlineKeywords: ["ASO Services", "Hotels", "Resorts"],
      brandLine: [
        {
          text: "📱 Turn Your Hotel App Into a Direct Booking Engine",
          gradient: true,
          gradientClass: "from-orange-500 via-pink-500 to-red-600",
        },
      ],
      subheadline:
        "Our ASO services for hotels & resorts optimize your app to rank higher, attract more travelers, and drive direct bookings — reducing reliance on OTAs.",
      ctaButtons: [
        {
          icon: React.createElement(IconArrowRight, { size: 28 }),
          text: "Start My ASO Strategy",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(IconDeviceMobile, { size: 32 }),
          title: "50% More Visibility",
          description: "Hotels gain higher rankings in App Store & Play Store searches.",
        },
        {
          icon: React.createElement(IconMapPin, { size: 32 }),
          title: "Direct Bookings",
          description: "Encourage users to book directly via your hotel app.",
        },
        {
          icon: React.createElement(IconStars, { size: 32 }),
          title: "Better Ratings",
          description: "Boost reviews and ratings to win traveler trust instantly.",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Us for", gradient: false },
        { text: "Hotel & Resort ASO", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(IconWorld, { size: 28 }),
          title: "Travel-Focused Strategy",
          description: "We specialize in ASO strategies tailored for the hospitality industry.",
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "User Engagement Boost",
          description: "We optimize to not only get downloads but also retain loyal guests.",
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Proven ROI",
          description: "Hotels & resorts see more bookings and revenue through direct app installs.",
        },
      ],
      cta: {
        text: "Optimize My Hotel App",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our ASO Process for Hotels & Resorts",
      subtitle: "RESEARCH • OPTIMIZE • BOOST BOOKINGS",
      description:
        "We follow a proven ASO process to ensure your hotel or resort app dominates search results and drives direct bookings.",
      steps: [
        {
          id: 1,
          title: "App Audit & Keyword Research",
          description: "We analyze your hotel app and competitors to identify powerful keywords travelers are searching for.",
        },
        {
          id: 2,
          title: "Metadata Optimization",
          description: "Titles, descriptions, and tags are optimized to highlight your property, amenities, and unique experiences.",
        },
        {
          id: 3,
          title: "Visual Enhancement",
          description: "We create high-converting app icons, screenshots, and videos to attract more downloads.",
        },
        {
          id: 4,
          title: "Review & Ratings Boost",
          description: "We implement strategies to get more positive reviews, building trust among travelers.",
        },
        {
          id: 5,
          title: "Ongoing Tracking & Updates",
          description: "We track rankings, analyze data, and update strategies to keep your app growing long-term.",
        },
      ],
    },
    testimonials: {
      title: [
        { text: "Hotels & Resorts That", gradient: false },
        { text: "Increased Bookings via ASO", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      description:
        "From boutique hotels to luxury resorts, our ASO services have helped hospitality brands reduce OTA dependency and increase direct bookings.",
      testimonials: [
        {
          id: "1",
          message:
            "Our hotel app downloads grew by 60% in three months. Now, 40% of our bookings come directly through our app.",
          highlight: "Direct Bookings",
          stars: 5,
          name: "Rakesh Patel",
          designation: "Owner",
          company: "Seaside Luxury Resort",
        },
        {
          id: "2",
          message:
            "Thanks to ASO, our app ranks higher than competitors in our city. We now get consistent new bookings every week.",
          highlight: "App Store Ranking",
          stars: 5,
          name: "Ananya Gupta",
          designation: "Manager",
          company: "Urban Stay Hotels",
        },
      ],
    },
    cta: {
      title: "Make Your Hotel App the #1 Choice for Travelers",
      subtitle: "VISIBILITY • BOOKINGS • GROWTH",
      description:
        "Don’t let your hotel or resort app stay hidden. With our ASO services, you’ll rank higher, get more downloads, and drive more direct bookings — all while saving on OTA fees.",
    },
  },
};
