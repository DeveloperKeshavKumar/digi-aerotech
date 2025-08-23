import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { ServiceIcons } from '@/constants/service-icons';
import { FaqSection } from '@/components/services/faq-section';
import { Struggles } from '@/components/homepage/struggles';
import { IconHelpCircle, IconTarget, IconUsers, IconChartBar, IconWallet, IconDeviceMobile, IconBulb, IconBriefcase, IconHeadset, IconStars, IconChalkboardTeacher, IconTrendingUp3, IconSettings, IconShieldCheck, IconTrendingUp2, IconTrendingUp } from '@tabler/icons-react';

const { IconFreeRights, IconPhone, IconStarsFilled, IconRocket } = ServiceIcons;

export const map: ServiceBusinessMap = {
  service: '360-digital-marketing',
  business: 'consultants',
  variants: {
    hero: 'variant1',
    whyChooseUs: 'variant2',
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
        position: 'beforeWhyChooseUs',
        props: {
          title: [
            { text: "Consultants' ", gradient: false },
            { text: "Biggest Challenges We Solve", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
          ],
          subheadline: "Consulting is competitive — standing out requires authority, visibility, and a consistent client pipeline.",
          painPoints: [
            "Struggling to get consistent qualified leads",
            "Relying only on referrals or word of mouth",
            "Low brand authority compared to competitors",
            "Spending on ads but no tangible ROI",
            "Inconsistent cash flow due to unpredictable clients"
          ],
          solutionPoints: [
            "Proven lead-gen systems tailored for consultants",
            "Authority-building through personal branding & PR",
            "Conversion-focused funnels that turn leads into clients",
            "Omnichannel marketing across LinkedIn, SEO & ads",
            "Scalable strategies for predictable client growth"
          ],
          cta: {
            icon: React.createElement(IconTarget, { size: 20 }),
            text: "Fix My Consulting Growth Bottleneck"
          }
        }
      },
      {
        component: FaqSection,
        position: 'afterTestimonials',
        props: {
          heading: {
            part1: "Frequently Asked ",
            part2: "Questions (Consultants)"
          },
          faqs: [
            {
              id: "1",
              question: "How does 360 digital marketing help consultants?",
              answer: "It positions you as an authority, generates quality leads, and builds predictable client pipelines through SEO, LinkedIn, ads, and funnels.",
              icon: React.createElement(IconHelpCircle, { size: 22 })
            },
            {
              id: "2",
              question: "Do you work with solo consultants or only firms?",
              answer: "We work with both. Whether you’re a solo consultant or a mid-size firm, we tailor strategies to your goals and growth stage.",
              icon: React.createElement(IconUsers, { size: 22 })
            },
            {
              id: "3",
              question: "How quickly can I see results?",
              answer: "Typically, consultants start seeing qualified leads within 30–60 days, with stronger pipelines developing in 3–6 months.",
              icon: React.createElement(IconChartBar, { size: 22 })
            },
            {
              id: "4",
              question: "What platforms do you focus on for consultants?",
              answer: "LinkedIn, SEO, Google Ads, and webinars are primary. We also leverage content marketing, PR, and retargeting ads.",
              icon: React.createElement(IconDeviceMobile, { size: 22 })
            },
            {
              id: "5",
              question: "Is this suitable for niche consultants?",
              answer: "Yes — our strategies are highly customizable, whether you’re in IT consulting, business strategy, HR, legal, or niche advisory.",
              icon: React.createElement(IconBulb, { size: 22 })
            },
            {
              id: "6",
              question: "How do you measure ROI for consultants?",
              answer: "We track every lead source, funnel performance, and conversion, giving you transparent reporting on ROI and client acquisition cost.",
              icon: React.createElement(IconWallet, { size: 22 })
            },
            {
              id: "7",
              question: "Can Digi Aerotech help me build personal branding?",
              answer: "Absolutely. We specialize in positioning consultants as thought leaders through content strategy, LinkedIn authority growth, and PR exposure.",
              icon: React.createElement(IconBriefcase, { size: 22 })
            },
            {
              id: "8",
              question: "Do I need a big budget to get started?",
              answer: "Not at all. We create scalable plans — starting lean and growing as your consultancy grows, ensuring positive ROI from day one.",
              icon: React.createElement(IconRocket, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Need ",
      headlineKeywords: [
        "360 Digital Marketing for Consultants?",
        "More Qualified Leads?",
        "Higher Client Conversions?",
        "Consistent Growth?",
        "Proven ROI?"
      ],
      brandLine: [
        { text: "🚀 Accelerate Your Consultancy with 360 Digital Marketing", gradient: false }
      ],
      subheadline: "Tailored digital marketing strategies for consultants to attract the right clients, build authority, and scale profitably.",
      ctaButtons: [
        { icon: React.createElement(IconFreeRights, { size: 30 }), text: "Book Free Strategy Call", link: "/contact" },
        { icon: React.createElement(IconPhone, { size: 30 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
      ],
      stats: [
        { icon: React.createElement(IconTrendingUp3, { size: 34 }), title: "300% & More ", description: "Leads Generated" },
        { icon: React.createElement(IconChalkboardTeacher, { size: 34 }), title: "50+ Consultants", description: "Scaled successfully" },
        { icon: React.createElement(IconStars, { size: 34 }), title: "4.9/5 Rating", description: "Client satisfaction" },
        { icon: React.createElement(IconHeadset, { size: 34 }), title: "24/7 Support", description: "Always available" }
      ]
    },
    whyChooseUs: {
      title: [
        { text: 'Why Digi Aerotech is the ', gradient: false },
        { text: '#1 Choice for Consultants', gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconTarget, { size: 24 }),
          title: 'Consulting Market Expertise',
          description: 'We understand the consulting industry and decision-maker psychology — building campaigns that resonate with your ideal clients.'
        },
        {
          icon: React.createElement(IconUsers, { size: 24 }),
          title: 'High-Quality Lead Generation',
          description: 'We don’t chase vanity metrics. Our focus is on generating qualified leads that convert into long-term consulting clients.'
        },
        {
          icon: React.createElement(IconChartBar, { size: 24 }),
          title: 'Proven Client Results',
          description: 'From independent advisors to large firms, we have consistently helped consultants scale with measurable ROI.'
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 24 }),
          title: 'Conversion-Focused Growth',
          description: 'Every strategy is designed with conversions in mind — ensuring more leads turn into loyal paying clients.'
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 24 }),
          title: 'Transparent & Reliable Reporting',
          description: 'You’ll always know where your money goes with crystal-clear dashboards, ROI tracking, and performance insights.'
        },
        {
          icon: React.createElement(IconSettings, { size: 24 }),
          title: 'Scalable & Flexible Plans',
          description: 'Whether you’re a solo consultant or a growing firm, our marketing solutions scale seamlessly with your business.'
        }
      ],
      cta: {
        text: 'Start Growing Your Consulting Business',
        link: '#contact',
        icon: React.createElement(IconTarget, { size: 24 })
      }
    },
    typesOfServices: {
      title: '360° Digital Marketing for Consultants',
      subtitle: 'SOLUTIONS DESIGNED FOR CONSULTING SUCCESS',
      description: 'Comprehensive services tailored for consultants to build authority, attract ideal clients, and scale revenue.',
      services: [
        { id: 1, title: 'Personal Branding & Authority Building', description: 'Position yourself as the go-to expert through LinkedIn growth, content marketing, and PR strategies.', icon: React.createElement(IconStarsFilled, { size: 24 }) },
        { id: 2, title: 'Lead Generation Campaigns', description: 'Targeted ads, SEO, and webinars designed to capture high-intent leads looking for consultants like you.', icon: React.createElement(IconStarsFilled, { size: 24 }) },
        { id: 3, title: 'Conversion-Focused Funnels', description: 'Landing pages, case studies, and automated follow-ups to convert leads into paying clients.', icon: React.createElement(IconStarsFilled, { size: 24 }) }
      ]
    },
    process: {
      title: 'Our Proven Process for Consultants',
      subtitle: 'STEP-BY-STEP GROWTH SYSTEM',
      className: 'border-t border-border dark:border-gray-700',
      description: 'A structured, repeatable system designed to consistently bring consultants new clients and higher revenue.',
      steps: [
        { id: 1, title: 'Market & Positioning Research', description: 'Analyze your niche, competitors, and audience to position you as the #1 choice.' },
        { id: 2, title: 'Authority Content Strategy', description: 'Develop expert-driven blogs, case studies, and LinkedIn content that attracts clients.' },
        { id: 3, title: 'Lead Generation Execution', description: 'Run targeted ads, SEO, and campaigns that fill your pipeline with quality prospects.' },
        { id: 4, title: 'Conversion Optimization', description: 'Deploy landing pages, funnels, and nurturing workflows to convert leads into loyal clients.' },
        { id: 5, title: 'Continuous Optimization', description: 'Monitor performance, refine strategies, and scale your consultancy sustainably.' }
      ]
    },
    testimonials: {
      title: [
        { text: 'Consultants Who ', gradient: false },
        { text: 'Scaled with Us', gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
      ],
      description: 'See how Digi Aerotech has helped consultants build authority, generate leads, and scale revenue.',
      testimonials: [
        { id: '1', message: 'Digi Aerotech helped me attract consistent leads through LinkedIn and SEO. Within 4 months, I doubled my consulting clients.', highlight: 'doubled my consulting clients', stars: 5, name: 'Raj Malhotra', designation: 'Independent Business Consultant', company: 'Raj Consulting' },
        { id: '2', message: 'Their team understands the consulting industry inside out. My firm now has a predictable pipeline of high-value clients.', highlight: 'predictable pipeline of high-value clients', stars: 5, name: 'Sarah Khan', designation: 'Founder', company: 'Khan Advisory' }
      ]
    },
    cta: {
      title: 'Ready to Attract More Clients & Scale Your Consultancy?',
      subtitle: 'YOUR GROWTH STARTS HERE',
      description: 'Book a free strategy session with Digi Aerotech and discover how our 360° digital marketing can transform your consulting business.'
    }
  }
};
