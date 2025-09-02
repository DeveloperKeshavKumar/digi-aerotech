import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconRocket, IconDeviceMobile, IconUsers, IconLayersDifference,
  IconArrowRight, IconCode, IconBulb, IconChartLine, IconSettings,
  IconCloud, IconAppWindow, IconSparkles, IconTrendingUp
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'mobile-apps-development',
  business: 'startups-entrepreneurs',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant1',
    process: 'variant3',
  },
  data: {
    slug: 'mobile-apps-development-startups-entrepreneurs',
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
            { text: "Why Startups Struggle with ", gradient: false },
            { text: "Mobile App Development", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Launching an app is expensive and complex — most startups burn time and money on poor development choices.",
          painPoints: [
            "High app development costs draining funds",
            "Poor UI/UX leading to low user adoption",
            "Delayed launches missing market timing",
            "Lack of scalability as users grow",
            "Technical debt due to rushed coding"
          ],
          solutionPoints: [
            "Startup-friendly MVP-first approach",
            "User-centric design & smooth experiences",
            "Agile development for faster time-to-market",
            "Scalable, future-proof app architecture",
            "Expert guidance to avoid costly mistakes"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Build My Startup App"
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
              question: 'Why should startups invest in mobile apps?',
              answer: 'Mobile apps help startups acquire users, raise funding, and build brand loyalty by providing seamless digital experiences.',
              icon: React.createElement(IconDeviceMobile, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Do you build MVP apps for startups?',
              answer: 'Yes, we specialize in MVP (Minimum Viable Product) development so startups can validate their idea quickly and affordably.',
              icon: React.createElement(IconBulb, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Which platforms do you support?',
              answer: 'We develop cross-platform apps for iOS and Android with React Native or Flutter, ensuring faster delivery and cost savings.',
              icon: React.createElement(IconAppWindow, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Will my app be scalable as my startup grows?',
              answer: 'Absolutely. We build cloud-integrated, scalable solutions so your app grows smoothly with your user base.',
              icon: React.createElement(IconCloud, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Do you handle UI/UX as well?',
              answer: 'Yes, our team designs user-friendly, conversion-focused app experiences tailored to startup audiences.',
              icon: React.createElement(IconSparkles, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Power Your Startup with ",
      headlineKeywords: [
        "Mobile Apps",
        "Scalable MVPs",
        "iOS & Android",
        "Digital Growth"
      ],
      brandLine: [
        { text: "📱 Build Startup Apps That Scale With Your Vision", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      subheadline: "We help startups and entrepreneurs bring their app ideas to life with scalable, user-friendly, and market-ready mobile solutions.",
      ctaButtons: [
        { icon: React.createElement(IconDeviceMobile, { size: 28 }), text: "Start My App Project", link: "/contact" },
        { icon: React.createElement(IconRocket, { size: 28 }), text: "Launch MVP Faster", link: "/contact", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "10K+ Users Onboarded",
          description: "via startup-focused apps"
        },
        {
          icon: React.createElement(IconLayersDifference, { size: 32 }),
          title: "MVP-First Approach",
          description: "validate ideas quickly"
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "Investor-Ready Apps",
          description: "built for scaling & funding"
        },
        {
          icon: React.createElement(IconChartLine, { size: 32 }),
          title: "Agile Development",
          description: "fast, flexible, affordable"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Entrepreneurs Trust Us for ", gradient: false },
        { text: "Mobile App Development", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconBulb, { size: 28 }),
          title: "MVP-Focused",
          description: "We prioritize MVPs to save time and money."
        },
        {
          icon: React.createElement(IconDeviceMobile, { size: 28 }),
          title: "Cross-Platform Apps",
          description: "iOS + Android apps built efficiently with one codebase."
        },
        {
          icon: React.createElement(IconSparkles, { size: 28 }),
          title: "Stunning UI/UX",
          description: "Apps that delight users and drive retention."
        },
        {
          icon: React.createElement(IconSettings, { size: 28 }),
          title: "Agile & Scalable",
          description: "Future-proof tech to grow as your startup grows."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Fast Time-to-Market",
          description: "Launch your app idea in weeks, not months."
        },
        {
          icon: React.createElement(IconCode, { size: 28 }),
          title: "Expert Developers",
          description: "Skilled in React Native, Flutter, and native tech."
        }
      ],
      cta: {
        text: "Build My Startup App",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Mobile App Development Process for Startups',
      subtitle: 'FROM IDEA TO LAUNCH',
      className: 'border-t border-border dark:border-gray-700',
      description: 'We follow a lean, agile, and startup-focused app development process that reduces risks, validates ideas, and ensures scalability.',
      steps: [
        {
          id: 1,
          title: 'Discovery & Strategy',
          description: 'We understand your vision, define the target audience, and align app features with startup goals.'
        },
        {
          id: 2,
          title: 'MVP Roadmap',
          description: 'We identify the must-have features for your MVP, helping you launch faster and attract early adopters or investors.'
        },
        {
          id: 3,
          title: 'UI/UX Design',
          description: 'Our designers craft user-friendly, intuitive, and visually appealing app experiences that drive adoption.'
        },
        {
          id: 4,
          title: 'Agile Development',
          description: 'We build your app using iterative sprints, ensuring speed, flexibility, and reduced risk of delays.'
        },
        {
          id: 5,
          title: 'Testing & QA',
          description: 'We test across devices and platforms, ensuring your app is bug-free, secure, and ready to launch.'
        },
        {
          id: 6,
          title: 'Launch & Scale',
          description: 'We publish your app on App Store & Google Play, with ongoing support, scaling, and updates.'
        }
      ]
    },
    cta: {
      title: 'Turn Your Startup Idea into a Mobile App',
      subtitle: 'MVP TO SCALING',
      description: 'We design, develop, and scale mobile apps for startups that attract users, investors, and growth opportunities.'
    }
  }
};
