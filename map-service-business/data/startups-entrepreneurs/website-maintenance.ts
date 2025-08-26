import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconShieldCheck, IconBug, IconWorld, IconRocket, IconClock, IconServer,
  IconTools, IconTrendingUp, IconSettings, IconCheck, IconChartBar, IconDatabase
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'website-maintenance',
  business: 'startups-entrepreneurs',
  variants: {
    hero: 'variant3',
    whyChooseUs: 'variant1',
    process: 'variant2',
    testimonials: 'variant2'
  },
  data: {
    slug: 'website-maintenance-startups-entrepreneurs',
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
            { text: "Why Startup Websites ", gradient: false },
            { text: "Break Without Maintenance", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Most startups launch their website with great enthusiasm but forget about ongoing maintenance. This leads to security risks, downtime, and lost opportunities.",
          painPoints: [
            "Unpatched security vulnerabilities",
            "Downtime during critical funding rounds",
            "Slow website speed losing leads",
            "Broken forms or payment failures",
            "No backups in case of crashes"
          ],
          solutionPoints: [
            "24/7 uptime & performance monitoring",
            "Regular security patches & updates",
            "Lightning-fast load speed optimization",
            "Error-free forms, payments & integrations",
            "Daily backups & quick disaster recovery"
          ],
          cta: {
            icon: React.createElement(IconShieldCheck, { size: 20 }),
            text: "Protect My Startup Website"
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
              question: 'Do you provide 24/7 monitoring?',
              answer: 'Yes! We monitor uptime, performance, and vulnerabilities around the clock to keep your startup website safe and reliable.',
              icon: React.createElement(IconClock, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Can you handle scaling when my traffic grows?',
              answer: 'Absolutely. We optimize servers, databases, and caching to ensure your site handles growth seamlessly.',
              icon: React.createElement(IconServer, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Do you take regular backups?',
              answer: 'Yes, we run daily backups with quick restore options so your startup never loses critical data.',
              icon: React.createElement(IconDatabase, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'What about bug fixes?',
              answer: 'Our team resolves bugs quickly and ensures smooth functionality across devices and browsers.',
              icon: React.createElement(IconBug, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Is maintenance costly for startups?',
              answer: 'Not at all. We provide flexible, startup-friendly maintenance plans that grow with your business.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Keep Your Startup Website ",
      headlineKeywords: [
        "Secure",
        "Fast",
        "Scalable",
        "Investor-Ready"
      ],
      brandLine: [
        { text: "🛠️ Website Maintenance for Startups & Entrepreneurs", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      subheadline: "We don’t just build startup websites — we keep them secure, updated, fast, and reliable so you can focus on growth.",
      ctaButtons: [
        { icon: React.createElement(IconShieldCheck, { size: 28 }), text: "Get Maintenance Plan", link: "/contact" },
        { icon: React.createElement(IconRocket, { size: 28 }), text: "Free Website Audit", link: "/contact", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconTools, { size: 32 }),
          title: "99.9% Uptime",
          description: "ensuring trust & reliability"
        },
        {
          icon: React.createElement(IconWorld, { size: 32 }),
          title: "Global Monitoring",
          description: "performance across regions"
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 32 }),
          title: "100+ Patches",
          description: "applied monthly for security"
        },
        {
          icon: React.createElement(IconChartBar, { size: 32 }),
          title: "Boosted SEO",
          description: "via speed & uptime optimization"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Us for ", gradient: false },
        { text: "Startup Website Maintenance", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconShieldCheck, { size: 28 }),
          title: "Security First",
          description: "We ensure startup sites stay safe from hacks and vulnerabilities."
        },
        {
          icon: React.createElement(IconTools, { size: 28 }),
          title: "Proactive Fixes",
          description: "We don’t wait for failures — we prevent them before they happen."
        },
        {
          icon: React.createElement(IconClock, { size: 28 }),
          title: "24/7 Support",
          description: "Our experts are always available when your startup needs help."
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Growth-Ready",
          description: "Optimized for scalability and future expansion."
        },
        {
          icon: React.createElement(IconSettings, { size: 28 }),
          title: "Custom Plans",
          description: "Flexible maintenance tailored to your startup stage."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Focus on Growth",
          description: "We handle your site so you can focus on funding & scaling."
        }
      ],
      cta: {
        text: "Secure My Startup Website",
        link: "#contact",
        icon: React.createElement(IconShieldCheck, { size: 20 })
      }
    },
    process: {
      title: 'Our Website Maintenance Process for Startups',
      subtitle: 'KEEPING YOUR SITE INVESTOR & CUSTOMER READY',
      className: 'border-t border-border dark:border-gray-700',
      description: 'We ensure your startup website runs smoothly, loads fast, and stays secure — while being fully optimized for growth.',
      steps: [
        {
          id: 1,
          title: 'Initial Audit',
          description: 'We run a full audit of speed, SEO, and security to identify risks before onboarding.'
        },
        {
          id: 2,
          title: 'Security Patches',
          description: 'Regular updates and patching of plugins, frameworks, and servers to keep your site protected.'
        },
        {
          id: 3,
          title: 'Performance Optimization',
          description: 'We boost site loading speeds, mobile performance, and Core Web Vitals for SEO.'
        },
        {
          id: 4,
          title: 'Uptime & Monitoring',
          description: 'Real-time monitoring ensures your startup site never goes down during critical investor or customer visits.'
        },
        {
          id: 5,
          title: 'Bug Fixes & Updates',
          description: 'We fix errors, update features, and ensure seamless user experiences on all devices.'
        },
        {
          id: 6,
          title: 'Backup & Recovery',
          description: 'Daily backups and disaster recovery plans ensure your data is always safe.'
        }
      ]
    },
    testimonials: {
      title: [
        { text: "Startups Scaling with ", gradient: false },
        { text: "Reliable Website Maintenance", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      description: 'See how entrepreneurs protected their startup websites and built investor confidence with our maintenance services.',
      testimonials: [
        {
          id: '1',
          message: 'Their maintenance saved us from a major downtime during our investor pitch week. Truly lifesaving!',
          highlight: 'Zero Downtime',
          stars: 5,
          name: 'Aarav Malhotra',
          designation: 'Co-founder',
          company: 'SaaSly'
        },
        {
          id: '2',
          message: 'We used to face constant bugs and slow load speeds. Now our site runs faster than ever and our leads doubled.',
          highlight: '2X Faster Website',
          stars: 5,
          name: 'Ishita Kapoor',
          designation: 'Founder',
          company: 'HealthStart'
        }
      ]
    },
    cta: {
      title: 'Keep Your Startup Website Secure, Fast & Reliable',
      subtitle: '24/7 MAINTENANCE. ZERO RISKS.',
      description: 'From security patches to speed optimization, we maintain your startup website so you never lose trust, traffic, or funding opportunities.',
    }
  }
};
