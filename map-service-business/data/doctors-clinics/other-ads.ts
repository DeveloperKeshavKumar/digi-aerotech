import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconStethoscope, IconVideo, IconUsers, IconArrowRight, IconTarget,
  IconRefresh, IconRocket, IconPresentation, IconChartBar, IconBrandYoutube,
  IconBrandLinkedin, IconBrain, IconMessageCircle, IconCloud
} from '@tabler/icons-react';
import { Monitor } from 'lucide-react';

export const map: ServiceBusinessMap = {
  service: 'other-ads',
  business: 'doctors-clinics',
  variants: {
    hero: 'variant3',
    whyChooseUs: 'variant1',
    process: 'variant2',
  },
  data: {
    slug: 'other-ads-doctors-clinics',
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
            { text: "Beyond Google & Meta Ads – ", gradient: false },
            { text: "Smarter Advertising for Clinics", gradient: true, gradientClass: "from-rose-500 via-pink-500 to-red-500" }
          ],
          subheadline: "Doctors and clinics lose potential patients by limiting ads only to Google & Meta. Advanced ad channels can build stronger trust, better reach, and more conversions.",
          painPoints: [
            "Patients ignoring generic ads due to ad fatigue",
            "Not visible on professional networks like LinkedIn",
            "No video presence to build trust & authority",
            "Losing repeat patients due to lack of retargeting",
            "Wasting budget on broad, irrelevant ads",
            "No brand awareness beyond search or social"
          ],
          solutionPoints: [
            "YouTube Ads for strong video storytelling & doctor branding",
            "LinkedIn Ads to connect with B2B healthcare partners",
            "Display Ads for building clinic recall everywhere",
            "Retargeting Ads to re-engage interested patients",
            "AI-driven targeting for precise audience reach",
            "Omnichannel campaigns for consistent presence"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Launch Smarter Ads Now"
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
              question: 'Why should clinics run ads beyond Google & Meta?',
              answer: 'Because patients and healthcare partners are also on LinkedIn, YouTube, and across the web. Other ads build stronger recall and trust.',
              icon: React.createElement(IconTarget, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Do YouTube Ads really work for doctors?',
              answer: 'Yes! Patients trust doctors more after watching explainer videos, testimonials, or awareness campaigns.',
              icon: React.createElement(IconBrandYoutube, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'What are retargeting ads for clinics?',
              answer: 'Retargeting ads re-engage patients who visited your website/app but didn’t book an appointment.',
              icon: React.createElement(IconRefresh, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Can LinkedIn Ads help doctors?',
              answer: 'Yes. Clinics, diagnostic centers, and B2B healthcare services can connect with corporate HR, insurers, and other professionals.',
              icon: React.createElement(IconBrandLinkedin, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Will it increase patient acquisition?',
              answer: 'Yes. Multi-channel ads increase brand trust, visibility, and appointment bookings.',
              icon: React.createElement(IconUsers, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'Do you manage ad creatives too?',
              answer: 'Yes, we create engaging video ads, graphics, and storytelling campaigns that build trust with patients.',
              icon: React.createElement(IconPresentation, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Expand Beyond ",
      headlineKeywords: [
        "Google & Meta Ads",
        "Video Advertising",
        "LinkedIn Campaigns",
        "Retargeting Patients",
        "Smarter Clinic Ads"
      ],
      brandLine: [
        { text: "🎯 Reach Patients Everywhere with Smarter Ads", gradient: false }
      ],
      subheadline: "We help doctors & clinics run LinkedIn, YouTube, Display & Retargeting Ads that build trust, awareness, and consistent patient flow.",
      ctaButtons: [
        { icon: React.createElement(IconRocket, { size: 28 }), text: "Book My Ads Strategy Call", link: "/contact" },
        { icon: React.createElement(IconTarget, { size: 28 }), text: "Launch Smart Ads", link: "/contact", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconBrandYoutube, { size: 32 }),
          title: "70% Trust Boost",
          description: "Patients trust clinics more after seeing video ads"
        },
        {
          icon: React.createElement(IconBrandLinkedin, { size: 32 }),
          title: "B2B Partnerships",
          description: "LinkedIn ads connect you with healthcare decision makers"
        },
        {
          icon: React.createElement(Monitor, { size: 32 }),
          title: "Omnichannel Reach",
          description: "Your clinic stays visible everywhere patients are"
        },
        {
          icon: React.createElement(IconRefresh, { size: 32 }),
          title: "Retention Growth",
          description: "Retargeting keeps patients coming back"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Digi Aerotech for ", gradient: false },
        { text: "Advanced Ads in Healthcare", gradient: true, gradientClass: "from-rose-500 via-pink-500 to-red-500" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconVideo, { size: 28 }),
          title: "Video Storytelling",
          description: "Professional YouTube Ads to build trust & credibility."
        },
        {
          icon: React.createElement(IconBrandLinkedin, { size: 28 }),
          title: "B2B Healthcare Ads",
          description: "LinkedIn Ads for referrals, insurers & corporate health tie-ups."
        },
        {
          icon: React.createElement(Monitor, { size: 28 }),
          title: "Display Ad Campaigns",
          description: "Engage patients across news, apps, and healthcare portals."
        },
        {
          icon: React.createElement(IconRefresh, { size: 28 }),
          title: "Smart Retargeting",
          description: "Re-engage patients who showed interest but didn’t book."
        },
        {
          icon: React.createElement(IconBrain, { size: 28 }),
          title: "AI-Powered Targeting",
          description: "Reach the right patients at the right time."
        },
        {
          icon: React.createElement(IconCloud, { size: 28 }),
          title: "Creative & Analytics",
          description: "We handle creatives, tracking & ROI optimization."
        }
      ],
      cta: {
        text: "Run Smarter Ads for My Clinic",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Smart Ads Process',
      subtitle: 'YOUTUBE • LINKEDIN • DISPLAY • RETARGETING',
      description: 'We combine advanced ad channels with healthcare expertise to drive more patients and stronger brand recall.',
      steps: [
        {
          id: 1,
          title: 'Discovery & Strategy',
          description: 'Understand your clinic goals, patient base & ad budgets.'
        },
        {
          id: 2,
          title: 'Channel Selection',
          description: 'Choose best mix of YouTube, LinkedIn, Display & Retargeting.'
        },
        {
          id: 3,
          title: 'Creative Development',
          description: 'Design video, graphics & storytelling ads patients trust.'
        },
        {
          id: 4,
          title: 'Targeting Setup',
          description: 'AI-powered audience targeting for maximum reach.'
        },
        {
          id: 5,
          title: 'Campaign Launch',
          description: 'Ads go live across multiple platforms.'
        },
        {
          id: 6,
          title: 'Optimization & Reporting',
          description: 'Weekly optimizations & transparent performance reports.'
        }
      ]
    },
    cta: {
      title: 'Ready to Run Smarter Ads for Your Clinic?',
      subtitle: 'EXPAND VISIBILITY • BUILD TRUST • ACQUIRE MORE PATIENTS',
      description: 'Book a free ad strategy consultation with Digi Aerotech and unlock YouTube, LinkedIn, Display & Retargeting Ads for your clinic today.'
    }
  }
};
