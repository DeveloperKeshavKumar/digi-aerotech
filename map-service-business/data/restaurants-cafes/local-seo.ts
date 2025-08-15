import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { ServiceIcons } from '@/constants/service-icons';

const { IconFreeRights, IconPhone, IconStarsFilled, IconRocket } = ServiceIcons;

export const map: ServiceBusinessMap = {
  service: 'local-seo',
  business: 'restaurants-cafes',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant3',
    process: 'variant1',
    testimonials: 'variant2'
  },
  data: {
    slug: 'local-seo',
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
        "Local Seo for Restaurants Cafes?",
        "Better Results?",
        "More Growth?",
        "Success?",
        "ROI?"
      ],
      brandLine: [
        { text: "Local Seo for Restaurants Cafes", gradient: false }
      ],
      subheadline: "Specialized local seo strategies designed specifically for restaurants cafes. Drive growth and achieve measurable results with our targeted approach.",
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
          description: "Restaurants Cafes served"
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
        { text: 'Local Seo', gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" },
        { text: ' for Restaurants Cafes?', gradient: false }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconStarsFilled, { size: 24 }),
          title: 'Industry Expertise',
          description: 'Deep understanding of restaurants cafes market dynamics and customer behavior patterns.'
        },
        {
          icon: React.createElement(IconStarsFilled, { size: 24 }),
          title: 'Proven Results',
          description: 'Track record of delivering measurable results for restaurants cafes businesses.'
        },
        {
          icon: React.createElement(IconStarsFilled, { size: 24 }),
          title: 'Customized Approach',
          description: 'Tailored local seo strategies designed specifically for your business needs.'
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
      title: 'Our Local Seo for Restaurants Cafes',
      subtitle: 'RESTAURANTS CAFES SPECIALIZED SERVICES',
      description: 'Comprehensive local seo solutions designed specifically for restaurants cafes businesses.',
      services: [
        {
          id: 1,
          title: 'Strategy & Planning',
          description: 'Custom local seo strategy development tailored for restaurants cafes market requirements.',
          icon: React.createElement(IconStarsFilled, { size: 24 })
        },
        {
          id: 2,
          title: 'Implementation & Execution',
          description: 'Expert implementation of local seo campaigns optimized for restaurants cafes audience.',
          icon: React.createElement(IconStarsFilled, { size: 24 })
        },
        {
          id: 3,
          title: 'Monitoring & Optimization',
          description: 'Continuous monitoring and optimization to maximize ROI and performance for restaurants cafes businesses.',
          icon: React.createElement(IconStarsFilled, { size: 24 })
        }
      ]
    },
    process: {
      title: 'Our Local Seo Process for Restaurants Cafes',
      subtitle: 'PROVEN METHODOLOGY',
      className: 'border-t border-border dark:border-gray-700',
      description: 'A systematic approach to local seo that delivers measurable results for restaurants cafes businesses.',
      steps: [
        {
          id: 1,
          title: 'Discovery & Analysis',
          description: 'Comprehensive analysis of your restaurants cafes business and market landscape.'
        },
        {
          id: 2,
          title: 'Strategy Development',
          description: 'Custom local seo strategy tailored for your specific restaurants cafes goals.'
        },
        {
          id: 3,
          title: 'Implementation',
          description: 'Expert execution of local seo campaigns with restaurants cafes focus.'
        },
        {
          id: 4,
          title: 'Optimization',
          description: 'Continuous refinement and optimization based on restaurants cafes market feedback.'
        }
      ]
    },
    techStack: {
      title: 'Our Local Seo Technology Stack',
      subtitle: 'ADVANCED TOOLS & PLATFORMS',
      description: 'Industry-leading tools and platforms for local seo success.',
      categories: ['Analytics', 'Automation', 'Optimization', 'Reporting'],
      technologies: [
        { id: 1, name: 'Google Analytics', logo: '/tech/icons8-google-analytics-96.png', category: 'Analytics' },
        { id: 2, name: 'HubSpot', logo: '/tech/icons8-hubspot-96.png', category: 'Automation' }
      ]
    },
    testimonials: {
      title: [
        { text: 'Local Seo ', gradient: false },
        { text: 'Success Stories', gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
      ],
      description: 'Real results from restaurants cafes businesses that achieved remarkable growth.',
      testimonials: [
        {
          id: '1',
          message: 'The local seo services transformed our restaurants cafes business. We saw incredible growth and results beyond our expectations.',
          highlight: 'incredible growth and results beyond expectations',
          stars: 5,
          name: 'John Smith',
          designation: 'CEO',
          company: 'Restaurants Cafes Company'
        },
        {
          id: '2',
          message: 'Outstanding local seo expertise specifically for restaurants cafes. Highly recommend their services.',
          highlight: 'outstanding expertise specifically for restaurants cafes',
          stars: 5,
          name: 'Jane Doe',
          designation: 'Marketing Director',
          company: 'Restaurants Cafes Solutions'
        }
      ]
    },
    cta: {
      title: 'Ready to Transform Your Restaurants Cafes Business?',
      subtitle: 'START YOUR LOCAL SEO JOURNEY',
      description: 'Contact us today for a comprehensive consultation and see how our local seo can drive growth for your restaurants cafes business.'
    }
  }
};
