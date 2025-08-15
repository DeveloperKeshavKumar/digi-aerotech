import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { ServiceIcons } from '@/constants/service-icons';

const { IconFreeRights, IconPhone, IconStarsFilled, IconRocket } = ServiceIcons;

export const map: ServiceBusinessMap = {
  service: 'digital-marketing',
  business: 'travel-tourism',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant3',
    process: 'variant1',
    testimonials: 'variant2'
  },
  data: {
    slug: 'digital-marketing',
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
        "Digital Marketing for Travel Tourism?",
        "Better Results?",
        "More Growth?",
        "Success?",
        "ROI?"
      ],
      brandLine: [
        { text: "Digital Marketing for Travel Tourism", gradient: false }
      ],
      subheadline: "Specialized digital marketing strategies designed specifically for travel tourism. Drive growth and achieve measurable results with our targeted approach.",
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
          description: "Travel Tourism served"
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
        { text: 'Digital Marketing', gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" },
        { text: ' for Travel Tourism?', gradient: false }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconStarsFilled, { size: 24 }),
          title: 'Industry Expertise',
          description: 'Deep understanding of travel tourism market dynamics and customer behavior patterns.'
        },
        {
          icon: React.createElement(IconStarsFilled, { size: 24 }),
          title: 'Proven Results',
          description: 'Track record of delivering measurable results for travel tourism businesses.'
        },
        {
          icon: React.createElement(IconStarsFilled, { size: 24 }),
          title: 'Customized Approach',
          description: 'Tailored digital marketing strategies designed specifically for your business needs.'
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
      title: 'Our Digital Marketing for Travel Tourism',
      subtitle: 'TRAVEL TOURISM SPECIALIZED SERVICES',
      description: 'Comprehensive digital marketing solutions designed specifically for travel tourism businesses.',
      services: [
        {
          id: 1,
          title: 'Strategy & Planning',
          description: 'Custom digital marketing strategy development tailored for travel tourism market requirements.',
          icon: React.createElement(IconStarsFilled, { size: 24 })
        },
        {
          id: 2,
          title: 'Implementation & Execution',
          description: 'Expert implementation of digital marketing campaigns optimized for travel tourism audience.',
          icon: React.createElement(IconStarsFilled, { size: 24 })
        },
        {
          id: 3,
          title: 'Monitoring & Optimization',
          description: 'Continuous monitoring and optimization to maximize ROI and performance for travel tourism businesses.',
          icon: React.createElement(IconStarsFilled, { size: 24 })
        }
      ]
    },
    process: {
      title: 'Our Digital Marketing Process for Travel Tourism',
      subtitle: 'PROVEN METHODOLOGY',
      className: 'border-t border-border dark:border-gray-700',
      description: 'A systematic approach to digital marketing that delivers measurable results for travel tourism businesses.',
      steps: [
        {
          id: 1,
          title: 'Discovery & Analysis',
          description: 'Comprehensive analysis of your travel tourism business and market landscape.'
        },
        {
          id: 2,
          title: 'Strategy Development',
          description: 'Custom digital marketing strategy tailored for your specific travel tourism goals.'
        },
        {
          id: 3,
          title: 'Implementation',
          description: 'Expert execution of digital marketing campaigns with travel tourism focus.'
        },
        {
          id: 4,
          title: 'Optimization',
          description: 'Continuous refinement and optimization based on travel tourism market feedback.'
        }
      ]
    },
    techStack: {
      title: 'Our Digital Marketing Technology Stack',
      subtitle: 'ADVANCED TOOLS & PLATFORMS',
      description: 'Industry-leading tools and platforms for digital marketing success.',
      categories: ['Analytics', 'Automation', 'Optimization', 'Reporting'],
      technologies: [
        { id: 1, name: 'Google Analytics', logo: '/tech/icons8-google-analytics-96.png', category: 'Analytics' },
        { id: 2, name: 'HubSpot', logo: '/tech/icons8-hubspot-96.png', category: 'Automation' }
      ]
    },
    testimonials: {
      title: [
        { text: 'Digital Marketing ', gradient: false },
        { text: 'Success Stories', gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
      ],
      description: 'Real results from travel tourism businesses that achieved remarkable growth.',
      testimonials: [
        {
          id: '1',
          message: 'The digital marketing services transformed our travel tourism business. We saw incredible growth and results beyond our expectations.',
          highlight: 'incredible growth and results beyond expectations',
          stars: 5,
          name: 'John Smith',
          designation: 'CEO',
          company: 'Travel Tourism Company'
        },
        {
          id: '2',
          message: 'Outstanding digital marketing expertise specifically for travel tourism. Highly recommend their services.',
          highlight: 'outstanding expertise specifically for travel tourism',
          stars: 5,
          name: 'Jane Doe',
          designation: 'Marketing Director',
          company: 'Travel Tourism Solutions'
        }
      ]
    },
    cta: {
      title: 'Ready to Transform Your Travel Tourism Business?',
      subtitle: 'START YOUR DIGITAL MARKETING JOURNEY',
      description: 'Contact us today for a comprehensive consultation and see how our digital marketing can drive growth for your travel tourism business.'
    }
  }
};
