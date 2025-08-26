import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import {
  IconBrandInstagram, IconBrandLinkedin, IconBrandTwitter, IconBrandFacebook,
  IconUsers, IconBulb, IconTarget, IconChartLine, IconRocket, IconTrendingUp, IconSparkles
} from '@tabler/icons-react';

export const map: ServiceBusinessMap = {
  service: 'social-media-marketing',
  business: 'startups-entrepreneurs',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant1',
    process: 'variant3',
    testimonials: 'variant2'
  },
  data: {
    slug: 'social-media-marketing-startups-entrepreneurs',
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
            { text: "Why Most Startups Fail at ", gradient: false },
            { text: "Social Media Growth", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "Many startups create content randomly without a strategy, missing out on followers, engagement, and business leads.",
          painPoints: [
            "No structured content strategy",
            "Low engagement and stagnant followers",
            "Difficulty converting followers into customers",
            "Ignoring LinkedIn for B2B visibility",
            "Wasting budget on unoptimized paid campaigns"
          ],
          solutionPoints: [
            "Content calendars aligned with startup goals",
            "Engagement-driven storytelling across platforms",
            "Conversion-focused campaigns to drive sign-ups & sales",
            "Founder branding on LinkedIn & Twitter",
            "Smart ad integration to amplify growth"
          ],
          cta: {
            icon: React.createElement(IconRocket, { size: 20 }),
            text: "Grow My Startup on Social Media"
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
              question: 'Which platforms do you focus on for startups?',
              answer: 'We build startup presence across Instagram, LinkedIn, Twitter, and Facebook, tailoring each to specific growth goals.',
              icon: React.createElement(IconUsers, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Can social media really generate leads for startups?',
              answer: 'Yes! With the right mix of organic content, targeted ads, and LinkedIn outreach, startups can generate consistent high-quality leads.',
              icon: React.createElement(IconChartLine, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Do you also manage founder branding?',
              answer: 'Absolutely. We position founders as thought leaders on LinkedIn & Twitter to attract investors, partners, and customers.',
              icon: React.createElement(IconBulb, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'How do you measure success?',
              answer: 'We track KPIs like followers, engagement rate, CTR, lead conversions, and ROI to ensure measurable results.',
              icon: React.createElement(IconTarget, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'Is paid promotion necessary?',
              answer: 'Not always. We start with organic growth strategies and integrate ads only when they deliver maximum ROI for your startup.',
              icon: React.createElement(IconSparkles, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Turn Your Startup’s ",
      headlineKeywords: [
        "Social Media into Sales",
        "Followers into Customers",
        "LinkedIn into Investor Leads",
        "Instagram into Growth"
      ],
      brandLine: [
        { text: "🚀 Social Media Marketing Tailored for Startups & Entrepreneurs", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      subheadline: "We help startups grow brand awareness, build communities, and convert social media into real business growth.",
      ctaButtons: [
        { icon: React.createElement(IconRocket, { size: 28 }), text: "Boost My Startup", link: "/contact" },
        { icon: React.createElement(IconTrendingUp, { size: 28 }), text: "Scale My Social Media", link: "/contact", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconBrandInstagram, { size: 32 }),
          title: "50K+ Followers",
          description: "organically built for startups"
        },
        {
          icon: React.createElement(IconBrandLinkedin, { size: 32 }),
          title: "Investor Leads",
          description: "via LinkedIn positioning"
        },
        {
          icon: React.createElement(IconBrandTwitter, { size: 32 }),
          title: "Viral Engagement",
          description: "with trending campaigns"
        },
        {
          icon: React.createElement(IconBrandFacebook, { size: 32 }),
          title: "Global Reach",
          description: "through smart paid ads"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Us for ", gradient: false },
        { text: "Startup Social Media Marketing", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconBrandInstagram, { size: 28 }),
          title: "Instagram Growth",
          description: "Engaging visuals & reels that convert followers into customers."
        },
        {
          icon: React.createElement(IconBrandLinkedin, { size: 28 }),
          title: "LinkedIn Authority",
          description: "Position founders as thought leaders & attract investors."
        },
        {
          icon: React.createElement(IconBrandTwitter, { size: 28 }),
          title: "Twitter Branding",
          description: "Leverage trends & threads for real-time startup visibility."
        },
        {
          icon: React.createElement(IconBulb, { size: 28 }),
          title: "Creative Strategy",
          description: "Story-driven campaigns that align with startup goals."
        },
        {
          icon: React.createElement(IconChartLine, { size: 28 }),
          title: "ROI-Driven Ads",
          description: "Integrating smart paid promotions to amplify reach."
        },
        {
          icon: React.createElement(IconSparkles, { size: 28 }),
          title: "Community Building",
          description: "Turn audiences into loyal startup advocates."
        }
      ],
      cta: {
        text: "Grow My Startup on Social Media",
        link: "#contact",
        icon: React.createElement(IconRocket, { size: 20 })
      }
    },
    process: {
      title: 'Our Social Media Marketing Process for Startups',
      subtitle: 'FROM FOLLOWERS TO FUNDING',
      className: 'border-t border-border dark:border-gray-700',
      description: 'We combine organic storytelling, founder branding, community building, and paid growth to make your startup visible and scalable.',
      steps: [
        {
          id: 1,
          title: 'Social Audit',
          description: 'We analyze your current presence, competitors, and audience behavior to create a data-driven strategy.'
        },
        {
          id: 2,
          title: 'Content Calendar',
          description: 'We design engaging monthly content aligned with your startup’s milestones, launches, and goals.'
        },
        {
          id: 3,
          title: 'Creative Production',
          description: 'From Instagram reels to LinkedIn carousels, we create scroll-stopping content that inspires and converts.'
        },
        {
          id: 4,
          title: 'Community Building',
          description: 'We engage followers via comments, polls, and DMs, building trust and loyalty around your brand.'
        },
        {
          id: 5,
          title: 'Founder Branding',
          description: 'We position startup founders as thought leaders on LinkedIn & Twitter to attract investors and partnerships.'
        },
        {
          id: 6,
          title: 'Scaling & Ads',
          description: 'We integrate smart ad campaigns to amplify reach, scale engagement, and generate qualified leads.'
        }
      ]
    },
    testimonials: {
      title: [
        { text: "Startups Scaling with ", gradient: false },
        { text: "Social Media Marketing", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      description: 'Here’s how entrepreneurs built massive online visibility and leads with our startup-focused SMM.',
      testimonials: [
        {
          id: '1',
          message: 'Our Instagram reels went viral and brought us 20K+ organic followers in just 3 months!',
          highlight: '20K+ Followers',
          stars: 5,
          name: 'Ritika Malhotra',
          designation: 'Founder',
          company: 'EcoGlow'
        },
        {
          id: '2',
          message: 'Their LinkedIn strategy positioned me as a thought leader and got us multiple investor meetings.',
          highlight: 'Investor Outreach',
          stars: 5,
          name: 'Arjun Kapoor',
          designation: 'CEO',
          company: 'TechNova'
        }
      ]
    },
    cta: {
      title: 'Turn Your Startup’s Social Media into Sales & Funding',
      subtitle: 'BUILD COMMUNITY + SCALE GROWTH',
      description: 'We help startups grow brand visibility, attract customers, and build investor trust with social media marketing tailored for entrepreneurs.'
    }
  }
};
