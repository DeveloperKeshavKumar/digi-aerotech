// src/map-service-business/data/real-estate/aso-services.ts
import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Companies } from '@/components/homepage/companies';
import { ProvideServicesTo } from '@/components/services/provide-services-to';
import { FaqSection } from '@/components/services/faq-section';
import { WhoWeWorkWith } from '@/components/homepage/who-we-work-with';
import { Struggles } from '@/components/homepage/struggles';
import { ServiceIcons } from '@/constants/service-icons';
import { ArrowRight } from 'lucide-react';

const { IconDeviceMobile, IconStar, IconTrendingUp, IconUsers, IconTarget, IconStarsFilled, IconPhone, IconFreeRights, IconEdit, IconClockHour8, Briefcase, IconPackage, BarChart4, Settings2, IconRocket, IconChartBar, IconBrandApple, IconBrandGoogle, IconSearch, IconDownload } = ServiceIcons;

export const map: ServiceBusinessMap = {
  service: 'aso-services',
  business: 'real-estate',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant3',
    process: 'variant1',
    testimonials: 'variant2'
  },
  data: {
    slug: 'aso-services',
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
        component: Companies,
        position: 'beforeWhyChooseUs'
      },
      {
        component: ProvideServicesTo,
        position: "afterWhyChooseUs",
        props: {
          heading: 'We provide ASO Services for Real Estate Apps',
          subheading: 'Real estate developers and property portals seeking maximum app downloads and user engagement'
        }
      },
      {
        component: FaqSection,
        position: 'afterTestimonials',
        props: {
          faqs: [
            {
              id: '1',
              question: 'How does ASO help real estate apps get more property inquiries?',
              answer: 'ASO for real estate apps targets keywords like "property search", "flats near me", and "real estate apps" to ensure your app appears when users search for property-related solutions. This drives qualified leads directly to your listings.',
              icon: React.createElement(IconSearch, { size: 24 })
            },
            {
              id: '2',
              question: 'Which keywords work best for real estate app optimization?',
              answer: 'High-converting keywords include "property app", "real estate search", "apartments for rent", "buy property", location-specific terms like "Mumbai flats", and competitor brand names in your market.',
              icon: React.createElement(IconTarget, { size: 24 })
            },
            // Add more real estate specific FAQs...
          ],
          heading: {
            part1: 'Real Estate ASO ',
            part2: 'FAQs'
          }
        }
      },
      {
        component: Struggles,
        props: {
          title: [
            { text: "Your Real Estate App is " },
            { text: 'Lost Among Competitors?', gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" },
            { text: " We Get You " },
            { text: "Found & Downloaded!", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
          ],
          subheadline: "Stop losing potential property buyers to competitors. Our real estate ASO gets your app discovered and downloaded by serious property seekers.",
          painPoints: [
            "Your property app doesn't show up for local searches",
            "Low downloads despite having great listings",
            "High customer acquisition costs for property leads",
            "Competitors' apps always rank higher",
            "Missing out on mobile property search traffic"
          ],
          solutionPoints: [
            "Top 5 rankings for 'property app [city]' searches",
            "300-500% increase in qualified property app downloads",
            "Reduced cost per property lead acquisition",
            "Beat property portal competitors in app rankings",
            "Capture mobile-first property search traffic"
          ],
          cta: { icon: React.createElement(ArrowRight), text: "Get Real Estate ASO Audit", link: "/contact" }
        },
        position: 'beforeWhyChooseUs'
      }
    ],
    hero: {
      initial: "Need More ",
      headlineKeywords: [
        "Property Downloads?",
        "Real Estate Visibility?",
        "Property App Rankings?",
        "Real Estate Growth?",
        "Property Leads?",
        "Real Estate Success?"
      ],
      brandLine: [
        { text: "Real Estate App Store Optimization", gradient: false }
      ],
      subheadline: "Dominate property app searches and get your real estate app discovered by serious property buyers. Our specialized ASO for real estate increases downloads and drives qualified property inquiries.",
      ctaButtons: [
        { icon: React.createElement(IconFreeRights, { size: 30 }), text: "Free Real Estate ASO Audit", link: "/contact" },
        { icon: React.createElement(IconPhone, { size: 30 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconDownload, { size: 34 }),
          title: "5x More",
          description: "Property app downloads"
        },
        {
          icon: React.createElement(IconTarget, { size: 34 }),
          title: "Top 3 Rank",
          description: "For property keywords"
        },
        {
          icon: React.createElement(IconDeviceMobile, { size: 34 }),
          title: "200+ Apps",
          description: "Real estate apps optimized"
        },
        {
          icon: React.createElement(IconStarsFilled, { size: 34 }),
          title: "4.9/5 Rating",
          description: "Real estate client satisfaction"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: 'Why Choose Our ', gradient: false },
        { text: 'Real Estate ASO Services', gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" },
        { text: '?', gradient: false }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconSearch, { size: 24 }),
          title: 'Property-Focused Keyword Research',
          description: 'We target high-intent real estate keywords like "property near me", "flats for sale", and location-specific searches that property buyers actually use.'
        },
        {
          icon: React.createElement(IconTarget, { size: 24 }),
          title: 'Local Market Expertise',
          description: 'Deep understanding of Indian real estate markets, local search patterns, and property buyer behavior across tier-1 and tier-2 cities.'
        },
        {
          icon: React.createElement(IconEdit, { size: 24 }),
          title: 'Real Estate App Optimization',
          description: 'Specialized optimization for property listing features, search filters, location-based functionality, and real estate-specific user journeys.'
        },
        {
          icon: React.createElement(IconUsers, { size: 24 }),
          title: 'Lead Quality Enhancement',
          description: 'Focus on attracting serious property buyers and investors, not just downloads. Our ASO strategies improve lead quality and conversion rates.'
        }
      ],
      cta: {
        text: 'Optimize My Property App',
        link: '#contact',
        icon: React.createElement(IconRocket, { size: 24 })
      }
    },
    typesOfServices: {
      title: 'Our Real Estate ASO Services',
      subtitle: 'PROPERTY APP OPTIMIZATION',
      description: 'Specialized App Store Optimization services designed specifically for real estate apps, property portals, and proptech solutions.',
      services: [
        {
          id: 1,
          title: 'Property Keyword Research',
          description: 'Target high-value real estate keywords like "property app", "real estate search", location-based terms, and buyer intent keywords.',
          icon: React.createElement(IconSearch, { size: 24 })
        },
        {
          id: 2,
          title: 'Real Estate App Metadata',
          description: 'Optimize app titles, descriptions with property-focused keywords while highlighting key features like virtual tours, EMI calculators, etc.',
          icon: React.createElement(IconEdit, { size: 24 })
        }
        // Add more real estate specific services...
      ]
    },
    process: {
      title: 'Our Real Estate ASO Process',
      subtitle: 'PROPERTY APP GROWTH STRATEGY',
      className: 'border-t border-border dark:border-gray-700',
      description: 'A specialized approach to optimizing real estate apps for maximum visibility and property lead generation.',
      steps: [
        {
          id: 1,
          title: 'Real Estate Market Analysis',
          description: 'Analyze your local property market, competitor apps, and identify high-value real estate keywords and search opportunities.'
        },
        {
          id: 2,
          title: 'Property Keyword Strategy',
          description: 'Research location-specific, property-type, and buyer-intent keywords that your target property audience searches for.'
        }
        // Add more real estate specific steps...
      ]
    },
    techStack: {
      title: 'Our Real Estate ASO Tools',
      subtitle: 'PROPERTY APP OPTIMIZATION STACK',
      description: 'Specialized tools and platforms for optimizing real estate apps and tracking property market performance.',
      categories: ['ASO Tools', 'Real Estate Analytics', 'Property Research'],
      technologies: [
        { id: 1, name: 'App Annie', logo: '/tech/icons8-app-annie-96.png', category: 'ASO Tools' },
        { id: 2, name: 'Property Analytics', logo: '/tech/property-analytics.png', category: 'Real Estate Analytics' }
        // Add more real estate focused tools...
      ]
    },
    testimonials: {
      title: [
        { text: 'Real Estate ASO ', gradient: false },
        { text: 'Success Stories', gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
      ],
      description: 'Real estate apps achieving top rankings and explosive download growth through specialized property ASO',
      testimonials: [
        {
          id: '1',
          message: 'Our property portal app went from 5,000 to 80,000 downloads after their real estate ASO. We now rank #1 for "flats in Mumbai" and similar property searches. Property inquiries increased 400%!',
          highlight: 'went from 5,000 to 80,000 downloads and 400% more inquiries',
          stars: 5,
          name: 'Rahul Sharma',
          designation: 'Founder',
          company: 'PropertyHub India'
        },
        {
          id: '2',
          message: 'The ASO strategy transformed our real estate app visibility. We now get 10x more qualified property leads directly from app store searches. ROI has been phenomenal.',
          highlight: '10x more qualified property leads',
          stars: 5,
          name: 'Priya Patel',
          designation: 'Marketing Head',
          company: 'RealtyTech Solutions'
        }
      ]
    },
    cta: {
      title: 'Ready to Dominate Real Estate App Rankings?',
      subtitle: 'START YOUR PROPERTY ASO JOURNEY',
      description: 'Get a comprehensive real estate ASO audit and custom strategy to skyrocket your property app downloads and generate quality real estate leads.'
    }
  }
};
