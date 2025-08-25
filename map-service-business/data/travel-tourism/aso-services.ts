import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconWorld, IconPlane, IconCalendarEvent, IconShieldCheck,
  IconUsers, IconTrendingUp, IconPhone, IconRocket, IconMap,
  IconStar, IconArrowRight, IconDeviceMobile, IconSearch,
  IconDownload, IconChartBar
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'aso-services',
  business: 'travel-tourism',
  variants: {
    hero: 'variant1',
    whyChooseUs: 'variant2',
    process: 'variant3',
    testimonials: 'variant1'
  },
  data: {
    slug: 'aso-services-travel-tourism',
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
            { text: "ASO Challenges Travel Apps ", gradient: false },
            { text: "Face in App Stores", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "From flight booking apps to local tour apps, competition is fierce. Without proper ASO, your app gets lost among global travel giants.",
          painPoints: [
            "Low visibility in App Store & Google Play search results",
            "Generic keywords failing to attract targeted travelers",
            "Poor ratings & reviews affecting trust and installs",
            "Low conversion from app visits to downloads",
            "Struggling to retain users after initial installs"
          ],
          solutionPoints: [
            "Keyword-rich titles & descriptions tailored for travel searches",
            "Localized ASO targeting global & regional travelers",
            "Review & rating optimization strategies to build trust",
            "High-converting creatives: app icons, screenshots, & videos",
            "Retention campaigns with push notifications & in-app engagement"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Boost Travel App Downloads"
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
              question: 'How does ASO help my travel app grow?',
              answer: 'ASO improves your app’s visibility on App Store & Google Play, helping travelers easily find and download your app instead of competitors.',
              icon: React.createElement(IconSearch, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Can you target international travelers with ASO?',
              answer: 'Yes. We optimize your app for multiple languages and regions so global tourists find your travel app when searching in their native language.',
              icon: React.createElement(IconWorld, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Do you improve app creatives like screenshots & videos?',
              answer: 'Absolutely. We design engaging visuals, icons, and demo videos that increase app downloads and build traveler trust instantly.',
              icon: React.createElement(IconDeviceMobile, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'How do you boost my app’s reviews & ratings?',
              answer: 'We implement review generation strategies, push in-app prompts at the right time, and manage reputation to increase positive ratings.',
              icon: React.createElement(IconStar, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Can ASO also increase in-app bookings?',
              answer: 'Yes. By attracting the right users and optimizing conversion funnels, ASO not only boosts installs but also drives real bookings.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'How soon can we see results with ASO?',
              answer: 'With optimized titles, keywords, and creatives, you’ll start seeing improved rankings and downloads within 4-6 weeks.',
              icon: React.createElement(IconChartBar, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Want ",
      headlineKeywords: [
        "More Travel App Downloads?",
        "Higher Traveler Engagement?",
        "Global Tourist Reach?",
        "Better Ratings & Reviews?",
        "ASO Services for Travel Apps?"
      ],
      brandLine: [
        { text: "📱 Scale Your Travel & Tourism App with Proven ASO Strategies", gradient: false }
      ],
      subheadline: "We help travel apps rank higher, attract global users, and convert installs into real bookings.",
      ctaButtons: [
        { icon: React.createElement(IconDownload, { size: 28 }), text: "Get Free ASO Audit", link: "/contact" },
        { icon: React.createElement(IconPhone, { size: 28 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconDownload, { size: 32 }),
          title: "1M+ Downloads",
          description: "Driven for travel apps"
        },
        {
          icon: React.createElement(IconWorld, { size: 32 }),
          title: "Global Reach",
          description: "Localized ASO in 25+ states"
        },
        {
          icon: React.createElement(IconStar, { size: 32 }),
          title: "4.8★ Avg Rating",
          description: "Reputation management success"
        },
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "High Retention",
          description: "Boosted user loyalty with engagement"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the ", gradient: false },
        { text: "#1 ASO Partner for Travel Apps", gradient: true, gradientClass: "from-blue-500 via-indigo-500 to-purple-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconSearch, { size: 28 }),
          title: "Keyword Mastery",
          description: "We rank your app for top travel search queries."
        },
        {
          icon: React.createElement(IconDeviceMobile, { size: 28 }),
          title: "Creative Optimization",
          description: "Optimized icons, screenshots & videos boost downloads."
        },
        {
          icon: React.createElement(IconWorld, { size: 28 }),
          title: "Localized Growth",
          description: "Target global travelers in their own language."
        },
        {
          icon: React.createElement(IconStar, { size: 28 }),
          title: "Reputation Management",
          description: "Boost ratings & reviews to build user trust."
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Conversion-Driven ASO",
          description: "We focus on installs that turn into bookings."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Proven Growth",
          description: "Scaled 100+ travel apps across the globe."
        }
      ],
      cta: {
        text: "Boost Your Travel App Installs",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our ASO Process for Travel Apps',
      subtitle: 'STEP-BY-STEP OPTIMIZATION',
      className: 'border-t border-border dark:border-gray-700',
      description: 'We refine your app store presence, optimize creatives, and run continuous iterations to ensure top rankings and user engagement.',
      steps: [
        { id: 1, title: 'Market & Competitor Research', description: 'Analyze competing travel apps & identify keyword gaps.' },
        { id: 2, title: 'Keyword Optimization', description: 'Optimize titles, descriptions & metadata with high-intent travel keywords.' },
        { id: 3, title: 'Creative Optimization', description: 'Design compelling icons, screenshots, and videos to boost CTR.' },
        { id: 4, title: 'Ratings & Review Strategy', description: 'Boost positive reviews & handle feedback smartly.' },
        { id: 5, title: 'Localization for Global Reach', description: 'Translate & optimize app listings for international travelers.' },
        { id: 6, title: 'Performance Tracking & Scaling', description: 'Monitor rankings, downloads & iterate for maximum growth.' }
      ]
    },
    testimonials: {
      title: [
        { text: "Travel Apps That ", gradient: false },
        { text: "Scaled with Our ASO", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      description: 'See how Digi Aerotech helped travel & tourism apps boost downloads, ratings, and global visibility.',
      testimonials: [
        {
          id: '1',
          message: 'Our flight booking app went from invisible to top 5 results for “cheap flights” in 3 months. Downloads skyrocketed.',
          highlight: 'Top 5 keyword ranking',
          stars: 5,
          name: 'Rahul Joshi',
          designation: 'CEO',
          company: 'FlyNow'
        },
        {
          id: '2',
          message: 'Thanks to their ASO strategies, our local tours app got featured on Play Store and doubled monthly bookings.',
          highlight: 'Featured on Play Store',
          stars: 5,
          name: 'Sanya Kapoor',
          designation: 'Founder',
          company: 'GoExplore'
        }
      ]
    },
    cta: {
      title: 'Ready to Scale Your Travel App with ASO?',
      subtitle: 'TURN INSTALLS INTO BOOKINGS',
      description: 'Book a free ASO audit with Digi Aerotech and discover how to rank higher, get more downloads, and boost travel bookings.'
    }
  }
};
