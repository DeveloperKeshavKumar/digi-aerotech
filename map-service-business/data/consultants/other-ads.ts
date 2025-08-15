import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { ServiceIcons } from '@/constants/service-icons';

const { IconFreeRights, IconPhone, IconStarsFilled, IconRocket } = ServiceIcons;

export const map: ServiceBusinessMap = {
  service: 'other-ads',
  business: 'consultants',
  variants: {
    hero: 'variant1',
    whyChooseUs: 'variant2',
    process: 'variant3',
    testimonials: 'variant1'
  },
  data: {
    slug: 'other-ads',
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
        "Other Ads for Consultants?",
        "Better Results?",
        "More Growth?",
        "Success?",
        "ROI?"
      ],
      brandLine: [
        { text: "Other Ads for Consultants", gradient: false }
      ],
      subheadline: "Specialized other ads strategies designed specifically for consultants. Drive growth and achieve measurable results with our targeted approach.",
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
          description: "Consultants served"
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
        { text: 'Other Ads', gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" },
        { text: ' for Consultants?', gradient: false }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconStarsFilled, { size: 24 }),
          title: 'Industry Expertise',
          description: 'Deep understanding of consultants market dynamics and customer behavior patterns.'
        },
        {
          icon: React.createElement(IconStarsFilled, { size: 24 }),
          title: 'Proven Results',
          description: 'Track record of delivering measurable results for consultants businesses.'
        },
        {
          icon: React.createElement(IconStarsFilled, { size: 24 }),
          title: 'Customized Approach',
          description: 'Tailored other ads strategies designed specifically for your business needs.'
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
      title: 'Our Other Ads for Consultants',
      subtitle: 'CONSULTANTS SPECIALIZED SERVICES',
      description: 'Comprehensive other ads solutions designed specifically for consultants businesses.',
      services: [
        {
          id: 1,
          title: 'Strategy & Planning',
          description: 'Custom other ads strategy development tailored for consultants market requirements.',
          icon: React.createElement(IconStarsFilled, { size: 24 })
        },
        {
          id: 2,
          title: 'Implementation & Execution',
          description: 'Expert implementation of other ads campaigns optimized for consultants audience.',
          icon: React.createElement(IconStarsFilled, { size: 24 })
        },
        {
          id: 3,
          title: 'Monitoring & Optimization',
          description: 'Continuous monitoring and optimization to maximize ROI and performance for consultants businesses.',
          icon: React.createElement(IconStarsFilled, { size: 24 })
        }
      ]
    },
    process: {
      title: 'Our Other Ads Process for Consultants',
      subtitle: 'PROVEN METHODOLOGY',
      className: 'border-t border-border dark:border-gray-700',
      description: 'A systematic approach to other ads that delivers measurable results for consultants businesses.',
      steps: [
        {
          id: 1,
          title: 'Discovery & Analysis',
          description: 'Comprehensive analysis of your consultants business and market landscape.'
        },
        {
          id: 2,
          title: 'Strategy Development',
          description: 'Custom other ads strategy tailored for your specific consultants goals.'
        },
        {
          id: 3,
          title: 'Implementation',
          description: 'Expert execution of other ads campaigns with consultants focus.'
        },
        {
          id: 4,
          title: 'Optimization',
          description: 'Continuous refinement and optimization based on consultants market feedback.'
        }
      ]
    },
    techStack: {
      title: 'Our Other Ads Technology Stack',
      subtitle: 'ADVANCED TOOLS & PLATFORMS',
      description: 'Industry-leading tools and platforms for other ads success.',
      categories: ['Analytics', 'Automation', 'Optimization', 'Reporting'],
      technologies: [
        { id: 1, name: 'Google Analytics', logo: '/tech/icons8-google-analytics-96.png', category: 'Analytics' },
        { id: 2, name: 'HubSpot', logo: '/tech/icons8-hubspot-96.png', category: 'Automation' }
      ]
    },
    testimonials: {
      title: [
        { text: 'Other Ads ', gradient: false },
        { text: 'Success Stories', gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
      ],
      description: 'Real results from consultants businesses that achieved remarkable growth.',
      testimonials: [
        {
          id: '1',
          message: 'The other ads services transformed our consultants business. We saw incredible growth and results beyond our expectations.',
          highlight: 'incredible growth and results beyond expectations',
          stars: 5,
          name: 'John Smith',
          designation: 'CEO',
          company: 'Consultants Company'
        },
        {
          id: '2',
          message: 'Outstanding other ads expertise specifically for consultants. Highly recommend their services.',
          highlight: 'outstanding expertise specifically for consultants',
          stars: 5,
          name: 'Jane Doe',
          designation: 'Marketing Director',
          company: 'Consultants Solutions'
        }
      ]
    },
    cta: {
      title: 'Ready to Transform Your Consultants Business?',
      subtitle: 'START YOUR OTHER ADS JOURNEY',
      description: 'Contact us today for a comprehensive consultation and see how our other ads can drive growth for your consultants business.'
    }
  }
};
