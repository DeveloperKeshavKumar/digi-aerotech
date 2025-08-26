import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconBrandFacebook, IconBrandInstagram,
  IconTrendingUp, IconDeviceMobile, IconTarget, IconUsers, IconAd2, IconPhoto, IconChartBar
} from '@tabler/icons-react';
import { Utensils } from 'lucide-react';

export const map: ServiceBusinessMap = {
  service: 'meta-ads',
  business: 'restaurants-cafes',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant3',
    process: 'variant1',
    testimonials: 'variant2'
  },
  data: {
    slug: 'meta-ads-restaurants-cafes',
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
            { text: "Why Restaurants & Cafés ", gradient: false },
            { text: "Struggle with Meta Ads", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Running food ads without strategy wastes money. Restaurants often boost random posts without targeting the right hungry audience, leading to poor results.",
          painPoints: [
            "Boosting posts without ROI tracking",
            "Poor audience targeting (wrong age, wrong city)",
            "Low-quality creatives not optimized for food lovers",
            "Not retargeting people who viewed menu or engaged",
            "Competitors dominating Instagram reels & stories"
          ],
          solutionPoints: [
            "Laser-targeted campaigns to local diners",
            "Data-driven ad creatives (reels, carousel, stories)",
            "High-converting ads for dine-in + delivery",
            "Retargeting warm audiences for repeat orders",
            "Tracking ROI with conversion-focused campaigns"
          ],
          cta: {
            icon: React.createElement(IconBrandFacebook, { size: 20 }),
            text: "Run Winning Meta Ads"
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
              question: 'Why are Meta Ads important for restaurants?',
              answer: 'Meta Ads let restaurants target hungry customers near them with irresistible food ads. They drive direct table bookings, walk-ins, and delivery orders.',
              icon: React.createElement(IconAd2, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Do you run ads for dine-in and delivery both?',
              answer: 'Yes! We design separate campaigns for dine-in promotions, delivery offers, seasonal menus, and happy hours to maximize ROI.',
              icon: React.createElement(Utensils, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'How do you make ads stand out?',
              answer: 'We use mouth-watering creatives, reels, carousel menus, and food videos that instantly grab attention and drive cravings.',
              icon: React.createElement(IconPhoto, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'How do you track ad success?',
              answer: 'We track clicks, bookings, orders, and ROI using Meta Ads Manager + analytics to ensure your money is spent effectively.',
              icon: React.createElement(IconChartBar, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Can small restaurants run ads effectively?',
              answer: 'Absolutely. Even small cafés can run hyper-local ads targeting just their neighborhood, bringing in daily customers at low cost.',
              icon: React.createElement(IconTarget, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Fill More Tables & Boost Delivery Orders ",
      headlineKeywords: [
        "Facebook Ads for Restaurants",
        "Instagram Ads for Cafés",
        "Meta Ads for Food Brands",
        "Restaurant Promotions Online"
      ],
      brandLine: [
        { text: "🔥 Meta Ads for Restaurants & Cafés", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      subheadline: "We run irresistible Facebook & Instagram ads that showcase your food, attract local diners, and turn cravings into bookings & orders.",
      ctaButtons: [
        { icon: React.createElement(IconBrandInstagram, { size: 28 }), text: "Launch Food Ads Now", link: "/contact" },
        { icon: React.createElement(IconBrandFacebook, { size: 28 }), text: "Free Meta Ads Consultation", link: "/contact", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "3X ROI on Ads",
          description: "maximize dine-in & delivery conversions"
        },
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "Targeted Diners",
          description: "ads shown to food lovers near you"
        },
        {
          icon: React.createElement(IconDeviceMobile, { size: 32 }),
          title: "Instagram Growth",
          description: "reels + stories that go viral locally"
        },
        {
          icon: React.createElement(Utensils, { size: 32 }),
          title: "More Orders",
          description: "drive walk-ins, bookings, and food delivery"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Us for ", gradient: false },
        { text: "Meta Ads Marketing", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconTarget, { size: 28 }),
          title: "Hyperlocal Targeting",
          description: "We reach food lovers within a few kms of your restaurant."
        },
        {
          icon: React.createElement(IconPhoto, { size: 28 }),
          title: "Irresistible Creatives",
          description: "Reels, carousel menus & food photos that convert cravings."
        },
        {
          icon: React.createElement(IconBrandFacebook, { size: 28 }),
          title: "Full Ad Funnel",
          description: "From awareness to retargeting, we run end-to-end ads."
        },
        {
          icon: React.createElement(IconDeviceMobile, { size: 28 }),
          title: "Mobile-First Strategy",
          description: "Optimized ads for Instagram & Facebook mobile users."
        },
        {
          icon: React.createElement(IconChartBar, { size: 28 }),
          title: "Data-Driven ROI",
          description: "Every ad spend tracked, optimized, and scaled."
        }
      ],
      cta: {
        text: "Start My Restaurant Ads",
        link: "#contact",
        icon: React.createElement(IconAd2, { size: 20 })
      }
    },
    process: {
      title: 'Our Meta Ads Process for Restaurants & Cafés',
      subtitle: 'FROM CRAVINGS TO BOOKINGS',
      className: 'border-t border-border dark:border-gray-700',
      description: 'Our ad strategy is built to attract local customers, show them delicious visuals, and convert them into walk-ins or delivery orders.',
      steps: [
        {
          id: 1,
          title: 'Market Research & Targeting',
          description: 'We identify your ideal diners — foodies, office goers, families — and target them by location, interests, and behaviors.'
        },
        {
          id: 2,
          title: 'Creative Ad Design',
          description: 'We design scroll-stopping reels, food carousels, and Instagram stories that highlight your signature dishes & offers.'
        },
        {
          id: 3,
          title: 'Campaign Setup',
          description: 'We launch campaigns with A/B tested creatives, optimized ad copy, and custom CTAs for dine-in, bookings, or delivery.'
        },
        {
          id: 4,
          title: 'Retargeting Campaigns',
          description: 'We re-engage people who clicked, visited, or engaged but didn’t convert — turning warm leads into paying customers.'
        },
        {
          id: 5,
          title: 'Performance Tracking',
          description: 'We monitor ad spend, ROI, bookings, and delivery orders with transparent weekly reports and ongoing optimization.'
        }
      ]
    },
    testimonials: {
      title: [
        { text: "Restaurants Growing with ", gradient: false },
        { text: "Meta Ads", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      description: 'See how cafés and restaurants are filling tables and doubling food orders using our targeted Meta Ads campaigns.',
      testimonials: [
        {
          id: '1',
          message: 'Our Instagram ads brought 60+ new walk-ins in just 10 days. The ROI was insane compared to random boosting we used to do.',
          highlight: 'High ROI',
          stars: 5,
          name: 'Rohit Verma',
          designation: 'Owner',
          company: 'Brew & Bite Café'
        },
        {
          id: '2',
          message: 'We doubled our Swiggy orders by running local ads that targeted nearby office employees. Huge impact on delivery sales!',
          highlight: 'Delivery Growth',
          stars: 5,
          name: 'Simran Kaur',
          designation: 'Owner',
          company: 'Tandoori Tales'
        }
      ]
    },
    cta: {
      title: 'Run Food Ads That Convert Cravings into Sales',
      subtitle: 'FACEBOOK + INSTAGRAM = FULL HOUSE',
      description: 'From creative reels to conversion-focused ad funnels, we make your restaurant or café the talk of the town.',
    }
  }
};
