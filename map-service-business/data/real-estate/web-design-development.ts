import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  IconHome,
  IconBuildingSkyscraper,
  IconDeviceDesktop,
  IconPhoneCall,
  IconSearch,
  IconMapPin,
  IconUsers,
  IconTrendingUp,
  IconArrowRight,
  IconLayoutDashboard,
  IconCamera,
} from "@tabler/icons-react";

export const map: ServiceBusinessMap = {
  service: "web-design-development",
  business: "real-estate",
  variants: {
    hero: "variant2",
    whyChooseUs: "variant1",
    process: "variant3",
    testimonials: "variant1",
  },
  data: {
    slug: "web-design-development-real-estate",
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
            { text: "Why Real Estate Businesses", gradient: false },
            { text: "Need Modern Websites", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "Your website is the first impression for property buyers & investors. If it’s outdated, slow, or hard to navigate, you lose leads instantly.",
          painPoints: [
            "Outdated property websites with poor user experience",
            "No property filters or advanced search options",
            "Missing Google Maps integration for projects",
            "No virtual tours or high-quality galleries",
            "Websites not optimized for mobile or SEO",
          ],
          solutionPoints: [
            "Modern, mobile-friendly property websites",
            "Advanced search filters & property management systems",
            "Google Maps integration for easy location discovery",
            "Virtual tours, image galleries & video showcases",
            "SEO-friendly design for higher visibility",
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Get a Real Estate Website That Sells",
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
              question: "Why do real estate businesses need custom websites?",
              answer:
                "A modern real estate website acts as your digital showroom, attracting buyers, showcasing properties, and capturing leads 24/7.",
              icon: React.createElement(IconDeviceDesktop, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "Do you build property listing websites?",
              answer:
                "Yes, we design advanced property listing platforms with search filters, maps, and detailed property pages optimized for conversions.",
              icon: React.createElement(IconSearch, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "Can you integrate virtual tours & video walkthroughs?",
              answer:
                "Absolutely. We integrate 360° virtual tours, drone videos, and high-quality galleries for immersive property experiences.",
              icon: React.createElement(IconCamera, { size: 22 }),
            },
            {
              id: "faq-4",
              question: "Are your websites mobile-friendly?",
              answer:
                "Yes, all our websites are fully responsive, ensuring smooth browsing across desktops, tablets, and smartphones.",
              icon: React.createElement(IconDeviceDesktop, { size: 22 }),
            },
            {
              id: "faq-5",
              question: "Do you also optimize websites for SEO?",
              answer:
                "Yes, we design websites with SEO-first architecture so your properties rank higher on Google & Maps.",
              icon: React.createElement(IconTrendingUp, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Build",
      headlineKeywords: [
        "Property Websites",
        "That Sell Faster",
        "With Virtual Tours",
        "With Smart Filters",
        "Optimized for SEO",
      ],
      brandLine: [
        {
          text: "🏡 Your Digital Showroom for Properties",
          gradient: false,
        },
      ],
      subheadline:
        "We design & develop high-converting real estate websites with property listings, maps, virtual tours & SEO optimization to drive sales and inquiries.",
      ctaButtons: [
        {
          icon: React.createElement(IconArrowRight, { size: 28 }),
          text: "Get Your Real Estate Website",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(IconHome, { size: 32 }),
          title: "500+ Properties",
          description: "Showcased online",
        },
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "10,000+ Leads",
          description: "Generated via real estate websites",
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "300% More Inquiries",
          description: "With modern design & SEO",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Us for", gradient: false },
        { text: "Real Estate Website Development", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(IconLayoutDashboard, { size: 28 }),
          title: "Custom Property Platforms",
          description: "We build websites with property management systems tailored for brokers, builders & agencies.",
        },
        {
          icon: React.createElement(IconMapPin, { size: 28 }),
          title: "Location-Focused Design",
          description: "Google Maps integration & geo-targeting for better property discovery.",
        },
        {
          icon: React.createElement(IconCamera, { size: 28 }),
          title: "Virtual Tours Integration",
          description: "Immersive 360° property tours & media galleries that drive buyer trust.",
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "SEO-Ready Architecture",
          description: "Every website we build is designed with SEO-first principles for maximum visibility.",
        },
      ],
      cta: {
        text: "Launch Your Property Website Today",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our Real Estate Website Development Process",
      subtitle: "FROM DESIGN TO LEAD GENERATION",
      className: "border-t border-border dark:border-gray-700",
      description:
        "We design websites that do more than look great – they generate leads, showcase properties, and help close sales.",
      steps: [
        {
          id: 1,
          title: "Discovery & Strategy",
          description: "Understanding your business, property types, and buyer personas to plan the perfect site.",
        },
        {
          id: 2,
          title: "Design & Prototyping",
          description: "Creating UI/UX wireframes with property-focused layouts, intuitive navigation & lead capture elements.",
        },
        {
          id: 3,
          title: "Development",
          description: "Building robust real estate websites with listings, filters, maps, and mobile optimization.",
        },
        {
          id: 4,
          title: "Content & Media",
          description: "Adding SEO-rich property descriptions, videos, images & 360° tours for better engagement.",
        },
        {
          id: 5,
          title: "SEO & Testing",
          description: "Optimizing the site for Google rankings, speed, and mobile performance.",
        },
        {
          id: 6,
          title: "Launch & Support",
          description: "Deploying your site with ongoing support, maintenance, and lead-tracking setup.",
        },
      ],
    },
    testimonials: {
      title: [
        { text: "Real Estate Brands", gradient: false },
        { text: "That Trust Our Websites", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      description:
        "From property listing portals to agency websites, we’ve built digital platforms that drive visibility & sales.",
      testimonials: [
        {
          id: "1",
          message:
            "Our new website with smart filters and virtual tours helped us close 3x more deals in 6 months.",
          highlight: "3x more deals",
          stars: 5,
          name: "Amit Sharma",
          designation: "CEO",
          company: "Dream Homes Realty",
        },
        {
          id: "2",
          message:
            "The property website they built was fast, SEO-friendly, and generated high-quality leads from Day 1.",
          highlight: "High-quality leads",
          stars: 5,
          name: "Sonal Mehra",
          designation: "Marketing Head",
          company: "Skyline Developers",
        },
      ],
    },
    cta: {
      title: "Ready to Sell More Properties Online?",
      subtitle: "BUILD A REAL ESTATE WEBSITE THAT CONVERTS",
      description:
        "We design high-performing websites with property listings, maps & SEO to bring in real buyers & renters.",
    },
  },
};
