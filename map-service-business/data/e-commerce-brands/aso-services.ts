import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconShoppingCart,
  IconTrendingUp,
  IconRocket,
  IconStar,
  IconShieldCheck,
  IconUsers,
  IconArrowRight,
  IconChartAreaLine,
  IconTags,
  IconDeviceMobile,
  IconCode,
  IconStack,
  IconChartLine
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'aso-services',
  business: 'ecommerce-brands',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant3',
    process: 'variant1',
    testimonials: 'variant2'
  },
  data: {
    slug: 'aso-services-ecommerce-brands',
    showSections: {
      hero: true,
      whyChooseUs: true,
      process: true,
      testimonials: true,
      cta: true
    },
    customSections: [
      {
        component: Struggles,
        position: 'beforeWhyChooseUs',
        props: {
          title: [
            { text: "Challenges E-Commerce Brands Face", gradient: false },
            { text: "With App Store Optimization (ASO)", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Online stores, marketplaces, and shopping apps often struggle with app discoverability, low downloads, and poor user engagement.",
          painPoints: [
            "Low visibility on app stores",
            "Poor app ranking for target keywords",
            "Low user retention and engagement",
            "Inconsistent app branding and messaging",
            "Difficulty tracking conversion & downloads"
          ],
          solutionPoints: [
            "Optimized app titles, descriptions, and keywords for high visibility",
            "Attractive icons, screenshots, and previews to boost installs",
            "Effective ASO strategies to improve ranking & retention",
            "Consistent branding & messaging across stores",
            "Data-driven analysis to improve downloads and conversions"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Boost Your App Downloads"
          }
        }
      },
      {
        component: FaqSection,
        position: 'afterTestimonials',
        props: {
          faqs: [
            {
              id: 'faq-1',
              question: 'What is ASO and why is it important for e-commerce apps?',
              answer: 'ASO improves app store visibility, helping your e-commerce app rank higher and attract more downloads and users.',
              icon: React.createElement(IconDeviceMobile, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Can you help increase app installs for my online store?',
              answer: 'Yes, we optimize keywords, visuals, and metadata to increase organic downloads and engagement.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Do you provide competitor analysis for ASO?',
              answer: 'Absolutely, we analyze top competitors to identify keywords, visuals, and strategies that can improve your ranking.',
              icon: React.createElement(IconChartAreaLine, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Can you optimize both Play Store and App Store?',
              answer: 'Yes, we handle ASO for both Android and iOS, ensuring maximum visibility across platforms.',
              icon: React.createElement(IconStack, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'How do you improve user retention through ASO?',
              answer: 'We optimize app previews, screenshots, and messaging to attract the right users and keep them engaged.',
              icon: React.createElement(IconUsers, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'How soon will I see results after ASO?',
              answer: 'Most clients see improved rankings and downloads within 4–6 weeks of implementing our ASO strategies.',
              icon: React.createElement(IconRocket, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Want ",
      headlineKeywords: [
        "Higher App Downloads?",
        "Better App Store Ranking?",
        "More Engaged Users?",
        "Optimized E-Commerce App?",
        "Full ASO Services for Online Stores?"
      ],
      brandLine: [
        { text: "📱 Boost Your E-Commerce App Visibility & Downloads with Expert ASO", gradient: false }
      ],
      subheadline: "We help online stores and shopping apps rank higher, attract more users, and increase conversions through proven App Store Optimization strategies.",
      ctaButtons: [
        { icon: React.createElement(IconShoppingCart, { size: 28 }), text: "Book Free ASO Consultation", link: "/contact" },
        { icon: React.createElement(IconUsers, { size: 28 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconChartLine, { size: 32 }),
          title: "200+ Apps Optimized",
          description: "Across iOS & Android"
        },
        {
          icon: React.createElement(IconRocket, { size: 32 }),
          title: "150% Average Download Increase",
          description: "Through targeted ASO"
        },
        {
          icon: React.createElement(IconStar, { size: 32 }),
          title: "4.9/5 User Satisfaction",
          description: "App ranking & engagement improvement"
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "Global App Reach",
          description: "Downloads from multiple countries"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the ", gradient: false },
        { text: "#1 ASO Partner for E-Commerce Apps", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconTags, { size: 28 }),
          title: "Keyword Optimization",
          description: "Target high-converting keywords to boost app ranking."
        },
        {
          icon: React.createElement(IconStack, { size: 28 }),
          title: "Visual & UX Optimization",
          description: "Screenshots, icons, and previews optimized for higher installs."
        },
        {
          icon: React.createElement(IconChartAreaLine, { size: 28 }),
          title: "Competitor Benchmarking",
          description: "Analyze competitors to create effective ASO strategies."
        },
        {
          icon: React.createElement(IconStar, { size: 28 }),
          title: "Higher Ratings & Reviews",
          description: "We help improve app rating and credibility to attract more users."
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 28 }),
          title: "Platform-Wide ASO",
          description: "Optimization for both iOS App Store and Google Play Store."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Data-Driven Strategy",
          description: "Continuous monitoring & optimization for better results."
        }
      ],
      cta: {
        text: "Boost Your App Downloads Today",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Proven ASO Process for E-Commerce Apps',
      subtitle: 'STEP-BY-STEP OPTIMIZATION SYSTEM',
      className: 'border-t border-border dark:border-gray-700',
      description: 'From research to execution — our structured ASO process ensures maximum visibility, installs, and engagement for your e-commerce app.',
      steps: [
        {
          id: 1,
          title: 'App Store Research',
          description: 'Analyze the app store landscape, competitors, and target audience for your app category.'
        },
        {
          id: 2,
          title: 'Keyword Optimization',
          description: 'Identify high-converting keywords and optimize title, description, and metadata.'
        },
        {
          id: 3,
          title: 'Visual & UI/UX Enhancement',
          description: 'Design app icons, screenshots, and preview videos that attract users and boost installs.'
        },
        {
          id: 4,
          title: 'Rating & Review Management',
          description: 'Implement strategies to get positive ratings and manage reviews to improve app credibility.'
        },
        {
          id: 5,
          title: 'Conversion Tracking & Analytics',
          description: 'Monitor app installs, user engagement, and retention to continuously optimize ASO strategy.'
        },
        {
          id: 6,
          title: 'Ongoing Optimization',
          description: 'Regular updates to keywords, visuals, and metadata to maintain top rankings and maximize downloads.'
        }
      ]
    },
    testimonials: {
      title: [
        { text: "E-Commerce Apps That ", gradient: false },
        { text: "Increased Downloads with Us", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      description: 'See how Digi Aerotech helped online stores and shopping apps improve app store rankings, downloads, and user engagement.',
      testimonials: [
        {
          id: '1',
          message: 'Our shopping app downloads doubled within 2 months thanks to Digi Aerotech’s ASO strategies.',
          highlight: 'downloads doubled',
          stars: 5,
          name: 'Priya Singh',
          designation: 'Founder',
          company: 'FashionCart'
        },
        {
          id: '2',
          message: 'They optimized our app store listing perfectly, resulting in higher installs and better user retention.',
          highlight: 'higher installs and better user retention',
          stars: 5,
          name: 'Rohan Mehta',
          designation: 'CEO',
          company: 'TechMart'
        }
      ]
    },
    cta: {
      title: 'Ready to Boost Your E-Commerce App Downloads?',
      subtitle: 'Increase Visibility, Installs & Engagement',
      description: 'Book a free ASO consultation with Digi Aerotech and take your online store app to the top of app store rankings.'
    }
  }
};
