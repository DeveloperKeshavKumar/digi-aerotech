import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconTrendingUp,
  IconSearch,
  IconBook,
  IconUsers,
  IconShieldCheck,
  IconArrowRight,
  IconRocket,
  IconCircleCheck,
  IconCalendarEvent,
  IconTarget
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'seo-services',
  business: 'educational-institutions',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant1',
    process: 'variant3',
    testimonials: 'variant1'
  },
  data: {
    slug: 'seo-services-educational-institutions',
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
            { text: "With SEO & Organic Visibility", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Schools, colleges, coaching centers, and e-learning platforms struggle to attract students online without strong SEO.",
          painPoints: [
            "Low ranking on Google for course or program keywords",
            "Difficulty attracting local students searching online",
            "Limited organic visibility vs competitors",
            "Poor engagement on educational content",
            "Slow website traffic growth leading to low enrollments"
          ],
          solutionPoints: [
            "Comprehensive keyword research & content strategy",
            "On-page optimization for landing pages & course pages",
            "High-quality backlinks & authority building",
            "Technical SEO for fast, responsive websites",
            "Continuous monitoring and growth-driven optimization"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Boost Your Organic Visibility"
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
              question: 'How can SEO help my educational institution?',
              answer: 'SEO improves your search visibility, attracts students searching online, and generates consistent organic leads for your programs.',
              icon: React.createElement(IconSearch, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Do you handle both local and national SEO?',
              answer: 'Yes, we optimize for local searches for your city and broader regional or national visibility depending on your programs.',
              icon: React.createElement(IconTarget, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Will SEO increase enrollment?',
              answer: 'With targeted keywords and optimized content, we attract high-intent prospective students to your website, increasing enrollments over time.',
              icon: React.createElement(IconUsers, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Do you provide ongoing SEO support?',
              answer: 'Absolutely. We continuously monitor, optimize, and create new strategies to maintain and improve rankings and traffic.',
              icon: React.createElement(IconCalendarEvent, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Can you optimize our course pages and blog content?',
              answer: 'Yes, we optimize all website pages, blogs, and program landing pages for maximum visibility and engagement.',
              icon: React.createElement(IconBook, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'How soon will I see results?',
              answer: 'SEO is a long-term strategy, but most institutions start seeing measurable improvements in traffic and leads within 2–3 months.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Want ",
      headlineKeywords: [
        "Higher Google Rankings?",
        "More Organic Student Leads?",
        "Top Spots for Course Searches?",
        "SEO That Converts Visitors into Students?",
        "360° SEO Services for Educational Institutions?"
      ],
      brandLine: [
        { text: "📈 Maximize Your Educational Institution’s Organic Reach and Enrollments", gradient: false }
      ],
      subheadline: "We help schools, colleges, coaching centers, and e-learning platforms attract more students through strategic, results-driven SEO campaigns.",
      ctaButtons: [
        { icon: React.createElement(IconRocket, { size: 28 }), text: "Book Free SEO Consultation", link: "/contact" },
        { icon: React.createElement(IconShieldCheck, { size: 28 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "100+ Institutions Optimized",
          description: "Boosted organic rankings and traffic"
        },
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "50,000+ Prospective Students Reached",
          description: "Through SEO-driven content and campaigns"
        },
        {
          icon: React.createElement(IconBook, { size: 32 }),
          title: "High-Quality Content Created",
          description: "Blog posts, landing pages, program content"
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 32 }),
          title: "Trusted & Proven Strategies",
          description: "Results that convert traffic into enrollments"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the ", gradient: false },
        { text: "#1 SEO Partner for Educational Institutions", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Result-Oriented SEO",
          description: "We focus on driving student leads and increasing enrollments."
        },
        {
          icon: React.createElement(IconBook, { size: 28 }),
          title: "Course & Program Optimization",
          description: "Targeted SEO for each course and program page."
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "Local & Global Reach",
          description: "Optimized for local students and national/global visibility."
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 28 }),
          title: "Technical SEO & Speed",
          description: "Fast, mobile-friendly, and fully optimized websites."
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Content & Link Strategy",
          description: "High-quality content and authority-building backlinks."
        },
        {
          icon: React.createElement(IconCircleCheck, { size: 28 }),
          title: "Continuous Monitoring & Reporting",
          description: "Transparent analytics to track progress and conversions."
        }
      ],
      cta: {
        text: "Boost Your Rankings & Enrollments",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our SEO Process for Educational Institutions',
      subtitle: 'STEP-BY-STEP ORGANIC GROWTH',
      className: 'border-t border-border dark:border-gray-700',
      description: 'We follow a comprehensive SEO process to improve visibility, attract prospective students, and increase enrollments consistently.',
      steps: [
        {
          id: 1,
          title: 'Website & Keyword Audit',
          description: 'Analyze website structure, speed, and perform keyword research targeting prospective students.'
        },
        {
          id: 2,
          title: 'On-Page Optimization',
          description: 'Optimize meta tags, headings, content, and landing pages for search engines and users.'
        },
        {
          id: 3,
          title: 'Content Strategy & Creation',
          description: 'Develop blog posts, course pages, and resources that attract students organically.'
        },
        {
          id: 4,
          title: 'Technical SEO Improvements',
          description: 'Ensure mobile responsiveness, page speed, schema markup, and secure website setup.'
        },
        {
          id: 5,
          title: 'Backlink & Authority Building',
          description: 'Acquire high-quality backlinks to improve domain authority and rankings.'
        },
        {
          id: 6,
          title: 'Monitoring & Continuous Optimization',
          description: 'Track rankings, traffic, and conversions while continuously refining the SEO strategy.'
        }
      ]
    },
    testimonials: {
      title: [
        { text: "Educational Institutions Who ", gradient: false },
        { text: "Grew Organically with Us", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      description: 'See how Digi Aerotech helped schools, colleges, and coaching centers improve search visibility and attract more students.',
      testimonials: [
        {
          id: '1',
          message: 'Our college website now ranks on the first page for multiple programs. Organic student inquiries have doubled!',
          highlight: 'Organic student inquiries have doubled',
          stars: 5,
          name: 'Dr. Anjali Rao',
          designation: 'Principal',
          company: 'Sunrise College'
        },
        {
          id: '2',
          message: 'Thanks to Digi Aerotech’s SEO strategies, our coaching center saw a 50% increase in student enrollment organically.',
          highlight: '50% increase in student enrollment',
          stars: 5,
          name: 'Rohit Singh',
          designation: 'Director',
          company: 'Bright Minds Academy'
        }
      ]
    },
    cta: {
      title: 'Ready to Increase Student Leads Organically?',
      subtitle: 'Rank Higher, Attract More Students',
      description: 'Book a free SEO consultation with Digi Aerotech and start generating consistent organic enrollments today.'
    }
  }
};
