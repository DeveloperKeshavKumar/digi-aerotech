import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import { IconPizza, IconCoffee, IconAd, IconChartBar,
  IconStar, IconTrendingUp, IconUsers, IconPhoneCall, IconMail, IconGift, IconBuildingStore
} from '@tabler/icons-react';
import { Utensils } from 'lucide-react';

export const map: ServiceBusinessMap = {
  service: 'leads-generation',
  business: 'restaurants-cafes',
  variants: {
    hero: 'variant1',
    whyChooseUs: 'variant3',
    process: 'variant2',
    testimonials: 'variant1'
  },
  data: {
    slug: 'leads-generation-restaurants-cafes',
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
            { text: "Struggle to Generate Leads", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
          ],
          subheadline: "A great menu alone won’t fill your tables. Without a proper lead generation funnel, restaurants lose repeat business and online visibility.",
          painPoints: [
            "Low number of repeat customers",
            "Poor online booking & reservation rates",
            "No system to collect customer data",
            "Missed opportunities for remarketing",
            "Competitors capturing delivery leads"
          ],
          solutionPoints: [
            "Smart lead funnels for bookings & orders",
            "Customer data capture (emails, phone numbers, WhatsApp)",
            "Automated follow-ups for repeat visits",
            "Exclusive offers & loyalty campaigns",
            "Delivery and dine-in lead nurturing"
          ],
          cta: {
            icon: React.createElement(IconPhoneCall, { size: 20 }),
            text: "Boost My Restaurant Leads"
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
              question: 'How does lead generation work for restaurants?',
              answer: 'We set up systems to capture leads via Google Ads, Facebook, Instagram, website forms, and delivery apps. These leads are nurtured into loyal customers.',
              icon: React.createElement(Utensils, { size: 22 })
            },
            {
              id: 'faq-2',
              question: 'Can you increase online reservations?',
              answer: 'Yes! We create booking funnels that encourage people to reserve tables directly through Google, WhatsApp, or your website.',
              icon: React.createElement(IconBuildingStore, { size: 22 })
            },
            {
              id: 'faq-3',
              question: 'Will this help with repeat customers?',
              answer: 'Absolutely! With remarketing campaigns, loyalty programs, and exclusive discounts, we keep customers coming back.',
              icon: React.createElement(IconGift, { size: 22 })
            },
            {
              id: 'faq-4',
              question: 'Do you also help with delivery orders?',
              answer: 'Yes! We generate delivery leads from ads, SEO, and retargeting campaigns, making sure customers order directly from you instead of third-party apps.',
              icon: React.createElement(IconTrendingUp, { size: 22 })
            },
            {
              id: 'faq-5',
              question: 'How fast can I see results?',
              answer: 'Most restaurants start seeing higher reservations and direct calls within the first 3-4 weeks of implementing our lead generation funnels.',
              icon: React.createElement(IconChartBar, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Turn Hungry Visitors Into ",
      headlineKeywords: [
        "Paying Customers",
        "Repeat Diners",
        "Loyal Members",
        "Direct Orders"
      ],
      brandLine: [
        { text: "🍽 Lead Generation for Restaurants & Cafés", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      subheadline: "We design lead funnels that capture diners' attention, turn searches into calls, and build long-term customer loyalty with automation.",
      ctaButtons: [
        { icon: React.createElement(IconPhoneCall, { size: 28 }), text: "Get More Reservations", link: "/contact" },
        { icon: React.createElement(IconMail, { size: 28 }), text: "Free Lead Gen Audit", link: "/contact", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconTrendingUp, { size: 32 }),
          title: "3X More Reservations",
          description: "with automated booking funnels"
        },
        {
          icon: React.createElement(IconMail, { size: 32 }),
          title: "Lead Capture Rate ↑",
          description: "emails, phone & WhatsApp collected"
        },
        {
          icon: React.createElement(IconGift, { size: 32 }),
          title: "Loyalty Growth",
          description: "repeat diners with exclusive offers"
        },
        {
          icon: React.createElement(IconUsers, { size: 32 }),
          title: "Customer Database",
          description: "build your own list of loyal foodies"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Us for ", gradient: false },
        { text: "Restaurant Lead Generation", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconPhoneCall, { size: 28 }),
          title: "More Reservations & Calls",
          description: "We help restaurants capture calls & bookings from local diners."
        },
        {
          icon: React.createElement(IconMail, { size: 28 }),
          title: "Smart Data Collection",
          description: "We build a customer database from ads, forms, and delivery leads."
        },
        {
          icon: React.createElement(IconGift, { size: 28 }),
          title: "Loyalty & Rewards Funnels",
          description: "Turn first-time diners into repeat customers with exclusive offers."
        },
        {
          icon: React.createElement(IconAd, { size: 28 }),
          title: "Multi-Channel Ads",
          description: "Google, Facebook, and Instagram ads optimized for lead capture."
        },
        {
          icon: React.createElement(IconChartBar, { size: 28 }),
          title: "ROI-Focused",
          description: "We focus on driving measurable leads, not just clicks."
        }
      ],
      cta: {
        text: "Start Generating Leads",
        link: "#contact",
        icon: React.createElement(IconTrendingUp, { size: 20 })
      }
    },
    process: {
      title: 'Our Lead Generation Process for Restaurants & Cafés',
      subtitle: 'FROM CLICKS TO CUSTOMERS',
      className: 'border-t border-border dark:border-gray-700',
      description: 'We build funnels that capture customer intent, convert them into leads, and nurture them into loyal patrons.',
      steps: [
        {
          id: 1,
          title: 'Audience Research',
          description: 'We identify your ideal diners — locals, office-goers, families, or late-night food lovers — and create tailored targeting.'
        },
        {
          id: 2,
          title: 'Lead Funnel Setup',
          description: 'Landing pages, booking forms, WhatsApp integrations, and delivery CTAs are built to capture diner details quickly.'
        },
        {
          id: 3,
          title: 'Multi-Channel Ads',
          description: 'We run targeted ads across Google, Instagram, and Facebook to drive calls, table bookings, and food orders.'
        },
        {
          id: 4,
          title: 'Automation & Nurturing',
          description: 'Email, SMS, and WhatsApp campaigns are set up to follow up with leads, sending reminders and exclusive offers.'
        },
        {
          id: 5,
          title: 'Tracking & Scaling',
          description: 'We monitor reservations, calls, and orders to identify winning funnels and scale campaigns for higher ROI.'
        }
      ]
    },
    testimonials: {
      title: [
        { text: "Restaurants Growing With ", gradient: false },
        { text: "Our Lead Funnels", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-600" }
      ],
      description: 'See how restaurants and cafés attract more bookings, repeat diners, and direct delivery orders through our lead gen system.',
      testimonials: [
        {
          id: '1',
          message: 'Within a month, we built a database of 500+ customers. Now, every new dish launch gets direct orders through WhatsApp blasts!',
          highlight: '500+ Leads',
          stars: 5,
          name: 'Arjun Mehta',
          designation: 'Owner',
          company: 'Masala-e-Magic'
        },
        {
          id: '2',
          message: 'Our table reservations doubled, and repeat customers increased after setting up loyalty lead funnels. Game-changer!',
          highlight: '2X Reservations',
          stars: 5,
          name: 'Sneha Batra',
          designation: 'Manager',
          company: 'The Coffee Mill'
        }
      ]
    },
    cta: {
      title: 'Turn Diners Into Loyal Customers',
      subtitle: 'CAPTURE • NURTURE • GROW',
      description: 'With our restaurant-focused lead generation strategies, you’ll capture hungry customers today and keep them coming back tomorrow.',
    }
  }
};
