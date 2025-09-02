import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { ServiceIcons } from '@/constants/service-icons';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import { 
  IconShoppingBag, IconUsers, IconChartBar, IconWorld, IconCamera, IconRocket,
  IconBrandInstagram, IconBrandTiktok, IconDeviceMobile, IconAd2, IconSearch, 
  IconDiamond, IconBrush, IconPhone, IconArrowRight, IconCalendar, 
  IconBrandSnapchat
} from '@tabler/icons-react';

const { IconFreeRights } = ServiceIcons;

export const map: ServiceBusinessMap = {
  service: '360-digital-marketing',
  business: 'fashion-brands',
  variants: {
    hero: 'variant1',
    whyChooseUs: 'variant2',
    process: 'variant3',
  },
  data: {
    slug: '360-digital-marketing-fashion-brands',
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
            { text: "The Struggles ", gradient: false },
            { text: "Fashion Brands ", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" },
            { text: "Face in Digital Growth", gradient: false }
          ],
          subheadline: "Fashion moves fast. Without the right digital strategy, your brand risks fading away.",
          painPoints: [
            "Getting lost in a crowded online fashion market",
            "Difficulty scaling beyond social media followers",
            "Low website conversions despite high traffic",
            "High ad spend but poor ROI",
            "Struggling to create an aspirational brand presence"
          ],
          solutionPoints: [
            "SEO & content to dominate Google search results",
            "High-converting websites & lookbook landing pages",
            "Engaging social media campaigns (Instagram, TikTok, Pinterest)",
            "Performance-driven ad campaigns with clear ROI",
            "Influencer & community collaborations for credibility"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Scale My Fashion Brand Now"
          }
        },
        position: 'beforeWhyChooseUs'
      },
      {
        component: FaqSection,
        position: 'afterTestimonials',
        props: {
          faqs: [
            {
              id: 'fashion-1',
              question: 'How do you help fashion brands grow online?',
              answer: 'We combine SEO, influencer marketing, and paid ads to boost visibility, drive traffic, and convert browsers into buyers.',
              icon: React.createElement(IconShoppingBag, { size: 22 })
            },
            {
              id: 'fashion-2',
              question: 'Do you also manage influencer collaborations?',
              answer: 'Yes. We connect fashion brands with the right influencers on Instagram, TikTok, and YouTube to amplify reach and authenticity.',
              icon: React.createElement(IconBrandInstagram, { size: 22 })
            },
            {
              id: 'fashion-3',
              question: 'Can you handle international campaigns for fashion brands?',
              answer: 'Absolutely. We run multi-language, multi-country campaigns to help fashion brands scale globally.',
              icon: React.createElement(IconWorld, { size: 22 })
            },
            {
              id: 'fashion-4',
              question: 'What about e-commerce store optimization?',
              answer: 'We optimize product pages, checkout flows, and retargeting ads to maximize sales for your fashion e-commerce store.',
              icon: React.createElement(IconChartBar, { size: 22 })
            },
            {
              id: 'fashion-5',
              question: 'Do you also provide creative campaigns?',
              answer: 'Yes. Our team crafts seasonal lookbooks, trend campaigns, and brand visuals that make your brand unforgettable.',
              icon: React.createElement(IconBrush, { size: 22 })
            },
            {
              id: 'fashion-6',
              question: 'How do you measure ROI for fashion marketing?',
              answer: 'We track every click, conversion, and purchase with advanced analytics dashboards, ensuring data-driven decision-making.',
              icon: React.createElement(IconDiamond, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Want ",
      headlineKeywords: [
        "360 Digital Marketing for Fashion Brands?",
        "More Online Sales?",
        "Stronger Brand Identity?",
        "Global Reach?",
        "Loyal Communities?"
      ],
      brandLine: [
        { text: "👗 Where Style Meets Strategy – Scale Your Fashion Brand Digitally", gradient: false }
      ],
      subheadline: "Digi Aerotech helps fashion brands stand out, build communities, and convert clicks into loyal customers with 360° marketing strategies.",
      ctaButtons: [
        { icon: React.createElement(IconFreeRights, { size: 30 }), text: "Get Free Strategy Call", link: "/contact" },
        { icon: React.createElement(IconPhone, { size: 30 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 34 }),
          title: "2M+ Followers",
          description: "Built for fashion brands"
        },
        {
          icon: React.createElement(IconShoppingBag, { size: 34 }),
          title: "50K+ Sales",
          description: "Driven via campaigns"
        },
        {
          icon: React.createElement(IconBrandSnapchat, { size: 34 }),
          title: "Viral Campaigns",
          description: "YT & Instagram Reels"
        },
        {
          icon: React.createElement(IconRocket, { size: 34 }),
          title: "Global Reach",
          description: "Brands scaled across 12+ countries"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why ", gradient: false },
        { text: "Fashion Brands Choose Digi Aerotech", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconBrandInstagram, { size: 32 }),
          title: "Social-First Marketing",
          description: "We craft thumb-stopping campaigns tailored for Instagram, TikTok, and Pinterest."
        },
        {
          icon: React.createElement(IconSearch, { size: 32 }),
          title: "Fashion SEO Expertise",
          description: "We rank your brand on top for trending fashion keywords & style categories."
        },
        {
          icon: React.createElement(IconAd2, { size: 32 }),
          title: "High-ROI Paid Ads",
          description: "From Meta Ads to Google Shopping, we maximize sales with performance campaigns."
        },
        {
          icon: React.createElement(IconCamera, { size: 32 }),
          title: "Creative Lookbooks & Visuals",
          description: "Seasonal campaigns that make your brand unforgettable and aspirational."
        },
        {
          icon: React.createElement(IconDeviceMobile, { size: 32 }),
          title: "Seamless Mobile Shopping",
          description: "Optimized e-commerce experience for fashion shoppers on-the-go."
        },
        {
          icon: React.createElement(IconDiamond, { size: 32 }),
          title: "Premium Brand Positioning",
          description: "We elevate your brand to stand out as luxury, streetwear, or lifestyle leader."
        }
      ],
      cta: {
        text: "Start Scaling Your Fashion Brand",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our Proven Fashion Marketing Process',
      subtitle: 'STEP-BY-STEP FASHION BRAND GROWTH',
      className: 'border-t border-border dark:border-gray-700',
      description: 'A data-driven yet creative process designed to turn fashion brands into global names.',
      steps: [
        {
          id: 1,
          title: 'Market & Trend Research',
          description: 'We analyze fashion trends, competitors, and audience psychology.'
        },
        {
          id: 2,
          title: 'Brand Identity Strategy',
          description: 'Defining your unique brand voice and digital style guide.'
        },
        {
          id: 3,
          title: 'Content & Creative Production',
          description: 'Lookbooks, reels, influencer content — everything fashion consumers love.'
        },
        {
          id: 4,
          title: 'Multi-Channel Campaigns',
          description: 'Instagram, TikTok, SEO, Ads — executed for global reach and engagement.'
        },
        {
          id: 5,
          title: 'Conversion Optimization',
          description: 'Optimizing stores, CTAs, and checkout to maximize fashion sales.'
        },
        {
          id: 6,
          title: 'Scaling & Expansion',
          description: 'Once successful, we scale campaigns globally and across new product lines.'
        }
      ]
    },
    cta: {
      title: 'Ready to Make Your Fashion Brand Go Viral?',
      subtitle: 'Don’t just sell clothes. Build a fashion empire.',
      description: 'With Digi Aerotech’s 360° Digital Marketing for Fashion Brands, you’ll dominate trends, increase sales, and create a brand people desire.'
    }
  }
};
