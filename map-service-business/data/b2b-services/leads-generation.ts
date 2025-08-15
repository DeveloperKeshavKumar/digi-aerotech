import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { ServiceIcons } from '@/constants/service-icons';

const { IconFreeRights, IconPhone, IconStarsFilled, IconRocket } = ServiceIcons;

export const map: ServiceBusinessMap = {
  service: 'leads-generation',
  business: 'b2b-services',
  variants: {
    hero: 'variant3',
    whyChooseUs: 'variant1',
    process: 'variant2',
    testimonials: 'variant3'
  },
  data: {
    slug: 'leads-generation',
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
        "Leads Generation for B2b Services?",
        "Better Results?",
        "More Growth?",
        "Success?",
        "ROI?"
      ],
      brandLine: [
        { text: "Leads Generation for B2b Services", gradient: false }
      ],
      subheadline: "Specialized leads generation strategies designed specifically for b2b services. Drive growth and achieve measurable results with our targeted approach.",
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
          description: "B2b Services served"
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
        { text: 'Leads Generation', gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" },
        { text: ' for B2b Services?', gradient: false }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconStarsFilled, { size: 24 }),
          title: 'Industry Expertise',
          description: 'Deep understanding of b2b services market dynamics and customer behavior patterns.'
        },
        {
          icon: React.createElement(IconStarsFilled, { size: 24 }),
          title: 'Proven Results',
          description: 'Track record of delivering measurable results for b2b services businesses.'
        },
        {
          icon: React.createElement(IconStarsFilled, { size: 24 }),
          title: 'Customized Approach',
          description: 'Tailored leads generation strategies designed specifically for your business needs.'
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
      title: 'Our Leads Generation for B2b Services',
      subtitle: 'B2B SERVICES SPECIALIZED SERVICES',
      description: 'Comprehensive leads generation solutions designed specifically for b2b services businesses.',
      services: [
        {
          id: 1,
          title: 'Strategy & Planning',
          description: 'Custom leads generation strategy development tailored for b2b services market requirements.',
          icon: React.createElement(IconStarsFilled, { size: 24 })
        },
        {
          id: 2,
          title: 'Implementation & Execution',
          description: 'Expert implementation of leads generation campaigns optimized for b2b services audience.',
          icon: React.createElement(IconStarsFilled, { size: 24 })
        },
        {
          id: 3,
          title: 'Monitoring & Optimization',
          description: 'Continuous monitoring and optimization to maximize ROI and performance for b2b services businesses.',
          icon: React.createElement(IconStarsFilled, { size: 24 })
        }
      ]
    },
    process: {
      title: 'Our Leads Generation Process for B2b Services',
      subtitle: 'PROVEN METHODOLOGY',
      className: 'border-t border-border dark:border-gray-700',
      description: 'A systematic approach to leads generation that delivers measurable results for b2b services businesses.',
      steps: [
        {
          id: 1,
          title: 'Discovery & Analysis',
          description: 'Comprehensive analysis of your b2b services business and market landscape.'
        },
        {
          id: 2,
          title: 'Strategy Development',
          description: 'Custom leads generation strategy tailored for your specific b2b services goals.'
        },
        {
          id: 3,
          title: 'Implementation',
          description: 'Expert execution of leads generation campaigns with b2b services focus.'
        },
        {
          id: 4,
          title: 'Optimization',
          description: 'Continuous refinement and optimization based on b2b services market feedback.'
        }
      ]
    },
    techStack: {
      title: 'Our Leads Generation Technology Stack',
      subtitle: 'ADVANCED TOOLS & PLATFORMS',
      description: 'Industry-leading tools and platforms for leads generation success.',
      categories: ['Analytics', 'Automation', 'Optimization', 'Reporting'],
      technologies: [
        { id: 1, name: 'Google Analytics', logo: '/tech/icons8-google-analytics-96.png', category: 'Analytics' },
        { id: 2, name: 'HubSpot', logo: '/tech/icons8-hubspot-96.png', category: 'Automation' }
      ]
    },
    testimonials: {
      title: [
        { text: 'Leads Generation ', gradient: false },
        { text: 'Success Stories', gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
      ],
      description: 'Real results from b2b services businesses that achieved remarkable growth.',
      testimonials: [
        {
          id: '1',
          message: 'The leads generation services transformed our b2b services business. We saw incredible growth and results beyond our expectations.',
          highlight: 'incredible growth and results beyond expectations',
          stars: 5,
          name: 'John Smith',
          designation: 'CEO',
          company: 'B2b Services Company'
        },
        {
          id: '2',
          message: 'Outstanding leads generation expertise specifically for b2b services. Highly recommend their services.',
          highlight: 'outstanding expertise specifically for b2b services',
          stars: 5,
          name: 'Jane Doe',
          designation: 'Marketing Director',
          company: 'B2b Services Solutions'
        }
      ]
    },
    cta: {
      title: 'Ready to Transform Your B2b Services Business?',
      subtitle: 'START YOUR LEADS GENERATION JOURNEY',
      description: 'Contact us today for a comprehensive consultation and see how our leads generation can drive growth for your b2b services business.'
    }
  }
};
