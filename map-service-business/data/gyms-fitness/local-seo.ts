import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  MapPin,
  Map,
  Users,
  Search,
  Target,
  Calendar,
  ArrowRight,
  Star,
  TrendingUp,
  Activity,
} from "lucide-react";

export const map: ServiceBusinessMap = {
  service: "local-seo",
  business: "gyms-fitness",
  variants: {
    hero: "variant2",
    whyChooseUs: "variant1",
    process: "variant3",
  },
  data: {
    slug: "local-seo-gyms-fitness",
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
            { text: "Struggling to Get Local Gym Members?", gradient: false },
            { text: "Dominate Local Searches with Local SEO", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "Many gyms and fitness studios fail to appear in local searches, losing potential members to competitors nearby. Visibility on Google Maps and local searches is critical.",
          painPoints: [
            "Not ranking for 'gym near me' or 'fitness studio in [city]'",
            "Low visibility in Google Maps and local directories",
            "Few reviews & low online reputation",
            "Lack of optimized location-specific landing pages",
            "Difficulty attracting nearby clients consistently",
          ],
          solutionPoints: [
            "Optimize Google My Business profiles for maximum visibility",
            "Local citations, listings, and schema markup",
            "Generate & manage positive member reviews",
            "Targeted location-specific SEO campaigns",
            "Track and optimize local rankings to increase walk-ins",
          ],
          cta: {
            icon: React.createElement(ArrowRight, { size: 20 }),
            text: "Get Found by Local Fitness Enthusiasts Today",
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
              question: "How can local SEO help my gym attract members?",
              answer:
                "Local SEO ensures your gym appears in Google Maps and local searches, connecting you with fitness enthusiasts actively looking for nearby gyms.",
              icon: React.createElement(MapPin, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "Do you help manage reviews and ratings?",
              answer:
                "Yes! We implement strategies to generate positive reviews and respond effectively to improve your online reputation.",
              icon: React.createElement(Star, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "Can small studios benefit from local SEO?",
              answer:
                "Absolutely. Our localized strategies help even small gyms appear at the top of local search results and attract members consistently.",
              icon: React.createElement(Users, { size: 22 }),
            },
            {
              id: "faq-4",
              question: "How long before I see results?",
              answer:
                "You’ll start seeing improvements in local rankings and search visibility within a few weeks, with continuous growth over months.",
              icon: React.createElement(TrendingUp, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Want to Rank Your Gym",
      headlineKeywords: [
        "On Google Maps?",
        "In Local Searches?",
        "Near Fitness Enthusiasts?",
        "360° Local SEO for Gyms?",
      ],
      brandLine: [
        {
          text: "🏋️‍♂️ Boost Local Foot Traffic & Memberships with Local SEO",
          gradient: true,
          gradientClass: "from-orange-500 via-pink-500 to-red-600",
        },
      ],
      subheadline:
        "We help gyms, fitness studios, and personal trainers dominate local searches, attract nearby clients, and increase memberships with proven Local SEO strategies.",
      ctaButtons: [
        {
          icon: React.createElement(Search, { size: 28 }),
          text: "Book Free Local SEO Consultation",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(Map, { size: 32 }),
          title: "100+ Gyms Optimized",
          description: "Improved local rankings and visibility",
        },
        {
          icon: React.createElement(TrendingUp, { size: 32 }),
          title: "3X Local Leads",
          description: "Increase in membership inquiries from nearby clients",
        },
        {
          icon: React.createElement(Calendar, { size: 32 }),
          title: "50+ Locations Covered",
          description: "Successful campaigns across multiple cities",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Fitness Studios Choose Us for", gradient: false },
        { text: "Local SEO", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(MapPin, { size: 28 }),
          title: "Google Maps Optimization",
          description: "Rank on maps & local pack for maximum visibility.",
        },
        {
          icon: React.createElement(Target, { size: 28 }),
          title: "Location-Specific SEO",
          description: "Target nearby prospects searching for gyms & fitness.",
        },
        {
          icon: React.createElement(Users, { size: 28 }),
          title: "Reputation Management",
          description: "Generate & manage positive member reviews online.",
        },
      ],
      cta: {
        text: "Get Local SEO for Your Gym Now",
        link: "#contact",
        icon: React.createElement(ArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our Local SEO Process for Gyms & Fitness",
      subtitle: "OPTIMIZE • ENGAGE • CONVERT",
      description:
        "We follow a structured approach to ensure your gym dominates local searches and attracts high-quality leads nearby.",
      steps: [
        {
          id: 1,
          title: "Local Keyword Research",
          description:
            "Identify search terms your local audience is using to find gyms, fitness classes, and personal training services.",
        },
        {
          id: 2,
          title: "Google My Business Optimization",
          description:
            "Complete setup & optimization of your GMB profile, including photos, services, hours, and location details.",
        },
        {
          id: 3,
          title: "On-Page SEO for Local Pages",
          description:
            "Optimize your website’s local landing pages for keywords, meta tags, schema, and NAP consistency.",
        },
        {
          id: 4,
          title: "Citations & Directory Listings",
          description:
            "Submit and optimize your business on local directories to improve credibility and search rankings.",
        },
        {
          id: 5,
          title: "Review Generation & Management",
          description:
            "Implement systems to encourage satisfied members to leave reviews, enhancing your online reputation.",
        },
        {
          id: 6,
          title: "Monitoring & Reporting",
          description:
            "Track rankings, traffic, and lead conversions to continuously refine and improve your local SEO strategy.",
        },
      ],
    },
    cta: {
      title: "Ready to Dominate Local Searches for Your Gym?",
      subtitle: "GET FOUND BY LOCAL FITNESS ENTHUSIASTS",
      description:
        "Book a free consultation today and watch your gym or fitness studio attract consistent local leads with our proven Local SEO strategies.",
    },
  },
};
