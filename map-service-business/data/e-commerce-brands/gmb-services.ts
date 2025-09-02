import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import { 
  IconMapPin, IconTrendingUp, IconUsers, IconStar, IconShieldCheck, IconShoppingCart, IconArrowRight 
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'gmb-services',
  business: 'ecomm-brands',
  variants: {
    hero: 'variant1',
    whyChooseUs: 'variant2',
    process: 'variant3',
  },
  data: {
    slug: 'gmb-services-ecomm-brands',
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
            { text: "E-commerce Brands Face ", gradient: false },
            { text: "Local Visibility Challenges", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Even with a top-notch online store, e-commerce brands often struggle to appear in local search results and Google Maps, losing potential buyers nearby.",
          painPoints: [
            "Low visibility in Google Maps & local searches",
            "Inaccurate or incomplete business listings",
            "Difficulty managing multiple locations online",
            "Negative reviews impacting brand trust",
            "Limited local engagement and footfall (if hybrid business)"
          ],
          solutionPoints: [
            "Optimized GMB listings for every location",
            "Accurate NAP (Name, Address, Phone) data across platforms",
            "Regular monitoring and responding to reviews",
            "Geo-targeted local SEO campaigns",
            "Boosting visibility to attract nearby customers"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Optimize Your GMB Today"
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
              question: 'Why is Google My Business important for e-commerce brands?',
              answer: 'GMB helps your brand appear in local searches and maps, increasing trust, visibility, and potential sales.',
              icon: React.createElement(IconMapPin, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Can GMB improve my online store traffic?',
              answer: 'Yes, accurate listings and optimized GMB profiles drive both online clicks and offline engagement for hybrid stores.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Do you manage reviews and ratings?',
              answer: 'Absolutely. We respond to customer reviews, resolve issues, and leverage positive feedback to boost brand trust.',
              icon: React.createElement(IconUsers, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Can you optimize GMB for multiple locations?',
              answer: 'Yes. We ensure every store or warehouse location is properly listed and fully optimized for search visibility.',
              icon: React.createElement(IconShoppingCart, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'How do you track GMB performance?',
              answer: 'We monitor profile views, clicks, calls, and direction requests to measure the impact of GMB optimization.',
              icon: React.createElement(IconStar, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'How soon will I see results?',
              answer: 'With proper optimization and review management, clients often notice improved visibility and engagement within 3–4 weeks.',
              icon: React.createElement(IconShieldCheck, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Want ",
      headlineKeywords: [
        "More Local Visibility?",
        "Boost Local Engagement?",
        "Increase Nearby Conversions?",
        "Optimize Your Brand on Google Maps?",
        "GMB Services for E-commerce Brands?"
      ],
      brandLine: [
        { text: "📍 Enhance Your E-commerce Brand Visibility Locally with GMB Optimization", gradient: false }
      ],
      subheadline: "We help e-commerce brands optimize Google My Business profiles to appear in local searches, gain customer trust, and boost conversions.",
      ctaButtons: [
        { icon: React.createElement(IconMapPin, { size: 28 }), text: "Get Free GMB Audit", link: "/contact" },
        { icon: React.createElement(IconUsers, { size: 28 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconStar, { size: 32 }),
          title: "4.9/5 Customer Trust",
          description: "Optimized GMB listings drive higher reviews and ratings"
        },
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "100+ Brands",
          description: "Enhanced visibility across local searches"
        },
        {
          icon: React.createElement(IconShoppingCart, { size: 32 }),
          title: "50,000+ Local Clicks",
          description: "Increased engagement for nearby customers"
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "High Local Conversions",
          description: "More traffic and sales from Google Maps & searches"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the ", gradient: false },
        { text: "#1 Local Growth Partner for E-commerce Brands", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconMapPin, { size: 28 }),
          title: "Accurate Local Listings",
          description: "Ensure all your business locations are correctly displayed on Google Maps."
        },
        {
          icon: React.createElement(IconStar, { size: 28 }),
          title: "Review & Reputation Management",
          description: "Responding to reviews and improving customer trust."
        },
        {
          icon: React.createElement(IconShoppingCart, { size: 28 }),
          title: "Local SEO Integration",
          description: "Optimize your GMB profile for search terms that convert locally."
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Performance Tracking",
          description: "Monitor insights, clicks, calls, and driving directions from GMB."
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 28 }),
          title: "Compliance & Accuracy",
          description: "Keep your brand listings consistent across all platforms."
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "Boost Nearby Engagement",
          description: "Attract local customers and improve conversions for your e-commerce store."
        }
      ],
      cta: {
        text: "Optimize Your GMB Now",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Proven GMB Optimization Process for E-commerce Brands',
      subtitle: 'STEP-BY-STEP LOCAL GROWTH',
      className: 'border-t border-border dark:border-gray-700',
      description: 'From audit to optimization, our process ensures maximum visibility and engagement for your e-commerce business locally.',
      steps: [
        { id: 1, title: 'GMB Audit', description: 'Analyze your current Google My Business profile for accuracy, completeness, and performance.' },
        { id: 2, title: 'Listing Optimization', description: 'Update business name, address, phone, categories, and website links for each location.' },
        { id: 3, title: 'Visual & Content Enhancement', description: 'Add high-quality images, videos, and optimized business descriptions to attract clicks.' },
        { id: 4, title: 'Review & Reputation Management', description: 'Respond to reviews, encourage positive feedback, and resolve negative feedback professionally.' },
        { id: 5, title: 'Local SEO Boost', description: 'Integrate relevant local keywords to rank higher in Google searches and Maps.' },
        { id: 6, title: 'Performance Monitoring', description: 'Track views, clicks, calls, and direction requests to measure the impact and optimize further.' }
      ]
    },
    cta: {
      title: 'Ready to Boost Your Local E-commerce Visibility?',
      subtitle: 'Get More Clicks, Reviews, and Sales',
      description: 'Schedule a free GMB consultation with our experts and watch your e-commerce brand dominate local searches.'
    }
  }
};
