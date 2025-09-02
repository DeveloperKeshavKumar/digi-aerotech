import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconStethoscope, IconUsers, IconArrowRight, IconBrandFacebook,
  IconBrandInstagram, IconBrandLinkedin, IconTarget, IconHeart,
  IconMessageCircle, IconTrendingUp, IconRocket, IconVideo,
  IconReportAnalytics, IconStar, IconBuildingHospital
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'social-media-marketing',
  business: 'doctors-clinics',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant1',
    process: 'variant2',
  },
  data: {
    slug: 'social-media-marketing-doctors-clinics',
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
            { text: "Social Media Marketing for Doctors & Clinics – ", gradient: false },
            { text: "Build Trust & Attract More Patients", gradient: true, gradientClass: "from-pink-500 via-red-500 to-yellow-500" }
          ],
          subheadline: "Your patients are already on Instagram, Facebook, and YouTube. If your clinic isn’t there, you’re invisible to them.",
          painPoints: [
            "No professional presence on social media platforms",
            "Low patient engagement on existing social accounts",
            "Competitors getting more visibility with creative posts",
            "No time to consistently create and post content",
            "Poor-quality designs, reels, and patient awareness campaigns",
            "No strategy to convert followers into patients"
          ],
          solutionPoints: [
            "Professional branding for Facebook, Instagram & LinkedIn",
            "Engaging reels, carousels, and awareness campaigns",
            "Social media ads targeting your city & specialty",
            "Content calendar with consistent posting strategy",
            "Patient education campaigns that build authority",
            "Analytics & reporting on reach, engagement, and ROI"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Boost My Social Media"
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
              question: 'Why do doctors need social media marketing?',
              answer: 'Patients trust doctors who are active online. Social media builds credibility, visibility, and connects you with new patients.',
              icon: React.createElement(IconHeart, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Which platforms are best for clinics?',
              answer: 'Instagram, Facebook, and YouTube for awareness, LinkedIn for professional authority.',
              icon: React.createElement(IconBrandInstagram, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Will social media bring me patients?',
              answer: 'Yes. With the right content and ads, social media converts followers into bookings.',
              icon: React.createElement(IconUsers, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Do you run ads on social media?',
              answer: 'Yes. We run city-specific ads for doctors and clinics to attract local patients.',
              icon: React.createElement(IconTarget, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Can you create medical awareness content?',
              answer: 'Yes. We design reels, infographics & posts that educate patients and build trust.',
              icon: React.createElement(IconVideo, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'How will I measure results?',
              answer: 'We share monthly reports covering reach, engagement, followers & leads.',
              icon: React.createElement(IconReportAnalytics, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Social Media Marketing for ",
      headlineKeywords: [
        "Doctors",
        "Clinics",
        "Hospitals",
        "Specialists",
        "Healthcare Brands"
      ],
      brandLine: [
        { text: "📲 Build Trust, Grow Engagement & Book More Patients", gradient: false }
      ],
      subheadline: "We help doctors & clinics dominate Instagram, Facebook, and YouTube with patient-focused campaigns.",
      ctaButtons: [
        { icon: React.createElement(IconRocket, { size: 28 }), text: "Book Free Strategy Call", link: "/contact" },
        { icon: React.createElement(IconTrendingUp, { size: 28 }), text: "Grow My Clinic Online", link: "/contact", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconBrandFacebook, { size: 32 }),
          title: "3.6B+ Users",
          description: "Facebook & Instagram patient reach"
        },
        {
          icon: React.createElement(IconBrandInstagram, { size: 32 }),
          title: "High Engagement",
          description: "Instagram reels & posts patients love"
        },
        {
          icon: React.createElement(IconBrandLinkedin, { size: 32 }),
          title: "Doctor Authority",
          description: "Build trust with professionals"
        },
        {
          icon: React.createElement(IconMessageCircle, { size: 32 }),
          title: "Direct Connection",
          description: "Answer patient queries instantly"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Digi Aerotech for ", gradient: false },
        { text: "Medical Social Media Marketing?", gradient: true, gradientClass: "from-pink-500 via-red-500 to-yellow-500" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconBrandInstagram, { size: 28 }),
          title: "Healthcare Niche Experts",
          description: "We understand medical compliance & patient communication."
        },
        {
          icon: React.createElement(IconVideo, { size: 28 }),
          title: "Creative Reels & Ads",
          description: "Engaging patient-friendly campaigns that convert."
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "Local Patient Targeting",
          description: "We run ads that bring patients from your city."
        },
        {
          icon: React.createElement(IconReportAnalytics, { size: 28 }),
          title: "Transparent Reporting",
          description: "Know your engagement, leads & ROI every month."
        },
        {
          icon: React.createElement(IconHeart, { size: 28 }),
          title: "Patient-Centric Content",
          description: "Content that educates, informs & builds trust."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Growth Guaranteed",
          description: "We scale your clinic’s presence month after month."
        }
      ],
      cta: {
        text: "Start My Social Media Growth",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Social Media Growth Process for Clinics',
      subtitle: 'CONNECT • ENGAGE • CONVERT',
      description: 'We use a proven framework to turn social media into a patient acquisition machine.',
      steps: [
        {
          id: 1,
          title: 'Strategy & Branding',
          description: 'Define your clinic’s voice, tone & unique positioning.'
        },
        {
          id: 2,
          title: 'Content Calendar',
          description: 'Plan & design posts, reels, and campaigns in advance.'
        },
        {
          id: 3,
          title: 'Creative Content',
          description: 'Patient awareness campaigns, reels & infographics.'
        },
        {
          id: 4,
          title: 'Paid Social Ads',
          description: 'Targeted ads to attract patients in your city.'
        },
        {
          id: 5,
          title: 'Engagement Boost',
          description: 'Respond to queries, manage DMs & build trust.'
        },
        {
          id: 6,
          title: 'Analytics & Scaling',
          description: 'Track results & scale campaigns that work best.'
        }
      ]
    },
    cta: {
      title: 'Ready to Grow Your Clinic with Social Media?',
      subtitle: 'INSTAGRAM • FACEBOOK • YOUTUBE • LINKEDIN',
      description: 'Book a free social media strategy session with Digi Aerotech and start attracting more patients today.',
    }
  }
};
