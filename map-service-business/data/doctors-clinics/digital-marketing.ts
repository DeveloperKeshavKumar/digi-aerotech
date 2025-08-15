import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { ServiceIcons } from '@/constants/service-icons';

const { IconFreeRights, IconPhone, IconStarsFilled, IconRocket } = ServiceIcons;

export const map: ServiceBusinessMap = {
  service: 'digital-marketing',
  business: 'doctors-clinics',
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
        "Digital Marketing for Doctors Clinics?",
        "Better Results?",
        "More Growth?",
        "Success?",
        "ROI?"
      ],
      brandLine: [
        { text: "Digital Marketing for Doctors Clinics", gradient: false }
      ],
      subheadline: "Specialized digital marketing strategies designed specifically for doctors clinics. Drive growth and achieve measurable results with our targeted approach.",
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
        { text: 'Digital Marketing', gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" },
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
      title: 'Our Digital Marketing for Doctors Clinics',
      subtitle: 'DOCTORS CLINICS SPECIALIZED SERVICES',
      description: 'Comprehensive digital marketing solutions designed specifically for doctors clinics businesses.',
      services: [
        {
          id: 1,
          title: 'Strategy & Planning',
          description: 'Custom digital marketing strategy development tailored for doctors clinics market requirements.',
          icon: React.createElement(IconStarsFilled, { size: 24 })
        },
        {
          id: 2,
          title: 'Implementation & Execution',
          description: 'Expert implementation of digital marketing campaigns optimized for doctors clinics audience.',
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
      title: 'Our Digital Marketing Process for Doctors Clinics',
      subtitle: 'PROVEN METHODOLOGY',
      className: 'border-t border-border dark:border-gray-700',
      description: 'A systematic approach to digital marketing that delivers measurable results for doctors clinics businesses.',
      steps: [
        {
          id: 1,
          title: 'Discovery & Analysis',
          description: 'Comprehensive analysis of your doctors clinics business and market landscape.'
        },
        {
          id: 2,
          title: 'Strategy Development',
          description: 'Custom digital marketing strategy tailored for your specific doctors clinics goals.'
        },
        {
          id: 3,
          title: 'Implementation',
          description: 'Expert execution of digital marketing campaigns with doctors clinics focus.'
        },
        {
          id: 4,
          title: 'Optimization',
          description: 'Continuous refinement and optimization based on doctors clinics market feedback.'
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
      description: 'Real results from doctors clinics businesses that achieved remarkable growth.',
      testimonials: [
        {
          id: '1',
          message: 'The digital marketing services transformed our doctors clinics business. We saw incredible growth and results beyond our expectations.',
          highlight: 'incredible growth and results beyond expectations',
          stars: 5,
          name: 'John Smith',
          designation: 'CEO',
          company: 'Doctors Clinics Company'
        },
        {
          id: '2',
          message: 'Outstanding digital marketing expertise specifically for doctors clinics. Highly recommend their services.',
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
      subtitle: 'START YOUR DIGITAL MARKETING JOURNEY',
      description: 'Contact us today for a comprehensive consultation and see how our digital marketing can drive growth for your doctors clinics business.'
    }
  }
};
