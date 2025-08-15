import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { ServiceIcons } from '@/constants/service-icons';

const { IconFreeRights, IconPhone, IconStarsFilled, IconRocket } = ServiceIcons;

export const map: ServiceBusinessMap = {
  service: 'marketing-automation',
  business: 'doctors-clinics',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant3',
    process: 'variant1',
    testimonials: 'variant2'
  },
  data: {
    slug: 'marketing-automation',
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
        "Marketing Automation for Doctors Clinics?",
        "Better Results?",
        "More Growth?",
        "Success?",
        "ROI?"
      ],
      brandLine: [
        { text: "Marketing Automation for Doctors Clinics", gradient: false }
      ],
      subheadline: "Specialized marketing automation strategies designed specifically for doctors clinics. Drive growth and achieve measurable results with our targeted approach.",
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
          description: "Doctors Clinics served"
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
        { text: 'Marketing Automation', gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" },
        { text: ' for Doctors Clinics?', gradient: false }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconStarsFilled, { size: 24 }),
          title: 'Industry Expertise',
          description: 'Deep understanding of doctors clinics market dynamics and customer behavior patterns.'
        },
        {
          icon: React.createElement(IconStarsFilled, { size: 24 }),
          title: 'Proven Results',
          description: 'Track record of delivering measurable results for doctors clinics businesses.'
        },
        {
          icon: React.createElement(IconStarsFilled, { size: 24 }),
          title: 'Customized Approach',
          description: 'Tailored marketing automation strategies designed specifically for your business needs.'
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
      title: 'Our Marketing Automation for Doctors Clinics',
      subtitle: 'DOCTORS CLINICS SPECIALIZED SERVICES',
      description: 'Comprehensive marketing automation solutions designed specifically for doctors clinics businesses.',
      services: [
        {
          id: 1,
          title: 'Strategy & Planning',
          description: 'Custom marketing automation strategy development tailored for doctors clinics market requirements.',
          icon: React.createElement(IconStarsFilled, { size: 24 })
        },
        {
          id: 2,
          title: 'Implementation & Execution',
          description: 'Expert implementation of marketing automation campaigns optimized for doctors clinics audience.',
          icon: React.createElement(IconStarsFilled, { size: 24 })
        },
        {
          id: 3,
          title: 'Monitoring & Optimization',
          description: 'Continuous monitoring and optimization to maximize ROI and performance for doctors clinics businesses.',
          icon: React.createElement(IconStarsFilled, { size: 24 })
        }
      ]
    },
    process: {
      title: 'Our Marketing Automation Process for Doctors Clinics',
      subtitle: 'PROVEN METHODOLOGY',
      className: 'border-t border-border dark:border-gray-700',
      description: 'A systematic approach to marketing automation that delivers measurable results for doctors clinics businesses.',
      steps: [
        {
          id: 1,
          title: 'Discovery & Analysis',
          description: 'Comprehensive analysis of your doctors clinics business and market landscape.'
        },
        {
          id: 2,
          title: 'Strategy Development',
          description: 'Custom marketing automation strategy tailored for your specific doctors clinics goals.'
        },
        {
          id: 3,
          title: 'Implementation',
          description: 'Expert execution of marketing automation campaigns with doctors clinics focus.'
        },
        {
          id: 4,
          title: 'Optimization',
          description: 'Continuous refinement and optimization based on doctors clinics market feedback.'
        }
      ]
    },
    techStack: {
      title: 'Our Marketing Automation Technology Stack',
      subtitle: 'ADVANCED TOOLS & PLATFORMS',
      description: 'Industry-leading tools and platforms for marketing automation success.',
      categories: ['Analytics', 'Automation', 'Optimization', 'Reporting'],
      technologies: [
        { id: 1, name: 'Google Analytics', logo: '/tech/icons8-google-analytics-96.png', category: 'Analytics' },
        { id: 2, name: 'HubSpot', logo: '/tech/icons8-hubspot-96.png', category: 'Automation' }
      ]
    },
    testimonials: {
      title: [
        { text: 'Marketing Automation ', gradient: false },
        { text: 'Success Stories', gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
      ],
      description: 'Real results from doctors clinics businesses that achieved remarkable growth.',
      testimonials: [
        {
          id: '1',
          message: 'The marketing automation services transformed our doctors clinics business. We saw incredible growth and results beyond our expectations.',
          highlight: 'incredible growth and results beyond expectations',
          stars: 5,
          name: 'John Smith',
          designation: 'CEO',
          company: 'Doctors Clinics Company'
        },
        {
          id: '2',
          message: 'Outstanding marketing automation expertise specifically for doctors clinics. Highly recommend their services.',
          highlight: 'outstanding expertise specifically for doctors clinics',
          stars: 5,
          name: 'Jane Doe',
          designation: 'Marketing Director',
          company: 'Doctors Clinics Solutions'
        }
      ]
    },
    cta: {
      title: 'Ready to Transform Your Doctors Clinics Business?',
      subtitle: 'START YOUR MARKETING AUTOMATION JOURNEY',
      description: 'Contact us today for a comprehensive consultation and see how our marketing automation can drive growth for your doctors clinics business.'
    }
  }
};
