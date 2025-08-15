import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { ServiceIcons } from '@/constants/service-icons';

const { IconFreeRights, IconPhone, IconStarsFilled, IconRocket } = ServiceIcons;

export const map: ServiceBusinessMap = {
  service: 'seo-services',
  business: 'e-commerce-brands',
  variants: {
    hero: 'variant1',
    whyChooseUs: 'variant2',
    process: 'variant3',
    testimonials: 'variant1'
  },
  data: {
    slug: 'seo-services',
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
        "Seo Services for E Commerce Brands?",
        "Better Results?",
        "More Growth?",
        "Success?",
        "ROI?"
      ],
      brandLine: [
        { text: "Seo Services for E Commerce Brands", gradient: false }
      ],
      subheadline: "Specialized seo services strategies designed specifically for e commerce brands. Drive growth and achieve measurable results with our targeted approach.",
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
          description: "E Commerce Brands served"
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
        { text: 'Seo Services', gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" },
        { text: ' for E Commerce Brands?', gradient: false }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconStarsFilled, { size: 24 }),
          title: 'Industry Expertise',
          description: 'Deep understanding of e commerce brands market dynamics and customer behavior patterns.'
        },
        {
          icon: React.createElement(IconStarsFilled, { size: 24 }),
          title: 'Proven Results',
          description: 'Track record of delivering measurable results for e commerce brands businesses.'
        },
        {
          icon: React.createElement(IconStarsFilled, { size: 24 }),
          title: 'Customized Approach',
          description: 'Tailored seo services strategies designed specifically for your business needs.'
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
      title: 'Our Seo Services for E Commerce Brands',
      subtitle: 'E COMMERCE BRANDS SPECIALIZED SERVICES',
      description: 'Comprehensive seo services solutions designed specifically for e commerce brands businesses.',
      services: [
        {
          id: 1,
          title: 'Strategy & Planning',
          description: 'Custom seo services strategy development tailored for e commerce brands market requirements.',
          icon: React.createElement(IconStarsFilled, { size: 24 })
        },
        {
          id: 2,
          title: 'Implementation & Execution',
          description: 'Expert implementation of seo services campaigns optimized for e commerce brands audience.',
          icon: React.createElement(IconStarsFilled, { size: 24 })
        },
        {
          id: 3,
          title: 'Monitoring & Optimization',
          description: 'Continuous monitoring and optimization to maximize ROI and performance for e commerce brands businesses.',
          icon: React.createElement(IconStarsFilled, { size: 24 })
        }
      ]
    },
    process: {
      title: 'Our Seo Services Process for E Commerce Brands',
      subtitle: 'PROVEN METHODOLOGY',
      className: 'border-t border-border dark:border-gray-700',
      description: 'A systematic approach to seo services that delivers measurable results for e commerce brands businesses.',
      steps: [
        {
          id: 1,
          title: 'Discovery & Analysis',
          description: 'Comprehensive analysis of your e commerce brands business and market landscape.'
        },
        {
          id: 2,
          title: 'Strategy Development',
          description: 'Custom seo services strategy tailored for your specific e commerce brands goals.'
        },
        {
          id: 3,
          title: 'Implementation',
          description: 'Expert execution of seo services campaigns with e commerce brands focus.'
        },
        {
          id: 4,
          title: 'Optimization',
          description: 'Continuous refinement and optimization based on e commerce brands market feedback.'
        }
      ]
    },
    techStack: {
      title: 'Our Seo Services Technology Stack',
      subtitle: 'ADVANCED TOOLS & PLATFORMS',
      description: 'Industry-leading tools and platforms for seo services success.',
      categories: ['Analytics', 'Automation', 'Optimization', 'Reporting'],
      technologies: [
        { id: 1, name: 'Google Analytics', logo: '/tech/icons8-google-analytics-96.png', category: 'Analytics' },
        { id: 2, name: 'HubSpot', logo: '/tech/icons8-hubspot-96.png', category: 'Automation' }
      ]
    },
    testimonials: {
      title: [
        { text: 'Seo Services ', gradient: false },
        { text: 'Success Stories', gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
      ],
      description: 'Real results from e commerce brands businesses that achieved remarkable growth.',
      testimonials: [
        {
          id: '1',
          message: 'The seo services services transformed our e commerce brands business. We saw incredible growth and results beyond our expectations.',
          highlight: 'incredible growth and results beyond expectations',
          stars: 5,
          name: 'John Smith',
          designation: 'CEO',
          company: 'E Commerce Brands Company'
        },
        {
          id: '2',
          message: 'Outstanding seo services expertise specifically for e commerce brands. Highly recommend their services.',
          highlight: 'outstanding expertise specifically for e commerce brands',
          stars: 5,
          name: 'Jane Doe',
          designation: 'Marketing Director',
          company: 'E Commerce Brands Solutions'
        }
      ]
    },
    cta: {
      title: 'Ready to Transform Your E Commerce Brands Business?',
      subtitle: 'START YOUR SEO SERVICES JOURNEY',
      description: 'Contact us today for a comprehensive consultation and see how our seo services can drive growth for your e commerce brands business.'
    }
  }
};
