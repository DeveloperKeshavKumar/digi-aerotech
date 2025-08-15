import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { ServiceIcons } from '@/constants/service-icons';

const { IconFreeRights, IconPhone, IconStarsFilled, IconRocket } = ServiceIcons;

export const map: ServiceBusinessMap = {
  service: 'mobile-development',
  business: 'startups-entrepreneurs',
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
        "Mobile Development for Startups Entrepreneurs?",
        "Better Results?",
        "More Growth?",
        "Success?",
        "ROI?"
      ],
      brandLine: [
        { text: "Mobile Development for Startups Entrepreneurs", gradient: false }
      ],
      subheadline: "Specialized mobile development strategies designed specifically for startups entrepreneurs. Drive growth and achieve measurable results with our targeted approach.",
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
          description: "Startups Entrepreneurs served"
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
        { text: ' for Startups Entrepreneurs?', gradient: false }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconStarsFilled, { size: 24 }),
          title: 'Industry Expertise',
          description: 'Deep understanding of startups entrepreneurs market dynamics and customer behavior patterns.'
        },
        {
          icon: React.createElement(IconStarsFilled, { size: 24 }),
          title: 'Proven Results',
          description: 'Track record of delivering measurable results for startups entrepreneurs businesses.'
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
      title: 'Our Mobile Development for Startups Entrepreneurs',
      subtitle: 'STARTUPS ENTREPRENEURS SPECIALIZED SERVICES',
      description: 'Comprehensive mobile development solutions designed specifically for startups entrepreneurs businesses.',
      services: [
        {
          id: 1,
          title: 'Strategy & Planning',
          description: 'Custom mobile development strategy development tailored for startups entrepreneurs market requirements.',
          icon: React.createElement(IconStarsFilled, { size: 24 })
        },
        {
          id: 2,
          title: 'Implementation & Execution',
          description: 'Expert implementation of mobile development campaigns optimized for startups entrepreneurs audience.',
          icon: React.createElement(IconStarsFilled, { size: 24 })
        },
        {
          id: 3,
          title: 'Monitoring & Optimization',
          description: 'Continuous monitoring and optimization to maximize ROI and performance for startups entrepreneurs businesses.',
          icon: React.createElement(IconStarsFilled, { size: 24 })
        }
      ]
    },
    process: {
      title: 'Our Mobile Development Process for Startups Entrepreneurs',
      subtitle: 'PROVEN METHODOLOGY',
      className: 'border-t border-border dark:border-gray-700',
      description: 'A systematic approach to mobile development that delivers measurable results for startups entrepreneurs businesses.',
      steps: [
        {
          id: 1,
          title: 'Discovery & Analysis',
          description: 'Comprehensive analysis of your startups entrepreneurs business and market landscape.'
        },
        {
          id: 2,
          title: 'Strategy Development',
          description: 'Custom mobile development strategy tailored for your specific startups entrepreneurs goals.'
        },
        {
          id: 3,
          title: 'Implementation',
          description: 'Expert execution of mobile development campaigns with startups entrepreneurs focus.'
        },
        {
          id: 4,
          title: 'Optimization',
          description: 'Continuous refinement and optimization based on startups entrepreneurs market feedback.'
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
      description: 'Real results from startups entrepreneurs businesses that achieved remarkable growth.',
      testimonials: [
        {
          id: '1',
          message: 'The mobile development services transformed our startups entrepreneurs business. We saw incredible growth and results beyond our expectations.',
          highlight: 'incredible growth and results beyond expectations',
          stars: 5,
          name: 'John Smith',
          designation: 'CEO',
          company: 'Startups Entrepreneurs Company'
        },
        {
          id: '2',
          message: 'Outstanding mobile development expertise specifically for startups entrepreneurs. Highly recommend their services.',
          highlight: 'outstanding expertise specifically for startups entrepreneurs',
          stars: 5,
          name: 'Jane Doe',
          designation: 'Marketing Director',
          company: 'Startups Entrepreneurs Solutions'
        }
      ]
    },
    cta: {
      title: 'Ready to Transform Your Startups Entrepreneurs Business?',
      subtitle: 'START YOUR MOBILE DEVELOPMENT JOURNEY',
      description: 'Contact us today for a comprehensive consultation and see how our mobile development can drive growth for your startups entrepreneurs business.'
    }
  }
};
