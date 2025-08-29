import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  IconMapPin,
  IconBed,
  IconBuildingSkyscraper,
  IconStars,
  IconUsers,
  IconTrendingUp,
  IconArrowRight,
  IconWorld,
  IconPhoneCall,
  IconCalendarEvent,
} from "@tabler/icons-react";

export const map: ServiceBusinessMap = {
  service: "gmb-services",
  business: "hotel-resort",
  variants: {
    hero: "variant2",
    whyChooseUs: "variant3",
    process: "variant1",
    testimonials: "variant2",
  },
  data: {
    slug: "gmb-services-hotel-resort",
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
            { text: "Need GMB Optimization", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "More than 80% of travelers search for hotels & resorts directly on Google Maps before booking. If your property isn’t optimized, you’re losing direct guests to competitors.",
          painPoints: [
            "Not appearing in 'Hotels near me' searches",
            "Few Google reviews reducing trust",
            "Incomplete or outdated business profile",
            "Low ranking in Google Maps results",
            "Relying too much on OTAs instead of direct guests",
          ],
          solutionPoints: [
            "Optimize hotel profiles with complete, attractive information",
            "Boost rankings in Google Maps local search",
            "Encourage and manage positive guest reviews",
            "Highlight amenities, pricing, and booking options",
            "Drive direct calls, bookings, and reservations via GMB",
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Optimize My GMB Profile",
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
              question: "Why is GMB important for hotels & resorts?",
              answer:
                "Most travelers search on Google Maps for hotels and book the ones ranking at the top. GMB optimization ensures your hotel shows up first in these searches.",
              icon: React.createElement(IconMapPin, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "Can GMB help reduce OTA dependency?",
              answer:
                "Yes. With a strong GMB profile, guests can directly call, message, or book through your listing, reducing reliance on commission-based OTAs.",
              icon: React.createElement(IconPhoneCall, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "How long does it take to rank in Google Maps?",
              answer:
                "Hotels & resorts usually start seeing improved visibility and calls within 4–6 weeks of optimization.",
              icon: React.createElement(IconTrendingUp, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Rank Higher on Google Maps",
      headlineKeywords: ["GMB Services", "Hotels", "Resorts"],
      brandLine: [
        {
          text: "📍 Turn Local Searches Into Direct Hotel Bookings",
          gradient: true,
          gradientClass: "from-orange-500 via-pink-500 to-red-600",
        },
      ],
      subheadline:
        "Our GMB services for hotels & resorts ensure you rank at the top of Google Maps, attract more direct guests, and build trust with positive reviews.",
      ctaButtons: [
        {
          icon: React.createElement(IconArrowRight, { size: 28 }),
          text: "Boost My GMB Ranking",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(IconMapPin, { size: 32 }),
          title: "70% More Visibility",
          description: "Hotels with optimized GMB rank higher in Google Maps searches.",
        },
        {
          icon: React.createElement(IconStars, { size: 32 }),
          title: "Better Reviews",
          description: "We help generate more positive reviews to win traveler trust.",
        },
        {
          icon: React.createElement(IconCalendarEvent, { size: 32 }),
          title: "Direct Bookings",
          description: "Guests can call, book, or reserve directly from your profile.",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Our", gradient: false },
        { text: "GMB Services for Hotels", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(IconBuildingSkyscraper, { size: 28 }),
          title: "Hospitality Expertise",
          description: "We specialize in ranking hotels & resorts higher in local search.",
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "Guest-Centric Optimization",
          description: "We make your profile attractive and informative to travelers.",
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Proven Results",
          description: "Hotels consistently gain more direct bookings after optimization.",
        },
      ],
      cta: {
        text: "Optimize My Hotel Profile",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our GMB Process for Hotels & Resorts",
      subtitle: "LIST • OPTIMIZE • RANK HIGHER",
      description:
        "We use a step-by-step approach to rank your hotel or resort at the top of Google Maps search results.",
      steps: [
        {
          id: 1,
          title: "Profile Audit",
          description: "We analyze your existing GMB profile for completeness and accuracy.",
        },
        {
          id: 2,
          title: "Optimization",
          description: "We optimize descriptions, categories, amenities, photos, and booking links.",
        },
        {
          id: 3,
          title: "Review Management",
          description: "We implement strategies to gain positive reviews and handle feedback professionally.",
        },
        {
          id: 4,
          title: "Local Ranking Boost",
          description: "Through keyword & map optimization, we ensure you appear in 'Hotels near me' searches.",
        },
        {
          id: 5,
          title: "Ongoing Monitoring",
          description: "We track rankings, calls, and bookings to ensure long-term success.",
        },
      ],
    },
    testimonials: {
      title: [
        { text: "Hotels & Resorts That", gradient: false },
        { text: "Rank #1 on Google Maps", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      description:
        "Our GMB optimization has helped boutique hotels, luxury resorts, and budget stays attract more direct bookings from Google Maps.",
      testimonials: [
        {
          id: "1",
          message:
            "Within 2 months, our hotel ranked in the top 3 on Google Maps. Direct bookings increased by 45%.",
          highlight: "Top 3 Ranking",
          stars: 5,
          name: "Rajesh Sharma",
          designation: "Owner",
          company: "Blue Lagoon Resort",
        },
        {
          id: "2",
          message:
            "We stopped depending on OTAs for most bookings. Now, 60% of our guests come directly through Google Maps.",
          highlight: "Direct Guests",
          stars: 5,
          name: "Pooja Mehra",
          designation: "Manager",
          company: "Urban Escape Hotel",
        },
      ],
    },
    cta: {
      title: "Turn Google Maps Into Your #1 Booking Channel",
      subtitle: "RANK HIGHER • ATTRACT GUESTS • GROW BOOKINGS",
      description:
        "With our GMB optimization services for hotels & resorts, you’ll dominate local search, attract more travelers, and reduce OTA commission costs.",
    },
  },
};
