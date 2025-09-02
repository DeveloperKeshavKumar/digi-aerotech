import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  IconDeviceMobile,
  IconHome,
  IconBrush,
  IconLayout2,
  IconArrowRight,
  IconCube,
  IconCalendarEvent,
  IconUsers,
  IconBuilding,
  IconTrendingUp,
} from "@tabler/icons-react";

export const map: ServiceBusinessMap = {
  service: "mobile-apps-development",
  business: "interior-designers",
  variants: {
    hero: "variant2",
    whyChooseUs: "variant1",
    process: "variant3",
  },
  data: {
    slug: "mobile-apps-development-interior-designers",
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
            { text: "Why Interior Designers", gradient: false },
            { text: "Need Mobile Apps", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "Clients today want quick access to design ideas, 3D previews, and easy ways to connect with designers. Without a mobile app, interior businesses lose engagement and premium projects.",
          painPoints: [
            "Clients unable to browse design portfolio easily",
            "Missing out on modern 3D & AR experiences",
            "Manual appointment scheduling issues",
            "Low engagement with tech-savvy clients",
            "Lack of branded mobile presence",
          ],
          solutionPoints: [
            "Custom mobile apps with portfolio galleries",
            "Virtual 3D walkthroughs & AR visualization",
            "Integrated consultation booking systems",
            "Push notifications for new projects & offers",
            "Branded apps that build trust & authority",
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Build My App",
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
              question: "How can a mobile app help my interior design business?",
              answer:
                "A custom app allows clients to explore your portfolio, preview designs in 3D/AR, and book consultations directly — boosting conversions.",
              icon: React.createElement(IconDeviceMobile, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "Can I showcase my designs in 3D?",
              answer:
                "Yes. We integrate 3D modeling & AR visualization so clients can experience your designs before execution.",
              icon: React.createElement(IconCube, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "Do apps work for small interior firms too?",
              answer:
                "Absolutely. Whether a solo designer or a full studio, an app gives you a modern, professional edge over competitors.",
              icon: React.createElement(IconBuilding, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Showcase Your Designs Digitally",
      headlineKeywords: ["Mobile Apps", "Interior Designers", "3D & AR Previews"],
      brandLine: [
        {
          text: "📱 Build Trust. Impress Clients. Win More Projects.",
          gradient: true,
          gradientClass: "from-orange-500 via-pink-500 to-red-600",
        },
      ],
      subheadline:
        "We design powerful mobile apps for interior designers that let clients explore portfolios, view 3D walkthroughs, and book consultations — boosting client confidence & project conversions.",
      ctaButtons: [
        {
          icon: React.createElement(IconArrowRight, { size: 28 }),
          text: "Build My App Now",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "2X More Leads",
          description: "Interior designers with apps generate twice the leads.",
        },
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "Client Engagement",
          description: "Keep clients engaged with design updates & notifications.",
        },
        {
          icon: React.createElement(IconBrush, { size: 32 }),
          title: "Visual Impact",
          description: "Showcase your portfolio beautifully with 3D previews.",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Us for", gradient: false },
        { text: "Mobile App Development?", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(IconLayout2, { size: 28 }),
          title: "Portfolio Showcase",
          description: "Apps that beautifully present your designs & past projects.",
        },
        {
          icon: React.createElement(IconCube, { size: 28 }),
          title: "3D & AR Features",
          description: "Interactive design previews for client confidence.",
        },
        {
          icon: React.createElement(IconCalendarEvent, { size: 28 }),
          title: "Booking Integration",
          description: "Seamless consultation booking & scheduling.",
        },
      ],
      cta: {
        text: "Develop My App",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our Mobile App Development Process",
      subtitle: "DESIGN • DEVELOP • ENGAGE • CONVERT",
      description:
        "We don’t just build apps; we create digital experiences that help interior designers impress clients and close projects faster.",
      steps: [
        {
          id: 1,
          title: "Requirement Analysis",
          description: "Understand your design portfolio, target clients, and business goals.",
        },
        {
          id: 2,
          title: "UI/UX Design",
          description: "Design intuitive, elegant, and visually stunning mobile app interfaces.",
        },
        {
          id: 3,
          title: "3D & AR Integration",
          description: "Enable virtual walkthroughs & AR previews for immersive experiences.",
        },
        {
          id: 4,
          title: "App Development",
          description: "Develop fast, secure, and scalable apps for iOS & Android.",
        },
        {
          id: 5,
          title: "Launch & Support",
          description: "Publish apps and provide continuous updates & maintenance.",
        },
      ],
    },
    cta: {
      title: "Transform Your Interior Business with a Custom Mobile App",
      subtitle: "SHOWCASE • ENGAGE • WIN",
      description:
        "Don’t just design — let clients experience your vision digitally. Our mobile apps help you showcase your creativity, boost trust, and secure premium projects.",
    },
  },
};
