import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconChartLine, IconBulb, IconTarget, IconRocket,
  IconTrendingUp, IconSearch, IconStar, IconShieldCheck,
  IconUsers, IconReportAnalytics, IconArrowRight, IconBuildingSkyscraper
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'aso-services',
  business: 'consultants',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant1',
    process: 'variant2',
    testimonials: 'variant2'
  },
  data: {
    slug: 'aso-services-for-consultants',
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
            { text: "ASO Services for ", gradient: false },
            { text: "Consultants & Advisors", gradient: true, gradientClass: "from-blue-500 via-purple-500 to-indigo-500" }
          ],
          subheadline: "Your consulting app deserves visibility. Without proper ASO, even the best app gets buried under competitors.",
          painPoints: [
            "Low app visibility in Google Play & App Store",
            "Target audience cannot find the consulting app",
            "Poor keyword optimization, weak rankings",
            "Low installs and weak conversion rate",
            "Bad reviews & poor ratings hurting credibility",
            "No retention strategy after app install"
          ],
          solutionPoints: [
            "Keyword-optimized titles, tags & descriptions",
            "Category-specific ASO for consultants",
            "Boosted app installs & engagement",
            "Review & rating management strategy",
            "Localized ASO to reach niche markets",
            "Analytics-driven optimizations for long-term growth"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Boost My Consulting App"
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
              question: 'Why do consultants need ASO?',
              answer: 'ASO helps your consulting app rank higher in app stores, making it easier for potential clients to discover and trust you.',
              icon: React.createElement(IconSearch, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Can ASO increase my client base?',
              answer: 'Yes. With the right keywords and reviews strategy, we ensure your app attracts the right audience — qualified leads for your consulting business.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'How do you improve app ratings?',
              answer: 'We implement review management strategies, encourage positive feedback, and respond to negative reviews professionally.',
              icon: React.createElement(IconStar, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Do you provide ASO for both iOS & Android?',
              answer: 'Yes. We optimize apps for both App Store (iOS) and Google Play (Android) with tailored strategies.',
              icon: React.createElement(IconBulb, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Is ASO a one-time or ongoing service?',
              answer: 'ASO is ongoing. Algorithms, keywords, and competition change — we continuously optimize to keep your consulting app ahead.',
              icon: React.createElement(IconReportAnalytics, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'Can ASO help with retention?',
              answer: 'Yes. Along with installs, we focus on engagement strategies so your clients keep using your consulting app.',
              icon: React.createElement(IconUsers, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "App Store Optimization for ",
      headlineKeywords: [
        "Consultants",
        "Advisors",
        "Coaches",
        "Legal Experts",
        "Financial Consultants"
      ],
      brandLine: [
        { text: "📈 Rank Higher, Get More Clients, Build Authority", gradient: false }
      ],
      subheadline: "We optimize your consulting app to rank higher, attract clients, and generate real business growth.",
      ctaButtons: [
        { icon: React.createElement(IconRocket, { size: 28 }), text: "Book Free ASO Audit", link: "/contact" },
        { icon: React.createElement(IconTarget, { size: 28 }), text: "Boost My Consulting App", link: "/contact", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "65% Installs",
          description: "Come from app store search results"
        },
        {
          icon: React.createElement(IconChartLine, { size: 32 }),
          title: "3x More Clients",
          description: "With optimized consulting apps"
        },
        {
          icon: React.createElement(IconStar, { size: 32 }),
          title: "Ratings Growth",
          description: "Boost app credibility & installs"
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 32 }),
          title: "Trusted Optimization",
          description: "Secure & ethical ASO practices"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Digi Aerotech for ", gradient: false },
        { text: "Consultant ASO?", gradient: true, gradientClass: "from-blue-500 via-purple-500 to-indigo-500" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconBuildingSkyscraper, { size: 28 }),
          title: "Consulting Industry Focus",
          description: "We understand the unique needs of consultants, advisors, and coaches."
        },
        {
          icon: React.createElement(IconSearch, { size: 28 }),
          title: "Keyword Research Experts",
          description: "We target high-intent keywords that drive client downloads."
        },
        {
          icon: React.createElement(IconStar, { size: 28 }),
          title: "Review & Ratings Strategy",
          description: "We build credibility through genuine client feedback."
        },
        {
          icon: React.createElement(IconReportAnalytics, { size: 28 }),
          title: "Data-Driven Execution",
          description: "We track installs, engagement & optimize continuously."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Full Growth Partner",
          description: "Beyond ASO, we help with ads, branding & retention."
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "More Clients, More Trust",
          description: "ASO that brings real business for consultants."
        }
      ],
      cta: {
        text: "Get My Consulting App Optimized",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our ASO Process for Consultants',
      subtitle: 'VISIBILITY • INSTALLS • CLIENTS',
      description: 'We follow a proven ASO strategy tailored for consulting apps.',
      steps: [
        {
          id: 1,
          title: 'Consulting App Audit',
          description: 'We analyze your current app visibility, keywords, ratings & installs.'
        },
        {
          id: 2,
          title: 'Keyword Research',
          description: 'Identify high-intent keywords for consulting niches.'
        },
        {
          id: 3,
          title: 'App Store Optimization',
          description: 'Optimize title, description, visuals, and metadata.'
        },
        {
          id: 4,
          title: 'Ratings & Reviews',
          description: 'Implement strategies to improve app ratings & credibility.'
        },
        {
          id: 5,
          title: 'Analytics & Reporting',
          description: 'Track performance, installs, and engagement improvements.'
        },
        {
          id: 6,
          title: 'Retention Strategy',
          description: 'Ensure clients keep using your consulting app.'
        }
      ]
    },
    testimonials: {
      title: [
        { text: "Consultants Growing with ", gradient: false },
        { text: "ASO Services", gradient: true, gradientClass: "from-blue-500 via-purple-500 to-indigo-500" }
      ],
      description: 'See how consultants boosted app installs with Digi Aerotech.',
      testimonials: [
        {
          id: '1',
          message: 'Our consulting app was invisible before. Now we rank in top 5 for our niche keywords.',
          highlight: 'Top Ranking in Niche',
          stars: 5,
          name: 'Rohit Malhotra',
          designation: 'Business Consultant',
          company: 'Malhotra Advisory'
        },
        {
          id: '2',
          message: 'Digi Aerotech helped us improve reviews and downloads. More clients are finding us now.',
          highlight: 'More Clients from ASO',
          stars: 5,
          name: 'Ananya Desai',
          designation: 'Career Coach',
          company: 'Desai Consulting'
        }
      ]
    },
    cta: {
      title: 'Want Your Consulting App to Rank Higher?',
      subtitle: 'INCREASE VISIBILITY • BOOST DOWNLOADS • GET CLIENTS',
      description: 'Book a free ASO audit with Digi Aerotech and see how we can grow your consulting business with better app visibility.',
    }
  }
};
