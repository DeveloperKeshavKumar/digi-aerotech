import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { ServiceIcons } from '@/constants/service-icons';

const { IconFreeRights, IconPhone, IconStarsFilled, IconRocket } = ServiceIcons;

export const map: ServiceBusinessMap = {
  service: 'gmb-services',
  business: 'interior-designers',
  variants: {
    hero: 'variant1',
    whyChooseUs: 'variant2',
    process: 'variant3',
    testimonials: 'variant1'
  },
  data: {
    slug: 'gmb-services',
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
        "Gmb Services for Interior Designers?",
        "Better Results?",
        "More Growth?",
        "Success?",
        "ROI?"
      ],
      brandLine: [
        { text: "Gmb Services for Interior Designers", gradient: false }
      ],
      subheadline: "Specialized gmb services strategies designed specifically for interior designers. Drive growth and achieve measurable results with our targeted approach.",
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
          description: "Interior Designers served"
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
        { text: 'Gmb Services', gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" },
        { text: ' for Interior Designers?', gradient: false }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconStarsFilled, { size: 24 }),
          title: 'Industry Expertise',
          description: 'Deep understanding of interior designers market dynamics and customer behavior patterns.'
        },
        {
          icon: React.createElement(IconStarsFilled, { size: 24 }),
          title: 'Proven Results',
          description: 'Track record of delivering measurable results for interior designers businesses.'
        },
        {
          icon: React.createElement(IconStarsFilled, { size: 24 }),
          title: 'Customized Approach',
          description: 'Tailored gmb services strategies designed specifically for your business needs.'
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
      title: 'Our Gmb Services for Interior Designers',
      subtitle: 'INTERIOR DESIGNERS SPECIALIZED SERVICES',
      description: 'Comprehensive gmb services solutions designed specifically for interior designers businesses.',
      services: [
        {
          id: 1,
          title: 'Strategy & Planning',
          description: 'Custom gmb services strategy development tailored for interior designers market requirements.',
          icon: React.createElement(IconStarsFilled, { size: 24 })
        },
        {
          id: 2,
          title: 'Implementation & Execution',
          description: 'Expert implementation of gmb services campaigns optimized for interior designers audience.',
          icon: React.createElement(IconStarsFilled, { size: 24 })
        },
        {
          id: 3,
          title: 'Monitoring & Optimization',
          description: 'Continuous monitoring and optimization to maximize ROI and performance for interior designers businesses.',
          icon: React.createElement(IconStarsFilled, { size: 24 })
        }
      ]
    },
    process: {
      title: 'Our Gmb Services Process for Interior Designers',
      subtitle: 'PROVEN METHODOLOGY',
      className: 'border-t border-border dark:border-gray-700',
      description: 'A systematic approach to gmb services that delivers measurable results for interior designers businesses.',
      steps: [
        {
          id: 1,
          title: 'Discovery & Analysis',
          description: 'Comprehensive analysis of your interior designers business and market landscape.'
        },
        {
          id: 2,
          title: 'Strategy Development',
          description: 'Custom gmb services strategy tailored for your specific interior designers goals.'
        },
        {
          id: 3,
          title: 'Implementation',
          description: 'Expert execution of gmb services campaigns with interior designers focus.'
        },
        {
          id: 4,
          title: 'Optimization',
          description: 'Continuous refinement and optimization based on interior designers market feedback.'
        }
      ]
    },
    techStack: {
      title: 'Our Gmb Services Technology Stack',
      subtitle: 'ADVANCED TOOLS & PLATFORMS',
      description: 'Industry-leading tools and platforms for gmb services success.',
      categories: ['Analytics', 'Automation', 'Optimization', 'Reporting'],
      technologies: [
        { id: 1, name: 'Google Analytics', logo: '/tech/icons8-google-analytics-96.png', category: 'Analytics' },
        { id: 2, name: 'HubSpot', logo: '/tech/icons8-hubspot-96.png', category: 'Automation' }
      ]
    },
    testimonials: {
      title: [
        { text: 'Gmb Services ', gradient: false },
        { text: 'Success Stories', gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
      ],
      description: 'Real results from interior designers businesses that achieved remarkable growth.',
      testimonials: [
        {
          id: '1',
          message: 'The gmb services services transformed our interior designers business. We saw incredible growth and results beyond our expectations.',
          highlight: 'incredible growth and results beyond expectations',
          stars: 5,
          name: 'John Smith',
          designation: 'CEO',
          company: 'Interior Designers Company'
        },
        {
          id: '2',
          message: 'Outstanding gmb services expertise specifically for interior designers. Highly recommend their services.',
          highlight: 'outstanding expertise specifically for interior designers',
          stars: 5,
          name: 'Jane Doe',
          designation: 'Marketing Director',
          company: 'Interior Designers Solutions'
        }
      ]
    },
    cta: {
      title: 'Ready to Transform Your Interior Designers Business?',
      subtitle: 'START YOUR GMB SERVICES JOURNEY',
      description: 'Contact us today for a comprehensive consultation and see how our gmb services can drive growth for your interior designers business.'
    }
  }
};
