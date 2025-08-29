import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  IconDeviceMobile,
  IconHeartbeat,
  IconStethoscope,
  IconPill,
  IconBuildingHospital,
  IconTruckDelivery,
  IconArrowRight,
  IconUsersGroup,
  IconChartPie2,
  IconPrescription,
} from "@tabler/icons-react";

export const map: ServiceBusinessMap = {
  service: "mobile-apps-development",
  business: "pharma-companies",
  variants: {
    hero: "variant1",
    whyChooseUs: "variant2",
    process: "variant3",
    testimonials: "variant1",
  },
  data: {
    slug: "mobile-apps-development-pharma-companies",
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
            { text: "Why Pharma Businesses", gradient: false },
            { text: "Need Mobile Apps", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "Pharma companies today face challenges in reaching customers, managing distributors, and ensuring compliance. Without mobile apps, operations remain outdated and customer engagement suffers.",
          painPoints: [
            "Manual order management with delays & errors",
            "Difficulty reaching patients & doctors directly",
            "Limited visibility into distributor networks",
            "Missed opportunities in digital health & telemedicine",
            "Poor user engagement without digital touchpoints",
          ],
          solutionPoints: [
            "Custom B2B & B2C pharma apps for full digital transformation",
            "Direct doctor-patient engagement via mobile platforms",
            "Real-time distributor & retailer management",
            "E-prescription & medicine delivery apps",
            "Seamless tracking of inventory & compliance",
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Build Pharma Mobile Apps",
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
              question: "What types of pharma apps do you build?",
              answer:
                "We build B2B distributor apps, patient health apps, doctor engagement apps, e-prescription platforms, and medicine delivery apps for pharma companies.",
              icon: React.createElement(IconDeviceMobile, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "Can apps help pharma distributors & suppliers?",
              answer:
                "Yes. Our apps allow distributors to manage orders, inventory, payments, and communication with pharma manufacturers seamlessly.",
              icon: React.createElement(IconTruckDelivery, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "Are these apps compliance-friendly?",
              answer:
                "Absolutely. We design apps following pharma regulations, HIPAA (where applicable), and medical data security best practices.",
              icon: React.createElement(IconPrescription, { size: 22 }),
            },
            {
              id: "faq-4",
              question: "Can apps help increase revenue?",
              answer:
                "Yes. Mobile apps streamline sales, improve engagement with patients & doctors, and open new revenue channels via telemedicine & e-commerce.",
              icon: React.createElement(IconChartPie2, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Transform",
      headlineKeywords: ["Pharma Mobile Apps", "Medicine Delivery Apps", "E-Prescription Platforms", "B2B Pharma Apps"],
      brandLine: [
        {
          text: "📱 Next-Gen Mobile Apps for Pharma Companies That Drive Digital Transformation",
          gradient: true,
          gradientClass: "from-orange-500 via-pink-500 to-red-600",
        },
      ],
      subheadline:
        "We design and develop custom mobile apps for pharma companies to digitize operations, connect with doctors & patients, and scale distribution seamlessly.",
      ctaButtons: [
        {
          icon: React.createElement(IconArrowRight, { size: 28 }),
          text: "Build My Pharma App",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(IconUsersGroup, { size: 32 }),
          title: "5X Engagement",
          description: "Stronger doctor & patient connections",
        },
        {
          icon: React.createElement(IconTruckDelivery, { size: 32 }),
          title: "3X Faster Operations",
          description: "Real-time order & distributor management",
        },
        {
          icon: React.createElement(IconHeartbeat, { size: 32 }),
          title: "100% Compliance",
          description: "HIPAA-ready & secure pharma apps",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Us for", gradient: false },
        { text: "Pharma Mobile Apps?", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(IconStethoscope, { size: 28 }),
          title: "Healthcare Expertise",
          description: "We understand pharma workflows, compliance, and digital health trends deeply.",
        },
        {
          icon: React.createElement(IconBuildingHospital, { size: 28 }),
          title: "B2B & B2C Apps",
          description: "From distributors to patients, we build solutions for the entire pharma ecosystem.",
        },
        {
          icon: React.createElement(IconPill, { size: 28 }),
          title: "Custom Integrations",
          description: "We integrate e-prescriptions, payment gateways, CRM & inventory tools into your apps.",
        },
        {
          icon: React.createElement(IconChartPie2, { size: 28 }),
          title: "Scalable & Secure",
          description: "Our apps are cloud-ready, scalable, and built with enterprise-grade security.",
        },
      ],
      cta: {
        text: "Start Pharma App Development",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our Mobile App Development Process for Pharma",
      subtitle: "FROM IDEAS TO DIGITAL PHARMA SUCCESS",
      className: "border-t border-border dark:border-gray-700",
      description:
        "We follow a compliance-first, innovation-driven approach to deliver mobile apps that empower pharma companies with digital growth.",
      steps: [
        {
          id: 1,
          title: "Requirement Analysis",
          description: "We understand your pharma business model, B2B/B2C needs, and compliance requirements.",
        },
        {
          id: 2,
          title: "UI/UX Design",
          description: "We craft intuitive, healthcare-friendly designs focused on accessibility & ease of use.",
        },
        {
          id: 3,
          title: "App Development",
          description: "We build Android, iOS, and cross-platform pharma apps with advanced functionality.",
        },
        {
          id: 4,
          title: "Integrations",
          description: "We integrate e-prescriptions, telemedicine, CRM, payment & logistics modules.",
        },
        {
          id: 5,
          title: "Testing & Compliance",
          description: "We rigorously test for HIPAA, GDPR, and pharma-specific compliance standards.",
        },
        {
          id: 6,
          title: "Launch & Support",
          description: "We deploy apps on stores and provide ongoing updates, security & maintenance.",
        },
      ],
    },
    testimonials: {
      title: [
        { text: "Pharma Leaders", gradient: false },
        { text: "Trust Our Apps", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      description:
        "From global manufacturers to local distributors, our pharma apps have transformed operations, boosted efficiency, and created new revenue channels.",
      testimonials: [
        {
          id: "1",
          message:
            "Our mobile app streamlined distributor orders and reduced errors by 70%. Now, every retailer connects directly with us through the app.",
          highlight: "70% Fewer Errors",
          stars: 5,
          name: "Rajesh Malhotra",
          designation: "CEO",
          company: "LifeCare Pharma",
        },
        {
          id: "2",
          message:
            "The patient engagement app increased repeat medicine purchases and improved customer loyalty significantly. Truly a game-changer.",
          highlight: "2.8X More Repeat Purchases",
          stars: 5,
          name: "Dr. Neha Verma",
          designation: "Director",
          company: "MediHealth Labs",
        },
      ],
    },
    cta: {
      title: "Build Future-Ready Pharma Apps",
      subtitle: "DIGITIZE OPERATIONS. ENGAGE CUSTOMERS. SCALE EASILY.",
      description:
        "We help pharma brands develop secure, scalable, and innovative mobile apps that connect businesses with patients, doctors, and distributors seamlessly.",
    },
  },
};
