import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconDevicesPc, IconToolsKitchen2, IconCreditCard, IconWorldWww,
  IconTableOptions, IconReceipt2, IconShoppingCart, IconPalette,
  IconBrandChrome, IconRocket, IconServerBolt,
  IconUserCheck,
  IconLockAccess
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'web-design-development',
  business: 'restaurants-cafes',
  variants: {
    hero: 'variant1',
    whyChooseUs: 'variant3',
    process: 'variant2',
  },
  data: {
    slug: 'web-design-development-restaurants-cafes',
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
            { text: "Web Design & Development", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Food businesses need websites that convert visitors into diners, but many fail due to outdated designs and poor user experience.",
          painPoints: [
            "Cluttered websites that don’t reflect brand identity",
            "No online ordering or table booking system",
            "Slow loading speeds leading to customer drop-offs",
            "Not optimized for mobile-first users",
            "Low visibility on Google due to poor SEO"
          ],
          solutionPoints: [
            "Custom restaurant websites with sleek UI/UX",
            "Mobile-first, SEO-friendly, lightning-fast pages",
            "Online ordering & table reservation systems",
            "Menu integration with photos & pricing",
            "Secure payment gateways & customer-friendly features"
          ],
          cta: {
            icon: React.createElement(IconRocket, { size: 20 }),
            text: "Build My Restaurant Website"
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
              question: 'Why do restaurants need a website if they use Zomato/Swiggy?',
              answer: 'A dedicated website builds brand identity, reduces commission costs, and allows direct customer bookings & loyalty programs.',
              icon: React.createElement(IconWorldWww, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Can you integrate online ordering systems?',
              answer: 'Yes, we build custom ordering & delivery systems with secure payment gateways, helping you own your customer base.',
              icon: React.createElement(IconShoppingCart, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Do you design mobile-first websites?',
              answer: 'Absolutely. Since 70%+ of restaurant searches come from phones, we design fully responsive, fast-loading mobile-first websites.',
              icon: React.createElement(IconDevicesPc, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Will my website show up on Google?',
              answer: 'Yes, we follow restaurant-specific SEO strategies to ensure your website ranks higher on Google for food and dining searches.',
              icon: React.createElement(IconServerBolt, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Can I update my menu without coding knowledge?',
              answer: 'We provide easy-to-use CMS tools so you can update your menu, pricing, and offers anytime.',
              icon: React.createElement(IconUserCheck, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Website Design & Development for Restaurants & Cafés",
      headlineKeywords: [
        "Restaurant Website Design",
        "Café Web Development",
        "Online Ordering Systems",
        "Table Reservation Platforms"
      ],
      brandLine: [
        { text: "🍴 Turning Food Brands into Digital Experiences", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      subheadline: "We design high-converting websites for restaurants & cafés that boost online visibility, attract diners, and make ordering seamless.",
      ctaButtons: [
        { icon: React.createElement(IconToolsKitchen2, { size: 28 }), text: "Get My Website", link: "/contact" },
        { icon: React.createElement(IconPalette, { size: 28 }), text: "Free Design Consultation", link: "/contact", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconCreditCard, { size: 32 }),
          title: "Online Ordering",
          description: "boost direct sales"
        },
        {
          icon: React.createElement(IconTableOptions, { size: 32 }),
          title: "Table Reservations",
          description: "easy booking online"
        },
        {
          icon: React.createElement(IconReceipt2, { size: 32 }),
          title: "Digital Menus",
          description: "with photos & pricing"
        },
        {
          icon: React.createElement(IconLockAccess, { size: 32 }),
          title: "Secure Payments",
          description: "safe & fast checkout"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Restaurants Choose Our ", gradient: false },
        { text: "Web Development Services", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconBrandChrome, { size: 28 }),
          title: "Mobile-First Design",
          description: "Optimized for fast loading & seamless mobile experience."
        },
        {
          icon: React.createElement(IconShoppingCart, { size: 28 }),
          title: "Direct Online Orders",
          description: "Cut third-party costs by integrating your own order system."
        },
        {
          icon: React.createElement(IconPalette, { size: 28 }),
          title: "Custom Branding",
          description: "Unique design that reflects your café or restaurant’s identity."
        },
        {
          icon: React.createElement(IconServerBolt, { size: 28 }),
          title: "SEO Friendly",
          description: "Rank higher for restaurant searches in your city."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Growth Ready",
          description: "Websites built to scale with your business expansion."
        }
      ],
      cta: {
        text: "Build My Restaurant Website",
        link: "#contact",
        icon: React.createElement(IconRocket, { size: 20 })
      }
    },
    process: {
      title: 'Our Restaurant Web Development Process',
      subtitle: 'FROM DESIGN TO BOOKINGS',
      className: 'border-t border-border dark:border-gray-700',
      description: 'We build restaurant & café websites that combine design, technology, and marketing to bring more diners to your tables.',
      steps: [
        {
          id: 1,
          title: 'Discovery & Strategy',
          description: 'We analyze your restaurant’s brand, audience, and goals to create a tailored web development strategy.'
        },
        {
          id: 2,
          title: 'Wireframing & UI Design',
          description: 'We create mobile-first wireframes and visually stunning UI designs focused on food presentation and customer journey.'
        },
        {
          id: 3,
          title: 'Custom Development',
          description: 'From online ordering to table reservations, we develop features tailored to your restaurant’s needs.'
        },
        {
          id: 4,
          title: 'SEO & Speed Optimization',
          description: 'We optimize your website for Google rankings and ensure it loads lightning-fast across devices.'
        },
        {
          id: 5,
          title: 'Launch & Training',
          description: 'We launch your site and train your staff to update menus, pricing, and promotions easily.'
        },
        {
          id: 6,
          title: 'Ongoing Support',
          description: 'We provide maintenance and growth support to ensure your website keeps bringing in customers.'
        }
      ]
    },
    cta: {
      title: 'Build a High-Converting Restaurant Website',
      subtitle: 'FROM DIGITAL MENUS TO DIRECT BOOKINGS',
      description: 'We help restaurants & cafés create stunning, fast, and SEO-friendly websites that bring in more customers and increase revenue.',
    }
  }
};
