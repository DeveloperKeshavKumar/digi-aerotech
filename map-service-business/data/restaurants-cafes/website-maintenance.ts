import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconToolsKitchen2, IconWorldWww, IconRefreshAlert, IconServerBolt,
  IconShieldCheck, IconReceipt2, IconShoppingCart, IconLock,
  IconCloudUp, IconRocket, IconDeviceMobile, IconUserCheck
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'website-maintenance',
  business: 'restaurants-cafes',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant1',
    process: 'variant3',
  },
  data: {
    slug: 'website-maintenance-restaurants-cafes',
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
            { text: "Why Restaurants & Cafés Struggle with ", gradient: false },
            { text: "Website Maintenance", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Running a food business means constant updates—menus, pricing, offers, and reservations. Without proper website maintenance, restaurants lose customers and credibility.",
          painPoints: [
            "Menus not updated with seasonal dishes or prices",
            "Frequent downtime during rush hours",
            "Security issues risking customer data",
            "Slow-loading websites driving diners away",
            "Missed opportunities due to outdated offers"
          ],
          solutionPoints: [
            "Daily & seasonal menu updates with ease",
            "24/7 uptime monitoring and support",
            "Strong security for online orders & payments",
            "Mobile-first performance optimization",
            "Proactive updates for events & offers"
          ],
          cta: {
            icon: React.createElement(IconRocket, { size: 20 }),
            text: "Maintain My Restaurant Website"
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
              question: 'How often should a restaurant update its website?',
              answer: 'Menus, offers, and pricing should be updated weekly or monthly. We ensure your website reflects your latest offerings instantly.',
              icon: React.createElement(IconReceipt2, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Do you provide uptime and performance monitoring?',
              answer: 'Yes, we monitor your website 24/7 to ensure it never goes down during peak dining hours.',
              icon: React.createElement(IconServerBolt, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Can I update my menu myself?',
              answer: 'Absolutely! We set up user-friendly CMS access so your team can update menus without coding.',
              icon: React.createElement(IconUserCheck, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Is my online ordering system secure?',
              answer: 'Yes, we implement SSL, data encryption, and regular security checks to protect your customers.',
              icon: React.createElement(IconShieldCheck, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Do you also handle SEO during maintenance?',
              answer: 'Yes, we optimize website speed, structured data, and keywords so your restaurant ranks higher on Google.',
              icon: React.createElement(IconWorldWww, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Website Maintenance for Restaurants & Cafés",
      headlineKeywords: [
        "Restaurant Website Updates",
        "Café Website Security",
        "Menu Management",
        "Uptime & Performance"
      ],
      brandLine: [
        { text: "🍴 Keep Your Restaurant Website Fresh, Secure & Always Online", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      subheadline: "We provide complete website maintenance for restaurants & cafés, ensuring your menus, offers, and reservations stay updated and customers never face downtime.",
      ctaButtons: [
        { icon: React.createElement(IconToolsKitchen2, { size: 28 }), text: "Maintain My Website", link: "/contact" },
        { icon: React.createElement(IconLock, { size: 28 }), text: "Free Maintenance Audit", link: "/contact", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconRefreshAlert, { size: 32 }),
          title: "Daily Updates",
          description: "menus & offers refreshed"
        },
        {
          icon: React.createElement(IconServerBolt, { size: 32 }),
          title: "99.9% Uptime",
          description: "never lose diners online"
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 32 }),
          title: "Secure Orders",
          description: "safe & encrypted checkout"
        },
        {
          icon: React.createElement(IconDeviceMobile, { size: 32 }),
          title: "Mobile Optimized",
          description: "fast experience on all devices"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Restaurants Trust Our ", gradient: false },
        { text: "Website Maintenance Services", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconCloudUp, { size: 28 }),
          title: "Real-Time Menu Updates",
          description: "Keep your digital menu updated with seasonal dishes & offers."
        },
        {
          icon: React.createElement(IconServerBolt, { size: 28 }),
          title: "Uptime Monitoring",
          description: "Ensure your website never goes down during rush hours."
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 28 }),
          title: "Data Security",
          description: "Protect customer details and online orders with strong security."
        },
        {
          icon: React.createElement(IconWorldWww, { size: 28 }),
          title: "SEO Maintenance",
          description: "Ongoing optimization so your restaurant ranks high on Google."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Growth Support",
          description: "Continuous upgrades as your restaurant business expands."
        }
      ],
      cta: {
        text: "Get My Website Maintained",
        link: "#contact",
        icon: React.createElement(IconRocket, { size: 20 })
      }
    },
    process: {
      title: 'Our Website Maintenance Process',
      subtitle: 'FROM MENUS TO SECURITY',
      className: 'border-t border-border dark:border-gray-700',
      description: 'We manage restaurant & café websites with continuous updates, monitoring, and optimization to keep your business running smoothly online.',
      steps: [
        {
          id: 1,
          title: 'Website Audit',
          description: 'We check your current website for issues with speed, design, security, and menu accuracy.'
        },
        {
          id: 2,
          title: 'Menu & Content Updates',
          description: 'We update your menus, pricing, offers, and promotions regularly so customers always see the latest information.'
        },
        {
          id: 3,
          title: 'Security Management',
          description: 'We apply regular patches, SSL, and firewalls to protect customer data and transactions.'
        },
        {
          id: 4,
          title: 'Performance Optimization',
          description: 'We monitor loading speeds and mobile responsiveness to provide a smooth dining experience online.'
        },
        {
          id: 5,
          title: 'Uptime & Monitoring',
          description: 'We ensure your website stays live 24/7, especially during peak dining hours.'
        },
        {
          id: 6,
          title: 'Ongoing SEO',
          description: 'We fine-tune SEO settings so your restaurant ranks higher and gets more diners online.'
        }
      ]
    },
    cta: {
      title: 'Keep Your Restaurant Website Fresh & Secure',
      subtitle: 'FROM MENUS TO PERFORMANCE',
      description: 'We provide full website maintenance for restaurants & cafés so your brand stays updated, secure, and loved by customers.',
    }
  }
};
