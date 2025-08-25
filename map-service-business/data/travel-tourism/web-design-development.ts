import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconDeviceDesktop, IconWorld, IconRocket, IconCode, IconStar, IconHeart,
  IconTrendingUp, IconLayoutDashboard, IconCalendarEvent, IconPhone, IconShieldCheck,
  IconUsers, IconMap, IconArrowRight, IconBrandChrome,
  IconMouse,
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'web-design-development',
  business: 'travel-tourism',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant3',
    process: 'variant1',
    testimonials: 'variant2'
  },
  data: {
    slug: 'web-design-development-travel-tourism',
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
            { text: "Website Challenges Travel ", gradient: false },
            { text: "Businesses Face Online", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Outdated, slow, or poorly designed travel websites lose customers instantly. Travelers expect fast, mobile-friendly, and visually stunning platforms.",
          painPoints: [
            "Slow & unresponsive websites losing bookings",
            "Poor mobile experience for travelers browsing on phones",
            "Lack of online booking systems & payment gateways",
            "Outdated designs that don’t inspire wanderlust",
            "Difficulty managing tours, itineraries & seasonal packages"
          ],
          solutionPoints: [
            "Mobile-first websites optimized for speed & performance",
            "Seamless booking systems with secure payments",
            "Modern, visually stunning travel website designs",
            "Integrated SEO to boost Google rankings",
            "Easy-to-manage dashboards for tours & itineraries"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Build My Travel Website"
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
              question: 'Why do travel agencies need a professional website?',
              answer: 'Your website is your digital storefront. A professional, SEO-optimized travel website builds trust, showcases destinations, and converts visitors into bookings.',
              icon: React.createElement(IconWorld, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Can you integrate booking & payment systems?',
              answer: 'Yes, we build websites with integrated booking engines, payment gateways, and real-time availability for hotels, tours, and packages.',
              icon: React.createElement(IconMouse, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Do you make websites mobile-friendly?',
              answer: 'Absolutely. Over 70% of travel bookings come from mobile devices, so we design responsive, mobile-first websites that boost conversions.',
              icon: React.createElement(IconDeviceDesktop, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'How do you ensure SEO for travel websites?',
              answer: 'We implement keyword-optimized pages, destination guides, and structured data so your site ranks higher for travel searches.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Can I update my travel packages easily?',
              answer: 'Yes. We provide CMS-driven websites with dashboards so you can add new destinations, itineraries, and seasonal packages anytime.',
              icon: React.createElement(IconLayoutDashboard, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'Do you also provide website maintenance?',
              answer: 'Yes, we offer ongoing maintenance to ensure speed, security, and regular updates for your travel website.',
              icon: React.createElement(IconShieldCheck, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Struggling with an outdated ",
      headlineKeywords: [
        "Travel Website?",
        "Booking System?",
        "Slow Mobile Experience?",
        "Website that Converts?",
        "Custom Travel Web Design?"
      ],
      brandLine: [
        { text: "🌍 Build a Stunning, Conversion-Focused Website for Your Travel Brand", gradient: false }
      ],
      subheadline: "We design and develop websites that inspire travelers, boost bookings, and scale your tourism business.",
      ctaButtons: [
        { icon: React.createElement(IconRocket, { size: 28 }), text: "Get Free Website Audit", link: "/contact" },
        { icon: React.createElement(IconPhone, { size: 28 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "100K+ Travelers",
          description: "Engaged via travel websites we built"
        },
        {
          icon: React.createElement(IconStar, { size: 32 }),
          title: "200+ Websites",
          description: "Custom designed for travel brands"
        },
        {
          icon: React.createElement(IconHeart, { size: 32 }),
          title: "4.9/5 Ratings",
          description: "Across our travel website clients"
        },
        {
          icon: React.createElement(IconBrandChrome, { size: 32 }),
          title: "SEO Ready",
          description: "Rank higher, attract more bookings"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Digi Aerotech for ", gradient: false },
        { text: "Travel Website Design & Development", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconCode, { size: 28 }),
          title: "Custom Development",
          description: "Tailored solutions for travel agencies, tour operators, and booking platforms."
        },
        {
          icon: React.createElement(IconWorld, { size: 28 }),
          title: "SEO & Mobile First",
          description: "Websites built for speed, responsiveness, and Google rankings."
        },
        {
          icon: React.createElement(IconDeviceDesktop, { size: 28 }),
          title: "Integrated Booking Systems",
          description: "Seamless payment gateways and automated booking flows."
        },
        {
          icon: React.createElement(IconHeart, { size: 28 }),
          title: "Traveler-Centric Designs",
          description: "We design experiences that inspire wanderlust and bookings."
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Conversion Optimization",
          description: "Every design choice is aimed at driving leads and sales."
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 28 }),
          title: "Secure & Scalable",
          description: "Websites built to handle high traffic and protect traveler data."
        }
      ],
      cta: {
        text: "Launch Your Travel Website Today",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Web Design & Development Process for Travel Brands',
      subtitle: 'STEP-BY-STEP DIGITAL SUCCESS',
      className: 'border-t border-border dark:border-gray-700',
      description: 'We design, develop, and optimize travel websites that inspire, engage, and convert travelers worldwide.',
      steps: [
        {
          id: 1,
          title: 'Discovery & Research',
          description: 'We analyze your travel business, target audience, competitors, and brand goals to craft the perfect website roadmap.'
        },
        {
          id: 2,
          title: 'Wireframing & Design',
          description: 'Our creative team designs stunning layouts, emphasizing visuals, UX, and wanderlust-driven storytelling that converts visitors into bookings.'
        },
        {
          id: 3,
          title: 'Development & Integrations',
          description: 'We build responsive, SEO-friendly websites with booking engines, payment systems, CRM, and itinerary management integrations.'
        },
        {
          id: 4,
          title: 'Content & SEO Optimization',
          description: 'Destination pages, travel blogs, and seasonal offers are optimized with travel keywords to boost rankings and attract organic traffic.'
        },
        {
          id: 5,
          title: 'Testing & Launch',
          description: 'Rigorous testing ensures fast load speed, cross-device responsiveness, and a seamless user experience before launch.'
        },
        {
          id: 6,
          title: 'Maintenance & Scaling',
          description: 'We provide ongoing support, updates, and scalability to handle growing traffic, seasonal campaigns, and new features.'
        }
      ]
    },
    testimonials: {
      title: [
        { text: "Travel Brands Who ", gradient: false },
        { text: "Transformed Their Websites with Us", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      description: 'See how Digi Aerotech redesigned websites for travel agencies & tour operators, improving bookings, SEO rankings, and traveler trust.',
      testimonials: [
        {
          id: '1',
          message: 'Our outdated website was costing us bookings. Digi Aerotech rebuilt it into a fast, mobile-friendly platform with online payments.',
          highlight: 'fast, mobile-friendly platform',
          stars: 5,
          name: 'Ravi Khanna',
          designation: 'Founder',
          company: 'Explore India Tours'
        },
        {
          id: '2',
          message: 'They designed a modern travel website for us with SEO integration. We now rank for major travel keywords and get 3x more leads.',
          highlight: '3x more leads',
          stars: 5,
          name: 'Simran Kaur',
          designation: 'CEO',
          company: 'Holiday Vibes'
        }
      ]
    },
    cta: {
      title: 'Ready to Launch Your Travel Website?',
      subtitle: 'FROM INSPIRATION TO BOOKINGS',
      description: 'Book a free consultation with Digi Aerotech and get a stunning travel website designed to attract travelers and drive bookings.'
    }
  }
};
