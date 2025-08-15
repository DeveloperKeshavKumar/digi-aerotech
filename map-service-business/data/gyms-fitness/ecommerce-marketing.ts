import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { ServiceIcons } from '@/constants/service-icons';

const { IconFreeRights, IconPhone, IconStarsFilled, IconRocket } = ServiceIcons;

export const map: ServiceBusinessMap = {
  service: 'ecommerce-marketing',
  business: 'gyms-fitness',
  variants: {
    hero: 'variant1',
    whyChooseUs: 'variant2',
    process: 'variant3',
    testimonials: 'variant1'
  },
  data: {
    slug: 'ecommerce-marketing',
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
        "Ecommerce Marketing for Gyms Fitness?",
        "Better Results?",
        "More Growth?",
        "Success?",
        "ROI?"
      ],
      brandLine: [
        { text: "Ecommerce Marketing for Gyms Fitness", gradient: false }
      ],
      subheadline: "Specialized ecommerce marketing strategies designed specifically for gyms fitness. Drive growth and achieve measurable results with our targeted approach.",
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
          description: "Gyms Fitness served"
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
        { text: 'Ecommerce Marketing', gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" },
        { text: ' for Gyms Fitness?', gradient: false }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconStarsFilled, { size: 24 }),
          title: 'Industry Expertise',
          description: 'Deep understanding of gyms fitness market dynamics and customer behavior patterns.'
        },
        {
          icon: React.createElement(IconStarsFilled, { size: 24 }),
          title: 'Proven Results',
          description: 'Track record of delivering measurable results for gyms fitness businesses.'
        },
        {
          icon: React.createElement(IconStarsFilled, { size: 24 }),
          title: 'Customized Approach',
          description: 'Tailored ecommerce marketing strategies designed specifically for your business needs.'
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
      title: 'Our Ecommerce Marketing for Gyms Fitness',
      subtitle: 'GYMS FITNESS SPECIALIZED SERVICES',
      description: 'Comprehensive ecommerce marketing solutions designed specifically for gyms fitness businesses.',
      services: [
        {
          id: 1,
          title: 'Strategy & Planning',
          description: 'Custom ecommerce marketing strategy development tailored for gyms fitness market requirements.',
          icon: React.createElement(IconStarsFilled, { size: 24 })
        },
        {
          id: 2,
          title: 'Implementation & Execution',
          description: 'Expert implementation of ecommerce marketing campaigns optimized for gyms fitness audience.',
          icon: React.createElement(IconStarsFilled, { size: 24 })
        },
        {
          id: 3,
          title: 'Monitoring & Optimization',
          description: 'Continuous monitoring and optimization to maximize ROI and performance for gyms fitness businesses.',
          icon: React.createElement(IconStarsFilled, { size: 24 })
        }
      ]
    },
    process: {
      title: 'Our Ecommerce Marketing Process for Gyms Fitness',
      subtitle: 'PROVEN METHODOLOGY',
      className: 'border-t border-border dark:border-gray-700',
      description: 'A systematic approach to ecommerce marketing that delivers measurable results for gyms fitness businesses.',
      steps: [
        {
          id: 1,
          title: 'Discovery & Analysis',
          description: 'Comprehensive analysis of your gyms fitness business and market landscape.'
        },
        {
          id: 2,
          title: 'Strategy Development',
          description: 'Custom ecommerce marketing strategy tailored for your specific gyms fitness goals.'
        },
        {
          id: 3,
          title: 'Implementation',
          description: 'Expert execution of ecommerce marketing campaigns with gyms fitness focus.'
        },
        {
          id: 4,
          title: 'Optimization',
          description: 'Continuous refinement and optimization based on gyms fitness market feedback.'
        }
      ]
    },
    techStack: {
      title: 'Our Ecommerce Marketing Technology Stack',
      subtitle: 'ADVANCED TOOLS & PLATFORMS',
      description: 'Industry-leading tools and platforms for ecommerce marketing success.',
      categories: ['Analytics', 'Automation', 'Optimization', 'Reporting'],
      technologies: [
        { id: 1, name: 'Google Analytics', logo: '/tech/icons8-google-analytics-96.png', category: 'Analytics' },
        { id: 2, name: 'HubSpot', logo: '/tech/icons8-hubspot-96.png', category: 'Automation' }
      ]
    },
    testimonials: {
      title: [
        { text: 'Ecommerce Marketing ', gradient: false },
        { text: 'Success Stories', gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
      ],
      description: 'Real results from gyms fitness businesses that achieved remarkable growth.',
      testimonials: [
        {
          id: '1',
          message: 'The ecommerce marketing services transformed our gyms fitness business. We saw incredible growth and results beyond our expectations.',
          highlight: 'incredible growth and results beyond expectations',
          stars: 5,
          name: 'John Smith',
          designation: 'CEO',
          company: 'Gyms Fitness Company'
        },
        {
          id: '2',
          message: 'Outstanding ecommerce marketing expertise specifically for gyms fitness. Highly recommend their services.',
          highlight: 'outstanding expertise specifically for gyms fitness',
          stars: 5,
          name: 'Jane Doe',
          designation: 'Marketing Director',
          company: 'Gyms Fitness Solutions'
        }
      ]
    },
    cta: {
      title: 'Ready to Transform Your Gyms Fitness Business?',
      subtitle: 'START YOUR ECOMMERCE MARKETING JOURNEY',
      description: 'Contact us today for a comprehensive consultation and see how our ecommerce marketing can drive growth for your gyms fitness business.'
    }
  }
};
