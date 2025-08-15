import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { ServiceIcons } from '@/constants/service-icons';

const { IconFreeRights, IconPhone, IconStarsFilled, IconRocket } = ServiceIcons;

export const map: ServiceBusinessMap = {
  service: 'mobile-development',
  business: 'hotel-resorts',
  variants: {
    hero: 'variant3',
    whyChooseUs: 'variant1',
    process: 'variant2',
    testimonials: 'variant3'
  },
  data: {
    slug: 'mobile-development',
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
        "Mobile Development for Hotel Resorts?",
        "Better Results?",
        "More Growth?",
        "Success?",
        "ROI?"
      ],
      brandLine: [
        { text: "Mobile Development for Hotel Resorts", gradient: false }
      ],
      subheadline: "Specialized mobile development strategies designed specifically for hotel resorts. Drive growth and achieve measurable results with our targeted approach.",
      ctaButtons: [
        { icon: React.createElement(IconFreeRights, { size: 30 }), text: "Get Free Consultation", link: "/contact" },
        { icon: React.createElement(IconPhone, { size: 30 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconStarsFilled, { size: 34 }),
          title: "300%+ Growth",
          description: "Average improvement"
        },
        {
          icon: React.createElement(IconStarsFilled, { size: 34 }),
          title: "500+ Clients",
          description: "Hotel Resorts served"
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
        { text: 'Why Choose Our ', gradient: false },
        { text: 'Mobile Development', gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" },
        { text: ' for Hotel Resorts?', gradient: false }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconStarsFilled, { size: 24 }),
          title: 'Industry Expertise',
          description: 'Deep understanding of hotel resorts market dynamics and customer behavior patterns.'
        },
        {
          icon: React.createElement(IconStarsFilled, { size: 24 }),
          title: 'Proven Results',
          description: 'Track record of delivering measurable results for hotel resorts businesses.'
        },
        {
          icon: React.createElement(IconStarsFilled, { size: 24 }),
          title: 'Customized Approach',
          description: 'Tailored mobile development strategies designed specifically for your business needs.'
        },
        {
          icon: React.createElement(IconStarsFilled, { size: 24 }),
          title: 'Ongoing Support',
          description: 'Continuous optimization and support to ensure long-term success and growth.'
        }
      ],
      cta: {
        text: 'Get Started Today',
        link: '#contact',
        icon: React.createElement(IconRocket, { size: 24 })
      }
    },
    typesOfServices: {
      title: 'Our Mobile Development for Hotel Resorts',
      subtitle: 'HOTEL RESORTS SPECIALIZED SERVICES',
      description: 'Comprehensive mobile development solutions designed specifically for hotel resorts businesses.',
      services: [
        {
          id: 1,
          title: 'Strategy & Planning',
          description: 'Custom mobile development strategy development tailored for hotel resorts market requirements.',
          icon: React.createElement(IconStarsFilled, { size: 24 })
        },
        {
          id: 2,
          title: 'Implementation & Execution',
          description: 'Expert implementation of mobile development campaigns optimized for hotel resorts audience.',
          icon: React.createElement(IconStarsFilled, { size: 24 })
        },
        {
          id: 3,
          title: 'Monitoring & Optimization',
          description: 'Continuous monitoring and optimization to maximize ROI and performance for hotel resorts businesses.',
          icon: React.createElement(IconStarsFilled, { size: 24 })
        }
      ]
    },
    process: {
      title: 'Our Mobile Development Process for Hotel Resorts',
      subtitle: 'PROVEN METHODOLOGY',
      className: 'border-t border-border dark:border-gray-700',
      description: 'A systematic approach to mobile development that delivers measurable results for hotel resorts businesses.',
      steps: [
        {
          id: 1,
          title: 'Discovery & Analysis',
          description: 'Comprehensive analysis of your hotel resorts business and market landscape.'
        },
        {
          id: 2,
          title: 'Strategy Development',
          description: 'Custom mobile development strategy tailored for your specific hotel resorts goals.'
        },
        {
          id: 3,
          title: 'Implementation',
          description: 'Expert execution of mobile development campaigns with hotel resorts focus.'
        },
        {
          id: 4,
          title: 'Optimization',
          description: 'Continuous refinement and optimization based on hotel resorts market feedback.'
        }
      ]
    },
    techStack: {
      title: 'Our Mobile Development Technology Stack',
      subtitle: 'ADVANCED TOOLS & PLATFORMS',
      description: 'Industry-leading tools and platforms for mobile development success.',
      categories: ['Analytics', 'Automation', 'Optimization', 'Reporting'],
      technologies: [
        { id: 1, name: 'Google Analytics', logo: '/tech/icons8-google-analytics-96.png', category: 'Analytics' },
        { id: 2, name: 'HubSpot', logo: '/tech/icons8-hubspot-96.png', category: 'Automation' }
      ]
    },
    testimonials: {
      title: [
        { text: 'Mobile Development ', gradient: false },
        { text: 'Success Stories', gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
      ],
      description: 'Real results from hotel resorts businesses that achieved remarkable growth.',
      testimonials: [
        {
          id: '1',
          message: 'The mobile development services transformed our hotel resorts business. We saw incredible growth and results beyond our expectations.',
          highlight: 'incredible growth and results beyond expectations',
          stars: 5,
          name: 'John Smith',
          designation: 'CEO',
          company: 'Hotel Resorts Company'
        },
        {
          id: '2',
          message: 'Outstanding mobile development expertise specifically for hotel resorts. Highly recommend their services.',
          highlight: 'outstanding expertise specifically for hotel resorts',
          stars: 5,
          name: 'Jane Doe',
          designation: 'Marketing Director',
          company: 'Hotel Resorts Solutions'
        }
      ]
    },
    cta: {
      title: 'Ready to Transform Your Hotel Resorts Business?',
      subtitle: 'START YOUR MOBILE DEVELOPMENT JOURNEY',
      description: 'Contact us today for a comprehensive consultation and see how our mobile development can drive growth for your hotel resorts business.'
    }
  }
};
