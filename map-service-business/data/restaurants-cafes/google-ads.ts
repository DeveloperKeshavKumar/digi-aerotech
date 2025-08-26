import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
   IconPizza, IconCoffee, IconAd, IconChartBar,
  IconStar, IconTrendingUp, IconUsers, IconPhoneCall, IconShoppingCart
} from '@tabler/icons-react';
import { Utensils } from 'lucide-react';

export const map: ServiceBusinessMap = {
  service: 'google-ads',
  business: 'restaurants-cafes',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant1',
    process: 'variant3',
    testimonials: 'variant2'
  },
  data: {
    slug: 'google-ads-restaurants-cafes',
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
            { text: "Why Restaurants & Cafés ", gradient: false },
            { text: "Lose Customers Without Google Ads", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "When people are hungry, they Google. If your restaurant isn’t advertising on Google, they’ll end up dining with your competitors.",
          painPoints: [
            "Not appearing for 'restaurants near me' searches",
            "Low visibility during peak hours & weekends",
            "Wasted ad spend on irrelevant clicks",
            "Competitors capturing online orders",
            "Poor ROI from generic ad campaigns"
          ],
          solutionPoints: [
            "Laser-targeted Google Ads campaigns for restaurants",
            "Geo-targeting to capture local diners instantly",
            "Optimized ad copy for menu highlights & offers",
            "Conversion tracking for orders & reservations",
            "Data-driven campaign optimization for ROI"
          ],
          cta: {
            icon: React.createElement(IconAd, { size: 20 }),
            text: "Launch My Restaurant Ads"
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
              question: 'Do Google Ads really work for restaurants?',
              answer: 'Yes! With hyper-local targeting, Google Ads can drive calls, reservations, and food orders within hours of going live.',
              icon: React.createElement(Utensils, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Can ads help with food delivery?',
              answer: 'Absolutely! We run campaigns promoting delivery & takeaway services, bringing in direct online orders.',
              icon: React.createElement(IconShoppingCart, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'What kind of ads do you run?',
              answer: 'We create search ads for “near me” queries, display ads with food visuals, and call-only ads for instant orders.',
              icon: React.createElement(IconPhoneCall, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'How soon can I see results?',
              answer: 'Most restaurants see increased calls and orders within 2–3 weeks after ads launch.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Will ads fit my budget?',
              answer: 'Yes, campaigns are fully customizable — from small cafés to fine dining restaurants, we optimize for maximum ROI.',
              icon: React.createElement(IconChartBar, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Turn Google Searches Into ",
      headlineKeywords: [
        "Dine-in Guests",
        "Online Orders",
        "Table Reservations",
        "Repeat Customers"
      ],
      brandLine: [
        { text: "📢 Google Ads for Restaurants & Cafés", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      subheadline: "We run highly-targeted Google Ads that help your restaurant appear when hungry customers search — driving orders, bookings, and more footfall.",
      ctaButtons: [
        { icon: React.createElement(IconAd, { size: 28 }), text: "Start My Ads Campaign", link: "/contact" },
        { icon: React.createElement(IconPhoneCall, { size: 28 }), text: "Free Ad Strategy Call", link: "/contact", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "2X ROI Growth",
          description: "from smart ad targeting & optimization"
        },
        {
          icon: React.createElement(Utensils, { size: 32 }),
          title: "More Reservations",
          description: "direct bookings via call & click ads"
        },
        {
          icon: React.createElement(IconCoffee, { size: 32 }),
          title: "Higher Footfall",
          description: "cafés attract locals searching nearby"
        },
        {
          icon: React.createElement(IconShoppingCart, { size: 32 }),
          title: "Boost Orders",
          description: "for delivery & takeout campaigns"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Us for ", gradient: false },
        { text: "Restaurant Google Ads", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconAd, { size: 28 }),
          title: "Restaurant Ad Specialists",
          description: "We craft ads specifically for restaurants & cafés — no wasted spend."
        },
        {
          icon: React.createElement(IconPizza, { size: 28 }),
          title: "Menu-Focused Campaigns",
          description: "Highlight bestsellers, combos & seasonal offers to attract clicks."
        },
        {
          icon: React.createElement(IconPhoneCall, { size: 28 }),
          title: "Call-Only Ads",
          description: "Get direct calls from hungry customers ready to order."
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "Hyper-Local Targeting",
          description: "We target users near your restaurant for maximum conversion."
        },
        {
          icon: React.createElement(IconChartBar, { size: 28 }),
          title: "ROI-Driven Ads",
          description: "We optimize campaigns daily to cut waste and maximize results."
        }
      ],
      cta: {
        text: "Run My Restaurant Ads",
        link: "#contact",
        icon: React.createElement(IconAd, { size: 20 })
      }
    },
    process: {
      title: 'Our Google Ads Process for Restaurants & Cafés',
      subtitle: 'FROM SEARCH TO SERVED',
      className: 'border-t border-border dark:border-gray-700',
      description: 'We design restaurant-focused ad campaigns that appear exactly when customers are hungry and searching nearby.',
      steps: [
        {
          id: 1,
          title: 'Market & Keyword Research',
          description: 'We find profitable keywords like “pizza near me”, “best café in [city]”, or “late-night delivery” to target the right customers.'
        },
        {
          id: 2,
          title: 'Ad Copy & Creative Setup',
          description: 'We design irresistible ad copy highlighting your menu, deals, and ambiance with mouth-watering visuals.'
        },
        {
          id: 3,
          title: 'Geo-Targeting & Timing',
          description: 'Ads are targeted to customers within your delivery radius or neighborhood, scheduled for peak dining hours.'
        },
        {
          id: 4,
          title: 'Campaign Optimization',
          description: 'We monitor clicks, calls, and conversions daily — refining bids, keywords, and ad placements for best ROI.'
        },
        {
          id: 5,
          title: 'Conversion Tracking & Scaling',
          description: 'We measure reservations, calls, and orders, then scale winning ads for more consistent results.'
        }
      ]
    },
    testimonials: {
      title: [
        { text: "Restaurants Growing With ", gradient: false },
        { text: "Our Google Ads", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      description: 'See how cafés and restaurants increased orders, reservations, and ROI with our Google Ads campaigns.',
      testimonials: [
        {
          id: '1',
          message: 'Our ads started generating calls within the first week. Reservations doubled on weekends!',
          highlight: '2X Reservations',
          stars: 5,
          name: 'Saurabh Khanna',
          designation: 'Owner',
          company: 'Café Mocha Vibes'
        },
        {
          id: '2',
          message: 'We get more takeaway orders daily thanks to Google Ads campaigns. Great ROI and optimization!',
          highlight: '40% More Orders',
          stars: 5,
          name: 'Neha Kapoor',
          designation: 'Manager',
          company: 'Tandoor Tales'
        }
      ]
    },
    cta: {
      title: 'Get More Customers With Google Ads',
      subtitle: 'CLICKS. CALLS. CUSTOMERS.',
      description: 'With our restaurant-focused Google Ads services, you’ll appear when diners are searching, boosting footfall, calls, and food orders.',
    }
  }
};
