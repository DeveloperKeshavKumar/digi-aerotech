import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconSchool,
  IconDeviceMobile,
  IconUsers,
  IconTrendingUp,
  IconShieldCheck,
  IconRocket,
  IconCalendarEvent,
  IconArrowRight,
  IconBook,
  IconPhone,
  IconCircleCheck,
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'mobile-apps-development',
  business: 'educational-institutions',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant1',
    process: 'variant3',
    testimonials: 'variant1'
  },
  data: {
    slug: 'mobile-apps-development-educational-institutions',
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
            { text: "Challenges Educational Institutions Face", gradient: false },
            { text: "With Mobile App Adoption", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Schools, colleges, and coaching centers often struggle to implement mobile apps that improve learning, engagement, and student management.",
          painPoints: [
            "Low student engagement with traditional platforms",
            "Difficulty managing course content and schedules",
            "Inefficient communication with students and parents",
            "Limited tracking of student progress and performance",
            "Lack of a branded, user-friendly mobile solution"
          ],
          solutionPoints: [
            "Custom mobile apps for iOS & Android tailored to your institution",
            "Interactive course content and learning management features",
            "Seamless communication via push notifications and in-app chat",
            "Analytics dashboard to monitor student progress",
            "Branded, intuitive UI to enhance engagement and retention"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Develop Your Education App Today"
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
              question: 'Why does my institution need a mobile app?',
              answer: 'Mobile apps provide direct engagement with students and parents, making course management and communication efficient.',
              icon: React.createElement(IconDeviceMobile, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Can the app include course materials and schedules?',
              answer: 'Yes. We build interactive modules, timetable management, and notifications for all programs.',
              icon: React.createElement(IconBook, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Is it possible to track student performance?',
              answer: 'Absolutely. Apps include dashboards for teachers and admins to track attendance, scores, and engagement.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Can parents receive updates via the app?',
              answer: 'Yes. Push notifications and in-app messages keep parents informed about announcements, grades, and events.',
              icon: React.createElement(IconUsers, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Which platforms will the app support?',
              answer: 'We develop native and cross-platform apps for iOS and Android to reach all students.',
              icon: React.createElement(IconDeviceMobile, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'How quickly can we launch the app?',
              answer: 'Depending on features, apps can be launched within weeks with continuous support and updates.',
              icon: React.createElement(IconCircleCheck, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Want ",
      headlineKeywords: [
        "A Custom Education App?",
        "Better Student Engagement?",
        "Streamlined Course Management?",
        "Parent-Teacher Connectivity?",
        "Mobile Solutions for Institutions?"
      ],
      brandLine: [
        { text: "📱 Build Branded Mobile Apps for Schools, Colleges & Coaching Centers", gradient: false }
      ],
      subheadline: "We develop intuitive, high-performing mobile apps that increase student engagement, streamline communication, and enhance learning outcomes.",
      ctaButtons: [
        { icon: React.createElement(IconDeviceMobile, { size: 28 }), text: "Schedule Free Consultation", link: "/contact" },
        { icon: React.createElement(IconPhone, { size: 28 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconRocket, { size: 32 }),
          title: "100+ Apps Delivered",
          description: "For educational institutions across India"
        },
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "50,000+ Active Students",
          description: "Using our mobile apps daily"
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 32 }),
          title: "4.9/5 Client Satisfaction",
          description: "Trusted for high-quality education apps"
        },
        {
          icon: React.createElement(IconCalendarEvent, { size: 32 }),
          title: "Quick Deployment",
          description: "Apps launched within weeks, with ongoing support"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the ", gradient: false },
        { text: "#1 Mobile App Partner for Educational Institutions", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconDeviceMobile, { size: 28 }),
          title: "Custom iOS & Android Apps",
          description: "Native & cross-platform solutions for maximum reach."
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Interactive Learning Modules",
          description: "Engaging content to increase student participation."
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "Parent-Teacher Connectivity",
          description: "Push notifications and in-app messaging for better communication."
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 28 }),
          title: "Performance Analytics",
          description: "Track attendance, scores, and engagement easily."
        },
        {
          icon: React.createElement(IconBook, { size: 28 }),
          title: "Scalable & Secure",
          description: "Built to handle thousands of students securely."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Dedicated Support",
          description: "Ongoing updates and support for smooth app operations."
        }
      ],
      cta: {
        text: "Develop Your Education App Now",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Mobile App Development Process for Educational Institutions',
      subtitle: 'STEP-BY-STEP STUDENT ENGAGEMENT SOLUTION',
      className: 'border-t border-border dark:border-gray-700',
      description: 'From concept to launch, we build education apps that engage students, streamline learning, and connect parents effectively.',
      steps: [
        {
          id: 1,
          title: 'Requirement Analysis & Planning',
          description: 'Understand courses, student needs, and institution goals.'
        },
        {
          id: 2,
          title: 'UI/UX Design',
          description: 'Design intuitive, branded, and user-friendly interfaces.'
        },
        {
          id: 3,
          title: 'App Development',
          description: 'Develop cross-platform iOS & Android apps with interactive features.'
        },
        {
          id: 4,
          title: 'Integration & Testing',
          description: 'Integrate LMS, push notifications, and analytics; conduct thorough testing.'
        },
        {
          id: 5,
          title: 'Deployment & Launch',
          description: 'Publish apps to app stores and ensure smooth rollout to students.'
        },
        {
          id: 6,
          title: 'Maintenance & Updates',
          description: 'Ongoing support, feature upgrades, and performance optimization.'
        }
      ]
    },
    testimonials: {
      title: [
        { text: "Educational Institutions Who ", gradient: false },
        { text: "Transformed With Our Mobile Apps", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      description: 'See how Digi Aerotech’s mobile apps increased engagement, simplified course management, and improved parent-student communication.',
      testimonials: [
        {
          id: '1',
          message: 'Our college app improved student engagement and attendance tracking drastically.',
          highlight: 'improved student engagement',
          stars: 5,
          name: 'Dr. Anjali Mehta',
          designation: 'Principal',
          company: 'Sunrise College'
        },
        {
          id: '2',
          message: 'Parents now get timely notifications and updates, making communication seamless.',
          highlight: 'communication seamless',
          stars: 5,
          name: 'Rohit Sinha',
          designation: 'Director',
          company: 'Elite Coaching Academy'
        }
      ]
    },
    cta: {
      title: 'Ready to Launch Your Education Mobile App?',
      subtitle: 'Enhance Learning, Engagement & Communication',
      description: 'Book a free consultation with Digi Aerotech and get a custom mobile app for your educational institution.'
    }
  }
};
