import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { ServiceIcons } from '@/constants/service-icons';
import { 
  IconAdjustments, IconArrowRight, IconBrain, IconBriefcase, IconBulb, 
  IconChartBar, IconClock, IconEyeCog, IconStar, IconTarget, IconTrendingUp 
} from '@tabler/icons-react';
import { Struggles } from '@/components/homepage/struggles';
import { Cog } from 'lucide-react';

const { IconFreeRights, IconPhone, IconStarsFilled, IconRocket } = ServiceIcons;

export const map: ServiceBusinessMap = {
  service: '360-digital-marketing',
  business: 'b2c-services',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant1',
    process: 'variant3',
    testimonials: 'variant1'
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
            { text: "The B2C Growth ", gradient: false },
            { text: "Challenges We Solve", gradient: true, gradientClass: "from-pink-500 via-red-500 to-yellow-500" }
          ],
          subheadline: "B2C marketing is competitive — standing out requires more than just ads.",
          painPoints: [
            "Spending on ads but no actual sales or ROI",
            "Website traffic but no conversions",
            "Low repeat purchases and weak customer loyalty",
            "Competing brands stealing attention with influencer campaigns",
            "Relying only on discounts, damaging brand value"
          ],
          solutionPoints: [
            "Conversion-driven campaigns designed for maximum purchases",
            "Optimized websites & landing pages that turn clicks into buyers",
            "Retention strategies: loyalty programs, remarketing & email flows",
            "Influencer + social proof marketing to build brand authority",
            "Value-based storytelling that attracts premium customers"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Boost My B2C Sales Now"
          }
        }
      }
    ],
    hero: {
      initial: "Looking for ",
      headlineKeywords: [
        "360 Digital Marketing for B2C Businesses?"
      ],
      brandLine: [
        { text: "✨ Sell More. Build Loyalty. Grow Faster with Digi Aerotech", gradient: false }
      ],
      subheadline: "Tailored 360° digital marketing strategies for B2C brands to attract, convert, and retain customers across every channel.",
      ctaButtons: [
        { icon: React.createElement(IconFreeRights, { size: 30 }), text: "Get Free Consultation", link: "/contact" },
        { icon: React.createElement(IconPhone, { size: 30 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconTrendingUp, { size: 34 }),
          title: "250%+ Growth",
          description: "Average ROI for B2C campaigns"
        },
        {
          icon: React.createElement(IconBriefcase, { size: 34 }),
          title: "30+ Brands",
          description: "B2C businesses scaled"
        },
        {
          icon: React.createElement(IconStar, { size: 34 }),
          title: "4.9/5 Rating",
          description: "Customer trust & reviews"
        },
        {
          icon: React.createElement(IconClock, { size: 34 }),
          title: "Always On",
          description: "Real-time campaign monitoring"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: 'Why Digi Aerotech is the ', gradient: false },
        { text: '#1 Choice for B2C Growth', gradient: true, gradientClass: "from-pink-500 via-red-500 to-yellow-500" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconBrain, { size: 24 }),
          title: 'Consumer Behavior Insights',
          description: 'We understand what drives customers to click, buy, and stay loyal.'
        },
        {
          icon: React.createElement(IconTarget, { size: 24 }),
          title: 'Sales-Focused Campaigns',
          description: 'Our strategies prioritize conversions, not just impressions or likes.'
        },
        {
          icon: React.createElement(IconChartBar, { size: 24 }),
          title: 'Omnichannel Mastery',
          description: 'Google, Meta, Instagram, Influencers – we cover every customer touchpoint.'
        },
        {
          icon: React.createElement(Cog, { size: 24 }),
          title: 'Data + Creativity',
          description: 'We merge analytics with storytelling to create irresistible campaigns.'
        },
        {
          icon: React.createElement(IconBulb, { size: 24 }),
          title: 'Retention & Loyalty',
          description: 'From remarketing ads to loyalty programs, we keep customers coming back.'
        },
        {
          icon: React.createElement(IconAdjustments, { size: 24 }),
          title: 'Custom Growth Plans',
          description: 'Scalable plans tailored for startups, D2C brands, and retail chains.'
        }
      ],
      cta: {
        text: 'Scale My B2C Business Today',
        link: '#contact',
        icon: React.createElement(IconRocket, { size: 24 })
      }
    },
    typesOfServices: {
      title: 'Our 360 Digital Marketing for B2C Brands',
      subtitle: 'B2C SERVICES DESIGNED TO SCALE',
      description: 'Complete growth-focused digital marketing services crafted for B2C businesses.',
      services: [
        {
          id: 1,
          title: 'E-commerce Growth',
          description: 'Boost online store sales with high-converting ad campaigns and SEO.',
          icon: React.createElement(IconStarsFilled, { size: 24 })
        },
        {
          id: 2,
          title: 'Social Media & Influencers',
          description: 'Engage your audience and build brand trust with powerful influencer partnerships.',
          icon: React.createElement(IconStarsFilled, { size: 24 })
        },
        {
          id: 3,
          title: 'Retention & Loyalty',
          description: 'Keep customers coming back with email automation, retargeting, and reward programs.',
          icon: React.createElement(IconStarsFilled, { size: 24 })
        }
      ]
    },
    process: {
      title: 'Our B2C Growth Workflow',
      subtitle: 'STEP-BY-STEP TO HIGHER SALES',
      className: 'border-t border-border dark:border-gray-700',
      description: 'A proven process to maximize visibility, conversions, and loyalty for B2C businesses.',
      steps: [
        { id: 1, title: 'Market Research', description: 'Analyze audience behavior, buying patterns, and competitor strategies.' },
        { id: 2, title: 'Brand Positioning', description: 'Craft compelling messaging that makes your brand the obvious choice.' },
        { id: 3, title: 'Funnel Creation', description: 'Design irresistible funnels from awareness to checkout.' },
        { id: 4, title: 'Campaign Execution', description: 'Run ads, influencer, and social media campaigns that sell.' },
        { id: 5, title: 'Retention & Remarketing', description: 'Convert one-time buyers into loyal, repeat customers.' },
        { id: 6, title: 'Scale & Expansion', description: 'Double down on winning campaigns and expand to new markets.' }
      ]
    },
    testimonials: {
      title: [
        { text: 'B2C Growth ', gradient: false },
        { text: 'Success Stories', gradient: true, gradientClass: "from-pink-500 via-red-500 to-yellow-500" }
      ],
      description: 'Real results from B2C brands that achieved massive sales growth with Digi Aerotech.',
      testimonials: [
        {
          id: '1',
          message: 'Our e-commerce sales doubled in just 3 months thanks to Digi Aerotech’s 360 campaigns.',
          highlight: 'sales doubled in just 3 months',
          stars: 5,
          name: 'Priya Sharma',
          designation: 'Founder',
          company: 'D2C Fashion Brand'
        },
        {
          id: '2',
          message: 'They understand B2C psychology perfectly — our campaigns now actually convert customers.',
          highlight: 'campaigns now actually convert',
          stars: 5,
          name: 'Amit Verma',
          designation: 'CEO',
          company: 'Fitness Equipment Store'
        }
      ]
    },
    cta: {
      title: 'Ready to Skyrocket Your B2C Sales?',
      subtitle: 'LET’S BUILD YOUR 360° MARKETING STRATEGY',
      description: 'Book a free consultation today and discover how Digi Aerotech can transform your B2C business into a sales machine.'
    }
  }
};
