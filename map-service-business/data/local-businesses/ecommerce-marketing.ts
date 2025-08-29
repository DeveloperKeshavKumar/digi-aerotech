import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  IconShoppingBag,
  IconTruckDelivery,
  IconCreditCard,
  IconUsers,
  IconArrowRight,
  IconTrendingUp,
  IconWorld,
  IconDeviceMobile,
  IconBuildingStore,
  IconChartLine,
} from "@tabler/icons-react";

export const map: ServiceBusinessMap = {
  service: "ecommerce-marketing",
  business: "local-business",
  variants: {
    hero: "variant2",
    whyChooseUs: "variant3",
    process: "variant1",
    testimonials: "variant2",
  },
  data: {
    slug: "ecommerce-marketing-local-business",
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
            { text: "Why Local Businesses", gradient: false },
            { text: "Need E-commerce Marketing", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "Local businesses can no longer rely only on walk-in customers. Today’s shoppers browse, compare, and order online. Without e-commerce marketing, your products stay invisible to digital buyers.",
          painPoints: [
            "Difficulty competing with big online brands",
            "Low visibility of local products on search & social platforms",
            "No clear strategy for online customer acquisition",
            "Abandoned carts and poor repeat customer rates",
            "Struggling to integrate offline & online sales",
          ],
          solutionPoints: [
            "Boost product visibility with SEO & PPC campaigns",
            "Convert browsers into buyers with optimized listings",
            "Retarget customers with abandoned cart recovery campaigns",
            "Run hyperlocal campaigns to attract nearby online buyers",
            "Increase repeat purchases with loyalty & retention strategies",
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Grow My Online Sales",
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
              question: "Why do local businesses need e-commerce marketing?",
              answer:
                "Because more customers are shopping online. E-commerce marketing ensures your local products are visible, competitive, and easy to purchase.",
              icon: React.createElement(IconWorld, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "Can you integrate offline sales with online marketing?",
              answer:
                "Yes, we help sync your offline inventory with online platforms while running digital campaigns for maximum ROI.",
              icon: React.createElement(IconBuildingStore, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "Do you provide solutions for cart abandonment?",
              answer:
                "Absolutely. We create retargeting and email recovery campaigns to convert abandoned carts into sales.",
              icon: React.createElement(IconCreditCard, { size: 22 }),
            },
            {
              id: "faq-4",
              question: "Which platforms do you focus on?",
              answer:
                "We cover all major platforms including Shopify, WooCommerce, Amazon, Flipkart, Google Shopping, and social commerce.",
              icon: React.createElement(IconTrendingUp, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Boost",
      headlineKeywords: ["Sales", "Visibility", "Local E-commerce"],
      brandLine: [
        {
          text: "📦 E-commerce Marketing Services for Local Businesses",
          gradient: true,
          gradientClass: "from-orange-500 via-pink-500 to-red-600",
        },
      ],
      subheadline:
        "We help local shops & service providers turn into successful online sellers by optimizing their products, driving traffic, and maximizing conversions.",
      ctaButtons: [
        {
          icon: React.createElement(IconArrowRight, { size: 28 }),
          text: "Start My E-commerce Growth",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(IconShoppingBag, { size: 32 }),
          title: "3X More Sales",
          description: "Local products amplified with digital marketing strategies",
        },
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "Loyal Customers",
          description: "Retention campaigns that keep buyers coming back",
        },
        {
          icon: React.createElement(IconDeviceMobile, { size: 32 }),
          title: "Omnichannel Growth",
          description: "Seamless presence across e-commerce & social platforms",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Us for", gradient: false },
        { text: "Local E-commerce Marketing?", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(IconTruckDelivery, { size: 28 }),
          title: "Hyperlocal Targeting",
          description: "We focus on attracting nearby customers ready to buy.",
        },
        {
          icon: React.createElement(IconChartLine, { size: 28 }),
          title: "Conversion-Driven",
          description: "Our strategies maximize ROI through data-driven campaigns.",
        },
        {
          icon: React.createElement(IconCreditCard, { size: 28 }),
          title: "Seamless Checkout Experience",
          description: "We ensure smooth transactions to reduce drop-offs.",
        },
      ],
      cta: {
        text: "Grow My Local Business Online",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our E-commerce Marketing Process for Local Businesses",
      subtitle: "VISIBILITY • SALES • LOYALTY",
      className: "border-t border-border dark:border-gray-700",
      description:
        "Our structured e-commerce marketing process is designed to give local businesses an edge online and build long-term customer relationships.",
      steps: [
        {
          id: 1,
          title: "E-commerce Audit",
          description: "We analyze your online store, listings, and performance to identify gaps.",
        },
        {
          id: 2,
          title: "Product Optimization",
          description: "We optimize product titles, descriptions, images, and keywords for higher search visibility.",
        },
        {
          id: 3,
          title: "Traffic Generation",
          description: "We drive targeted traffic through SEO, Google Shopping Ads, and social media campaigns.",
        },
        {
          id: 4,
          title: "Conversion Optimization",
          description: "We improve the buying journey with smoother checkout and cart recovery strategies.",
        },
        {
          id: 5,
          title: "Retention & Loyalty",
          description: "We set up email, SMS, and loyalty campaigns to increase repeat purchases.",
        },
      ],
    },
    testimonials: {
      title: [
        { text: "Local Businesses", gradient: false },
        { text: "Thriving with Our E-commerce Marketing", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      description:
        "From retail shops to service providers, our e-commerce strategies have helped local businesses scale sales, improve retention, and dominate digital marketplaces.",
      testimonials: [
        {
          id: "1",
          message:
            "Our bakery started selling online, and their strategy helped us triple our sales in just 3 months.",
          highlight: "3X Sales Growth",
          stars: 5,
          name: "Riya Sharma",
          designation: "Owner",
          company: "Sweet Bakes",
        },
        {
          id: "2",
          message:
            "Their e-commerce marketing helped our boutique compete online and get repeat customers effortlessly.",
          highlight: "Boosted Online Visibility",
          stars: 5,
          name: "Kunal Mehta",
          designation: "Founder",
          company: "Urban Threads",
        },
      ],
    },
    cta: {
      title: "Turn Your Local Business Into an Online Brand",
      subtitle: "SELL MORE • REACH MORE • RETAIN MORE",
      description:
        "Don’t let your business stay limited to offline sales. With our e-commerce marketing services, you can reach more customers, increase sales, and grow your local business into a strong digital brand.",
    },
  },
};
