import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { ServiceIcons } from '@/constants/service-icons';
import { IconAdjustmentsAlt, IconArrowRight, IconBrandHipchat, IconBriefcase2, IconChartBar, IconGraph, IconLifebuoy, IconRefresh } from '@tabler/icons-react';
import { Struggles } from '@/components/homepage/struggles';

const { IconFreeRights, IconPhone, IconStarsFilled, IconRocket } = ServiceIcons;

export const map: ServiceBusinessMap = {
  service: '360-digital-marketing',
  business: 'fashion-brands',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant3',
    process: 'variant1',
    testimonials: 'variant2'
  },
  data: {
    slug: '360-digital-marketing',
    showSections: {
      hero: true,
      whyChooseUs: true,
      typesOfServices: true,
      process: true,
      techStack: true,
      testimonials: true,
      cta: true
    },
    customSections: [
      {
        component: Struggles,
        position: "beforeWhyChooseUs",
        props: {
          title: [
            { text: "The Pain Points ", gradient: false },
            { text: "Fashion Brands Face", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
          ],
          subheadline: "Running a fashion brand is bold. Growing it online is even bolder.",
          painPoints: [
            "Stunning collections but no online sales",
            "High competition from big labels & fast fashion giants",
            "No visibility on Google for 'Best fashion store in India'",
            "Instagram followers but zero conversions",
            "Weak websites that don’t convert visitors into buyers"
          ],
          solutionPoints: [
            " Dominate Google & Maps for local + online fashion searches",
            " Instagram & Facebook ads that actually convert to sales",
            " High-converting fashion websites & e-commerce stores",
            " Content marketing that builds brand love & repeat buyers",
            " SEO strategies to rank for style trends & categories"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Grow My Fashion Brand Now"
          }
        }

      }
    ],
    hero: {
      initial: "Need ",
      headlineKeywords: [
        "360 Digital Marketing for Fashion Brands?",
      ],
      brandLine: [
        { text: "✨ From Runway to Real Customers", gradient: false }
      ],
      subheadline: "With Digi Aerotech’s 360° Fashion Marketing System, your brand gets the visibility, trust, and sales it deserves - across Google, Instagram & E-commerce.",
      ctaButtons: [
        { icon: React.createElement(IconFreeRights, { size: 30 }), text: "Get Free Consultation", link: "/contact" },
        { icon: React.createElement(IconPhone, { size: 30 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconGraph, { size: 34 }),
          title: "300%+ Growth",
          description: "in Leads"
        },
        {
          icon: React.createElement(IconBriefcase2, { size: 34 }),
          title: "50+ Clients",
          description: "Fashion Brands served"
        },
        {
          icon: React.createElement(IconStarsFilled, { size: 34 }),
          title: "4.9/5 Rating",
          description: "Client satisfaction"
        },
        {
          icon: React.createElement(IconLifebuoy, { size: 34 }),
          title: "24/7 Support",
          description: "Always available"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: 'Why Choose Our ', gradient: false },
        { text: '360 Digital Marketing', gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" },
        { text: ' for Fashion Brands?', gradient: false }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconBrandHipchat, { size: 24 }),
          title: 'Industry Expertise',
          description: 'Deep understanding of fashion brand market dynamics and customer behavior patterns.'
        },
        {
          icon: React.createElement(IconChartBar, { size: 24 }),
          title: 'Proven Results',
          description: 'Track record of delivering measurable results for fashion businesses.'
        },
        {
          icon: React.createElement(IconAdjustmentsAlt, { size: 24 }),
          title: 'Customized Approach',
          description: 'Tailored 360° digital marketing strategies designed specifically for your business needs.'
        },
        {
          icon: React.createElement(IconRefresh, { size: 24 }),
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
      title: 'Our 360 Digital Marketing for Fashion Brands',
      subtitle: 'FASHION BRANDS SPECIALIZED SERVICES',
      description: 'Comprehensive 360 digital marketing solutions designed specifically for fashion brands businesses.',
      services: [
        {
          id: 1,
          title: 'Strategy & Planning',
          description: 'Custom 360 digital marketing strategy development tailored for fashion brands market requirements.',
          icon: React.createElement(IconStarsFilled, { size: 24 })
        },
        {
          id: 2,
          title: 'Implementation & Execution',
          description: 'Expert implementation of 360 digital marketing campaigns optimized for fashion brands audience.',
          icon: React.createElement(IconStarsFilled, { size: 24 })
        },
        {
          id: 3,
          title: 'Monitoring & Optimization',
          description: 'Continuous monitoring and optimization to maximize ROI and performance for fashion brands businesses.',
          icon: React.createElement(IconStarsFilled, { size: 24 })
        }
      ]
    },
    process: {
      title: 'The Ninja Workflow — Our Secret Fashion Growth Framework™',
      subtitle: 'PROVEN 6-STEP SYSTEM',
      className: 'border-t border-border dark:border-gray-700',
      description: 'Our proprietary 6-step framework designed to turn local fashion boutiques into nationally recognized labels.',
      steps: [
        {
          id: 1,
          title: 'Style Analysis',
          description: 'We dive deep into your brand’s identity, target audience, and fashion persona to align marketing with your unique vibe.'
        },
        {
          id: 2,
          title: 'Runway to Website',
          description: 'Design and develop a luxury e-commerce website featuring pro product photography, smooth navigation, and smart checkout.'
        },
        {
          id: 3,
          title: 'Viral Ads System',
          description: 'Launch UGC and influencer-driven ads across Meta, Instagram, and TikTok to create buzz and drive instant traction.'
        },
        {
          id: 4,
          title: 'Sales Funnel Optimization',
          description: 'Set up advanced retargeting, upsell bundles, cart recovery, and automation tools to convert traffic into buyers.'
        },
        {
          id: 5,
          title: 'SEO & Content Engine',
          description: 'Drive long-term organic growth with style-based blog content, fashion lookbooks, and trend-targeted SEO strategies.'
        },
        {
          id: 6,
          title: 'Scale Like a Label',
          description: 'Expand your reach through Google Shopping Ads, email/SMS marketing, and international campaigns for brand dominance.'
        }
      ]
    },
    testimonials: {
      title: [
        { text: '360 Digital Marketing ', gradient: false },
        { text: 'Success Stories', gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
      ],
      description: 'Real results from fashion brands businesses that achieved remarkable growth.',
      testimonials: [
        {
          id: '1',
          message: 'The 360 digital marketing services transformed our fashion brands business. We saw incredible growth and results beyond our expectations.',
          highlight: 'incredible growth and results beyond expectations',
          stars: 5,
          name: 'John Smith',
          designation: 'CEO',
          company: 'Fashion Brands Company'
        },
        {
          id: '2',
          message: 'Outstanding 360 digital marketing expertise specifically for fashion brands. Highly recommend their services.',
          highlight: 'outstanding expertise specifically for fashion brands',
          stars: 5,
          name: 'Jane Doe',
          designation: 'Marketing Director',
          company: 'Fashion Brands Solutions'
        }
      ]
    },
    cta: {
      title: 'Ready to Transform Your Fashion Brands Business?',
      subtitle: 'Don’t Let Your Fashion Brand Stay Hidden.',
      description: 'With Digi Aerotech’s 360° Digital Marketing for Fashion Brands, you’ll stand out, sell more, and build a loyal fashion community.'
    }
  }
};
