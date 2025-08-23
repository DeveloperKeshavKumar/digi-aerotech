import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { ServiceIcons } from '@/constants/service-icons';
import { Struggles } from '@/components/homepage/struggles';
import { FaqSection } from '@/components/services/faq-section';
import { 
  IconStethoscope, IconBuildingHospital, IconHeartbeat, IconSearch, 
  IconAd2, IconDeviceLaptop, IconBrandMeta, IconUsersGroup, IconChartBar, 
  IconPhone, IconStarsFilled, IconRocket, IconArrowRight, IconCalendarEvent, 
  IconStar,
  IconHeadset
} from '@tabler/icons-react';
import { Stethoscope, Syringe } from 'lucide-react';

const { IconFreeRights } = ServiceIcons;

export const map: ServiceBusinessMap = {
  service: '360-digital-marketing',
  business: 'doctors-clinics',
  variants: {
    hero: 'variant2',
    whyChooseUs: 'variant1',
    process: 'variant3',
    testimonials: 'variant1'
  },
  data: {
    slug: '360-digital-marketing',
    showSections: {
      hero: true,
      whyChooseUs: true,
      typesOfServices: true,
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
            { text: "The Challenges ", gradient: false },
            { text: "Healthcare Providers Face", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
          ],
          subheadline: "In today’s digital-first world, simply offering great care isn’t enough.",
          painPoints: [
            "Patients searching online but not finding your clinic",
            "Competing with large hospitals dominating ads & SEO",
            "Appointment slots staying empty",
            "Poor online reviews hurting reputation",
            "Website that doesn’t convert into bookings"
          ],
          solutionPoints: [
            "Rank high on Google with Healthcare SEO",
            "Target patients nearby with Local Ads",
            "Attract new patients through Facebook & Instagram",
            "Online reputation management for positive reviews",
            "Conversion-optimized websites & booking funnels"
          ],
          cta: {
            icon: React.createElement(IconArrowRight, { size: 20 }),
            text: "Get More Patients Now"
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
              id: 'doc-1',
              question: 'How do you help doctors attract more patients?',
              answer: 'We optimize Google rankings, run geo-targeted ads, and create high-converting websites that bring in new patient appointments.',
              icon: React.createElement(IconStethoscope, { size: 22 })
            },
            {
              id: 'doc-2',
              question: 'Can you manage hospital reputation online?',
              answer: 'Yes. We manage reviews, patient feedback, and online presence to ensure your hospital builds trust and credibility.',
              icon: React.createElement(IconBuildingHospital, { size: 22 })
            },
            {
              id: 'doc-3',
              question: 'Do you also run campaigns for specific treatments?',
              answer: 'Absolutely. From cardiology to dental care, we create treatment-specific campaigns to attract patients searching for those services.',
              icon: React.createElement(IconHeartbeat, { size: 22 })
            },
            {
              id: 'doc-4',
              question: 'Will you handle appointment bookings online?',
              answer: 'Yes. We integrate appointment booking systems and run campaigns that drive patients directly to your schedule.',
              icon: React.createElement(IconCalendarEvent, { size: 22 })
            },
            {
              id: 'doc-5',
              question: 'Do you promote multi-speciality hospitals differently?',
              answer: 'We create separate campaigns for each speciality—orthopedics, pediatrics, gynecology—so every department attracts the right patients.',
              icon: React.createElement(IconUsersGroup, { size: 22 })
            },
            {
              id: 'doc-6',
              question: 'How do you measure ROI for healthcare marketing?',
              answer: 'We track appointment bookings, calls, website visits, and patient growth metrics to show clear returns on your investment.',
              icon: React.createElement(IconChartBar, { size: 22 })
            }
          ]
        }
      }
    ],
    hero: {
      initial: "Need ",
      headlineKeywords: [
        "360 Digital Marketing for Doctors?",
        "More Patients?",
        "Better Reputation?",
        "Higher Conversions?",
        "Sustainable Growth?"
      ],
      brandLine: [
        { text: "🏥 Empower Your Practice. Attract Patients. Save Lives.", gradient: false }
      ],
      subheadline: "With Digi Aerotech’s 360° Digital Marketing for Doctors, Hospitals & Clinics, you’ll dominate local searches, manage reputation, and grow patient appointments effortlessly.",
      ctaButtons: [
        { icon: React.createElement(IconFreeRights, { size: 30 }), text: "Book Free Consultation", link: "/contact" },
        { icon: React.createElement(IconPhone, { size: 30 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(Syringe, { size: 34 }),
          title: "200%+ Patient Growth",
          description: "Average increase in appointments"
        },
        {
          icon: React.createElement(Stethoscope, { size: 34 }),
          title: "30+ Healthcare Providers",
          description: "Served successfully"
        },
        {
          icon: React.createElement(IconStar, { size: 34 }),
          title: "4.9/5 Rating",
          description: "Client satisfaction"
        },
        {
          icon: React.createElement(IconHeadset, { size: 34 }),
          title: "24/7 Support",
          description: "Always available"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: "Why Choose Digi Aerotech for ", gradient: false },
        { text: "Healthcare Marketing?", gradient: true, gradientClass: "from-blue-500 via-teal-500 to-green-500" }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconSearch, { size: 32 }),
          title: "Healthcare SEO Expertise",
          description: "Rank your practice for terms like “best cardiologist near me” and attract organic patient traffic."
        },
        {
          icon: React.createElement(IconAd2, { size: 32 }),
          title: "Targeted Google Ads",
          description: "Ads designed to bring patients actively searching for doctors, hospitals, and treatments in your area."
        },
        {
          icon: React.createElement(IconBrandMeta, { size: 32 }),
          title: "Social Media Growth",
          description: "Engaging Facebook & Instagram campaigns that build trust and drive appointment bookings."
        },
        {
          icon: React.createElement(IconDeviceLaptop, { size: 32 }),
          title: "Patient-Friendly Websites",
          description: "Fast, mobile-first websites with appointment booking and patient inquiry integrations."
        },
        {
          icon: React.createElement(IconUsersGroup, { size: 32 }),
          title: "Multi-Speciality Campaigns",
          description: "Run unique strategies for each department—pediatrics, dentistry, orthopedics, and more."
        },
        {
          icon: React.createElement(IconHeartbeat, { size: 32 }),
          title: "Reputation & Review Management",
          description: "Boost positive reviews, handle patient concerns, and maintain strong online credibility."
        }
      ],
      cta: {
        text: "Start Growing Your Practice",
        link: "#contact",
        icon: React.createElement(IconRocket, { size: 20 })
      }
    },
    typesOfServices: {
      title: '360° Digital Marketing for Healthcare',
      subtitle: 'SOLUTIONS FOR DOCTORS, HOSPITALS & CLINICS',
      description: 'Tailored services designed for healthcare professionals to attract patients, manage reputation, and scale practices.',
      services: [
        {
          id: 1,
          title: 'Local SEO & Google Maps',
          description: 'Rank for “doctor near me” and appear in top maps searches with strong reviews.',
          icon: React.createElement(IconSearch, { size: 24 })
        },
        {
          id: 2,
          title: 'Paid Ads for Patient Acquisition',
          description: 'Google & Meta ads that target local patients actively looking for your services.',
          icon: React.createElement(IconAd2, { size: 24 })
        },
        {
          id: 3,
          title: 'Reputation Management',
          description: 'Boost 5-star reviews and handle negative ones to build long-term trust.',
          icon: React.createElement(IconHeartbeat, { size: 24 })
        }
      ]
    },
    process: {
      title: 'Our Proven Healthcare Marketing Process',
      subtitle: 'STEP-BY-STEP SYSTEM',
      className: 'border-t border-border dark:border-gray-700',
      description: 'A structured system that consistently attracts patients and builds credibility for doctors and clinics.',
      steps: [
        { id: 1, title: 'Market & Audience Research', description: 'Identify patient demographics and healthcare competition.' },
        { id: 2, title: 'SEO & Content Strategy', description: 'Rank on Google with medical content and local SEO.' },
        { id: 3, title: 'Ad Campaigns', description: 'Run targeted Google and social ads for patient leads.' },
        { id: 4, title: 'Website & Funnel Setup', description: 'Build conversion-optimized booking systems.' },
        { id: 5, title: 'Reputation Management', description: 'Manage reviews and improve trust signals.' },
        { id: 6, title: 'Continuous Optimization', description: 'Refine strategies based on results and scale campaigns.' }
      ]
    },
    testimonials: {
      title: [
        { text: 'Doctors & Clinics Who ', gradient: false },
        { text: 'Grew with Us', gradient: true, gradientClass: "from-blue-500 via-teal-500 to-green-500" }
      ],
      description: 'Real stories from healthcare providers who scaled their practices with Digi Aerotech.',
      testimonials: [
        {
          id: '1',
          message: 'Digi Aerotech helped our clinic triple online patient bookings in just 3 months.',
          highlight: 'triple online patient bookings',
          stars: 5,
          name: 'Dr. Ramesh Verma',
          designation: 'Cardiologist',
          company: 'Verma Heart Clinic'
        },
        {
          id: '2',
          message: 'Their review management & SEO strategies positioned our hospital as the #1 choice in the city.',
          highlight: '#1 choice in the city',
          stars: 5,
          name: 'Dr. Shalini Mehra',
          designation: 'Hospital Director',
          company: 'Sunrise Multispeciality Hospital'
        }
      ]
    },
    cta: {
      title: 'Ready to Attract More Patients & Build Trust?',
      subtitle: 'YOUR GROWTH STARTS HERE',
      description: 'Book a free strategy session with Digi Aerotech and discover how our 360° Digital Marketing can transform your healthcare practice.'
    }
  }
};
