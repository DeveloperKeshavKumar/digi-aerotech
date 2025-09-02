import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  IconBuildingSkyscraper,
  IconHome,
  IconUsers,
  IconAd,
  IconTarget,
  IconDeviceMobile,
  IconTrendingUp,
  IconPhoneCall,
  IconArrowRight,
  IconMapPin,
} from "@tabler/icons-react";

export const map: ServiceBusinessMap = {
  service: "meta-ads",
  business: "real-estate",
  variants: {
    hero: "variant1",
    whyChooseUs: "variant2",
    process: "variant3",
  },
  data: {
    slug: "meta-ads-real-estate",
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
            { text: "Fail with Meta Ads", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline: "Many real estate agencies spend on Facebook & Instagram Ads but fail to generate actual leads because campaigns aren’t structured for conversions.",
          painPoints: [
            "Boosting posts without strategy",
            "Targeting too broad or wrong audience",
            "No lead capture landing pages",
            "High ad spend but low ROI",
            "Ignoring retargeting opportunities",
          ],
          solutionPoints: [
            "Laser-focused geo & lifestyle targeting",
            "High-converting landing pages for property inquiries",
            "Compelling creatives & video ads",
            "Smart retargeting of website visitors",
            "Data-driven ad scaling for maximum ROI",
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Run High-ROI Meta Ads",
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
              question: "Do Meta Ads work for real estate?",
              answer: "Yes! With precise geo-targeting and lifestyle filters, Meta Ads bring in qualified buyers & renters directly to your property listings.",
              icon: React.createElement(IconAd, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "What type of ads work best?",
              answer: "Carousel ads for multiple properties, video tours for high engagement, and lead ads for direct inquiries perform best.",
              icon: React.createElement(IconDeviceMobile, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "Can you guarantee leads?",
              answer: "We create campaigns optimized for conversions. While results vary, our strategies consistently deliver high-quality property inquiries.",
              icon: React.createElement(IconTarget, { size: 22 }),
            },
            {
              id: "faq-4",
              question: "How much should I spend on ads?",
              answer: "Even with a small budget, targeted Meta Ads can generate quality leads. Scaling is done once ROI is proven.",
              icon: React.createElement(IconTrendingUp, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Convert Clicks into Property Inquiries",
      headlineKeywords: [
        "Real Estate Meta Ads",
        "Facebook Lead Campaigns",
        "Instagram Ads",
        "Property Buyer Targeting",
        "Lead Generation Ads",
      ],
      brandLine: [
        { text: "🏡 More Views, More Site Visits, More Sales", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      subheadline: "We design high-converting Facebook & Instagram Ads for real estate agencies that attract buyers, sellers, and renters while maximizing ROI.",
      ctaButtons: [
        { icon: React.createElement(IconPhoneCall, { size: 28 }), text: "Launch Meta Ads Today", link: "/contact" },
        { icon: React.createElement(IconMapPin, { size: 28 }), text: "Book Free Consultation", link: "tel:+918607119872", variant: "secondary" },
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "5X More Inquiries",
          description: "From Facebook & Insta campaigns",
        },
        {
          icon: React.createElement(IconBuildingSkyscraper, { size: 32 }),
          title: "200+ Projects",
          description: "Marketed with Meta Ads",
        },
        {
          icon: React.createElement(IconHome, { size: 32 }),
          title: "3X Faster Sales",
          description: "Compared to traditional ads",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Digi Aerotech for", gradient: false },
        { text: "Real Estate Meta Ads?", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(IconAd, { size: 28 }),
          title: "Conversion-Focused Ads",
          description: "We build campaigns designed to capture leads, not just clicks.",
        },
        {
          icon: React.createElement(IconTarget, { size: 28 }),
          title: "Advanced Audience Targeting",
          description: "Reach only serious buyers & renters in your city with precise targeting.",
        },
        {
          icon: React.createElement(IconDeviceMobile, { size: 28 }),
          title: "High-Impact Creatives",
          description: "Eye-catching property images, reels & video ads that drive engagement.",
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Proven ROI Growth",
          description: "Our ad campaigns consistently deliver 3–5x ROI for real estate agencies.",
        },
      ],
      cta: {
        text: "Start Generating Property Leads",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our Meta Ads Process for Real Estate",
      subtitle: "TURN AD SPEND INTO PROPERTY SALES",
      className: "border-t border-border dark:border-gray-700",
      description: "We follow a structured Meta Ads process to generate consistent real estate leads while maximizing ad ROI.",
      steps: [
        {
          id: 1,
          title: "Market Research & Audience Setup",
          description: "We analyze local property demand, demographics, and competitor ads to identify the right audience.",
        },
        {
          id: 2,
          title: "Creative Ad Design",
          description: "We craft ad creatives including carousels, reels, and video walkthroughs that highlight property features.",
        },
        {
          id: 3,
          title: "Lead-Capturing Landing Pages",
          description: "Dedicated, mobile-optimized landing pages with inquiry forms boost lead capture by 40%+.",
        },
        {
          id: 4,
          title: "Geo & Lifestyle Targeting",
          description: "We target high-intent audiences based on income, location, and interests like property investment & relocation.",
        },
        {
          id: 5,
          title: "Retargeting & Scaling",
          description: "We retarget website visitors & ad engagers, then scale winning campaigns for maximum ROI.",
        },
        {
          id: 6,
          title: "Tracking & Reporting",
          description: "We provide transparent reports on cost per lead, ad performance, and booked site visits.",
        },
      ],
    },
    cta: {
      title: "Want to Sell More Properties with Meta Ads?",
      subtitle: "FACEBOOK & INSTAGRAM CAMPAIGNS BUILT FOR REAL ESTATE SUCCESS",
      description: "Let us run high-converting Meta Ads that bring you qualified property buyers & renters instantly.",
    },
  },
};
