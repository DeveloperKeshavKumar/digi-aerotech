import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconDeviceDesktop, IconWorld, IconRocket, IconStar, IconHeart,
  IconTrendingUp, IconShieldCheck, IconCalendarEvent, IconRefresh,
  IconTools, IconServer, IconLock, IconUsers, IconArrowRight, IconDatabase
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'website-maintenance',
  business: 'travel-tourism',
  variants: {
    hero: 'variant3',
    whyChooseUs: 'variant1',
    process: 'variant2',
  },
  data: {
    slug: 'website-maintenance-travel-tourism',
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
            { text: "Maintenance Challenges Travel ", gradient: false },
            { text: "Websites Face Daily", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Travel websites need constant monitoring, updates, and optimization. A small error or downtime can cost bookings and customer trust.",
          painPoints: [
            "Frequent website downtime affecting online bookings",
            "Slow loading speeds during peak travel seasons",
            "Broken links & outdated itineraries",
            "Security risks & unpatched vulnerabilities",
            "Lack of regular updates & data backups"
          ],
          solutionPoints: [
            "24/7 uptime monitoring & performance optimization",
            "Fast load speeds for seasonal booking spikes",
            "Content & itinerary updates handled regularly",
            "Proactive security patches & firewall setup",
            "Automated backups & disaster recovery"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Maintain My Travel Website"
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
              question: 'Why is website maintenance important for travel businesses?',
              answer: 'Travel websites must stay fast, secure, and updated. Without maintenance, you risk losing bookings due to downtime, errors, or poor user experience.',
              icon: React.createElement(IconDeviceDesktop, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Do you provide 24/7 monitoring?',
              answer: 'Yes, our team ensures real-time monitoring for uptime, performance, and security threats, minimizing risks during peak booking hours.',
              icon: React.createElement(IconServer, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Can you handle seasonal travel updates?',
              answer: 'Absolutely. We update itineraries, seasonal offers, and travel packages regularly so your website always reflects the latest services.',
              icon: React.createElement(IconCalendarEvent, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Do you provide backups & disaster recovery?',
              answer: 'Yes, we set up automated daily backups and offer quick disaster recovery plans to safeguard your travel business data.',
              icon: React.createElement(IconDatabase, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'What about website security?',
              answer: 'We implement SSL, firewalls, malware scans, and proactive security patches to protect traveler data and transactions.',
              icon: React.createElement(IconLock, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'Can you optimize speed for high traffic?',
              answer: 'Yes, we optimize caching, CDN, and server performance to handle peak-season surges in travel website traffic.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Is Your Travel Website ",
      headlineKeywords: [
        "Slow?",
        "Down Frequently?",
        "Vulnerable to Hacks?",
        "Outdated?",
        "Losing Bookings?"
      ],
      brandLine: [
        { text: "🛠 Reliable Website Maintenance for Travel & Tourism", gradient: false }
      ],
      subheadline: "We keep your travel website updated, secure, and optimized — so you never miss a booking.",
      ctaButtons: [
        { icon: React.createElement(IconRocket, { size: 28 }), text: "Get Maintenance Plan", link: "/contact" },
        { icon: React.createElement(IconUsers, { size: 28 }), text: "Talk to Expert", link: "tel:+918607119872", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconStar, { size: 32 }),
          title: "99.9% Uptime",
          description: "Ensured for travel websites"
        },
        {
          icon: React.createElement(IconHeart, { size: 32 }),
          title: "300+ Sites",
          description: "Maintained & monitored"
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 32 }),
          title: "Top Security",
          description: "SSL, firewalls & patches"
        },
        {
          icon: React.createElement(IconRefresh, { size: 32 }),
          title: "Regular Updates",
          description: "Itineraries & seasonal offers"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Digi Aerotech for ", gradient: false },
        { text: "Travel Website Maintenance", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconShieldCheck, { size: 28 }),
          title: "24/7 Monitoring",
          description: "Round-the-clock security & uptime checks."
        },
        {
          icon: React.createElement(IconTools, { size: 28 }),
          title: "Technical Expertise",
          description: "Experienced in handling travel-specific sites."
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Performance Optimization",
          description: "Keep your site fast during peak booking seasons."
        },
        {
          icon: React.createElement(IconCalendarEvent, { size: 28 }),
          title: "Content Updates",
          description: "Seasonal packages & travel deals updated on time."
        },
        {
          icon: React.createElement(IconLock, { size: 28 }),
          title: "Data Security",
          description: "SSL, firewalls & proactive patching."
        },
        {
          icon: React.createElement(IconDatabase, { size: 28 }),
          title: "Backups & Recovery",
          description: "Daily backups with quick disaster recovery."
        }
      ],
      cta: {
        text: "Secure My Travel Website",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Travel Website Maintenance Process',
      subtitle: 'SEAMLESS UPDATES & PROTECTION',
      className: 'border-t border-border dark:border-gray-700',
      description: 'We provide proactive website care to keep your travel business running without interruptions.',
      steps: [
        {
          id: 1,
          title: 'Website Audit',
          description: 'We start with a full audit of speed, security, content, and errors to identify immediate fixes for your travel site.'
        },
        {
          id: 2,
          title: 'Performance Optimization',
          description: 'We optimize caching, images, hosting, and CDN to ensure fast loading during high-traffic booking seasons.'
        },
        {
          id: 3,
          title: 'Security Updates',
          description: 'Regular updates, SSL renewals, and firewall patches keep your site secure from hackers and data breaches.'
        },
        {
          id: 4,
          title: 'Content & Seasonal Updates',
          description: 'We manage updates for itineraries, seasonal offers, and destination guides so your site stays fresh and relevant.'
        },
        {
          id: 5,
          title: '24/7 Monitoring & Support',
          description: 'We continuously track uptime, errors, and performance. Our team provides instant support for emergencies.'
        },
        {
          id: 6,
          title: 'Backups & Recovery',
          description: 'Automated backups and quick recovery solutions ensure your data is always safe and your website stays live.'
        }
      ]
    },
    cta: {
      title: 'Keep Your Travel Website Fast, Secure & Reliable',
      subtitle: 'STAY ONLINE, STAY BOOKED',
      description: 'Get a custom maintenance plan from Digi Aerotech to protect your travel website and maximize bookings year-round.'
    }
  }
};
