import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconTrendingUp,
  IconUsers,
  IconStar,
  IconShieldCheck,
  IconRocket,
  IconShoppingBag,
  IconGlobe,
  IconArrowRight,
  IconPhone,
  IconChartArcs
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'seo-services',
  business: 'fashion-brands',
  variants: {
    hero: 'variant1',
    whyChooseUs: 'variant3',
    process: 'variant2',
    testimonials: 'variant1'
  },
  data: {
    slug: 'seo-services-fashion-brands',
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
            { text: "SEO Challenges Fashion Brands ", gradient: false },
            { text: "Face in 2025", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Fashion brands struggle to get organic visibility, attract buyers, and stand out online.",
          painPoints: [
            "Low Google search ranking for brand and product keywords",
            "Difficulty in driving traffic to online stores or catalog pages",
            "Poor website performance affecting SEO",
            "Lack of structured content and optimized metadata",
            "Inconsistent backlinking and authority building"
          ],
          solutionPoints: [
            "Comprehensive on-page and off-page SEO strategies",
            "Keyword-optimized content for fashion product and brand searches",
            "Technical SEO including speed, schema, and mobile optimization",
            "High-quality backlink building and authority growth",
            "Regular SEO audits and reporting for continuous growth"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Boost Your Fashion Brand SEO"
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
              question: 'Can SEO help increase online fashion sales?',
              answer: 'Yes. Targeted SEO drives organic traffic, bringing high-intent buyers to your fashion store.',
              icon: React.createElement(IconShoppingBag, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Do you optimize fashion product pages for Google?',
              answer: 'Absolutely. We create keyword-optimized, user-friendly product pages for maximum visibility.',
              icon: React.createElement(IconChartArcs, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'How long does it take to see SEO results?',
              answer: 'Typically, 3–6 months for noticeable improvements in organic rankings and traffic.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Do you provide SEO reporting?',
              answer: 'Yes. We deliver detailed reports with actionable insights to track growth.',
              icon: React.createElement(IconRocket, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Can you optimize for local fashion searches?',
              answer: 'Yes. Local SEO strategies ensure nearby customers discover your fashion brand.',
              icon: React.createElement(IconGlobe, { size: 22 })
            },
            {
              id: 'faq-6',
              question: 'Do you handle technical SEO?',
              answer: 'Absolutely. We optimize speed, mobile, schema, and other technical aspects for better ranking.',
              icon: React.createElement(IconShieldCheck, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Want ",
      headlineKeywords: [
        "Higher Fashion Brand Visibility?",
        "Rank Top on Google?",
        "Drive Organic Traffic?",
        "Get More Online Buyers?",
        "Dominate Fashion Search Results?"
      ],
      brandLine: [
        { text: "✨ SEO Services for Fashion Brands That Drive Organic Growth", gradient: false }
      ],
      subheadline: "We help fashion brands rank higher on Google, attract more buyers, and increase online sales through strategic SEO.",
      ctaButtons: [
        { icon: React.createElement(IconPhone, { size: 28 }), text: "Book Free SEO Consultation", link: "/contact" },
        { icon: React.createElement(IconArrowRight, { size: 28 }), text: "Start Improving SEO Today", link: "/contact", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "100,000+ Organic Visitors",
          description: "Driven through SEO campaigns"
        },
        {
          icon: React.createElement(IconShoppingBag, { size: 32 }),
          title: "200+ Fashion Brands",
          description: "Scaled with our SEO strategies"
        },
        {
          icon: React.createElement(IconStar, { size: 32 }),
          title: "4.9/5 Client Satisfaction",
          description: "Brands love our SEO services"
        },
        {
          icon: React.createElement(IconGlobe, { size: 32 }),
          title: "Global Reach",
          description: "Fashion brands ranking worldwide"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Digi Aerotech is the ", gradient: false },
        { text: "#1 SEO Partner for Fashion Brands", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconChartArcs, { size: 28 }),
          title: "Data-Driven SEO",
          description: "Every strategy backed by analytics for maximum results."
        },
        {
          icon: React.createElement(IconRocket, { size: 28 }),
          title: "Proven Track Record",
          description: "We’ve helped hundreds of fashion brands increase traffic & sales."
        },
        {
          icon: React.createElement(IconTrendingUp, { size: 28 }),
          title: "Keyword Mastery",
          description: "Targeted keywords for fashion products & brands."
        },
        {
          icon: React.createElement(IconShieldCheck, { size: 28 }),
          title: "Technical SEO Excellence",
          description: "Speed, mobile, and schema optimization for better ranking."
        },
        {
          icon: React.createElement(IconStar, { size: 28 }),
          title: "Content Optimization",
          description: "Engaging, SEO-optimized content that converts."
        },
        {
          icon: React.createElement(IconUsers, { size: 28 }),
          title: "Client-Focused Support",
          description: "Dedicated team to help your brand grow organically."
        }
      ],
      cta: {
        text: "Boost Your Fashion Brand SEO Today",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    process: {
      title: 'Our SEO Process for Fashion Brands',
      subtitle: 'STEP-BY-STEP ORGANIC GROWTH',
      className: 'border-t border-border dark:border-gray-700',
      description: 'From website audit to link-building, our process ensures sustainable traffic, higher ranking, and more sales.',
      steps: [
        {
          id: 1,
          title: 'SEO Audit & Analysis',
          description: 'Analyze website performance, competitors, and opportunities for growth.'
        },
        {
          id: 2,
          title: 'Keyword Research',
          description: 'Identify high-value keywords for products, collections, and brand searches.'
        },
        {
          id: 3,
          title: 'On-Page Optimization',
          description: 'Optimize meta tags, headings, content, images, and internal linking.'
        },
        {
          id: 4,
          title: 'Technical SEO',
          description: 'Improve site speed, mobile responsiveness, schema, and crawlability.'
        },
        {
          id: 5,
          title: 'Content Strategy & Creation',
          description: 'Develop engaging blog posts, product descriptions, and landing pages.'
        },
        {
          id: 6,
          title: 'Link Building & Authority',
          description: 'High-quality backlinks and influencer collaborations to boost domain authority.'
        }
      ]
    },
    testimonials: {
      title: [
        { text: "Fashion Brands Who ", gradient: false },
        { text: "Grew Organically with Us", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      description: 'See how Digi Aerotech helped fashion brands achieve top Google rankings, drive traffic, and increase sales.',
      testimonials: [
        {
          id: '1',
          message: 'Our organic traffic doubled within 4 months thanks to their SEO strategy!',
          highlight: 'traffic doubled',
          stars: 5,
          name: 'Anika Sharma',
          designation: 'Founder',
          company: 'VogueLine'
        },
        {
          id: '2',
          message: 'We now rank on the first page for our top products. SEO really works!',
          highlight: 'first page rankings',
          stars: 5,
          name: 'Rahul Kapoor',
          designation: 'CEO',
          company: 'Chic Street'
        }
      ]
    },
    cta: {
      title: 'Ready to Boost Your Fashion Brand with SEO?',
      subtitle: 'Increase Traffic, Sales, and Online Visibility',
      description: 'Book a free SEO consultation and let Digi Aerotech help your fashion brand dominate search results.'
    }
  }
};
