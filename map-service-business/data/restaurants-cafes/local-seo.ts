import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconMapPin, IconSearch, IconCoffee, IconStar, 
  IconBuildingStore, IconTrendingUp, IconSeo, IconUsers, IconDeviceMobile, IconChartBar
} from '@tabler/icons-react';
import { Utensils } from 'lucide-react';

export const map: ServiceBusinessMap = {
  service: 'local-seo',
  business: 'restaurants-cafes',
  variants: {
    hero: 'variant3',
    whyChooseUs: 'variant1',
    process: 'variant2',
    testimonials: 'variant3'
  },
  data: {
    slug: 'local-seo-restaurants-cafes',
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
            { text: "Struggle with Local Visibility", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Even with great food, many cafés and restaurants miss out on local searches. Without proper Local SEO, you’re invisible to hungry customers nearby.",
          painPoints: [
            "Not showing in Google’s local pack or maps",
            "Low visibility for ‘near me’ searches",
            "Poorly optimized Google Business Profile",
            "Few online reviews or inconsistent ratings",
            "Competitors capturing local traffic"
          ],
          solutionPoints: [
            "Rank in Google Maps top 3 (Local Pack)",
            "Optimize for ‘near me’ and city-based searches",
            "Fully optimized GMB/GBP with menus & photos",
            "Reputation & reviews management",
            "Local keyword-rich content strategies"
          ],
          cta: {
            icon: React.createElement(IconMapPin, { size: 20 }),
            text: "Boost My Local Ranking"
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
              question: 'How does Local SEO help restaurants and cafés?',
              answer: 'Local SEO ensures your restaurant shows up when people nearby search “best café near me” or “restaurants open now”. This drives immediate foot traffic and calls.',
              icon: React.createElement(IconSearch, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Can you optimize my Google Business Profile?',
              answer: 'Yes! We optimize your profile with menus, photos, categories, Q&A, and posts, making sure you attract more local diners.',
              icon: React.createElement(IconBuildingStore, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Do online reviews affect my ranking?',
              answer: 'Absolutely! Consistent positive reviews improve both your local ranking and trust. We help generate and manage reviews effectively.',
              icon: React.createElement(IconStar, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'How fast can we see results?',
              answer: 'Most restaurants see improvements in local visibility and “near me” ranking within 6–8 weeks of starting Local SEO campaigns.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Does this also improve delivery leads?',
              answer: 'Yes! Local SEO boosts discovery on maps and local search, which directly translates into more delivery orders and online bookings.',
              icon: React.createElement(IconDeviceMobile, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Get Found When Hungry Customers Search ",
      headlineKeywords: [
        "Best Café Near Me",
        "Restaurants in My City",
        "Coffee Shops Nearby",
        "Food Delivery Near Me"
      ],
      brandLine: [
        { text: "📍 Local SEO for Restaurants & Cafés", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      subheadline: "We help your restaurant rank higher in Google Maps, dominate ‘near me’ searches, and drive more local foot traffic, calls, and delivery orders.",
      ctaButtons: [
        { icon: React.createElement(IconMapPin, { size: 28 }), text: "Dominate Local Searches", link: "/contact" },
        { icon: React.createElement(IconSeo, { size: 28 }), text: "Free Local SEO Audit", link: "/contact", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "2X Local Visibility",
          description: "rank higher in local pack searches"
        },
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "More Walk-ins",
          description: "drive new customers straight to your café"
        },
        {
          icon: React.createElement(IconStar, { size: 32 }),
          title: "Better Ratings",
          description: "generate & manage 5-star reviews"
        },
        {
          icon: React.createElement(IconChartBar, { size: 32 }),
          title: "Delivery Leads ↑",
          description: "capture ‘order near me’ search traffic"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Us for ", gradient: false },
        { text: "Restaurant Local SEO", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconSearch, { size: 28 }),
          title: "Rank in Google Maps",
          description: "We get your café into the top 3 for local searches."
        },
        {
          icon: React.createElement(IconBuildingStore, { size: 28 }),
          title: "Optimized Google Profile",
          description: "Menus, photos, posts, Q&A, and reviews fully managed."
        },
        {
          icon: React.createElement(IconStar, { size: 28 }),
          title: "Reputation Management",
          description: "Generate positive reviews & build diner trust."
        },
        {
          icon: React.createElement(Utensils, { size: 28 }),
          title: "Food-Specific SEO",
          description: "Optimize for cuisine-specific and trending searches."
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Local Growth Focused",
          description: "Boost both dine-in and delivery leads organically."
        }
      ],
      cta: {
        text: "Boost My Local SEO",
        link: "#contact",
        icon: React.createElement(IconMapPin, { size: 20 })
      }
    },
    process: {
      title: 'Our Local SEO Process for Restaurants & Cafés',
      subtitle: 'BE DISCOVERED LOCALLY',
      className: 'border-t border-border dark:border-gray-700',
      description: 'From audits to optimization and review generation, our process ensures your café or restaurant dominates local searches and attracts consistent leads.',
      steps: [
        {
          id: 1,
          title: 'Local SEO Audit',
          description: 'We assess your current rankings, Google Business Profile, citations, and competitors to identify gaps and opportunities.'
        },
        {
          id: 2,
          title: 'Profile Optimization',
          description: 'We optimize your GBP with photos, menus, Q&A, categories, keywords, and regular updates to maximize visibility.'
        },
        {
          id: 3,
          title: 'Citations & Listings',
          description: 'We create consistent NAP (Name, Address, Phone) listings across directories like Zomato, Yelp, TripAdvisor, Swiggy, etc.'
        },
        {
          id: 4,
          title: 'Review & Reputation Boost',
          description: 'We build campaigns that encourage happy customers to leave 5-star reviews and manage negative feedback effectively.'
        },
        {
          id: 5,
          title: 'Tracking & Reporting',
          description: 'We monitor your ranking, traffic, calls, and bookings with transparent reports, scaling what works best.'
        }
      ]
    },
    testimonials: {
      title: [
        { text: "Restaurants Winning with ", gradient: false },
        { text: "Local SEO", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      description: 'See how cafés and restaurants are filling tables and delivery slots with our proven local SEO strategies.',
      testimonials: [
        {
          id: '1',
          message: 'Within 2 months, our café ranked in the Google Maps top 3 for “coffee near me”. Foot traffic and takeaway orders doubled!',
          highlight: 'Top 3 Ranking',
          stars: 5,
          name: 'Ankit Sharma',
          designation: 'Owner',
          company: 'Bean & Brew Café'
        },
        {
          id: '2',
          message: 'We started showing up for “best biryani in Delhi” and “restaurants open now”. The increase in walk-ins has been amazing!',
          highlight: 'High Local Visibility',
          stars: 5,
          name: 'Meera Kapoor',
          designation: 'Owner',
          company: 'Spice Junction'
        }
      ]
    },
    cta: {
      title: 'Dominate Local Searches & Fill Your Tables',
      subtitle: 'LOCAL VISIBILITY = MORE BOOKINGS',
      description: 'Our restaurant-focused Local SEO strategies ensure your business is always found by hungry customers near you.',
    }
  }
};
