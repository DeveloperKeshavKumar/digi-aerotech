import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconUserPlus, IconTarget, IconMail, IconMessageChatbot, IconPhone, 
  IconUsers, IconTrendingUp, IconRocket, IconCalendarEvent, IconWorld,
  IconFilter, IconClipboardCheck, IconArrowRight, IconHeartHandshake, IconChartBar,
  IconShieldCheck
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'leads-generation',
  business: 'travel-tourism',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant1',
    process: 'variant3',
    testimonials: 'variant1'
  },
  data: {
    slug: 'leads-generation-travel-tourism',
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
            { text: "Lead Generation Challenges for ", gradient: false },
            { text: "Travel & Tourism Businesses", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Tour operators and agencies often struggle with getting consistent travel inquiries and converting them into confirmed bookings.",
          painPoints: [
            "Irregular flow of traveler inquiries",
            "Low-quality leads that don’t convert",
            "Dependence on third-party portals & OTAs",
            "Seasonal drop in leads & inquiries",
            "Lack of nurturing system to convert cold leads"
          ],
          solutionPoints: [
            "Consistent lead pipelines with multi-channel campaigns",
            "High-intent targeting to attract genuine travelers",
            "Direct leads via SEO, ads & social media (no OTA cuts)",
            "Seasonal funnels to balance demand & supply",
            "Lead nurturing with emails, WhatsApp & retargeting"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Get High-Quality Travel Leads"
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
              question: 'How do you generate leads for travel agencies?',
              answer: 'We use SEO, Google Ads, Meta Ads, and landing pages to attract travelers actively looking for trips and packages.',
              icon: React.createElement(IconUserPlus, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Will the leads be exclusive to my agency?',
              answer: 'Yes. All leads are 100% exclusive and delivered directly to you, unlike OTAs where leads are shared.',
              icon: React.createElement(IconShieldCheck, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Can you guarantee high-quality leads?',
              answer: 'We optimize campaigns to attract high-intent travelers who are ready to book, reducing wasted inquiries.',
              icon: React.createElement(IconFilter, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Do you also provide lead nurturing support?',
              answer: 'Yes. We set up WhatsApp automation, emails, and retargeting ads to nurture cold leads into conversions.',
              icon: React.createElement(IconMessageChatbot, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'How do you manage seasonal fluctuations in leads?',
              answer: 'We create seasonal campaigns and off-season funnels to ensure steady inquiries throughout the year.',
              icon: React.createElement(IconCalendarEvent, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'How soon can I expect to see new leads?',
              answer: 'With paid ads, inquiries can start within days. Organic SEO and nurturing strategies ensure long-term consistency.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Need ",
      headlineKeywords: [
        "More Travel Inquiries?",
        "High-Quality Leads?",
        "Consistent Bookings?",
        "Lead Funnels That Convert?",
        "360° Lead Generation for Travel Brands?"
      ],
      brandLine: [
        { text: "📩 Generate Exclusive, High-Quality Travel Leads That Convert into Bookings", gradient: false }
      ],
      subheadline: "We help travel agencies, tour operators, and tourism companies get a steady flow of exclusive, conversion-ready leads without relying on OTAs.",
      ctaButtons: [
        { icon: React.createElement(IconTarget, { size: 28 }), text: "Get Free Lead Strategy", link: "/contact" },
        { icon: React.createElement(IconPhone, { size: 28 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "1 Lakh+ Leads",
          description: "Delivered for travel businesses"
        },
        {
          icon: React.createElement(IconChartBar, { size: 32 }),
          title: "70% Conversion Lift",
          description: "From optimized lead funnels"
        },
        {
          icon: React.createElement(IconWorld, { size: 32 }),
          title: "Global Reach",
          description: "International & domestic travelers"
        },
        {
          icon: React.createElement(IconRocket, { size: 32 }),
          title: "Faster Growth",
          description: "Agencies scaled in weeks"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the ", gradient: false },
        { text: "#1 Lead Generation Partner for Travel Brands", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconClipboardCheck, { size: 28 }),
          title: "Exclusive High-Quality Leads",
          description: "We deliver leads that are 100% exclusive and conversion-ready."
        },
        {
          icon: React.createElement(IconHeartHandshake, { size: 28 }),
          title: "Strong Traveler Engagement",
          description: "We build trust through emails, WhatsApp, and nurturing."
        },
        {
          icon: React.createElement(IconTarget, { size: 28 }),
          title: "Laser-Focused Targeting",
          description: "Reach travelers based on intent, location, and budget."
        },
        {
          icon: React.createElement(IconMail, { size: 28 }),
          title: "Lead Nurturing Automation",
          description: "Convert cold leads into bookings with smart funnels."
        },
        {
          icon: React.createElement(IconWorld, { size: 28 }),
          title: "Domestic & International Reach",
          description: "We scale your brand to reach global travelers."
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "ROI-Driven Campaigns",
          description: "Every lead we generate is optimized for maximum ROI."
        }
      ],
      cta: {
        text: "Start Generating Leads Today",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Proven Lead Generation Process for Travel & Tourism',
      subtitle: 'STEP-BY-STEP LEAD FLOW SYSTEM',
      className: 'border-t border-border dark:border-gray-700',
      description: 'We design targeted campaigns and funnels that consistently generate high-quality travel leads and nurture them into bookings.',
      steps: [
        { id: 1, title: 'Traveler Persona Research', description: 'Define traveler types, destinations, and booking behavior.' },
        { id: 2, title: 'Multi-Channel Campaigns', description: 'Leads via SEO, Google Ads, Meta Ads, WhatsApp & more.' },
        { id: 3, title: 'Landing Page Design', description: 'Conversion-focused pages that capture traveler inquiries.' },
        { id: 4, title: 'Lead Qualification & Filtering', description: 'Ensure only high-quality, genuine leads are passed.' },
        { id: 5, title: 'Nurturing & Retargeting', description: 'Automated follow-ups that warm up cold leads.' },
        { id: 6, title: 'Scaling & Optimization', description: 'Double down on best campaigns to grow bookings consistently.' }
      ]
    },
    testimonials: {
      title: [
        { text: "Travel Brands That ", gradient: false },
        { text: "Scaled with Lead Generation", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      description: 'See how Digi Aerotech helped travel agencies & tour operators consistently get high-quality leads and boost bookings.',
      testimonials: [
        {
          id: '1',
          message: 'Earlier we got random leads from OTAs. Now Digi Aerotech gives us exclusive, high-quality leads that actually book.',
          highlight: 'exclusive, high-quality leads',
          stars: 5,
          name: 'Pooja Verma',
          designation: 'Founder',
          company: 'DreamTrips Holidays'
        },
        {
          id: '2',
          message: 'Our leads doubled within a month and conversion rates improved with their nurturing system. Incredible results.',
          highlight: 'leads doubled',
          stars: 5,
          name: 'Siddharth Malhotra',
          designation: 'CEO',
          company: 'SkyHigh Travels'
        }
      ]
    },
    cta: {
      title: 'Ready to Get a Consistent Flow of Travel Leads?',
      subtitle: 'TURN LEADS INTO BOOKINGS',
      description: 'Book a free consultation with Digi Aerotech and discover how our lead generation system can skyrocket your travel & tourism business.'
    }
  }
};
