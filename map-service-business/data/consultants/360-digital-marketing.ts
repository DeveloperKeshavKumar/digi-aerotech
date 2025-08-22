import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { ServiceIcons } from '@/constants/service-icons';

const { IconFreeRights, IconPhone, IconStarsFilled, IconRocket } = ServiceIcons;

export const map: ServiceBusinessMap = {
  service: '360-digital-marketing',
  business: 'consultants',
  variants: {
    hero: 'variant1',
    whyChooseUs: 'variant2',
    process: 'variant3',
    testimonials: 'variant2'
  },
  data: {
    slug: '360-digital-marketing',
    showSections: {
      hero: true,
      whyChooseUs: true,
      typesOfServices: true,
      process: true,
      techStack: true,
      testimonials: true,
      cta: true
    },
    customSections: [],
    hero: {
      initial: "Need ",
      headlineKeywords: [
        "360 Digital Marketing for Consultants?",
        "More Qualified Leads?",
        "Higher Client Conversions?",
        "Consistent Growth?",
        "Proven ROI?"
      ],
      brandLine: [
        { text: "🚀 Accelerate Your Consultancy with 360 Digital Marketing", gradient: false }
      ],
      subheadline: "Tailored digital marketing strategies for consultants to attract the right clients, build authority, and scale profitably.",
      ctaButtons: [
        { icon: React.createElement(IconFreeRights, { size: 30 }), text: "Book Free Strategy Call", link: "/contact" },
        { icon: React.createElement(IconPhone, { size: 30 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconStarsFilled, { size: 34 }),
          title: "300%+ Lead Growth",
          description: "For consultant campaigns"
        },
        {
          icon: React.createElement(IconStarsFilled, { size: 34 }),
          title: "500+ Consultants",
          description: "Scaled successfully"
        },
        {
          icon: React.createElement(IconStarsFilled, { size: 34 }),
          title: "4.9/5 Rating",
          description: "Client satisfaction"
        },
        {
          icon: React.createElement(IconStarsFilled, { size: 34 }),
          title: "24/7 Support",
          description: "Always available"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: 'Why Digi Aerotech is the ', gradient: false },
        { text: '#1 Choice for Consultants', gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconStarsFilled, { size: 24 }),
          title: 'Deep Understanding of Consulting Market',
          description: 'We know what decision-makers look for when hiring consultants — and we build campaigns that match their psychology.'
        },
        {
          icon: React.createElement(IconStarsFilled, { size: 24 }),
          title: 'Quality Lead Generation',
          description: 'No vanity metrics — we focus on high-quality leads that convert into long-term clients for your consultancy.'
        },
        {
          icon: React.createElement(IconStarsFilled, { size: 24 }),
          title: 'Proven Track Record',
          description: 'From business consultants to IT advisors, our strategies have helped consultants scale consistently.'
        },
        {
          icon: React.createElement(IconStarsFilled, { size: 24 }),
          title: 'Transparent ROI Reporting',
          description: 'We provide crystal-clear reporting so you know exactly how your investment is driving measurable growth.'
        },
        {
          icon: React.createElement(IconStarsFilled, { size: 24 }),
          title: 'Flexible & Scalable Plans',
          description: 'Whether you’re a solo consultant or a consulting firm, we adapt our solutions to grow with you.'
        }
      ],
      cta: {
        text: 'Start Growing Your Consulting Business',
        link: '#contact',
        icon: React.createElement(IconRocket, { size: 24 })
      }
    },
    typesOfServices: {
      title: '360° Digital Marketing for Consultants',
      subtitle: 'SOLUTIONS DESIGNED FOR CONSULTING SUCCESS',
      description: 'Comprehensive services tailored for consultants to build authority, attract ideal clients, and scale revenue.',
      services: [
        {
          id: 1,
          title: 'Personal Branding & Authority Building',
          description: 'Position yourself as the go-to expert through LinkedIn growth, content marketing, and PR strategies.',
          icon: React.createElement(IconStarsFilled, { size: 24 })
        },
        {
          id: 2,
          title: 'Lead Generation Campaigns',
          description: 'Targeted ads, SEO, and webinars designed to capture high-intent leads looking for consultants like you.',
          icon: React.createElement(IconStarsFilled, { size: 24 })
        },
        {
          id: 3,
          title: 'Conversion-Focused Funnels',
          description: 'Landing pages, case studies, and automated follow-ups to convert leads into paying clients.',
          icon: React.createElement(IconStarsFilled, { size: 24 })
        }
      ]
    },
    process: {
      title: 'Our Proven Process for Consultants',
      subtitle: 'STEP-BY-STEP GROWTH SYSTEM',
      className: 'border-t border-border dark:border-gray-700',
      description: 'A structured, repeatable system designed to consistently bring consultants new clients and higher revenue.',
      steps: [
        {
          id: 1,
          title: 'Market & Positioning Research',
          description: 'Analyze your niche, competitors, and audience to position you as the #1 choice.'
        },
        {
          id: 2,
          title: 'Authority Content Strategy',
          description: 'Develop expert-driven blogs, case studies, and LinkedIn content that attracts clients.'
        },
        {
          id: 3,
          title: 'Lead Generation Execution',
          description: 'Run targeted ads, SEO, and campaigns that fill your pipeline with quality prospects.'
        },
        {
          id: 4,
          title: 'Conversion Optimization',
          description: 'Deploy landing pages, funnels, and nurturing workflows to convert leads into loyal clients.'
        },
        {
          id: 5,
          title: 'Continuous Optimization',
          description: 'Monitor performance, refine strategies, and scale your consultancy sustainably.'
        }
      ]
    },
    techStack: {
      title: 'Smart Marketing Tools for Consultants',
      subtitle: 'TECH THAT DRIVES RESULTS',
      description: 'We leverage cutting-edge tools for analytics, automation, and conversion tracking to maximize results.',
      categories: ['Analytics', 'Automation', 'CRM', 'Lead Nurturing'],
      technologies: [
        { id: 1, name: 'Google Analytics', logo: '/tech/icons8-google-analytics-96.png', category: 'Analytics' },
        { id: 2, name: 'HubSpot', logo: '/tech/icons8-hubspot-96.png', category: 'CRM' },
        { id: 3, name: 'LinkedIn Ads', logo: '/tech/icons8-linkedin-96.png', category: 'Lead Nurturing' },
        { id: 4, name: 'Mailchimp', logo: '/tech/icons8-mailchimp-96.png', category: 'Automation' }
      ]
    },
    testimonials: {
      title: [
        { text: 'Consultants Who ', gradient: false },
        { text: 'Scaled with Us', gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
      ],
      description: 'See how Digi Aerotech has helped consultants build authority, generate leads, and scale revenue.',
      testimonials: [
        {
          id: '1',
          message: 'Digi Aerotech helped me attract consistent leads through LinkedIn and SEO. Within 4 months, I doubled my consulting clients.',
          highlight: 'doubled my consulting clients',
          stars: 5,
          name: 'Raj Malhotra',
          designation: 'Independent Business Consultant',
          company: 'Raj Consulting'
        },
        {
          id: '2',
          message: 'Their team understands the consulting industry inside out. My firm now has a predictable pipeline of high-value clients.',
          highlight: 'predictable pipeline of high-value clients',
          stars: 5,
          name: 'Sarah Khan',
          designation: 'Founder',
          company: 'Khan Advisory'
        }
      ]
    },
    cta: {
      title: 'Ready to Attract More Clients & Scale Your Consultancy?',
      subtitle: 'YOUR GROWTH STARTS HERE',
      description: 'Book a free strategy session with Digi Aerotech and discover how our 360° digital marketing can transform your consulting business.'
    }
  }
};
