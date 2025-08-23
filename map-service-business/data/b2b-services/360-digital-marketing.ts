import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { ServiceIcons } from '@/constants/service-icons';
import { IconAdjustments, IconAdjustmentsAlt, IconArrowRight, IconBrain, IconBriefcase, IconBulb, IconChartBar, IconClock, IconEyeCog, IconGenderAgender, IconHelp, IconRefresh, IconSettings, IconStar, IconTarget, IconTrendingUp, IconUsers } from '@tabler/icons-react';
import { Struggles } from '@/components/homepage/struggles';
import { Cog } from 'lucide-react';
import { FaqSection } from '@/components/services/faq-section';

const { IconFreeRights, IconPhone, IconStarsFilled, IconRocket } = ServiceIcons;

export const map: ServiceBusinessMap = {
  service: '360-digital-marketing',
  business: 'b2b-services',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant1',
    process: 'variant3',
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
            { text: "The B2B Growth ", gradient: false },
            { text: "Pain Points We Solve", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
          ],
          subheadline: "Marketing for B2B services can be challenging without the right approach.",
          painPoints: [
            "B2B website that looks like a brochure, not a sales funnel",
            "Competitors capturing your clients with smarter digital systems",
            "Spending on ads but getting zero decision-maker leads",
            "Cold calling & LinkedIn spam with no conversions",
            "Long sales cycles with leads dropping off midway"
          ],
          solutionPoints: [
            "Conversion-focused websites designed as effective sales funnels",
            "Digital systems that outsmart competitors and retain clients",
            "Targeted ad campaigns focused on decision-makers for quality lead generation",
            "Strategic outreach replacing spam with meaningful LinkedIn engagement",
            "Lead nurturing workflows that shorten sales cycles and improve conversions"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Fix My B2B Growth Now"
          }
        }
      }, {
        component: FaqSection,
        position: 'afterTestimonials',
        props: {
          faqs: [
            {
              id: 'b2b-1',
              question: 'How does Digi Aerotech generate quality B2B leads?',
              answer: 'We use a mix of LinkedIn outreach, intent-based ads, SEO, and content marketing to attract decision-makers who are actively seeking your solutions.',
              icon: React.createElement(IconTarget, { size: 22 })
            },
            {
              id: 'b2b-2',
              question: 'Do you focus on lead quantity or lead quality?',
              answer: 'Our priority is quality — generating high-intent leads that convert into long-term business relationships, not just vanity numbers.',
              icon: React.createElement(IconUsers, { size: 22 })
            },
            {
              id: 'b2b-3',
              question: 'Can you help scale an enterprise B2B company?',
              answer: 'Yes. We have experience in scaling enterprise-level B2B businesses with account-based marketing, demand generation, and multi-channel funnels.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            },
            {
              id: 'b2b-4',
              question: 'How transparent is your reporting?',
              answer: 'We provide crystal-clear dashboards, campaign reports, and ROI tracking so you always know the exact value of your marketing investment.',
              icon: React.createElement(IconChartBar, { size: 22 })
            },
            {
              id: 'b2b-5',
              question: 'Are your plans customizable for startups vs enterprises?',
              answer: 'Absolutely. We offer flexible plans tailored to early-stage startups, SMBs, and enterprise B2B organizations.',
              icon: React.createElement(IconSettings, { size: 22 })
            },
            {
              id: 'b2b-6',
              question: 'What industries do you specialize in for B2B?',
              answer: 'We have delivered results across SaaS, manufacturing, consulting, IT services, and other B2B verticals.',
              icon: React.createElement(IconHelp, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Need ",
      headlineKeywords: [
        "360 Digital Marketing for B2B Services?"
      ],
      brandLine: [
        { text: "🚀 B2B is Our Cup of Tea – Let’s Generate High-Quality Leads", gradient: false }
      ],
      subheadline: "Specialized 360 digital marketing strategies designed specifically for B2B services. Drive growth and achieve measurable results with our targeted approach.",
      ctaButtons: [
        { icon: React.createElement(IconFreeRights, { size: 30 }), text: "Get Free Consultation", link: "/contact" },
        { icon: React.createElement(IconPhone, { size: 30 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconTrendingUp, { size: 34 }),
          title: "300%+ Growth",
          description: "Average leads generated"
        },
        {
          icon: React.createElement(IconBriefcase, { size: 34 }),
          title: "15+ Clients",
          description: "B2B Services served"
        },
        {
          icon: React.createElement(IconStar, { size: 34 }),
          title: "4.9/5 Rating",
          description: "Client satisfaction"
        },
        {
          icon: React.createElement(IconClock, { size: 34 }),
          title: "24/7 Support",
          description: "Always available"
        }
      ]

    },
    whyChooseUs: {
      title: [
        { text: 'Why Digi Aerotech is the ', gradient: false },
        { text: '#1 Choice for B2B Companies', gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconBrain, { size: 24 }),
          title: 'Deep B2B Expertise',
          description: 'We understand B2B buying psychology and create campaigns that speak directly to decision-makers.'
        },
        {
          icon: React.createElement(IconTarget, { size: 24 }),
          title: 'Quality Leads Over Vanity Metrics',
          description: 'Focus on leads with intent and budget, shortening sales cycles and maximizing conversions.'
        },
        {
          icon: React.createElement(IconBriefcase, { size: 24 }),
          title: 'Proven Industry Results',
          description: 'Successful campaigns across manufacturing, SaaS, healthcare, real estate, and more.'
        },
        {
          icon: React.createElement(IconChartBar, { size: 24 }),
          title: 'Transparent Reporting',
          description: 'Clear ROI reports so you know exactly where your budget goes and the value it generates.'
        },
        {
          icon: React.createElement(Cog, { size: 24 }),
          title: 'Cutting-Edge Technology',
          description: 'We leverage the latest marketing tools and automation to maximize efficiency and results.'
        },
        {
          icon: React.createElement(IconAdjustments, { size: 24 }),
          title: 'Flexible, Scalable Plans',
          description: 'Custom strategies that grow with your business — from startups to enterprise level.'
        }
      ],
      cta: {
        text: 'Partner with Us Today',
        link: '#contact',
        icon: React.createElement(IconRocket, { size: 24 })
      }
    },
    typesOfServices: {
      title: 'Our 360 Digital Marketing for B2B Services',
      subtitle: 'B2B SERVICES SPECIALIZED SERVICES',
      description: 'Comprehensive 360 digital marketing solutions designed specifically for B2B services businesses.',
      services: [
        {
          id: 1,
          title: 'Strategy & Planning',
          description: 'Custom 360 digital marketing strategy development tailored for b2b services market requirements.',
          icon: React.createElement(IconStarsFilled, { size: 24 })
        },
        {
          id: 2,
          title: 'Implementation & Execution',
          description: 'Expert implementation of 360 digital marketing campaigns optimized for b2b services audience.',
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
      title: 'Our B2B Growth Workflow',
      subtitle: 'STEP-BY-STEP VISUAL PROCESS',
      className: 'border-t border-border dark:border-gray-700',
      description: 'A clear, proven workflow designed to drive consistent growth for B2B businesses.',
      steps: [
        {
          id: 1,
          title: 'Market Research',
          description: 'In-depth analysis of your industry, competitors, and target audience to identify opportunities.'
        },
        {
          id: 2,
          title: 'Strategy Design',
          description: 'Develop tailored marketing strategies that align with your business goals and customer needs.'
        },
        {
          id: 3,
          title: 'Funnel Creation',
          description: 'Build optimized sales funnels that guide prospects smoothly from awareness to conversion.'
        },
        {
          id: 4,
          title: 'Campaign Execution',
          description: 'Launch targeted campaigns across channels to attract qualified leads.'
        },
        {
          id: 5,
          title: 'Lead Qualification',
          description: 'Evaluate and score leads to focus sales efforts on the most promising prospects.'
        },
        {
          id: 6,
          title: 'Sales-Ready Delivery',
          description: 'Deliver well-qualified leads to your sales team, ready to close deals efficiently.'
        }
      ]
    },
    testimonials: {
      title: [
        { text: '360 Digital Marketing ', gradient: false },
        { text: 'Success Stories', gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
      ],
      description: 'Real results from b2b services businesses that achieved remarkable growth.',
      testimonials: [
        {
          id: '1',
          message: 'The 360 digital marketing services transformed our b2b services business. We saw incredible growth and results beyond our expectations.',
          highlight: 'incredible growth and results beyond expectations',
          stars: 5,
          name: 'John Smith',
          designation: 'CEO',
          company: 'B2b Services Company'
        },
        {
          id: '2',
          message: 'Outstanding 360 digital marketing expertise specifically for b2b services. Highly recommend their services.',
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
      subtitle: 'START YOUR 360 DIGITAL MARKETING JOURNEY',
      description: 'Contact us today for a comprehensive consultation and see how our 360 digital marketing can drive growth for your b2b services business.'
    }
  }
};
