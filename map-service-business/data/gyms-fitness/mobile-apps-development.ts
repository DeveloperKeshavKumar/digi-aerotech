import React from "react";
import { ServiceBusinessMap } from "@/map-service-business/map-service-business.types";
import { Struggles } from "@/components/homepage/struggles";
import { FaqSection } from "@/components/services/faq-section";
import {
  Smartphone,
  Activity,
  Users,
  Target,
  Calendar,
  Heart,
  Star,
  ArrowRight,
  Clock,
  Dumbbell
} from "lucide-react";

export const map: ServiceBusinessMap = {
  service: "mobile-apps-development",
  business: "gyms-fitness",
  variants: {
    hero: "variant2",
    whyChooseUs: "variant1",
    process: "variant3",
  },
  data: {
    slug: "mobile-apps-development-gyms-fitness",
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
            { text: "Gym Owners Struggling to Engage Members?", gradient: false },
            { text: "Custom Mobile Apps Can Transform Your Fitness Business", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
          ],
          subheadline:
            "Many gyms and fitness studios lose clients due to poor engagement and limited digital presence. A mobile app keeps your members connected, motivated, and loyal.",
          painPoints: [
            "Difficulty managing memberships and bookings online",
            "Low member engagement with classes and promotions",
            "High churn due to lack of personalized experience",
            "Limited ability to track progress and motivate members",
            "Unable to upsell personal training or merchandise efficiently",
          ],
          solutionPoints: [
            "Custom mobile apps for iOS and Android to manage memberships seamlessly",
            "Class bookings, notifications, and promotions at members' fingertips",
            "Personalized dashboards with fitness tracking and workout plans",
            "Push notifications and reminders to boost engagement and retention",
            "Integrated payment gateways for memberships, merchandise, and packages",
          ],
          cta: {
            icon: React.createElement(ArrowRight, { size: 20 }),
            text: "Build Your Fitness App Today",
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
              question: "Can a mobile app increase gym member retention?",
              answer:
                "Yes, apps engage members with class schedules, progress tracking, promotions, and personalized content, boosting loyalty and reducing churn.",
              icon: React.createElement(Target, { size: 22 }),
            },
            {
              id: "faq-2",
              question: "Will my gym app work on both iOS and Android?",
              answer:
                "Absolutely. We develop cross-platform mobile apps to ensure all members can access features regardless of their device.",
              icon: React.createElement(Smartphone, { size: 22 }),
            },
            {
              id: "faq-3",
              question: "Can we integrate online payments and bookings?",
              answer:
                "Yes, the app supports secure payments, membership renewals, class bookings, and even merchandise purchases.",
              icon: React.createElement(Heart, { size: 22 }),
            },
            {
              id: "faq-4",
              question: "Do you provide app maintenance and updates?",
              answer:
                "We offer ongoing support, bug fixes, updates, and feature enhancements to ensure your app runs smoothly and stays relevant.",
              icon: React.createElement(Clock, { size: 22 }),
            },
          ],
        },
      },
    ],
    hero: {
      initial: "Want to Engage & Retain Your Gym Members?",
      headlineKeywords: [
        "With a Custom Mobile App?",
        "Boost Class Bookings & Memberships?",
        "Track Fitness Progress Seamlessly?",
        "360° Mobile Solutions for Gyms?",
      ],
      brandLine: [
        { text: "📱 Elevate Your Gym & Fitness Studio with Custom Mobile Apps", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      subheadline:
        "We develop feature-rich mobile apps for gyms, studios, and personal trainers to enhance member engagement, streamline operations, and increase revenue.",
      ctaButtons: [
        {
          icon: React.createElement(Smartphone, { size: 28 }),
          text: "Book Your Free App Consultation",
          link: "/contact",
        },
      ],
      stats: [
        {
          icon: React.createElement(Users, { size: 32 }),
          title: "5000+ Active Users",
          description: "Across gyms & fitness studios using our apps",
        },
        {
          icon: React.createElement(Dumbbell, { size: 32 }),
          title: "200+ Gyms Served",
          description: "From small studios to large fitness chains",
        },
        {
          icon: React.createElement(Star, { size: 32 }),
          title: "4.9/5 Rating",
          description: "Clients love our mobile app solutions",
        },
      ],
    },
    whyChooseUs: {
      title: [
        { text: "Why Fitness Studios Choose Us for", gradient: false },
        { text: "Mobile App Development", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" },
      ],
      trustPoints: [
        {
          icon: React.createElement(Dumbbell, { size: 28 }),
          title: "Custom Features for Gyms",
          description: "Memberships, bookings, class schedules, and tracking dashboards.",
        },
        {
          icon: React.createElement(Activity, { size: 28 }),
          title: "Push Notifications & Engagement",
          description: "Remind members of classes, promotions, and personal milestones.",
        },
        {
          icon: React.createElement(Target, { size: 28 }),
          title: "Revenue-Boosting Integrations",
          description: "Secure payments, merchandise, and personal training upsells.",
        },
      ],
      cta: {
        text: "Get Your Gym App Today",
        link: "#contact",
        icon: React.createElement(ArrowRight, { size: 20 }),
      },
    },
    process: {
      title: "Our Mobile App Development Process for Gyms",
      subtitle: "PLAN • DESIGN • DEVELOP • ENGAGE",
      description:
        "We create custom mobile apps for gyms and fitness studios with a structured process to ensure seamless experience, engagement, and member growth.",
      steps: [
        {
          id: 1,
          title: "Requirement Analysis",
          description: "Understand your gym, membership types, class schedules, and member engagement goals.",
        },
        {
          id: 2,
          title: "UI/UX Design",
          description:
            "Design intuitive, visually appealing interfaces that make it easy for members to navigate and book classes.",
        },
        {
          id: 3,
          title: "App Development",
          description:
            "Develop cross-platform apps with integrated membership management, bookings, notifications, and analytics dashboards.",
        },
        {
          id: 4,
          title: "Testing & Quality Assurance",
          description:
            "Thorough testing to ensure smooth functionality, speed, and bug-free member experience.",
        },
        {
          id: 5,
          title: "Launch & Deployment",
          description:
            "Deploy your app on iOS and Android stores with smooth onboarding and training for your staff.",
        },
        {
          id: 6,
          title: "Support & Optimization",
          description:
            "Continuous updates, new feature implementation, and performance monitoring to maximize app adoption and member retention.",
        },
      ],
    },
    cta: {
      title: "Ready to Launch Your Custom Gym App?",
      subtitle: "ENGAGE MEMBERS • BOOST RETENTION • INCREASE REVENUE",
      description:
        "Book a free consultation today and see how a custom mobile app can transform your gym or fitness studio business.",
    },
  },
};
