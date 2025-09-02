import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { ServiceIcons } from '@/constants/service-icons';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import { 
  IconBook, IconUsers, IconTrendingUp, IconWorld, IconCertificate, IconChartBar, 
  IconSchool, IconSearch, IconDeviceLaptop, IconAd2, IconBrandMeta, IconSocial,
  IconPhone, IconArrowRight, IconShieldCheck, IconRocket, IconCalendar, IconHeadphones 
} from '@tabler/icons-react';

const { IconFreeRights, IconStarsFilled } = ServiceIcons;

export const map: ServiceBusinessMap = {
  service: '360-digital-marketing',
  business: 'educational-institutions',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant3',
    process: 'variant1',
  },
  data: {
    slug: '360-digital-marketing-educational-institutions',
    showSections: {
      hero: true,
      whyChooseUs: true,
      typesOfServices: false,
      process: true,
      techStack: false,
      testimonials: true,
      cta: true
    },
    customSections: [
      {
        component: Struggles,
        props: {
          title: [
            { text: "The Struggles ", gradient: false },
            { text: "Educational Institutions ", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" },
            { text: "Face in Marketing", gradient: false }
          ],
          subheadline: "In a digital-first world, attracting students goes beyond word-of-mouth.",
          painPoints: [
            "Falling behind modern online marketing trends",
            "Difficulty in getting enough enrollments each year",
            "Dependence on traditional advertising only (print, banners)",
            "Low visibility on Google & Maps searches",
            "Struggling to build trust among parents and students"
          ],
          solutionPoints: [
            "Dominate Google search results for courses & institutions",
            "Run targeted campaigns that bring actual admissions",
            "Leverage social media to showcase success stories & culture",
            "High-converting landing pages for admissions campaigns",
            "Transparent ROI tracking & marketing performance"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Boost My Admissions Now"
          }
        },
        position: 'beforeWhyChooseUs'
      },
      {
        component: FaqSection,
        position: 'afterTestimonials',
        props: {
          faqs: [
            {
              id: 'edu-1',
              question: 'How do you help schools & colleges increase admissions?',
              answer: 'We use SEO, Google Ads, and social media funnels to drive student inquiries and convert them into confirmed admissions.',
              icon: React.createElement(IconSchool, { size: 22 })
            },
            {
              id: 'edu-2',
              question: 'Do you also market coaching centers and edtech platforms?',
              answer: 'Yes. We specialize in promoting offline & online institutions — from local coaching centers to global edtech brands.',
              icon: React.createElement(IconDeviceLaptop, { size: 22 })
            },
            {
              id: 'edu-3',
              question: 'Can you help us attract international students?',
              answer: 'Absolutely. We run targeted global campaigns to boost your institution’s international visibility and attract foreign students.',
              icon: React.createElement(IconWorld, { size: 22 })
            },
            {
              id: 'edu-4',
              question: 'How do you build trust with parents and guardians?',
              answer: 'We create reputation campaigns showcasing alumni success, testimonials, faculty expertise, and accreditation highlights.',
              icon: React.createElement(IconShieldCheck, { size: 22 })
            },
            {
              id: 'edu-5',
              question: 'Do you provide ongoing marketing support?',
              answer: 'Yes. From admission campaigns to year-round engagement, we handle complete 360° digital marketing for institutions.',
              icon: React.createElement(IconHeadphones, { size: 22 })
            },
            {
              id: 'edu-6',
              question: 'How do you measure ROI for educational institutions?',
              answer: 'We track leads, confirmed admissions, inquiries, and engagement metrics to deliver crystal-clear ROI reports.',
              icon: React.createElement(IconChartBar, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Looking for ",
      headlineKeywords: [
        "360 Digital Marketing for Educational Institutions?",
        "More Admissions?",
        "Better Visibility?",
        "Global Reach?",
        "Trusted Growth?"
      ],
      brandLine: [
        { text: "🎓 More Students. More Trust. More Global Recognition.", gradient: false }
      ],
      subheadline: "With Digi Aerotech’s 360° Digital Marketing for Educational Institutions, your school, college, or coaching center won’t just get visibility — it will get enrollments.",
      ctaButtons: [
        { icon: React.createElement(IconFreeRights, { size: 30 }), text: "Get Free Consultation", link: "/contact" },
        { icon: React.createElement(IconPhone, { size: 30 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconTrendingUp, { size: 34 }),
          title: "250% Growth",
          description: "Average admission inquiries boost"
        },
        {
          icon: React.createElement(IconUsers, { size: 34 }),
          title: "10+ Institutions",
          description: "Schools & Colleges served"
        },
        {
          icon: React.createElement(IconCertificate, { size: 34 }),
          title: "95% Conversion",
          description: "For admission campaigns"
        },
        {
          icon: React.createElement(IconCalendar, { size: 34 }),
          title: "Year-Round Support",
          description: "Seamless execution"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why ", gradient: false },
        { text: "Educational Institutions Trust Digi Aerotech", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconSearch, { size: 32 }),
          title: "SEO & Maps Dominance",
          description: "We make your institution appear on top for key searches like ‘best college in [city]’ or ‘coaching near me’."
        },
        {
          icon: React.createElement(IconAd2, { size: 32 }),
          title: "Targeted Admission Campaigns",
          description: "Hyper-focused Google & Meta Ads ensure parents and students see your courses and apply quickly."
        },
        {
          icon: React.createElement(IconBrandMeta, { size: 32 }),
          title: "Engaging Social Media Presence",
          description: "From student achievements to cultural events — we create posts & reels that attract and convert."
        },
        {
          icon: React.createElement(IconDeviceLaptop, { size: 32 }),
          title: "High-Converting Websites",
          description: "Custom landing pages & websites designed for inquiries, applications, and virtual tours."
        },
        {
          icon: React.createElement(IconBook, { size: 32 }),
          title: "Content Marketing Excellence",
          description: "Blogs, articles, and video campaigns to build authority and attract students organically."
        },
        {
          icon: React.createElement(IconRocket, { size: 32 }),
          title: "End-to-End Growth Partner",
          description: "From admissions to alumni branding — we’re your 360° marketing partner in education."
        }
      ],
      cta: {
        text: "Get a Free Strategy Session",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our 360° Marketing Process for Educational Institutions',
      subtitle: 'STEP-BY-STEP ENROLLMENT GROWTH',
      className: 'border-t border-border dark:border-gray-700',
      description: 'A proven methodology that ensures your school, college, or coaching center achieves measurable results.',
      steps: [
        {
          id: 1,
          title: 'Institution Audit & Market Research',
          description: 'We analyze your institution’s current presence, competition, and student demographics.'
        },
        {
          id: 2,
          title: 'Strategy Development',
          description: 'A tailored 360° marketing strategy designed to boost admissions and brand authority.'
        },
        {
          id: 3,
          title: 'Campaign Setup',
          description: 'Implementation of SEO, Ads, Social Media, and Web funnels for targeted lead generation.'
        },
        {
          id: 4,
          title: 'Lead Nurturing',
          description: 'We build automated systems to engage parents and students until they enroll.'
        },
        {
          id: 5,
          title: 'Performance Optimization',
          description: 'Continuous monitoring and optimization to maximize conversions and reduce cost per lead.'
        },
        {
          id: 6,
          title: 'ROI Reporting',
          description: 'Transparent dashboards showing inquiries, admissions, and actual ROI.'
        }
      ]
    },
    cta: {
      title: 'Ready to Enroll More Students & Build Trust?',
      subtitle: 'Stop depending on outdated methods. Start attracting students digitally.',
      description: 'With Digi Aerotech’s 360° Digital Marketing for Educational Institutions, you’ll turn inquiries into admissions and build long-lasting trust with parents & students.'
    }
  }
};
