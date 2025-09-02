import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { ServiceIcons } from '@/constants/service-icons';
import { IconAd, IconArrowRight, IconBrandFacebook, IconChartLine, IconClock, IconCurrencyDollar, IconDeviceLaptop, IconEyeDollar, IconGlobe, IconHotelService, IconLifebuoy, IconMapPin, IconPlane, IconSearch, IconSocial, IconStar, IconTicket, IconUsers } from '@tabler/icons-react';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';

const { IconFreeRights, IconPhone, IconStarsFilled, IconRocket } = ServiceIcons;

export const map: ServiceBusinessMap = {
  service: '360-digital-marketing',
  business: 'hotel-resorts',
  variants: {
    hero: 'variant1',
    whyChooseUs: 'variant2',
    process: 'variant3',
  },
  data: {
    slug: '360-digital-marketing',
    showSections: {
      hero: true,
      whyChooseUs: true,
      typesOfServices: true,
      process: true,
      techStack: true,
      testimonials: true,
      cta: true
    },
    customSections: [
      {
        component: Struggles,
        props: {
          title: [
            { text: "The Pain Points ", gradient: false },
            { text: "Hotels Face", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
          ],
          subheadline: "Running a hotel or resort is tough. Digital marketing makes it even harder.",
          painPoints: [
            "Empty rooms even in peak season",
            "Social media with no engagement or conversions",
            "Ads draining budget without direct bookings",
            "No visibility on Google Maps when search \"resorts near me\"",
            "Dependence on OTAs like Booking.com & MakeMyTrip (losing 20–30% commissions)",
          ],
          solutionPoints: [
            " Higher visibility on Google & Maps",
            " Increase in direct website bookings (reduce OTA dependency)",
            " Social media that actually drives reservations",
            " Ads that convert lookers into bookers",
            " Brand presence that builds trust with travelers"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Grow My Bookings Now"
          }
        },
        position: 'beforeWhyChooseUs'
      }, {
        component: FaqSection,
        position: 'afterTestimonials',
        props: {
          faqs: [
            {
              id: 'resort-1',
              question: 'How do you attract more travelers to my hostel or resort?',
              answer: 'We run targeted ads on Google, Instagram, and travel portals to reach tourists actively planning their trips.',
              icon: React.createElement(IconPlane, { size: 22 })
            },
            {
              id: 'resort-2',
              question: 'Can you help improve bookings on platforms like Booking.com & Airbnb?',
              answer: 'Yes. We optimize your listings with high-converting content, reviews, and SEO so you rank higher and get more bookings.',
              icon: React.createElement(IconHotelService, { size: 22 })
            },
            {
              id: 'resort-3',
              question: 'Do you create marketing campaigns for international tourists?',
              answer: 'Absolutely. We target specific geographies with multilingual campaigns to attract global travelers.',
              icon: React.createElement(IconGlobe, { size: 22 })
            },
            {
              id: 'resort-4',
              question: 'How do you manage my property’s online reputation?',
              answer: 'We monitor reviews, respond professionally, and build your reputation as a trusted resort or hostel brand.',
              icon: React.createElement(IconStar, { size: 22 })
            },
            {
              id: 'resort-5',
              question: 'Do you also promote events or activities inside the resort?',
              answer: 'Yes. We market your spa, adventure packages, and events to upsell services and increase per-guest revenue.',
              icon: React.createElement(IconTicket, { size: 22 })
            },
            {
              id: 'resort-6',
              question: 'How do you measure ROI for hospitality marketing?',
              answer: 'We track bookings, occupancy rates, upsells, and repeat stays so you know your growth is sustainable.',
              icon: React.createElement(IconChartLine, { size: 22 })
            }
          ]
        }

      }
    ],
    hero: {
      initial: "Need ",
      headlineKeywords: [
        "360° Digital Marketing for Hotels & Resorts?",
      ],
      brandLine: [
        { text: "🚀 Fill Your Rooms, Not Just Your Website", gradient: false }
      ],
      subheadline: "From Google to Instagram – we put your resort in front of travelers searching right now. More visibility, more bookings, more revenue.",
      ctaButtons: [
        { icon: React.createElement(IconFreeRights, { size: 30 }), text: "Get Free Consultation", link: "/contact" },
        { icon: React.createElement(IconPhone, { size: 30 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconCurrencyDollar, { size: 34 }),
          title: "300%+ Average",
          description: "Leads generated"
        },
        {
          icon: React.createElement(IconHotelService, { size: 34 }),
          title: "40+ Clients",
          description: "Hotel Resorts served"
        },
        {
          icon: React.createElement(IconStarsFilled, { size: 34 }),
          title: "4.9/5 Rating",
          description: "Client satisfaction"
        },
        {
          icon: React.createElement(IconLifebuoy, { size: 34 }),
          title: "24/7 Support",
          description: "Always available"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Our ", gradient: false },
        { text: "360° Digital Marketing Services", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" },
        { text: " for Hotels & Resorts", gradient: false }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconMapPin, { size: 32 }),
          title: "Google My Business (GMB) Optimization",
          description: "Rank higher on Google Maps for “Hotels near [Location]”. Drive direct calls & directions from guests. Weekly posting & review management."
        },
        {
          icon: React.createElement(IconAd, { size: 32 }),
          title: "Google Ads (Search + Display + Hotel Ads)",
          description: "Capture travelers actively searching. Target seasonal travelers & high-value guests. Optimize campaigns for maximum ROI."
        },
        {
          icon: React.createElement(IconBrandFacebook, { size: 32 }),
          title: "Meta Ads (Facebook + Instagram)",
          description: "Showcase your resort with stunning visuals & reels. Target couples, families, and group travelers. Retarget website visitors for more bookings."
        },
        {
          icon: React.createElement(IconSearch, { size: 32 }),
          title: "SEO for Hotels & Resorts",
          description: "Rank for “Best Resorts in [City]” & “Luxury Hotels near me”. Content marketing (blogs, destination guides). Long-term organic traffic growth."
        },
        {
          icon: React.createElement(IconSocial, { size: 32 }),
          title: "Social Media Management",
          description: "Engaging posts, reels & campaigns tailored for hotels. Seasonal offers & festive campaigns. Build a loyal online community."
        },
        {
          icon: React.createElement(IconDeviceLaptop, { size: 32 }),
          title: "Website Development & Optimization",
          description: "High-converting, mobile-friendly websites. Direct booking integration (save OTA commission). SEO-optimized for travel keywords."
        },
      ],
      cta: {
        text: "Get a Free Strategy Session",
        link: "#contact",
        icon: React.createElement(IconArrowRight, { size: 20 })
      }
    },
    typesOfServices: {
      title: 'Our 360 Digital Marketing for Hotel Resorts',
      subtitle: 'HOTEL RESORTS SPECIALIZED SERVICES',
      description: 'Comprehensive 360 digital marketing solutions designed specifically for hotel resorts businesses.',
      services: [
        {
          id: 1,
          title: 'Strategy & Planning',
          description: 'Custom 360 digital marketing strategy development tailored for hotel resorts market requirements.',
          icon: React.createElement(IconStarsFilled, { size: 24 })
        },
        {
          id: 2,
          title: 'Implementation & Execution',
          description: 'Expert implementation of 360 digital marketing campaigns optimized for hotel resorts audience.',
          icon: React.createElement(IconStarsFilled, { size: 24 })
        },
        {
          id: 3,
          title: 'Monitoring & Optimization',
          description: 'Continuous monitoring and optimization to maximize ROI and performance for hotel resorts businesses.',
          icon: React.createElement(IconStarsFilled, { size: 24 })
        }
      ]
    },
    process: {
      title: 'Our 360 Digital Marketing Process for Hotel Resorts',
      subtitle: 'PROVEN METHODOLOGY',
      className: 'border-t border-border dark:border-gray-700',
      description: 'A systematic approach to 360 digital marketing that delivers measurable results for hotel resorts businesses.',
      steps: [
        {
          id: 1,
          title: 'Discovery & Analysis',
          description: 'Comprehensive analysis of your hotel resorts business and market landscape.'
        },
        {
          id: 2,
          title: 'Strategy Development',
          description: 'Custom 360 digital marketing strategy tailored for your specific hotel resorts goals.'
        },
        {
          id: 3,
          title: 'Implementation',
          description: 'Expert execution of 360 digital marketing campaigns with hotel resorts focus.'
        },
        {
          id: 4,
          title: 'Optimization',
          description: 'Continuous refinement and optimization based on hotel resorts market feedback.'
        }
      ]
    },
    techStack: {
      title: 'Our 360 Digital Marketing Technology Stack',
      subtitle: 'ADVANCED TOOLS & PLATFORMS',
      description: 'Industry-leading tools and platforms for 360 digital marketing success.',
      categories: ['Analytics', 'Automation', 'Optimization', 'Reporting'],
      technologies: [
        { id: 1, name: 'Google Analytics', logo: '/tech/icons8-google-analytics-96.png', category: 'Analytics' },
        { id: 2, name: 'HubSpot', logo: '/tech/icons8-hubspot-96.png', category: 'Automation' }
      ]
    },
    cta: {
      title: 'Ready to Transform Your Hotel & Resorts Business?',
      subtitle: 'Stop depending on OTAs. Start filling rooms directly.',
      description: 'With Digi Aerotech’s 360° Digital Marketing for Hotels & Resorts, you get a proven growth system that works.'
    }
  }
};
