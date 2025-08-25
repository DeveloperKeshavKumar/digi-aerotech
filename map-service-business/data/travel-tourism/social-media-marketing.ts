import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconBrandInstagram, IconBrandFacebook, IconBrandTiktok, IconBrandYoutube, IconBrandPinterest, IconBrandLinkedin,
  IconUsers, IconVideo, IconHeart, IconTarget, IconCalendarEvent, IconTrendingUp,
  IconRocket, IconShieldCheck, IconUserStar, IconWorld, IconArrowRight, IconPhoneCall
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'social-media-marketing',
  business: 'travel-tourism',
  variants: {
    hero: 'variant3',
    whyChooseUs: 'variant1',
    process: 'variant2',
    testimonials: 'variant1'
  },
  data: {
    slug: 'social-media-marketing-travel-tourism',
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
            { text: "Social Media Challenges ", gradient: false },
            { text: "Travel & Tourism Brands Face", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Travelers live on Instagram, TikTok, and YouTube. But without a powerful social presence, your brand risks being invisible in a world of wanderlust.",
          painPoints: [
            "Low organic reach on Instagram & Facebook",
            "Struggling to keep up with Reels, Shorts & TikTok trends",
            "Few followers converting into paying travelers",
            "Inconsistent posting & weak content planning",
            "No clear brand voice or storytelling",
            "Lack of influencer partnerships & social proof"
          ],
          solutionPoints: [
            "Instagram-first strategies with Reels & Stories that go viral",
            "Content calendars for consistent storytelling",
            "Engagement-focused strategies turning followers into customers",
            "Trend-driven TikTok & YouTube Shorts campaigns",
            "Influencer collabs & UGC boosting authenticity",
            "Cross-platform scaling: Instagram, Facebook, LinkedIn & more"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Boost Your Social Presence"
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
              question: 'Which social media platforms work best for travel marketing?',
              answer: 'Instagram, TikTok, YouTube, and Pinterest are ideal for showcasing destinations visually. LinkedIn works well for B2B & corporate travel.',
              icon: React.createElement(IconBrandInstagram, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Do you create travel Reels, Shorts, and TikToks?',
              answer: 'Yes. We produce short-form videos that spark wanderlust and drive instant engagement.',
              icon: React.createElement(IconBrandTiktok, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Can you help us grow followers into paying travelers?',
              answer: 'Absolutely. We design conversion funnels that guide followers from inspiration to bookings.',
              icon: React.createElement(IconTarget, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Do you also handle influencer collaborations?',
              answer: 'Yes. We connect your brand with travel influencers & bloggers who create authentic, high-trust content.',
              icon: React.createElement(IconUserStar, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'How do you manage seasonal campaigns?',
              answer: 'We create themed campaigns for holidays, festivals, and peak travel seasons that maximize bookings.',
              icon: React.createElement(IconCalendarEvent, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'How soon can we see results from social media marketing?',
              answer: 'Engagement spikes within weeks. Bookings grow steadily as content, community, and ads scale up.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Want ",
      headlineKeywords: [
        "More Instagram Followers?",
        "Viral Reels & TikToks?",
        "YouTube Travel Campaigns?",
        "Pinterest Travel Inspiration?",
        "360° Social Media Growth?"
      ],
      brandLine: [
        { text: "📲 Grow Your Travel & Tourism Brand with Social Media Marketing That Inspires Wanderlust", gradient: false }
      ],
      subheadline: "We help travel agencies, tour operators, and tourism brands shine on Instagram, TikTok, YouTube & more — turning followers into loyal travelers.",
      ctaButtons: [
        { icon: React.createElement(IconRocket, { size: 28 }), text: "Launch Social Media Growth", link: "/contact" },
        { icon: React.createElement(IconPhoneCall, { size: 28 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
      ],
      stats: [
        { icon: React.createElement(IconUsers, { size: 32 }), title: "2M+ Social Followers", description: "Built for travel brands" },
        { icon: React.createElement(IconVideo, { size: 32 }), title: "5,000+ Reels & Shorts", description: "Produced for campaigns" },
        { icon: React.createElement(IconHeart, { size: 32 }), title: "4.9/5 Engagement Rate", description: "Across all platforms" },
        { icon: React.createElement(IconWorld, { size: 32 }), title: "Global Reach", description: "Campaigns in 30+ countries" }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the ", gradient: false },
        { text: "#1 Social Media Partner for Travel Brands", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        { icon: React.createElement(IconBrandInstagram, { size: 28 }), title: "Instagram Growth Experts", description: "Reels, Stories, & influencer-led campaigns." },
        { icon: React.createElement(IconBrandTiktok, { size: 28 }), title: "TikTok Viral Marketing", description: "Trend-driven content for Gen-Z & millennials." },
        { icon: React.createElement(IconBrandYoutube, { size: 28 }), title: "YouTube Travel Films", description: "Destination videos that inspire bookings." },
        { icon: React.createElement(IconBrandFacebook, { size: 28 }), title: "Facebook Community Building", description: "Groups & ads nurturing loyal travelers." },
        { icon: React.createElement(IconBrandPinterest, { size: 28 }), title: "Pinterest Visual Storytelling", description: "Pin-worthy travel guides & inspiration boards." },
        { icon: React.createElement(IconBrandLinkedin, { size: 28 }), title: "Professional LinkedIn Ads", description: "B2B, corporate & luxury travel campaigns." }
      ],
      cta: {
        text: "Start Social Media Marketing",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Social Media Marketing Process for Travel Brands',
      subtitle: 'FROM CONTENT TO CONVERSIONS',
      className: 'border-t border-border dark:border-gray-700',
      description: 'We combine content creation, community building, influencer collabs, and ad campaigns to turn your social media into a booking machine.',
      steps: [
        {
          id: 1,
          title: 'Social Media Audit',
          description: 'We deep-dive into your current profiles, analyzing competitors, hashtags, and audience behavior. This helps us identify gaps and opportunities for faster growth in the travel niche.'
        },
        {
          id: 2,
          title: 'Content Strategy & Calendar',
          description: 'We create a monthly calendar focused on seasonal travel trends, destinations, and events. Each post is strategically designed to inspire wanderlust and drive higher engagement.'
        },
        {
          id: 3,
          title: 'Creative Production',
          description: 'Our team produces stunning visuals, engaging reels, TikToks, and YouTube shorts. We blend storytelling with destination highlights to make your brand unforgettable.'
        },
        {
          id: 4,
          title: 'Community Engagement',
          description: 'We actively interact with your followers through comments, DMs, polls, and stories. This builds trust, strengthens your travel brand voice, and converts followers into loyal travelers.'
        },
        {
          id: 5,
          title: 'Influencer Partnerships',
          description: 'We connect you with trusted travel influencers and bloggers who create authentic UGC. Their content boosts credibility, reaches wider audiences, and drives real bookings.'
        },
        {
          id: 6,
          title: 'Scaling & Analytics',
          description: 'We track KPIs like reach, engagement, CTR, and conversions across all platforms. Successful campaigns are scaled with paid ads and optimization to maximize ROI for your travel business.'
        }
      ]
    },
    testimonials: {
      title: [
        { text: "Travel Brands That ", gradient: false },
        { text: "Grew on Social Media with Us", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      description: 'See how Digi Aerotech transformed travel agencies & tourism operators into social-first brands loved by millions worldwide.',
      testimonials: [
        {
          id: '1',
          message: 'Our Instagram Reels went viral and doubled our bookings in just 3 months.',
          highlight: 'doubled our bookings',
          stars: 5,
          name: 'Ananya Gupta',
          designation: 'Founder',
          company: 'Skyline Travels'
        },
        {
          id: '2',
          message: 'TikTok ads and influencer collabs gave us 10X engagement and a new wave of young travelers.',
          highlight: '10X engagement',
          stars: 5,
          name: 'Kabir Malhotra',
          designation: 'CEO',
          company: 'GoBeyond Tours'
        }
      ]
    },
    cta: {
      title: 'Ready to Turn Social Media Followers into Travelers?',
      subtitle: 'MAKE YOUR BRAND TREND, INSPIRE & CONVERT',
      description: 'Book a free growth consultation with Digi Aerotech and discover how 360° social media marketing can fuel your travel business.'
    }
  }
};
