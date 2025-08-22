import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { ServiceIcons } from '@/constants/service-icons';
import { Struggles } from '@/components/homepage/struggles';
import { IconAdCircle, IconArrowRight, IconBrandInstagram, IconDeviceDesktop, IconMapPinBolt, IconSocial } from '@tabler/icons-react';
import { SearchCheckIcon } from 'lucide-react';

const { IconFreeRights, IconPhone, IconStarsFilled, IconRocket } = ServiceIcons;

export const map: ServiceBusinessMap = {
  service: '360-digital-marketing',
  business: 'restaurants-cafes',
  variants: {
    hero: 'variant3',
    whyChooseUs: 'variant1',
    process: 'variant2',
    testimonials: 'variant3'
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
            { text: "The Pain Points ", gradient: false },
            { text: "Restaurant Owners Face", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
          ],
          subheadline: "Running a restaurant is tough. Marketing it online is even harder.",
          painPoints: [
            "Empty tables during peak hours",
            "Poor visibility on Google for 'Best restaurant near me'",
            "Social media with no engagement or new orders",
            "Ads that drain money without driving reservations",
            "No system to retain and bring back loyal customers",
          ],
          solutionPoints: [
            " Dominate Google & Maps for restaurant/café searches",
            " Run ads that actually bring in orders and bookings",
            " Social media content that foodies love and engage with",
            " Reduce reliance on delivery apps with direct order systems",
            " Build a strong brand presence that creates loyal diners"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Grow My Restaurant Now"
          }
        }

      }
    ],
    hero: {
      initial: "Need ",
      headlineKeywords: [
        "360 Digital Marketing for Restaurants & Cafes?",
        "Better Results?",
        "More Growth?",
        "Success?",
        "ROI?"
      ],
      brandLine: [
        { text: "🔥 More Tables Booked. More Online Orders. More Loyal Customers.", gradient: false }
      ],
      subheadline: "With Digi Aerotech’s 360° Digital Marketing for Restaurants & Cafes, you’ll dominate Google, Instagram & Maps — and turn foodies into loyal customers.",
      ctaButtons: [
        { icon: React.createElement(IconFreeRights, { size: 30 }), text: "Get Free Consultation", link: "/contact" },
        { icon: React.createElement(IconPhone, { size: 30 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconStarsFilled, { size: 34 }),
          title: "300%+ Growth",
          description: "Average improvement"
        },
        {
          icon: React.createElement(IconStarsFilled, { size: 34 }),
          title: "500+ Clients",
          description: "Restaurants Cafes served"
        },
        {
          icon: React.createElement(IconStarsFilled, { size: 34 }),
          title: "4.9/5 Rating",
          description: "Client satisfaction"
        },
        {
          icon: React.createElement(IconStarsFilled, { size: 34 }),
          title: "24/7 Support",
          description: "Always available"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Our ", gradient: false },
        { text: "360° Digital Marketing Services", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" },
        { text: " for Restaurants & Cafes", gradient: false }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconMapPinBolt, { size: 32 }),
          title: "Google My Business (GMB) Optimization",
          description: "Rank higher when people search “Restaurants near me”. Showcase your menu, reviews, photos, and offers. Weekly posts and reputation management."
        },
        {
          icon: React.createElement(IconAdCircle, { size: 32 }),
          title: "Google Ads (Search + Display + Local)",
          description: "Target people actively searching for places to eat nearby. Drive table reservations and takeaway orders with geo-targeted ad campaigns."
        },
        {
          icon: React.createElement(IconBrandInstagram, { size: 32 }),
          title: "Meta Ads (Facebook + Instagram)",
          description: "Promote food festivals, seasonal menus, and offers using eye-catching reels and stories. Retarget past visitors to increase repeat orders."
        },
        {
          icon: React.createElement(IconSocial, { size: 32 }),
          title: "Social Media Management",
          description: "Showcase your food, chefs, ambience, and happy customers. Daily/weekly content and weekend or festival campaigns to boost footfall and orders."
        },
        {
          icon: React.createElement(IconDeviceDesktop, { size: 32 }),
          title: "Website & Landing Page Development",
          description: "Mobile-optimized websites with online menus, direct ordering, reservations, and payment gateway integration. Built to convert visitors into diners."
        },
        {
          icon: React.createElement(SearchCheckIcon, { size: 32 }),
          title: "SEO for Restaurants & Cafes",
          description: "Rank for location-based searches like “Italian restaurant in [city]” or “Café near [location]”. Blog content and food guides build long-term organic traffic."
        }
      ],
      cta: {
        text: "Get a Free Strategy Session",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    typesOfServices: {
      title: 'Our 360 Digital Marketing for Restaurants Cafes',
      subtitle: 'RESTAURANTS CAFES SPECIALIZED SERVICES',
      description: 'Comprehensive 360 digital marketing solutions designed specifically for restaurants cafes businesses.',
      services: [
        {
          id: 1,
          title: 'Strategy & Planning',
          description: 'Custom 360 digital marketing strategy development tailored for restaurants cafes market requirements.',
          icon: React.createElement(IconStarsFilled, { size: 24 })
        },
        {
          id: 2,
          title: 'Implementation & Execution',
          description: 'Expert implementation of 360 digital marketing campaigns optimized for restaurants cafes audience.',
          icon: React.createElement(IconStarsFilled, { size: 24 })
        },
        {
          id: 3,
          title: 'Monitoring & Optimization',
          description: 'Continuous monitoring and optimization to maximize ROI and performance for restaurants cafes businesses.',
          icon: React.createElement(IconStarsFilled, { size: 24 })
        }
      ]
    },
    process: {
      title: 'Our 360 Digital Marketing Process for Restaurants Cafes',
      subtitle: 'PROVEN METHODOLOGY',
      className: 'border-t border-border dark:border-gray-700',
      description: 'A systematic approach to 360 digital marketing that delivers measurable results for restaurants cafes businesses.',
      steps: [
        {
          id: 1,
          title: 'Discovery & Analysis',
          description: 'Comprehensive analysis of your restaurants cafes business and market landscape.'
        },
        {
          id: 2,
          title: 'Strategy Development',
          description: 'Custom 360 digital marketing strategy tailored for your specific restaurants cafes goals.'
        },
        {
          id: 3,
          title: 'Implementation',
          description: 'Expert execution of 360 digital marketing campaigns with restaurants cafes focus.'
        },
        {
          id: 4,
          title: 'Optimization',
          description: 'Continuous refinement and optimization based on restaurants cafes market feedback.'
        }
      ]
    },
    testimonials: {
      title: [
        { text: '360 Digital Marketing ', gradient: false },
        { text: 'Success Stories', gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
      ],
      description: 'Real results from restaurants cafes businesses that achieved remarkable growth.',
      testimonials: [
        {
          id: '1',
          message: 'The 360 digital marketing services transformed our restaurants cafes business. We saw incredible growth and results beyond our expectations.',
          highlight: 'incredible growth and results beyond expectations',
          stars: 5,
          name: 'John Smith',
          designation: 'CEO',
          company: 'Restaurants Cafes Company'
        },
        {
          id: '2',
          message: 'Outstanding 360 digital marketing expertise specifically for restaurants cafes. Highly recommend their services.',
          highlight: 'outstanding expertise specifically for restaurants cafes',
          stars: 5,
          name: 'Jane Doe',
          designation: 'Marketing Director',
          company: 'Restaurants Cafes Solutions'
        }
      ]
    },
    cta: {
      title: 'Ready to Transform Your Restaurants Cafes Business?',
      subtitle: 'Stop Paying Commissions to Apps. Start Building Direct Customers.',
      description: 'With Digi Aerotech’s 360° Digital Marketing for Restaurants & Cafes, your tables stay full and your orders keep rolling in.'
    }
  }
};
