import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconDeviceMobile, IconSchool, IconUsers, IconTarget, IconArrowRight,
  IconChartBar, IconTrendingUp, IconWorld, IconBrain, IconCode, IconCloud
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'mobile-app-development',
  business: 'teachers-consultants',
  variants: {
    hero: 'variant1',
    whyChooseUs: 'variant3',
    process: 'variant2',
  },
  data: {
    slug: 'mobile-app-development-teachers-consultants',
    showSections: {
      hero: true,
      whyChooseUs: true,
      process: true,
      testimonials: true,
      cta: true
    },
    customSections: [
      {
        component: Struggles,
        position: 'beforeWhyChooseUs',
        props: {
          title: [
            { text: "Challenges Teachers & Consultants Face ", gradient: false },
            { text: "Without Mobile Apps", gradient: true, gradientClass: "from-indigo-500 via-purple-500 to-pink-500" }
          ],
          subheadline: "In today’s digital-first world, students and clients expect convenience, personalization, and mobile-first access.",
          painPoints: [
            "Difficulty engaging students or clients outside sessions",
            "No central hub for classes, content, or bookings",
            "Dependence on third-party apps with limited control",
            "Lack of automation in scheduling, payments & reminders",
            "Missed opportunities to scale reach beyond local areas",
            "Low brand credibility without a professional app"
          ],
          solutionPoints: [
            "Custom apps tailored for education & consulting needs",
            "Seamless class booking, payments & reminders",
            "Push notifications to engage users directly",
            "Content library for lessons, notes, or resources",
            "Analytics to track student/client engagement",
            "Scalable apps that grow with your practice"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Build My Mobile App Today"
          }
        }
      },
      {
        component: FaqSection,
        position: 'afterTestimonials',
        props: {
          faqs: [
            {
              id: 'faq-1',
              question: 'Why do teachers and consultants need mobile apps?',
              answer: 'Apps provide direct engagement, automate tasks, and build brand authority, making it easier to retain students and clients.',
              icon: React.createElement(IconDeviceMobile, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Can the app include class bookings and payments?',
              answer: 'Yes. We integrate secure booking, payment, and scheduling features into your custom app.',
              icon: React.createElement(IconChartBar, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Do you develop both Android and iOS apps?',
              answer: 'Yes. We build apps for both platforms with responsive, user-friendly designs.',
              icon: React.createElement(IconWorld, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'What makes Digi Aerotech apps different?',
              answer: 'We create niche-specific apps for education & consulting with features tailored to your workflow.',
              icon: React.createElement(IconBrain, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Can I scale my app later?',
              answer: 'Absolutely. Our apps are built to scale with your growing audience & features.',
              icon: React.createElement(IconCloud, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'Do you provide app maintenance?',
              answer: 'Yes. We offer complete development + maintenance services for smooth performance.',
              icon: React.createElement(IconCode, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Your Expertise, ",
      headlineKeywords: [
        "In Every Pocket",
        "Available Anytime",
        "Student-Friendly",
        "Future-Ready",
        "Scalable & Smart"
      ],
      brandLine: [
        { text: "📱 Mobile Apps for Teachers & Consultants", gradient: false }
      ],
      subheadline: "Digi Aerotech builds powerful, user-friendly mobile apps for teachers & consultants to connect with students and clients anytime, anywhere.",
      ctaButtons: [
        { icon: React.createElement(IconDeviceMobile, { size: 28 }), text: "Request Free App Demo", link: "/contact" },
        { icon: React.createElement(IconChartBar, { size: 28 }), text: "See Features", link: "/features", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "15,000+ Users",
          description: "Actively using apps developed by Digi Aerotech"
        },
        {
          icon: React.createElement(IconSchool, { size: 32 }),
          title: "10,000+ Students",
          description: "Learning via teacher-led custom apps"
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "4X Engagement",
          description: "Increase in student & client retention"
        },
        {
          icon: React.createElement(IconTarget, { size: 32 }),
          title: "Niche-Specific Apps",
          description: "Tailored for consulting & education domains"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the ", gradient: false },
        { text: "#1 Choice for Mobile App Development", gradient: true, gradientClass: "from-indigo-500 via-purple-500 to-pink-500" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconDeviceMobile, { size: 28 }),
          title: "Custom App Solutions",
          description: "We don’t use templates—every app is tailored to your teaching or consulting model."
        },
        {
          icon: React.createElement(IconBrain, { size: 28 }),
          title: "Niche Expertise",
          description: "Deep understanding of education & consulting workflows."
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "User-Centric Design",
          description: "Apps built with students and clients in mind for smooth experiences."
        },
        {
          icon: React.createElement(IconChartBar, { size: 28 }),
          title: "Scalable Technology",
          description: "Apps that grow with your audience and business."
        },
        {
          icon: React.createElement(IconWorld, { size: 28 }),
          title: "Cross-Platform",
          description: "Seamless apps for both Android & iOS."
        },
        {
          icon: React.createElement(IconCode, { size: 28 }),
          title: "Full Maintenance",
          description: "Ongoing updates, bug fixes, and feature enhancements."
        }
      ],
      cta: {
        text: "Start My App Project",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Mobile App Development Process',
      subtitle: 'FROM IDEA TO LAUNCH',
      description: 'We follow a structured, transparent process to deliver world-class apps.',
      steps: [
        { id: 1, title: 'Discovery & Strategy', description: 'Understand your teaching/consulting model & requirements.' },
        { id: 2, title: 'Wireframing & Design', description: 'Craft intuitive, engaging UI/UX tailored for your users.' },
        { id: 3, title: 'Development', description: 'Build robust apps with latest frameworks & technologies.' },
        { id: 4, title: 'Testing & QA', description: 'Ensure flawless performance across devices.' },
        { id: 5, title: 'Deployment', description: 'Launch apps on Play Store & App Store seamlessly.' },
        { id: 6, title: 'Maintenance & Scaling', description: 'Continuous support, updates & new features as you grow.' }
      ]
    },
    cta: {
      title: 'Ready to Build Your App?',
      subtitle: 'MOBILE-FIRST GROWTH FOR TEACHERS & CONSULTANTS',
      description: 'Book a free consultation with Digi Aerotech and discover how a custom app can scale your teaching or consulting practice.',
    }
  }
};
