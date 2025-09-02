import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { ServiceIcons } from '@/constants/service-icons';
import { Struggles } from '@/components/homepage/struggles';
import { IconAd2, IconArrowRight, IconBrandMeta, IconCamera, IconChartBar, IconDeviceLaptop, IconHeart, IconMapPin2, IconSearch, IconSocial, IconUser } from '@tabler/icons-react';
import { FaqSection } from '@/components/services/faq-section';
import { Dumbbell } from 'lucide-react';

const { IconFreeRights, IconPhone, IconStarsFilled, IconRocket } = ServiceIcons;

export const map: ServiceBusinessMap = {
  service: '360-digital-marketing',
  business: 'gyms-fitness',
  variants: {
    hero: 'variant3',
    whyChooseUs: 'variant1',
    process: 'variant2',
  },
  data: {
    slug: '360-digital-marketing',
    showSections: {
      hero: true,
      whyChooseUs: true,
      typesOfServices: false,
      process: true,
      techStack: false,
      testimonials: true,
      cta: true
    },
    customSections: [
      {
        component: Struggles,
        props: {
          title: [
            { text: "The Problems ", gradient: false },
            { text: "Gym Owners Face", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" },
            { text: " with Marketing", gradient: false }
          ],
          subheadline: "Running a gym is hard. Growing it online is even harder.",
          painPoints: [
            "Competing with bigger gyms & fitness chains",
            "Losing members to local competitors",
            "Dependence on word-of-mouth referrals only",
            "Ads with zero ROI & wasted budget",
            "Social media with followers but no new members"
          ],
          solutionPoints: [
            " Dominate Google & Maps searches",
            " Run ads that actually bring leads, not just clicks",
            " Social media content that drives gym signups",
            " High-converting websites & landing pages",
            " Maximize ROI from every marketing rupee spent"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Grow My Membership Now"
          }
        },
        position: 'beforeWhyChooseUs'
      }, {
        component: FaqSection,
        position: 'afterTestimonials',
        props: {
          faqs: [
            {
              id: 'gym-1',
              question: 'How do you help gyms get more memberships?',
              answer: 'We run hyper-local ads, create irresistible offers, and optimize Google Maps to bring walk-ins and sign-ups.',
              icon: React.createElement(Dumbbell, { size: 22 })
            },
            {
              id: 'gym-2',
              question: 'Do you also promote personal trainers and classes?',
              answer: 'Yes. We build funnels for PT sessions, yoga classes, and fitness programs to increase enrollment.',
              icon: React.createElement(IconUser, { size: 22 })
            },
            {
              id: 'gym-3',
              question: 'How can digital marketing reduce member dropouts?',
              answer: 'We set up loyalty programs, reminders, and engagement campaigns to retain members longer.',
              icon: React.createElement(IconHeart, { size: 22 })
            },
            {
              id: 'gym-4',
              question: 'Will you manage my gym’s social media presence?',
              answer: 'Absolutely. We design reels, transformation stories, and fitness content that inspires and attracts new clients.',
              icon: React.createElement(IconCamera, { size: 22 })
            },
            {
              id: 'gym-5',
              question: 'Can you promote online classes or hybrid training?',
              answer: 'Yes. We build online funnels for Zoom/Hybrid classes so you can expand beyond physical members.',
              icon: React.createElement(IconDeviceLaptop, { size: 22 })
            },
            {
              id: 'gym-6',
              question: 'How do you prove ROI for gyms & fitness studios?',
              answer: 'We track memberships, PT sessions sold, class bookings, and retention rates to show measurable growth.',
              icon: React.createElement(IconChartBar, { size: 22 })
            }
          ]
        }

      }
    ],
    hero: {
      initial: "Need ",
      headlineKeywords: [
        "360 Digital Marketing for Gyms & Fitness?",
        "Better Results?",
        "More Growth?",
        "Success?",
        "ROI?"
      ],
      brandLine: [
        { text: "🔥 More Members. More Revenue. Less Empty Treadmills.", gradient: false }
      ],
      subheadline: "With Digi Aerotech’s 360° Digital Marketing for Gyms & Fitness Studios, you’ll dominate local searches, fill your classes, and turn your gym into the #1 choice in town.",
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
          description: "Gyms Fitness served"
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
        { text: " for Gyms & Fitness Studios", gradient: false }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconMapPin2, { size: 32 }),
          title: "Google My Business (GMB) Optimization",
          description: "Rank for “Gym near me” in your city. Showcase reviews, class schedules, and offers. Weekly posting and review management to boost local trust."
        },
        {
          icon: React.createElement(IconAd2, { size: 32 }),
          title: "Google Ads (Search + Display + Local Ads)",
          description: "Target people searching for gyms in your area. Use geo-targeting to reach nearby neighborhoods. Drive real leads with calls, directions, and memberships."
        },
        {
          icon: React.createElement(IconBrandMeta, { size: 32 }),
          title: "Meta Ads (Facebook + Instagram)",
          description: "Promote membership offers and transformation stories. Reach fitness-focused audiences. Retarget website visitors for better conversion rates."
        },
        {
          icon: React.createElement(IconSocial, { size: 32 }),
          title: "Social Media Management",
          description: "Engaging daily/weekly content – workout tips, reels, offers. Build authority in your niche. Seasonal and festival-based campaigns to drive engagement."
        },
        {
          icon: React.createElement(IconDeviceLaptop, { size: 32 }),
          title: "Website & Landing Page Development",
          description: "Mobile-first websites with lead forms and membership integration. Built for conversions, optimized for speed and user experience."
        },
        {
          icon: React.createElement(IconSearch, { size: 32 }),
          title: "SEO for Gyms & Fitness Centers",
          description: "Rank for local fitness terms like “Best gym in [city]”. Blog content on nutrition, workouts, and success stories to drive long-term organic growth."
        }
      ],
      cta: {
        text: "Get a Free Strategy Session",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    typesOfServices: {
      title: 'Our 360 Digital Marketing for Gyms Fitness',
      subtitle: 'GYMS FITNESS SPECIALIZED SERVICES',
      description: 'Comprehensive 360 digital marketing solutions designed specifically for gyms fitness businesses.',
      services: [
        {
          id: 1,
          title: 'Strategy & Planning',
          description: 'Custom 360 digital marketing strategy development tailored for gyms fitness market requirements.',
          icon: React.createElement(IconStarsFilled, { size: 24 })
        },
        {
          id: 2,
          title: 'Implementation & Execution',
          description: 'Expert implementation of 360 digital marketing campaigns optimized for gyms fitness audience.',
          icon: React.createElement(IconStarsFilled, { size: 24 })
        },
        {
          id: 3,
          title: 'Monitoring & Optimization',
          description: 'Continuous monitoring and optimization to maximize ROI and performance for gyms fitness businesses.',
          icon: React.createElement(IconStarsFilled, { size: 24 })
        }
      ]
    },
    process: {
      title: 'Our 360 Digital Marketing Process for Gyms Fitness',
      subtitle: 'PROVEN METHODOLOGY',
      className: 'border-t border-border dark:border-gray-700',
      description: 'A systematic approach to 360 digital marketing that delivers measurable results for gyms fitness businesses.',
      steps: [
        {
          id: 1,
          title: 'Discovery & Analysis',
          description: 'Comprehensive analysis of your gyms fitness business and market landscape.'
        },
        {
          id: 2,
          title: 'Strategy Development',
          description: 'Custom 360 digital marketing strategy tailored for your specific gyms fitness goals.'
        },
        {
          id: 3,
          title: 'Implementation',
          description: 'Expert execution of 360 digital marketing campaigns with gyms fitness focus.'
        },
        {
          id: 4,
          title: 'Optimization',
          description: 'Continuous refinement and optimization based on gyms fitness market feedback.'
        }
      ]
    },
    cta: {
      title: 'Ready to Transform Your Gyms & Fitness Business?',
      subtitle: 'Stop Competing. Start Leading.',
      description: 'With Digi Aerotech’s 360° Digital Marketing for Gyms & Fitness Studios, you get a proven growth system that fills your gym with paying members.'
    }
  }
};
