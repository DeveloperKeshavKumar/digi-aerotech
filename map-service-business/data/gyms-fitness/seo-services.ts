import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  Search,
  TrendingUp,
  Users,
  Target,
  ShieldCheck,
  Activity,
  ArrowRight,
  BarChart,
  Compass,
} from "lucide-react";

export const map: ServiceBusinessMap = {
  service: "seo-services",
  business: "gyms-fitness",
  variants: {
    hero: "variant2",
    whyChooseUs: "variant1",
    process: "variant3",
    testimonials: "variant1",
  },
  data: {
    slug: "seo-services-gyms-fitness",
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
            { text: "Struggling to Rank Your Gym Online?", gradient: false },
            { text: "Get More Members with SEO", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "Most gyms fail to appear in top searches. Without a strong SEO strategy, potential members find competitors instead of your studio.",
          painPoints: [
            "Gym website not ranking on Google",
            "Low organic traffic from local searches",
            "Limited visibility for class-specific keywords",
            "Competitors dominate local maps & search",
            "Difficulty converting website visitors into members",
          ],
          solutionPoints: [
            "Optimize your website for local & national gym keywords",
            "Improve Google Maps visibility and local citations",
            "Create content that attracts fitness enthusiasts and converts",
            "Technical SEO to speed up site, enhance UX, and boost rankings",
            "Monitor & refine campaigns for maximum leads and ROI",
          ],
          cta: {
            icon: React.createElement(ArrowRight, { size: 20 }),
            text: "Boost Your Gym Rankings Today",
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
              question: "Can SEO bring more local members to my gym?",
              answer:
                "Yes, we optimize your website and Google Maps listings to attract fitness enthusiasts in your area, driving foot traffic and memberships.",
              icon: React.createElement(Compass, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "Do you optimize for multiple gym locations?",
              answer:
                "Absolutely. We create location-specific pages and SEO strategies to rank each gym branch independently.",
              icon: React.createElement(Target, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "How long does it take to see results?",
              answer:
                "SEO is a long-term strategy; gyms typically see noticeable traffic and membership growth within 3–6 months.",
              icon: React.createElement(TrendingUp, { size: 22 }),
            },
            {
              id: "faq-4",
              question: "Will my competitors outrank us?",
              answer:
                "We perform competitive analysis and implement strategies to help your gym outrank competitors in local and national searches.",
              icon: React.createElement(ShieldCheck, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Want to Rank Your Gym Higher on Google?",
      headlineKeywords: [
        "Get More Members with SEO",
        "Boost Your Fitness Studio Visibility",
        "Local Gym SEO That Converts",
        "Rank on Google Maps & Local Searches",
      ],
      brandLine: [
        { text: "💪 Maximize Gym Memberships with Proven SEO Strategies", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      subheadline:
        "We help gyms & fitness studios rank higher, attract more local members, and increase revenue through data-driven SEO strategies tailored to the fitness industry.",
      ctaButtons: [
        {
          icon: React.createElement(BarChart, { size: 28 }),
          text: "Schedule Free SEO Audit",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(Users, { size: 32 }),
          title: "3X More Leads",
          description: "Gyms see an average 3X increase in membership inquiries after SEO optimization",
        },
        {
          icon: React.createElement(TrendingUp, { size: 32 }),
          title: "Top Local Rankings",
          description: "Get found on Google Maps and organic search for your gym location",
        },
        {
          icon: React.createElement(Activity, { size: 32 }),
          title: "4.9/5 Client Satisfaction",
          description: "Fitness studios trust us to grow memberships via SEO",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Our", gradient: false },
        { text: "Gym SEO Services?", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(Search, { size: 28 }),
          title: "Expert Gym SEO Strategies",
          description: "We specialize in fitness & gym industry SEO to target the right audience and increase conversions.",
        },
        {
          icon: React.createElement(TrendingUp, { size: 28 }),
          title: "Local SEO Domination",
          description: "Appear on top of local searches and Google Maps to attract nearby members.",
        },
        {
          icon: React.createElement(ShieldCheck, { size: 28 }),
          title: "Data-Driven Optimization",
          description: "We continuously monitor, optimize, and refine strategies for maximum results and ROI.",
        },
      ],
      cta: {
        text: "Grow Your Gym Memberships with SEO",
        link: "#contact",
        icon: React.createElement(ArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our SEO Process for Gyms & Fitness Studios",
      subtitle: "ANALYZE • OPTIMIZE • CONVERT • SCALE",
      description:
        "We implement a complete SEO strategy for gyms, ensuring higher rankings, increased local visibility, and more membership signups.",
      steps: [
        {
          id: 1,
          title: "Website & Competitor Audit",
          description: "Analyze your current website, competitors, and keyword opportunities in the fitness niche.",
        },
        {
          id: 2,
          title: "On-Page Optimization",
          description: "Optimize your gym website, meta tags, headers, images, and internal linking for target keywords.",
        },
        {
          id: 3,
          title: "Content Creation",
          description: "Produce engaging blog posts, class schedules, fitness tips, and transformation stories that attract potential members.",
        },
        {
          id: 4,
          title: "Local SEO & Maps Optimization",
          description: "Optimize Google My Business, local citations, and maps listings to dominate local search results.",
        },
        {
          id: 5,
          title: "Link Building & Authority",
          description: "Acquire high-quality backlinks from fitness blogs, health websites, and local directories to boost domain authority.",
        },
        {
          id: 6,
          title: "Monitoring & Continuous Improvement",
          description: "Track rankings, leads, and traffic; continuously refine strategies to maintain top positions.",
        },
      ],
    },
    testimonials: {
      title: [
        { text: "Gyms Who ", gradient: false },
        { text: "Ranked #1 with Our SEO", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      description:
        "See how gyms & fitness studios improved visibility, attracted members, and increased revenue with our SEO services.",
      testimonials: [
        {
          id: "1",
          message:
            "After optimizing our website and Google Maps listings, our local gym saw a 4X increase in new members within 4 months.",
          highlight: "4X increase in new members",
          stars: 5,
          name: "Rohan Mehra",
          designation: "Owner",
          company: "PowerHouse Gym",
        },
        {
          id: "2",
          message:
            "The SEO strategy brought us top rankings for all our classes and boosted membership signups significantly.",
          highlight: "top rankings for all classes",
          stars: 5,
          name: "Simran Kaur",
          designation: "Founder",
          company: "Flex Fitness Studio",
        },
      ],
    },
    cta: {
      title: "Ready to Rank Your Gym #1 on Google?",
      subtitle: "INCREASE TRAFFIC • GET MORE MEMBERS • BOOST REVENUE",
      description:
        "Book a free SEO consultation and see how our proven strategies can grow your fitness business and attract more local members.",
    },
  },
};
