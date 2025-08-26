import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconBrandAppgallery, IconRocket, IconUsers, IconBulb, IconTarget,
  IconDeviceMobile, IconChartBar, IconStars, IconTrendingUp,
  IconArrowRight, IconCrown, IconChartHistogram, IconWorld
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'aso-services',
  business: 'startups-entrepreneurs',
  variants: {
    hero: 'variant1',
    whyChooseUs: 'variant2',
    process: 'variant3',
    testimonials: 'variant1'
  },
  data: {
    slug: 'aso-services-startups-entrepreneurs',
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
            { text: "App Growth Struggles ", gradient: false },
            { text: "Every Startup Faces", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Building an app is just step one. Getting it discovered, downloaded, and loved is where startups struggle the most.",
          painPoints: [
            "App not ranking for relevant keywords",
            "Low visibility in crowded app stores",
            "High uninstall rates due to poor engagement",
            "Negative or few reviews holding growth back",
            "Struggling to compete with bigger funded apps"
          ],
          solutionPoints: [
            "Keyword-rich app titles, descriptions & metadata",
            "Optimized creatives (icons, screenshots, videos)",
            "Review management & reputation building",
            "Retention-focused ASO strategies",
            "Competitive research & growth-driven positioning"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Optimize My Startup App"
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
              question: 'Why do startups need ASO?',
              answer: 'ASO helps startups get discovered by potential users without heavy ad spending, driving organic installs and long-term growth.',
              icon: React.createElement(IconDeviceMobile, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'How is ASO different from SEO?',
              answer: 'ASO focuses on ranking apps in the App Store & Google Play, optimizing metadata, visuals, and reviews, while SEO targets websites in search engines.',
              icon: React.createElement(IconWorld, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Can ASO really improve app installs?',
              answer: 'Yes, optimized keywords, better creatives, and higher ratings directly influence visibility and download rates.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Do you handle app reviews and ratings?',
              answer: 'Absolutely. We implement strategies to increase positive reviews and improve ratings, strengthening your app’s reputation.',
              icon: React.createElement(IconStars, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Do you optimize for both iOS and Android?',
              answer: 'Yes, our ASO strategies are tailored for both Apple App Store and Google Play Store to maximize your app’s reach.',
              icon: React.createElement(IconBrandAppgallery, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'How soon can I expect results from ASO?',
              answer: 'Most startups see noticeable improvements in rankings and downloads within 2–3 months depending on competition and niche.',
              icon: React.createElement(IconChartHistogram, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Struggling to Grow Your ",
      headlineKeywords: [
        "Startup App?",
        "Entrepreneurial Idea?",
        "Mobile Innovation?",
        "Digital Product?",
        "Disruptive Platform?"
      ],
      brandLine: [
        { text: "🚀 ASO Services That Scale Startups", gradient: false }
      ],
      subheadline: "We help startups and entrepreneurs dominate app stores, increase downloads, and boost retention with data-driven ASO strategies.",
      ctaButtons: [
        { icon: React.createElement(IconRocket, { size: 28 }), text: "Start My ASO Growth", link: "/contact" },
        { icon: React.createElement(IconBulb, { size: 28 }), text: "Free ASO Audit", link: "/aso-audit", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconChartBar, { size: 32 }),
          title: "10K+ Installs",
          description: "boosted for startups"
        },
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "40% Retention",
          description: "improvement for apps"
        },
        {
          icon: React.createElement(IconCrown, { size: 32 }),
          title: "Top Rankings",
          description: "achieved in app stores"
        },
        {
          icon: React.createElement(IconTarget, { size: 32 }),
          title: "Data-Driven",
          description: "keyword & creative ASO"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Startups Trust Digi Aerotech for ", gradient: false },
        { text: "ASO Services", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Startup-Focused Growth",
          description: "Specialized in scaling early-stage apps."
        },
        {
          icon: React.createElement(IconDeviceMobile, { size: 28 }),
          title: "App Store Optimization",
          description: "Complete ASO for iOS & Android."
        },
        {
          icon: React.createElement(IconStars, { size: 28 }),
          title: "Ratings & Reviews",
          description: "Building trust with positive feedback."
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Data-Driven Strategy",
          description: "Keyword & market analysis for results."
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "User Retention",
          description: "Boosting engagement & long-term usage."
        },
        {
          icon: React.createElement(IconBulb, { size: 28 }),
          title: "Innovative Edge",
          description: "Creative strategies for competitive advantage."
        }
      ],
      cta: {
        text: "Boost My Startup App",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Startup ASO Process',
      subtitle: 'FROM IDEA TO APP STORE SUCCESS',
      className: 'border-t border-border dark:border-gray-700',
      description: 'We follow a proven ASO process tailored for startups and entrepreneurs to maximize visibility, installs, and retention.',
      steps: [
        {
          id: 1,
          title: 'Market & Competitor Research',
          description: 'We analyze your niche, competitors, and top apps to find opportunities for visibility and growth in crowded markets.'
        },
        {
          id: 2,
          title: 'Keyword Optimization',
          description: 'We implement keyword-rich titles, descriptions, and tags to increase rankings for relevant searches.'
        },
        {
          id: 3,
          title: 'Creative Optimization',
          description: 'Icons, screenshots, and videos are optimized to attract attention and boost click-to-install rates.'
        },
        {
          id: 4,
          title: 'Review & Rating Strategy',
          description: 'We encourage positive reviews, manage negative feedback, and improve app reputation to build user trust.'
        },
        {
          id: 5,
          title: 'Retention & Engagement',
          description: 'We optimize push strategies, onboarding, and app updates to keep users engaged long-term.'
        },
        {
          id: 6,
          title: 'Analytics & Scaling',
          description: 'Performance tracking, A/B testing, and scaling strategies to ensure sustainable app growth.'
        }
      ]
    },
    testimonials: {
      title: [
        { text: "Startup Success Stories with ", gradient: false },
        { text: "ASO Growth", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      description: 'From early-stage apps to fast-scaling platforms, we’ve helped startups climb app store charts and attract loyal users.',
      testimonials: [
        {
          id: '1',
          message: 'Our app went from invisible to ranking in the top 10 of our category in just 4 months thanks to Digi Aerotech’s ASO strategies.',
          highlight: 'Top 10 App Ranking',
          stars: 5,
          name: 'Rohan Mehta',
          designation: 'Founder',
          company: 'FinEase Startup'
        },
        {
          id: '2',
          message: 'The ASO team not only boosted installs but also helped us improve retention and user engagement, a game-changer for our growth.',
          highlight: 'Boosted Retention & Engagement',
          stars: 5,
          name: 'Ananya Singh',
          designation: 'Co-Founder',
          company: 'HealthifyGo App'
        }
      ]
    },
    cta: {
      title: 'Scale Your Startup App with ASO',
      subtitle: 'FROM DOWNLOADS TO ACTIVE USERS',
      description: 'Partner with Digi Aerotech to optimize your app store presence, attract downloads, and retain users for long-term success.'
    }
  }
};
