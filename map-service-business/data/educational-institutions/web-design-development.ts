import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconGlobe,
  IconCode,
  IconLayout,
  IconShieldCheck,
  IconUsers,
  IconStar,
  IconArrowRight,
  IconCalendarEvent,
  IconSettings,
  IconDeviceDesktop,
  IconRocket,
  IconDatabase
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'web-design-development',
  business: 'educational-institutions',
  variants: {
    hero: 'variant1',
    whyChooseUs: 'variant2',
    process: 'variant3',
    testimonials: 'variant1'
  },
  data: {
    slug: 'web-design-development-maintenance-educational-institutions',
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
            { text: "With Website Design, Development & Maintenance", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Schools, colleges, coaching centers, and e-learning platforms struggle with outdated websites, poor UX, and technical issues that affect student engagement.",
          painPoints: [
            "Outdated website designs leading to poor first impressions",
            "Slow loading times and unresponsive layouts",
            "Difficulty updating content regularly",
            "Limited functionality for course listings or registrations",
            "Security vulnerabilities and downtime"
          ],
          solutionPoints: [
            "Modern, responsive, and visually appealing web designs",
            "Optimized speed and mobile-first layouts",
            "Easy-to-manage CMS for content updates",
            "Feature-rich platforms with course listings, enrollments, and payment gateways",
            "Regular maintenance & security updates to ensure uptime"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Upgrade Your Website Now"
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
              question: 'Can you design mobile-friendly websites?',
              answer: 'Absolutely! All websites are fully responsive, optimized for mobile devices and tablets.',
              icon: React.createElement(IconDeviceDesktop, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Do you handle website maintenance?',
              answer: 'Yes, we provide full maintenance including security updates, backups, content updates, and performance optimization.',
              icon: React.createElement(IconSettings, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Can you integrate online course registration?',
              answer: 'We can integrate course listings, student registration, payment gateways, and analytics for better management.',
              icon: React.createElement(IconDatabase, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'How secure will my website be?',
              answer: 'We implement HTTPS, firewalls, and regular updates to protect your website from threats and ensure reliable uptime.',
              icon: React.createElement(IconShieldCheck, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Can you redesign an existing website?',
              answer: 'Yes, we offer full redesign services while preserving your content and improving usability and engagement.',
              icon: React.createElement(IconLayout, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'How soon can my website go live?',
              answer: 'Depending on complexity, websites can go live in 2–6 weeks with thorough testing and optimization.',
              icon: React.createElement(IconRocket, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Want ",
      headlineKeywords: [
        "Modern, Fast Websites?",
        "Higher Student Engagement?",
        "Better Online Registrations?",
        "Secure & Reliable Platforms?",
        "Full Web Design, Development & Maintenance?"
      ],
      brandLine: [
        { text: "🌐 Build, Maintain & Optimize Your Educational Website Seamlessly", gradient: false }
      ],
      subheadline: "We create modern, responsive, and secure websites for schools, colleges, coaching centers, and e-learning platforms that attract students and drive engagement.",
      ctaButtons: [
        { icon: React.createElement(IconGlobe, { size: 28 }), text: "Book Free Consultation", link: "/contact" },
        { icon: React.createElement(IconUsers, { size: 28 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconCode, { size: 32 }),
          title: "100+ Websites Built",
          description: "For educational institutions"
        },
        {
          icon: React.createElement(IconRocket, { size: 32 }),
          title: "50+ Websites Maintained",
          description: "With regular updates & support"
        },
        {
          icon: React.createElement(IconStar, { size: 32 }),
          title: "4.9/5 Satisfaction",
          description: "Client feedback on design & support"
        },
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "500,000+ Students Reached",
          description: "Through optimized websites & portals"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the ", gradient: false },
        { text: "#1 Web Partner for Educational Institutions", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconLayout, { size: 28 }),
          title: "Custom & Modern Designs",
          description: "Unique, visually appealing websites tailored to your institution."
        },
        {
          icon: React.createElement(IconCode, { size: 28 }),
          title: "Feature-Rich Development",
          description: "Integrations for courses, registration, payments, and analytics."
        },
        {
          icon: React.createElement(IconDeviceDesktop, { size: 28 }),
          title: "Responsive & Mobile-First",
          description: "Optimized for mobile, tablet, and desktop devices."
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 28 }),
          title: "Security & Reliability",
          description: "Regular updates, HTTPS, and firewalls ensure uptime and protection."
        },
        {
          icon: React.createElement(IconSettings, { size: 28 }),
          title: "Ongoing Maintenance",
          description: "We handle updates, backups, content changes, and technical support."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Fast & Optimized Performance",
          description: "Websites load quickly, enhancing user experience and SEO."
        }
      ],
      cta: {
        text: "Get a Modern, Secure & Engaging Website",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Web Design, Development & Maintenance Process for Educational Institutions',
      subtitle: 'STEP-BY-STEP WEBSITE CREATION & OPTIMIZATION',
      className: 'border-t border-border dark:border-gray-700',
      description: 'We follow a structured web development and maintenance process to ensure your institution’s online presence is modern, secure, and engaging for students.',
      steps: [
        {
          id: 1,
          title: 'Requirement Analysis & Planning',
          description: 'Understand your institution’s goals, features needed, and user requirements.'
        },
        {
          id: 2,
          title: 'Design & Prototype',
          description: 'Create visually appealing UI/UX designs and prototypes for approval.'
        },
        {
          id: 3,
          title: 'Website Development',
          description: 'Build fully responsive, feature-rich websites with CMS integration.'
        },
        {
          id: 4,
          title: 'Content Upload & SEO Optimization',
          description: 'Upload content, optimize pages for SEO, speed, and mobile performance.'
        },
        {
          id: 5,
          title: 'Testing & Quality Assurance',
          description: 'Conduct thorough testing for usability, security, performance, and compatibility.'
        },
        {
          id: 6,
          title: 'Maintenance & Support',
          description: 'Regular updates, backups, security patches, and performance monitoring.'
        }
      ]
    },
    testimonials: {
      title: [
        { text: "Educational Institutions Who ", gradient: false },
        { text: "Upgraded Their Websites with Us", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      description: 'See how Digi Aerotech helped schools, colleges, and coaching centers get modern, secure, and engaging websites that drive student engagement.',
      testimonials: [
        {
          id: '1',
          message: 'Our new website is fast, modern, and allows students to register online easily. Fantastic work by Digi Aerotech!',
          highlight: 'fast, modern, and allows students to register online easily',
          stars: 5,
          name: 'Dr. Meera Sharma',
          designation: 'Principal',
          company: 'Global Academy'
        },
        {
          id: '2',
          message: 'Thanks to Digi Aerotech, our college website now attracts more visitors, and course registration has increased by 35%.',
          highlight: 'course registration has increased by 35%',
          stars: 5,
          name: 'Ravi Kumar',
          designation: 'Director',
          company: 'Techno College'
        }
      ]
    },
    cta: {
      title: 'Ready to Upgrade Your Institution’s Website?',
      subtitle: 'Modern Design, Full Functionality, Reliable Maintenance',
      description: 'Book a free consultation with Digi Aerotech and transform your educational website into a high-performing, secure, and engaging platform.'
    }
  }
};
